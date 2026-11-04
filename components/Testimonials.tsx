interface Testimonial {
  text: string;
  name: string;
  role: string;
  initials: string;
  avatarClass: string;
  featured?: boolean;
}

export const testimonials: Testimonial[] = [
  {
    text: "PragDev built a professional website that reflects our brand and makes it easier for patients to learn about our services. The website is fast, mobile friendly, and has given us a stronger online presence.",
    name: "Kieva",
    role: "Co-Founder, Fertitude",
    initials: "K",
    avatarClass: "bg-gradient-to-br from-lime to-[#65D000] text-ink",
  },
  {
    text: "Working with PragDev was smooth from start to finish. They redesigned our website into a modern, responsive platform that represents our organization well and makes information easier to find.",
    name: "Sophy",
    role: "Co-Founder, Nia Dada",
    initials: "S",
    avatarClass: "bg-gradient-to-br from-gold to-[#E8CC7A] text-ink",
  },
  {
    text: "PragDev redesigned our application with a cleaner interface and a better user experience. The result is a simpler product that's easier to navigate across mobile devices.",
    name: "Kenny",
    role: "Product Manager, ME4U",
    initials: "Ke",
    avatarClass: "bg-gradient-to-br from-forest to-[#1a5c35]",
  },
  {
    featured: true,
    text: "PragDev created a modern website that communicates our services clearly and makes it easy for visitors to contact us. Their attention to design, performance, and user experience exceeded our expectations.",
    name: "Ivy",
    role: "Founder, Ivorris Care",
    initials: "I",
    avatarClass: "bg-gradient-to-br from-[#6366f1] to-[#818cf8]",
  },
  {
    text: "Our new website is clean, accessible, and simple to navigate. Members and visitors can quickly find service times, events, and announcements from any device.",
    name: "Dr. Odeny",
    role: "St. Stephen Church",
    initials: "O",
    avatarClass: "bg-gradient-to-br from-[#475569] to-[#94a3b8]",
  },
];

function Person({ t, dark }: { t: Testimonial; dark?: boolean }) {
  return (
    <div className="mt-6 flex items-center gap-3.5">
      <div className={`flex h-11 w-11 flex-shrink-0 items-center justify-center rounded-full text-[0.95rem] font-medium text-white ${t.avatarClass}`}>
        {t.initials}
      </div>
      <div>
        <p className={`text-[0.95rem] font-medium ${dark ? "text-cream" : "text-ink"}`}>{t.name}</p>
        <p className={`text-[0.8rem] ${dark ? "text-cream/65" : "text-ink-muted"}`}>{t.role}</p>
      </div>
    </div>
  );
}

function Stars() {
  return (
    <div className="text-[0.85rem] tracking-[3px] text-gold" role="img" aria-label="Five out of five stars">
      ★★★★★
    </div>
  );
}

export default function Testimonials() {
  const [featured, ...rest] = testimonials;

  return (
    <section id="testimonials" className="bg-cream px-6 pb-28 text-ink md:px-10">
      <div className="mx-auto max-w-[1240px] border-t border-ink/10 pt-24">
        <span className="eyebrow reveal mb-4 text-[#b52f06]">Client Testimonials</span>
        <h2 className="section-title reveal delay-1 mb-14">
          Trusted by <span className="text-ink-muted">growing businesses</span>
        </h2>

        <div className="grid grid-cols-1 gap-4 lg:grid-cols-3">
          <div className="glow-top reveal delay-1 flex flex-col justify-between rounded-2xl p-9 text-cream lg:row-span-2">
            <div>
              <Stars />
              <p className="mt-6 font-script text-[1.9rem] font-medium leading-[1.25]">{featured.text}</p>
            </div>
            <Person t={featured} dark />
          </div>
          {rest.map((t, i) => (
            <div key={t.name} className={`reveal delay-${(i % 3) + 1} rounded-2xl border border-ink/10 bg-cream-2 p-7`}>
              <Stars />
              <p className="mt-4 text-[0.95rem] font-light leading-[1.7] text-ink-muted">{t.text}</p>
              <Person t={t} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
