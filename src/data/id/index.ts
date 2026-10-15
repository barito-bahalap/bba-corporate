import { careersContent } from "./careers";
import { homeContent } from "./home";
import { privacyContent } from "./privacy";
import { termsContent } from "./terms";
import { uiContent } from "./ui";
// Types
import type { ContentBundle } from "@/i18n/types";

export const idContent: ContentBundle = {
  home: homeContent,
  careers: careersContent,
  privacy: privacyContent,
  terms: termsContent,
  ui: uiContent,
};

export { sectionsId } from "./sections";
