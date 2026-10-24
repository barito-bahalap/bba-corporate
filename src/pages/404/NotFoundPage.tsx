import { useEffect } from "react";
import { useLocation } from "react-router-dom";
// Style
import "./NotFoundPage.css";
// Hooks
import { useLocale, useSeoMeta } from "@/hooks";
import { useSectionLink, scrollToSectionId } from "@/hooks/useSectionLink";
// Components
import { Button, Section, SEO, SmartLink } from "@/components";

export default function NotFoundPage() {
  const { ui, href } = useLocale();
  const { state, pathname } = useLocation();
  const onSectionClick = useSectionLink();
  const seo = useSeoMeta({ alternates: false });
  const { notFound } = ui;

  useEffect(() => {
    const id = (state as { scrollTo?: string } | null)?.scrollTo;
    if (id) requestAnimationFrame(() => scrollToSectionId(id, "auto"));
  }, [pathname, state]);

  return (
    <>
      <SEO {...seo} title={notFound.seoTitle} path={href("/404")} noIndex />

      <Section width="narrow" labelledBy="not-found-title">
        <div className="not-found">
          <p className="not-found__code" aria-hidden="true">
            {notFound.code}
          </p>
          <h1 id="not-found-title" className="not-found__title">
            {notFound.title}
          </h1>
          <p className="not-found__sub">{notFound.sub}</p>
          <div className="not-found__actions">
            <Button
              label={notFound.homeCta}
              href={href("/")}
              iconName="arrowRight"
              iconAfter
            />
          </div>

          <div className="not-found__suggestions">
            <h2 className="not-found__suggestions-title">
              {notFound.suggestionsTitle}
            </h2>
            <ul className="not-found__list" role="list">
              {notFound.suggestions.map((item) => (
                <li key={item.section ?? item.href}>
                  <SmartLink
                    href={href(item.href)}
                    onClick={(e) => onSectionClick(e, item, href(item.href))}
                    className="card not-found__link"
                  >
                    <strong>{item.label}</strong>
                    <small>{item.description}</small>
                  </SmartLink>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </Section>
    </>
  );
}
