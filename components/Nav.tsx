'use client';
import { useEffect, useState } from 'react';
import Link from 'next/link';
import Image from "next/image";
import { whatsappUrl } from "@/lib/site";

const links = [
  { href: "/#about", label: "About" },
  { href: "/#services", label: "Services" },
  { href: "/#portfolio", label: "Projects" },
  { href: "/#process", label: "Process" },
  { href: "/#testimonials", label: "Testimonials" },
  { href: "/#contact", label: "Contact" },
];

export default function Nav() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 30);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <>
      <nav
        className={`fixed inset-x-0 top-0 z-[900] border-b px-6 transition-all duration-300 md:px-10 ${
          scrolled || open
            ? "border-white/10 bg-ink/85 backdrop-blur-xl"
            : "border-white/[0.06] bg-transparent"
        }`}
      >
        <div className="mx-auto flex h-[72px] w-full max-w-[1240px] items-center justify-between gap-6">
          {/* The logo file includes its own clear space, so pull it back to the content edge */}
          <Link href="/" className="-ml-3 flex items-center no-underline">
            <Image
              src="/brand/pragdev-horizontal-reversed.svg"
              alt="PragDev Softwares"
              width={143}
              height={52}
              priority
              unoptimized
            />
          </Link>

          <ul className="hidden list-none items-center gap-1 lg:flex">
            {links.map((l) => (
              <li key={l.href}>
                <Link
                  href={l.href}
                  className="rounded-lg px-3.5 py-2 text-[0.9rem] text-cream/75 transition-colors duration-200 hover:text-lime"
                >
                  {l.label}
                </Link>
              </li>
            ))}
          </ul>

          <Link
            href={whatsappUrl("Hi PragDev! I found your website and I'd like to discuss a project for my business.")}
            target="_blank"
            rel="noopener noreferrer"
            className="btn-lime hidden !px-5 !py-2.5 !text-[0.86rem] lg:inline-flex"
          >
            Book a Free Consultation
          </Link>

          <button
            className="flex flex-col gap-[5px] border-none bg-transparent p-1 lg:hidden"
            onClick={() => setOpen(!open)}
            aria-label="Toggle menu"
            aria-expanded={open}
          >
            <span className={`h-0.5 w-[22px] rounded-sm bg-lime transition-all duration-300 ${open ? "translate-y-[7px] rotate-45" : ""}`} />
            <span className={`h-0.5 w-[22px] rounded-sm bg-lime transition-all duration-300 ${open ? "opacity-0" : ""}`} />
            <span className={`h-0.5 w-[22px] rounded-sm bg-lime transition-all duration-300 ${open ? "-translate-y-[7px] -rotate-45" : ""}`} />
          </button>
        </div>
      </nav>

      <div className={`fixed inset-x-0 bottom-0 top-[73px] z-[890] flex-col gap-1 bg-ink px-6 pt-6 lg:hidden ${open ? "flex" : "hidden"}`}>
        {links.map((l) => (
          <Link
            key={l.href}
            href={l.href}
            onClick={() => setOpen(false)}
            className="border-b border-white/10 py-3.5 text-[1.6rem] font-normal tracking-[-0.03em] text-cream hover:text-lime"
          >
            {l.label}
          </Link>
        ))}
      </div>
    </>
  );
}
