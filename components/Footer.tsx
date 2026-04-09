import Link from "next/link";

const footerCols = [
  {
    title: "Services",
    links: [
      { label: "Custom Software", href: "#services" },
      { label: "Web Development", href: "#services" },
      { label: "Mobile Apps", href: "#services" },
      { label: "UI/UX Design", href: "#services" },
      { label: "Cloud Solutions", href: "#services" },
      { label: "System Integration", href: "#services" },
    ],
  },
  {
    title: "Company",
    links: [
      { label: "About Us", href: "#about" },
      { label: "Portfolio", href: "#portfolio" },
      { label: "Our Process", href: "#process" },
      { label: "Testimonials", href: "#testimonials" },
      { label: "Careers", href: "#" },
      { label: "Blog", href: "#" },
    ],
  },
  {
    title: "Contact",
    links: [
      { label: "pragdev.softwares@gmail.com", href: "mailto:pragdev.softwares@gmail.com" },
      { label: "+254 769 622 996", href: "tel:+254769622996" },
      { label: "Nairobi, Kenya", href: "#" },
      { label: "East Africa", href: "#" },
    ],
  },
];

const socials = [
  { label: "LinkedIn", title: "LinkedIn", href: "#" },
  { label: "𝕏", title: "Twitter/X", href: "#" },
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
            <Link href="#" className="flex items-center mb-4">
              <div className='w-16 h-auto flex items-center justify-center transition-transform duration-300 group-hover:scale-105'>
							<img
								src='/pds-logo1.png'
								alt='PragDev Logo'
								className='object-contain'
							/>
						</div>
              <span className="font-display font-extrabold text-[1.2rem] tracking-tighter2 text-cream">
                PragDev Softwares
              </span>
            </Link>
            <p className="text-[0.88rem] text-cream/40 font-light leading-[1.75] max-w-[260px]">
              Building scalable, elegant software for startups and businesses
              across Africa and beyond. Nairobi-based, globally minded,
              outcome-obsessed.
            </p>
            <div className="flex gap-2.5 mt-6">
              {socials.map((s) => (
                <Link
                  key={s.title}
                  href={s.href}
                  title={s.title}
                  className="px-3 py-2 rounded-[8px] bg-cream/5 border border-cream/8 flex items-center justify-center text-cream/40 text-[0.82rem] transition-all duration-200 hover:bg-orange hover:border-orange hover:text-white"
                >
                  {s.label}
                </Link>
              ))}
            </div>
          </div>

          {/* Columns */}
          {footerCols.map((col) => (
            <div key={col.title}>
              <h4 className="font-mono text-[0.65rem] tracking-[0.15em] uppercase text-cream/20 mb-5">
                {col.title}
              </h4>
              <ul className="flex flex-col gap-[11px] list-none">
                {col.links.map((l) => (
                  <li key={l.label}>
                    <Link
                      href={l.href}
                      className="text-[0.88rem] text-cream/40 font-light hover:text-cream transition-colors duration-200"
                    >
                      {l.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Bottom bar */}
        <div className="flex flex-wrap items-center justify-between gap-3.5 pt-9 border-t border-cream/[0.06] text-[0.78rem] text-cream/20">
          <p>© {new Date().getFullYear()} PragDev Softwares Ltd. All rights reserved.</p>
          <div className="flex gap-6">
            <Link href="#" className="text-cream/20 hover:text-cream transition-colors duration-200">
              Privacy Policy
            </Link>
            <Link href="#" className="text-cream/20 hover:text-cream transition-colors duration-200">
              Terms of Service
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
