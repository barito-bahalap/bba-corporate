import { useMemo } from "react";
import type { LegalContent } from "@/domain/content";
import { localizeContent } from "@/i18n/localize";
import { useLocale } from "./useLocale";

export function useLegalContent(kind: "privacy" | "terms"): LegalContent {
  const { content, locale } = useLocale();
  return useMemo(
    () =>
      localizeContent(
        kind === "privacy" ? content.privacy : content.terms,
        locale,
      ),
    [content, locale, kind],
  );
}
