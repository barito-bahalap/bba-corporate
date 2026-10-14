// Style
import "./AboutSection.css";
// Components
import { Section, SectionHeader } from "@/components";
import { StatBlock } from "@/components";
// Types
import type { AboutContent } from "@/domain/content";

export function AboutSection({
  eyebrow,
  title,
  paragraphs,
  stats,
}: AboutContent) {
  return (
    <Section id="about" tone="surface" labelledBy="about-title">
      <SectionHeader eyebrow={eyebrow} title={title} id="about-title" />
      <div className="home-about__text">
        {paragraphs.map((text) => (
          <p key={text}>{text}</p>
        ))}
      </div>
      <div className="home-about__stats">
        {stats.map((stat) => (
          <StatBlock key={stat.label} {...stat} />
        ))}
      </div>
    </Section>
  );
}
