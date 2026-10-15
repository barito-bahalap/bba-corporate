// Style
import "./HomePage.css";
// Contexts & Hooks
import { useTransparentHeader } from "@barito-bahalap/contexts";
import { useContactForm, useHomeContent, useLocale } from "@/hooks";
import { useSectionsContent, useSeoMeta } from "@/hooks";
// Components
import { SEO } from "@/components";
import { HeroSection, AboutSection, ApproachSection } from "./_components";
import { ProofSection, DoorsSection, WorkSection } from "./_components";
import { EngageSection, StructureSection, ProfileSection } from "./_components";
import { CareersTeaserSection, ContactSection } from "./_components";
import { DivisionsSection, LeadershipSection } from "./_components";
// Utils
import { buildOrganizationSchema } from "@/domain/schema";

export default function HomePage() {
  useTransparentHeader();
  const content = useHomeContent();
  const sections = useSectionsContent();
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
      <ProofSection {...sections.proof} />
      <DoorsSection {...sections.doors} />
      <WorkSection {...sections.work} />
      <EngageSection {...sections.engage} />
      <StructureSection {...sections.structure} />
      <AboutSection {...content.about} />
      <ProfileSection {...sections.profile} />{" "}
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
