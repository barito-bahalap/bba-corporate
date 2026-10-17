// Layout
import { RootLayout } from "@/components/layout";
// Pages
import HomePage from "@/pages/home/HomePage";
import AboutPage from "@/pages/about/AboutPage";
import CareersPage from "@/pages/careers/CareersPage";
import PrivacyPage from "@/pages/privacy/PrivacyPage";
import TermsPage from "@/pages/terms/TermsPage";
import NotFoundPage from "@/pages/404/NotFoundPage";
// i18n
import { DEFAULT_LOCALE, ENABLED_LOCALES } from "@/i18n/locales";

const pageRoutes = [
  { index: true, element: <HomePage /> },
  { path: "about", element: <AboutPage /> },
  { path: "careers", element: <CareersPage /> },
  { path: "privacy", element: <PrivacyPage /> },
  { path: "terms", element: <TermsPage /> },
  { path: "*", element: <NotFoundPage /> },
];

export const appRoutes = ENABLED_LOCALES.map((code) => ({
  ...(code === DEFAULT_LOCALE ? {} : { path: code }),
  element: <RootLayout />,
  children: pageRoutes,
}));
