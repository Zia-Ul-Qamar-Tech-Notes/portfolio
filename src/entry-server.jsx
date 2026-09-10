import { StrictMode } from "react";
import { renderToString } from "react-dom/server";
import App from "./App.jsx";
import { ThemeProvider } from "./context/ThemeContext.jsx";

// Used only at build time by scripts/prerender.js to bake the fully rendered
// markup into dist/index.html, so crawlers get real content without running JS.
export function render() {
  return renderToString(
    <ThemeProvider>
      <StrictMode>
        <App />
      </StrictMode>
    </ThemeProvider>,
  );
}
