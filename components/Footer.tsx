import Image from "next/image";
import Link from "next/link";

const footerCols: {
  title: string;
  links: { label: string; href?: string }[];
}[] = [
  {
    title: "Services",
    links: [
      { label: "Website Development", href: "/services/website-development" },
      { label: "Mobile App Development", href: "/services/mobile-app-development" },
      { label: "Web App Development", href: "/services/web-app-development" },
      { label: "All Services", href: "/#services" },
    ],
  },
  {
    title: "Company",
    links: [
      { label: "About Us", href: "/#about" },
      { label: "Portfolio", href: "/#portfolio" },
      { label: "Our Process", href: "/#process" },
      { label: "Testimonials", href: "/#testimonials" },
      { label: "FAQ", href: "/#faq" },
    ],
  },
  {
    title: "Contact",
    links: [
      {
        label: "pragdev.softwares@gmail.com",
        href: "mailto:pragdev.softwares@gmail.com",
      },
      { label: "+254 769 622 996", href: "tel:+254769622996" },
      { label: "Nairobi, Kenya" },
      { label: "East Africa" },
    ],
  },
];

const socials = [
  { label: "WhatsApp", title: "WhatsApp", href: 'https://wa.me/254769622996?text=Hello!%20I%20saw%20your%20website%20and%20I%27d%20like%20to%20start%20a%20new%20project%20with%20you.' },
];

export default function Footer() {
  return (
    <footer className="bg-ink-2 border-t border-cream/[0.06] pt-[72px] pb-9">
      <div className="max-w-[1240px] mx-auto px-10">
        {/* Top grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-[1.8fr_1fr_1fr_1fr] gap-14 mb-14">
          {/* Brand */}
          <div>
            <Link href="/" className="flex items-center mb-4">
              <div className='w-16 h-auto flex items-center justify-center transition-transform duration-300 group-hover:scale-105'>
							<Image
								src='/pds-logo1.png'
								alt='PragDev Softwares logo'
								width={64}
								height={64}
								className='object-contain'
							/>
						</div>
              <span className="font-display font-extrabold text-[1.2rem] tracking-tighter2 text-cream">
                PragDev Softwares
              </span>
            </Link>
            <p className="text-[0.88rem] text-cream/70 font-light leading-[1.75] max-w-[260px]">
              Website and app development company in Nairobi, Kenya, building
              fast, SEO-ready websites, web applications and mobile apps for
              startups and growing businesses.
            </p>
            <div className="flex gap-2.5 mt-6">
              {socials.map((s) => (
                <Link
                  key={s.title}
                  href={s.href}
                  title={s.title}
                  className="px-3 py-2 rounded-[8px] bg-cream/5 border border-cream/8 flex items-center justify-center text-cream/75 text-[0.82rem] transition-all duration-200 hover:bg-orange hover:border-orange hover:text-white"
                >
                  {s.label}
                </Link>
              ))}
            </div>
          </div>

          {/* Columns */}
          {footerCols.map((col) => (
            <div key={col.title}>
              <h2 className="font-mono text-[0.65rem] tracking-[0.15em] uppercase text-cream/60 mb-5">
                {col.title}
              </h2>
              <ul className="flex flex-col gap-[11px] list-none">
                {col.links.map((l) => (
                  <li key={l.label}>
                    {l.href ? (
                      <Link
                        href={l.href}
                        className="text-[0.88rem] text-cream/70 font-light hover:text-cream transition-colors duration-200"
                      >
                        {l.label}
                      </Link>
                    ) : (
                      <span className="text-[0.88rem] text-cream/70 font-light">
                        {l.label}
                      </span>
                    )}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Bottom bar */}
        <div className="flex flex-wrap items-center justify-between gap-3.5 pt-9 border-t border-cream/[0.06] text-[0.78rem] text-cream/60">
          <p>© {new Date().getFullYear()} PragDev Softwares Ltd. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
