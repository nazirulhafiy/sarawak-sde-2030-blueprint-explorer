import { BLUEPRINT_META, LAST_UPDATED } from "./blueprintData.js";
import { getRouteCanonical } from "./routes.js";

const PRODUCTION_ORIGIN = "https://sde2030.com";
const WEBSITE_ID = `${PRODUCTION_ORIGIN}/#website`;
const BLUEPRINT_ID = `${PRODUCTION_ORIGIN}/#blueprint-source`;
const DATASET_ID = `${PRODUCTION_ORIGIN}/#blueprint-baseline`;
const DATA_USE_URL = `${PRODUCTION_ORIGIN}/updates/#data-use`;

const blueprintSource = {
  "@type": "CreativeWork",
  "@id": BLUEPRINT_ID,
  name: BLUEPRINT_META.title,
  author: {
    "@type": "GovernmentOrganization",
    name: BLUEPRINT_META.issuer,
  },
  publisher: BLUEPRINT_META.publishers.map((name) => ({
    "@type": "Organization",
    name,
  })),
  datePublished: String(BLUEPRINT_META.firstPublished),
  inLanguage: "en-MY",
};

const website = {
  "@type": "WebSite",
  "@id": WEBSITE_ID,
  name: "SDE 2030 Blueprint Explorer",
  alternateName: "Sarawak Digital Economy Blueprint 2030 Explorer",
  url: `${PRODUCTION_ORIGIN}/`,
  description:
    "An independent explorer of the Sarawak Digital Economy Blueprint 2030, including its pillars, strategic actions, initiatives, original targets and timelines.",
  inLanguage: "en-MY",
};

const blueprintDataset = {
  "@type": "Dataset",
  "@id": DATASET_ID,
  name: "Sarawak Digital Economy Blueprint 2030 baseline",
  description:
    "A structured transcription of the Blueprint's five strategic pillars, 31 strategic actions and 106 initiatives, preserving original targets, timelines, lead agencies and printed page references.",
  url: `${PRODUCTION_ORIGIN}/`,
  dateModified: LAST_UPDATED,
  inLanguage: "en-MY",
  isAccessibleForFree: true,
  creator: {
    "@type": "Person",
    name: "Nazirul Hafiy",
    url: "https://hafiy.my",
  },
  license: DATA_USE_URL,
  isBasedOn: { "@id": BLUEPRINT_ID },
  variableMeasured: [
    "Strategic pillar",
    "Strategic action",
    "Initiative",
    "Objective",
    "Intended outcome",
    "Original target",
    "Original timeline",
    "Lead agency",
    "Printed Blueprint page",
  ],
};

export function getStructuredData(route) {
  const canonical = getRouteCanonical(route);
  const page = {
    "@type": route.page === "tracker" ? "CollectionPage" : "WebPage",
    "@id": `${canonical}#webpage`,
    url: canonical,
    name: route.metadata.title,
    description: route.metadata.description,
    inLanguage: route.language === "ms" ? "ms-MY" : "en-MY",
    dateModified: LAST_UPDATED,
    isPartOf: { "@id": WEBSITE_ID },
    about: { "@id": BLUEPRINT_ID },
  };

  const graph = [website, blueprintSource, page];

  if (route.page === "tracker") {
    page.mainEntity = { "@id": DATASET_ID };
    graph.push(blueprintDataset);
  }

  return {
    "@context": "https://schema.org",
    "@graph": graph,
  };
}
