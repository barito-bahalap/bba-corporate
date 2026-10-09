import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
// Style
import "@baritobahalap/styles";
import "@baritobahalap/styles/brands/corporate";
// App
import App from "./app/App.tsx";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <App />
  </StrictMode>,
);
