// Style
import "./HomePage.css";
// Contexts & Hooks
import { useTransparentHeader } from "@barito-bahalap/contexts";
import { useContactForm, useHomeContent } from "@/hooks";
// Components
import { SEO } from "@/components";
import { HeroSection, AboutSection, DivisionsSection } from "./_components";
import { ApproachSection, LeadershipSection } from "./_components";
import { CareersTeaserSection, ContactSection } from "./_components";
// Utils
import { buildOrganizationSchema } from "@/domain/schema";

export default function HomePage() {
  useTransparentHeader();
  const content = useHomeContent();
  const form = useContactForm();

  return (
    <>
      <SEO
        title={content.seo.title}
        description={content.seo.description}
        path="/"
        structuredData={buildOrganizationSchema()}
      />
      <HeroSection {...content.hero} />
      <AboutSection {...content.about} />
      <DivisionsSection {...content.divisions} />
      <ApproachSection {...content.approach} />
      <LeadershipSection {...content.leadership} />
      <CareersTeaserSection {...content.careers} />
      <ContactSection {...content.contact} form={form} />
    </>
  );
}
