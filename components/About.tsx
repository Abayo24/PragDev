"use client";
import { useEffect, useRef } from "react";
import { BrowserShot, Script, Star } from "@/components/Art";

const stats = [
  {
    value: 100,
    suffix: "%",
    label: "Mobile Responsive"
  },
  {
    value: 90,
    suffix: "+",
    label: "Lighthouse Performance Target"
  },
  {
    value: 100,
    suffix: "%",
    label: "SEO Friendly Structure"
  },
  {
    value: 100,
    suffix: "%",
    label: "Accessibility Focused"
  },
];

const values = [
  {
    title: "Performance First",
    desc: "Every website is optimized for speed to improve user experience and search rankings."
  },
  {
    title: "Accessibility",
    desc: "We build inclusive websites that are usable by people of all abilities."
  },
  {
    title: "SEO Foundation",
    desc: "Clean structure, semantic HTML, and technical SEO help your business get discovered."
  },
  {
    title: "Business Focused",
    desc: "Every design decision supports your goals, whether that means generating leads, increasing sales, or building trust."
  },
];

function Counter({ value, suffix }: { value: number; suffix: string }) {
  const ref = useRef<HTMLSpanElement>(null);
  const started = useRef(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    // The server HTML keeps the real number for crawlers; only the animation starts at 0.
    el.textContent = "0";
    const obs = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting && !started.current) {
        started.current = true;
        const dur = 1800;
        let start: number | null = null;
        const step = (ts: number) => {
          if (!start) start = ts;
          const progress = Math.min((ts - start) / dur, 1);
          const ease = 1 - Math.pow(1 - progress, 4);
          el.textContent = String(Math.floor(ease * value));
          if (progress < 1) requestAnimationFrame(step);
          else el.textContent = String(value);
        };
        requestAnimationFrame(step);
        obs.unobserve(el);
      }
    }, { threshold: 0.5 });
    obs.observe(el);
    return () => obs.disconnect();
  }, [value]);

  return (
    <span className="text-[2.8rem] font-normal tracking-[-0.04em] leading-none counter-num">
      <span ref={ref}>{value}</span>
      <span className="text-orange">{suffix}</span>
    </span>
  );
}

export default function About() {
  return (
    <section id="about" className="bg-cream px-6 py-28 text-ink md:px-10">
      <div className="mx-auto max-w-[1160px]">
        <h2
          className="reveal mx-auto max-w-[900px] text-center font-display font-normal leading-[1.08] tracking-[-0.04em]"
          style={{ fontSize: "clamp(2.4rem, 6vw, 5.2rem)" }}
        >
          We build websites and apps that help{" "}
          <Star className="mx-1 inline-block h-[0.62em] w-[0.62em] text-orange" />{" "}
          businesses{" "}
          <span className="text-[1.15em] leading-none">
            <Script tone="orange">grow online</Script>
          </span>
        </h2>

        <div className="mt-24 grid grid-cols-1 items-center gap-14 lg:grid-cols-[1fr_1.15fr]">
          <div className="reveal delay-1">
            <h3 className="text-[2rem] font-normal leading-[1.15] tracking-[-0.03em]">
              <span className="text-[#b52f06]">Our story</span>
              <br />
              built around your goals
            </h3>
            <p className="mt-6 font-light leading-[1.8] text-ink-muted">
              PragDev Softwares is a Nairobi-based website and app development
              company. We help startups and growing businesses succeed online
              with fast, modern websites, web applications and mobile apps,
              focusing on performance, accessibility, SEO and user experience.
            </p>
            <p className="mt-4 font-light leading-[1.8] text-ink-muted">
              Every project is built with clean code, responsive design, and
              long-term maintainability in mind. Whether you&apos;re launching a
              new business, refreshing an outdated website, or building an app
              for your next product, we build digital experiences that inspire
              confidence and convert visitors into customers.
            </p>
          </div>

          {/* Artwork with overlapping card */}
          <div className="reveal delay-2 relative pb-16 lg:pl-14">
            <div className="glow-top overflow-hidden rounded-2xl px-8 pt-10" aria-hidden>
              <BrowserShot src="/work/nia-dada.webp" sizes="(max-width: 1024px) 90vw, 520px" />
            </div>
            <div className="absolute bottom-0 left-0 max-w-[340px] rounded-2xl bg-ink p-6 shadow-[0_24px_60px_rgba(15,13,9,0.35)]">
              <p className="font-script text-[1.5rem] font-semibold leading-[1.15] text-lime">
                &quot;Fast, accessible, SEO-ready websites and apps built to help
                businesses grow.&quot;
              </p>
              <div className="mt-4 flex flex-wrap gap-1.5">
                {["Fast", "SEO Ready", "Accessible", "Responsive", "Business Focused"].map((tag) => (
                  <span key={tag} className="pill">
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Stats */}
        <div className="mt-20 grid grid-cols-2 gap-px overflow-hidden rounded-2xl border border-ink/10 bg-ink/10 lg:grid-cols-4">
          {stats.map((s) => (
            <div key={s.label} className="bg-cream p-7">
              <Counter value={s.value} suffix={s.suffix} />
              <p className="mt-2 text-[0.85rem] text-ink-muted">{s.label}</p>
            </div>
          ))}
        </div>

        {/* Values */}
        <div className="mt-14 grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-4">
          {values.map((v) => (
            <div key={v.title}>
              <h3 className="text-[1.1rem] font-medium tracking-[-0.02em]">{v.title}</h3>
              <p className="mt-2 text-[0.9rem] font-light leading-[1.65] text-ink-muted">{v.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
