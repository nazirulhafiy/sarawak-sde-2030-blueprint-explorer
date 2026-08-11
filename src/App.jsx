import { useEffect, useMemo, useRef, useState } from "react";
import {
  BLUEPRINT_META,
  BLUEPRINT_PILLARS,
  LAST_UPDATED,
  ROADMAP_PHASES,
} from "./blueprintData.js";
import { getAppEnvironment } from "./environment.js";
import { getUiCopy } from "./localization.js";
import { getRouteHref } from "./routes.js";
import {
  EnvironmentBadge,
  LanguageToggle,
  NavigationPillLink,
  PillarClassificationBadge,
  ThemeToggle,
} from "./SiteControls.jsx";
import SiteFooter from "./SiteFooter.jsx";
import { applyDocumentTheme } from "./theme.js";

const FONT_STACK = "'Inter', system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif";
const FILTER_EXIT_DURATION_MS = 240;
const FILTER_ENTER_SETTLE_MS = 1500;
const FILTER_ENTER_LEAD_MS = 100;
const FILTER_ENTER_STAGGER_MS = 72;
const FILTER_ENTER_MAX_STAGGER_INDEX = 14;
const CARD_PILLAR_FILTERS_ENABLED = false;
const PILLAR_COLORS = {
  "pillar-1": "#6366f1",
  "pillar-2": "#b45309",
  "pillar-3": "#0d9488",
  "pillar-4": "#7c3aed",
  "pillar-5": "#2563eb",
};
const HORIZON_ORDER = { short: 0, medium: 1, long: 2 };
const ROADMAP_PHASE_HORIZONS = ["short", "medium", "long"];

function flattenInitiatives() {
  return BLUEPRINT_PILLARS.flatMap((pillar) =>
    pillar.actions.flatMap((action) =>
      action.initiatives.map((initiative) => ({ ...initiative, pillar, action })),
    ),
  );
}

function toList(value) {
  if (!value) return [];
  return Array.isArray(value) ? value : [value];
}

function text(value) {
  if (typeof value === "string") return value;
  return value?.name || value?.title || value?.label || "";
}

function sourceItems(value) {
  return toList(value)
    .flatMap((entry) => String(text(entry) || entry).split("•"))
    .map((entry) => entry.trim())
    .filter(Boolean)
    .map((entry) => entry
      .replace(/^and\s+/i, "")
      .replace(/;\s*and\s*$/i, "")
      .replace(/[;.]\s*$/, ""));
}

function targetDisplayWeight(value) {
  const parsedItems = sourceItems(value);
  const hasListIntroduction = parsedItems.length > 1 && /:\s*$/.test(parsedItems[0]);
  const introduction = hasListIntroduction ? parsedItems[0] : null;
  const items = hasListIntroduction ? parsedItems.slice(1) : parsedItems;
  const estimatedLines = items.reduce(
    (total, item) => total + Math.max(1, Math.ceil(item.length / 52)),
    introduction ? Math.max(1, Math.ceil(introduction.length / 52)) : 0,
  );
  const listGapWeight = Math.max(0, items.length - 1) * 0.25;

  return estimatedLines + listGapWeight + items.join("").length / 10000;
}

function compareInitiatives(left, right) {
  const horizonDifference = (HORIZON_ORDER[left.horizon] ?? 99) - (HORIZON_ORDER[right.horizon] ?? 99);
  if (horizonDifference !== 0) return horizonDifference;

  return targetDisplayWeight(right.target) - targetDisplayWeight(left.target);
}

function displayDate(value, language) {
  if (!value) return null;
  if (/^\d{4}$/.test(value)) return value;
  const monthOnly = /^\d{4}-\d{2}$/.test(value);
  const parsed = new Date(`${value}${monthOnly ? "-01" : ""}T00:00:00Z`);
  if (Number.isNaN(parsed.getTime())) return value;
  return new Intl.DateTimeFormat(
    language === "ms" ? "ms-MY" : "en-MY",
    monthOnly
      ? { month: "short", year: "numeric", timeZone: "UTC" }
      : { day: "numeric", month: "long", year: "numeric", timeZone: "UTC" },
  ).format(parsed);
}

