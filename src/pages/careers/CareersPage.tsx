// Style
import "./CareersPage.css";
// Hooks
import { useCareersContent, useLocale, useSeoMeta } from "@/hooks";
// Components
import { Badge, CallToAction, Section } from "@/components";
import { EmptyState, SEO, SectionHeader } from "@/components";

export default function CareersPage() {
  const content = useCareersContent();
  const { href } = useLocale();
  const seo = useSeoMeta();

  return (
    <>
      <SEO
        {...seo}
        title={content.seo.title}
        description={content.seo.description}
        path={href("/careers")}
      />

      <Section
        width="narrow"
        labelledBy="careers-page-title"
        className="careers-hero"
      >
        <SectionHeader
          as="h1"
          id="careers-page-title"
          title={content.title}
          intro={content.intro}
        />
        <EmptyState title={content.openings.title} sub={content.openings.sub} />
      </Section>

      <Section tone="surface" width="narrow" labelledBy="hiring-title">
        <SectionHeader title={content.hiringTitle} id="hiring-title" />
        <div className="careers-text">
          {content.hiringParagraphs.map((text) => (
            <p key={text}>{text}</p>
          ))}
        </div>
      </Section>

      <Section labelledBy="roles-title">
        <SectionHeader
          title={content.rolesTitle}
          intro={content.rolesIntro}
          id="roles-title"
        />
        <div className="careers-roles">
          {content.roleGroups.map((group) => (
            <article
              key={group.division}
              className="card not-hoverable careers-roles__group"
              data-brand={group.brand}
            >
              <Badge label={group.division} variant="primary" dot />
              <ul className="careers-roles__list" role="list">
                {group.roles.map((role) => (
                  <li key={role}>{role}</li>
                ))}
              </ul>
            </article>
          ))}
        </div>
      </Section>

      <CallToAction
        title={content.cta.title}
        body={content.cta.body}
        primary={content.cta.primary}
      />
    </>
  );
}
