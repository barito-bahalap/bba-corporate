import { Suspense, useRef } from "react";
import { Outlet } from "react-router-dom";
// Style
import "./RootLayout.css";
// Contexts & Hooks
import { HeaderProvider } from "@barito-bahalap/contexts";
import { useLocale, useScrollReveal } from "@/hooks";
// Components
import { LoadingSpinner, Header, Footer } from "@/components";
import { ScrollToTop, ScrollToSection } from "@/components";

export function RootLayout() {
  const { ui } = useLocale();
  const mainRef = useRef<HTMLElement>(null);
  useScrollReveal(mainRef);

  return (
    <HeaderProvider>
      <ScrollToTop />

      <div className="root-layout">
        <a href="#main" className="root-layout__skip">
          {ui.skipToContent}
        </a>

        <Header />

        <ScrollToSection />
        <main ref={mainRef} id="main" className="root-layout__main">
          <Suspense fallback={<LoadingSpinner block srLabel={ui.loading} />}>
            <Outlet />
          </Suspense>
        </main>

        <Footer />
      </div>
    </HeaderProvider>
  );
}
