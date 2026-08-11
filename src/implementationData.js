// Stage 2 current-evidence pilot.
//
// The 2023 Blueprint remains the immutable baseline in blueprintData.js. Records
// here describe only later observations supported by directly opened public
// sources. A missing record means the initiative has not been reviewed for the
// pilot, not that no implementation exists.

export const EVIDENCE_STATUS_CODES = [
  "no-current-evidence",
  "announced-planned",
  "implementation-reported",
  "operational-delivered",
  "superseded-discontinued",
];

export const OUTCOME_STATUS_CODES = [
  "no-current-evidence",
  "reported-observation",
];

export const EVIDENCE_REVIEW_META = {
  pilotInitiatives: 10,
  outcomesReviewed: 7,
  lastReviewed: "2026-08-10",
};

export const INITIATIVE_EVIDENCE_BY_ID = {
  "sdb-p1-s1-i2": {
    status: "implementation-reported",
    reviewedAt: "2026-08-10",
    latestObservationDate: "2026-04-09",
    summary: "An official Sarawak Government office recorded a briefing and site visit at SIOC in April 2026. This supports the facility's existence and active official use, but does not verify the Blueprint's full intended centralised operating capability.",
    updates: [
      {
        id: "sioc-official-visit-2026",
        date: "2026-04-09",
        title: "Official briefing and site visit recorded",
        claim: "The Office of the Sarawak Ombudsman recorded a briefing and site visit to the Sarawak Integrated Operation Centre.",
        sourceIds: ["sioc-ombudsman-2026"],
      },
    ],
    sources: [
      {
        id: "sioc-ombudsman-2026",
        label: "Office of the Sarawak Ombudsman — SIOC visit",
        publisher: "Office of the Sarawak Ombudsman",
        url: "https://ombudsman.sarawak.gov.my/web/subpage/photo_gallery_view/40",
        publishedAt: "2026-04-09",
        accessedAt: "2026-08-10",
        type: "official-government",
        fields: ["facility-identity", "implementation-activity"],
        confidence: "high",
      },
    ],
  },
  "sdb-p1-s5-i17": {
    status: "implementation-reported",
    reviewedAt: "2026-08-10",
    latestObservationDate: "2024-09-18",
    summary: "Sarawak Energy reported that smart-meter installation was being rolled out in stages as part of digitalising its energy infrastructure. The source does not establish the Blueprint's statewide customer target or the JBALB scope.",
    updates: [
      {
        id: "smart-meter-rollout-2024",
        date: "2024-09-18",
        title: "Staged smart-meter rollout confirmed",
        claim: "Sarawak Energy said SESCO was implementing smart meters, with installation rolling out in stages and electronic billing available for smart-meter customers.",
        sourceIds: ["sarawak-energy-smart-meter-2024"],
      },
    ],
    sources: [
      {
        id: "sarawak-energy-smart-meter-2024",
        label: "Sarawak Energy — Smart Meter Rollout Ongoing",
        publisher: "Sarawak Energy",
        url: "https://www.sarawakenergy.com/media-info/media-releases/2024/sarawak-energy-smart-meter-rollout-ongoing",
        publishedAt: "2024-09-18",
        accessedAt: "2026-08-10",
        type: "official-project-owner",
        fields: ["implementation-activity", "technology-scope"],
        confidence: "high",
      },
    ],
  },
  "sdb-p2-s1-i19": {
    status: "implementation-reported",
    reviewedAt: "2026-08-10",
    latestObservationDate: "2026",
    summary: "S PAY GLOBAL's official 2026 information describes the e-wallet application and its Aid Wallet as the channel for Sarawak Government assistance. This verifies current platform use, not completion of every enhancement and bill-payment target in the Blueprint.",
    updates: [
      {
        id: "spay-skas-2026",
        date: "2026",
        title: "Government assistance uses the S PAY GLOBAL e-wallet",
        claim: "The official SKAS 2026 page says assistance is provided through the S PAY GLOBAL e-wallet and describes the Aid Wallet feature in the current app.",
        sourceIds: ["spay-skas-2026-source"],
      },
    ],
    sources: [
      {
        id: "spay-skas-2026-source",
        label: "S PAY GLOBAL — SKAS 2026",
        publisher: "S PAY GLOBAL",
        url: "https://spayglobal.my/page-0-0-131-Sumbangan-Keperluan-Asas-Sarawak-SKAS.html",
        publishedAt: "2026",
        accessedAt: "2026-08-10",
        type: "official-platform-owner",
        fields: ["current-platform-use", "application-feature"],
        confidence: "high",
      },
    ],
  },
  "sdb-p2-s5-i29": {
    status: "implementation-reported",
    reviewedAt: "2026-08-10",
    latestObservationDate: "2026-04-13",
    summary: "TEGAS reported current use of TEGAS Digital Village and described its facilities as supporting ecosystem development. This verifies activity at the named hub, but not the full plural network, partnership, or start-up outcomes in the Blueprint.",
    updates: [
      {
        id: "tegas-digital-village-event-2026",
        date: "2026-04-13",
        title: "Digital Village hosted an ecosystem event",
        claim: "TEGAS reported that Digital Village hosted the TERAJU Aspirasi Outreach Sarawak 2026 and that its facilities supported the programme.",
        sourceIds: ["tegas-digital-village-2026"],
      },
    ],
    sources: [
      {
        id: "tegas-digital-village-2026",
        label: "TEGAS — Digital Village hosts TERAJU outreach",
        publisher: "Tabung Ekonomi Gagasan Anak Sarawak",
        url: "https://tegas.org.my/2026/04/tegas-digital-village-hosts-teraju-aspirasi-outreach-sarawak-2026/",
        publishedAt: "2026-04-14",
        accessedAt: "2026-08-10",
        type: "official-programme-owner",
        fields: ["facility-activity", "hub-role"],
        confidence: "high",
      },
    ],
  },
  "sdb-p3-s3-i55": {
    status: "no-current-evidence",
    reviewedAt: "2026-08-10",
    latestObservationDate: null,
    summary: "The focused pilot review found no directly usable dated public source that verifies current SaFHIS implementation. This is an evidence gap, not evidence of non-delivery.",
    updates: [],
    sources: [],
  },
  "sdb-p3-s3-i60": {
    status: "no-current-evidence",
    reviewedAt: "2026-08-10",
    latestObservationDate: null,
    summary: "The focused pilot review found no directly usable dated public source matching the Blueprint's end-to-end Online Wildlife Licensing System. This is an evidence gap, not evidence of non-delivery.",
    updates: [],
    sources: [],
  },
  "sdb-p4-s2-i72": {
    status: "no-current-evidence",
    reviewedAt: "2026-08-10",
    latestObservationDate: null,
    summary: "The focused pilot review found no directly usable dated Sarawak source matching the Blueprint's Rainforest Guardian System identity and scope. This is an evidence gap, not evidence of non-delivery.",
    updates: [],
    sources: [],
  },
  "sdb-p4-s4-i80": {
    status: "announced-planned",
    reviewedAt: "2026-08-10",
    latestObservationDate: "2020",
    summary: "The Forest Department describes planned AI models for automated Sarawak timber identification by smartphone to strengthen enforcement. The undated programme description does not verify deployment of the Blueprint's comprehensive stump- and concession-tracing system.",
    updates: [
      {
        id: "forestry-wood-ai-plan",
        date: "2020",
        title: "AI-assisted wood identification described as planned",
        claim: "The Forest Department's Xylarium page lists development of AI models for automated wood identification through smartphones among its planned programmes.",
        sourceIds: ["forestry-xylarium-ai"],
      },
    ],
    sources: [
      {
        id: "forestry-xylarium-ai",
        label: "Forest Department Sarawak — Xylarium",
        publisher: "Forest Department Sarawak",
        url: "https://forestry.sarawak.gov.my/web/subpage/webpage_view/1250",
        publishedAt: "2020",
        accessedAt: "2026-08-10",
        type: "official-government",
        fields: ["planned-technology", "enforcement-purpose"],
        confidence: "medium",
      },
    ],
  },
  "sdb-p5-s7-i98": {
    status: "implementation-reported",
    reviewedAt: "2026-08-10",
    latestObservationDate: "2020-10-07",
    summary: "Pustaka Negeri Sarawak reported the launch of 42 Digital Community Centres in October 2020. This supports substantial implementation of the named pilot, but does not establish the Blueprint's 44-centre target or current operation of every centre.",
    updates: [
      {
        id: "dcc-42-centres-2020",
        date: "2020-10-07",
        title: "Forty-two Digital Community Centres launched",
        claim: "Pustaka Negeri Sarawak reported that 42 Digital Community Centres were symbolically launched and described their facilities and staffing model.",
        sourceIds: ["pustaka-dcc-42-2020"],
      },
    ],
    sources: [
      {
        id: "pustaka-dcc-42-2020",
        label: "Pustaka Negeri Sarawak — Launch of 42 Digital Community Centres",
        publisher: "Pustaka Negeri Sarawak",
        url: "https://www.pustaka-sarawak.com/pages.php?do=news_details&id=445&lang=en",
        publishedAt: "2020-10-08",
        accessedAt: "2026-08-10",
        type: "official-programme-coordinator",
        fields: ["implementation-output", "centre-count", "facility-scope"],
        confidence: "high",
      },
    ],
  },
  "sdb-p5-s7-i99": {
    status: "no-current-evidence",
    reviewedAt: "2026-08-10",
    latestObservationDate: null,
    summary: "The focused pilot review found no directly usable dated source establishing Sarawak-specific PEDi coverage against the Blueprint target. This is an evidence gap, not evidence of non-delivery.",
    updates: [],
    sources: [],
  },
};

