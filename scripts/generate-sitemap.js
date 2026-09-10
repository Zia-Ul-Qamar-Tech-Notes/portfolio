/**
 * Generates public/sitemap.xml.
 *
 * The portfolio is a single-route SPA, so the sitemap holds one canonical URL.
 * Section anchors (#about, #projects, ...) are deliberately NOT listed: Google
 * discards the fragment and would just see the same URL repeated.
 *
 * Image extensions are included so the profile and project shots are eligible
 * for Google Images.
 */
import { writeFileSync } from "node:fs";
import { fileURLToPath } from "node:url";
import { dirname, resolve } from "node:path";

const SITE_URL = "https://ziaqamar.online";

const pages = [
  {
    loc: "/",
    changefreq: "monthly",
    priority: "1.0",
    images: [
      {
        loc: "/og-image.jpg",
        title: "Mirza Zia ul Qamar — Software Engineer",
        caption:
          "Mirza Zia ul Qamar, software engineer and MERN stack developer.",
      },
      {
        loc: "/profilePic.jpg",
        title: "Mirza Zia ul Qamar",
        caption: "Profile photo of Mirza Zia ul Qamar.",
      },
      {
        loc: "/uniconnect.jpg",
        title: "UniConnect — Next.js, TypeScript, MongoDB",
        caption: "UniConnect, a full stack project by Mirza Zia ul Qamar.",
      },
    ],
  },
];

const escapeXml = (value) =>
  value.replace(
    /[<>&'"]/g,
    (char) =>
      ({ "<": "&lt;", ">": "&gt;", "&": "&amp;", "'": "&apos;", '"': "&quot;" })[
        char
      ],
  );

const lastmod = new Date().toISOString().split("T")[0];

const buildImage = (image) =>
  [
    "    <image:image>",
    `      <image:loc>${SITE_URL}${image.loc}</image:loc>`,
    `      <image:title>${escapeXml(image.title)}</image:title>`,
    `      <image:caption>${escapeXml(image.caption)}</image:caption>`,
    "    </image:image>",
  ].join("\n");

const buildUrl = (page) =>
  [
    "  <url>",
    `    <loc>${SITE_URL}${page.loc}</loc>`,
    `    <lastmod>${lastmod}</lastmod>`,
    `    <changefreq>${page.changefreq}</changefreq>`,
    `    <priority>${page.priority}</priority>`,
    ...(page.images ?? []).map(buildImage),
    "  </url>",
  ].join("\n");

const sitemap = [
  '<?xml version="1.0" encoding="UTF-8"?>',
  '<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9"',
  '        xmlns:image="http://www.google.com/schemas/sitemap-image/1.1">',
  ...pages.map(buildUrl),
  "</urlset>",
  "",
].join("\n");

const outFile = resolve(
  dirname(fileURLToPath(import.meta.url)),
  "..",
  "public",
  "sitemap.xml",
);

writeFileSync(outFile, sitemap, "utf8");
console.log(`✓ sitemap.xml generated (lastmod ${lastmod})`);
