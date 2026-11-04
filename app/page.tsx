import type { Metadata } from "next";
import Hero from "@/components/Hero";
import Choose from "@/components/Choose";
import About from "@/components/About";
import Services from "@/components/Services";
import WhyUs from "@/components/WhyUs";
import Portfolio from "@/components/Portfolio";
import Process from "@/components/Process";
import Testimonials from "@/components/Testimonials";
import FAQ from "@/components/FAQ";
import CTA from "@/components/CTA";
import Contact from "@/components/Contact";
import JsonLd from "@/components/JsonLd";
import ScrollRevealProvider from "@/components/ScrollRevealProvider";
import { homeFaqs } from "@/lib/faqs";
import { faqSchema } from "@/lib/schema";

export const metadata: Metadata = {
  alternates: { canonical: "/" },
};

export default function Home() {
  return (
    <ScrollRevealProvider>
      <JsonLd data={faqSchema(homeFaqs)} />
      <main className="overflow-x-clip">
        <Hero />
        <Choose />
        <About />
        <Services />
        <WhyUs />
        <Portfolio />
        <Process />
        <Testimonials />
        <FAQ faqs={homeFaqs} />
        <CTA />
        <Contact />
      </main>
    </ScrollRevealProvider>
  );
}
