import type { MetadataRoute } from "next";
import { isIndexable, site } from "@/config/site";

export default function robots(): MetadataRoute.Robots {
  // Vercel preview dağıtımları arama motorlarına kapalıdır (yinelenen içerik oluşmaması için)
  if (!isIndexable) {
    return { rules: { userAgent: "*", disallow: "/" } };
  }
  return {
    rules: { userAgent: "*", allow: "/" },
    sitemap: `${site.url}/sitemap.xml`,
    host: site.url,
  };
}
