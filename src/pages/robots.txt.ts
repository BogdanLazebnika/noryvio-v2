import type { APIRoute } from "astro";

/**
 * Public launch: allow crawlers to read page-level noindex on demo and
 * unfinished legal pages. Blocking those paths in robots.txt would prevent
 * Google from seeing their noindex directives.
 *
 * Before launch, keep the existing site-wide staging crawl restriction.
 */
export const GET: APIRoute = ({ site }) => {
  const live = process.env.NORYVIO_LIVE === "true" && Boolean(site);

  const body = live
    ? [
        "User-agent: *",
        "Allow: /",
        `Sitemap: ${new URL("/sitemap.xml", site!).href}`,
        "",
      ].join("\n")
    : "User-agent: *\nDisallow: /\n";

  return new Response(body, {
    headers: {
      "Content-Type": "text/plain; charset=utf-8",
      "Cache-Control": "public, max-age=300",
    },
  });
};
