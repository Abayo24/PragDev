"use client";
import { useEffect, useRef, useState } from "react";

export default function Loader() {
  const [progress, setProgress] = useState(0);
  const [hidden, setHidden] = useState(false);
  const [fading, setFading] = useState(false);

  useEffect(() => {
    let p = 0;
    const iv = setInterval(() => {
      p = Math.min(p + Math.random() * 18, 100);
      setProgress(Math.floor(p));
      if (p >= 100) {
        clearInterval(iv);
        setTimeout(() => {
          setFading(true);
          setTimeout(() => setHidden(true), 600);
        }, 300);
      }
    }, 80);
    return () => clearInterval(iv);
  }, []);

  if (hidden) return null;

  return (
    <div
      className={`fixed inset-0 z-[99999] bg-ink flex flex-col items-center justify-center gap-6 transition-opacity duration-500 ${fading ? "opacity-0" : "opacity-100"}`}
    >
      <p className="font-display text-cream text-xl font-bold tracking-tighter3">
        PragDev Softwares
      </p>
      <div className="w-56 h-0.5 bg-white/10 rounded-full overflow-hidden">
        <div
          className="h-full bg-orange rounded-full transition-[width] duration-500"
          style={{ width: `${progress}%` }}
        />
      </div>
      <span className="font-mono text-white/35 text-xs tracking-widest">
        {progress}%
      </span>
    </div>
  );
}
