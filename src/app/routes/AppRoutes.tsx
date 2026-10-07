// Layout
import { Outlet } from "react-router-dom";
import { RootLayout } from "@/components/layout";
// Pages
import HomePage from "@/pages/home/HomePage";
import AboutPage from "@/pages/about/AboutPage";
import NotFoundPage from "@/pages/404/NotFoundPage";

export const appRoutes = [
  {
    element: <RootLayout />,
    children: [
      { index: true, element: <HomePage /> },
      { path: "tentang", element: <AboutPage /> },
    ],
  },
  {
    element: <Outlet />,
    children: [{ path: "*", element: <NotFoundPage /> }],
  },
];
