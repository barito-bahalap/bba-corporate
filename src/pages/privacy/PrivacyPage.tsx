// Style
import "./PrivacyPage.css";
// Hooks
import { useLegalContent, useSeoMeta } from "@/hooks";
// Components
import { SEO, LegalDocument } from "@/components";

export default function PrivacyPage() {
  const content = useLegalContent("privacy");
  const seo = useSeoMeta();

  return (
    <>
      <SEO
        {...seo}
        title={content.seo.title}
        description={content.seo.description}
        path={content.seo.path}
      />
      <LegalDocument
        title={content.title}
        updated={content.updated}
        intro={content.intro}
        sections={content.sections}
      />
    </>
  );
}
