import type { APIRoute } from "astro";
import { blogPosts } from "../data/blogPosts";

const escapeXml = (text: string) => text
  .replace(/&/g, "&amp;")
  .replace(/</g, "&lt;")
  .replace(/>/g, "&gt;")
  .replace(/"/g, "&quot;")
  .replace(/'/g, "&apos;");

export const GET: APIRoute = ({ site }) => {
  // Intentionally omit demos, legal drafts and the design lab.
  const live = process.env.NORYVIO_LIVE === "true" && Boolean(site);
  const paths = live
    ? ["/", "/templates/", "/blog/", ...blogPosts.map((post) => `/blog/${post.slug}/`)]
    : [];

  const entries = paths.map((path) => {
    const url = new URL(path, site!).href;
    const article = blogPosts.find((post) => path === `/blog/${post.slug}/`);
    const lastmod = article?.updatedAt ? `<lastmod>${escapeXml(article.updatedAt)}</lastmod>` : "";
    return `  <url><loc>${escapeXml(url)}</loc>${lastmod}</url>`;
  }).join("\n");

  const xml = `<?xml version="1.0" encoding="UTF-8"?>\n<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n${entries}\n</urlset>\n`;
  return new Response(xml, { headers: { "Content-Type": "application/xml; charset=utf-8" } });
};
