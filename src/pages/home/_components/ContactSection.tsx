import { siteConfig } from "@barito-bahalap/config";
import {
  ContactForm,
  Icon,
  Section,
  SectionHeader,
  type ContactField,
  type ContactFormErrors,
  type ContactFormValues,
  type SelectOption,
} from "@barito-bahalap/components/ui";
import type { ContactContent } from "../../../domain/content";

interface ContactSectionProps extends ContactContent {
  form: {
    values: ContactFormValues;
    errors: ContactFormErrors;
    status: "idle" | "prepared";
    divisionOptions: readonly SelectOption[];
    onChange: (field: ContactField, value: string | boolean) => void;
    onSubmit: () => void;
  };
}

export function ContactSection({ eyebrow, title, intro, form }: ContactSectionProps) {
  return (
    <Section id="contact" labelledBy="contact-title">
      <div className="home-contact">
        <div className="home-contact__info">
          <SectionHeader eyebrow={eyebrow} title={title} intro={intro} id="contact-title" />
          <ul className="home-contact__list" role="list">
            <li>
              <Icon name="mail" size={20} />
              <a href={`mailto:${siteConfig.contactEmail}`}>{siteConfig.contactEmail}</a>
            </li>
            <li>
              <Icon name="pin" size={20} />
              <span>{siteConfig.location}</span>
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
