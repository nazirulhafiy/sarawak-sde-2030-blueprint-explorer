# Agent Instructions

This repository is the independent SDE 2030 Blueprint Explorer, a Vite and React static site based on the proven PCDS 2030 tracker shell. The public interface is English-only for now. Legacy `/bm/` paths serve that same English experience until reviewed Bahasa Melayu coverage is restored.

## Working Rules

- Preserve the scan-first, English-only, source-forward interaction model unless the user requests a redesign.
- Keep the Blueprint's hierarchy exact: five strategic pillars, 31 strategic actions, and 106 initiatives.
- Call records `initiatives`, not projects, unless a cited source explicitly identifies a project.
- Keep original Blueprint commitments separate from later implementation evidence.
- Never infer a current status from a passed target or timeline.
- Treat `README.md`, `docs/product.md`, `docs/design.md`, `docs/data-methodology.md`, `docs/automation.md`, `docs/ci-docs-check.md`, and `docs/backlog.md` as project memory.
- Treat `src/blueprintData.js` as the immutable baseline dataset and `src/implementationData.js` as later public-evidence observations. Never merge the two meanings.
- Do not introduce new dependencies without a clear maintenance benefit.

## Documentation

Design or behaviour changes (CSS, templates, app JS, build scripts, config) must update docs/ (usually docs/design.md) in the same PR. Use the `no-docs-needed` label only for changes that truly need no docs.

The docs-check workflow enforces that rule. Watched paths and the label are described in [docs/ci-docs-check.md](docs/ci-docs-check.md). Dataset and interface-copy files are not watched: `src/blueprintData.js`, `src/implementationData.js`, and `src/localization.js`.

## Evidence Rules

- The user-supplied 2023 Sarawak Digital Economy Blueprint 2030 PDF is the baseline source for initiative identity, hierarchy, objectives, outcomes, targets, original timelines, and lead agencies.
- Record printed Blueprint page numbers for every initiative.
- The Blueprint alone supports baseline commitments, not current implementation status.
- Current status, actual KPI values, revised scope, completion, cancellation, and responsible parties require dated official or reputable public evidence.
- Use an explicit `No current evidence` state when live progress has not been verified.
- Do not apply `No current evidence` to an initiative that has not received a focused evidence review.
- Every implementation update must cite a source stored on the same evidence record. Record publisher, publication date, access date, type, supported fields, and confidence.

## Live site QA and analytics

When opening the production site for screenshots, browser QA, or cloud-agent checks, use `https://sde2030.com/?internal=1` (append `&internal=1` if the URL already has query parameters). That sets the `sde2030_ga_internal` cookie so GA4 records `traffic_type: internal`. Use `?internal=0` on production to clear the cookie. GA loads only on `sde2030.com` and `www.sde2030.com`; preview and localhost never send GA hits. See [docs/design.md](docs/design.md#analytics) for cookie and host-gating detail.

## Local Commands

- Install dependencies with `npm ci`.
- Run local development with `npm run dev`.
- Run content validation with `npm run check:content`.
- Run analytics template checks with `npm run check:analytics`.
- Run linting with `npm run lint`.
- Run the local production build with `npm run build:local`.
- Build a preview-mode site with `npm run build:preview`.
- Build the GitHub Pages production output with `npm run build:production`.
- Use `npm run preview:start`, `npm run preview:status`, and `npm run preview:stop` for the local preview.

## Safety

- Do not edit generated `dist/` output directly.
- Do not purchase domains, edit DNS, deploy, commit, push, or create remote repositories without explicit user approval.
- Do not copy the source PDF into public assets. Preserve its copyright and use bibliographic/page references instead.
- Preserve unrelated user changes in the PCDS tracker and all other repositories.
