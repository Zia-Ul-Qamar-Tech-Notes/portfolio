# SEO

Canonical domain: **https://ziaqamar.online** (no `www`, trailing slash on root).

Everything below assumes that one origin. If it ever changes, update:
`index.html` (canonical, og/twitter URLs, JSON-LD `@id`s), `public/robots.txt`,
and `SITE_URL` in `scripts/generate-sitemap.js`.

## How the build works

`npm run build` runs four steps:

1. `node scripts/generate-sitemap.js` — writes `public/sitemap.xml` with a fresh `lastmod`.
2. `vite build` — normal client bundle into `dist/`.
3. `vite build --ssr src/entry-server.jsx` — renders the app for Node into `dist-ssr/`.
4. `node scripts/prerender.js` — renders the app to a string and substitutes it
   into the `<!--app-html-->` placeholder in `dist/index.html`, then deletes `dist-ssr/`.

The result: `dist/index.html` ships ~54 KB of real markup instead of an empty
`<div id="root">`. `src/main.jsx` calls `hydrateRoot` when it finds that markup,
so React adopts the prerendered DOM rather than throwing it away.

**Keep `<!--app-html-->` inside `<div id="root">` in `index.html`.** The build
fails loudly if it goes missing, because prerendering would silently become a no-op.

Use `npm run build:nossr` to skip prerendering (faster local checks).

### Prerendering constraints

Anything rendered on the server must produce identical markup on the client's
first render, or React logs a hydration mismatch. In practice that means: no
`window`/`document`/`localStorage`/`Math.random()` reads **during render** — put
them in `useEffect`. Current code is clean; the footer year is the one
build-time value and is marked `suppressHydrationWarning`.

`vite.config.js` sets `ssr.noExternal: true` because
`react-vertical-timeline-component`, `typewriter-effect` and
`react-google-recaptcha` are CommonJS and break Node's named-export interop.

## Manual steps (not automatable — required for indexing)

1. **301 redirects at the host/DNS layer.** Split signals are the single biggest
   ranking killer here, and the old `og:url` pointed at a subdomain:
   - `portfolio.ziaqamar.online` → `https://ziaqamar.online` (301)
   - `www.ziaqamar.online` → `https://ziaqamar.online` (301)
   - `http://` → `https://` (301)
2. **Google Search Console** — add `https://ziaqamar.online`, verify (DNS TXT is
   the durable option), submit `https://ziaqamar.online/sitemap.xml`, then use
   *URL Inspection → Request Indexing* on the homepage.
3. **Bing Webmaster Tools** — import from Search Console; also feeds DuckDuckGo.
4. **Verify rendering** — Search Console *URL Inspection → View crawled page*
   should show the About / Projects / Experience copy in the raw HTML.
5. **Validate structured data** — https://validator.schema.org and
   https://search.google.com/test/rich-results.
6. **Confirm the social card** — paste the URL into
   https://www.linkedin.com/post-inspector/ (LinkedIn caches aggressively).

## Off-page (what actually moves ranking for a personal name)

On-page work is done; ranking for "Mirza Zia ul Qamar" now depends mostly on
corroborating signals pointing at the canonical domain:

- Put `https://ziaqamar.online` in the LinkedIn profile *Website* field, the
  GitHub profile *Website* field, and GitHub repo *About* sections.
- Keep the name spelled identically everywhere (`Mirza Zia ul Qamar`) — the
  `sameAs` array in the JSON-LD is what ties those profiles to the entity.

## Known gaps

- `alumniOf` is omitted from the Person schema because the university name
  wasn't in the codebase. Adding it strengthens the entity graph.
- `profilePic.jpg` is 199 KB and 1280×2150, displayed far smaller. Converting to
  WebP and resizing would help Largest Contentful Paint, which is a ranking factor.
- `next-sitemap` (a Next.js tool) and `vite-plugin-sitemap` are in
  `package.json` but unused — `scripts/generate-sitemap.js` replaced them.
