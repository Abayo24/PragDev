interface Testimonial {
  text: string;
  name: string;
  role: string;
  initials: string;
  avatarClass: string;
  featured?: boolean;
}

const testimonials: Testimonial[] = [
  {
    text: "We needed a website that communicated trust and professionalism for women's reproductive health. The PragDev team delivered a beautiful, mobile-responsive site that perfectly captured our brand's premium feel and improved our user experience immensely.",
    name: "Kieva",
    role: "Co-Founder, Fertitude",
    initials: "K",
    avatarClass: "bg-gradient-to-br from-lime to-[#65D000] text-ink",
  },
  {
    text: "Working with PragDev Softwares was a seamless experience. They completely refined our visual brand and created a structured, user-friendly website that has significantly strengthened our online presence in the sports industry.",
    name: "Sophy",
    role: "Co-Founder, Nia Dada",
    initials: "S",
    avatarClass: "bg-gradient-to-br from-gold to-[#E8CC7A] text-ink",
  },
  {
    text: "Our digital wallet needed a serious UX overhaul. PragDev redesigned the ME4U app with a mobile-first approach, making the user journey incredibly intuitive. The checkout flow is now much faster and our SME users love it.",
    name: "Kenny",
    role: "Product Manager, ME4U",
    initials: "Ke",
    avatarClass: "bg-gradient-to-br from-forest to-[#1a5c35]",
  },
  {
    featured: true,
    text: "PragDev Softwares designed a high-converting website for our telehealth company that clearly explains our complex features. Their clean layout and strategic calls-to-action have directly increased our lead generation.",
    name: "Ivy",
    role: "Founder, Ivorris Care",
    initials: "I",
    avatarClass: "bg-gradient-to-br from-[#6366f1] to-[#818cf8]",
  },
  {
    text: "We wanted a welcoming digital space for our congregation, and PragDev delivered exactly that. The new church website is accessible, easy to navigate for service schedules, and has really helped boost our community engagement.",
    name: "Dr. Odeny",
    role: "St. Stephen Church",
    initials: "O",
    avatarClass: "bg-gradient-to-br from-[#475569] to-[#94a3b8]",
  },
];

function SmallCard({ t }: { t: Testimonial }) {
  return (
    <div className="bg-cream-2 rounded-xl p-8 border border-ink/10 hover:bg-cream hover:border-orange transition-all duration-300">
      <div className="text-[#FFC107] tracking-[3px] text-[0.9rem] mb-5">★★★★★</div>
      <p className="font-display text-[0.97rem] italic font-light text-ink-muted leading-[1.7] mb-6 before:content-['“'] before:text-orange before:text-[1.2em]">
        {t.text}
      </p>
      <div className="flex items-center gap-4">
        <div className={`w-12 h-12 rounded-full flex items-center justify-center font-display font-bold text-[1rem] text-white flex-shrink-0 ${t.avatarClass}`}>
          {t.initials}
        </div>
        <div>
          <p className="font-display text-[0.92rem] font-bold text-ink">{t.name}</p>
          <p className="text-[0.78rem] text-ink-subtle">{t.role}</p>
        </div>
      </div>
    </div>
  );
}

export default function Testimonials() {
  const featured = testimonials[0];
  const sidePair = testimonials.slice(1, 3);
  const bottomRow = testimonials.slice(3);

  return (
    <section id="testimonials" className="py-24 bg-cream overflow-hidden">
      <div className="max-w-[1240px] mx-auto px-10">
        <span className="block font-mono text-[0.7rem] tracking-[0.15em] uppercase text-orange mb-5 reveal">
          Client Voices
        </span>
        <h2
          className="font-display font-extrabold tracking-tighter2 leading-[0.95] mb-[72px] reveal delay-1"
          style={{ fontSize: "clamp(2.4rem, 5vw, 4.5rem)" }}
        >
          Trusted by
          <br />
          <em className="not-italic font-light text-ink-muted">
            builders & founders
          </em>
        </h2>

        {/* Featured + side */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-3.5 items-start">
          {/* Big quote */}
          <div className="bg-ink rounded-xl p-14 relative overflow-hidden lg:row-span-2 reveal delay-1">
            <span
              className="absolute top-8 right-10 font-display font-black leading-none pointer-events-none select-none text-orange/15"
              style={{ fontSize: "8rem" }}
              aria-hidden
            >
              "
            </span>
            <div className="text-[#FFC107] tracking-[3px] text-[0.9rem] mb-6">{`★★★★★`}</div>
            <p
              className="font-display italic font-light text-cream/60 leading-[1.65] mb-10 relative z-10"
              style={{ fontSize: "clamp(1.1rem, 2vw, 1.55rem)" }}
            >
              {featured.text}
            </p>
            <div className="flex items-center gap-4 relative z-10">
              <div className={`w-12 h-12 rounded-full flex items-center justify-center font-display font-bold text-[1rem] text-white flex-shrink-0 ${featured.avatarClass}`}>
                {featured.initials}
              </div>
              <div>
                <p className="font-display text-[0.92rem] font-bold text-cream">{featured.name}</p>
                <p className="text-[0.78rem] text-cream/40">{featured.role}</p>
              </div>
            </div>
          </div>

          {/* Side pair */}
          <div className="flex flex-col gap-3.5 reveal delay-2">
            {sidePair.map((t, i) => (
              <SmallCard key={i} t={t} />
            ))}
          </div>
        </div>

        {/* Bottom row of 3 */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-3.5">
          {bottomRow.map((t, i) => (
            <div key={i} className={`reveal delay-${i + 1}`}>
              <SmallCard t={t} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
