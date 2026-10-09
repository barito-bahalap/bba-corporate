// Style

// Components
import { Button, Eyebrow, Section } from "@/components";
// Types
import type { CareersTeaserContent } from "@/domain/content";

export function CareersTeaserSection({
  eyebrow,
  title,
  body,
  cta,
}: CareersTeaserContent) {
  return (
    <Section tone="surface" labelledBy="careers-title">
      <div className="home-careers">
        <div className="home-careers__copy">
          <Eyebrow>{eyebrow}</Eyebrow>
          <h2 id="careers-title">{title}</h2>
          <p>{body}</p>
        </div>
        <Button
          label={cta.label}
          href={cta.href}
          variant="outline"
          iconName="arrowRight"
          iconAfter
        />
      </div>
    </Section>
  );
}
