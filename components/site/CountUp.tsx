"use client";

import { useEffect, useRef } from "react";

/**
 * Server-renders the final value; on first view (and only without reduced
 * motion) counts up from zero. Text content is swapped directly to avoid
 * re-rendering on every frame.
 */
export function CountUp({ value, decimals = 0, duration = 1400 }: { value: number; decimals?: number; duration?: number }) {
  const ref = useRef<HTMLSpanElement>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el || matchMedia("(prefers-reduced-motion: reduce)").matches || !("IntersectionObserver" in window)) return;
    const rect = el.getBoundingClientRect();
    if (rect.top < window.innerHeight && rect.bottom > 0) return; // already visible: leave final value
    const fmt = (n: number) => n.toFixed(decimals);
    el.textContent = fmt(0);
    let raf = 0;
    const io = new IntersectionObserver(
      ([entry]) => {
        if (!entry.isIntersecting) return;
        io.disconnect();
        const start = performance.now();
        const tick = (now: number) => {
          const t = Math.min(1, (now - start) / duration);
          const eased = 1 - Math.pow(1 - t, 3);
          el.textContent = fmt(value * eased);
          if (t < 1) raf = requestAnimationFrame(tick);
        };
        raf = requestAnimationFrame(tick);
      },
      { threshold: 0.4 },
    );
    io.observe(el);
    return () => {
      io.disconnect();
      cancelAnimationFrame(raf);
      el.textContent = fmt(value);
    };
  }, [value, decimals, duration]);

  return <span ref={ref}>{value.toFixed(decimals)}</span>;
}
