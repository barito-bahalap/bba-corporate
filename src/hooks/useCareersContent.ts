import { useMemo } from "react";
import type { CareersContent } from "@/domain/content";
import { localizeContent } from "@/i18n/localize";
import { useLocale } from "./useLocale";

export function useCareersContent(): CareersContent {
  const { content, locale } = useLocale();
  return useMemo(
    () => localizeContent(content.careers, locale),
    [content, locale],
  );
}
