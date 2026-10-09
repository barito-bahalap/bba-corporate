import { Outlet } from "react-router-dom";
// Style
import "./RootLayout.css";
// Contexts
import { HeaderProvider } from "@barito-bahalap/contexts/header";
// Components
import { Header, Footer } from ".";
import { ScrollToTop } from "@barito-bahalap/components/routing";

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
          <Outlet />
        </main>

        <Footer />
      </div>
    </HeaderProvider>
  );
}
