import type { CSSProperties } from "react";
// Style
import "./EngageSection.css";
// Components
import { GridHeader, GridSection } from "@/components";
// Utils
import { pad2 } from "@/domain/format";
// Types
import type { EngageContent } from "@/domain/sections";

interface EngageSectionProps extends EngageContent {
  index: string;
}

export function EngageSection({
  index,
  eyebrow,
  title,
  intro,
  deliverableLabel,
  steps,
}: EngageSectionProps) {
  return (
    <GridSection id="engage" labelledBy="engage-title">
      <GridHeader
        index={index}
        eyebrow={eyebrow}
        title={title}
        intro={intro}
        id="engage-title"
      />

      <ol className="cg-engage">
        {steps.map((step, i) => (
          <li
            key={step.title}
            className="cg-engage__step"
            data-cg-reveal
            style={{ "--cg-i": i } as CSSProperties}
          >
            <span className="cg-engage__index" aria-hidden="true">
              {pad2(i + 1)}
            </span>
            <h3 className="cg-engage__title">{step.title}</h3>
            <p className="cg-engage__text">{step.description}</p>
            <p className="cg-engage__deliverable">
              <span>{deliverableLabel}</span>
              {step.deliverable}
            </p>
          </li>
        ))}
      </ol>
    </GridSection>
  );
}
