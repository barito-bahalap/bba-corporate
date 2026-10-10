// Layout
import { Outlet } from "react-router-dom";
import { RootLayout } from "@/components/layout";
// Pages
import HomePage from "@/pages/home/HomePage";
import AboutPage from "@/pages/about/AboutPage";
import CareersPage from "@/pages/careers/CareersPage";
import PrivacyPage from "@/pages/privacy/PrivacyPage";
import TermsPage from "@/pages/terms/TermsPage";
import NotFoundPage from "@/pages/404/NotFoundPage";

export const appRoutes = [
  {
    element: <RootLayout />,
    children: [
      { index: true, element: <HomePage /> },
      { path: "about", element: <AboutPage /> },
      { path: "careers", element: <CareersPage /> },
      { path: "privacy", element: <PrivacyPage /> },
      { path: "terms", element: <TermsPage /> },
    ],
  },
  {
    element: <Outlet />,
    children: [{ path: "*", element: <NotFoundPage /> }],
  },
];
