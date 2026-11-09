import { getAppEnvironment } from "./environment.js";
import { getRouteHref } from "./routes.js";
import { EnvironmentBadge } from "./SiteControls.jsx";
import SiteFooter from "./SiteFooter.jsx";

export default function NotFoundPage({
  copy,
  language,
  onNavigate,
  headingRef,
  returning = false,
}) {
  const homeRouteId = language === "ms" ? "tracker-ms" : "tracker-en";

  return (
    <div
      className={`app-shell not-found-shell${returning ? " not-found-shell--returning" : ""}`}
    >
      <main className="methodology-main updates-main not-found-main">
        <header className="explorer-header">
          <h1
            className="page-heading updates-title not-found-title"
            ref={headingRef}
            tabIndex={-1}
          >
            {copy.notFoundPage.title}
          </h1>
          <p className="explorer-intro">{copy.notFoundPage.body}</p>
          <p className="not-found-home">
            <a
              className="not-found-home-link"
              href={getRouteHref(homeRouteId)}
              onClick={(event) => onNavigate(event, homeRouteId)}
            >
              {copy.notFoundPage.homeLink}
            </a>
          </p>
        </header>
        <SiteFooter
          copy={copy}
          currentPage="not-found"
          language={language}
          onNavigate={onNavigate}
        />
      </main>
      <EnvironmentBadge environment={getAppEnvironment()} copy={copy} />
    </div>
  );
}
