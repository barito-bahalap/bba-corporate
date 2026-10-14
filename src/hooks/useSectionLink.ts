import type { MouseEvent } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import type { NavLink } from "@barito-bahalap/types";

export function scrollToSectionId(
  id: string,
  behavior: ScrollBehavior = "smooth",
) {
  document.getElementById(id)?.scrollIntoView({ behavior, block: "start" });
}

const normalize = (path: string) => path.replace(/\/+$/, "") || "/";

export function useSectionLink() {
  const navigate = useNavigate();
  const { pathname } = useLocation();

  return (e: MouseEvent, link: NavLink, resolvedHref: string) => {
    if (!link.section) return;
    if (e.metaKey || e.ctrlKey || e.shiftKey || e.altKey || e.button !== 0) {
      return;
    }
    e.preventDefault();

    const section = link.section;

    if (normalize(resolvedHref) === normalize(pathname)) {
      // Same page: no navigation, no history entry, just scroll.
      // rAF so the drawer's body scroll lock is released first.
      requestAnimationFrame(() => scrollToSectionId(section, "smooth"));
      return;
    }

    navigate(resolvedHref, { state: { scrollTo: section } });
  };
}
