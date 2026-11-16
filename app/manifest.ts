import type { MetadataRoute } from "next";
import { site } from "@/lib/site";

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: site.name,
    short_name: "PragDev",
    description: site.summary,
    start_url: "/",
    display: "standalone",
    background_color: "#0F0D09",
    theme_color: "#0F0D09",
    icons: [
      { src: "/brand/pragdev-app-icon-192.png", sizes: "192x192", type: "image/png" },
      { src: "/brand/pragdev-app-icon-512.png", sizes: "512x512", type: "image/png" },
    ],
  };
}
