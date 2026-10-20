/** Emit public/analytics-loader.js from the typed analytics registry. */

import {
  CLOUDFLARE_BEACON_SRC,
  INTERNAL_COOKIE_MAX_AGE_SECONDS,
} from "./analytics-registry.mjs";

/**
 * @param {import("./analytics-registry.mjs").AnalyticsRegistry} registry
 * @returns {string}
 */
export function renderAnalyticsLoaderBody(registry) {
  const measurementId = registry.primaryGa4Id();
  const cookieName = registry.internal_cookie;
  const cfToken = registry.primaryCfToken();
  const spa = registry.spa;
  const productionHosts = registry.hostnames;
  const honourCookies = registry.honour_cookies;

  const hostsObject = productionHosts
    .map((host) => `    "${host.replace(/\\/g, "\\\\").replace(/"/g, '\\"')}": 1`)
    .join(",\n");

  const honourList = honourCookies
    .map((name) => JSON.stringify(name))
    .join(", ");

  const beaconJson = JSON.stringify({ token: cfToken, spa });

  return `/* Generated from data/analytics.json — do not edit. Run: node scripts/sync-analytics-loader.mjs */
(function () {
  if (typeof window === "undefined" || typeof document === "undefined") {
    return;
  }
  var MEASUREMENT_ID = ${JSON.stringify(measurementId)};
  var C = ${JSON.stringify(cookieName)};
  var L = [${honourList}];
  var COOKIE_MAX_AGE = ${INTERNAL_COOKIE_MAX_AGE_SECONDS};
  var PRODUCTION_HOSTS = {
${hostsObject}
  };

  function readCookie(name) {
    var escaped = name.replace(/[.$?*|{}()[\\]\\\\/+^]/g, "\\\\$&");
    var match = document.cookie.match(new RegExp("(?:^|; )" + escaped + "=([^;]*)"));
    return match ? decodeURIComponent(match[1]) : "";
  }

  function writeCookie(name, value, maxAge) {
    var secure = location.protocol === "https:" ? "; Secure" : "";
    document.cookie =
      name +
      "=" +
      encodeURIComponent(value) +
      "; Path=/; Max-Age=" +
      maxAge +
      "; SameSite=Lax" +
      secure;
  }

  function clearCookie(name) {
    document.cookie = name + "=; Path=/; Max-Age=0; SameSite=Lax";
  }

  function syncInternalFromQuery() {
    try {
      var params = new URLSearchParams(location.search);
      if (!params.has("internal")) {
        return;
      }
      var flag = params.get("internal");
      if (flag === "1" || flag === "true") {
        writeCookie(C, "1", COOKIE_MAX_AGE);
      } else if (flag === "0" || flag === "false") {
        for (var i = 0; i < L.length; i++) {
          clearCookie(L[i]);
        }
      }
    } catch {
      /* Query or cookie APIs unavailable; skip internal marking. */
    }
  }

  function isInternalTraffic() {
    for (var j = 0; j < L.length; j++) {
      if (readCookie(L[j]) === "1") {
        return true;
      }
    }
    return false;
  }

  function isProductionHost() {
    return PRODUCTION_HOSTS[location.hostname] === 1;
  }

  function loadGoogleAnalytics() {
    if (!isProductionHost()) {
      return;
    }

    window.dataLayer = window.dataLayer || [];
    function gtag() {
      window.dataLayer.push(arguments);
    }
    window.gtag = gtag;
    gtag("js", new Date());

    var config = {};
    if (isInternalTraffic()) {
      config.traffic_type = "internal";
    }
    gtag("config", MEASUREMENT_ID, config);

    var script = document.createElement("script");
    script.async = true;
    script.src = "https://www.googletagmanager.com/gtag/js?id=" + MEASUREMENT_ID;
    document.head.appendChild(script);
  }

  function loadCloudflareWebAnalytics() {
    if (isInternalTraffic()) {
      return;
    }

    function inject() {
      var script = document.createElement("script");
      script.type = "module";
      script.src = ${JSON.stringify(CLOUDFLARE_BEACON_SRC)};
      script.setAttribute("data-cf-beacon", ${JSON.stringify(beaconJson)});
      document.body.appendChild(script);
    }

    if (document.body) {
      inject();
    } else {
      document.addEventListener("DOMContentLoaded", inject);
    }
  }

  syncInternalFromQuery();
  loadGoogleAnalytics();
  loadCloudflareWebAnalytics();
})();
`;
}
