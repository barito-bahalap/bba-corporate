import type { ComponentProps } from "react";
// Style
import "./ContactSection.css";
// Components
import { ContactForm, GridHeader, GridSection, Icon } from "@/components";
// Types
import type { ContactContent } from "@/domain/content";

interface ContactSectionProps extends ContactContent {
  index: string;
  email: string;
  location: string;
  form: ComponentProps<typeof ContactForm>;
}

export function ContactSection({
  index,
  eyebrow,
  title,
  intro,
  email,
  location,
  form,
}: ContactSectionProps) {
  return (
    <GridSection id="contact" tone="deep" labelledBy="contact-title">
      <div className="cg-contact">
        <div className="cg-contact__info">
          <GridHeader
            index={index}
            eyebrow={eyebrow}
            title={title}
            intro={intro}
            id="contact-title"
          />
          <ul className="cg-contact__list" role="list">
            <li>
              <Icon
                iconName="envelope"
                fill="var(--cg-cream)"
                fillHover="var(--cg-cream)"
                size={20}
              />
              <a href={`mailto:${email}`}>{email}</a>
            </li>
            <li>
              <Icon
                iconName="geoAltFill"
                fill="var(--cg-cream)"
                fillHover="var(--cg-cream)"
                size={20}
              />
              <span>{location}</span>
            </li>
          </ul>
        </div>

        <div className="cg-contact__form" data-cg-reveal>
          <ContactForm {...form} />
        </div>
      </div>
    </GridSection>
  );
}
