#!/usr/bin/env node
// PR docs guard. Watched design/behaviour paths (keep in sync with
// .github/workflows/docs-check.yml and docs/ci-docs-check.md):
// - index.html
// - src/**/*.css
// - src/**/*.jsx
// - src/**/*.js except src/blueprintData.js, src/implementationData.js, src/localization.js
// - public/favicon*, public/apple-touch-icon*, public/social-preview*
// - scripts/prerender.mjs, scripts/write-cname.mjs, scripts/generate-environment-favicons.mjs
// - vite.config.js
// Not watched: Blueprint and implementation datasets, interface copy, content validators.

const WATCHED_PATH_TESTS = [
  /^index\.html$/,
  /^src\/.*\.css$/,
  /^src\/.*\.jsx$/,
  /^src\/(?!blueprintData\.js$|implementationData\.js$|localization\.js$).*\.js$/,
  /^public\/(?:favicon|apple-touch-icon|social-preview).+/,
  /^scripts\/(?:prerender|write-cname|generate-environment-favicons)\.mjs$/,
  /^vite\.config\.js$/,
];

const DOCS_PREFIX = "docs/";
const NO_DOCS_LABEL = "no-docs-needed";
const FAIL_MESSAGE =
  "This PR changes how the site looks or behaves but doesn't update docs/. Update docs/design.md, or add the no-docs-needed label if no doc change is needed.";

function isWatchedPath(filePath) {
  const normalized = filePath.replace(/\\/g, "/");
  return WATCHED_PATH_TESTS.some((pattern) => pattern.test(normalized));
}

function hasDocsChange(files) {
  return files.some((filePath) => filePath.replace(/\\/g, "/").startsWith(DOCS_PREFIX));
}

function parseLabels(raw) {
  if (!raw || !String(raw).trim()) return [];
  return String(raw)
    .split(",")
    .map((label) => label.trim())
    .filter(Boolean);
}

function readChangedFiles() {
  const fromEnv = process.env.CHANGED_FILES;
  if (fromEnv && fromEnv.trim()) {
    return fromEnv
      .split("\n")
      .map((line) => line.trim())
      .filter(Boolean);
  }
  return [];
}

const labels = parseLabels(process.env.PR_LABELS);
const files = readChangedFiles();

if (labels.includes(NO_DOCS_LABEL)) {
  console.log("no-docs-needed label present; skipping docs requirement.");
  process.exit(0);
}

const watchedChanges = files.filter(isWatchedPath);
if (watchedChanges.length === 0) {
  console.log("No watched design/behaviour files changed.");
  process.exit(0);
}

if (hasDocsChange(files)) {
  console.log(`Watched files changed with docs/ updates (${watchedChanges.length} watched file(s)).`);
  process.exit(0);
}

console.error(FAIL_MESSAGE);
console.error("");
console.error("Watched files changed in this PR:");
for (const filePath of watchedChanges) {
  console.error(`  - ${filePath}`);
}
process.exit(1);
