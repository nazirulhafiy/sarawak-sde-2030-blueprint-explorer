# CI: Docs check for UI and build changes

Pull requests run the **Docs check** workflow (`.github/workflows/docs-check.yml`) on `opened`, `synchronize`, `reopened`, `labeled`, and `unlabeled` events. The job name is `docs-check`.

## What it enforces

If a pull request changes files that affect how the site looks or behaves, it must also change at least one file under `docs/` in the same pull request.

The check uses a three-dot diff from the pull request base SHA to the head SHA. The watched path list is at the top of [`.github/workflows/docs-check.yml`](../.github/workflows/docs-check.yml) and [`scripts/check-pr-docs.mjs`](../scripts/check-pr-docs.mjs):

- `index.html`
- `src/**/*.css`
- `src/**/*.jsx`
- `src/**/*.js`, except `src/blueprintData.js`, `src/implementationData.js`, and `src/localization.js`
- `public/` favicons, Apple touch icons, and social preview images (`favicon*`, `apple-touch-icon*`, `social-preview*`)
- `scripts/prerender.mjs`, `scripts/write-cname.mjs`, and `scripts/generate-environment-favicons.mjs`
- `vite.config.js`

**Not watched:** the Blueprint baseline (`src/blueprintData.js`), deferred implementation evidence (`src/implementationData.js`), interface copy (`src/localization.js`), content validators, and generated `dist/`. Those pull requests are not blocked by this check.

## Escape hatch

Add the GitHub label **`no-docs-needed`** when the pull request touches watched files but genuinely needs no documentation update. The workflow creates this label in the repository if it is missing.

Use the label only for changes that truly need no docs.

## Failure message

When the check fails, CI prints:

> This PR changes how the site looks or behaves but doesn't update docs/. Update docs/design.md, or add the no-docs-needed label if no doc change is needed.
