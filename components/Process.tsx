const steps = [
  {
    num: "01",
    name: "Discovery",
    desc: "We learn about your business, goals, audience, and competitors to create a website that supports your growth.",
  },
  {
    num: "02",
    name: "Strategy & Design",
    desc: "We plan your website structure, content, and user experience before designing responsive, accessible layouts.",
  },
  {
    num: "03",
    name: "Development",
    desc: "Your website is built with modern technologies, clean code, fast performance, technical SEO, and accessibility best practices.",
  },
  {
    num: "04",
    name: "Review & Testing",
    desc: "Every page is tested across devices, browsers, and screen sizes to ensure speed, usability, and a reliable experience.",
  },
  {
    num: "05",
    name: "Launch",
    desc: "We deploy your website, connect your domain, set up analytics, and make sure everything is ready for your customers.",
  },
  {
    num: "06",
    name: "Support & Growth",
    desc: "After launch, we provide updates, maintenance, performance improvements, and ongoing support as your business grows.",
  },
];

export default function Process() {
  return (
    <section id="process" className="py-24 bg-forest relative overflow-hidden">
      {/* Dot grid */}
      <div className="absolute inset-0 bg-dot-grid" />

      <div className="max-w-[1240px] mx-auto px-10 relative z-10">
        {/* Header */}
        <div className="text-center mb-[88px]">
          <span className="block font-mono text-[0.7rem] tracking-[0.15em] uppercase text-lime mb-5 reveal">
            Our Process
          </span>
          <h2
            className="font-display font-extrabold tracking-tighter2 text-cream leading-[0.95] reveal delay-1"
            style={{ fontSize: "clamp(2.4rem, 5vw, 4.5rem)" }}
          >
            From idea to launch —
            <br />
            <em className="not-italic font-light text-cream/38">and beyond</em>
          </h2>
        </div>

        {/* Steps */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4 md:gap-0 relative">
          {/* Connector line */}
          <div className="hidden lg:block absolute top-7 left-[5%] right-[5%] h-px bg-lime/20 z-0" />

          {steps.map((s, i) => (
            <div
              key={i}
              className={`flex flex-col items-center text-center px-4 relative z-10 reveal delay-${i + 1} group`}
            >
              <div className="w-14 h-14 rounded-full border border-lime/25 bg-forest flex items-center justify-center font-mono text-[0.72rem] tracking-[0.08em] text-lime/60 mb-6 transition-all duration-300 group-hover:bg-lime group-hover:text-forest group-hover:border-lime group-hover:shadow-[0_0_28px_rgba(163,255,0,0.3)]">
                {s.num}
              </div>
              <h3 className="font-display text-[0.95rem] font-bold text-cream tracking-[-0.02em] mb-2.5">
                {s.name}
              </h3>
              <p className="text-[0.78rem] text-cream/40 font-light leading-[1.65]">
                {s.desc}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
