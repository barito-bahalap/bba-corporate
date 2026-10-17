// Style
import "./DoorsSection.css";
// Components
import { Badge, Button, GridHeader, GridSection } from "@/components";
// Utils
import { pad2 } from "@/domain/format";
// Types
import type { DivisionKey, DoorsContent } from "@/domain/sections";

interface DoorsSectionProps extends DoorsContent {
  index: string;
  holding: string;
}

const CODE: Record<DivisionKey, string> = { tech: "BBT", media: "BBM" };

export function DoorsSection({
  index,
  holding,
  eyebrow,
  title,
  intro,
  doors,
}: DoorsSectionProps) {
  return (
    <GridSection id="divisions" tone="white" labelledBy="divisions-title">
      <GridHeader
        index={index}
        eyebrow={eyebrow}
        title={title}
        intro={intro}
        id="divisions-title"
      />

      <div className="cg-doors">
        <p className="cg-doors__root" aria-hidden="true">
          <span>{holding}</span>
          <span>
            {CODE.tech} + {CODE.media}
          </span>
        </p>

        {doors.map((door, i) => (
          <article
            key={door.key}
            className={`cg-door cg-door--${door.key}`}
            data-cg-reveal
          >
            <div className="cg-door__top">
              <span className="cg-door__code">{CODE[door.key]}</span>
              <Badge label={door.discipline} variant="accent" />
            </div>
            <h3 className="cg-door__name">{door.name}</h3>
            <p className="cg-door__statement">{door.statement}</p>
            <ul className="cg-door__points">
              {door.points.map((point, p) => (
                <li key={point}>
                  <span aria-hidden="true">{pad2(p + 1)}</span>
                  {point}
                </li>
              ))}
            </ul>
            <Button
              href={door.url}
              label={door.cta}
              variant="accent"
              size="lg"
              iconName="arrowRight"
              iconFill="var(--cg-slate)"
              iconFillHover="var(--cg-slate)"
              iconAfter
              aria-label={`${door.cta}, ${door.name} ${pad2(i + 1)}`}
            />
          </article>
        ))}
      </div>
    </GridSection>
  );
}
