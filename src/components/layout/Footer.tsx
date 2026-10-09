// Style
import "./Footer.css";
// Config
import {
  divisions,
  footerGroups,
  siteConfig,
  socialLinks,
} from "@barito-bahalap/config";
// Components
import { SmartLink } from "@barito-bahalap/components/routing";
import { Brand } from ".";

export function Footer() {
  return (
    <footer className="footer">
      <MainGrid />
      <BottomBar />
    </footer>
  );
}

function MainGrid() {
  return (
    <div className="footer__main">
      <div className="footer__col footer__col--brand">
        <Brand />
        <p className="footer__tagline">{siteConfig.tagline}</p>
        {siteConfig.contactEmail && (
          <a
            className="footer__email"
            href={`mailto:${siteConfig.contactEmail}`}
          >
            {siteConfig.contactEmail}
          </a>
        )}
      </div>

      {footerGroups.map(({ title, links }) => (
        <nav key={title} className="footer__col" aria-label={title}>
          <h6 className="footer__heading">{title}</h6>
          {links.map(({ label, href }) => (
            <SmartLink key={href} href={href} className="footer__link">
              {label}
            </SmartLink>
          ))}
        </nav>
      ))}

      <nav className="footer__col" aria-label="Divisions">
        <h6 className="footer__heading">Divisions</h6>
        {divisions.map(({ id, name, externalUrl }) =>
          externalUrl ? (
            <SmartLink
              key={id}
              href={externalUrl}
              className={`footer__link footer__division footer__division--${id}`}
            >
              {name}
            </SmartLink>
          ) : (
            <span
              key={id}
              className={`footer__link footer__division footer__division--${id}`}
            >
              {name}
            </span>
          ),
        )}
      </nav>

      {socialLinks.length > 0 && (
        <nav className="footer__col" aria-label="Social">
          <h6 className="footer__heading">Follow</h6>
          {socialLinks.map(({ label, href }) => (
            <SmartLink key={href} href={href} className="footer__link">
              {label}
            </SmartLink>
          ))}
        </nav>
      )}
    </div>
  );
}

function BottomBar() {
  const currentYear = new Date().getFullYear();

  return (
    <div className="footer__bottom">
      <small>
        &copy; {currentYear} {siteConfig.legalName}. All rights reserved.
      </small>
      <small>{siteConfig.location}</small>
    </div>
  );
}
