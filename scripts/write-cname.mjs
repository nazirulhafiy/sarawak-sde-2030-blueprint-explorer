#!/usr/bin/env node
import { mkdirSync, writeFileSync } from "node:fs";
import { resolve } from "node:path";

const domains = {
  preview: "preview.sdb2030.com",
  production: "sdb2030.com",
};

const environment = process.argv[2] || "production";
const domain = domains[environment];

if (!domain) {
  console.error(`Unknown CNAME environment: ${environment}`);
  process.exit(1);
}

const distDir = resolve("dist");

mkdirSync(distDir, { recursive: true });
writeFileSync(resolve(distDir, "CNAME"), `${domain}\n`);

console.log(`Wrote dist/CNAME for ${environment}: ${domain}`);
