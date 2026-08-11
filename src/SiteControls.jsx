import {
  useEffect,
  useLayoutEffect,
  useRef,
  useState,
  useSyncExternalStore,
} from "react";
import { shouldShowEnvironmentBadge } from "./environment.js";
import { getRouteHref } from "./routes.js";

const useIsomorphicLayoutEffect =
  typeof window === "undefined" ? useEffect : useLayoutEffect;

function getDocumentTheme() {
  if (typeof document === "undefined") return "light";
  return document.documentElement.dataset.theme === "dark" ? "dark" : "light";
}

function subscribeToDocumentTheme(onStoreChange) {
  if (typeof MutationObserver === "undefined") return () => {};
  const observer = new MutationObserver(onStoreChange);
  observer.observe(document.documentElement, {
    attributes: true,
    attributeFilter: ["data-theme"],
  });
  return () => observer.disconnect();
}

export function NavigationPillLink({ children, className = "", href, onClick }) {
  return (
    <a className={`navigation-pill-link ${className}`.trim()} href={href} onClick={onClick}>
      <span className="navigation-pill-link-inner">{children}</span>
    </a>
  );
}

export function PillarClassificationBadge({
  active = false,
  color,
  copy,
  interactive = true,
  name,
  onAllPillarsFilter,
  onPillarFilter,
}) {
  const rootRef = useRef(null);
  const kindRef = useRef(null);
  const nameRef = useRef(null);
  const [indicatorMetrics, setIndicatorMetrics] = useState(null);

  useIsomorphicLayoutEffect(() => {
    if (!interactive) {
      setIndicatorMetrics(null);
      return undefined;
    }

    const updateIndicatorMetrics = () => {
      if (!rootRef.current || !kindRef.current || !nameRef.current) return;
      setIndicatorMetrics({
        kind: { left: kindRef.current.offsetLeft, width: kindRef.current.offsetWidth },
        name: { left: nameRef.current.offsetLeft, width: nameRef.current.offsetWidth },
      });
    };

    updateIndicatorMetrics();
    const observer = typeof ResizeObserver === "undefined"
      ? null
      : new ResizeObserver(updateIndicatorMetrics);
    [rootRef.current, kindRef.current, nameRef.current].forEach((element) => observer?.observe(element));
    window.addEventListener("resize", updateIndicatorMetrics);
    return () => {
      observer?.disconnect();
      window.removeEventListener("resize", updateIndicatorMetrics);
    };
  }, [interactive, name]);

  const activate = (event, action) => {
    action();
    if (event.detail > 0) event.currentTarget.blur();
  };

  if (!interactive) {
    return (
      <div
        className="pillar-classification pillar-classification--static"
        style={{ "--pillar-accent": color, "--pillar-fill": color }}
      >
        <span className="pillar-classification-button pillar-classification-kind">
          <span>{copy.card.pillar}</span>
        </span>
        <span className="pillar-classification-button pillar-classification-name">
          <span>{name}</span>
        </span>
      </div>
    );
  }

  return (
    <div
      className="pillar-classification"
      data-active-target={active ? "name" : "kind"}
      data-indicator-ready={indicatorMetrics ? "true" : "false"}
      role="group"
      aria-label={copy.filters.pillarLabel(name)}
      ref={rootRef}
      style={{
        "--pillar-accent": color,
        "--pillar-fill": color,
        "--pillar-kind-left": `${indicatorMetrics?.kind.left ?? 0}px`,
        "--pillar-kind-width": `${indicatorMetrics?.kind.width ?? 0}px`,
        "--pillar-name-left": `${indicatorMetrics?.name.left ?? 0}px`,
        "--pillar-name-width": `${indicatorMetrics?.name.width ?? 0}px`,
      }}
    >
      <span className="pillar-classification-indicator" aria-hidden="true" />
      <button
        className="pillar-classification-button pillar-classification-kind"
        type="button"
        onClick={(event) => activate(event, onAllPillarsFilter)}
        aria-label={copy.filters.showAllPillars}
        aria-pressed="false"
        ref={kindRef}
      >
        <span>{copy.card.pillar}</span>
      </button>
      <button
        className="pillar-classification-button pillar-classification-name"
        type="button"
        onClick={(event) => activate(event, onPillarFilter)}
        aria-label={active ? copy.filters.clearPillar(name) : copy.filters.showPillar(name)}
        aria-pressed={active}
        ref={nameRef}
      >
        <span>{name}</span>
      </button>
    </div>
  );
}

export function LanguageToggle({ copy, englishRouteId, language, malayRouteId, onNavigate }) {
  const options = [
    ["en", "EN", englishRouteId],
    ["ms", "BM", malayRouteId],
  ];

  return (
    <div className="language-toggle" role="group" aria-label={copy.languageControl.label}>
      {options.map(([id, label, route], index) => (
        <span className="language-toggle-item" key={id}>
          {index > 0 && <span className="language-toggle-divider" aria-hidden="true">|</span>}
          <a
            className={`language-toggle-option${language === id ? " language-toggle-option--active" : ""}`}
            href={getRouteHref(route)}
            hrefLang={id}
            lang={id}
            onClick={(event) => onNavigate(event, route)}
            aria-current={language === id ? "page" : undefined}
          >
            {label}
          </a>
        </span>
      ))}
    </div>
  );
}

export function ThemeToggle({ onThemeToggle, copy }) {
  const current = useSyncExternalStore(subscribeToDocumentTheme, getDocumentTheme, () => "light");
  const next = current === "dark" ? "light" : "dark";
  return (
    <button
      className="theme-toggle"
      type="button"
      onClick={() => onThemeToggle(next)}
      aria-label={next === "dark" ? copy.themeToggle.switchToDark : copy.themeToggle.switchToLight}
      title={next === "dark" ? copy.themeToggle.switchToDark : copy.themeToggle.switchToLight}
    >
      <svg className="theme-icon-morph" aria-hidden="true" width="18" height="18" viewBox="0 0 24 24">
        <mask id="sde-theme-toggle-moon-mask">
          <rect width="24" height="24" fill="#fff" />
          <circle className="theme-icon-hole" cx="17" cy="7" r="7" fill="#000" />
        </mask>
        <circle className="theme-icon-core" cx="12" cy="12" r="9" mask="url(#sde-theme-toggle-moon-mask)" />
        <g className="theme-icon-rays">
          <line x1="12" y1="1.6" x2="12" y2="3.8" />
          <line x1="12" y1="20.2" x2="12" y2="22.4" />
          <line x1="1.6" y1="12" x2="3.8" y2="12" />
          <line x1="20.2" y1="12" x2="22.4" y2="12" />
          <line x1="4.6" y1="4.6" x2="6.2" y2="6.2" />
          <line x1="17.8" y1="17.8" x2="19.4" y2="19.4" />
          <line x1="4.6" y1="19.4" x2="6.2" y2="17.8" />
          <line x1="17.8" y1="6.2" x2="19.4" y2="4.6" />
        </g>
      </svg>
    </button>
  );
}

export function EnvironmentBadge({ environment, copy }) {
  if (!shouldShowEnvironmentBadge(environment)) return null;
  return (
    <span className="environment-badge" aria-label={copy.accessibility.environment(environment.name)}>
      {environment.badgeLabel}
    </span>
  );
}
