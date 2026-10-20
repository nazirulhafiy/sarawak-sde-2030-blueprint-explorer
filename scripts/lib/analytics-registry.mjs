/** Load and validate data/analytics.json (fleet kit shape v1). */

import { readFileSync } from "node:fs";
import { resolve } from "node:path";

const ROOT = resolve(import.meta.dirname, "../..");
export const DEFAULT_REGISTRY_PATH = resolve(ROOT, "data/analytics.json");

const GA4_ID_RE = /^G-[A-Z0-9]+$/;
const CF_TOKEN_RE = /^[a-f0-9]{32}$/;
const HOST_RE = /^[a-z0-9.-]+$/;
const COOKIE_RE = /^[A-Za-z0-9_-]+$/;

export const LOADER_ATTR = "data-sn-analytics-loader";
export const ANALYTICS_LOADER_PUBLIC_PATH = "/analytics-loader.js";
export const INTERNAL_COOKIE_MAX_AGE_SECONDS = 365 * 24 * 60 * 60;
export const CLOUDFLARE_BEACON_SRC = "https://static.cloudflareinsights.com/beacon.min.js";

function fail(message) {
  throw new Error(`analytics registry: ${message}`);
}

/**
 * @param {unknown} payload
 * @param {string} [label]
 */
export function validateRegistry(payload, label = "analytics.json") {
  if (!payload || typeof payload !== "object" || Array.isArray(payload)) {
    fail(`${label} must be a JSON object`);
  }

  const record = payload;
  if (record.version !== 1) {
    fail(`${label} version must be 1, got ${String(record.version)}`);
  }

  const internalCookie = record.internal_cookie;
  if (typeof internalCookie !== "string" || !COOKIE_RE.test(internalCookie)) {
    fail(`${label} internal_cookie must be a simple cookie name`);
  }

  if (typeof record.spa !== "boolean") {
    fail(`${label} spa must be a boolean`);
  }

  const hosts = record.hosts;
  if (!hosts || typeof hosts !== "object" || Array.isArray(hosts)) {
    fail(`${label} hosts must be a non-empty object`);
  }

  const hostEntries = Object.entries(hosts);
  if (hostEntries.length === 0) {
    fail(`${label} hosts must be a non-empty object`);
  }

  const seenHosts = new Set();
  /** @type {Record<string, HostEntry>} */
  const parsedHosts = {};

  for (const [primary, entry] of hostEntries) {
    if (typeof primary !== "string" || !HOST_RE.test(primary)) {
      fail(`invalid primary host ${JSON.stringify(primary)}`);
    }
    if (seenHosts.has(primary)) {
      fail(`duplicate host ${JSON.stringify(primary)}`);
    }
    seenHosts.add(primary);

    if (!entry || typeof entry !== "object" || Array.isArray(entry)) {
      fail(`${primary} entry must be an object`);
    }

    const ga4 = entry.ga4_measurement_id;
    if (typeof ga4 !== "string" || !GA4_ID_RE.test(ga4)) {
      fail(`${primary} ga4_measurement_id must look like G-XXXXXXXX`);
    }

    const token = entry.cf_beacon_token;
    if (typeof token !== "string" || !CF_TOKEN_RE.test(token)) {
      fail(`${primary} cf_beacon_token must be a 32-char hex token`);
    }

    const aliases = entry.aliases ?? [];
    if (!Array.isArray(aliases)) {
      fail(`${primary} aliases must be a list`);
    }

    for (const alias of aliases) {
      if (typeof alias !== "string" || !HOST_RE.test(alias)) {
        fail(`${primary} has invalid alias ${JSON.stringify(alias)}`);
      }
      if (seenHosts.has(alias) || alias === primary) {
        fail(`duplicate host ${JSON.stringify(alias)}`);
      }
      seenHosts.add(alias);
    }

    const legacy = entry.legacy_internal_cookies ?? [];
    if (!Array.isArray(legacy)) {
      fail(`${primary} legacy_internal_cookies must be a list`);
    }
    for (const name of legacy) {
      if (typeof name !== "string" || !COOKIE_RE.test(name)) {
        fail(`${primary} has invalid legacy cookie ${JSON.stringify(name)}`);
      }
      if (name === internalCookie) {
        fail(`${primary} legacy cookie must not equal internal_cookie`);
      }
    }

    parsedHosts[primary] = {
      primary,
      ga4_measurement_id: ga4,
      cf_beacon_token: token,
      aliases,
      legacy_internal_cookies: legacy,
    };
  }

  return new AnalyticsRegistry({
    version: 1,
    internal_cookie: internalCookie,
    spa: record.spa,
    hosts: parsedHosts,
  });
}

/**
 * @typedef {{
 *   primary: string;
 *   ga4_measurement_id: string;
 *   cf_beacon_token: string;
 *   aliases: string[];
 *   legacy_internal_cookies: string[];
 * }} HostEntry
 */

export class AnalyticsRegistry {
  /**
   * @param {{
   *   version: number;
   *   internal_cookie: string;
   *   spa: boolean;
   *   hosts: Record<string, HostEntry>;
   * }} options
   */
  constructor({ version, internal_cookie, spa, hosts }) {
    this.version = version;
    this.internal_cookie = internal_cookie;
    this.spa = spa;
    this.hosts = hosts;
  }

  /** @returns {string[]} */
  get hostnames() {
    const seen = [];
    for (const entry of Object.values(this.hosts)) {
      for (const name of [entry.primary, ...entry.aliases]) {
        if (!seen.includes(name)) {
          seen.push(name);
        }
      }
    }
    return seen;
  }

  /** @returns {string[]} */
  get legacy_internal_cookies() {
    const seen = [];
    for (const entry of Object.values(this.hosts)) {
      for (const name of entry.legacy_internal_cookies) {
        if (!seen.includes(name)) {
          seen.push(name);
        }
      }
    }
    return seen;
  }

  /** @returns {string[]} */
  get honour_cookies() {
    const seen = [];
    for (const name of [this.internal_cookie, ...this.legacy_internal_cookies]) {
      if (!seen.includes(name)) {
        seen.push(name);
      }
    }
    return seen;
  }

  /** @returns {string} */
  primaryGa4Id() {
    const first = Object.values(this.hosts)[0];
    return first.ga4_measurement_id;
  }

  /** @returns {string} */
  primaryCfToken() {
    const first = Object.values(this.hosts)[0];
    return first.cf_beacon_token;
  }

  /** @returns {Set<string>} */
  ga4Ids() {
    return new Set(
      Object.values(this.hosts).map((entry) => entry.ga4_measurement_id)
    );
  }

  /** @returns {Set<string>} */
  cfTokens() {
    return new Set(
      Object.values(this.hosts).map((entry) => entry.cf_beacon_token)
    );
  }
}

/**
 * @param {string} [path]
 * @returns {AnalyticsRegistry}
 */
export function loadRegistry(path = DEFAULT_REGISTRY_PATH) {
  let raw;
  try {
    raw = readFileSync(path, "utf8");
  } catch (error) {
    if (error && typeof error === "object" && "code" in error && error.code === "ENOENT") {
      fail(`missing ${path}`);
    }
    throw error;
  }

  let payload;
  try {
    payload = JSON.parse(raw);
  } catch (error) {
    fail(`invalid JSON in ${path}: ${error instanceof Error ? error.message : String(error)}`);
  }

  return validateRegistry(payload, path.split("/").pop() ?? "analytics.json");
}
