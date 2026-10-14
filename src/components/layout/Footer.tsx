// Style
import "./Footer.css";
// Config
import { getDivisions, getFooterGroups } from "@barito-bahalap/config";
import { socialLinks } from "@barito-bahalap/config";
// Hooks
import { useLocale } from "@/hooks/useLocale";
// Components
import { SmartLink, Brand } from "@/components";

export function Footer() {
  const currentYear = new Date().getFullYear();
  const { locale, ui, site, href } = useLocale();
  const groups = getFooterGroups(locale);
  const divisions = getDivisions(locale);

  return (
    <footer className="footer">
      <div className="footer__main container wide">
        <div className="footer__col footer__col--brand">
          <Brand onDark />
          <p className="footer__tagline">{site.tagline}</p>
          <p className="footer__firewall">{ui.footer.firewall}</p>
          <a className="footer__email" href={`mailto:${site.contactEmail}`}>
            {site.contactEmail}
          </a>
        </div>

        {groups.map(({ title, links }) => (
          <nav key={title} className="footer__col" aria-label={title}>
            <h2 className="footer__heading">{title}</h2>
            {links.map(({ label, href: target }) => (
              <SmartLink
                key={target}
                href={href(target)}
                className="footer__link"
              >
                {label}
              </SmartLink>
            ))}
          </nav>
        ))}

        <div className="footer__col">
          <h2 className="footer__heading">{ui.footer.divisions}</h2>
          {divisions.map(({ id, brand, name, href: target }) => (
            <span key={id} className="footer__division" data-brand={brand}>
              <span className="footer__dot" aria-hidden="true" />
              <a href={target} target="_blank" rel="noopener noreferrer">
                {name}
              </a>
            </span>
          ))}
        </div>

        {socialLinks.length > 0 && (
          <nav className="footer__col" aria-label={ui.footer.social}>
            <h2 className="footer__heading">{ui.footer.follow}</h2>
            {socialLinks.map(({ label, href: target }) => (
              <SmartLink key={target} href={target} className="footer__link">
                {label}
              </SmartLink>
            ))}
          </nav>
        )}
      </div>

      <div className="footer__bottom">
        <div className="footer__bottom-inner container wide">
          <small>
            &copy; {currentYear} {site.legalName}. {ui.footer.rights}
          </small>
          <small>{site.location}</small>
        </div>
      </div>
    </footer>
  );
}
