import { getRouteHref } from "./routes.js";

const HAFIY_URL = "https://hafiy.my";
const CONTACT_URL =
  "mailto:nazirul@hafiy.my?subject=SDE%202030%20Blueprint%20Explorer";

function FooterLink({ children, currentPage, href, onClick, page }) {
  return (
    <a
      aria-current={currentPage === page ? "page" : undefined}
      className="site-footer-link"
      href={href}
      onClick={onClick}
    >
      {children}
    </a>
  );
}

export default function SiteFooter({ copy, currentPage, language, onNavigate }) {
  const trackerRouteId = language === "ms" ? "tracker-ms" : "tracker-en";
  const methodologyRouteId = language === "ms" ? "updates-ms" : "updates";
  const independentParts = copy.footer.independent.split("hafiy.my");

  return (
    <footer className="site-footer">
      <div className="site-footer-main">
        <div className="site-footer-summary">
          <p className="site-footer-brand">{copy.header.title}</p>
          <p className="site-footer-note">
            {copy.header.intro}
            <br className="site-footer-note-break" />
            {copy.header.baselineNotice}
          </p>
        </div>

        <nav aria-label={copy.footer.explore} className="site-footer-nav">
          <h2>{copy.footer.explore}</h2>
          <ul>
            <li>
              <FooterLink
                currentPage={currentPage}
                href={getRouteHref(trackerRouteId)}
                onClick={(event) => onNavigate(event, trackerRouteId)}
                page="tracker"
              >
                {copy.footer.tracker}
              </FooterLink>
            </li>
            <li>
              <FooterLink
                currentPage={currentPage}
                href={getRouteHref(methodologyRouteId)}
                onClick={(event) => onNavigate(event, methodologyRouteId)}
                page="updates"
              >
                {copy.footer.methodologyLink}
              </FooterLink>
            </li>
            <li>
              <a
                className="site-footer-link"
                href={`${getRouteHref(methodologyRouteId)}#data-use`}
                onClick={(event) => onNavigate(event, methodologyRouteId, "data-use")}
              >
                {copy.footer.dataUse}
              </a>
            </li>
            <li>
              <a className="site-footer-link" href={CONTACT_URL}>
                {copy.footer.contact}
              </a>
            </li>
          </ul>
        </nav>
      </div>

      <div className="site-footer-bottom">
        <p>
          {independentParts[0]}
          <a
            className="site-footer-link site-footer-credit-link"
            href={HAFIY_URL}
            rel="noopener noreferrer"
            target="_blank"
          >
            hafiy.my
          </a>
          {independentParts[1]}
        </p>
      </div>
    </footer>
  );
}
