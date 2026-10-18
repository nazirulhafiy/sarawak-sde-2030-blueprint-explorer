#!/usr/bin/env node
import { readFile } from "node:fs/promises";
import { resolve } from "node:path";

import {
  CLOUDFLARE_BEACON_SRC,
  GA_MEASUREMENT_ID,
  INTERNAL_COOKIE_NAME,
  buildGtagConfig,
  isGaProductionHost,
  resolveInternalTrafficFromQuery,
  shouldLoadCloudflareBeacon,
} from "./lib/ga-analytics.mjs";

const errors = [];

function assert(condition, message) {
  if (!condition) {
    errors.push(message);
  }
}

function runUnitChecks() {
  assert(isGaProductionHost("sde2030.com"), "sde2030.com must be a GA production host.");
  assert(isGaProductionHost("www.sde2030.com"), "www.sde2030.com must be a GA production host.");
  assert(!isGaProductionHost("preview.sde2030.com"), "preview host must not load GA.");
  assert(!isGaProductionHost("localhost"), "localhost must not load GA.");

  assert(resolveInternalTrafficFromQuery("1") === "set", "?internal=1 must set cookie.");
  assert(resolveInternalTrafficFromQuery("0") === "clear", "?internal=0 must clear cookie.");
  assert(resolveInternalTrafficFromQuery("true") === "set", "?internal=true must set cookie.");
  assert(resolveInternalTrafficFromQuery("maybe") === null, "unknown internal flag must be ignored.");

  assert(
    buildGtagConfig(true).traffic_type === "internal",
    "internal cookie must set traffic_type internal."
  );
  assert(
    buildGtagConfig(false).traffic_type === undefined,
    "public traffic must not send traffic_type."
  );

  assert(
    shouldLoadCloudflareBeacon(false),
    "Cloudflare beacon must load for public traffic."
  );
  assert(
    !shouldLoadCloudflareBeacon(true),
    "Cloudflare beacon must not load when internal cookie is set."
  );
}

async function runTemplateChecks() {
  const indexHtml = await readFile(resolve("index.html"), "utf8");
  const bootstrap = await readFile(resolve("public/ga-bootstrap.js"), "utf8");

  assert(
    !indexHtml.includes("googletagmanager.com/gtag/js"),
    "index.html must not load gtag.js directly; use public/ga-bootstrap.js."
  );
  assert(
    indexHtml.includes('src="/ga-bootstrap.js"'),
    "index.html must reference /ga-bootstrap.js."
  );

  assert(
    bootstrap.includes(GA_MEASUREMENT_ID),
    "ga-bootstrap.js must reference the GA measurement ID."
  );
  assert(
    bootstrap.includes(INTERNAL_COOKIE_NAME),
    "ga-bootstrap.js must use the internal traffic cookie name."
  );
  assert(
    bootstrap.includes("traffic_type"),
    "ga-bootstrap.js must configure traffic_type for internal visits."
  );
  assert(
    bootstrap.includes("sde2030.com") && bootstrap.includes("www.sde2030.com"),
    "ga-bootstrap.js must gate on production hostnames."
  );
  assert(
    !bootstrap.includes("preview.sde2030.com"),
    "ga-bootstrap.js must not treat preview as a production host."
  );

  assert(
    !indexHtml.includes(CLOUDFLARE_BEACON_SRC),
    "index.html must not load the Cloudflare beacon directly; use ga-bootstrap.js."
  );
  assert(
    bootstrap.includes(CLOUDFLARE_BEACON_SRC),
    "ga-bootstrap.js must inject the Cloudflare beacon for non-internal traffic."
  );
  assert(
    bootstrap.includes("loadCloudflareWebAnalytics") && bootstrap.includes("isInternalTraffic()"),
    "ga-bootstrap.js must skip Cloudflare when internal traffic cookie is set."
  );
}

await runUnitChecks();
await runTemplateChecks();

if (errors.length > 0) {
  console.error("Analytics validation failed:\n");
  for (const message of errors) {
    console.error(`- ${message}`);
  }
  process.exit(1);
}

console.log("Analytics validation passed.");
