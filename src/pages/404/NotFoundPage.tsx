// Style
import "./NotFoundPage.css";
// Components
import { EmptyState, Button, Section, SEO } from "@/components";

export default function NotFoundPage() {
  return (
    <>
      <SEO title="Page not found" path="/404" noIndex />

      <Section width="narrow">
        <EmptyState
          title="Page not found."
          sub="The page you are looking for does not exist or has moved."
          action={
            <Button href="/" iconName="arrowRight" iconAfter>
              Back to home
            </Button>
          }
        />
      </Section>
    </>
  );
}
