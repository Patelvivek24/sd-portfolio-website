"use client";

import { useEffect, useRef, useState } from "react";
import styles from "./StatCounter.module.scss";

export type StatCounterProps = {
  value: string;
  className?: string;
  delay?: number;
};

type ParsedStat = {
  target: number;
  suffix: string;
};

function parseStatValue(value: string): ParsedStat | null {
  const match = value.match(/^(\d+)(.*)$/);
  if (!match) return null;

  return {
    target: Number(match[1]),
    suffix: match[2],
  };
}

function easeOutCubic(progress: number): number {
  return 1 - (1 - progress) ** 3;
}

function classNames(...parts: (string | undefined)[]) {
  return parts.filter(Boolean).join(" ");
}

export function StatCounter({ value, className, delay = 0 }: StatCounterProps) {
  const parsed = parseStatValue(value);
  const ref = useRef<HTMLSpanElement>(null);
  const hasAnimated = useRef(false);
  const [display, setDisplay] = useState(() =>
    parsed ? `0${parsed.suffix}` : value,
  );

  useEffect(() => {
    const element = ref.current;
    if (!element || hasAnimated.current) return;

    const stat = parseStatValue(value);
    const prefersReducedMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)",
    ).matches;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (!entry.isIntersecting || hasAnimated.current) return;

        hasAnimated.current = true;
        observer.disconnect();

        if (!stat || prefersReducedMotion) {
          setDisplay(value);
          return;
        }

        const startAnimation = () => {
          const startTime = performance.now();
          const duration = 2000;

          const tick = (now: number) => {
            const progress = Math.min((now - startTime) / duration, 1);
            const eased = easeOutCubic(progress);
            const current = Math.round(eased * stat.target);
            setDisplay(`${current}${stat.suffix}`);

            if (progress < 1) {
              requestAnimationFrame(tick);
            } else {
              setDisplay(value);
            }
          };

          requestAnimationFrame(tick);
        };

        if (delay > 0) {
          window.setTimeout(startAnimation, delay);
        } else {
          startAnimation();
        }
      },
      { threshold: 0.35 },
    );

    observer.observe(element);

    return () => observer.disconnect();
  }, [value, delay]);

  return (
    <span
      ref={ref}
      className={classNames(styles.statCounter, className)}
      aria-label={value}
    >
      {display}
    </span>
  );
}
