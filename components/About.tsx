"use client";
import { useEffect, useRef } from "react";

const stats = [
  { value: 50, suffix: "+", label: "Projects Delivered" },
  { value: 98, suffix: "%", label: "Client Satisfaction" },
  { value: 5, suffix: "+", label: "Years of Expertise" },
  { value: 12, suffix: "+", label: "Industries Served" },
];

const values = [
  {title: "Speed without shortcuts", desc: "Fast delivery, zero compromise on quality." },
  {title: "Outcome-driven", desc: "We measure success by your business results, not just deliverables." },
  {title: "Radical transparency", desc: "You see exactly what's being built and why, always." },
  {title: "Africa-first context", desc: "We build with the real constraints and opportunities of African markets in mind." },
];

function Counter({ value, suffix }: { value: number; suffix: string }) {
  const ref = useRef<HTMLSpanElement>(null);
  const started = useRef(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
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
    <span className="font-display text-[2.8rem] font-black tracking-tightest leading-none counter-num">
      <span ref={ref}>0</span>
      <span className="text-orange">{suffix}</span>
    </span>
  );
}

export default function About() {
  return (
    <section id="about" className="py-24 bg-cream">
      <div className="max-w-[1240px] mx-auto px-10">
        {/* Ghost super-title */}
        <p
          className="text-stroke-cream font-display font-black tracking-tighter2 leading-none select-none mb-[-20px] reveal"
          style={{ fontSize: "clamp(5rem, 10vw, 9.5rem)" }}
          aria-hidden
        >
          ABOUT
        </p>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-start">
          {/* Left */}
          <div className="reveal delay-1">
            <div className="flex items-center gap-3 font-mono text-[0.7rem] tracking-[0.15em] uppercase text-orange mb-7 after:content-[''] after:flex-1 after:h-px after:bg-cream-3">
              Our Story
            </div>

            <h2
              className="font-display font-bold tracking-tighter3 leading-[1.12] mb-7"
              style={{ fontSize: "clamp(1.8rem, 3.2vw, 3rem)" }}
            >
              We solve the problems that{" "}
              <em className="not-italic font-light text-ink-muted">
                hold businesses back
              </em>
            </h2>

            <p className="text-ink-muted font-light leading-[1.85] mb-5">
              PragDev Softwares was built on a conviction: every ambitious
              business deserves software that actually works — fast, elegant, and
              built to last. Too many great ideas stall because the technology
              couldn't keep up.
            </p>
            <p className="text-ink-muted font-light leading-[1.85]">
              We are engineers, designers, and product thinkers based in
              Nairobi — building world-class digital products for startups and
              businesses across Africa and beyond. We don't just write code; we
              think about your users, your growth, and your bottom line.
            </p>

            {/* Stats grid */}
            <div className="grid grid-cols-2 gap-0.5 mt-12 border border-ink/10">
              {stats.map((s, i) => (
                <div
                  key={i}
                  className={`p-7 border border-ink/10 bg-cream hover:bg-cream-2 transition-colors duration-200 reveal delay-${i + 1}`}
                >
                  <Counter value={s.value} suffix={s.suffix} />
                  <p className="text-[0.82rem] text-ink-muted mt-1.5">{s.label}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Right */}
          <div className="reveal delay-2">
            {/* Dark card */}
            <div className="bg-ink rounded-sm px-10 py-10 relative overflow-hidden min-h-[360px] flex flex-col justify-end">
              <span
                className="absolute top-8 right-8 font-display font-black leading-none tracking-tightest select-none pointer-events-none"
                style={{
                  fontSize: "7rem",
                  color: "transparent",
                  WebkitTextStroke: "1px rgba(255,255,255,0.07)",
                }}
                aria-hidden
              >
                PragDev
              </span>
              <div className="flex flex-wrap gap-2 mb-6 relative z-10">
                {["Pragmatic", "Reliable", "Innovative", "Scalable", "On-time"].map((tag, i) => (
                  <span
                    key={tag}
                    className={`font-mono text-[0.68rem] tracking-[0.08em] px-3.5 py-1.5 rounded-full font-medium border ${
                      i % 2 === 0
                        ? "bg-lime/12 text-lime border-lime/20"
                        : i === 1
                        ? "bg-orange/15 text-[#ff7043] border-orange/25"
                        : "bg-cream/6 text-cream/50 border-cream/10"
                    }`}
                  >
                    {tag}
                  </span>
                ))}
              </div>
              <p className="font-display text-[1.2rem] italic font-light text-cream/65 leading-[1.5] relative z-10">
                "Pragmatic engineering for an ambitious Africa — software that
                works, ships, and grows."
              </p>
            </div>

            {/* Values list */}
            <div className="border border-ink/10 flex flex-col mt-4 lg:mt-20">
              {values.map((v, i) => (
                <div
                  key={i}
                  className="flex items-center gap-4 px-5 py-4 border-b border-ink/10 last:border-b-0 hover:bg-cream-2 transition-colors duration-200"
                >
                  <p className="text-[0.9rem] text-ink-muted">
                    <strong className="text-ink font-semibold">{v.title}</strong>{" "}
                    — {v.desc}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
