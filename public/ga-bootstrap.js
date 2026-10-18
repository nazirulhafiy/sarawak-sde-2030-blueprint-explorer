(function () {
  var MEASUREMENT_ID = "G-B1HCKG6RX6";
  var COOKIE_NAME = "sde2030_ga_internal";
  var COOKIE_MAX_AGE = 31536000;
  var PRODUCTION_HOSTS = { "sde2030.com": 1, "www.sde2030.com": 1 };

  function readCookie(name) {
    var escaped = name.replace(/[.$?*|{}()[\]\\/+^]/g, "\\$&");
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
        writeCookie(COOKIE_NAME, "1", COOKIE_MAX_AGE);
      } else if (flag === "0" || flag === "false") {
        clearCookie(COOKIE_NAME);
      }
    } catch {
      /* Query or cookie APIs unavailable; skip internal marking. */
    }
  }

  function isInternalTraffic() {
    return readCookie(COOKIE_NAME) === "1";
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

  syncInternalFromQuery();
  loadGoogleAnalytics();
})();
