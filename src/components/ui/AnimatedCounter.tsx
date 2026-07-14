"use client";

import { useEffect, useRef, useState } from "react";
import { useInView } from "framer-motion";

interface AnimatedCounterProps {
  target: number;
  suffix?: string;
  prefix?: string;
  duration?: number;
  delay?: number;
  className?: string;
  style?: React.CSSProperties;
}

export default function AnimatedCounter({
  target,
  suffix = "",
  prefix = "",
  duration = 1800,
  delay = 0,
  className,
  style,
}: AnimatedCounterProps) {
  const ref = useRef<HTMLSpanElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-50px" });
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (!isInView) return;
    
    const timeout = setTimeout(() => {
      const startTime = performance.now();
      const isDecimal = target % 1 !== 0;

      const step = (timestamp: number) => {
        const elapsed = timestamp - startTime;
        const progress = Math.min(elapsed / duration, 1);
        // Ease-out quart for snappier finish
        const eased = 1 - Math.pow(1 - progress, 4);
        setCount(isDecimal ? Math.round(eased * target * 10) / 10 : Math.round(eased * target));
        if (progress < 1) requestAnimationFrame(step);
      };
      requestAnimationFrame(step);
    }, delay);

    return () => clearTimeout(timeout);
  }, [isInView, target, duration, delay]);

  return (
    <span ref={ref} className={className} style={{ fontFamily: "var(--font-head)", fontVariantNumeric: "tabular-nums", ...style }}>
      {prefix}{count.toLocaleString()}{suffix}
    </span>
  );
}
