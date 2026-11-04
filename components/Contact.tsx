import Link from "next/link";
import { Script } from "@/components/Art";
import { site, whatsappUrl } from "@/lib/site";

export default function Contact() {
  return (
    <section id="contact" className="bg-ink px-6 py-28 text-center md:px-10">
      <div className="mx-auto flex max-w-[760px] flex-col items-center">
        <span className="eyebrow reveal mb-4 text-lime">Get In Touch</span>
        <h2 className="section-title reveal delay-1 mb-10">
          Let&apos;s build{" "}
          <span className="text-[1.15em] leading-none">
            <Script>something great.</Script>
          </span>
        </h2>
        <Link
          href={whatsappUrl("Hello! I saw your website and I'd like to start a new project with you.")}
          target="_blank"
          rel="noopener noreferrer"
          className="btn-lime"
        >
          Start a Project Today ↗
        </Link>

        <address className="mt-9 flex flex-wrap justify-center gap-x-8 gap-y-2 text-[0.92rem] not-italic text-cream/75">
          <span>
            {site.city}, {site.country}
          </span>
          <a href={`tel:${site.phone}`} className="hover:text-lime">
            {site.phoneDisplay}
          </a>
          <a href={`mailto:${site.email}`} className="hover:text-lime">
            {site.email}
          </a>
        </address>

        <div className="card-dark mt-10 px-6 py-5">
          <p className="mb-1.5 text-[0.95rem] font-medium text-lime">Currently accepting new projects</p>
          <p className="text-[0.88rem] font-light leading-[1.65] text-cream/70">
            We have limited capacity each quarter to ensure every client gets
            our full attention. Reach out early to secure your spot in our next
            sprint cycle.
          </p>
        </div>
      </div>
    </section>
  );
}
