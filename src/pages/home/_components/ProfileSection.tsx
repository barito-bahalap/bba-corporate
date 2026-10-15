// Style
import "./ProfileSection.css";
// Components
import { Section } from "@barito-bahalap/components";
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
    <Section id="profile" labelledBy="profile-title" className="profile">
      <div className="profile__box">
        <div>
          <h2 id="profile-title" className="profile__title">
            {title}
          </h2>
          <p className="profile__text">{text}</p>
        </div>
        <div className="profile__action">
          <a className="profile__link" href={url} download>
            {cta}
          </a>
          <span className="profile__meta">{meta}</span>
        </div>
      </div>
    </Section>
  );
}
