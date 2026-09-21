import type {MetadataRoute} from "next";
import {localizedUrl} from "@/lib/site";

export default function sitemap(): MetadataRoute.Sitemap {
  const routes = [
    {locale: "es", path: "", priority: 1},
    {locale: "en", path: "", priority: 0.9},
    {locale: "es", path: "/portafolio", priority: 0.8},
    {locale: "en", path: "/portfolio", priority: 0.8},
  ];

  return routes.map(({locale, path, priority}) => ({
    url: localizedUrl(locale, path),
    lastModified: new Date(),
    changeFrequency: "monthly",
    priority,
  }));
}
