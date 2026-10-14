import { useEffect } from "react";
import { useLocation } from "react-router-dom";
import { getSiteConfig } from "@barito-bahalap/config";
import { getContent } from "@/data";
import {
  DEFAULT_LOCALE,
  LOCALES,
  isEnabledLocale,
  localizeHref,
  type LocaleCode,
} from "@/i18n/locales";

export function useLocale() {
  const { pathname } = useLocation();
  const segment = pathname.split("/")[1];
  const locale: LocaleCode = isEnabledLocale(segment)
    ? segment
    : DEFAULT_LOCALE;

  useEffect(() => {
    document.documentElement.lang = LOCALES[locale].htmlLang;
  }, [locale]);

  const content = getContent(locale);

  return {
    locale,
    content,
    ui: content.ui,
    site: getSiteConfig(locale),
    href: (path: string, target: LocaleCode = locale) =>
      localizeHref(path, target),
  };
}
