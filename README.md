# SDE 2030 Blueprint Explorer

An independent English-language explorer for the 2023 Sarawak Digital Economy Blueprint 2030.

**Live site:** [sde2030.com](https://sde2030.com) — agents and QA should use [`?internal=1`](https://sde2030.com/?internal=1) on production (see [AGENTS.md](AGENTS.md)).

The complete baseline makes the Blueprint easier to browse without presenting its original commitments as verified current progress. It covers:

- 5 strategic pillars
- 31 strategic actions
- 106 initiatives
- 38 short-term, 48 medium-term, and 20 long-term initiatives
- three roadmap phases for 2025, 2027, and 2030

Each initiative preserves its original objective, description, intended outcome, target, timeline, lead agencies, and printed Blueprint page.

The interface follows the established PCDS 2030 tracker design language: stacked Sarawak Development Monitor heading, four-metric summary strip, a horizontally scrollable pillar filter with right-aligned search, two-column expandable cards, and a split top-left classification pill. The filter strip begins with the compact `All` state and retains the roadmap-phase picker alongside the five pillars. On cards, the display-only split pill reads `Pillar` plus the initiative's Blueprint pillar. Pillar colours identify Blueprint structure only; they do not represent delivery status. Layout, colour, and interaction notes are in [docs/design.md](docs/design.md).

The public interface is English-only. Legacy `/bm/` paths still resolve, and they serve the same English pages while reviewed Bahasa Melayu coverage remains in the backlog.

## Local development

```bash
npm ci
npm run dev
```

`npm run dev` starts the Vite development server. For a production-like local check:

```bash
npm run check:content
npm run lint
npm run build:local
npm run preview:start
```

`npm run preview:status` and `npm run preview:stop` report and stop that preview. The preview command prints the local URL it selected.

## Build

The site has a build step.

| Script | What it does |
| --- | --- |
| `npm run build` | Same as `build:local` |
| `npm run build:local` | Vite build, prerender, and SEO check for the development environment |
| `npm run build:preview` | `vite build --mode preview`, prerender, and SEO check |
| `npm run build:production` | Vite build, prerender, `dist/CNAME` for `sde2030.com`, and SEO check |
| `npm run check:content` | Validates the Blueprint baseline dataset |
| `npm run check:analytics` | Validates `data/analytics.json`, generated loader, helpers, and built `dist/` HTML |
| `npm run check:seo` | Rechecks the current `dist` output without rebuilding it |
| `npm run lint` | Runs ESLint |

## Routes

- `/` English Blueprint Explorer
- `/updates/` English baseline and methodology note
- `/bm/` and `/bm/updates/` legacy entry points that serve the English experience and canonicalise to the English routes

## Evidence boundary

The user-supplied 2023 Blueprint PDF is the immutable baseline source. It establishes initiative identity and original commitments, but it does not prove current implementation status. Later implementation research is retained internally for a possible future phase and is not rendered in the current explorer. Read [the data methodology](docs/data-methodology.md) before changing either dataset.

## Technology

This is a static Vite and React app adapted from the PCDS 2030 tracker shell. It has no backend, account system, or database. The canonical Blueprint baseline lives in `src/blueprintData.js`; deferred implementation research remains in `src/implementationData.js` without appearing in the public interface.

## Publishing

Production is built from `main` by [`.github/workflows/deploy.yml`](.github/workflows/deploy.yml) and published through GitHub Pages at [sde2030.com](https://sde2030.com). Cloudflare manages the domain and DNS.

The workflow also builds on pull requests into `main` and on manual dispatch. It uploads `dist` as a Pages artifact on every run, and the deploy job publishes that artifact only when the event is not a pull request.

The production workflow runs the content validator and linter before building and prerendering the two canonical English routes and the two legacy BM entry points into `dist`.

Other automation, including the weekly Dependabot check for GitHub Actions, is described in [docs/automation.md](docs/automation.md).

## Environment variables

No secrets are required to install, develop, or build.

- `PORT` — optional port for `npm run preview:start`, `npm run preview:status`, and `npm run preview:stop`.
- `MODE`, `DEV`, and `BASE_URL` — Vite values read by the app and the prerender step. The npm scripts select `development`, `preview`, or `production`. These are not repository secrets.

## Search visibility

All four entry paths are prerendered with titles, descriptions, canonical URLs, English-only `hreflang` links, social-card metadata, and Schema.org structured data. The legacy BM paths canonicalise to their English equivalents and are omitted from the sitemap. The sitemap uses the baseline dataset's `LAST_UPDATED` date, while preview and development builds receive `noindex, nofollow` directives automatically.

Every local, preview, and production build runs `scripts/validate-seo.mjs` after prerendering. Run `npm run check:seo` to recheck the current `dist` output without rebuilding it.

## Documentation

- [docs/design.md](docs/design.md) — layout, colour, type, and behaviour
- [docs/product.md](docs/product.md) — product scope
- [docs/data-methodology.md](docs/data-methodology.md) — baseline versus later implementation evidence
- [docs/ci-docs-check.md](docs/ci-docs-check.md) — pull-request docs check and watched paths
- [docs/automation.md](docs/automation.md) — GitHub Actions and Dependabot
- [AGENTS.md](AGENTS.md) — agent working rules
