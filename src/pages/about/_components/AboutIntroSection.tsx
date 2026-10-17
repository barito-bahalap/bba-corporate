// Style
import "./AboutIntroSection.css";
// Components
import { DataCell, GridHeader, GridSection } from "@/components";
// Utils
import { pad2 } from "@/domain/format";
// Types
import type { AboutContent } from "@/domain/content";

interface AboutIntroSectionProps extends AboutContent {
  index: string;
}

export function AboutIntroSection({
  index,
  eyebrow,
  title,
  paragraphs,
  stats,
}: AboutIntroSectionProps) {
  return (
    <GridSection tone="teal" labelledBy="about-title" className="cg-about">
      <GridHeader
        as="h1"
        index={index}
        eyebrow={eyebrow}
        title={title}
        id="about-title"
      />
      <div className="cg-about__text" data-cg-reveal>
        {paragraphs.map((text) => (
          <p key={text}>{text}</p>
        ))}
      </div>
      <dl className="cg-about__stats">
        {stats.map((stat, i) => (
          <DataCell
            key={stat.label}
            {...stat}
            index={pad2(i + 1)}
            delay={i}
            tone="dark"
          />
        ))}
      </dl>
    </GridSection>
  );
}
