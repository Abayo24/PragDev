import type { MetadataRoute } from "next";
import { SITE_URL } from "@/lib/site";

// Allowing all agents keeps search engines and AI answer engines able to read the site.
export default function robots(): MetadataRoute.Robots {
  return {
    rules: { userAgent: "*", allow: "/" },
    sitemap: `${SITE_URL}/sitemap.xml`,
    host: SITE_URL,
  };
}
