// Style
import "./HomePage.css";
// Contexts & Hooks
import { useTransparentHeader } from "@barito-bahalap/contexts";
import { useContactForm, useHomeContent, useLocale } from "@/hooks";
import { useSectionsContent, useSeoMeta } from "@/hooks";
// Components
import { SEO } from "@/components";
import {
  AboutSection,
  ApproachSection,
  CareersTeaserSection,
  ContactSection,
  DivisionsSection,
  DoorsSection,
  EngageSection,
  HeroSection,
  InquirySection,
  LeadershipSection,
  ProfileSection,
  ProofSection,
  StructureSection,
  WorkSection,
} from "./_components";
// Utils
import { buildOrganizationSchema } from "@/domain/schema";

export default function HomePage() {
  useTransparentHeader();
  const content = useHomeContent();
  const sections = useSectionsContent();
  const form = useContactForm();
  const { href, site, locale } = useLocale();
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
      <ProfileSection {...sections.profile} />
      <DivisionsSection {...content.divisions} />
      <ApproachSection {...content.approach} />
      <LeadershipSection {...content.leadership} />
      <InquirySection
        locale={locale}
        email={site.contactEmail}
        location={site.location}
        privacyHref={href("/privacy")}
      />
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
