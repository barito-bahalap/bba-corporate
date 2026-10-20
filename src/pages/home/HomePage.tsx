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
import { buildOrganizationSchema } from "@/domain/schema";
// Assets
import { ampiKalteng, ePalugada, heroImg, telkomDashboard } from "@/assets";

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
        location={site.location}
        imageSrc={heroImg}
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
        fallbackImages={[telkomDashboard, ePalugada, ampiKalteng]}
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
