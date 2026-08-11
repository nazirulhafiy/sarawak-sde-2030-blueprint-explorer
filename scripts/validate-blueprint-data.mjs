#!/usr/bin/env node

import {
  BLUEPRINT_META,
  BLUEPRINT_OUTCOMES,
  BLUEPRINT_PILLARS,
  ROADMAP_PHASES,
} from "../src/blueprintData.js";
import {
  EVIDENCE_REVIEW_META,
  EVIDENCE_STATUS_CODES,
  INITIATIVE_EVIDENCE_BY_ID,
  OUTCOME_OBSERVATIONS,
  OUTCOME_STATUS_CODES,
} from "../src/implementationData.js";

const errors = [];
const expected = {
  pillars: 5,
  actions: 31,
  initiatives: 106,
  outcomes: 7,
  phases: 3,
  horizons: { short: 38, medium: 48, long: 20 },
};

function error(message) {
  errors.push(message);
}

function hasText(value) {
  return typeof value === "string" && value.trim().length > 0;
}

function requireText(value, label) {
  if (!hasText(value)) error(`${label} must be non-empty text.`);
}

function isDateLike(value) {
  return typeof value === "string" && /^\d{4}(?:-\d{2}(?:-\d{2})?)?$/.test(value);
}

function validateSource(source, label) {
  for (const field of ["id", "label", "publisher", "url", "publishedAt", "accessedAt", "type", "confidence"]) {
    requireText(source?.[field], `${label} ${field}`);
  }
  try {
    const url = new URL(source?.url);
    if (url.protocol !== "https:") error(`${label} url must use HTTPS.`);
  } catch {
    error(`${label} url must be a valid absolute URL.`);
  }
  if (!isDateLike(source?.publishedAt)) error(`${label} publishedAt must use YYYY, YYYY-MM, or YYYY-MM-DD.`);
  if (!/^\d{4}-\d{2}-\d{2}$/.test(source?.accessedAt || "")) error(`${label} accessedAt must use YYYY-MM-DD.`);
  if (!Array.isArray(source?.fields) || source.fields.length === 0 || source.fields.some((field) => !hasText(field))) {
    error(`${label} fields must contain at least one supported field.`);
  }
  if (!["high", "medium", "low"].includes(source?.confidence)) error(`${label} confidence is invalid.`);
}

if (!Array.isArray(BLUEPRINT_PILLARS) || BLUEPRINT_PILLARS.length !== expected.pillars) {
  error(`Expected ${expected.pillars} pillars.`);
}
if (!Array.isArray(BLUEPRINT_OUTCOMES) || BLUEPRINT_OUTCOMES.length !== expected.outcomes) {
  error(`Expected ${expected.outcomes} headline outcomes.`);
}
if (!Array.isArray(ROADMAP_PHASES) || ROADMAP_PHASES.length !== expected.phases) {
  error(`Expected ${expected.phases} roadmap phases.`);
}

const actionIds = new Set();
const initiativeIds = new Set();
const horizonCounts = { short: 0, medium: 0, long: 0 };
let actionCount = 0;
let initiativeCount = 0;

