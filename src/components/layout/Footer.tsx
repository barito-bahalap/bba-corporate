// Style
import "./Footer.css";
// Config
import { getFooterGroups } from "@/config/navigation";
import { getDivisions, siteConfig, socialLinks } from "@barito-bahalap/config";
// Hooks
import { useLocale, useLanguageSwitch, useSectionLink } from "@/hooks";
// Components
import { SmartLink, Brand, LanguageSwitcher } from "@/components";

export function Footer() {
  const currentYear = new Date().getFullYear();
  const { locale, ui, site, href } = useLocale();
  const languageItems = useLanguageSwitch();
  const groups = getFooterGroups(locale);
  const divisions = getDivisions(locale);
  const onSectionClick = useSectionLink();

  return (
    <footer className="footer">
      <div className="footer__main cg-wrap">
        <div className="footer__col footer__col--brand">
          <Brand onDark logo logoFull />
          <p className="footer__tagline">{site.tagline}</p>
          <a className="footer__email" href={`mailto:${site.contactEmail}`}>
            {site.contactEmail}
          </a>
        </div>

        {groups.map(({ title, links }) => (
          <nav key={title} className="footer__col" aria-label={title}>
            <h2 className="footer__heading">{title}</h2>
            {links.map((item) => (
              <SmartLink
                key={item.label}
                href={href(item.href)}
                onClick={(e) => onSectionClick(e, item, href(item.href))}
                className="footer__link"
              >
                {item.label}
              </SmartLink>
            ))}
          </nav>
        ))}

        <div className="footer__col">
          <h2 className="footer__heading">{ui.footer.divisions}</h2>
          {divisions.map(({ id, name, href: target }) => (
            <a
              key={id}
              className="footer__link"
              href={target}
              target="_blank"
              rel="noopener noreferrer"
            >
              {name}
            </a>
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

      <div className="footer__mark cg-wrap" aria-hidden="true">
        <p className="footer__wordmark">{siteConfig.shortName}</p>
      </div>

      <div className="footer__bottom">
        <div className="footer__bottom-inner cg-wrap">
          <small>
            &copy; {currentYear} {siteConfig.name}. {ui.footer.rights}
          </small>
          <div className="footer__bottom-end">
            <small>{site.location}</small>
            <LanguageSwitcher
              items={languageItems}
              label={ui.language.label}
              onDark
            />
          </div>
        </div>
      </div>
    </footer>
  );
}
