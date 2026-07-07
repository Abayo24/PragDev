const items = [
  "Get More Leads",
  "Reach More Customers",
  "Fast Loading Websites",
  "SEO Ready",
  "Accessible Design",
  "Responsive on Every Device",
  "Professional Business Websites",
  "Built for Growth",
  "Easy to Manage",
  "Trusted by Startups",
];

export default function Ticker() {
  const doubled = [...items, ...items];

  return (
    <div className="bg-orange py-[13px] overflow-hidden border-b border-black/10">
      <div
        className="flex w-max animate-ticker"
        style={{ animation: "ticker 28s linear infinite" }}
      >
        {doubled.map((item, i) => (
          <span
            key={i}
            className="flex items-center gap-2.5 px-7 font-mono text-[0.72rem] tracking-[0.12em] uppercase text-white whitespace-nowrap"
          >
            <span className="text-[0.65rem] opacity-60">✦</span>
            {item}
          </span>
        ))}
      </div>
    </div>
  );
}
