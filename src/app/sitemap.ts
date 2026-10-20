import type { MetadataRoute } from "next";
import { site } from "@/content/site";
import { defaultLocale, localePath, locales } from "@/i18n/config";

const url = (path: string) => new URL(path, site.url).href;

export default function sitemap(): MetadataRoute.Sitemap {
  const languages = Object.fromEntries(locales.map((l) => [l, url(localePath(l))]));
  return locales.map((locale) => ({
    url: url(localePath(locale)),
    changeFrequency: "monthly",
    priority: locale === defaultLocale ? 1 : 0.8,
    alternates: { languages },
  }));
}
