import type { MetadataRoute } from "next";
import { locationPages } from "@/lib/locations";
import { servicePages } from "@/lib/services";
import { CONTENT_UPDATED, SITE_URL } from "@/lib/site";

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    { url: SITE_URL, lastModified: CONTENT_UPDATED },
    ...locationPages.map((l) => ({
      url: `${SITE_URL}/${l.slug}`,
      lastModified: CONTENT_UPDATED,
    })),
    ...servicePages.map((s) => ({
      url: `${SITE_URL}/services/${s.slug}`,
      lastModified: CONTENT_UPDATED,
    })),
  ];
}
