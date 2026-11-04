import Image from "next/image";
import Link from "next/link";
import type { IconType } from "react-icons";
import { FaChurch, FaCode, FaHeartbeat, FaHospital, FaWallet } from "react-icons/fa";
import { Script } from "@/components/Art";
import { whatsappUrl } from "@/lib/site";

const icons: Record<string, IconType> = {
  Fertitude: FaHeartbeat,
  "Ivorris Care": FaHospital,
  ME4U: FaWallet,
  "Developer Portfolio": FaCode,
  "St. Stephen Church": FaChurch,
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
    tag: "Sports · Web Presence",
    title: "Nia Dada",
    desc: "Visually appealing and user-friendly website designed to strengthen the brand's online presence. Includes visual brand refinement, optimized content flow, and a strong CTA strategy.",
    image: {
      src: "/work/nia-dada.webp",
      alt: "Nia Dada website homepage with the headline Play with purpose. Empower her.",
    },
    url: "https://niadada.vercel.app",
    pills: [
      { label: "Brand Refinement", variant: "lime" },
      { label: "Conversion Focused", variant: "orange" },
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
    tag: "Healthcare • Business Website",
    title: "Fertitude",
    desc: "A modern healthcare website designed to build trust, improve accessibility, and make it easier for patients to learn about services and get in touch.",
    pills: [
      { label: "SEO Ready", variant: "lime" },
      { label: "Accessible", variant: "orange" },
    ],
  },
  {
    tag: "Healthcare • Landing Page",
    title: "Ivorris Care",
    desc: "A conversion-focused landing page built to explain services clearly, improve user experience, and encourage more enquiries through WhatsApp.",
    pills: [
      { label: "Lead Generation", variant: "lime" },
      { label: "Fast Loading", variant: "orange" },
    ],
  },
  {
    tag: "Fintech • UI/UX Design",
    title: "ME4U",
    desc: "A modern mobile wallet interface designed to simplify everyday financial tasks with a clean layout and intuitive navigation.",
    pills: [
      { label: "Mobile First", variant: "lime" },
      { label: "UI/UX Design", variant: "orange" },
    ],
  },
  {
    tag: "Portfolio Website",
    title: "Developer Portfolio",
    desc: "A modern portfolio showcasing frontend development, responsive layouts, accessibility best practices, and high-performance web design.",
    pills: [
      { label: "Next.js", variant: "orange" },
      { label: "Performance", variant: "lime" },
    ],
  },
  {
    tag: "Church • Community Website",
    title: "St. Stephen Church",
    desc: "An accessible website that helps visitors find service times, events, ministries, and important announcements across all devices.",
    pills: [
      { label: "Accessible", variant: "lime" },
      { label: "Community Focused", variant: "orange" },
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

          <div className="reveal delay-3 flex flex-col justify-between gap-6 rounded-2xl border border-ink/10 p-7">
            <p className="text-[1.3rem] font-normal tracking-[-0.02em]">
              Your business could be our next success story.
            </p>
            <Link
              href={whatsappUrl("Hi PragDev! I found your website and I'd like to discuss a project for my business.")}
              target="_blank"
              rel="noopener noreferrer"
              className="btn self-start bg-ink text-cream hover:bg-forest"
            >
              Book a Free Consultation ↗
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
