import { useEffect, useRef, useState } from "react";
import { useLocation } from "react-router-dom";
// Style
import "./Header.css";
// Config
import { headerCta, mainNav } from "@barito-bahalap/config";
// Contexts
import { useHeaderContext } from "@barito-bahalap/contexts";
// Components
import { Button, SmartLink, Brand } from "@/components";

export function Header() {
  const { transparentAllowed } = useHeaderContext();
  const { pathname } = useLocation();
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
  const isActive = (href: string) => !href.includes("#") && href === pathname;

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

        <nav className="header__menus" aria-label="Primary">
          {mainNav.map(({ label, href }) => (
            <SmartLink
              key={href}
              href={href}
              className={`header__menu-item${isActive(href) ? " header__menu-item--active" : ""}`}
              aria-current={isActive(href) ? "page" : undefined}
            >
              {label}
            </SmartLink>
          ))}
        </nav>

        <div className="header__cta">
          <Button label={headerCta.label} href={headerCta.href} size="sm" />
        </div>

        <button
          type="button"
          className="header__trigger"
          aria-label="Open menu"
          aria-expanded={drawerOpen}
          aria-controls="header-drawer"
          onClick={() => setOpenedAt(pathname)}
        >
          <span className="header__bars" aria-hidden="true" />
        </button>
      </div>

      <div
        className={`header__overlay${drawerOpen ? " header__overlay--open" : ""}`}
        onClick={closeDrawer}
        aria-hidden="true"
      />
      <aside
        id="header-drawer"
        className={`header__drawer${drawerOpen ? " header__drawer--open" : ""}`}
        aria-label="Menu"
        inert={!drawerOpen}
      >
        <div className="header__drawer-head">
          <button
            ref={closeRef}
            type="button"
            className="header__close"
            aria-label="Close menu"
            onClick={closeDrawer}
          >
            <span aria-hidden="true">&times;</span>
          </button>
        </div>

        <nav className="header__drawer-nav" aria-label="Mobile">
          {mainNav.map(({ label, href }) => (
            <SmartLink
              key={href}
              href={href}
              onClick={closeDrawer}
              className={`header__drawer-item${isActive(href) ? " header__drawer-item--active" : ""}`}
            >
              {label}
            </SmartLink>
          ))}
          <div className="header__drawer-cta">
            <Button label={headerCta.label} href={headerCta.href} fullWidth onClick={closeDrawer} />
          </div>
        </nav>
      </aside>
    </header>
  );
}
