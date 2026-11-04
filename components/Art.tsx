// Decorative artwork and device frames. Hidden from assistive technology by callers.
import Image from "next/image";

export function Star({ className = "" }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" className={className} fill="currentColor" aria-hidden>
      <path d="M12 0l2.6 8.2L24 12l-9.4 3.4L12 24l-2.6-8.6L0 12l9.4-3.8z" />
    </svg>
  );
}

export function Swoosh({ className = "" }: { className?: string }) {
  return (
    <svg viewBox="0 0 200 90" className={className} fill="none" aria-hidden>
      <path
        className="draw"
        pathLength={1}
        d="M2 82C42 80 80 62 98 32c10-18-4-30-17-24-14 8-3 37 31 39 28 2 60-13 86-33"
        stroke="currentColor"
        strokeWidth="2.4"
        strokeLinecap="round"
      />
    </svg>
  );
}

/* Handwritten accent word with its looping stroke */
export function Script({
  children,
  tone = "lime",
}: {
  children: React.ReactNode;
  tone?: "lime" | "orange";
}) {
  const color = tone === "lime" ? "text-lime" : "text-orange";
  return (
    <span className={`relative inline-block font-script font-semibold tracking-normal ${color}`}>
      {children}
      <Swoosh className="pointer-events-none absolute -right-[2.15em] -top-[0.42em] w-[2.4em]" />
    </span>
  );
}

export function BrowserShot({
  src,
  className = "",
  sizes = "(max-width: 768px) 90vw, 720px",
  priority = false,
}: {
  src: string;
  className?: string;
  sizes?: string;
  priority?: boolean;
}) {
  return (
    <div
      aria-hidden
      className={`overflow-hidden rounded-t-2xl border border-b-0 border-white/15 bg-ink-2 shadow-[0_-20px_70px_rgba(232,64,12,0.22)] ${className}`}
    >
      <div className="flex items-center gap-1.5 border-b border-white/10 px-4 py-3">
        <span className="h-2 w-2 rounded-full bg-orange" />
        <span className="h-2 w-2 rounded-full bg-gold" />
        <span className="h-2 w-2 rounded-full bg-lime" />
        <span className="ml-3 h-4 flex-1 rounded-full bg-white/[0.07]" />
      </div>
      <Image src={src} alt="" width={1280} height={667} sizes={sizes} priority={priority} className="block h-auto w-full" />
    </div>
  );
}

export function PhoneShot({
  src,
  className = "",
  priority = false,
}: {
  src: string;
  className?: string;
  priority?: boolean;
}) {
  return (
    <div
      aria-hidden
      className={`rounded-[26px] border border-white/20 bg-ink p-2 shadow-[0_24px_60px_rgba(0,0,0,0.6)] ${className}`}
    >
      <Image src={src} alt="" width={400} height={732} sizes="168px" priority={priority} className="block h-auto w-full rounded-[19px]" />
    </div>
  );
}

const particles = [
  [742, 150], [760, 118], [785, 138], [806, 96], [828, 122], [846, 84], [868, 108], [890, 70],
  [772, 178], [812, 160], [852, 146], [214, 214], [236, 182], [262, 204], [290, 164], [316, 188],
  [188, 250], [342, 148], [922, 92], [958, 66],
];

export function HeroVisual() {
  return (
    <div aria-hidden className="relative mx-auto mt-14 h-[270px] w-full max-w-[1120px] overflow-hidden md:h-[350px]">
      {/* Warm spotlight behind the devices */}
      <div
        className="absolute inset-x-0 bottom-0 h-full"
        style={{
          background:
            "radial-gradient(42% 60% at 50% 62%, rgba(232,64,12,0.42), rgba(212,168,67,0.1) 55%, transparent 75%)",
        }}
      />

      <svg
        viewBox="0 0 1120 440"
        preserveAspectRatio="xMidYMid slice"
        className="absolute inset-0 h-full w-full text-lime"
        fill="none"
      >
        <path className="draw" pathLength={1} d="M150 150C130 250 200 340 330 372" stroke="currentColor" strokeWidth="3" strokeLinecap="round" opacity="0.85" />
        <path className="draw" pathLength={1} d="M968 130c44 80 16 170-58 226" stroke="currentColor" strokeWidth="3" strokeLinecap="round" opacity="0.85" />
        <path className="draw" pathLength={1} d="M1032 270 910 372" stroke="#C8FF47" strokeWidth="2" strokeLinecap="round" opacity="0.7" />
        {particles.map(([cx, cy], i) => (
          <circle
            key={i}
            cx={cx}
            cy={cy}
            r={i % 3 === 0 ? 2.4 : 1.6}
            fill="currentColor"
            className="twinkle"
            style={{ animationDelay: `${(i * 0.31) % 3.6}s` }}
          />
        ))}
      </svg>

      <BrowserShot src="/work/ivorris-care.webp" priority className="absolute left-1/2 top-10 w-[86%] max-w-[720px] -translate-x-1/2 md:top-14" />
      <PhoneShot src="/work/guru-spices-mobile.webp" priority className="absolute right-[3%] top-24 w-[118px] md:right-[14%] md:top-32 md:w-[168px]" />

      <div className="absolute inset-x-0 bottom-0 h-28 bg-gradient-to-t from-ink to-transparent" />
    </div>
  );
}
