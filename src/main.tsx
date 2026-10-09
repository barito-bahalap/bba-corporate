import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
// Style
import "@barito-bahalap/styles";
import "@barito-bahalap/styles/brands/corporate";
// App
import App from "./app/App.tsx";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <App />
  </StrictMode>,
);
