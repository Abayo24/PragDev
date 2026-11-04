import type { Metadata } from "next";
import Link from "next/link";
import JsonLd from "@/components/JsonLd";
import { Star } from "@/components/Art";
import { testimonials } from "@/components/Testimonials";
import {
  breadcrumbSchema,
  faqSchema,
  serviceSchema,
} from "@/lib/schema";
import type { ServicePage } from "@/lib/services";
import { CONTENT_UPDATED, whatsappUrl } from "@/lib/site";

const shareImage = {
  url: "/opengraph-image.png",
  width: 1200,
  height: 630,
  alt: "PragDev Softwares: website and app developers in Nairobi, Kenya",
};

export function landingMetadata(page: ServicePage, path: string): Metadata {
  return {
    title: page.metaTitle,
    description: page.metaDescription,
    alternates: { canonical: path },
    openGraph: {
      title: `${page.metaTitle} | PragDev`,
      description: page.metaDescription,
      url: path,
      type: "website",
      siteName: "PragDev Softwares",
      locale: "en_KE",
      images: [shareImage],
    },
    twitter: { card: "summary_large_image", images: [shareImage] },
  };
}

interface Props {
  page: ServicePage;
  path: string;
  related: { href: string; label: string }[];
}

export default function LandingPage({ page, path, related }: Props) {
  const quote = testimonials.find((t) => t.name === page.testimonialName);
  const updated = new Date(CONTENT_UPDATED).toLocaleDateString("en-GB", {
    day: "numeric",
    month: "long",
    year: "numeric",
    timeZone: "UTC",
  });

  return (
    <main className="overflow-x-clip">
      <JsonLd data={serviceSchema(page, path)} />
      <JsonLd data={breadcrumbSchema(page, path)} />
      <JsonLd data={faqSchema(page.faqs)} />

      {/* Hero */}
      <section className="glow-top px-6 pb-24 pt-[128px] text-center md:px-10 md:pt-[150px]">
        <div className="mx-auto max-w-[1040px]">
          <nav aria-label="Breadcrumb" className="mb-8">
            <ol className="flex list-none flex-wrap justify-center gap-2 text-[0.85rem] text-cream/70">
              <li>
                <Link href="/" className="transition-colors duration-200 hover:text-lime">
                  Home
                </Link>
              </li>
              <li aria-hidden>/</li>
              <li aria-current="page">{page.name}</li>
            </ol>
          </nav>
          <p className="eyebrow mb-6 text-lime">{page.eyebrow}</p>
          <h1
            className="font-display font-normal leading-[1.08] tracking-[-0.035em]"
            style={{ fontSize: "clamp(2.6rem, 6vw, 5.4rem)" }}
          >
            <span className="text-fade">{page.h1}</span>
          </h1>
          <p className="mx-auto mt-7 max-w-[680px] text-[1.08rem] font-light leading-[1.75] text-cream/75">
            {page.answer}
          </p>
          <Link
            href={whatsappUrl(page.whatsappMessage)}
            target="_blank"
            rel="noopener noreferrer"
            className="btn-lime mt-9"
          >
            Book a Free Consultation ↗
          </Link>
        </div>
      </section>

      {/* Included */}
      <section className="bg-ink px-6 pb-24 md:px-10">
        <div className="mx-auto max-w-[1240px]">
          <h2 className="section-title mx-auto mb-12 max-w-[860px] text-center">{page.includedHeading}</h2>
          <div className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3">
            {page.included.map((item) => (
              <div key={item.title} className="card-dark p-7">
                <Star className="h-3.5 w-3.5 text-lime" />
                <h3 className="mt-4 text-[1.2rem] font-normal tracking-[-0.02em]">{item.title}</h3>
                <p className="mt-2 text-[0.9rem] font-light leading-[1.7] text-cream/70">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Audience + proof */}
      <section className="bg-cream px-6 py-24 text-ink md:px-10">
        <div className="mx-auto grid max-w-[1240px] grid-cols-1 items-start gap-16 lg:grid-cols-2">
          <div>
            <h2 className="section-title mb-8">{page.audienceHeading}</h2>
            <ul className="flex list-none flex-col gap-3">
              {page.audience.map((a) => (
                <li key={a} className="flex gap-3 font-light leading-[1.7] text-ink-muted">
                  <Star className="mt-[0.4em] h-3 w-3 flex-shrink-0 text-orange" />
                  {a}
                </li>
              ))}
            </ul>
          </div>

          {(page.work || quote) && (
            <div>
              {page.work && (
                <>
                  <h2 className="section-title mb-6">Related work</h2>
                  <ul className="mb-8 flex list-none flex-col">
                    {page.work.map((w) => (
                      <li key={w.name} className="border-b border-ink/10 py-4 last:border-b-0">
                        <h3 className="mb-1 text-[1.1rem] font-medium tracking-[-0.02em]">{w.name}</h3>
                        <p className="text-[0.9rem] font-light leading-[1.7] text-ink-muted">{w.desc}</p>
                      </li>
                    ))}
                  </ul>
                </>
              )}
              {quote && (
                <blockquote className="glow-top rounded-2xl p-8 text-cream">
                  <p className="font-script text-[1.5rem] font-medium leading-[1.3]">{quote.text}</p>
                  <footer className="mt-5 text-[0.88rem] text-cream/70">
                    <strong className="font-medium text-cream">{quote.name}</strong>, {quote.role}
                  </footer>
                </blockquote>
              )}
            </div>
          )}
        </div>
      </section>

      {/* Location-specific guidance */}
      {page.sections && (
        <section className="bg-cream px-6 pb-24 text-ink md:px-10">
          <div className="mx-auto flex max-w-[1240px] flex-col gap-14 border-t border-ink/10 pt-20">
            {page.sections.map((s) => (
              <div key={s.heading} className="max-w-[860px]">
                <h2 className="section-title mb-6">{s.heading}</h2>
                {s.paragraphs.map((p) => (
                  <p key={p} className="mb-4 font-light leading-[1.85] text-ink-muted last:mb-0">
                    {p}
                  </p>
                ))}
              </div>
            ))}
          </div>
        </section>
      )}

      {/* FAQs: always open so the answers are visible and easy to quote */}
      <section className="glow-soft px-6 py-24 md:px-10">
        <div className="mx-auto max-w-[1240px]">
          <h2 className="section-title mb-12">Frequently asked questions</h2>
          <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
            {page.faqs.map((f) => (
              <div key={f.question} className="card-dark p-7">
                <h3 className="mb-2.5 text-[1.15rem] font-normal tracking-[-0.02em]">{f.question}</h3>
                <p className="text-[0.92rem] font-light leading-[1.8] text-cream/75">{f.answer}</p>
              </div>
            ))}
          </div>
          <p className="mt-10 text-[0.82rem] text-cream/65">
            Last updated <time dateTime={CONTENT_UPDATED}>{updated}</time>
          </p>
        </div>
      </section>

      {/* Related pages + CTA */}
      <section className="bg-ink px-6 pb-24 md:px-10">
        <div className="mx-auto max-w-[1240px] rounded-3xl bg-[#c73400] p-9 md:p-14">
          <h2 className="section-title mb-8 text-white">Tell us what you want to build.</h2>
          <Link
            href={whatsappUrl(page.whatsappMessage)}
            target="_blank"
            rel="noopener noreferrer"
            className="btn-white mb-10"
          >
            Start on WhatsApp ↗
          </Link>
          <p className="mb-3 text-[0.92rem] font-medium text-white">Related pages:</p>
          <ul className="flex list-none flex-wrap gap-x-6 gap-y-2">
            {related.map((r) => (
              <li key={r.href}>
                <Link href={r.href} className="text-[0.92rem] text-white underline underline-offset-4 hover:opacity-80">
                  {r.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </section>
    </main>
  );
}
