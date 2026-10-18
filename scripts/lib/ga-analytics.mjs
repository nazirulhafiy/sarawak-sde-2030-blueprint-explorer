/** Shared GA4 behaviour constants and helpers (validated by scripts/validate-analytics.mjs). */

export const GA_MEASUREMENT_ID = "G-B1HCKG6RX6";

export const INTERNAL_COOKIE_NAME = "sde2030_ga_internal";

/** One year in seconds. */
export const INTERNAL_COOKIE_MAX_AGE_SECONDS = 365 * 24 * 60 * 60;

export const PRODUCTION_HOSTNAMES = new Set(["sde2030.com", "www.sde2030.com"]);

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
