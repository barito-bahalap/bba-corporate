import type { ContentBundle } from "@/i18n/types";
import { careersContent } from "./careers";
import { homeContent } from "./home";
import { privacyContent } from "./privacy";
import { termsContent } from "./terms";
import { uiContent } from "./ui";

export const idContent: ContentBundle = {
  home: homeContent,
  careers: careersContent,
  privacy: privacyContent,
  terms: termsContent,
  ui: uiContent,
};
