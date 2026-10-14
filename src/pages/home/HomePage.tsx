// Style
import "./HomePage.css";
// Contexts & Hooks
import { useTransparentHeader } from "@barito-bahalap/contexts";
import { useContactForm, useHomeContent, useLocale, useSeoMeta } from "@/hooks";
// Components
import { SEO } from "@/components";
import { HeroSection, AboutSection, LeadershipSection } from "./_components";
import { DivisionsSection, ApproachSection } from "./_components";
import { CareersTeaserSection, ContactSection } from "./_components";
// Utils
import { buildOrganizationSchema } from "@/domain/schema";

export default function HomePage() {
  useTransparentHeader();
  const content = useHomeContent();
  const form = useContactForm();
  const { href, site } = useLocale();
  const seo = useSeoMeta();

  return (
    <>
      <SEO
        {...seo}
        title={content.seo.title}
        description={content.seo.description}
        path={href("/")}
        structuredData={buildOrganizationSchema()}
      />

      <HeroSection {...content.hero} />
      <AboutSection {...content.about} />
      <DivisionsSection {...content.divisions} />
      <ApproachSection {...content.approach} />
      <LeadershipSection {...content.leadership} />
      <CareersTeaserSection {...content.careers} />
      <ContactSection
        {...content.contact}
        email={site.contactEmail}
        location={site.location}
        form={form}
      />
    </>
  );
}