for (const pillar of BLUEPRINT_PILLARS) {
  requireText(pillar?.id, "Pillar id");
  requireText(pillar?.name, `Pillar ${pillar?.id || "(unknown)"} name`);
  if (!Array.isArray(pillar?.actions) || pillar.actions.length === 0) {
    error(`Pillar ${pillar?.id || "(unknown)"} must contain actions.`);
    continue;
  }

  for (const action of pillar.actions) {
    actionCount += 1;
    requireText(action?.id, `Action in ${pillar.id} id`);
    requireText(action?.name, `Action ${action?.id || "(unknown)"} name`);
    if (actionIds.has(action?.id)) error(`Duplicate action id: ${action.id}`);
    actionIds.add(action?.id);
    if (!Array.isArray(action?.initiatives) || action.initiatives.length === 0) {
      error(`Action ${action?.id || "(unknown)"} must contain initiatives.`);
      continue;
    }

    for (const initiative of action.initiatives) {
      initiativeCount += 1;
      const label = `Initiative ${initiative?.id || "(unknown)"}`;
      for (const field of ["id", "name", "objective", "description", "outcomes", "target", "timeline", "horizon", "baselineStatus"]) {
        requireText(initiative?.[field], `${label} ${field}`);
      }
      if (initiativeIds.has(initiative?.id)) error(`Duplicate initiative id: ${initiative.id}`);
      initiativeIds.add(initiative?.id);
      if (!Object.hasOwn(horizonCounts, initiative?.horizon)) {
        error(`${label} has invalid horizon: ${initiative?.horizon}`);
      } else {
        horizonCounts[initiative.horizon] += 1;
      }
      if (initiative?.baselineStatus !== "Blueprint commitment") {
        error(`${label} must retain the Stage 1 baseline status boundary.`);
      }
      if (!Array.isArray(initiative?.leadAgencies) || initiative.leadAgencies.length === 0 || initiative.leadAgencies.some((agency) => !hasText(agency))) {
        error(`${label} must contain at least one lead agency.`);
      }
      if (!Number.isInteger(initiative?.blueprintPage) || initiative.blueprintPage < 89 || initiative.blueprintPage > 154) {
        error(`${label} has invalid printed Blueprint page: ${initiative?.blueprintPage}`);
      }
    }
  }
}

if (actionCount !== expected.actions) error(`Expected ${expected.actions} actions, found ${actionCount}.`);
if (initiativeCount !== expected.initiatives) error(`Expected ${expected.initiatives} initiatives, found ${initiativeCount}.`);
for (const [horizon, count] of Object.entries(expected.horizons)) {
  if (horizonCounts[horizon] !== count) error(`Expected ${count} ${horizon}-term initiatives, found ${horizonCounts[horizon]}.`);
}
if (BLUEPRINT_META?.pillars !== expected.pillars || BLUEPRINT_META?.strategicActions !== expected.actions || BLUEPRINT_META?.initiatives !== expected.initiatives) {
  error("BLUEPRINT_META counts do not match the validated dataset.");
}

const pilotEntries = Object.entries(INITIATIVE_EVIDENCE_BY_ID);
if (pilotEntries.length !== 10) error(`Expected 10 Stage 2 pilot initiatives, found ${pilotEntries.length}.`);

for (const [initiativeId, record] of pilotEntries) {
  const label = `Evidence record ${initiativeId}`;
  if (!initiativeIds.has(initiativeId)) error(`${label} does not match a Blueprint initiative id.`);
  if (!EVIDENCE_STATUS_CODES.includes(record?.status)) error(`${label} has invalid status: ${record?.status}`);
  requireText(record?.summary, `${label} summary`);
  if (!/^\d{4}-\d{2}-\d{2}$/.test(record?.reviewedAt || "")) error(`${label} reviewedAt must use YYYY-MM-DD.`);
  if (record?.latestObservationDate != null && !isDateLike(record.latestObservationDate)) {
    error(`${label} latestObservationDate must use YYYY, YYYY-MM, or YYYY-MM-DD.`);
  }
  if (!Array.isArray(record?.updates)) error(`${label} updates must be an array.`);
  if (!Array.isArray(record?.sources)) error(`${label} sources must be an array.`);

  const sourceIds = new Set();
  for (const source of record?.sources || []) {
    validateSource(source, `${label} source ${source?.id || "(unknown)"}`);
    if (sourceIds.has(source?.id)) error(`${label} has duplicate source id: ${source.id}`);
    sourceIds.add(source?.id);
  }

  const updateIds = new Set();
  for (const update of record?.updates || []) {
    const updateLabel = `${label} update ${update?.id || "(unknown)"}`;
    for (const field of ["id", "date", "title", "claim"]) requireText(update?.[field], `${updateLabel} ${field}`);
    if (!isDateLike(update?.date)) error(`${updateLabel} date must use YYYY, YYYY-MM, or YYYY-MM-DD.`);
    if (updateIds.has(update?.id)) error(`${label} has duplicate update id: ${update.id}`);
    updateIds.add(update?.id);
    if (!Array.isArray(update?.sourceIds) || update.sourceIds.length === 0) {
      error(`${updateLabel} must cite at least one source id.`);
    } else {
      for (const sourceId of update.sourceIds) if (!sourceIds.has(sourceId)) error(`${updateLabel} cites missing source id: ${sourceId}`);
    }
  }

  if (record?.status === "no-current-evidence") {
    if (record?.latestObservationDate != null) error(`${label} must not set latestObservationDate without current evidence.`);
    if ((record?.updates || []).length > 0 || (record?.sources || []).length > 0) error(`${label} must not attach implementation claims to No current evidence.`);
  } else if ((record?.updates || []).length === 0 || (record?.sources || []).length === 0 || !record?.latestObservationDate) {
    error(`${label} with current evidence requires a latest observation, update, and source.`);
  }
}

