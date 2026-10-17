// Style
import "./AboutPage.css";
// Hooks
import { useLocale, useSeoMeta } from "@/hooks";
import { useHomeContent, useSectionsContent } from "@/hooks";
// Components
import { SEO } from "@/components";
import { AboutIntroSection, LeadershipSection } from "./_components";
import { ProfileSection, StructureSection } from "./_components";

export default function AboutPage() {
  const content = useHomeContent();
  const sections = useSectionsContent();
  const { href } = useLocale();
  const seo = useSeoMeta();

  return (
    <>
      <SEO
        {...seo}
        title={content.about.title}
        description={content.about.paragraphs[0]}
        path={href("/about")}
      />

      <AboutIntroSection {...content.about} index="00" />
      <StructureSection {...sections.structure} index="01" />
      <LeadershipSection {...content.leadership} index="02" />
      <ProfileSection {...sections.profile} />
    </>
  );
}
