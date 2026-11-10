
import { defineConfig } from "astro/config";

/**
 * NORYVIO 2.0
 * Astro configuration
 *
 * Default language: Ukrainian
 * Additional language: English
 *
 * Ukrainian:
 *   /
 *   /templates/
 *
 * English:
 *   /en/
 *   /en/templates/
 */

// Optional: set NORYVIO_SITE_URL to your final, verified HTTPS domain.
// Leave empty during local development and the first test deployment.
const siteUrl = process.env.NORYVIO_SITE_URL?.trim();

if (siteUrl && !/^https:\/\/[^/]+\/?$/.test(siteUrl)) {
  throw new Error("NORYVIO_SITE_URL must be an HTTPS origin, e.g. https://yourdomain.com");
}

export default defineConfig({
  ...(siteUrl ? { site: siteUrl } : {}),
  output: "static",

  i18n: {
    defaultLocale: "uk",

    locales: ["uk", "en"],

    routing: {
      prefixDefaultLocale: false
    }
  }
});
