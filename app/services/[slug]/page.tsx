import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import JsonLd from "@/components/JsonLd";
import { testimonials } from "@/components/Testimonials";
import {
  breadcrumbSchema,
  faqSchema,
  serviceSchema,
} from "@/lib/schema";
import { getServicePage, servicePages } from "@/lib/services";
import { CONTENT_UPDATED, whatsappUrl } from "@/lib/site";

interface Props {
  params: { slug: string };
}

export function generateStaticParams() {
  return servicePages.map((s) => ({ slug: s.slug }));
}

export function generateMetadata({ params }: Props): Metadata {
  const service = getServicePage(params.slug);
  if (!service) return {};
  const path = `/services/${service.slug}`;
  return {
    title: service.metaTitle,
    description: service.metaDescription,
    alternates: { canonical: path },
    openGraph: {
      title: `${service.metaTitle} | PragDev`,
      description: service.metaDescription,
      url: path,
      type: "website",
      siteName: "PragDev Softwares",
      locale: "en_KE",
      images: [shareImage],
    },
    twitter: { card: "summary_large_image", images: [shareImage] },
  };
}

const shareImage = {
  url: "/opengraph-image.png",
  width: 1200,
  height: 630,
  alt: "PragDev Softwares: website and app developers in Nairobi, Kenya",
};

const headingStyle = { fontSize: "clamp(1.8rem, 3.2vw, 3rem)" };

