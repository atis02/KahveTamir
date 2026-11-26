import type { MetadataRoute } from "next";
import { site } from "@/config/site";

export default function sitemap(): MetadataRoute.Sitemap {
  const now = new Date();
  return [
    { path: "/", priority: 1, changeFrequency: "monthly" as const },
    { path: "/ev-tipi-kahve-makinesi-tamiri", priority: 0.9, changeFrequency: "monthly" as const },
    { path: "/ofis-tipi-kahve-makinesi-tamiri", priority: 0.9, changeFrequency: "monthly" as const },
    { path: "/kvkk-aydinlatma-metni", priority: 0.2, changeFrequency: "yearly" as const },
    { path: "/gizlilik-politikasi", priority: 0.2, changeFrequency: "yearly" as const },
  ].map((p) => ({ url: `${site.url}${p.path === "/" ? "" : p.path}`, lastModified: now, changeFrequency: p.changeFrequency, priority: p.priority }));
}
