
import {
  ui,
  defaultLang,
  type Lang
} from "./ui";

/**
 * Determine the language from the current URL.
 */
export function getLangFromUrl(url: URL): Lang {
  const firstSegment = url.pathname
    .split("/")
    .filter(Boolean)[0];

  return firstSegment === "en"
    ? "en"
    : defaultLang;
}

/**
 * Return translations for the selected language.
 */
export function useTranslations(lang: Lang) {
  return ui[lang];
}

/**
 * Generate a localized internal URL.
 *
 * Examples:
 * localizedPath("/", "uk") -> "/"
 * localizedPath("/", "en") -> "/en/"
 * localizedPath("/templates/", "en")
 *   -> "/en/templates/"
 */
export function localizedPath(
  path: `/${string}`,
  lang: Lang
): string {
  const cleanPath =
    path.replace(/^\/en(?=\/|$)/, "") || "/";

  if (lang === defaultLang) {
    return cleanPath;
  }

  return cleanPath === "/"
    ? "/en/"
    : `/en${cleanPath}`;
}
