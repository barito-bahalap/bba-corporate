// Style
import "./DoorsSection.css";
// Components
import { Button, Section, SectionHeader } from "@barito-bahalap/components";
// Types
import type { DoorsContent } from "@/domain/sections";

export function DoorsSection({ eyebrow, title, intro, doors }: DoorsContent) {
  return (
    <Section id="divisions" labelledBy="divisions-title">
      <SectionHeader
        eyebrow={eyebrow}
        title={title}
        intro={intro}
        id="divisions-title"
      />

      <div className="doors">
        {doors.map((door) => (
          <article className={`door door--${door.key}`} key={door.key}>
            <p className="door__discipline">{door.discipline}</p>
            <h3 className="door__name">{door.name}</h3>
            <p className="door__statement">{door.statement}</p>
            <ul className="door__points">
              {door.points.map((point) => (
                <li key={point}>{point}</li>
              ))}
            </ul>
            <Button
              href={door.url}
              variant={door.key === "tech" ? "primary" : "accent"}
              iconName="arrowRight"
              iconAfter
            >
              {door.cta}
            </Button>
          </article>
        ))}
      </div>
    </Section>
  );
}
