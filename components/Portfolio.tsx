import Image from "next/image";
import Link from "next/link";
import type { IconType } from "react-icons";
import { FaCode, FaHeartbeat } from "react-icons/fa";
import { Script } from "@/components/Art";
import { whatsappUrl } from "@/lib/site";

const icons: Record<string, IconType> = {
  Fertitude: FaHeartbeat,
};

interface Project {
  tag: string;
  title: string;
  desc: string;
  image?: { src: string; alt: string };
  url?: string;
  pills: { label: string; variant: "lime" | "orange" }[];
}

const projects: Project[] = [
  {
    tag: "Healthcare • Landing Page",
    title: "Ivorris Care",
    desc: "A conversion-focused landing page built to explain services clearly, improve user experience, and encourage more enquiries through WhatsApp.",
    image: {
      src: "/work/ivorris-care.webp",
      alt: "Ivorris Care website homepage with the headline Not sure what care you need? Talk to a nurse.",
    },
    pills: [
      { label: "Lead Generation", variant: "lime" },
      { label: "Fast Loading", variant: "orange" },
    ],
  },
  {
    tag: "Church • Community Website",
    title: "St. Stephen's Cathedral",
    desc: "An accessible website that helps visitors find service times, events, ministries, and important announcements across all devices.",
    image: {
      src: "/work/st-stephens-cathedral.webp",
      alt: "ACK St. Stephen's Cathedral Kisumu website homepage with the headline A Wholesome Christian Ministry",
    },
    pills: [
      { label: "Accessible", variant: "lime" },
      { label: "Community Focused", variant: "orange" },
    ],
  },
  {
    tag: "Finance • Web App",
    title: "KaziDocs",
    desc: "A financial workspace for creating invoices, quotations and receipts, managing clients, and tracking revenue from one dashboard.",
    image: {
      src: "/work/kazidocs.webp",
      alt: "KaziDocs dashboard showing invoiced, collected and pending totals in Kenya shillings",
    },
    pills: [
      { label: "Web App", variant: "lime" },
      { label: "Invoicing", variant: "orange" },
    ],
  },
  {
    tag: "Home Services • Business Website",
    title: "Fresh&Fold",
    desc: "A website for a Nairobi upholstery cleaning service, where customers see services and pricing and book a clean on WhatsApp.",
    image: {
      src: "/work/fresh-and-fold.webp",
      alt: "Fresh&Fold website homepage with the headline Your Sofa, Spotless Again and a Book a Clean button",
    },
    pills: [
      { label: "WhatsApp Booking", variant: "lime" },
      { label: "Local Business", variant: "orange" },
    ],
  },
  {
    tag: "Politics • Campaign Website",
    title: "Hon. Daniel Mwangi",
    desc: "A campaign website with a manifesto, events, county pages, volunteer sign-ups and donations.",
    image: {
      src: "/work/daniel-mwangi.webp",
      alt: "Hon. Daniel Mwangi campaign website homepage with the headline Leadership Kenya Can Trust",
    },
    pills: [
      { label: "Donations", variant: "lime" },
      { label: "Volunteer Sign-ups", variant: "orange" },
    ],
  },
  {
    tag: "Food • Ordering Website",
    title: "Kibandaski",
    desc: "A Kenyan food website where customers browse the menu and order on WhatsApp, with no sign-up needed.",
    image: {
      src: "/work/kibandaski.webp",
      alt: "Kibandaski website homepage showing a plate of mishkaki and chips with an Order on WhatsApp button",
    },
    url: "https://kibandaski-k72g.vercel.app",
    pills: [
      { label: "WhatsApp Ordering", variant: "lime" },
      { label: "No Sign-up", variant: "orange" },
    ],
  },
  {
    tag: "E-commerce • Online Shop",
    title: "Guru Spices",
    desc: "An online shop for a Nairobi spice brand, selling twelve handpicked spices in 50g and 100g, plus hampers.",
    image: {
      src: "/work/guru-spices.webp",
      alt: "Guru Spices online shop homepage with an Explore Spices button on a dark background",
    },
    url: "https://guru-spice.vercel.app",
    pills: [
      { label: "Online Shop", variant: "lime" },
      { label: "Gift Hampers", variant: "orange" },
    ],
  },
  {
    tag: "Portfolio Website",
    title: "Developer Portfolio",
    desc: "A modern portfolio showcasing frontend development, responsive layouts, accessibility best practices, and high-performance web design.",
    image: {
      src: "/work/developer-portfolio.webp",
      alt: "Abayo Akinyi developer portfolio homepage on a dark blue background",
    },
    pills: [
      { label: "Next.js", variant: "orange" },
      { label: "Performance", variant: "lime" },
    ],
  },
  {
    tag: "Healthcare • Business Website",
    title: "Fertitude",
    desc: "A modern healthcare website designed to build trust, improve accessibility, and make it easier for patients to learn about services and get in touch.",
    pills: [
      { label: "SEO Ready", variant: "lime" },
      { label: "Accessible", variant: "orange" },
    ],
  },
];

