import { createPortal } from "react-dom";
import { useLocation } from "react-router-dom";
// Style
import "./Header.css";
// Config
import { getHeaderCta, getMainNav } from "@/config/navigation";
// Hooks
import { useHeaderDrawer, useLanguageSwitch } from "@/hooks";
import { useLocale, useSectionLink } from "@/hooks";
// Components
import { Button, SmartLink, Brand, LanguageSwitcher } from "@/components";
// Utils
import { pad2 } from "@/domain/format";
// Types
import type { NavLink } from "@barito-bahalap/types";

export function Header() {
  const { pathname } = useLocation();
  const { locale, ui, href } = useLocale();
  const languageItems = useLanguageSwitch();
  const onSectionClick = useSectionLink();
  const { open, triggerRef, closeRef, openDrawer, closeDrawer, dismissDrawer } =
    useHeaderDrawer();
  const nav = getMainNav(locale);
  const cta = getHeaderCta(locale);

  const isActive = ({ href: target, section }: NavLink) =>
    !section && href(target) === pathname;

  return (
    <header className="header">
      <div className="header__main cg-wrap">
        <Brand />

        <nav className="header__menus" aria-label={ui.menu.primaryNav}>
          {nav.map((item) => (
            <SmartLink
              key={item.label}
              href={href(item.href)}
              onClick={(e) => onSectionClick(e, item, href(item.href))}
              className={`header__menu-item${isActive(item) ? " header__menu-item--active" : ""}`}
              aria-current={isActive(item) ? "page" : undefined}
            >
              {item.label}
            </SmartLink>
          ))}
        </nav>

        <div className="header__cta">
          <LanguageSwitcher items={languageItems} label={ui.language.label} />
          <Button
            label={cta.label}
            href={href(cta.href)}
            variant="accent"
            size="sm"
            onClick={(e) => onSectionClick(e, cta, href(cta.href))}
          />
        </div>

        <button
          ref={triggerRef}
          type="button"
          className="header__trigger"
          aria-label={ui.menu.open}
          aria-expanded={open}
          aria-controls="header-drawer"
          onClick={openDrawer}
        >
          <span className="header__bars" aria-hidden="true" />
        </button>
      </div>

      {createPortal(
        <>
          <div
            className={`header__overlay${open ? " header__overlay--open" : ""}`}
            onClick={dismissDrawer}
            aria-hidden="true"
          />

          <aside
            id="header-drawer"
            className={`header__drawer${open ? " header__drawer--open" : ""}`}
            role="dialog"
            aria-label={ui.menu.mobileDialog}
            aria-modal="true"
            inert={!open}
          >
            <div className="header__drawer-head">
              <Brand onDark />
              <button
                ref={closeRef}
                type="button"
                className="header__close"
                aria-label={ui.menu.close}
                onClick={dismissDrawer}
              >
                <span aria-hidden="true">&times;</span>
              </button>
            </div>

            <nav className="header__drawer-nav" aria-label={ui.menu.mobileNav}>
              {nav.map((item, index) => (
                <SmartLink
                  key={item.label}
                  href={href(item.href)}
                  onClick={(e) => {
                    onSectionClick(e, item, href(item.href));
                    closeDrawer();
                  }}
                  className={`header__drawer-item${isActive(item) ? " header__drawer-item--active" : ""}`}
                >
                  <span className="header__drawer-index">
                    [{pad2(index + 1)}]
                  </span>
                  {item.label}
                </SmartLink>
              ))}
            </nav>

            <div className="header__drawer-foot">
              <LanguageSwitcher
                items={languageItems}
                label={ui.language.label}
                onDark
              />
              <Button
                label={cta.label}
                href={href(cta.href)}
                variant="accent"
                size="lg"
                fullWidth
                onClick={(e) => {
                  onSectionClick(e, cta, href(cta.href));
                  closeDrawer();
                }}
              />
            </div>
          </aside>
        </>,
        document.body,
      )}
    </header>
  );
}
