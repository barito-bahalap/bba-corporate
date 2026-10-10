// Style

// Config
import { siteConfig } from "@barito-bahalap/config";
import { ContactForm, Icon, Section, SectionHeader } from "@/components";
// Types
import type {
  ContactField,
  ContactFormErrors,
  ContactFormValues,
  SelectOption,
} from "@/components";
import type { ContactContent } from "@/domain/content";

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

export function ContactSection({
  eyebrow,
  title,
  intro,
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
              <a href={`mailto:${siteConfig.contactEmail}`}>
                {siteConfig.contactEmail}
              </a>
            </li>
            <li>
              <Icon
                iconName="geoAltFill"
                fill="var(--clr-ink-soft)"
                fillHover="var(--clr-ink)"
                size={20}
              />
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
