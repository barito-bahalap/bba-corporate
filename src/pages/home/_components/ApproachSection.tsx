// Style

// Components
import { InfoCard, Section, SectionHeader } from "@/components";
// Types
import type { ApproachContent } from "@/domain/content";

export function ApproachSection({
  eyebrow,
  title,
  intro,
  items,
}: ApproachContent) {
  return (
    <Section id="approach" tone="surface" labelledBy="approach-title">
      <SectionHeader
        eyebrow={eyebrow}
        title={title}
        intro={intro}
        id="approach-title"
      />
      <div className="grid-4">
        {items.map((item) => (
          <InfoCard key={item.title} {...item} />
        ))}
      </div>
    </Section>
  );
}
