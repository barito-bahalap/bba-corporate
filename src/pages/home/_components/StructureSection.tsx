// Style
import "./StructureSection.css";
// Components
import { Callout, Section, SectionHeader } from "@barito-bahalap/components";
// Types
import type { StructureContent } from "@/domain/sections";

export function StructureSection({
  eyebrow,
  title,
  intro,
  diagramLabel,
  holding,
  units,
  governanceTitle,
  governanceIntro,
  dimensions,
  pressTitle,
  pressText,
}: StructureContent) {
  return (
    <Section id="structure" tone="paper" labelledBy="structure-title">
      <SectionHeader
        eyebrow={eyebrow}
        title={title}
        intro={intro}
        id="structure-title"
      />

      <figure className="structure" aria-label={diagramLabel}>
        <div className="structure__holding">
          <h3>{holding.name}</h3>
          <p className="structure__role">{holding.role}</p>
          <ul className="structure__items">
            {holding.items.map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ul>
        </div>

        <div className="structure__connector" aria-hidden="true" />

        <div className="structure__units">
          {units.map((unit) => (
            <div
              className={`structure__unit structure__unit--${unit.key}`}
              key={unit.key}
            >
              <h3>{unit.name}</h3>
              <p className="structure__role">{unit.role}</p>
              <ul className="structure__items">
                {unit.items.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </figure>

      <div id="governance" className="governance">
        <h3 className="governance__title">{governanceTitle}</h3>
        <p className="governance__intro">{governanceIntro}</p>
        <ol className="governance__grid">
          {dimensions.map((dimension, index) => (
            <li className="governance__item" key={dimension.title}>
              <span aria-hidden="true">
                {String(index + 1).padStart(2, "0")}
              </span>
              <h4>{dimension.title}</h4>
              <p>{dimension.description}</p>
            </li>
          ))}
        </ol>
        <Callout title={pressTitle}>{pressText}</Callout>
      </div>
    </Section>
  );
}
