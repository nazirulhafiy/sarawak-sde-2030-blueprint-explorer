/** Shared GA4 behaviour helpers (validated by scripts/check-analytics.mjs). */

import { loadRegistry } from "./analytics-registry.mjs";

const registry = loadRegistry();

export const GA_MEASUREMENT_ID = registry.primaryGa4Id();
export const INTERNAL_COOKIE_NAME = registry.internal_cookie;
export const INTERNAL_COOKIE_MAX_AGE_SECONDS = 365 * 24 * 60 * 60;
export const PRODUCTION_HOSTNAMES = new Set(registry.hostnames);
export const CLOUDFLARE_BEACON_SRC = "https://static.cloudflareinsights.com/beacon.min.js";

export function isGaProductionHost(hostname) {
  return PRODUCTION_HOSTNAMES.has(hostname);
}

/**
 * @param {string | null | undefined} internalParam Value of the `internal` query param.
 * @returns {"set" | "clear" | null}
 */
export function resolveInternalTrafficFromQuery(internalParam) {
  if (internalParam === "1" || internalParam === "true") {
    return "set";
  }
  if (internalParam === "0" || internalParam === "false") {
    return "clear";
  }
  return null;
}

/**
 * @param {boolean} isInternalTraffic
 * @returns {Record<string, string>}
 */
export function buildGtagConfig(isInternalTraffic) {
  if (!isInternalTraffic) {
    return {};
  }
  return { traffic_type: "internal" };
}

/**
 * Cloudflare Web Analytics must not load for internal / QA traffic.
 * @param {boolean} isInternalTraffic
 */
export function shouldLoadCloudflareBeacon(isInternalTraffic) {
  return !isInternalTraffic;
}
