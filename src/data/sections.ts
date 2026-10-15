import { sectionsId } from "./id/sections";
import { sectionsEn } from "./en/sections";
// Types
import type { LocaleCode } from "@/i18n/locales";
import type { SectionsContent } from "@/domain/sections";

const BUNDLES: Partial<Record<LocaleCode, SectionsContent>> = {
  id: sectionsId,
  en: sectionsEn,
};

export function getSections(locale: LocaleCode): SectionsContent {
  return BUNDLES[locale] ?? sectionsId;
}
