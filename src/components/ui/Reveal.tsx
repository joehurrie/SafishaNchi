"use client";

import { useRef, ReactNode, createContext, useContext } from "react";
import { motion, useInView } from "framer-motion";

// ── Context to detect if RevealItem is inside a RevealGroup ────
const RevealGroupContext = createContext<boolean>(false);

// ── SINGLE SOURCE OF TRUTH for all page animations ─────────────
// These values match the recycling page — the approved standard.
export const SPRING: [number, number, number, number] = [0.16, 1, 0.3, 1];
export const DURATION = 0.7;
export const STAGGER = 0.1;
export const Y_OFFSET = 24;
export const X_OFFSET = 28;
export const VIEWPORT_MARGIN = "-60px";

// ── Shared helpers ─────────────────────────────────────────────
function getInitial(direction: "up" | "left" | "right" | "none") {
  return {
    opacity: 0,
    y: direction === "up" ? Y_OFFSET : 0,
    x: direction === "left" ? -X_OFFSET : direction === "right" ? X_OFFSET : 0,
    scale: direction === "none" ? 0.97 : 1,
  };
}

const VISIBLE = { opacity: 1, y: 0, x: 0, scale: 1 };

// ══════════════════════════════════════════════════════════════
//  Reveal — standalone, triggered by own InView
// ══════════════════════════════════════════════════════════════
interface RevealProps {
  children: ReactNode;
  delay?: number;
  direction?: "up" | "left" | "right" | "none";
  className?: string;
  once?: boolean;
}

export default function Reveal({
  children,
  delay = 0,
  direction = "up",
  className,
  once = true,
}: RevealProps) {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once, margin: VIEWPORT_MARGIN });
  const initial = getInitial(direction);

  return (
    <motion.div
      ref={ref}
      className={className}
      initial={initial}
      animate={isInView ? VISIBLE : initial}
      transition={{ duration: DURATION, delay, ease: SPRING }}
    >
      {children}
    </motion.div>
  );
}

// ══════════════════════════════════════════════════════════════
//  RevealGroup — staggered container
// ══════════════════════════════════════════════════════════════
const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: STAGGER,
      delayChildren: 0.05,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: Y_OFFSET },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: DURATION, ease: SPRING },
  },
};

export function RevealGroup({
  children,
  className,
  once = true,
}: {
  children: ReactNode;
  className?: string;
  once?: boolean;
}) {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once, margin: VIEWPORT_MARGIN });

  return (
    <RevealGroupContext.Provider value={true}>
      <motion.div
        ref={ref}
        className={className}
        variants={containerVariants}
        initial="hidden"
        animate={isInView ? "visible" : "hidden"}
      >
        {children}
      </motion.div>
    </RevealGroupContext.Provider>
  );
}

// ══════════════════════════════════════════════════════════════
//  RevealItem — child of RevealGroup OR standalone
// ══════════════════════════════════════════════════════════════
export function RevealItem({
  children,
  className,
  delay,
  direction = "up",
}: {
  children: ReactNode;
  className?: string;
  delay?: number;
  direction?: "up" | "left" | "right" | "none";
}) {
  const inGroup = useContext(RevealGroupContext);
  // Standalone mode: not inside a RevealGroup OR has explicit delay or non-default direction
  const standalone = !inGroup || delay !== undefined || direction !== "up";
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: VIEWPORT_MARGIN });

  if (standalone) {
    const initial = getInitial(direction);
    return (
      <motion.div
        ref={ref}
        className={className}
        initial={initial}
        animate={isInView ? VISIBLE : initial}
        transition={{ duration: DURATION, delay: delay ?? 0, ease: SPRING }}
      >
        {children}
      </motion.div>
    );
  }

  // Group mode: participates in parent RevealGroup stagger
  return (
    <motion.div variants={itemVariants} className={className}>
      {children}
    </motion.div>
  );
}
