#!/usr/bin/env node
/** Fail if dist HTML analytics loaders drift from data/analytics.json. */

import { readFile, readdir } from "node:fs/promises";
import { join, resolve } from "node:path";

import {
  LOADER_ATTR,
  loadRegistry,
} from "./lib/analytics-registry.mjs";

const GA4_RE = /\bG-[A-Z0-9]+\b/g;
const CF_TOKEN_RE = /\b[a-f0-9]{32}\b/g;
const PRIMARY_COOKIE_RE = /(?:\bvar\s+C|\bC)\s*=\s*(["'])([A-Za-z0-9_-]+)\1/;
const LEGACY_LIST_RE = /\bL\s*=\s*\[(.*?)\]/s;
const QUOTED_NAME_RE = /(["'])([A-Za-z0-9_-]+)\1/g;
const STRAY_COOKIE_RE =
  /document\.cookie\s*=\s*(["'])([A-Za-z0-9_-]+)\1|(["'])([A-Za-z0-9_-]+)\3\s*\+\s*['"]=1['"]|indexOf\(\s*(["'])([A-Za-z0-9_-]+)\5\s*\+\s*['"]=1['"]\)/g;
const SPA_TRUE_RE =
  /["']spa["']\s*:\s*true|\\"spa\\":true|\bspa\s*:\s*true\b|\bspa\s*:\s*!0/;
const SPA_FALSE_RE =
  /["']spa["']\s*:\s*false|\\"spa\\":false|\bspa\s*:\s*false\b|\bspa\s*:\s*!1/;
const LOADER_TAG_RE = new RegExp(
  `<script[^>]*\\b${LOADER_ATTR.replace(/[.*+?^${}()|[\]\\]/g, "\\$&")}\\b[^>]*>`,
  "gi"
);
const SRC_ATTR_RE = /\bsrc\s*=\s*(["'])([^"']+)\1/i;

/**
 * @param {string} distDir
 * @returns {Promise<string[]>}
 */
async function listHtmlPages(distDir) {
  const pages = [];

  async function walk(dir) {
    const entries = await readdir(dir, { withFileTypes: true });
    for (const entry of entries) {
      const fullPath = join(dir, entry.name);
      if (entry.isFile() && entry.name.endsWith(".html")) {
        pages.push(fullPath);
      } else if (entry.isDirectory()) {
        await walk(fullPath);
      }
    }
  }

  await walk(distDir);
  pages.sort();
  if (pages.length === 0) {
    throw new Error(`no HTML pages under ${distDir}`);
  }
  return pages;
}

/**
 * @param {string} html
 * @param {string} distDir
 * @param {string} rel
 * @returns {Promise<string>}
 */
async function collectLoaderSources(html, distDir, rel) {
  const blocks = [];
  const tags = [...html.matchAll(LOADER_TAG_RE)];

  for (const tag of tags) {
    const tagHtml = tag[0];
    const inlineMatch = html.slice(tag.index).match(
      new RegExp(`${tagHtml.replace(/[.*+?^${}()|[\]\\]/g, "\\$&")}([\\s\\S]*?)<\\/script>`, "i")
    );
    if (inlineMatch && inlineMatch[1].trim()) {
      blocks.push(inlineMatch[1]);
      continue;
    }

    const srcMatch = SRC_ATTR_RE.exec(tagHtml);
    if (!srcMatch) {
      continue;
    }
    const srcPath = srcMatch[2].startsWith("/") ? srcMatch[2].slice(1) : srcMatch[2];
    const loaderPath = resolve(distDir, srcPath);
    try {
      blocks.push(await readFile(loaderPath, "utf8"));
    } catch {
      throw new Error(`${rel}: could not read analytics loader at ${srcPath}`);
    }
  }

  return blocks.join("\n");
}

/**
 * @param {string} path
 * @param {import("./lib/analytics-registry.mjs").AnalyticsRegistry} registry
 * @param {string} distDir
 * @returns {Promise<string[]>}
 */
export async function checkPage(path, registry, distDir) {
  const text = await readFile(path, "utf8");
  const rel = path.startsWith(distDir) ? path.slice(distDir.length + 1) : path;
  const errors = [];

  const loaderCount = (text.match(new RegExp(LOADER_ATTR, "g")) ?? []).length;
  if (loaderCount === 0) {
    errors.push(`${rel}: zero analytics loaders (missing ${LOADER_ATTR})`);
  } else if (loaderCount !== 1) {
    errors.push(
      `${rel}: ${loaderCount} analytics loaders (want exactly one ${LOADER_ATTR})`
    );
  }

  const loaderSource = await collectLoaderSources(text, distDir, rel).catch((error) => {
    errors.push(error instanceof Error ? error.message : String(error));
    return "";
  });

  const scanText = `${text}\n${loaderSource}`;
  const allowedGa = registry.ga4Ids();
  const allowedTokens = registry.cfTokens();
  const allowedCookies = new Set(registry.honour_cookies);

  for (const mid of [...new Set(scanText.match(GA4_RE) ?? [])]) {
    if (!allowedGa.has(mid)) {
      errors.push(`${rel}: GA4 id ${JSON.stringify(mid)} not in data/analytics.json`);
    }
  }

  if (
    scanText.includes("cloudflareinsights.com/beacon") ||
    scanText.includes("data-cf-beacon")
  ) {
    for (const token of [...new Set(scanText.match(CF_TOKEN_RE) ?? [])]) {
      if (!allowedTokens.has(token)) {
        errors.push(
          `${rel}: CF beacon token ${JSON.stringify(token)} not in data/analytics.json`
        );
      }
    }
  }

  const foundCookies = new Set();
  const primaryMatch = PRIMARY_COOKIE_RE.exec(loaderSource);
  if (primaryMatch) {
    foundCookies.add(primaryMatch[2]);
  }
  const listMatch = LEGACY_LIST_RE.exec(loaderSource);
  if (listMatch) {
    for (const quoted of listMatch[1].matchAll(QUOTED_NAME_RE)) {
      foundCookies.add(quoted[2]);
    }
  }

  if (
    scanText.includes("traffic_type") ||
    scanText.includes("cloudflareinsights.com/beacon") ||
    scanText.includes(LOADER_ATTR)
  ) {
    for (const match of scanText.matchAll(STRAY_COOKIE_RE)) {
      const name = match[2] || match[4] || match[6];
      if (name) {
        foundCookies.add(name);
      }
    }
  }

  for (const name of [...foundCookies].sort()) {
    if (!allowedCookies.has(name)) {
      errors.push(
        `${rel}: cookie name ${JSON.stringify(name)} is not registry internal_cookie ` +
          `(${JSON.stringify(registry.internal_cookie)}) or legacy_internal_cookies ` +
          `${JSON.stringify(registry.legacy_internal_cookies)}`
      );
    }
  }

  const hasSpaTrue = SPA_TRUE_RE.test(scanText);
  const hasSpaFalse = SPA_FALSE_RE.test(scanText);
  if (
    scanText.includes("cloudflareinsights.com/beacon") ||
    scanText.includes("data-cf-beacon")
  ) {
    if (registry.spa && !hasSpaTrue) {
      errors.push(`${rel}: registry spa is true but CF beacon config lacks spa:true`);
    }
    if (!registry.spa && hasSpaTrue) {
      errors.push(`${rel}: registry spa is false but CF beacon sets spa:true (drift)`);
    }
    if (!registry.spa && hasSpaFalse) {
      // explicit false is fine
    }
  }

  return errors;
}

/**
 * @param {{ dist?: string; registryPath?: string }} [options]
 * @returns {Promise<number>}
 */
export async function runAnalyticsDistCheck(options = {}) {
  const distDir = resolve(options.dist ?? "dist");
  const registry = loadRegistry(options.registryPath);

  let pages;
  try {
    pages = await listHtmlPages(distDir);
  } catch (error) {
    console.error(`FAIL: ${error instanceof Error ? error.message : String(error)}`);
    return 1;
  }

  const errors = [];
  for (const page of pages) {
    errors.push(...(await checkPage(page, registry, distDir)));
  }

  if (errors.length > 0) {
    console.error("Analytics dist check FAILED:");
    for (const err of errors) {
      console.error(`  ${err}`);
    }
    return 1;
  }

  console.log(
    `Analytics dist check OK: ${pages.length} page(s), version=${registry.version}, ` +
      `cookie=${JSON.stringify(registry.internal_cookie)}, spa=${registry.spa}, ` +
      `ga4=${JSON.stringify([...registry.ga4Ids()].sort())}, ` +
      `hosts=${JSON.stringify(Object.keys(registry.hosts))}, ` +
      `legacy_internal_cookies=${JSON.stringify(registry.legacy_internal_cookies)}`
  );
  return 0;
}
