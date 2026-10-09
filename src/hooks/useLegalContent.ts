import { privacyContent, termsContent } from "@/data";
import type { LegalContent } from "@/domain/content";

export function useLegalContent(kind: "privacy" | "terms"): LegalContent {
  return kind === "privacy" ? privacyContent : termsContent;
}
