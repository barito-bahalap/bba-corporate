// Style
import "./HeroSection.css";
// Components
import { Button, IndexLabel } from "@/components";
import { RiverVisual } from "./RiverVisual";
// Types
import type { HeroContent } from "@/domain/content";

interface HeroSectionProps extends HeroContent {
  index: string;
  location: string;
  imageSrc: string;
}

export function HeroSection({
  index,
  eyebrow,
  headline,
  subhead,
  primaryCta,
  secondaryCta,
  location,
  imageSrc,
}: HeroSectionProps) {
  return (
    <section id="home-hero" className="cg-hero" aria-labelledby="hero-title">
      <div className="cg-hero__grid cg-wrap">
        <div className="cg-hero__copy">
          <IndexLabel index={index} label={eyebrow ?? undefined} />

          <h1 id="hero-title" className="cg-hero__title">
            {headline}
          </h1>
          <p className="cg-hero__subhead">{subhead}</p>

          <div className="cg-hero__actions">
            <Button
              label={primaryCta.label}
              href={primaryCta.href}
              variant="accent"
              size="lg"
              iconName="arrowRight"
              iconFill="var(--cg-slate)"
              iconFillHover="var(--cg-slate)"
              iconAfter
            />
            <Button
              label={secondaryCta.label}
              href={secondaryCta.href}
              variant="outline"
              size="lg"
            />
          </div>
        </div>

        <div className="cg-hero__visual" aria-hidden="true">
          <img
            className="cg-hero__image"
            src={imageSrc}
            alt=""
            loading="eager"
            decoding="async"
          />
          <div className="cg-hero__river">
            <RiverVisual />
          </div>
          <p className="cg-hero__caption">
            <span>{location}</span>
            <span>BBT / BBM</span>
          </p>
        </div>
      </div>
    </section>
  );
}
