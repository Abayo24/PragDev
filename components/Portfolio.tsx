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
    tag: "Fintech · Mobile · Kenya",
    title: "PesaMate — Digital Wallet & P2P Payments",
    desc: "Mobile-first digital wallet for East African SMEs. React Native + Node.js microservices. Thousands of daily transactions, 99.9% uptime, M-Pesa integration built in.",
    pills: [
      { label: "3× user growth in 6 months", variant: "lime" },
      { label: "99.9% uptime", variant: "lime" },
      { label: "40% faster checkout", variant: "orange" },
    ],
    emoji: "💳",
    accentColor: "#E8400C",
    colSpan: "lg:col-span-7",
  },
  {
    tag: "HealthTech · Web · Nairobi",
    title: "MediTrack — Hospital Management System",
    desc: "End-to-end hospital management covering patients, appointments, billing, and pharmacy. Replaced paper systems and cut admin overhead by 50%.",
    pills: [
      { label: "2,000+ patients managed", variant: "lime" },
      { label: "50% less admin work", variant: "orange" },
    ],
    emoji: "🏥",
    accentColor: "#A3FF00",
    colSpan: "lg:col-span-5",
  },
  {
    tag: "E-Commerce · Kenya",
    title: "ShopLocal Marketplace",
    desc: "Multi-vendor marketplace for local artisans. Custom CMS, real-time inventory, M-Pesa. 300+ vendors onboarded, 220% revenue growth post-launch.",
    pills: [{ label: "↑ 220% revenue", variant: "orange" }],
    emoji: "🛒",
    accentColor: "#D4A843",
    colSpan: "lg:col-span-4",
  },
  {
    tag: "EdTech · SaaS",
    title: "LearnHub LMS Platform",
    desc: "Scalable LMS with live classes, assessments, and instructor dashboards. Next.js + AWS. 10,000+ learners, 4.8★ App Store rating.",
    pills: [{ label: "10K+ learners", variant: "lime" }],
    emoji: "📚",
    accentColor: "#E8400C",
    colSpan: "lg:col-span-4",
  },
  {
    tag: "Logistics · IoT",
    title: "FleetSync GPS Management",
    desc: "Real-time tracking for 120 vehicles, driver apps, automated reports, and route optimisation — cutting fuel costs by 30% in three months.",
    pills: [{ label: "30% fuel savings", variant: "orange" }],
    emoji: "🚚",
    accentColor: "#A3FF00",
    colSpan: "lg:col-span-4",
  },
  {
    tag: "SaaS · Analytics",
    title: "InsightBoard — Business Analytics SaaS",
    desc: "White-label analytics dashboard connecting to POS systems with AI-powered insights and forecasting. 25+ retail clients across East Africa.",
    pills: [
      { label: "25+ clients", variant: "lime" },
      { label: "AI forecasting", variant: "orange" },
    ],
    emoji: "📊",
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
              Selected Work
            </span>
            <h2
              className="font-display font-extrabold tracking-tighter2 leading-[0.95]"
              style={{ fontSize: "clamp(2.4rem, 5vw, 4.5rem)" }}
            >
              Products built.
              <br />
              <em className="not-italic font-light">Problems solved.</em>
            </h2>
          </div>
          <p className="max-w-[280px] text-[0.88rem] text-ink-muted font-light leading-[1.7]">
            Real projects, real impact — from fintech to healthtech, logistics to
            e-commerce.
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
                  50+
                </p>
                <p className="font-display text-[1.05rem] font-bold text-cream/65 mb-5">
                  Projects delivered across
                  <br />
                  12+ industries
                </p>
                <Link
                  href='https://wa.me/254769622996?text=Hello!%20I%20saw%20your%20website%20and%20I%27d%20like%20to%20start%20a%20new%20project%20with%20you.'
                  className="inline-flex items-center gap-2.5 px-7 py-[15px] rounded-[9px] bg-orange text-white font-semibold text-[0.92rem] transition-all duration-200 hover:bg-[#c73400] hover:-translate-y-[3px] hover:shadow-[0_12px_32px_rgba(232,64,12,0.35)]"
                >
                  Start Your Project ↗
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
