import type { Faq } from "./faqs";
import { servicePages, type ServicePage } from "./services";
import { SITE_URL, site } from "./site";

const ORG_ID = `${SITE_URL}/#organization`;

// Deliberately no Review or AggregateRating: Google treats reviews a business
// publishes about itself as ineligible for star results.
export function organizationSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "ProfessionalService",
    "@id": ORG_ID,
    name: site.name,
    alternateName: site.shortName,
    description: site.summary,
    url: SITE_URL,
    logo: `${SITE_URL}${site.logo}`,
    image: `${SITE_URL}${site.logo}`,
    email: site.email,
    telephone: site.phone,
    address: {
      "@type": "PostalAddress",
      addressLocality: site.city,
      addressCountry: site.countryCode,
    },
    areaServed: [
      { "@type": "Country", name: site.country },
      { "@type": "AdministrativeArea", name: "East Africa" },
    ],
    knowsAbout: [
      "Website development",
      "Mobile app development",
      "Web application development",
      "UI/UX design",
      "Technical SEO",
      "Web accessibility",
      "React",
      "Next.js",
    ],
    hasOfferCatalog: {
      "@type": "OfferCatalog",
      name: "Website and app development services",
      itemListElement: servicePages.map((s) => ({
        "@type": "Offer",
        itemOffered: {
          "@type": "Service",
          name: s.name,
          url: `${SITE_URL}/services/${s.slug}`,
        },
      })),
    },
    contactPoint: {
      "@type": "ContactPoint",
      contactType: "sales",
      telephone: site.phone,
      email: site.email,
      availableLanguage: ["English"],
    },
  };
}

export function websiteSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "WebSite",
    "@id": `${SITE_URL}/#website`,
    url: SITE_URL,
    name: site.name,
    publisher: { "@id": ORG_ID },
  };
}

export function faqSchema(faqs: Faq[]) {
  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqs.map((f) => ({
      "@type": "Question",
      name: f.question,
      acceptedAnswer: { "@type": "Answer", text: f.answer },
    })),
  };
}

export function serviceSchema(service: ServicePage) {
  return {
    "@context": "https://schema.org",
    "@type": "Service",
    name: service.name,
    serviceType: service.name,
    description: service.answer,
    url: `${SITE_URL}/services/${service.slug}`,
    provider: { "@id": ORG_ID },
    areaServed: { "@type": "Country", name: site.country },
  };
}

export function breadcrumbSchema(service: ServicePage) {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Home", item: SITE_URL },
      {
        "@type": "ListItem",
        position: 2,
        name: service.name,
        item: `${SITE_URL}/services/${service.slug}`,
      },
    ],
  };
}
