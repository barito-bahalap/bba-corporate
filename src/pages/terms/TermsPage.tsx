// Style
import "./TermsPage.css";
// Hooks
import { useLegalContent } from "@/hooks";
// Components
import { SEO, LegalDocument } from "@/components";

export default function TermsPage() {
  const content = useLegalContent("terms");

  return (
    <>
      <SEO
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
