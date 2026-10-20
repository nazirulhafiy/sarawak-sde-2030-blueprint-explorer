import site from "../data/site.json" with { type: "json" };

const SITE_COPY_FIELDS = ["title", "tagline", "description", "about_lead"];

function loadSiteCopy() {
  const copy = {};
  for (const field of SITE_COPY_FIELDS) {
    const value = site[field];
    if (typeof value !== "string" || !value.trim()) {
      throw new Error(`data/site.json is missing ${field}`);
    }
    copy[field] = value.trim();
  }
  return copy;
}

export const SITE_COPY = loadSiteCopy();

export const SITE_DOCUMENT_TITLE = `${SITE_COPY.title} | Sarawak Development Monitor`;
