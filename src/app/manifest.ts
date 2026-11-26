import type { MetadataRoute } from "next";
import { site } from "@/config/site";

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: site.legalName,
    short_name: site.name,
    description: "Ev ve ofis tipi kahve makineleri için tamir, bakım ve teknik servis.",
    lang: "tr",
    start_url: "/",
    display: "standalone",
    background_color: "#f8f3ec",
    theme_color: "#2a1c14",
    icons: [
      { src: "/icon.svg", sizes: "any", type: "image/svg+xml" },
      { src: "/apple-icon", sizes: "180x180", type: "image/png" },
    ],
  };
}
