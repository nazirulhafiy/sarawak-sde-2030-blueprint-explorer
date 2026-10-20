#!/usr/bin/env node
/** Fail when site title/tagline/description/about lead are hand-typed outside data/site.json. */

import { readFile, readdir } from "node:fs/promises";
import { resolve, relative } from "node:path";

const ROOT = resolve(".");
const SITE_JSON = resolve("data/site.json");

const SKIP_DIR_NAMES = new Set([
  ".git",
  "dist",
  "node_modules",
  "__pycache__",
  ".cursor",
]);

const SKIP_SUFFIXES = new Set([
  ".png",
  ".jpg",
  ".jpeg",
  ".gif",
  ".webp",
  ".ico",
  ".woff",
  ".woff2",
  ".ttf",
  ".otf",
  ".pdf",
  ".pyc",
]);

const TEXT_SUFFIXES = new Set([
  ".py",
  ".md",
  ".json",
  ".html",
  ".css",
  ".js",
  ".mjs",
  ".jsx",
  ".txt",
  ".yml",
  ".yaml",
  ".svg",
  ".toml",
  ".cfg",
  ".ini",
  "",
]);

const SKIP_FILES = new Set([
  "scripts/validate-site-copy.mjs",
  "src/siteCopy.js",
]);

async function loadCopy() {
  const payload = JSON.parse(await readFile(SITE_JSON, "utf8"));
  const required = ["title", "tagline", "description", "about_lead"];
  const missing = required.filter(
    (key) => typeof payload[key] !== "string" || !payload[key].trim()
  );
  if (missing.length) {
    throw new Error(`data/site.json missing fields: ${missing.join(", ")}`);
  }
  return Object.fromEntries(required.map((key) => [key, payload[key].trim()]));
}

async function iterSourceFiles() {
  const files = [];

  async function walk(dir) {
    const entries = await readdir(dir, { withFileTypes: true });
    for (const entry of entries) {
      const fullPath = resolve(dir, entry.name);
      const rel = relative(ROOT, fullPath).replaceAll("\\", "/");
      if (entry.isDirectory()) {
        if (SKIP_DIR_NAMES.has(entry.name)) continue;
        await walk(fullPath);
        continue;
      }
      if (rel === "data/site.json") continue;
      if (SKIP_FILES.has(rel)) continue;
      const suffix = entry.name.includes(".")
        ? entry.name.slice(entry.name.lastIndexOf(".")).toLowerCase()
        : "";
      if (SKIP_SUFFIXES.has(suffix)) continue;
      if (
        !TEXT_SUFFIXES.has(suffix) &&
        !["CNAME", "Makefile", "Dockerfile", "AGENTS.md"].includes(entry.name)
      ) {
        try {
          await readFile(fullPath, "utf8");
        } catch {
          continue;
        }
      }
      files.push(fullPath);
    }
  }

  await walk(ROOT);
  return files.sort();
}

function titlePattern(title) {
  const escaped = title.replace(/[.*+?^${}()|[\]\\]/g, "\\$&");
  return new RegExp(`(?<![A-Za-z0-9.-])${escaped}(?![A-Za-z0-9.-])`);
}

function findHandTyped(rel, text, copy) {
  const hits = [];
  const checks = [
    ["title", titlePattern(copy.title)],
    ["tagline", new RegExp(copy.tagline.replace(/[.*+?^${}()|[\]\\]/g, "\\$&"))],
    ["description", new RegExp(copy.description.replace(/[.*+?^${}()|[\]\\]/g, "\\$&"))],
  ];
  if (
    copy.about_lead !== copy.tagline &&
    copy.about_lead !== copy.description
  ) {
    checks.push([
      "about_lead",
      new RegExp(copy.about_lead.replace(/[.*+?^${}()|[\]\\]/g, "\\$&")),
    ]);
  }

  const lines = text.split("\n");
  for (let lineNo = 0; lineNo < lines.length; lineNo += 1) {
    const line = lines[lineNo];
    for (const [label, pattern] of checks) {
      if (pattern.test(line)) {
        hits.push(`${rel}:${lineNo + 1}: hand-typed ${label}: ${line.trim()}`);
      }
    }
  }
  return hits;
}

const copy = await loadCopy();
const violations = [];

for (const path of await iterSourceFiles()) {
  const rel = relative(ROOT, path).replaceAll("\\", "/");
  let text;
  try {
    text = await readFile(path, "utf8");
  } catch {
    continue;
  }
  violations.push(...findHandTyped(rel, text, copy));
}

if (violations.length) {
  const sample = violations.slice(0, 40).join("\n");
  const more =
    violations.length > 40
      ? `\n... and ${violations.length - 40} more`
      : "";
  console.error(
    "Site title/tagline/description/about lead must live only in data/site.json.\n" +
      `Found ${violations.length} hand-typed occurrence(s):\n${sample}${more}`
  );
  process.exit(1);
}

console.log("Site copy check passed (canonical wording only in data/site.json).");
