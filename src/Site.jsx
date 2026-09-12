import { useEffect, useRef, useState } from "react";

import App from "./App.jsx";
import BackToTop from "./BackToTop.jsx";
import { applyDocumentRouteMetadata } from "./documentMetadata.js";
import { getUiCopy } from "./localization.js";
import {
  getRouteById,
  getRouteHref,
  resolveRoute,
} from "./routes.js";
import UpdatesPage from "./UpdatesPage.jsx";
import { ThemeToggle } from "./SiteControls.jsx";
import { applyDocumentTheme } from "./theme.js";

export default function Site({ route }) {
  const [activeRoute, setActiveRoute] = useState(route);
  const [menuOpen, setMenuOpen] = useState(false);
  const [navIntroDone, setNavIntroDone] = useState(false);
  const [skipIntro, setSkipIntro] = useState(false);
  const introChecked = useRef(false);
  const menuButtonRef = useRef(null);
  const pageHeadingRef = useRef(null);
  const previousPageRef = useRef(route.page);
  const copy = getUiCopy(activeRoute.language);

  useEffect(() => {
    const motion = window.matchMedia("(prefers-reduced-motion: reduce)");
    const finish = () => { if (motion.matches) { setNavIntroDone(true); setSkipIntro(true); } };
    const frame = requestAnimationFrame(finish);
    motion.addEventListener("change", finish);
    return () => { cancelAnimationFrame(frame); motion.removeEventListener("change", finish); };
  }, []);

  useEffect(() => {
    if (introChecked.current) return;
    introChecked.current = true;
    try {
      if (document.documentElement.dataset.load === "returning") {
        queueMicrotask(() => {
          setNavIntroDone(true);
          setSkipIntro(true);
        });
      }
    } catch { /* Internal navigation still skips the introduction. */ }
  }, []);

  useEffect(() => {
    if (!menuOpen) return undefined;
    const dismiss = (event) => {
      if (event.type === "keydown" && event.key === "Escape") {
        setMenuOpen(false);
        menuButtonRef.current?.focus();
      } else if (event.type === "pointerdown" && !event.target.closest(".concept-nav")) {
        setMenuOpen(false);
      }
    };
    document.addEventListener("keydown", dismiss);
    const resize = () => { if (window.innerWidth > 760) setMenuOpen(false); };
    window.addEventListener("resize", resize);
    document.addEventListener("pointerdown", dismiss);
    return () => {
      document.removeEventListener("keydown", dismiss);
      window.removeEventListener("resize", resize);
      document.removeEventListener("pointerdown", dismiss);
    };
  }, [menuOpen]);

  useEffect(() => {
    const handlePopState = () => {
      setSkipIntro(true);
      setNavIntroDone(true);
      setMenuOpen(false);
      setActiveRoute(
        resolveRoute(window.location.pathname, import.meta.env.BASE_URL)
      );
    };

    window.addEventListener("popstate", handlePopState);
    return () => window.removeEventListener("popstate", handlePopState);
  }, []);

  useEffect(() => {
    applyDocumentRouteMetadata(activeRoute);

    const pageChanged = previousPageRef.current !== activeRoute.page;
    previousPageRef.current = activeRoute.page;

    if (!pageChanged) {
      return undefined;
    }

    window.scrollTo({ top: 0, left: 0, behavior: "auto" });
    const frameId = window.requestAnimationFrame(() => {
      pageHeadingRef.current?.focus({ preventScroll: true });
    });

    return () => window.cancelAnimationFrame(frameId);
  }, [activeRoute]);

  const navigate = (event, routeId, hash = "") => {
    if (
      event.defaultPrevented ||
      event.button !== 0 ||
      event.metaKey ||
      event.ctrlKey ||
      event.shiftKey ||
      event.altKey
    ) {
      return;
    }

    event.preventDefault();
    setSkipIntro(true);
    setNavIntroDone(true);
    setMenuOpen(false);
    const nextRoute = getRouteById(routeId);
    const pageChanged = nextRoute.page !== activeRoute.page;

    window.history.pushState(
      {},
      "",
      `${getRouteHref(routeId, import.meta.env.BASE_URL)}${hash ? `#${hash}` : ""}`
    );
    setActiveRoute(nextRoute);

    if (hash) {
      window.requestAnimationFrame(() => {
        document.getElementById(hash)?.scrollIntoView();
      });
    } else if (pageChanged) {
      window.scrollTo({ top: 0 });
    }
  };

  const trackerRoute = activeRoute.language === "ms" ? "tracker-ms" : "tracker-en";
  const updatesRoute = activeRoute.language === "ms" ? "updates-ms" : "updates";
  const navigation = (
    <nav className={`concept-nav${navIntroDone ? " concept-nav--ready" : ""}${skipIntro ? " concept-nav--skip-intro" : ""}`} aria-label="Primary navigation" onFocusCapture={() => setNavIntroDone(true)} onAnimationEnd={(event) => { if (event.animationName === "sde-logo-enter") setNavIntroDone(true); }}>
      <a className="concept-brand" href={getRouteHref(trackerRoute)} onClick={(event) => navigate(event, trackerRoute)} aria-label="SDE 2030 Blueprint Explorer home">
        <img src="/favicon-production-browser.png?v=20260912b" alt="" width="32" height="32" />
        <span className="concept-brand-name" aria-hidden="true">{Array.from("SDE 2030 Blueprint Explorer").map((letter, index) => <span className="sde-brand-letter" style={{ "--letter-index": index }} key={index}>{letter === " " ? "\u00a0" : letter}</span>)}</span>
      </a>
      <div id="concept-navigation-links" className={`concept-links${menuOpen ? " concept-links--open" : ""}`}>
        <a aria-current={activeRoute.page === "tracker" ? "page" : undefined} href={getRouteHref(trackerRoute)} onClick={(event) => navigate(event, trackerRoute)}>{copy.footer.tracker}</a>
        <a aria-current={activeRoute.page === "updates" ? "page" : undefined} href={getRouteHref(updatesRoute)} onClick={(event) => navigate(event, updatesRoute)}>{copy.navigation.methodology}</a>
      </div>
      <div className="concept-utilities">
        <ThemeToggle copy={copy} onThemeToggle={(theme) => { applyDocumentTheme(theme); try { localStorage.setItem("sde-theme", theme); } catch { /* Theme remains active for this visit. */ } }} />
        <button ref={menuButtonRef} className="concept-menu-toggle" type="button" aria-expanded={menuOpen} aria-controls="concept-navigation-links" aria-label={menuOpen ? "Close menu" : "Open menu"} onClick={() => setMenuOpen((current) => !current)}>
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" aria-hidden="true"><path d={menuOpen ? "M6 6l12 12M18 6L6 18" : "M4 7h16M4 12h16M4 17h16"} /></svg>
        </button>
      </div>
    </nav>
  );

  if (activeRoute.page === "updates") {
    return (
      <>
        {navigation}
        <UpdatesPage
          language={activeRoute.language}
          onNavigate={navigate}
          headingRef={pageHeadingRef}
          returning={skipIntro}
        />
        <BackToTop label={copy.accessibility.backToTop} />
      </>
    );
  }

  return (
    <>
      {navigation}
      <App language={activeRoute.language} onNavigate={navigate} headingRef={pageHeadingRef} introReady={navIntroDone} returning={skipIntro} />
      <BackToTop label={copy.accessibility.backToTop} />
    </>
  );
}