if (!Array.isArray(OUTCOME_OBSERVATIONS) || OUTCOME_OBSERVATIONS.length !== expected.outcomes) {
  error(`Expected ${expected.outcomes} Stage 2 outcome observations.`);
}
const outcomeIndexes = new Set();
for (const record of OUTCOME_OBSERVATIONS) {
  const label = `Outcome observation ${record?.id || "(unknown)"}`;
  requireText(record?.id, `${label} id`);
  if (!Number.isInteger(record?.outcomeIndex) || record.outcomeIndex < 1 || record.outcomeIndex > expected.outcomes) {
    error(`${label} has invalid outcomeIndex.`);
  } else {
    if (outcomeIndexes.has(record.outcomeIndex)) error(`${label} duplicates outcome index ${record.outcomeIndex}.`);
    outcomeIndexes.add(record.outcomeIndex);
    if (record?.target !== BLUEPRINT_OUTCOMES[record.outcomeIndex - 1]) error(`${label} target does not match the Blueprint baseline.`);
  }
  if (!OUTCOME_STATUS_CODES.includes(record?.status)) error(`${label} has invalid status: ${record?.status}`);
  requireText(record?.summary, `${label} summary`);
  if (!/^\d{4}-\d{2}-\d{2}$/.test(record?.reviewedAt || "")) error(`${label} reviewedAt must use YYYY-MM-DD.`);
  if (!Array.isArray(record?.sources)) error(`${label} sources must be an array.`);
  const sourceIds = new Set();
  for (const source of record?.sources || []) {
    validateSource(source, `${label} source ${source?.id || "(unknown)"}`);
    if (sourceIds.has(source?.id)) error(`${label} has duplicate source id: ${source.id}`);
    sourceIds.add(source?.id);
  }
  if (record?.status === "reported-observation") {
    requireText(record?.latestValue, `${label} latestValue`);
    requireText(record?.measurementPeriod, `${label} measurementPeriod`);
    if ((record?.sources || []).length === 0) error(`${label} reported observation requires at least one source.`);
  } else if (record?.latestValue != null || record?.measurementPeriod != null || (record?.sources || []).length > 0) {
    error(`${label} must not attach a value or source to No current evidence.`);
  }
}

if (EVIDENCE_REVIEW_META?.pilotInitiatives !== pilotEntries.length || EVIDENCE_REVIEW_META?.outcomesReviewed !== OUTCOME_OBSERVATIONS.length) {
  error("EVIDENCE_REVIEW_META counts do not match the Stage 2 evidence dataset.");
}
if (!/^\d{4}-\d{2}-\d{2}$/.test(EVIDENCE_REVIEW_META?.lastReviewed || "")) {
  error("EVIDENCE_REVIEW_META lastReviewed must use YYYY-MM-DD.");
}

if (errors.length > 0) {
  console.error(`Content validation failed with ${errors.length} error(s):`);
  errors.forEach((message) => console.error(`- ${message}`));
  process.exit(1);
}

console.log(`Content validation passed for ${expected.pillars} pillars, ${actionCount} actions, ${initiativeCount} initiatives, ${expected.outcomes} outcomes, and ${expected.phases} roadmap phases.`);
console.log(`Horizon totals: ${horizonCounts.short} short, ${horizonCounts.medium} medium, ${horizonCounts.long} long.`);
console.log(`Stage 2 evidence pilot passed for ${pilotEntries.length} initiatives and ${OUTCOME_OBSERVATIONS.length} outcomes.`);