function SourceText({ value }) {
  const items = sourceItems(value);
  const [firstItem, ...remainingItems] = items;
  const hasListIntroduction = remainingItems.length > 0 && /:\s*$/.test(firstItem);

  if (items.length <= 1) return <p>{items[0] || ""}</p>;
  if (hasListIntroduction) {
    return (
      <>
        <p className="source-text-intro">{firstItem}</p>
        <ul>{remainingItems.map((entry, index) => <li key={`${entry}-${index}`}>{entry}</li>)}</ul>
      </>
    );
  }
  return <ul>{items.map((entry, index) => <li key={`${entry}-${index}`}>{entry}</li>)}</ul>;
}

function TargetPreview({ value }) {
  const parsedItems = sourceItems(value);
  const hasListIntroduction = parsedItems.length > 1 && /:\s*$/.test(parsedItems[0]);
  const introduction = hasListIntroduction ? parsedItems[0] : null;
  const items = hasListIntroduction ? parsedItems.slice(1) : parsedItems;

  if (items.length <= 1 && !introduction) {
    return <span className="initiative-target-preview"><strong>{items[0] || ""}</strong></span>;
  }

  return (
    <span className="initiative-target-preview">
      {introduction && <strong className="initiative-target-intro">{introduction}</strong>}
      <span className="initiative-target-list" role="list">
        {items.map((entry, index) => (
          <span className="initiative-target-list-item" role="listitem" key={`${entry}-${index}`}>{entry}</span>
        ))}
      </span>
    </span>
  );
}

function TimelineBadge({ copy, value }) {
  const match = String(value || "").match(/^(\d{4})\s*-\s*(\d{4})$/);

  if (!match) {
    return <span className="initiative-timeline-badge">{copy.card.timelineBadge}: {value}</span>;
  }

  const [, startYear, endYear] = match;
  const intervalCount = Math.max(1, Number(endYear) - Number(startYear));
  return (
    <span className="initiative-timeline-badge" aria-label={`${copy.card.timelineBadge}: ${value}`}>
      <span className="initiative-timeline-year" aria-hidden="true">{startYear}</span>
      <span className="initiative-timeline-segments" aria-hidden="true">
        {Array.from({ length: intervalCount }, (_, index) => (
          <span className="initiative-timeline-segment" key={index} />
        ))}
      </span>
      <span className="initiative-timeline-year" aria-hidden="true">{endYear}</span>
    </span>
  );
}

