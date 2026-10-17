// Style
import "./ProfileSection.css";
// Components
import { GridSection } from "@/components";
// Types
import type { ProfileContent } from "@/domain/sections";

export function ProfileSection({
  title,
  text,
  cta,
  url,
  meta,
}: ProfileContent) {
  return (
    <GridSection id="profile" tone="cream" labelledBy="profile-title">
      <div className="cg-profile" data-cg-reveal>
        <div className="cg-profile__copy">
          <h2 id="profile-title" className="cg-profile__title">
            {title}
          </h2>
          <p className="cg-profile__text">{text}</p>
        </div>
        <div className="cg-profile__action">
          <a className="btn btn--accent btn--lg" href={url} download>
            <span className="btn__label">{cta}</span>
          </a>
          <span className="cg-profile__meta">{meta}</span>
        </div>
      </div>
    </GridSection>
  );
}
