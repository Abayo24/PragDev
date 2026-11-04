import Link from "next/link";
import { BrowserShot, Script, Star } from "@/components/Art";
import { FaCode, FaMobileAlt } from "react-icons/fa";

function Bullets({ items }: { items: string[] }) {
  return (
    <ul className="mt-5 flex list-none flex-col gap-2.5">
      {items.map((item) => (
        <li key={item} className="flex gap-2.5 text-[0.92rem] font-light leading-[1.5] text-cream/75">
          <Star className="mt-[0.35em] h-2.5 w-2.5 flex-shrink-0 text-lime" />
          {item}
        </li>
      ))}
    </ul>
  );
}

export default function Choose() {
  return (
    <section id="choose" className="bg-ink px-6 pb-24 pt-16 md:px-10">
      <div className="mx-auto max-w-[1040px]">
        <h2 className="section-title reveal mb-14 text-center">
          Choose your <Script>build</Script>
        </h2>

        <div className="grid grid-cols-1 gap-4 lg:grid-cols-[1.45fr_1fr]">
          {/* Websites */}
          <div className="card-dark reveal delay-1 relative overflow-hidden border-lime/30 p-8 md:p-10">
            <div
              className="pointer-events-none absolute -bottom-6 -right-20 hidden w-[62%] md:block"
              style={{ maskImage: "linear-gradient(to right, transparent, #000 45%)", WebkitMaskImage: "linear-gradient(to right, transparent, #000 45%)" }}
            >
              <BrowserShot src="/work/guru-spices.webp" sizes="(max-width: 1024px) 60vw, 400px" className="rounded-2xl" />
            </div>
            <div className="relative z-10 max-w-[340px]">
              <span className="flex h-10 w-10 items-center justify-center rounded-lg border border-lime/30 bg-forest text-lime">
                <FaCode aria-hidden />
              </span>
              <h3 className="mt-7 text-[1.9rem] font-normal tracking-[-0.03em]">For websites</h3>
              <p className="mt-3 text-[0.95rem] font-light leading-[1.6] text-cream/70">
                Earn trust, attract customers and generate enquiries with a
                website built to perform.
              </p>
              <Bullets
                items={[
                  "Business websites and landing pages",
                  "Redesigns of outdated websites",
                  "Technical SEO and accessibility",
                ]}
              />
              <Link href="/services/website-development" className="btn-lime mt-8">
                Explore Website Development
              </Link>
            </div>
          </div>

          {/* Apps */}
          <div className="card-dark reveal delay-2 relative overflow-hidden p-8 md:p-10">
            <div className="relative z-10">
              <span className="flex h-10 w-10 items-center justify-center rounded-lg border border-white/15 bg-white/10 text-cream">
                <FaMobileAlt aria-hidden />
              </span>
              <h3 className="mt-7 text-[1.9rem] font-normal tracking-[-0.03em]">For apps</h3>
              <p className="mt-3 text-[0.95rem] font-light leading-[1.6] text-cream/70">
                Turn your idea or business process into a product people enjoy
                using.
              </p>
              <Bullets
                items={[
                  "Mobile apps for your customers",
                  "Client portals, booking systems and dashboards",
                  "Redesigns of existing applications",
                ]}
              />
              <Link href="/services/mobile-app-development" className="btn-dark mt-8">
                Explore App Development
              </Link>
              <Link
                href="/services/web-app-development"
                className="mt-4 block text-[0.88rem] text-cream/70 underline underline-offset-4 hover:text-lime"
              >
                Or explore web app development
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
