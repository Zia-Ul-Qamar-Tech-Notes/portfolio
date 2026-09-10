import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  build: {
    // Source maps would be crawlable dead weight in production.
    sourcemap: false,
  },
  ssr: {
    // Several deps (react-vertical-timeline-component, typewriter-effect,
    // react-google-recaptcha) are CommonJS and break Node's named-export
    // interop, so bundle everything into the prerender build.
    noExternal: true,
  },
});
