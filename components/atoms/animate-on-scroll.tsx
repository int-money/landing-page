"use client";

import { useEffect, useRef, useState } from "react";

// ─── Types ────────────────────────────────────────────────────────────────────
interface AnimateOnScrollProps {
  children: React.ReactNode;
  /** Stagger delay in ms (default: 0) */
  delay?: number;
  /** Slide direction (default: "up") */
  direction?: "up" | "down" | "left" | "right";
  /** Animation duration in ms (default: 400) */
  duration?: number;
  /** IntersectionObserver threshold 0–1 (default: 0.1) */
  threshold?: number;
  /** Animate only on first intersection (default: true) */
  once?: boolean;
  /** Additional classes on the wrapper div */
  className?: string;
}

// ─── Translate offsets per direction ─────────────────────────────────────────
const TRANSLATE: Record<NonNullable<AnimateOnScrollProps["direction"]>, string> = {
  up:    "translateY(24px)",
  down:  "translateY(-24px)",
  left:  "translateX(24px)",
  right: "translateX(-24px)",
};

// ─── Component ────────────────────────────────────────────────────────────────
export function AnimateOnScroll({
  children,
  delay     = 0,
  direction = "up",
  duration  = 400,
  threshold = 0.1,
  once      = true,
  className = "",
}: AnimateOnScrollProps) {
  const ref        = useRef<HTMLDivElement>(null);
  const [visible, setVisible] = useState(false);
  const [prefersReduced, setPrefersReduced] = useState(false);

  // ── Detect prefers-reduced-motion on mount (client only) ──────────────────
  useEffect(() => {
    const mq = window.matchMedia("(prefers-reduced-motion: reduce)");
    setPrefersReduced(mq.matches);

    // Also listen for changes (e.g. user toggles OS setting mid-session)
    const handler = (e: MediaQueryListEvent) => setPrefersReduced(e.matches);
    mq.addEventListener("change", handler);
    return () => mq.removeEventListener("change", handler);
  }, []);

  // ── IntersectionObserver ──────────────────────────────────────────────────
  useEffect(() => {
    // If reduced motion, immediately show — no observer needed
    if (prefersReduced) {
      setVisible(true);
      return;
    }

    const el = ref.current;
    if (!el) return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setVisible(true);
            // Disconnect after first trigger when once=true
            if (once) observer.disconnect();
          } else if (!once) {
            // Allow re-animation on scroll back when once=false
            setVisible(false);
          }
        });
      },
      { threshold }
    );

    observer.observe(el);

    // ── Cleanup ────────────────────────────────────────────────────────────
    return () => observer.disconnect();
  }, [threshold, once, prefersReduced]);

  // ── Styles ────────────────────────────────────────────────────────────────
  // Reduced motion: no transition, no offset — children appear instantly
  const style: React.CSSProperties = prefersReduced
    ? {}
    : {
        opacity:          visible ? 1 : 0,
        transform:        visible ? "translate(0, 0)" : TRANSLATE[direction],
        transition:       `opacity ${duration}ms ease, transform ${duration}ms ease`,
        transitionDelay:  `${delay}ms`,
        // Prevents CLS by reserving paint layer upfront
        willChange:       "transform, opacity",
      };

  return (
    <div ref={ref} className={className} style={style}>
      {children}
    </div>
  );
}