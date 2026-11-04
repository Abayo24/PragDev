import { Script } from "@/components/Art";
import type { Faq } from "@/lib/faqs";

export default function FAQ({ faqs }: { faqs: Faq[] }) {
  return (
    <section id="faq" className="glow-soft px-6 py-28 md:px-10">
      <div className="mx-auto max-w-[920px]">
        <span className="eyebrow reveal mb-4 text-center text-lime">Frequently Asked Questions</span>
        <h2 className="section-title reveal delay-1 mb-14 text-center">
          Website and app development{" "}
          <span className="text-[1.15em] leading-none">
            <Script>questions, answered</Script>
          </span>
        </h2>

        <div className="reveal delay-2 flex flex-col gap-2.5">
          {faqs.map((f) => (
            <details key={f.question} className="card-dark group px-6">
              <summary className="flex cursor-pointer list-none items-center justify-between gap-6 py-5 [&::-webkit-details-marker]:hidden">
                <h3 className="text-[1.05rem] font-normal tracking-[-0.01em]">{f.question}</h3>
                <span
                  className="text-2xl leading-none text-lime transition-transform duration-200 group-open:rotate-45"
                  aria-hidden
                >
                  +
                </span>
              </summary>
              <p className="max-w-[760px] pb-6 font-light leading-[1.8] text-cream/75">{f.answer}</p>
            </details>
          ))}
        </div>
      </div>
    </section>
  );
}
