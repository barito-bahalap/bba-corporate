import { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
// Style
import "./Header.css";
// Config
import { headerCta, mainNav } from "@barito-bahalap/config";
// Contexts
import { useHeaderContext } from "@barito-bahalap/contexts/header";
// Components
import { SmartLink } from "@barito-bahalap/components/routing";
import { Brand } from ".";

export function Header() {
  const { transparentAllowed } = useHeaderContext();
  const { pathname } = useLocation();
  const [scrolled, setScrolled] = useState(false);
  const [drawerOpen, setDrawerOpen] = useState(false);

  useEffect(() => {
    function handleScroll() {
      setScrolled(window.scrollY > 40);
    }
    handleScroll();
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    if (!drawerOpen) return;
    function handleEscape(e: KeyboardEvent) {
      if (e.key === "Escape") setDrawerOpen(false);
    }
    document.addEventListener("keydown", handleEscape);
    document.body.classList.add("no-scroll");
    return () => {
      document.removeEventListener("keydown", handleEscape);
      document.body.classList.remove("no-scroll");
    };
  }, [drawerOpen]);

  useEffect(() => {
    function handleResize() {
      if (window.innerWidth >= 1024) setDrawerOpen(false);
    }
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  useEffect(() => {
    setDrawerOpen(false);
  }, [pathname]);

  const isTransparent = transparentAllowed && !scrolled;
  const closeDrawer = () => setDrawerOpen(false);
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
      <div className="header__main">
        <Brand />

        <nav className="header__menus" aria-label="Primary">
          {mainNav.map(({ label, href }) => (
            <SmartLink
              key={href}
              href={href}
              className={`header__menu-item${
                isActive(href) ? " header__menu-item--active" : ""
              }`}
            >
              {label}
            </SmartLink>
          ))}
        </nav>

        <SmartLink
          href={headerCta.href}
          className="header__cta bba-btn bba-btn--light"
        >
          {headerCta.label}
        </SmartLink>

        <button
          type="button"
          className="header__trigger"
          aria-label="Open menu"
          aria-expanded={drawerOpen}
          aria-controls="header-drawer"
          onClick={() => setDrawerOpen(true)}
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
        aria-hidden={!drawerOpen}
      >
        <div className="header__drawer-head">
          <button
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
              tabIndex={drawerOpen ? 0 : -1}
              onClick={closeDrawer}
              className={`header__drawer-item${
                isActive(href) ? " header__drawer-item--active" : ""
              }`}
            >
              {label}
            </SmartLink>
          ))}
          <SmartLink
            href={headerCta.href}
            tabIndex={drawerOpen ? 0 : -1}
            onClick={closeDrawer}
            className="header__drawer-cta bba-btn bba-btn--light"
          >
            {headerCta.label}
          </SmartLink>
        </nav>
      </aside>
    </header>
  );
}
