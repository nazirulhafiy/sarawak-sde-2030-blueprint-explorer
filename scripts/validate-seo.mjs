#!/usr/bin/env node
import { readFile } from "node:fs/promises";
import { resolve } from "node:path";

import { LAST_UPDATED } from "../src/blueprintData.js";
import {
  STATIC_ROUTES,
  getRouteById,
  getRouteCanonical,
} from "../src/routes.js";

const expectedMode = process.argv[2] || "auto";
const errors = [];

function decodeHtml(value) {
  return value
    .replaceAll("&amp;", "&")
    .replaceAll("&quot;", '"')
    .replaceAll("&#39;", "'")
    .replaceAll("&lt;", "<")
    .replaceAll("&gt;", ">");
}

function assert(condition, message) {
  if (!condition) errors.push(message);
}

function parseAttributes(source) {
  const attributes = {};
  for (const match of source.matchAll(/([\w:-]+)="([^"]*)"/g)) {
    attributes[match[1]] = decodeHtml(match[2]);
  }
  return attributes;
}

function getTags(html, tagName) {
  return [...html.matchAll(new RegExp(`<${tagName}\\b([^>]*)>`, "gi"))]
    .map((match) => parseAttributes(match[1]));
}

function getMeta(html, key, value) {
  return getTags(html, "meta").find((attributes) => attributes[key] === value);
}

function getRouteOutputPath(route) {
  return route.path === "/"
    ? resolve("dist/index.html")
    : resolve("dist", route.path.slice(1), "index.html");
}

function expectedAlternates(route) {
  return route.alternates.map(({ hreflang, routeId }) => ({
    hreflang,
    href: getRouteCanonical(getRouteById(routeId)),
  }));
}

