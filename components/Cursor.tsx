"use client";
import { useEffect, useRef } from "react";

export default function Cursor() {
  const dotRef = useRef<HTMLDivElement>(null);
  const ringRef = useRef<HTMLDivElement>(null);
  const mouse = useRef({ x: 0, y: 0 });
  const ring = useRef({ x: 0, y: 0 });
  const rafRef = useRef<number>(0);

  useEffect(() => {
    const onMove = (e: MouseEvent) => {
      mouse.current = { x: e.clientX, y: e.clientY };
    };
    document.addEventListener("mousemove", onMove);

    const animate = () => {
      ring.current.x += (mouse.current.x - ring.current.x) * 0.12;
      ring.current.y += (mouse.current.y - ring.current.y) * 0.12;

      if (dotRef.current) {
        dotRef.current.style.left = `${mouse.current.x}px`;
        dotRef.current.style.top = `${mouse.current.y}px`;
      }
      if (ringRef.current) {
        ringRef.current.style.left = `${ring.current.x}px`;
        ringRef.current.style.top = `${ring.current.y}px`;
      }
      rafRef.current = requestAnimationFrame(animate);
    };
    rafRef.current = requestAnimationFrame(animate);

    /* Hover effects */
    const onEnter = () => {
      dotRef.current?.classList.add("scale-0");
      ringRef.current?.classList.add("!w-[60px]", "!h-[60px]", "!border-orange", "!bg-orange/5");
    };
    const onLeave = () => {
      dotRef.current?.classList.remove("scale-0");
      ringRef.current?.classList.remove("!w-[60px]", "!h-[60px]", "!border-orange", "!bg-orange/5");
    };
    const interactives = document.querySelectorAll("a, button, [role='button']");
    interactives.forEach((el) => {
      el.addEventListener("mouseenter", onEnter);
      el.addEventListener("mouseleave", onLeave);
    });

    return () => {
      document.removeEventListener("mousemove", onMove);
      cancelAnimationFrame(rafRef.current);
      interactives.forEach((el) => {
        el.removeEventListener("mouseenter", onEnter);
        el.removeEventListener("mouseleave", onLeave);
      });
    };
  }, []);

  return (
    <>
      {/* Dot */}
      <div
        ref={dotRef}
        className="fixed z-[10000] w-3 h-3 bg-orange rounded-full pointer-events-none -translate-x-1/2 -translate-y-1/2 transition-transform duration-200 mix-blend-multiply"
        style={{ willChange: "left, top" }}
      />
      {/* Ring */}
      <div
        ref={ringRef}
        className="fixed z-[9999] w-10 h-10 border border-ink rounded-full pointer-events-none -translate-x-1/2 -translate-y-1/2 transition-[width,height,border-color,background] duration-300"
        style={{ willChange: "left, top" }}
      />
    </>
  );
}
