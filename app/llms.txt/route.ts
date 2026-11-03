import { homeFaqs } from "@/lib/faqs";
import { locationPages } from "@/lib/locations";
import { servicePages } from "@/lib/services";
import { SITE_URL, site } from "@/lib/site";

export const dynamic = "force-static";

export function GET() {
  const body = [
    `# ${site.name}`,
    "",
    `> ${site.summary}`,
    "",
    "## Services",
    ...servicePages.map(
      (s) => `- [${s.name}](${SITE_URL}/services/${s.slug}): ${s.metaDescription}`
    ),
    "",
    "## Where we work",
    ...locationPages.map(
      (l) => `- [${l.name}](${SITE_URL}/${l.slug}): ${l.metaDescription}`
    ),
    "",
    "## Frequently asked questions",
    ...homeFaqs.map((f) => `- ${f.question} ${f.answer}`),
    "",
    "## Contact",
    `- Location: ${site.city}, ${site.country}`,
    `- Email: ${site.email}`,
    `- Phone and WhatsApp: ${site.phoneDisplay}`,
    "",
  ].join("\n");

  return new Response(body, {
    headers: { "Content-Type": "text/plain; charset=utf-8" },
  });
}
