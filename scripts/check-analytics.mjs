#!/usr/bin/env node
/**
 * Single analytics check: registry, helpers, source loader sync, and optional dist/.
 */

import { readFile } from "node:fs/promises";
import { existsSync } from "node:fs";
import { resolve } from "node:path";

import {
  ANALYTICS_LOADER_PUBLIC_PATH,
  CLOUDFLARE_BEACON_SRC,
  LOADER_ATTR,
  loadRegistry,
} from "./lib/analytics-registry.mjs";
import { renderAnalyticsLoaderBody } from "./lib/render-analytics-loader.mjs";
import { runAnalyticsDistCheck } from "./check-analytics-dist.mjs";
import {
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

function runRegistryLoad() {
  try {
    loadRegistry();
  } catch (error) {
    errors.push(error instanceof Error ? error.message : String(error));
  }
}

function runUnitChecks(registry) {
  for (const host of registry.hostnames) {
    assert(isGaProductionHost(host), `${host} must be a GA production host.`);
  }
  assert(!isGaProductionHost("preview.sde2030.com"), "preview host must not load GA.");
  assert(!isGaProductionHost("localhost"), "localhost must not load GA.");

  assert(resolveInternalTrafficFromQuery("1") === "set", "?internal=1 must set cookie.");
  assert(resolveInternalTrafficFromQuery("0") === "clear", "?internal=0 must clear cookie.");
  assert(resolveInternalTrafficFromQuery("true") === "set", "?internal=true must set cookie.");
  assert(resolveInternalTrafficFromQuery("maybe") === null, "unknown internal flag must be ignored.");
  assert(resolveInternalTrafficFromQuery("1`") === "set", "?internal=1` (trailing backtick) must set cookie.");
  assert(resolveInternalTrafficFromQuery("1.") === "set", "?internal=1. must set cookie.");
  assert(resolveInternalTrafficFromQuery("1)") === "set", "?internal=1) must set cookie.");
  assert(resolveInternalTrafficFromQuery("1]") === "set", "?internal=1] must set cookie.");
  assert(resolveInternalTrafficFromQuery("10") === null, "?internal=10 must be ignored.");
  assert(resolveInternalTrafficFromQuery("1x") === null, "?internal=1x must be ignored.");
  assert(resolveInternalTrafficFromQuery("1``") === null, "?internal=1`` (two backticks) must be ignored.");
  assert(resolveInternalTrafficFromQuery("2") === null, "?internal=2 must be ignored.");

  assert(
    buildGtagConfig(true).traffic_type === "internal",
    "internal cookie must set traffic_type internal."
  );
  assert(
    buildGtagConfig(false).traffic_type === undefined,
    "public traffic must not send traffic_type."
  );

  assert(shouldLoadCloudflareBeacon(false), "Cloudflare beacon must load for public traffic.");
  assert(
    !shouldLoadCloudflareBeacon(true),
    "Cloudflare beacon must not load when internal cookie is set."
  );
}

async function runSourceChecks(registry) {
  const indexHtml = await readFile(resolve("index.html"), "utf8");
  const loaderPath = resolve("public/analytics-loader.js");
  const loader = await readFile(loaderPath, "utf8");
  const expected = renderAnalyticsLoaderBody(registry);

  assert(
    !indexHtml.includes("googletagmanager.com/gtag/js"),
    "index.html must not load gtag.js directly; use the analytics loader."
  );
  assert(
    indexHtml.includes(LOADER_ATTR),
    `index.html must include one ${LOADER_ATTR} script.`
  );
  assert(
    (indexHtml.match(new RegExp(LOADER_ATTR, "g")) ?? []).length === 1,
    `index.html must reference exactly one ${LOADER_ATTR} loader.`
  );
  assert(
    indexHtml.includes(`src="${ANALYTICS_LOADER_PUBLIC_PATH}"`),
    `index.html must load ${ANALYTICS_LOADER_PUBLIC_PATH}.`
  );
  assert(
    !indexHtml.includes("ga-bootstrap.js"),
    "index.html must not reference legacy ga-bootstrap.js."
  );

  assert(
    loader === expected,
    "public/analytics-loader.js is out of date; run node scripts/sync-analytics-loader.mjs."
  );

  assert(
    loader.includes(registry.primaryGa4Id()),
    "analytics-loader.js must reference the GA measurement ID from the registry."
  );
  assert(
    loader.includes(registry.internal_cookie),
    "analytics-loader.js must use the registry internal traffic cookie name."
  );
  assert(loader.includes("traffic_type"), "analytics-loader.js must configure traffic_type.");
  for (const host of registry.hostnames) {
    assert(loader.includes(host), `analytics-loader.js must gate GA on ${host}.`);
  }
  assert(
    !loader.includes("preview.sde2030.com"),
    "analytics-loader.js must not treat preview as a production host."
  );

  assert(
    !indexHtml.includes(CLOUDFLARE_BEACON_SRC),
    "index.html must not load the Cloudflare beacon directly; use analytics-loader.js."
  );
  assert(
    loader.includes(CLOUDFLARE_BEACON_SRC),
    "analytics-loader.js must inject the Cloudflare beacon for non-internal traffic."
  );
  assert(
    loader.includes("isInternalTraffic") && loader.includes("loadCloudflareWebAnalytics"),
    "analytics-loader.js must skip Cloudflare when internal traffic cookie is set."
  );
}

const args = process.argv.slice(2);
const distFlagIndex = args.indexOf("--dist");
const distPath =
  distFlagIndex >= 0 ? args[distFlagIndex + 1] ?? "dist" : existsSync(resolve("dist")) ? "dist" : null;
const skipDist = args.includes("--no-dist");

runRegistryLoad();
let registry;
try {
  registry = loadRegistry();
} catch {
  registry = null;
}

if (registry) {
  runUnitChecks(registry);
  await runSourceChecks(registry);
}

if (errors.length > 0) {
  console.error("Analytics validation failed:\n");
  for (const message of errors) {
    console.error(`- ${message}`);
  }
  process.exit(1);
}

console.log("Analytics validation passed (registry, helpers, and source loader).");

if (!skipDist && distPath) {
  const code = await runAnalyticsDistCheck({ dist: distPath });
  process.exit(code);
}

if (!skipDist && !distPath) {
  console.log("Analytics dist check skipped (no dist/ directory; run after build:production).");
}
