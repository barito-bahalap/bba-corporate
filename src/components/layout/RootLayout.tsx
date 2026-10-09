import { Suspense } from "react";
import { Outlet } from "react-router-dom";
// Style
import "./RootLayout.css";
// Contexts
import { HeaderProvider } from "@barito-bahalap/contexts";
// Components
import { LoadingSpinner, ScrollToTop, Header, Footer } from "@/components";

export function RootLayout() {
  return (
    <HeaderProvider>
      <ScrollToTop />

      <div className="root-layout">
        <a href="#main" className="root-layout__skip">
          Skip to content
        </a>

        <Header />

        <main id="main" className="root-layout__main">
          <Suspense fallback={<LoadingSpinner block />}>
            <Outlet />
          </Suspense>
        </main>

        <Footer />
      </div>
    </HeaderProvider>
  );
}
