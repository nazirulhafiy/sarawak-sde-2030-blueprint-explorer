export const DEFAULT_LANGUAGE = "en";
export const SUPPORTED_LANGUAGES = ["en", "ms"];

const shared = {
  themeToggle: {
    switchToDark: "Switch to dark mode",
    switchToLight: "Switch to light mode",
  },
  languageControl: { label: "Language" },
  accessibility: {
    environment: (name) => `${name} environment`,
  },
};

const EN = {
  ...shared,
  metadata: {
    title: "SDE 2030 Blueprint Explorer | Sarawak Development Monitor",
    description:
      "An independent explorer of the 2023 Sarawak Digital Economy Blueprint 2030, covering its pillars, initiatives, original targets, timelines and lead agencies.",
  },
  navigation: { methodology: "Baseline & methodology" },
  header: {
    kicker: "Sarawak Development Monitor",
    contextTitle: "SDE 2030",
    productTitle: "Blueprint Explorer",
    title: "SDE 2030 Blueprint Explorer",
    programmeName: "Sarawak Digital Economy Blueprint 2030",
    intro:
      "Initiatives under Sarawak's Digital Economy Blueprint 2030, in one place.",
    baselineNotice:
      "An independent explorer with original targets, timelines and lead agencies.",
    baselineRelease: "Last updated:",
  },
  metrics: {
    label: "Blueprint summary",
    pillars: "Strategic pillars",
    actions: "Strategic actions",
    initiatives: "Initiatives",
    phases: "Roadmap phases",
  },
  context: { label: "Blueprint roadmap and outcomes" },
  roadmap: { label: "Blueprint roadmap phases", title: "Roadmap phases" },
  outcomes: { title: "Blueprint outcomes" },
  filters: {
    label: "Filter initiatives",
    search: "Search",
    searchPlaceholder: "Search initiatives",
    pillar: "Pillar",
    phase: "Phase",
    action: "Strategic action",
    roadmapPhase: "Roadmap phase",
    allPillars: "All pillars",
    allRoadmapPhases: "All roadmap phases",
    filteredBy: "Filtered by",
    pillarLabel: (name) => `Pillar: ${name}`,
    showAllPillars: "Show all pillars",
    showPillar: (name) => `Show ${name} initiatives`,
    clearPillar: (name) => `Clear ${name} pillar filter`,
    results: (count) => `${count} ${count === 1 ? "initiative" : "initiatives"} shown`,
    none: "No initiatives match these filters.",
  },
  horizons: { short: "Short term", medium: "Medium term", long: "Long term" },
  initiatives: { title: "Initiatives" },
  card: {
    pillar: "Pillar",
    action: "Strategic action",
    timelineBadge: "Timeline",
    leadAgencies: "Lead agencies",
    objective: "Objective",
    description: "Blueprint description",
    outcomes: "Intended outcomes",
    target: "Blueprint target",
    targetSummary: "Target",
    expand: (name) => `View Blueprint commitment for ${name}`,
    collapse: (name) => `Hide Blueprint commitment for ${name}`,
  },
  footer: {
    explore: "Explore",
    tracker: "Blueprint explorer",
    methodologyLink: "Baseline & methodology",
    dataUse: "Data use",
    contact: "Contact",
    independent:
      "Built by hafiy.my, an independent explorer. Not affiliated with the Sarawak Government.",
  },
  accessibility: {
    ...shared.accessibility,
    skipToInitiatives: "Skip to initiatives",
    initiatives: "Blueprint initiatives",
  },
  methodologyPage: {
    back: "Blueprint explorer",
    title: "Baseline & methodology",
    intro:
      "The Blueprint remains the 2023 source baseline for every initiative and original commitment shown in this explorer.",
    sections: [
      [
        "What this release contains",
        "The original five pillars, 31 strategic actions, 106 initiatives, three roadmap phases, seven Blueprint outcomes and printed page references.",
      ],
      [
        "What it does not claim",
        "This release does not assess current implementation, certify completion or infer progress from an original target or timeline.",
      ],
      [
        "How initiative cards are structured",
        "Each card preserves its pillar, strategic action, objective, description, intended outcomes, original target, timeline and named lead agencies.",
      ],
      [
        "Source boundary",
        "The user-supplied 2023 Blueprint PDF is the baseline source. Later implementation evidence is not displayed in this phase of the explorer.",
      ],
      [
        "Source and data use",
        "The Sarawak Digital Economy Blueprint 2030 remains the work of the Sarawak Government and its named publishers. This independent explorer does not redistribute or relicense the original publication. The explorer's original dataset structure, arrangement and added metadata may be reused with attribution to “SDE 2030 Blueprint Explorer by hafiy.my” and a link to sde2030.com. Source-derived wording remains subject to the rights of its original publisher. The dataset must not be represented as official or as verified current implementation status.",
        "data-use",
      ],
      [
        "Language boundary",
        "The public interface is currently available in English only.",
      ],
    ],
  },
};

