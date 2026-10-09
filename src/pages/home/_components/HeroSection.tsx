import { Button, Eyebrow } from "@barito-bahalap/components/ui";
import type { HeroContent } from "../../../domain/content";
import { RiverVisual } from "./RiverVisual";

export function HeroSection({
  eyebrow,
  headline,
  subhead,
  primaryCta,
  secondaryCta,
}: HeroContent) {
  return (
    <section className="home-hero" aria-labelledby="hero-title">
      <div className="home-hero__grid container content">
        <div className="home-hero__copy">
          <Eyebrow>{eyebrow}</Eyebrow>
          <h1 id="hero-title" className="home-hero__title">
            {headline}
          </h1>
          <p className="home-hero__subhead">{subhead}</p>
          <div className="home-hero__actions">
            <Button href={primaryCta.href} size="lg" iconName="arrow-right" iconAfter>
              {primaryCta.label}
            </Button>
            <Button href={secondaryCta.href} size="lg" variant="outline">
              {secondaryCta.label}
            </Button>
          </div>
        </div>
        <div className="home-hero__visual">
          <RiverVisual />
        </div>
      </div>
    </section>
  );
}
