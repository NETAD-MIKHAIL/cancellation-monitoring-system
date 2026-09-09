import { useEffect, useRef, useState } from "react";
import { animate, useInView, useReducedMotion } from "framer-motion";

/* ------------------------------------------------------------------ */
/*  AnimatedStat                                                       */
/*  ------------------------------------------------------------------ */
/*  Counts a numeric stat value up when scrolled into view, preserving
 *  the original formatting (commas, decimal places, and trailing
 *  symbols such as "+"). Respects the user's reduced-motion setting.   */
/* ------------------------------------------------------------------ */

interface AnimatedStatProps {
  /** e.g. "7,370+", "120+", "1.5x", "15" */
  value: string;
  className?: string;
}

export default function AnimatedStat({ value, className }: AnimatedStatProps) {
  const prefersReducedMotion = useReducedMotion();
  const ref = useRef<HTMLSpanElement>(null);
  const inView = useInView(ref, { once: true, amount: 0.6 });
  const [display, setDisplay] = useState(value);

  useEffect(() => {
    if (prefersReducedMotion) {
      setDisplay(value);
      return;
    }
    if (!inView) return;

    const match = value.match(/^(.*?)([\d,.]+)(.*)$/);
    if (!match) {
      setDisplay(value);
      return;
    }

    const [, prefix, rawNumber, suffix] = match;
    const hasDecimal = rawNumber.includes(".");
    const decimals = hasDecimal ? (rawNumber.split(".")[1] || "").length : 0;
    const target = parseFloat(rawNumber.replace(/,/g, ""));

    if (Number.isNaN(target)) {
      setDisplay(value);
      return;
    }

    const controls = animate(0, target, {
      duration: 1.6,
      ease: "easeOut",
      onUpdate: (latest) => {
        const formatted = hasDecimal
          ? latest.toLocaleString("en-US", {
              minimumFractionDigits: decimals,
              maximumFractionDigits: decimals,
            })
          : Math.round(latest).toLocaleString("en-US");
        setDisplay(`${prefix}${formatted}${suffix}`);
      },
    });

    return () => controls.stop();
  }, [inView, prefersReducedMotion, value]);

  return (
    <span ref={ref} className={className}>
      {display}
    </span>
  );
}