import { StrictMode } from "react";
import { createRoot, hydrateRoot } from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import { ThemeProvider } from "./context/ThemeContext.jsx";
import { initGA } from "./analytics/ga.js";

initGA();

const container = document.getElementById("root");

const app = (
  <ThemeProvider>
    <StrictMode>
      <App />
    </StrictMode>
  </ThemeProvider>
);

// The production build ships prerendered markup inside #root; hydrate it so the
// crawler-visible HTML stays put instead of being blown away on mount.
if (container.hasChildNodes()) {
  hydrateRoot(container, app);
} else {
  createRoot(container).render(app);
}
