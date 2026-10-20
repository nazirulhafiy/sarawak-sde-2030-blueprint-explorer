# Automation

## Deploy to GitHub Pages

[`.github/workflows/deploy.yml`](../.github/workflows/deploy.yml) runs on pushes to `main`, pull requests targeting `main`, and manual `workflow_dispatch`.

Each run installs dependencies with `npm ci`, then runs `npm run check:content`, `npm run lint`, and `npm run build:production`. It uploads `dist` as a GitHub Pages artifact.

The deploy job publishes that artifact through the `github-pages` environment to [sde2030.com](https://sde2030.com). It runs when the event is a push to `main` or a manual dispatch. Pull requests build and upload the artifact, and they do not publish.

Pull-request runs use the concurrency group `pages-pr-<number>`. Production runs use `pages-production`. A newer run in the same group cancels the in-progress run.

`npm run build:production` writes `dist/CNAME` as `sde2030.com`. Cloudflare manages the domain and DNS. The workflow does not edit DNS.

## Docs check

[`.github/workflows/docs-check.yml`](../.github/workflows/docs-check.yml) runs on pull requests when they are opened, updated, reopened, labeled, or unlabeled. It fails when watched design or behaviour files change and nothing under `docs/` changes. The `no-docs-needed` label passes the check. Watched paths are listed in [ci-docs-check.md](ci-docs-check.md).

## Dependabot

[`.github/dependabot.yml`](../.github/dependabot.yml) checks GitHub Actions versions every week and can open update pull requests. The schedule covers the `github-actions` ecosystem.

## Schedule

Dependabot's weekly GitHub Actions check is the only schedule in this repository. Publishing runs when `main` changes, a pull request updates, or someone starts the Pages workflow by hand. There is no content-review cron.

## Live site checks and GA4 internal traffic

Cloud agents, screenshot jobs, and manual QA on production should open [sde2030.com](https://sde2030.com/?internal=1) with `?internal=1` so visits are tagged as internal in GA4 and Cloudflare Web Analytics is skipped. Pull-request Pages artifacts and `preview.sde2030.com` do not load GA; verifying host gating on a PR means opening the artifact URL and confirming `googletagmanager.com` is not requested (for example in the network panel). With `?internal=1`, `cloudflareinsights.com` should not be requested. On non-production hosts, `googletagmanager.com` should not be requested either; on production, GA still loads but records `traffic_type: internal`. Cookie behaviour (`sde2030_ga_internal` from `data/analytics.json`, `?internal=0` to clear) is documented in [design.md](design.md#analytics). CI runs `npm run check:analytics` after the production build so prerendered HTML cannot drift from the registry.
