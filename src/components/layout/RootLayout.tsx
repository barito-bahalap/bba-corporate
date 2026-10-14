import { Suspense } from "react";
import { Outlet } from "react-router-dom";
// Style
import "./RootLayout.css";
// Contexts & Hooks
import { HeaderProvider } from "@barito-bahalap/contexts";
import { useLocale } from "@/hooks";
// Components
import { LoadingSpinner, ScrollToTop, Header, Footer } from "@/components";

export function RootLayout() {
  const { ui } = useLocale();

  return (
    <HeaderProvider>
      <ScrollToTop />

      <div className="root-layout">
        <a href="#main" className="root-layout__skip">
          {ui.skipToContent}
        </a>

        <Header />

        <main id="main" className="root-layout__main">
          <Suspense fallback={<LoadingSpinner block srLabel={ui.loading} />}>
            <Outlet />
          </Suspense>
        </main>

        <Footer />
      </div>
    </HeaderProvider>
  );
}
