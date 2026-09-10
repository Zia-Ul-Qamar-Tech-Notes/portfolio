/**
 * Bakes the rendered React markup into dist/index.html.
 *
 * Vite ships an empty <div id="root"></div>, which means a crawler that does
 * not execute JavaScript sees a blank page. This renders the app to a string at
 * build time and substitutes it into the <!--app-html--> placeholder, so the
 * About / Projects / Experience copy is in the served HTML. The client then
 * hydrates that markup (see src/main.jsx).
 *
 * Run automatically by `npm run build`.
 */
import { readFileSync, writeFileSync, rmSync, existsSync } from "node:fs";
import { fileURLToPath, pathToFileURL } from "node:url";
import { dirname, resolve } from "node:path";

const root = resolve(dirname(fileURLToPath(import.meta.url)), "..");
const indexFile = resolve(root, "dist", "index.html");
const serverEntry = resolve(root, "dist-ssr", "entry-server.js");
const PLACEHOLDER = "<!--app-html-->";

if (!existsSync(indexFile)) {
  throw new Error("dist/index.html not found — run the client build first.");
}
if (!existsSync(serverEntry)) {
  throw new Error("dist-ssr/entry-server.js not found — run the SSR build first.");
}

const { render } = await import(pathToFileURL(serverEntry).href);
const appHtml = render();

const template = readFileSync(indexFile, "utf8");

if (!template.includes(PLACEHOLDER)) {
  throw new Error(
    `"${PLACEHOLDER}" placeholder missing from index.html — prerendering would be a no-op.`,
  );
}

writeFileSync(indexFile, template.replace(PLACEHOLDER, appHtml), "utf8");

// The SSR bundle is a build artefact, not something to deploy.
rmSync(resolve(root, "dist-ssr"), { recursive: true, force: true });

console.log(`✓ prerendered ${appHtml.length.toLocaleString()} chars into dist/index.html`);
