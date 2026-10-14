// Style
import "./HeroSection.css";
// Components
import { Button, Eyebrow } from "@/components";
import { RiverVisual } from "./RiverVisual";
// Types
import type { HeroContent } from "@/domain/content";

export function HeroSection({
  eyebrow,
  headline,
  subhead,
  primaryCta,
  secondaryCta,
}: HeroContent) {
  return (
    <section id="home-hero" className="home-hero" aria-labelledby="hero-title">
      <div className="home-hero__grid container content">
        <div className="home-hero__copy">
          {eyebrow && <Eyebrow label={eyebrow} />}

          <h1 id="hero-title" className="home-hero__title">
            {headline}
          </h1>

          <p className="home-hero__subhead">{subhead}</p>
          <div className="home-hero__actions">
            <Button
              label={primaryCta.label}
              href={primaryCta.href}
              size="lg"
              iconName="arrowRight"
              iconAfter
            />
            <Button
              label={secondaryCta.label}
              href={secondaryCta.href}
              size="lg"
              variant="outline"
            />
          </div>
        </div>
        <div className="home-hero__visual">
          <RiverVisual />
        </div>
      </div>
    </section>
  );
}
