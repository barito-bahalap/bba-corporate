// Style
import "./StructureSection.css";
// Components
import { Callout, GridHeader, GridSection } from "@/components";
// Utils
import { pad2 } from "@/domain/format";
// Types
import type { StructureContent } from "@/domain/sections";

interface StructureSectionProps extends StructureContent {
  index: string;
}

export function StructureSection({
  index,
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
}: StructureSectionProps) {
  return (
    <GridSection id="structure" tone="white" labelledBy="structure-title">
      <GridHeader
        index={index}
        eyebrow={eyebrow}
        title={title}
        intro={intro}
        id="structure-title"
      />

      <figure className="cg-structure" aria-label={diagramLabel} data-cg-reveal>
        <div className="cg-structure__holding">
          <h3>{holding.name}</h3>
          <p className="cg-structure__role">{holding.role}</p>
          <ul className="cg-structure__items">
            {holding.items.map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ul>
        </div>

        <div className="cg-structure__units">
          {units.map((unit) => (
            <div
              key={unit.key}
              className={`cg-structure__unit cg-structure__unit--${unit.key}`}
            >
              <h3>{unit.name}</h3>
              <p className="cg-structure__role">{unit.role}</p>
              <ul className="cg-structure__items">
                {unit.items.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </figure>

      <div id="governance" className="cg-governance">
        <h3 className="cg-governance__title">{governanceTitle}</h3>
        <p className="cg-governance__intro">{governanceIntro}</p>
        <ol className="cg-governance__grid">
          {dimensions.map((dimension, i) => (
            <li key={dimension.title} className="cg-governance__item">
              <span aria-hidden="true">{pad2(i + 1)}</span>
              <h4>{dimension.title}</h4>
              <p>{dimension.description}</p>
            </li>
          ))}
        </ol>
        <Callout title={pressTitle}>{pressText}</Callout>
      </div>
    </GridSection>
  );
}
