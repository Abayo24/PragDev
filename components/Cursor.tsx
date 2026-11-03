"use client";
import { useEffect, useRef } from "react";

export default function Cursor() {
  const dotRef = useRef<HTMLDivElement>(null);
  const ringRef = useRef<HTMLDivElement>(null);
  const mouse = useRef({ x: 0, y: 0 });
  const ring = useRef({ x: 0, y: 0 });
  const rafRef = useRef<number>(0);

  useEffect(() => {
    if (!window.matchMedia("(pointer: fine)").matches) return;

    const onMove = (e: MouseEvent) => {
      mouse.current = { x: e.clientX, y: e.clientY };
    };
    document.addEventListener("mousemove", onMove);

    const animate = () => {
      ring.current.x += (mouse.current.x - ring.current.x) * 0.12;
      ring.current.y += (mouse.current.y - ring.current.y) * 0.12;

      if (dotRef.current) {
        dotRef.current.style.transform = `translate3d(${mouse.current.x}px, ${mouse.current.y}px, 0) translate(-50%, -50%)`;
      }
      if (ringRef.current) {
        ringRef.current.style.transform = `translate3d(${ring.current.x}px, ${ring.current.y}px, 0) translate(-50%, -50%)`;
      }
      rafRef.current = requestAnimationFrame(animate);
    };
    rafRef.current = requestAnimationFrame(animate);

    /* Hover effects */
    const onEnter = () => {
      dotRef.current?.classList.add("opacity-0");
      ringRef.current?.classList.add("!w-[60px]", "!h-[60px]", "!border-orange", "!bg-orange/5");
    };
    const onLeave = () => {
      dotRef.current?.classList.remove("opacity-0");
      ringRef.current?.classList.remove("!w-[60px]", "!h-[60px]", "!border-orange", "!bg-orange/5");
    };
    // Delegated so links on pages reached by client-side navigation also respond.
    const selector = "a, button, [role='button'], summary";
    const onOver = (e: MouseEvent) => {
      if ((e.target as Element).closest?.(selector)) onEnter();
    };
    const onOut = (e: MouseEvent) => {
      if ((e.target as Element).closest?.(selector)) onLeave();
    };
    document.addEventListener("mouseover", onOver);
    document.addEventListener("mouseout", onOut);

    return () => {
      document.removeEventListener("mousemove", onMove);
      cancelAnimationFrame(rafRef.current);
      document.removeEventListener("mouseover", onOver);
      document.removeEventListener("mouseout", onOut);
    };
  }, []);

  return (
    <>
      {/* Dot */}
      <div
        ref={dotRef}
        className="hidden [@media(pointer:fine)]:block fixed top-0 left-0 z-[10000] w-3 h-3 bg-orange rounded-full pointer-events-none transition-opacity duration-200 mix-blend-multiply"
        style={{ willChange: "transform" }}
      />
      {/* Ring */}
      <div
        ref={ringRef}
        className="hidden [@media(pointer:fine)]:block fixed top-0 left-0 z-[9999] w-10 h-10 border border-ink rounded-full pointer-events-none transition-[width,height,border-color,background] duration-300"
        style={{ willChange: "transform" }}
      />
    </>
  );
}
