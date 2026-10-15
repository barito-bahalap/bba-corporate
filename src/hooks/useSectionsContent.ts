import { useMemo } from "react";
import { useLocale } from "./useLocale";
import { getSections } from "@/data/sections";

export function useSectionsContent() {
  const { locale } = useLocale();
  return useMemo(() => getSections(locale), [locale]);
}
