# SDE 2030 Blueprint Explorer

An independent English-language explorer for the 2023 Sarawak Digital Economy Blueprint 2030.

The complete baseline makes the Blueprint easier to browse without presenting its original commitments as verified current progress. It covers:

- 5 strategic pillars
- 31 strategic actions
- 106 initiatives
- 38 short-term, 48 medium-term, and 20 long-term initiatives
- three roadmap phases for 2025, 2027, and 2030

Each initiative preserves its original objective, description, intended outcome, target, timeline, lead agencies, and printed Blueprint page.

The interface follows the established PCDS 2030 tracker design language: stacked Sarawak Development Monitor heading, four-metric summary strip, a horizontally scrollable pillar filter with right-aligned search, two-column expandable cards, and a split top-left classification pill. The filter strip begins with the compact `All` state and retains the roadmap-phase picker alongside the five pillars. On cards, the display-only split pill reads `Pillar` plus the initiative's Blueprint pillar. Pillar colours identify Blueprint structure only; they do not represent delivery status.

## Local development

```bash
npm ci
npm run check:content
npm run lint
npm run build:local
npm run preview:start
```

The preview command reports its selected local port.

## Routes

- `/` English Blueprint Explorer
- `/updates/` English baseline and methodology note

The previous `/bm/` entry points temporarily serve the English experience while reviewed BM coverage remains in the backlog.

## Evidence boundary

The user-supplied 2023 Blueprint PDF is the immutable baseline source. It establishes initiative identity and original commitments, but it does not prove current implementation status. Later implementation research is retained internally for a possible future phase and is not rendered in the current explorer. Read [the data methodology](docs/data-methodology.md) before changing either dataset.

## Technology

This is a static Vite and React app adapted from the PCDS 2030 tracker shell. It has no backend, account system, or database. The canonical Blueprint baseline lives in `src/blueprintData.js`; deferred implementation research remains in `src/implementationData.js` without appearing in the public interface.

## Publishing

Production is built from `main` by GitHub Actions and published through GitHub Pages at [sde2030.com](https://sde2030.com). Cloudflare manages the domain and DNS.

The production workflow runs the content validator and linter before building and prerendering the two canonical English routes and the two legacy BM entry points into `dist`.

## Search visibility

All four entry paths are prerendered with titles, descriptions, canonical URLs, English-only `hreflang` links, social-card metadata, and Schema.org structured data. The legacy BM paths canonicalise to their English equivalents and are omitted from the sitemap. The sitemap uses the baseline dataset's `LAST_UPDATED` date, while preview and development builds receive `noindex, nofollow` directives automatically.

Every local, preview, and production build runs `scripts/validate-seo.mjs` after prerendering. Run `npm run check:seo` to recheck the current `dist` output without rebuilding it.
