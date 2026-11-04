import Link from 'next/link';

const features = [
  {
    num: "01",
    title: "Fast Websites That Perform",
    desc: "Every website is optimized for speed, mobile devices, and Core Web Vitals to improve user experience and search engine rankings.",
  },
  {
    num: "02",
    title: "SEO & Accessibility Built In",
    desc: "We build with semantic HTML, accessibility best practices, and technical SEO from day one so your website reaches more people.",
  },
  {
    num: "03",
    title: "Designed Around Your Business",
    desc: "Your website is built around your goals, whether that's generating leads, selling products, booking appointments, or building credibility.",
  },
  {
    num: "04",
    title: "Support After Launch",
    desc: "We continue to help after your website goes live with updates, maintenance, performance improvements, and technical support whenever you need it.",
  },
];

const ctaLinks = [
	{ href: 'https://wa.me/254769622996?text=Hello!%20I%20saw%20your%20website%20and%20I%27d%20like%20to%20start%20a%20new%20project%20with%20you.', label: 'Start a conversation' },
	{ href: '#portfolio', label: 'Browse our portfolio' },
	{ href: '#process', label: 'See how we work' },
];

export default function WhyUs() {
  return (
    <section id="why" className="bg-ink px-6 py-28 md:px-10">
      <div className="mx-auto grid max-w-[1240px] grid-cols-1 items-start gap-16 lg:grid-cols-2">
        <div className="reveal">
          <span className="eyebrow mb-4 text-lime">Why PragDev</span>
          <h2 className="section-title">
            The standard we{" "}
            <span className="text-cream/70">hold ourselves to</span>
          </h2>
          <p className="mt-6 max-w-[480px] font-light leading-[1.8] text-cream/70">
            We measure our success by your outcomes. Quality code, on-time
            delivery, and reliable partnership, every single time.
          </p>
          <div className="mt-9 flex flex-col gap-2.5">
            {ctaLinks.map((l) => (
              <Link
                key={l.href}
                href={l.href}
                className="card-dark group flex items-center justify-between gap-5 px-6 py-4 transition-colors duration-200 hover:border-lime/40"
              >
                <span className="text-[0.95rem] font-medium group-hover:text-lime">{l.label}</span>
                <span className="text-lime" aria-hidden>
                  ↗
                </span>
              </Link>
            ))}
          </div>
        </div>

        <div className="reveal delay-2 grid grid-cols-1 gap-4 sm:grid-cols-2">
          {features.map((f) => (
            <div key={f.num} className="card-dark p-7">
              <span className="text-[0.8rem] text-lime">{f.num}</span>
              <h3 className="mt-4 text-[1.2rem] font-normal leading-[1.25] tracking-[-0.02em]">{f.title}</h3>
              <p className="mt-2.5 text-[0.88rem] font-light leading-[1.65] text-cream/70">{f.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
