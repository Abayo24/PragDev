import type { Faq } from "@/lib/faqs";

export default function FAQ({ faqs }: { faqs: Faq[] }) {
  return (
    <section id="faq" className="py-24 bg-cream-2">
      <div className="max-w-[1240px] mx-auto px-6 md:px-10">
        <span className="block font-mono text-[0.7rem] tracking-[0.15em] uppercase text-[#b52f06] mb-5 reveal">
          Frequently Asked Questions
        </span>
        <h2
          className="font-display font-extrabold tracking-tighter2 leading-[0.95] mb-14 reveal delay-1"
          style={{ fontSize: "clamp(2.4rem, 5vw, 4.5rem)" }}
        >
          Website and app development
          <br />
          <em className="not-italic font-light text-ink-muted">
            questions, answered
          </em>
        </h2>

        <div className="border-t border-ink/10 reveal delay-2">
          {faqs.map((f) => (
            <details key={f.question} className="group border-b border-ink/10">
              <summary className="flex items-center justify-between gap-6 py-6 list-none [&::-webkit-details-marker]:hidden">
                <h3 className="font-display text-[1.15rem] font-bold tracking-tighter4">
                  {f.question}
                </h3>
                <span
                  className="text-orange text-2xl leading-none transition-transform duration-200 group-open:rotate-45"
                  aria-hidden
                >
                  +
                </span>
              </summary>
              <p className="text-ink-muted font-light leading-[1.85] max-w-[760px] pb-7">
                {f.answer}
              </p>
            </details>
          ))}
        </div>
      </div>
    </section>
  );
}
