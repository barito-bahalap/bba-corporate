// Style
import "./HomePage.css";
// Config
import { siteConfig } from "@barito-bahalap/config";
// Hooks
import { useLocale, useSectionsContent, useSeoMeta } from "@/hooks";
import { useContactForm, useHomeContent } from "@/hooks";
// Components
import { SEO } from "@/components";
import { ContactSection, DoorsSection, EngageSection } from "./_components";
import { HeroSection, ProofSection, WorkSection } from "./_components";
// Data & Utils
import { placeholders } from "@/data/placeholders";
import { buildOrganizationSchema } from "@/domain/schema";

export default function HomePage() {
  const content = useHomeContent();
  const sections = useSectionsContent();
  const { href, site } = useLocale();
  const form = useContactForm();
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

      <HeroSection
        {...content.hero}
        index="00"
        location={site.location}
        imageSrc={placeholders.hero}
      />
      <ProofSection {...sections.proof} index="01" />
      <DoorsSection
        {...sections.doors}
        index="02"
        holding={siteConfig.shortName}
      />
      <WorkSection
        {...sections.work}
        index="03"
        fallbackImages={placeholders.cases}
      />
      <EngageSection {...sections.engage} index="04" />
      <ContactSection
        {...content.contact}
        index="05"
        email={site.contactEmail}
        location={site.location}
        form={form}
      />
    </>
  );
}
