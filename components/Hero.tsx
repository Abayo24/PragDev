import Link from "next/link";

export default function Hero() {
  return (
    <section
      id="hero"
      // Added pt-[100px] to clear the 72px navbar, changed to px-6 on mobile to match nav
      className="min-h-svh flex flex-col relative overflow-hidden bg-ink px-6 md:px-10 pt-[104px] md:pt-[120px] pb-12"
    >
      {/* Ghost background text */}
      <span
        className="text-stroke absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 font-display font-black leading-none tracking-tightest whitespace-nowrap pointer-events-none select-none z-0 "
        style={{ fontSize: "clamp(18vw, 20vw, 22vw)" }}
        aria-hidden
      >
        BUILD
      </span>

      {/* Main Wrapper matching the Nav's exact constraints */}
      <div className="relative z-10 max-w-[1240px] mx-auto w-full flex flex-col h-full flex-1">
        {/* Top bar - Moved inside normal flow so it naturally pushes content down */}
        <div className="flex items-center justify-between w-full">
          <span className="hidden md:flex font-mono text-[0.7rem] tracking-[0.15em] uppercase text-cream/40">
            Web Development Studio • Kenya & Remote
          </span>
          <div className="flex items-center gap-2 font-mono text-[0.7rem] tracking-[0.1em] uppercase text-cream/55">
            <span className="w-2 h-2 rounded-full bg-lime shadow-[0_0_10px_#A3FF00] animate-blink" />
            Accepting new projects
          </div>
        </div>

        {/* Content - Pushed to the bottom using mt-auto */}
        <div className="mt-auto pt-10">
          {/* <p className="font-mono text-[0.72rem] tracking-[0.15em] uppercase text-cream/40 mb-7 flex items-center gap-4">
            <span className="w-10 h-px bg-cream/20 block" />
            Est. 2025 &mdash; 
          </p> */}

          <h1
            className="font-display font-extrabold leading-[0.92] tracking-tighter2 text-cream mb-12"
            style={{ fontSize: "clamp(3.8rem, 8.5vw, 9rem)" }}
          >
            Websites that
            <br />
            <em className="not-italic font-light text-orange">Win</em> Customers
            <br />
            <span className="text-lime">Built right.</span>
          </h1>

          <div className="flex flex-wrap items-start justify-between gap-10">
            <p className="text-[1.05rem] font-light text-cream/50 max-w-[420px] leading-[1.75]">
              PragDev builds fast, SEO-ready, accessible websites for startups
              and growing businesses. Every project is optimized for
              performance, mobile devices, and search engines to help you
              attract more customers and grow online.
            </p>
            <div className="flex flex-wrap gap-3.5 items-center">
              <Link
                href="https://wa.me/254769622996?text=Hello!%20I%20saw%20your%20website%20and%20I%27d%20like%20to%20start%20a%20new%20project%20with%20you."
                className="inline-flex items-center gap-2.5 px-7 py-[15px] rounded-[9px] bg-orange text-white font-semibold text-[0.92rem] transition-all duration-200 hover:bg-[#c73400] hover:-translate-y-[3px] hover:shadow-[0_12px_32px_rgba(232,64,12,0.35)] tracking-[-0.01em]"
              >
                Start Your Website ↗
              </Link>
              <Link
                href="#portfolio"
                className="inline-flex items-center gap-2.5 px-7 py-[15px] rounded-[9px] border border-cream/25 text-cream font-semibold text-[0.92rem] transition-all duration-200 hover:bg-cream/8 hover:-translate-y-[3px] tracking-[-0.01em]"
              >
                View Our Work
              </Link>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll hint - pinned to bottom edge */}
      <p
        className="hidden md:block absolute bottom-12 right-10 z-10 font-mono text-[0.65rem] tracking-[0.15em] uppercase text-cream/28"
        style={{ writingMode: "vertical-lr", transform: "rotate(180deg)" }}
      >
        Scroll to explore
      </p>
    </section>
  );
}