import { getRouteById, getRouteCanonical } from "./routes.js";
import { getStructuredData } from "./seo.js";

function setMetaContent(selector, content) {
  const element = document.querySelector(selector);
  if (element) {
    element.setAttribute("content", content);
  }
}

export function applyDocumentRouteMetadata(route) {
  document.documentElement.lang = route.language;
  document.title = route.metadata.title;

  const canonical = document.querySelector('link[rel="canonical"]');
  if (canonical) {
    canonical.setAttribute("href", getRouteCanonical(route));
  }

  setMetaContent('meta[name="description"]', route.metadata.description);
  setMetaContent('meta[property="og:locale"]', route.locale);
  setMetaContent('meta[property="og:title"]', route.metadata.title);
  setMetaContent('meta[property="og:description"]', route.metadata.description);
  setMetaContent('meta[property="og:url"]', getRouteCanonical(route));
  setMetaContent('meta[property="og:image:alt"]', route.metadata.title);
  setMetaContent('meta[name="twitter:title"]', route.metadata.title);
  setMetaContent(
    'meta[name="twitter:description"]',
    route.metadata.description
  );
  setMetaContent('meta[name="twitter:image:alt"]', route.metadata.title);

  const structuredData = document.querySelector(
    'script[type="application/ld+json"]'
  );
  if (structuredData) {
    structuredData.textContent = JSON.stringify(getStructuredData(route));
  }

  document
    .querySelectorAll('link[rel="alternate"][hreflang]')
    .forEach((element) => element.remove());

  const insertionPoint = document.querySelector('meta[property="og:type"]');
  for (const alternate of route.alternates) {
    const link = document.createElement("link");
    link.rel = "alternate";
    link.hreflang = alternate.hreflang;
    link.href = getRouteCanonical(getRouteById(alternate.routeId));
    document.head.insertBefore(link, insertionPoint);
  }
}
