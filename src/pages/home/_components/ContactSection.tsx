import type { ComponentProps } from "react";
// Style
import "./ContactSection.css";
// Components
import { ContactForm, Icon, Section, SectionHeader } from "@/components";
// Types
import type { ContactContent } from "@/domain/content";

interface ContactSectionProps extends ContactContent {
  email: string;
  location: string;
  form: ComponentProps<typeof ContactForm>;
}

export function ContactSection({
  eyebrow,
  title,
  intro,
  email,
  location,
  form,
}: ContactSectionProps) {
  return (
    <Section id="contact" labelledBy="contact-title">
      <div className="home-contact">
        <div className="home-contact__info">
          <SectionHeader
            eyebrow={eyebrow}
            title={title}
            intro={intro}
            id="contact-title"
          />
          <ul className="home-contact__list" role="list">
            <li>
              <Icon
                iconName="envelope"
                fill="var(--clr-ink-soft)"
                fillHover="var(--clr-ink)"
                size={20}
              />
              <a href={`mailto:${email}`}>{email}</a>
            </li>
            <li>
              <Icon
                iconName="geoAltFill"
                fill="var(--clr-ink-soft)"
                fillHover="var(--clr-ink)"
                size={20}
              />
              <span>{location}</span>
            </li>
          </ul>
        </div>
        <div className="card not-hoverable home-contact__form">
          <ContactForm {...form} />
        </div>
      </div>
    </Section>
  );
}
