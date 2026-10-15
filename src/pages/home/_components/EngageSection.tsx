// Style
import "./EngageSection.css";
// Components
import { Section, SectionHeader } from "@barito-bahalap/components";
// Types
import type { EngageContent } from "@/domain/sections";

export function EngageSection({
  eyebrow,
  title,
  intro,
  deliverableLabel,
  steps,
}: EngageContent) {
  return (
    <Section id="engage" labelledBy="engage-title">
      <SectionHeader
        eyebrow={eyebrow}
        title={title}
        intro={intro}
        id="engage-title"
      />

      <ol className="engage">
        {steps.map((step, index) => (
          <li className="engage__step" key={step.title}>
            <span className="engage__index" aria-hidden="true">
              {String(index + 1).padStart(2, "0")}
            </span>
            <h3 className="engage__title">{step.title}</h3>
            <p className="engage__text">{step.description}</p>
            <p className="engage__deliverable">
              <span>{deliverableLabel}</span>
              {step.deliverable}
            </p>
          </li>
        ))}
      </ol>
    </Section>
  );
}