export default function ServicePageRoute({ params }: Props) {
  const service = getServicePage(params.slug);
  if (!service) notFound();

  const quote = testimonials.find((t) => t.name === service.testimonialName);
  const others = servicePages.filter((s) => s.slug !== service.slug);
  const updated = new Date(CONTENT_UPDATED).toLocaleDateString("en-GB", {
    day: "numeric",
    month: "long",
    year: "numeric",
    timeZone: "UTC",
  });

  return (
    <main>
      <JsonLd data={serviceSchema(service)} />
      <JsonLd data={breadcrumbSchema(service)} />
      <JsonLd data={faqSchema(service.faqs)} />

      {/* Hero */}
      <section className="bg-ink px-6 md:px-10 pt-[120px] pb-20">
        <div className="max-w-[1240px] mx-auto">
          <nav aria-label="Breadcrumb" className="mb-10">
            <ol className="flex flex-wrap gap-2 list-none font-mono text-[0.7rem] tracking-[0.1em] uppercase text-cream/60">
              <li>
                <Link href="/" className="hover:text-cream transition-colors duration-200">
                  Home
                </Link>
              </li>
              <li aria-hidden>/</li>
              <li aria-current="page" className="text-cream/80">
                {service.name}
              </li>
            </ol>
          </nav>
          <p className="font-mono text-[0.7rem] tracking-[0.15em] uppercase text-orange mb-6">
            {service.eyebrow}
          </p>
          <h1
            className="font-display font-extrabold leading-[0.98] tracking-tighter2 text-cream mb-8 max-w-[1000px]"
            style={{ fontSize: "clamp(2.6rem, 6vw, 6rem)" }}
          >
            {service.h1}
          </h1>
          <p className="text-[1.1rem] font-light text-cream/75 max-w-[720px] leading-[1.75] mb-10">
            {service.answer}
          </p>
          <Link
            href={whatsappUrl(service.whatsappMessage)}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2.5 px-7 py-[15px] rounded-[9px] bg-[#c73400] text-white font-semibold text-[0.92rem] transition-all duration-200 hover:bg-[#a82c00] hover:-translate-y-[3px] tracking-[-0.01em]"
          >
            Book a Free Consultation ↗
          </Link>
        </div>
      </section>

      {/* Included */}
      <section className="py-20 bg-cream">
        <div className="max-w-[1240px] mx-auto px-6 md:px-10">
          <h2
            className="font-display font-bold tracking-tighter3 leading-[1.12] mb-12 max-w-[820px]"
            style={headingStyle}
          >
            {service.includedHeading}
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-px bg-ink/10 border border-ink/10">
            {service.included.map((item) => (
              <div key={item.title} className="bg-cream p-7">
                <h3 className="font-display text-[1.15rem] font-bold tracking-tighter4 mb-2">
                  {item.title}
                </h3>
                <p className="text-[0.9rem] text-ink-muted font-light leading-[1.75]">
                  {item.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Audience + proof */}
      <section className="py-20 bg-cream-2">
        <div className="max-w-[1240px] mx-auto px-6 md:px-10 grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
          <div>
            <h2
              className="font-display font-bold tracking-tighter3 leading-[1.12] mb-8"
              style={headingStyle}
            >
              {service.audienceHeading}
            </h2>
            <ul className="flex flex-col gap-3 list-none">
              {service.audience.map((a) => (
                <li key={a} className="flex gap-3 text-ink-muted font-light leading-[1.7]">
                  <span className="text-orange" aria-hidden>
                    ✦
                  </span>
                  {a}
                </li>
              ))}
            </ul>
          </div>

          {(service.work || quote) && (
            <div>
              {service.work && (
                <>
                  <h2
                    className="font-display font-bold tracking-tighter3 leading-[1.12] mb-8"
                    style={headingStyle}
                  >
                    Related work
                  </h2>
                  <ul className="flex flex-col list-none mb-8">
                    {service.work.map((w) => (
                      <li key={w.name} className="py-4 border-b border-ink/10 last:border-b-0">
                        <h3 className="font-display font-bold tracking-tighter4 mb-1">
                          {w.name}
                        </h3>
                        <p className="text-[0.9rem] text-ink-muted font-light leading-[1.7]">
                          {w.desc}
                        </p>
                      </li>
                    ))}
                  </ul>
                </>
              )}
              {quote && (
                <blockquote className="bg-ink rounded-xl p-8">
                  <p className="font-display italic font-light text-cream/80 leading-[1.65] mb-5">
                    {quote.text}
                  </p>
                  <footer className="text-[0.85rem] text-cream/70">
                    <strong className="text-cream">{quote.name}</strong>, {quote.role}
                  </footer>
                </blockquote>
              )}
            </div>
          )}
        </div>
      </section>

      {/* FAQs: always open so the answers are visible and easy to quote */}
      <section className="py-20 bg-cream">
        <div className="max-w-[1240px] mx-auto px-6 md:px-10">
          <h2
            className="font-display font-bold tracking-tighter3 leading-[1.12] mb-12"
            style={headingStyle}
          >
            Frequently asked questions
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-x-16 gap-y-10">
            {service.faqs.map((f) => (
              <div key={f.question}>
                <h3 className="font-display text-[1.15rem] font-bold tracking-tighter4 mb-2.5">
                  {f.question}
                </h3>
                <p className="text-[0.92rem] text-ink-muted font-light leading-[1.8]">
                  {f.answer}
                </p>
              </div>
            ))}
          </div>
          <p className="mt-14 text-[0.8rem] text-ink-muted">
            Last updated <time dateTime={CONTENT_UPDATED}>{updated}</time>
          </p>
        </div>
      </section>

      {/* Other services + CTA */}
      <section className="py-20 bg-[#c73400]">
        <div className="max-w-[1240px] mx-auto px-6 md:px-10">
          <h2
            className="font-display font-extrabold tracking-tighter2 text-white leading-[1] mb-8"
            style={{ fontSize: "clamp(2rem, 4.5vw, 4rem)" }}
          >
            Tell us what you want to build.
          </h2>
          <div className="flex flex-wrap gap-3.5 mb-10">
            <Link
              href={whatsappUrl(service.whatsappMessage)}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2.5 px-7 py-[15px] rounded-[9px] bg-white text-[#b52f06] font-bold text-[0.92rem] transition-all duration-200 hover:bg-ink hover:text-white"
            >
              Start on WhatsApp ↗
            </Link>
          </div>
          <p className="text-white text-[0.92rem] mb-3 font-medium">Other services:</p>
          <ul className="flex flex-wrap gap-x-6 gap-y-2 list-none">
            {others.map((s) => (
              <li key={s.slug}>
                <Link
                  href={`/services/${s.slug}`}
                  className="text-white underline underline-offset-4 text-[0.92rem] hover:opacity-80"
                >
                  {s.name}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </section>
    </main>
  );
}
