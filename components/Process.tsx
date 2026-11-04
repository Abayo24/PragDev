import { Script } from "@/components/Art";

const steps = [
  {
    num: "01",
    name: "Discovery",
    desc: "We learn about your business, goals, audience, and competitors to plan a website or app that supports your growth.",
  },
  {
    num: "02",
    name: "Strategy & Design",
    desc: "We plan your structure, content, and user experience before designing responsive, accessible layouts.",
  },
  {
    num: "03",
    name: "Development",
    desc: "Your website or app is built with modern technologies, clean code, fast performance, technical SEO, and accessibility best practices.",
  },
  {
    num: "04",
    name: "Review & Testing",
    desc: "Every screen is tested across devices, browsers, and screen sizes to ensure speed, usability, and a reliable experience.",
  },
  {
    num: "05",
    name: "Launch",
    desc: "We deploy your project, set up analytics, and make sure everything is ready for your customers.",
  },
  {
    num: "06",
    name: "Support & Growth",
    desc: "After launch, we provide updates, maintenance, performance improvements, and ongoing support as your business grows.",
  },
];

export default function Process() {
  return (
    <section id="process" className="bg-forest px-6 py-28 md:px-10">
      <div className="mx-auto max-w-[1240px]">
        <div className="mb-16 text-center">
          <span className="eyebrow reveal mb-4 text-lime">Our Website &amp; App Development Process</span>
          <h2 className="section-title reveal delay-1">
            From idea to launch{" "}
            <span className="text-[1.15em] leading-none">
              <Script>and beyond</Script>
            </span>
          </h2>
        </div>

        <ol className="grid list-none grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {steps.map((s, i) => (
            <li key={s.num} className={`card-dark reveal delay-${(i % 3) + 1} p-7`}>
              <span className="flex h-11 w-11 items-center justify-center rounded-full border border-lime/40 text-[0.85rem] text-lime">
                {s.num}
              </span>
              <h3 className="mt-5 text-[1.25rem] font-normal tracking-[-0.02em]">{s.name}</h3>
              <p className="mt-2 text-[0.9rem] font-light leading-[1.65] text-cream/75">{s.desc}</p>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}
