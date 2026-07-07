import Link from "next/link";

interface Project {
  tag: string;
  title: string;
  desc: string;
  pills: { label: string; variant: "lime" | "orange" }[];
  emoji: string;
  accentColor: string;
  colSpan: string;
}

const projects: Project[] = [
  {
    tag: "Healthcare • Business Website",
    title: "Fertitude",
    desc: "A modern healthcare website designed to build trust, improve accessibility, and make it easier for patients to learn about services and get in touch.",
    pills: [
      { label: "SEO Ready", variant: "lime" },
      { label: "Accessible", variant: "orange" },
    ],
    emoji: "🌸",
    accentColor: "#E8400C",
    colSpan: "lg:col-span-7",
  },
  {
    tag: "Healthcare • Landing Page",
    title: "Ivorris Care",
    desc: "A conversion-focused landing page built to explain services clearly, improve user experience, and encourage more enquiries through WhatsApp.",
    pills: [
      { label: "Lead Generation", variant: "lime" },
      { label: "Fast Loading", variant: "orange" },
    ],
    emoji: "🏥",
    accentColor: "#E8400C",
    colSpan: "lg:col-span-4",
  },
  {
    tag: "Sports · Web Presence",
    title: "Nia Dada",
    desc: "Visually appealing and user-friendly website designed to strengthen the brand's online presence. Includes visual brand refinement, optimized content flow, and a strong CTA strategy.",
    pills: [
      { label: "Brand Refinement", variant: "lime" },
      { label: "Conversion Focused", variant: "orange" },
    ],
    emoji: "🏅",
    accentColor: "#A3FF00",
    colSpan: "lg:col-span-5",
  },
  {
    tag: "Fintech • UI/UX Design",
    title: "ME4U",
    desc: "A modern mobile wallet interface designed to simplify everyday financial tasks with a clean layout and intuitive navigation.",
    pills: [
      { label: "Mobile First", variant: "lime" },
      { label: "UI/UX Design", variant: "orange" },
    ],
    emoji: "💳",
    accentColor: "#E8400C",
    colSpan: "lg:col-span-4",
  },
  {
    tag: "Portfolio Website",
    title: "Developer Portfolio",
    desc: "A modern portfolio showcasing frontend development, responsive layouts, accessibility best practices, and high-performance web design.",
    pills: [
      { label: "Next.js", variant: "orange" },
      { label: "Performance", variant: "lime" },
    ],
    emoji: "💻",
    accentColor: "#A3FF00",
    colSpan: "lg:col-span-4",
  },
  {
    tag: "Church • Community Website",
    title: "St. Stephen Church",
    desc: "An accessible website that helps visitors find service times, events, ministries, and important announcements across all devices.",
    pills: [
      { label: "Accessible", variant: "lime" },
      { label: "Community Focused", variant: "orange" },
    ],
    emoji: "⛪",
    accentColor: "rgba(242,237,227,0.25)",
    colSpan: "lg:col-span-6",
  },
];

export default function Portfolio() {
  return (
    <section id="portfolio" className="py-24 bg-cream">
      <div className="max-w-[1240px] mx-auto px-10">
        {/* Header */}
        <div className="flex items-end justify-between mb-14 flex-wrap gap-5 reveal">
          <div>
            <span className="block font-mono text-[0.7rem] tracking-[0.15em] uppercase text-orange mb-4">
              Recent Projects
            </span>
            <h2
              className="font-display font-extrabold tracking-tighter2 leading-[0.95]"
              style={{ fontSize: "clamp(2.4rem, 5vw, 4.5rem)" }}
            >
              Websites that
              <br />
              <em className="not-italic font-light">help businesses grow.</em>
            </h2>
          </div>
          <p className="max-w-[280px] text-[0.88rem] text-ink-muted font-light leading-[1.7]">
            Every project is designed to load fast, rank better in search
            engines, provide an accessible experience, and turn visitors into
            customers.
          </p>
        </div>

        {/* Bento grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-3.5">
          {projects.map((p, i) => (
            <div
              key={i}
              className={`bento-card ${p.colSpan} rounded-xl overflow-hidden bg-ink-2 text-cream/40 transition-transform duration-300 relative reveal delay-${(i % 3) + 1}`}
              style={{ minHeight: 240 }}
            >
              {/* Accent bar */}
              <div
                className="absolute top-0 left-0 right-0 h-[3px]"
                style={{ background: p.accentColor }}
              />
              {/* Emoji bg */}
              <div className="absolute inset-0 flex items-center justify-center text-[6rem] opacity-[0.08] select-none pointer-events-none">
                {p.emoji}
              </div>
              <div className="relative z-10 p-8 h-full flex flex-col justify-end">
                <p className="font-mono text-[0.65rem] tracking-[0.12em] uppercase text-cream/35 mb-3">
                  {p.tag}
                </p>
                <h3
                  className={`font-display font-bold text-cream tracking-tighter4 leading-[1.2] mb-2.5 ${i === 0 ? "text-[1.7rem]" : "text-[1.2rem]"}`}
                >
                  {p.title}
                </h3>
                <p className="text-[0.82rem] text-cream/44 font-light leading-[1.65] mb-4">
                  {p.desc}
                </p>
                <div className="flex flex-wrap gap-1.5">
                  {p.pills.map((pill) => (
                    <span
                      key={pill.label}
                      className={`font-mono text-[0.65rem] tracking-[0.06em] px-[11px] py-1 rounded-full border ${
                        pill.variant === "lime"
                          ? "bg-lime/10 border-lime/20 text-lime-2"
                          : "bg-orange/10 border-orange/25 text-[#ff7043]"
                      }`}
                    >
                      {pill.label}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}

          {/* CTA tile */}
          <div className="bento-card lg:col-span-6 rounded-xl overflow-hidden bg-ink-2 transition-transform duration-300 relative reveal delay-2">
            <div className="flex items-center justify-center h-full min-h-[240px] p-8 text-center">
              <div>
                <p className="font-display text-[4rem] font-black tracking-tightest text-orange leading-none mb-3">
                  Your
                </p>
                <p className="font-display text-[1.05rem] font-bold text-cream/65 mb-5">
                  business could be
                  <br />
                  our next success story.
                </p>
                <Link
                  href="https://wa.me/254769622996?text=Hello!%20I%20saw%20your%20website%20and%20I%27d%20like%20to%20start%20a%20new%20project%20with%20you."
                  className="inline-flex items-center gap-2.5 px-7 py-[15px] rounded-[9px] bg-orange text-white font-semibold text-[0.92rem] transition-all duration-200 hover:bg-[#c73400] hover:-translate-y-[3px] hover:shadow-[0_12px_32px_rgba(232,64,12,0.35)]"
                >
                  Book a Free Consultation ↗
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
