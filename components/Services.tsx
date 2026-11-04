import Link from "next/link";
import { Script } from "@/components/Art";

const services: {
  num: string;
  name: string;
  href?: string;
  desc: string;
  tags: string[];
}[] = [
  {
    num: "01",
    name: "Business Website Development",
    href: "/services/website-development",
    desc: "Professional websites built to help your business earn trust, attract customers, and generate enquiries. Every website is fast, responsive, SEO-ready, and built with accessibility in mind.",
    tags: [
      "Responsive Design",
      "SEO Ready",
      "Accessibility",
      "Fast Performance",
    ],
  },
  {
    num: "02",
    name: "Mobile App Development",
    href: "/services/mobile-app-development",
    desc: "Mobile apps planned, designed and built around your customers, from the first version of a startup idea to the redesign of an existing product. Every app is built to be simple to use and reliable.",
    tags: [
      "Mobile First",
      "UI/UX Design",
      "Startups",
      "App Redesign",
    ],
  },
  {
    num: "03",
    name: "Custom Web Applications",
    href: "/services/web-app-development",
    desc: "Need more than a website? We build secure web applications tailored to your business, from client portals and booking systems to internal dashboards and business tools.",
    tags: [
      "React",
      "Next.js",
      "Business Systems",
      "Secure Applications",
    ],
  },
  {
    num: "04",
    name: "Landing Pages",
    desc: "High-converting landing pages for product launches, marketing campaigns, and lead generation. Designed to turn visitors into customers with clear messaging and strong calls to action.",
    tags: [
      "Lead Generation",
      "Conversion Focused",
      "Marketing Campaigns",
      "Analytics",
    ],
  },
  {
    num: "05",
    name: "Website Redesign",
    desc: "Transform outdated websites into modern digital experiences with improved speed, mobile responsiveness, accessibility, and search engine visibility.",
    tags: [
      "Modern UI",
      "Mobile First",
      "Performance",
      "SEO Improvements",
    ],
  },
  {
    num: "06",
    name: "Website Maintenance & Support",
    desc: "Keep your website secure, updated, and performing at its best with ongoing maintenance, backups, performance monitoring, and technical support.",
    tags: [
      "Security Updates",
      "Backups",
      "Performance Monitoring",
      "Technical Support",
    ],
  },
  {
    num: "07",
    name: "Technical SEO & Accessibility",
    desc: "Improve your website's visibility and usability with technical SEO, semantic HTML, accessibility best practices, structured data, and Core Web Vitals optimization.",
    tags: [
      "Technical SEO",
      "Core Web Vitals",
      "WCAG",
      "Structured Data",
    ],
  },
];

export default function Services() {
  return (
    <section id="services" className="glow-soft px-6 py-28 md:px-10">
      <div className="mx-auto max-w-[1240px]">
        <div className="mb-16 flex flex-wrap items-end justify-between gap-8">
          <div className="reveal">
            <span className="eyebrow mb-4 text-lime">What We Offer</span>
            <h2 className="section-title">
              Website &amp; app{" "}
              <span className="text-[1.15em] leading-none">
                <Script>development</Script>
              </span>{" "}
              <br className="hidden md:block" />
              services
            </h2>
          </div>
          <p className="reveal delay-2 max-w-[340px] text-[0.95rem] font-light leading-[1.7] text-cream/70">
            From business websites to mobile apps and custom web applications,
            built in Nairobi for clients in Kenya and beyond.
          </p>
        </div>

        <div className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-12">
          {services.map((svc, i) => (
            <div
              key={svc.num}
              className={`card-dark group relative flex flex-col p-7 transition-colors duration-300 hover:border-lime/40 reveal delay-${(i % 3) + 1} ${i < 3 ? "lg:col-span-4" : "lg:col-span-3"}`}
            >
              <span className="text-[0.8rem] text-cream/60">{svc.num}</span>
              <h3 className="mt-5 text-[1.35rem] font-normal leading-[1.2] tracking-[-0.025em]">
                {svc.href ? (
                  <Link href={svc.href} className="after:absolute after:inset-0 group-hover:text-lime">
                    {svc.name}
                  </Link>
                ) : (
                  svc.name
                )}
              </h3>
              <p className="mt-3 flex-1 text-[0.9rem] font-light leading-[1.65] text-cream/70">{svc.desc}</p>
              <div className="mt-5 flex flex-wrap gap-1.5">
                {svc.tags.map((tag) => (
                  <span key={tag} className="pill">
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Where we work */}
        <p className="mt-12 max-w-[760px] text-[0.95rem] font-light leading-[1.8] text-cream/75">
          Based in Nairobi and working remotely, PragDev is a{" "}
          <Link href="/website-developer-nairobi" className="text-cream underline underline-offset-4 hover:text-lime">
            website developer in Nairobi
          </Link>
          , a{" "}
          <Link href="/website-developer-kenya" className="text-cream underline underline-offset-4 hover:text-lime">
            website developer in Kenya
          </Link>{" "}
          and a{" "}
          <Link href="/website-developer-africa" className="text-cream underline underline-offset-4 hover:text-lime">
            website developer for businesses across Africa
          </Link>
          .
        </p>
      </div>
    </section>
  );
}
