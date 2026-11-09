import { getUiCopy } from "./localization.js";
import { SITE_COPY } from "./siteCopy.js";
const PRODUCTION_ORIGIN = "https://sde2030.com";
const trackerAlternates = [{ hreflang: "en-MY", routeId: "tracker-en" }, { hreflang: "x-default", routeId: "tracker-en" }];
const methodologyAlternates = [{ hreflang: "en-MY", routeId: "updates" }, { hreflang: "x-default", routeId: "updates" }];
const trackerMetadata = getUiCopy("en").metadata;
const notFoundCopy = getUiCopy("en").notFoundPage;
const methodologyMetadata = {
  title: "SDE 2030 Baseline & Methodology | Sarawak Development Monitor",
  description: `How the independent ${SITE_COPY.title} presents the original 2023 hierarchy, initiatives, targets and timelines without inferring current implementation.`,
};
/** Prerendered into dist/404.html for GitHub Pages. Kept out of STATIC_ROUTES so it stays out of the sitemap. */
export const NOT_FOUND_ROUTE = {
  id: "not-found",
  page: "not-found",
  path: "/404.html",
  language: "en",
  locale: "en_MY",
  metadata: {
    title: notFoundCopy.documentTitle,
    description: notFoundCopy.documentDescription,
  },
  alternates: [],
};
export const STATIC_ROUTES = [{ id: "tracker-en", page: "tracker", path: "/", language: "en", locale: "en_MY", metadata: trackerMetadata, alternates: trackerAlternates }, { id: "tracker-ms", page: "tracker", path: "/bm/", canonicalPath: "/", language: "en", locale: "en_MY", metadata: trackerMetadata, alternates: trackerAlternates }, { id: "updates", page: "updates", path: "/updates/", language: "en", locale: "en_MY", metadata: methodologyMetadata, alternates: methodologyAlternates }, { id: "updates-ms", page: "updates", path: "/bm/updates/", canonicalPath: "/updates/", language: "en", locale: "en_MY", metadata: methodologyMetadata, alternates: methodologyAlternates }];
export function getRouteById(id) {
  if (id === NOT_FOUND_ROUTE.id) return NOT_FOUND_ROUTE;
  return STATIC_ROUTES.find((route) => route.id === id) || STATIC_ROUTES[0];
}
export function getRouteCanonical(route) { return new URL(route.canonicalPath || route.path, PRODUCTION_ORIGIN).href; }
export function getRouteHref(id, base = "/") { const route = getRouteById(id); const normalized = base.endsWith("/") ? base : `${base}/`; return normalized === "/" ? route.path : `${normalized.replace(/\/$/, "")}${route.path}`; }
export function resolveRoute(pathname = "/", base = "/") {
  const normalizedBase = base.endsWith("/") ? base : `${base}/`;
  const withoutBase =
    normalizedBase !== "/" && pathname.startsWith(normalizedBase)
      ? `/${pathname.slice(normalizedBase.length)}`
      : pathname;
  const normalizedPath = withoutBase.endsWith("/") ? withoutBase : `${withoutBase}/`;
  if (
    withoutBase === "/404.html" ||
    withoutBase === "404.html" ||
    normalizedPath === "/404.html/"
  ) {
    return NOT_FOUND_ROUTE;
  }
  return STATIC_ROUTES.find((route) => route.path === normalizedPath) || NOT_FOUND_ROUTE;
}
