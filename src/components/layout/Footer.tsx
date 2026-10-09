// Style
import "./Footer.css";
// Config
import { divisions, siteConfig } from "@barito-bahalap/config";
import { footerGroups, socialLinks } from "@barito-bahalap/config";
// Components
import { SmartLink, Brand } from "@/components";

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="footer">
      <div className="footer__main container wide">
        <div className="footer__col footer__col--brand">
          <Brand onDark />
          <p className="footer__tagline">{siteConfig.tagline}</p>
          <p className="footer__firewall">
            BBT and BBM operate as separate brands with separate teams, client
            accounts and data.
          </p>
          <a
            className="footer__email"
            href={`mailto:${siteConfig.contactEmail}`}
          >
            {siteConfig.contactEmail}
          </a>
        </div>

        {footerGroups.map(({ title, links }) => (
          <nav key={title} className="footer__col" aria-label={title}>
            <h2 className="footer__heading">{title}</h2>
            {links.map(({ label, href }) => (
              <SmartLink key={href} href={href} className="footer__link">
                {label}
              </SmartLink>
            ))}
          </nav>
        ))}

        <div className="footer__col">
          <h2 className="footer__heading">Divisions</h2>
          {divisions.map(({ id, brand, name }) => (
            <span key={id} className="footer__division" data-brand={brand}>
              <span className="footer__dot" aria-hidden="true" />
              {name}
            </span>
          ))}
        </div>

        {socialLinks.length > 0 && (
          <nav className="footer__col" aria-label="Social">
            <h2 className="footer__heading">Follow</h2>
            {socialLinks.map(({ label, href }) => (
              <SmartLink key={href} href={href} className="footer__link">
                {label}
              </SmartLink>
            ))}
          </nav>
        )}
      </div>

      <div className="footer__bottom">
        <div className="footer__bottom-inner container wide">
          <small>
            &copy; {currentYear} {siteConfig.legalName}. All rights reserved.
          </small>
          <small>{siteConfig.location}</small>
        </div>
      </div>
    </footer>
  );
}