function InitiativeCard({
  activePillar,
  copy,
  expanded,
  filterIndex = 0,
  item,
  onClearPillars,
  onPillarFilter,
  onToggle,
}) {
  const detailsId = `initiative-${item.id}`;
  const pillarColor = PILLAR_COLORS[item.pillar.id] || "#475569";
  const facts = [
    [copy.card.leadAgencies, toList(item.leadAgencies).join(", ")],
    [copy.card.action, item.action.name],
  ].filter(([, value]) => value);
  const pillarActive = activePillar === item.pillar.id;

  return (
    <article
      className="initiative-card"
      id={detailsId}
      data-expanded={expanded ? "true" : "false"}
      style={{
        "--pillar-accent": pillarColor,
        "--initiative-filter-delay": `${FILTER_ENTER_LEAD_MS + filterIndex * FILTER_ENTER_STAGGER_MS}ms`,
      }}
    >
      <div className="initiative-classification-slot">
        <PillarClassificationBadge
          active={pillarActive}
          color={pillarColor}
          copy={copy}
          interactive={CARD_PILLAR_FILTERS_ENABLED}
          name={item.pillar.name}
          onAllPillarsFilter={onClearPillars}
          onPillarFilter={() => onPillarFilter(pillarActive ? "all" : item.pillar.id)}
        />
      </div>
      <button
        className="initiative-card-trigger"
        type="button"
        onClick={onToggle}
        aria-expanded={expanded}
        aria-controls={`${detailsId}-details`}
        aria-label={expanded ? copy.card.collapse(item.name) : copy.card.expand(item.name)}
      >
        <span className="initiative-card-top-row">
          <span aria-hidden="true" />
          <span className="initiative-card-chevron" data-expanded={expanded ? "true" : "false"} aria-hidden="true" />
        </span>
        <span className="initiative-card-main">
          <span className="initiative-card-title" role="heading" aria-level="2">{item.name}</span>
          <span className="initiative-card-status-row">
            <span className="initiative-horizon">{copy.horizons[item.horizon] || item.horizon}</span>
            <TimelineBadge copy={copy} value={item.timeline} />
          </span>
        </span>
        <span className="initiative-target-callout">
          <span className="initiative-target-label">{copy.card.targetSummary}</span>
          <TargetPreview value={item.target} />
        </span>
      </button>
      <div className="initiative-details" id={`${detailsId}-details`} hidden={!expanded}>
        <dl className="initiative-facts">
          {facts.map(([label, value]) => (
            <div key={label}><dt>{label}</dt><dd>{value}</dd></div>
          ))}
        </dl>
        <section><h3>{copy.card.objective}</h3><SourceText value={item.objective} /></section>
        {item.description && <section><h3>{copy.card.description}</h3><SourceText value={item.description} /></section>}
        {toList(item.outcomes).length > 0 && <section><h3>{copy.card.outcomes}</h3><SourceText value={item.outcomes} /></section>}
        {item.target && <section className="blueprint-target"><h3>{copy.card.target}</h3><SourceText value={item.target} /></section>}
      </div>
    </article>
  );
}

function useCountUp(target, duration = 1400) {
  const [displayValue, setDisplayValue] = useState(0);

  useEffect(() => {
    if (
      !Number.isFinite(target) ||
      target === 0 ||
      window.matchMedia("(prefers-reduced-motion: reduce)").matches
    ) {
      const frameId = window.requestAnimationFrame(() => {
        setDisplayValue(Number.isFinite(target) ? target : 0);
      });
      return () => window.cancelAnimationFrame(frameId);
    }

    let frameId = null;
    let startTime = null;
    const animate = (timestamp) => {
      if (startTime === null) {
        startTime = timestamp;
      }

      const progress = Math.min((timestamp - startTime) / duration, 1);
      const easedProgress = 1 - Math.pow(1 - progress, 3);
      setDisplayValue(Math.round(target * easedProgress));

      if (progress < 1) {
        frameId = window.requestAnimationFrame(animate);
      }
    };

    frameId = window.requestAnimationFrame(animate);

    return () => {
      if (frameId !== null) {
        window.cancelAnimationFrame(frameId);
      }
    };
  }, [duration, target]);

  return displayValue;
}

function AnimatedMetricNumber({ value }) {
  const displayValue = useCountUp(value);

  return (
    <>
      <span className="summary-metric-value" aria-hidden="true">{displayValue}</span>
      <span className="visually-hidden">{value}</span>
    </>
  );
}

function SummaryMetrics({ copy }) {
  const metrics = [
    [BLUEPRINT_META.pillars, copy.metrics.pillars],
    [BLUEPRINT_META.strategicActions, copy.metrics.actions],
    [BLUEPRINT_META.initiatives, copy.metrics.initiatives],
    [ROADMAP_PHASES.length, copy.metrics.phases],
  ];
  return (
    <section className="summary-metrics" aria-label={copy.metrics.label}>
      {metrics.map(([value, label]) => (
        <div key={label}><strong><AnimatedMetricNumber value={value} /></strong><span>{label}</span></div>
      ))}
    </section>
  );
}

