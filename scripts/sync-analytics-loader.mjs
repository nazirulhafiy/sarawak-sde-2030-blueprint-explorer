#!/usr/bin/env node
import { writeFile } from "node:fs/promises";
import { resolve } from "node:path";

import { loadRegistry } from "./lib/analytics-registry.mjs";
import { renderAnalyticsLoaderBody } from "./lib/render-analytics-loader.mjs";

const registry = loadRegistry();
const body = renderAnalyticsLoaderBody(registry);
const outputPath = resolve("public/analytics-loader.js");

await writeFile(outputPath, body, "utf8");
console.log(`Wrote ${outputPath} from data/analytics.json.`);
