# SDE 2030 data methodology

## Scope

Stage 1 represents the Sarawak Digital Economy Blueprint 2030 as a structured baseline. It does not claim to certify present implementation progress.

The canonical hierarchy is:

1. five strategic pillars
2. 31 strategic actions
3. 106 initiatives

Headline outcomes and the 2025, 2027, and 2030 roadmap phases are stored separately because they are cross-cutting measures, not initiatives.

## Baseline source

The baseline is the user-supplied PDF titled *Sarawak Digital Economy Blueprint 2030*, prepared by the Sarawak Government, first published in 2023, and published by Economic Planning Unit Sarawak and Sarawak Multimedia Authority.

The PDF must not be copied into public assets. Each initiative records its printed Blueprint page so the transcription can be checked against the source.

## Required initiative fields

- stable identifier
- initiative name
- strategic pillar
- strategic action code and wording
- objective
- description
- intended outcomes
- original target
- original timeline
- named lead agencies or entities
- short, medium, or long horizon
- printed Blueprint page
- baseline status

The baseline status is always `Blueprint commitment`. This means the commitment appears in the 2023 document. It does not mean planning, procurement, implementation, operation, or completion has been verified.

## Stage 2 current evidence pilot

The reviewed pilot for seven headline outcomes and ten initiatives remains an internal research dataset, exactly two initiatives from each pillar. It is not rendered in the current baseline-only explorer. An initiative without a pilot record has not been reviewed for current evidence. It must not be interpreted as inactive, delayed, cancelled, or complete.

Each implementation observation must include:

- a dated, directly opened source
- the exact initiative or target it supports
- the affected field
- the evidence date or reporting period
- cautious status wording that does not exceed the source

The implementation dataset stores field-level provenance separately from the Blueprint transcription. Initiative evidence records include a reviewed date, latest observation date, cautious summary, dated updates, and source records. Every update cites one or more source identifiers. Every source records its publisher, publication date, access date, type, supported fields, URL, and confidence.

The allowed initiative evidence states are:

- `No current evidence`: the focused pilot review found no directly usable evidence. This is not evidence of non-delivery.
- `Announced or planned`: later public evidence describes an intention, proposal, procurement, target, or scheduled activity.
- `Implementation reported`: a source explicitly reports implementation activity or an achieved intermediate output.
- `Operational or delivered`: a source explicitly reports operation, delivery, launch, enactment, or completion matching the initiative identity.
- `Superseded or discontinued`: a source explicitly reports replacement, cancellation, discontinuation, or a material successor.

Headline outcomes use indicator observations rather than initiative statuses. A reported value must retain its measurement period, unit and comparability caveat. The interface must not calculate percentage complete unless the observation is directly comparable with the Blueprint target.

Official Sarawak Government, SMA, EPU, SDEC, ministry, agency, statutory-body, and project-owner sources are preferred. Reputable reporting may supplement them when the underlying claim is attributable.

Never infer current status because:

- the original timeline has passed
- a target year has arrived
- an initiative was announced
- an adjacent programme was completed
- a search snippet or AI summary suggests progress

Use `No current evidence` when progress has not been verified. Preserve revised targets separately from the original Blueprint commitment.

Source confidence describes the strength of the source for the displayed claim, not a probability that the broader initiative is complete. Official primary records normally support `high`; attributable reputable reporting may support `medium`; `low` is retained only to expose a material limitation and should not support a strong public status by itself.

## Language

Canonical initiative names and source-derived Blueprint wording remain in English until a reviewed BM translation exists. Interface copy may be translated independently. Do not generate authoritative-sounding translations that have not been reviewed.

## Validation

`npm run check:content` must confirm:

- 5 pillars, 31 actions, and 106 initiatives
- horizon totals of 38 short, 48 medium, and 20 long
- unique stable identifiers
- required fields and valid printed pages
- the baseline status boundary
- exactly ten unique pilot initiative records linked to real Blueprint initiative identifiers
- exactly seven outcome observations retaining the original Blueprint targets
- valid evidence states, reviewed dates, field-level sources, and update-to-source relationships

Then run `npm run lint`, `npm run build:local`, and browser checks for all four routes.
