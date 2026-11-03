// Single source of truth for business facts. Search engines and AI assistants
// cross-check these, so keep them identical everywhere they appear.
export const SITE_URL = (
  process.env.NEXT_PUBLIC_SITE_URL ?? "https://pragdev.vercel.app"
).replace(/\/$/, "");

// Bump when page content changes. Used for the sitemap and "Last updated" labels.
export const CONTENT_UPDATED = "2026-11-03";

export const site = {
  name: "PragDev Softwares",
  shortName: "PragDev",
  summary:
    "PragDev Softwares is a website and app development company based in Nairobi, Kenya, building fast, SEO-ready websites, web applications and mobile apps for startups and growing businesses.",
  email: "pragdev.softwares@gmail.com",
  phone: "+254769622996",
  phoneDisplay: "+254 769 622 996",
  city: "Nairobi",
  country: "Kenya",
  countryCode: "KE",
  logo: "/pds-logo1.png",
};

export function whatsappUrl(message: string) {
  return `https://wa.me/254769622996?text=${encodeURIComponent(message)}`;
}