for (const route of STATIC_ROUTES) {
  const label = `${route.id} (${route.path})`;
  let html;

  try {
    html = await readFile(getRouteOutputPath(route), "utf8");
  } catch (error) {
    errors.push(`${label}: could not read prerendered HTML: ${error.message}`);
    continue;
  }

  assert(!html.includes("%MODE%"), `${label}: unresolved %MODE% placeholder.`);
  assert(
    html.includes(`<html lang="${route.language}">`),
    `${label}: incorrect document language.`
  );

  const titles = [...html.matchAll(/<title>([\s\S]*?)<\/title>/gi)];
  assert(titles.length === 1, `${label}: expected exactly one title element.`);
  assert(
    decodeHtml(titles[0]?.[1] || "") === route.metadata.title,
    `${label}: title does not match route metadata.`
  );

  const description = getMeta(html, "name", "description");
  assert(
    description?.content === route.metadata.description,
    `${label}: description does not match route metadata.`
  );
  assert(
    route.metadata.description.length >= 70 &&
      route.metadata.description.length <= 170,
    `${label}: description should be between 70 and 170 characters.`
  );

  const robots = getMeta(html, "name", "robots")?.content;
  const productionRobots = "index, follow, max-image-preview:large";
  const privateRobots = "noindex, nofollow";
  assert(
    robots === productionRobots || robots === privateRobots,
    `${label}: missing or unsupported robots directive.`
  );
  if (expectedMode === "production") {
    assert(robots === productionRobots, `${label}: production page is not indexable.`);
  } else if (expectedMode === "preview" || expectedMode === "development") {
    assert(robots === privateRobots, `${label}: non-production page is indexable.`);
  }

  const links = getTags(html, "link");
  const canonical = links.filter((attributes) => attributes.rel === "canonical");
  assert(canonical.length === 1, `${label}: expected exactly one canonical link.`);
  assert(
    canonical[0]?.href === getRouteCanonical(route),
    `${label}: canonical URL is incorrect.`
  );

  const alternates = links
    .filter((attributes) => attributes.rel === "alternate" && attributes.hreflang)
    .map(({ hreflang, href }) => ({ hreflang, href }));
  assert(
    JSON.stringify(alternates) === JSON.stringify(expectedAlternates(route)),
    `${label}: hreflang alternates are incomplete or out of order.`
  );

  const openGraphChecks = [
    ["og:type", "website"],
    ["og:locale", route.locale],
    ["og:title", route.metadata.title],
    ["og:description", route.metadata.description],
    ["og:url", getRouteCanonical(route)],
    ["og:image:width", "1200"],
    ["og:image:height", "630"],
  ];
  for (const [property, expected] of openGraphChecks) {
    assert(
      getMeta(html, "property", property)?.content === expected,
      `${label}: ${property} is missing or incorrect.`
    );
  }

  assert(
    getMeta(html, "name", "twitter:card")?.content === "summary_large_image",
    `${label}: Twitter card metadata is missing.`
  );

  const structuredDataMatches = [
    ...html.matchAll(
      /<script type="application\/ld\+json">([\s\S]*?)<\/script>/gi
    ),
  ];
  assert(
    structuredDataMatches.length === 1,
    `${label}: expected exactly one JSON-LD block.`
  );

  if (structuredDataMatches[0]) {
    try {
      const data = JSON.parse(structuredDataMatches[0][1]);
      const graph = data["@graph"];
      const page = graph?.find(
        (node) => node["@id"] === `${getRouteCanonical(route)}#webpage`
      );
      assert(data["@context"] === "https://schema.org", `${label}: invalid schema context.`);
      assert(Array.isArray(graph), `${label}: JSON-LD graph is missing.`);
      assert(page?.dateModified === LAST_UPDATED, `${label}: schema freshness is incorrect.`);
      assert(page?.name === route.metadata.title, `${label}: schema page title is incorrect.`);
      assert(
        graph?.some((node) => node["@type"] === "WebSite"),
        `${label}: WebSite schema is missing.`
      );
      assert(
        graph?.some((node) => node["@type"] === "CreativeWork"),
        `${label}: Blueprint source schema is missing.`
      );
      if (route.page === "tracker") {
        const dataset = graph?.find((node) => node["@type"] === "Dataset");
        assert(
          dataset,
          `${label}: Blueprint dataset schema is missing.`
        );
        assert(
          dataset?.creator?.["@type"] === "Person" &&
            dataset?.creator?.name === "Nazirul Hafiy" &&
            dataset?.creator?.url === "https://hafiy.my",
          `${label}: Blueprint dataset creator is missing or incorrect.`
        );
        assert(
          dataset?.license === "https://sde2030.com/updates/#data-use",
          `${label}: Blueprint dataset license URL is missing or incorrect.`
        );
      }
    } catch (error) {
      errors.push(`${label}: JSON-LD is invalid: ${error.message}`);
    }
  }

  assert(
    [...html.matchAll(/<h1\b/gi)].length === 1,
    `${label}: expected exactly one h1.`
  );
}

try {
  const sitemap = await readFile(resolve("dist/sitemap.xml"), "utf8");
  const locations = [...sitemap.matchAll(/<loc>([^<]+)<\/loc>/g)].map(
    (match) => match[1]
  );
  const lastModified = [...sitemap.matchAll(/<lastmod>([^<]+)<\/lastmod>/g)].map(
    (match) => match[1]
  );
  const expectedLocations = [...new Set(STATIC_ROUTES.map(getRouteCanonical))];

  assert(
    JSON.stringify(locations) === JSON.stringify(expectedLocations),
    "sitemap.xml routes do not match the prerendered route registry."
  );
  assert(
    lastModified.length === expectedLocations.length &&
      lastModified.every((value) => value === LAST_UPDATED),
    "sitemap.xml lastmod values do not match the dataset freshness date."
  );
} catch (error) {
  errors.push(`Could not validate sitemap.xml: ${error.message}`);
}

try {
  const robots = await readFile(resolve("dist/robots.txt"), "utf8");
  assert(
    robots.includes("Sitemap: https://sde2030.com/sitemap.xml"),
    "robots.txt does not advertise the production sitemap."
  );
} catch (error) {
  errors.push(`Could not validate robots.txt: ${error.message}`);
}

if (errors.length > 0) {
  console.error(`SEO validation failed with ${errors.length} error(s):`);
  for (const error of errors) console.error(`- ${error}`);
  process.exit(1);
}

console.log(
  `SEO validation passed for ${STATIC_ROUTES.length} prerendered routes (${expectedMode} mode).`
);