export default function App({ language, onNavigate, headingRef }) {
  const copy = getUiCopy(language);
  const [pillar, setPillar] = useState("all");
  const [roadmapPhase, setRoadmapPhase] = useState("all");
  const [query, setQuery] = useState("");
  const [expanded, setExpanded] = useState(new Set());
  const [filterPhase, setFilterPhase] = useState(null);
  const filterExitTimerRef = useRef(null);
  const filterEnterTimerRef = useRef(null);
  const initiatives = useMemo(() => flattenInitiatives(), []);

  useEffect(() => () => {
    if (filterExitTimerRef.current) window.clearTimeout(filterExitTimerRef.current);
    if (filterEnterTimerRef.current) window.clearTimeout(filterEnterTimerRef.current);
  }, []);

  useEffect(() => {
    const root = document.documentElement;
    const useKeyboardFocus = () => { root.dataset.filterInputModality = "keyboard"; };
    const usePointerFocus = () => { root.dataset.filterInputModality = "pointer"; };

    window.addEventListener("keydown", useKeyboardFocus, true);
    window.addEventListener("pointerdown", usePointerFocus, true);

    return () => {
      window.removeEventListener("keydown", useKeyboardFocus, true);
      window.removeEventListener("pointerdown", usePointerFocus, true);
      delete root.dataset.filterInputModality;
    };
  }, []);

  const transitionFilter = (updateFilter) => {
    if (filterExitTimerRef.current) window.clearTimeout(filterExitTimerRef.current);
    if (filterEnterTimerRef.current) window.clearTimeout(filterEnterTimerRef.current);
    setExpanded(new Set());

    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      updateFilter();
      setFilterPhase(null);
      return;
    }

    setFilterPhase("exit");
    filterExitTimerRef.current = window.setTimeout(() => {
      updateFilter();
      setFilterPhase("enter");
      filterExitTimerRef.current = null;
      filterEnterTimerRef.current = window.setTimeout(() => {
        setFilterPhase(null);
        filterEnterTimerRef.current = null;
      }, FILTER_ENTER_SETTLE_MS);
    }, FILTER_EXIT_DURATION_MS);
  };

  const visible = initiatives.filter((item) => {
    const needle = query.trim().toLocaleLowerCase();
    return (pillar === "all" || item.pillar.id === pillar)
      && (roadmapPhase === "all" || item.horizon === roadmapPhase)
      && (!needle || [item.name, item.objective, item.description, item.action.name, item.pillar.name]
        .filter(Boolean)
        .join(" ")
        .toLocaleLowerCase()
        .includes(needle));
  }).sort(compareInitiatives);
  const activePillarName = BLUEPRINT_PILLARS.find((entry) => entry.id === pillar)?.name;
  const maxFilterIndex = Math.min(Math.max(visible.length - 1, 0), FILTER_ENTER_MAX_STAGGER_INDEX);
  const filterIndexDenominator = Math.max(visible.length - 1, 1);
  const toggleTheme = (theme) => {
    applyDocumentTheme(theme);
    try { localStorage.setItem("sde-theme", theme); } catch { /* Session theme remains active. */ }
  };

  return (
    <div className="app-shell" style={{ fontFamily: FONT_STACK }}>
      <a className="skip-link" href="#initiatives">{copy.accessibility.skipToInitiatives}</a>
      <main className="explorer-main">
        <header className="explorer-header">
          <div className="header-meta-row">
            <p className="tracker-kicker">{copy.header.kicker}</p>
            <div className="header-controls">
              <LanguageToggle
                copy={copy}
                englishRouteId="tracker-en"
                language={language}
                malayRouteId="tracker-ms"
                onNavigate={onNavigate}
              />
              <ThemeToggle copy={copy} onThemeToggle={toggleTheme} />
            </div>
          </div>
          <h1 className="page-heading" ref={headingRef} tabIndex={-1}>
            <span className="tracker-title-context">{copy.header.contextTitle}</span>
            <span className="tracker-title-product">{copy.header.productTitle}</span>
          </h1>
          <div className="tracker-description">
            <p>{copy.header.intro}</p>
            <p>{copy.header.baselineNotice}</p>
          </div>
        </header>
        <p className="tracker-last-updated">
          <NavigationPillLink
            className="tracker-updates-link"
            href={getRouteHref(language === "ms" ? "updates-ms" : "updates")}
            onClick={(event) => onNavigate(event, language === "ms" ? "updates-ms" : "updates")}
          >
            {copy.header.baselineRelease} {displayDate(LAST_UPDATED, language)}
            <span className="tracker-updates-link-arrow" aria-hidden="true">↗</span>
          </NavigationPillLink>
        </p>

        <SummaryMetrics copy={copy} />

        <section className="filters" aria-label={copy.filters.label}>
          <label className="filter-search">
            <span className="visually-hidden">{copy.filters.search}</span>
            <svg className="filter-search-icon" aria-hidden="true" viewBox="0 0 24 24">
              <circle cx="11" cy="11" r="6.5" />
              <path d="m16 16 4.25 4.25" />
            </svg>
            <input value={query} onChange={(event) => setQuery(event.target.value)} placeholder={copy.filters.searchPlaceholder} />
          </label>
          <label className="filter-select filter-select--pillar">
            <span className="visually-hidden">{copy.filters.pillar}</span>
            {pillar === "all" && <span className="filter-select-placeholder" aria-hidden="true">{copy.filters.pillar}</span>}
            <select className={pillar === "all" ? "filter-select-native filter-select-native--placeholder" : "filter-select-native"} value={pillar} onChange={(event) => { const nextPillar = event.target.value; transitionFilter(() => setPillar(nextPillar)); }}><option value="all">{copy.filters.allPillars}</option>{BLUEPRINT_PILLARS.map((entry) => <option key={entry.id} value={entry.id}>{entry.name}</option>)}</select>
          </label>
          <label className="filter-select filter-select--roadmap">
            <span className="visually-hidden">{copy.filters.roadmapPhase}</span>
            {roadmapPhase === "all" && <span className="filter-select-placeholder" aria-hidden="true">{copy.filters.phase}</span>}
            <select className={roadmapPhase === "all" ? "filter-select-native filter-select-native--placeholder" : "filter-select-native"} value={roadmapPhase} onChange={(event) => { const nextRoadmapPhase = event.target.value; transitionFilter(() => setRoadmapPhase(nextRoadmapPhase)); }}>
              <option value="all">{copy.filters.allRoadmapPhases}</option>
              {ROADMAP_PHASES.map((phase, index) => (
                <option key={phase.year} value={ROADMAP_PHASE_HORIZONS[index]}>
                  {phase.year} · {phase.name}
                </option>
              ))}
            </select>
          </label>
        </section>

        <section id="initiatives" className="initiatives-section" aria-label={copy.accessibility.initiatives}>
          <div className="initiative-filter-status">
            {activePillarName && (
              <button className="classification-clear-button" type="button" onClick={() => transitionFilter(() => setPillar("all"))}>
                <span>{copy.filters.filteredBy}</span><strong>{activePillarName}</strong><span aria-hidden="true">×</span>
              </button>
            )}
            <span className="visually-hidden" aria-live="polite">{copy.filters.results(visible.length)}</span>
          </div>
          <div className={`initiative-grid${filterPhase ? ` initiative-grid--filter-${filterPhase}` : ""}`}>
            {visible.map((item, index) => (
              <InitiativeCard
                activePillar={pillar}
                copy={copy}
                expanded={expanded.has(item.id)}
                filterIndex={Math.round((index / filterIndexDenominator) * maxFilterIndex)}
                item={item}
                key={item.id}
                onClearPillars={() => transitionFilter(() => setPillar("all"))}
                onPillarFilter={(value) => transitionFilter(() => setPillar(value))}
                onToggle={() => setExpanded((current) => {
                  const next = new Set(current);
                  next.has(item.id) ? next.delete(item.id) : next.add(item.id);
                  return next;
                })}
              />
            ))}
          </div>
          {visible.length === 0 && <p className="no-results">{copy.filters.none}</p>}
        </section>

        <SiteFooter copy={copy} currentPage="tracker" language={language} onNavigate={onNavigate} />
      </main>
      <EnvironmentBadge environment={getAppEnvironment()} copy={copy} />
    </div>
  );
}