export default function Portfolio() {
  return (
    <section id="portfolio" className="bg-cream px-6 py-28 text-ink md:px-10">
      <div className="mx-auto max-w-[1240px]">
        <div className="reveal mb-14 flex flex-wrap items-end justify-between gap-6">
          <div>
            <span className="eyebrow mb-4 text-[#b52f06]">Recent Projects</span>
            <h2 className="section-title">
              Website &amp; app projects{" "}
              <br className="hidden md:block" />
              <span className="text-[1.12em] leading-none">
                <Script tone="orange">that help businesses grow.</Script>
              </span>
            </h2>
          </div>
          <p className="max-w-[320px] text-[0.92rem] font-light leading-[1.7] text-ink-muted">
            Every project is designed to load fast, rank better in search
            engines, provide an accessible experience, and turn visitors into
            customers.
          </p>
        </div>

        <div className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3">
          {projects.map((p, i) => {
            const Icon = icons[p.title] ?? FaCode;
            return (
              <div
                key={p.title}
                className={`glow-soft reveal delay-${(i % 3) + 1} flex flex-col overflow-hidden rounded-2xl text-cream transition-transform duration-300 hover:-translate-y-1`}
              >
                {p.image && (
                  <Image
                    src={p.image.src}
                    alt={p.image.alt}
                    width={1280}
                    height={667}
                    sizes="(max-width: 768px) 90vw, (max-width: 1024px) 45vw, 400px"
                    className="block h-auto w-full border-b border-white/10"
                  />
                )}
                <div className="flex flex-1 flex-col p-7">
                  {!p.image && (
                    <span className="mb-6 flex h-10 w-10 items-center justify-center rounded-lg border border-lime/30 bg-forest text-lime">
                      <Icon aria-hidden />
                    </span>
                  )}
                  <p className="text-[0.78rem] text-cream/65">{p.tag}</p>
                  <h3 className="mt-1.5 text-[1.45rem] font-normal tracking-[-0.025em]">{p.title}</h3>
                  <p className="mt-2.5 flex-1 text-[0.88rem] font-light leading-[1.65] text-cream/70">{p.desc}</p>
                  <div className="mt-5 flex flex-wrap gap-1.5">
                    {p.pills.map((pill) => (
                      <span
                        key={pill.label}
                        className={`rounded-full border px-3 py-1 text-[0.72rem] ${
                          pill.variant === "lime"
                            ? "border-lime/25 bg-lime/10 text-lime-2"
                            : "border-orange/30 bg-orange/10 text-[#ff8a65]"
                        }`}
                      >
                        {pill.label}
                      </span>
                    ))}
                  </div>
                  {p.url && (
                    <a
                      href={p.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="mt-5 text-[0.88rem] text-cream underline underline-offset-4 hover:text-lime"
                    >
                      Visit {p.title} ↗
                    </a>
                  )}
                </div>
              </div>
            );
          })}
        </div>

        <div className="reveal mt-12 flex flex-wrap items-center justify-between gap-5 rounded-2xl border border-ink/10 px-8 py-7">
          <p className="text-[1.3rem] font-normal tracking-[-0.02em]">
            Your business could be our next success story.
          </p>
          <Link
            href={whatsappUrl("Hi PragDev! I found your website and I'd like to discuss a project for my business.")}
            target="_blank"
            rel="noopener noreferrer"
            className="btn bg-ink text-cream hover:bg-forest"
          >
            Book a Free Consultation ↗
          </Link>
        </div>
      </div>
    </section>
  );
}
