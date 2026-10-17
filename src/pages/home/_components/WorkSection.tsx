import type { CSSProperties } from "react";
// Style
import "./WorkSection.css";
// Components
import { Badge, GridHeader, GridSection, ResponsiveImage } from "@/components";
// Utils
import { pad2 } from "@/domain/format";
// Types
import type { WorkContent } from "@/domain/sections";

interface WorkSectionProps extends WorkContent {
  index: string;
  fallbackImages: string[];
}

export function WorkSection({
  index,
  eyebrow,
  title,
  intro,
  imagePlaceholder,
  tech,
  media,
  fallbackImages,
}: WorkSectionProps) {
  return (
    <GridSection id="work" tone="cream" labelledBy="work-title">
      <GridHeader
        index={index}
        eyebrow={eyebrow}
        title={title}
        intro={intro}
        id="work-title"
      />

      <p className="cg-work__label">{tech.label}</p>
      <div className="cg-work__cases">
        {tech.cases.map((item, i) => (
          <article
            key={item.title}
            className="cg-case"
            data-cg-reveal
            style={{ "--cg-i": i } as CSSProperties}
          >
            <div className="cg-case__media">
              <ResponsiveImage
                base={item.image.base}
                src={fallbackImages[i % fallbackImages.length]}
                widths={item.image.widths}
                alt={item.image.alt}
                placeholderLabel={imagePlaceholder}
              />
              <span className="cg-case__index">{pad2(i + 1)}</span>
            </div>

            <div className="cg-case__body">
              <p className="cg-case__meta">
                <span>{item.client}</span>
                {item.location && <span>{item.location}</span>}
              </p>
              <h3 className="cg-case__title">{item.title}</h3>
              <p className="cg-case__summary">{item.summary}</p>
              {item.outcome && (
                <p className="cg-case__outcome">{item.outcome}</p>
              )}
              <ul className="cg-case__tags">
                {item.status && (
                  <li>
                    <Badge label={item.status} variant="accent" />
                  </li>
                )}
                {item.tags.map((tag) => (
                  <li key={tag} className="cg-case__tag">
                    {tag}
                  </li>
                ))}
              </ul>
            </div>
          </article>
        ))}
      </div>

      <div className="cg-work__media" data-cg-reveal>
        <p className="cg-work__media-label">{media.label}</p>
        <div>
          <h3 className="cg-work__media-title">{media.emptyTitle}</h3>
          <p>{media.emptyText}</p>
        </div>
      </div>
    </GridSection>
  );
}
