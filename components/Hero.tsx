import Link from "next/link";
import { HeroVisual, Star, Script } from "@/components/Art";
import { whatsappUrl } from "@/lib/site";

export default function Hero() {
  return (
    <section id="hero" className="glow-top relative overflow-hidden px-6 pt-[128px] text-center md:px-10 md:pt-[150px]">
      <div className="relative z-10 mx-auto max-w-[1240px]">
        <div className="mb-8 flex flex-wrap items-center justify-center gap-x-5 gap-y-2 text-[0.8rem] text-cream/70">
          <span>Website &amp; App Developers • Nairobi • Kenya • Africa</span>
          <span className="flex items-center gap-2">
            <span className="h-2 w-2 rounded-full bg-lime shadow-[0_0_10px_#A3FF00] animate-blink" />
            Accepting new projects
          </span>
        </div>

        <h1
          className="font-display font-normal leading-[1.1] tracking-[-0.035em]"
          style={{ fontSize: "clamp(2.7rem, 6.2vw, 5.8rem)" }}
        >
          <span className="text-fade">Website &amp; app developers</span>{" "}
          <br className="hidden md:block" />
          <span className="text-cream/90">in Nairobi.</span>{" "}
          <Star className="mx-1 inline-block h-[0.7em] w-[0.7em] -translate-y-[0.04em] text-orange drop-shadow-[0_0_18px_rgba(232,64,12,0.7)]" />{" "}
          <span className="text-[1.18em] leading-none">
            <Script>Built right.</Script>
          </span>
        </h1>

        <p className="mx-auto mt-7 max-w-[600px] text-[1.05rem] font-light leading-[1.7] text-cream/70">
          PragDev Softwares is a website and app development company in
          Nairobi, Kenya. We build fast, SEO-ready websites, web applications
          and mobile apps that help startups and growing businesses win more
          customers.
        </p>

        <div className="mt-9 flex flex-wrap items-center justify-center gap-3">
          <Link
            href={whatsappUrl("Hi PragDev! I found your website and I'd like to discuss a project for my business.")}
            target="_blank"
            rel="noopener noreferrer"
            className="btn-lime"
          >
            Start Your Project ↗
          </Link>
          <Link href="#portfolio" className="btn-dark">
            View Our Work
          </Link>
        </div>
      </div>

      <HeroVisual />
    </section>
  );
}
