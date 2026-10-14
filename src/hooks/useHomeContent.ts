import { useMemo } from "react";
import type { HomeContent } from "@/domain/content";
import { localizeContent } from "@/i18n/localize";
import { useLocale } from "./useLocale";

export function useHomeContent(): HomeContent {
  const { content, locale } = useLocale();
  return useMemo(
    () => localizeContent(content.home, locale),
    [content, locale],
  );
}
