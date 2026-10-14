import { useEffect, useRef, useState } from "react";
import { useLocation } from "react-router-dom";
import { createPortal } from "react-dom";
// Style
import "./Header.css";
// Config
import { getHeaderCta, getMainNav } from "@barito-bahalap/config";
// Contexts & Hooks
import { useHeaderContext } from "@barito-bahalap/contexts";
import { useLocale, useLanguageSwitch } from "@/hooks";
// Components
import { Button, SmartLink, Brand } from "@/components";
import { LanguageSwitcher } from ".";

export function Header() {
  const { transparentAllowed } = useHeaderContext();
  const { pathname } = useLocation();
  const { locale, ui, href } = useLocale();
  const languageItems = useLanguageSwitch();
  const nav = getMainNav(locale);
  const cta = getHeaderCta(locale);
  const [scrolled, setScrolled] = useState(
    () => typeof window !== "undefined" && window.scrollY > 40,
  );
  const [openedAt, setOpenedAt] = useState<string | null>(null);
  const closeRef = useRef<HTMLButtonElement>(null);

  const drawerOpen = openedAt === pathname;

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    const query = window.matchMedia("(min-width: 1024px)");
    const onChange = (event: MediaQueryListEvent) => {
      if (event.matches) setOpenedAt(null);
    };
    query.addEventListener("change", onChange);
    return () => query.removeEventListener("change", onChange);
  }, []);

  useEffect(() => {
    if (!drawerOpen) return;
    const onKey = (event: KeyboardEvent) => {
      if (event.key === "Escape") setOpenedAt(null);
    };
    document.addEventListener("keydown", onKey);
    document.body.classList.add("no-scroll");
    closeRef.current?.focus();
    return () => {
      document.removeEventListener("keydown", onKey);
      document.body.classList.remove("no-scroll");
    };
  }, [drawerOpen]);

  const isTransparent = transparentAllowed && !scrolled && !drawerOpen;
  const closeDrawer = () => setOpenedAt(null);
  const isActive = (target: string) =>
    !target.includes("#") && href(target) === pathname;

  return (
    <header
      className={[
        "header",
        transparentAllowed ? "header--floating" : "",
        isTransparent ? "header--transparent" : "header--solid",
      ]
        .filter(Boolean)
        .join(" ")}
    >
      <div className="header__main container wide">
        <Brand />

        <nav className="header__menus" aria-label={ui.menu.primaryNav}>
          {nav.map(({ label, href: target }) => (
            <SmartLink
              key={target}
              href={href(target)}
              className={`header__menu-item${isActive(target) ? " header__menu-item--active" : ""}`}
              aria-current={isActive(target) ? "page" : undefined}
            >
              {label}
            </SmartLink>
          ))}
        </nav>

        <div className="header__cta">
          <LanguageSwitcher items={languageItems} label={ui.language.label} />
          <Button label={cta.label} href={href(cta.href)} size="sm" />
        </div>

        <button
          type="button"
          className="header__trigger"
          aria-label={ui.menu.open}
          aria-expanded={drawerOpen}
          aria-controls="header-drawer"
          onClick={() => setOpenedAt(pathname)}
        >
          <span className="header__bars" aria-hidden="true" />
        </button>
      </div>

      {createPortal(
        <>
          <div
            className={`header__overlay${drawerOpen ? " header__overlay--open" : ""}`}
            onClick={closeDrawer}
            aria-hidden="true"
          />

          <aside
            id="header-drawer"
            className={`header__drawer${drawerOpen ? " header__drawer--open" : ""}`}
            role="dialog"
            aria-label={ui.menu.mobileDialog}
            aria-modal="true"
            inert={!drawerOpen}
          >
            <div className="header__drawer-head">
              <button
                ref={closeRef}
                type="button"
                className="header__close"
                aria-label={ui.menu.close}
                onClick={closeDrawer}
              >
                <span aria-hidden="true">&times;</span>
              </button>
            </div>

            <nav className="header__drawer-nav" aria-label={ui.menu.mobileNav}>
              {nav.map(({ label, href: target }) => (
                <SmartLink
                  key={target}
                  href={href(target)}
                  onClick={closeDrawer}
                  className={`header__drawer-item${isActive(target) ? " header__drawer-item--active" : ""}`}
                >
                  {label}
                </SmartLink>
              ))}

              <div className="header__drawer-cta">
                <LanguageSwitcher
                  items={languageItems}
                  label={ui.language.label}
                />
                <Button
                  label={cta.label}
                  href={href(cta.href)}
                  fullWidth
                  onClick={closeDrawer}
                />
              </div>
            </nav>
          </aside>
        </>,
        document.body,
      )}
    </header>
  );
}