const MS = {
  ...EN,
  metadata: {
    title: "Peneroka Blueprint SDE 2030 | Sarawak Development Monitor",
    description:
      "Peneroka bebas Blueprint Ekonomi Digital Sarawak 2030 tahun 2023 yang merangkumi teras, inisiatif, sasaran, garis masa asal dan agensi peneraju.",
  },
  languageControl: { label: "Bahasa" },
  navigation: { methodology: "Asas & metodologi" },
  header: {
    kicker: "Sarawak Development Monitor",
    contextTitle: "SDE 2030",
    productTitle: "Peneroka Blueprint",
    title: "Peneroka Blueprint SDE 2030",
    programmeName: "Blueprint Ekonomi Digital Sarawak 2030",
    intro: "Inisiatif di bawah Blueprint Ekonomi Digital Sarawak 2030, di satu tempat.",
    baselineNotice:
      "Peneroka bebas dengan sasaran, garis masa asal dan agensi peneraju.",
    baselineRelease: "Kemas kini terakhir:",
  },
  metrics: {
    label: "Ringkasan Blueprint",
    pillars: "Teras strategik",
    actions: "Tindakan strategik",
    initiatives: "Inisiatif",
    phases: "Fasa hala tuju",
  },
  context: { label: "Hala tuju dan hasil Blueprint" },
  roadmap: { label: "Fasa hala tuju Blueprint", title: "Fasa hala tuju" },
  outcomes: { title: "Hasil Blueprint" },
  filters: {
    label: "Tapis inisiatif",
    search: "Carian",
    searchPlaceholder: "Cari inisiatif",
    pillar: "Teras",
    phase: "Fasa",
    action: "Tindakan strategik",
    roadmapPhase: "Fasa hala tuju",
    allPillars: "Semua teras",
    allRoadmapPhases: "Semua fasa hala tuju",
    filteredBy: "Ditapis mengikut",
    pillarLabel: (name) => `Teras: ${name}`,
    showAllPillars: "Tunjukkan semua teras",
    showPillar: (name) => `Tunjukkan inisiatif ${name}`,
    clearPillar: (name) => `Kosongkan penapis teras ${name}`,
    results: (count) => `${count} inisiatif dipaparkan`,
    none: "Tiada inisiatif sepadan dengan penapis ini.",
  },
  horizons: {
    short: "Jangka pendek",
    medium: "Jangka sederhana",
    long: "Jangka panjang",
  },
  initiatives: { title: "Inisiatif" },
  card: {
    pillar: "Teras",
    action: "Tindakan strategik",
    timelineBadge: "Garis masa",
    leadAgencies: "Agensi peneraju",
    objective: "Objektif",
    description: "Huraian Blueprint",
    outcomes: "Hasil yang dimaksudkan",
    target: "Sasaran Blueprint",
    targetSummary: "Sasaran",
    expand: (name) => `Lihat komitmen Blueprint untuk ${name}`,
    collapse: (name) => `Sembunyikan komitmen Blueprint untuk ${name}`,
  },
  footer: {
    explore: "Terokai",
    tracker: "Peneroka Blueprint",
    methodologyLink: "Asas & metodologi",
    dataUse: "Penggunaan data",
    contact: "Hubungi",
    independent:
      "Dibina oleh hafiy.my sebagai peneroka bebas. Tidak berafiliasi dengan Kerajaan Sarawak.",
  },
  accessibility: {
    environment: (name) => `persekitaran ${name}`,
    skipToInitiatives: "Langkau ke inisiatif",
    initiatives: "Inisiatif Blueprint",
  },
  methodologyPage: {
    back: "Peneroka Blueprint",
    title: "Asas & metodologi",
    intro:
      "Blueprint 2023 kekal sebagai sumber asas bagi setiap inisiatif dan komitmen asal yang dipaparkan dalam peneroka ini.",
    sections: [
      [
        "Kandungan keluaran ini",
        "Lima teras asal, 31 tindakan strategik, 106 inisiatif, tiga fasa hala tuju, tujuh hasil Blueprint dan rujukan halaman bercetak.",
      ],
      [
        "Perkara yang tidak dituntut",
        "Keluaran ini tidak menilai pelaksanaan semasa, mengesahkan penyiapan atau membuat inferens kemajuan daripada sasaran atau garis masa asal.",
      ],
      [
        "Struktur kad inisiatif",
        "Setiap kad mengekalkan teras, tindakan strategik, objektif, huraian, hasil yang dimaksudkan, sasaran, garis masa asal dan agensi peneraju.",
      ],
      [
        "Batas sumber",
        "PDF Blueprint 2023 yang dibekalkan pengguna ialah sumber asas. Bukti pelaksanaan kemudian tidak dipaparkan dalam fasa peneroka ini.",
      ],
      [
        "Sumber dan penggunaan data",
        "Sarawak Digital Economy Blueprint 2030 kekal sebagai karya Kerajaan Sarawak dan penerbit yang dinamakan. Peneroka bebas ini tidak mengedar atau melesenkan semula penerbitan asal. Struktur, susunan dan metadata tambahan asal bagi set data peneroka boleh digunakan semula dengan atribusi kepada “SDE 2030 Blueprint Explorer by hafiy.my” serta pautan ke sde2030.com. Perkataan yang bersumberkan Blueprint kekal tertakluk pada hak penerbit asal. Set data ini tidak boleh digambarkan sebagai rasmi atau sebagai status pelaksanaan semasa yang telah disahkan.",
        "data-use",
      ],
      [
        "Batas bahasa",
        "Kawalan antara muka tersedia dalam bahasa Inggeris dan Bahasa Melayu. Perkataan kanonik Blueprint kekal dalam bahasa Inggeris sehingga terjemahan yang disemak tersedia.",
      ],
    ],
  },
};

export function getUiCopy(language = DEFAULT_LANGUAGE) {
  return language === "ms" ? MS : EN;
}
