import Link from "next/link";
import { Star } from "@/components/Art";
import { site, whatsappUrl } from "@/lib/site";

export default function CTA() {
  return (
    <section id="cta" className="bg-ink px-6 md:px-10">
      <div className="reveal relative mx-auto grid max-w-[1240px] grid-cols-1 items-center gap-10 overflow-hidden rounded-3xl bg-[#c73400] p-9 md:p-14 lg:grid-cols-[1fr_auto]">
        <Star className="pointer-events-none absolute -right-14 -top-14 h-72 w-72 text-white/[0.08]" />
        <h2 className="section-title relative text-white">
          Your next product starts with a{" "}
          <span className="font-script text-[1.15em] font-semibold leading-none tracking-normal">conversation.</span>
        </h2>
        <div className="relative flex flex-col items-start gap-3 lg:items-end">
          <p className="max-w-[300px] text-[0.95rem] font-light leading-[1.65] text-white lg:text-right">
            Whether you have a detailed spec or just a rough idea, we&apos;ll
            help you figure out what to build and how to win.
          </p>
          <Link
            href={whatsappUrl("Hello! I saw your website and I'd like to start a new project with you.")}
            target="_blank"
            rel="noopener noreferrer"
            className="btn-white"
          >
            Start a Project Today ↗
          </Link>
          <Link href={`mailto:${site.email}`} className="text-[0.9rem] text-white underline underline-offset-4">
            {site.email}
          </Link>
        </div>
      </div>
    </section>
  );
}
