import type { APIRoute } from "astro";

export const GET: APIRoute = ({ site }) => {
  const live = process.env.NORYVIO_LIVE === "true" && Boolean(site);
  const body = live
    ? ["User-agent: *", "Allow: /", "Disallow: /demo/", "Disallow: /v2-lab/", `Sitemap: ${new URL("/sitemap.xml", site!).href}`, ""].join("\n")
    : "User-agent: *\nDisallow: /\n";

  return new Response(body, {
    headers: { "Content-Type": "text/plain; charset=utf-8", "Cache-Control": "public, max-age=300" },
  });
};
