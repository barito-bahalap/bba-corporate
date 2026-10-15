// Style
import "./WorkSection.css";
// Components
import { Section, SectionHeader } from "@barito-bahalap/components";
import { ResponsiveImage } from "@/components/media";
// Types
import type { WorkContent } from "@/domain/sections";

export function WorkSection({
  eyebrow,
  title,
  intro,
  imagePlaceholder,
  tech,
  media,
}: WorkContent) {
  return (
    <Section id="work" tone="surface" labelledBy="work-title">
      <SectionHeader
        eyebrow={eyebrow}
        title={title}
        intro={intro}
        id="work-title"
      />

      <div className="work__group" data-division="tech">
        <h3 className="work__group-label">{tech.label}</h3>
        <div className="work__cases">
          {tech.cases.map((item) => (
            <article className="case" key={item.title}>
              <ResponsiveImage
                base={item.image.base}
                widths={item.image.widths}
                alt={item.image.alt}
                placeholderLabel={imagePlaceholder}
              />
              <div className="case__body">
                <p className="case__client">{item.client}</p>
                <h4 className="case__title">{item.title}</h4>
                {item.location && <p className="case__meta">{item.location}</p>}
                <p className="case__summary">{item.summary}</p>
                {item.outcome && (
                  <p className="case__outcome">{item.outcome}</p>
                )}
                <ul className="case__tags">
                  {item.tags.map((tag) => (
                    <li key={tag}>{tag}</li>
                  ))}
                  {item.status && (
                    <li className="case__status">{item.status}</li>
                  )}
                </ul>
              </div>
            </article>
          ))}
        </div>
      </div>

      <div className="work__group" data-division="media">
        <h3 className="work__group-label">{media.label}</h3>

        <div className="work__empty">
          <h4>{media.emptyTitle}</h4>
          <p>{media.emptyText}</p>
        </div>

        <div className="work__columns">
          <div>
            <h4 className="work__sub">{media.practiceTitle}</h4>
            <ul className="work__list">
              {media.practiceAreas.map((area) => (
                <li key={area.title}>
                  <strong>{area.title}</strong>
                  <span>{area.description}</span>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h4 className="work__sub">{media.principlesTitle}</h4>
            <ul className="work__list">
              {media.principles.map((principle) => (
                <li key={principle.title}>
                  <strong>{principle.title}</strong>
                  <span>{principle.description}</span>
                </li>
              ))}
            </ul>
            <p className="work__note">{media.principlesNote}</p>
          </div>
        </div>
      </div>
    </Section>
  );
}