export const OUTCOME_OBSERVATIONS = [
  {
    id: "outcome-digital-jobs",
    outcomeIndex: 1,
    target: "Create between 39,000 to 48,750 new semi and high-skilled digital jobs",
    status: "no-current-evidence",
    latestValue: null,
    measurementPeriod: null,
    reviewedAt: "2026-08-10",
    summary: "No directly comparable Sarawak series was found for new semi- and high-skilled digital jobs using the Blueprint definition. National ICT employment totals were not accepted as a substitute.",
    sources: [],
  },
  {
    id: "outcome-digital-investment",
    outcomeIndex: 2,
    target: "Achieve 50% growth in investment and partnerships",
    status: "no-current-evidence",
    latestValue: null,
    measurementPeriod: null,
    reviewedAt: "2026-08-10",
    summary: "No dated official series was found that measures both Sarawak digital investment and partnerships against a stated Blueprint base period. Announcements and individual agreements were not counted as growth.",
    sources: [],
  },
  {
    id: "outcome-connectivity",
    outcomeIndex: 3,
    target: "Achieve 96% high-speed connectivity throughout Sarawak",
    status: "no-current-evidence",
    latestValue: null,
    measurementPeriod: null,
    reviewedAt: "2026-08-10",
    summary: "No directly comparable official high-speed-connectivity coverage measure was accepted. Household internet access and use statistics do not establish the Blueprint's coverage definition.",
    sources: [],
  },
  {
    id: "outcome-digital-gdp",
    outcomeIndex: 4,
    target: "Achieve 20% Digital Economy contribution to Sarawak’s GDP by 2030 (RM56.4 billion)",
    status: "no-current-evidence",
    latestValue: null,
    measurementPeriod: null,
    reviewedAt: "2026-08-10",
    summary: "Official total state GDP and national digital-economy figures are not a Sarawak digital-economy value-added series. No directly comparable state observation was accepted.",
    sources: [],
  },
  {
    id: "outcome-household-income",
    outcomeIndex: 5,
    target: "Achieve RM4,000 average contribution from digital economy to household income",
    status: "no-current-evidence",
    latestValue: null,
    measurementPeriod: null,
    reviewedAt: "2026-08-10",
    summary: "No official household-income measure was found that attributes an average amount to the digital economy. Conventional household-income statistics were not accepted as a substitute.",
    sources: [],
  },
  {
    id: "outcome-high-tech-startups",
    outcomeIndex: 6,
    target: "Create 500 high-tech start-ups",
    status: "no-current-evidence",
    latestValue: null,
    measurementPeriod: null,
    reviewedAt: "2026-08-10",
    summary: "No dated official Sarawak count was found using the Blueprint's high-tech start-up definition. Incubator participants and event attendance were not counted as start-ups created.",
    sources: [],
  },
  {
    id: "outcome-online-services",
    outcomeIndex: 7,
    target: "Achieve 100% online service delivery and improved ease of doing business",
    status: "no-current-evidence",
    latestValue: null,
    measurementPeriod: null,
    reviewedAt: "2026-08-10",
    summary: "No dated official statewide service denominator and corresponding ease-of-doing-business measure were found. Individual online-service launches were not treated as a statewide completion rate.",
    sources: [],
  },
];
