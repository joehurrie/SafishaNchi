"use client";

import { useRef, ReactNode } from "react";
import { motion, useInView } from "framer-motion";

interface RevealProps {
  children: ReactNode;
  delay?: number;
  direction?: "up" | "left" | "right" | "none";
  className?: string;
  once?: boolean;
}

// Spring easing for premium, professional feel
const spring: [number, number, number, number] = [0.16, 1, 0.3, 1];

export default function Reveal({
  children,
  delay = 0,
  direction = "up",
  className,
  once = true,
}: RevealProps) {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once, margin: "-50px" });

  const initial = {
    opacity: 0,
    y: direction === "up" ? 30 : 0,
    x: direction === "left" ? -30 : direction === "right" ? 30 : 0,
    scale: direction === "none" ? 0.98 : 1, // Subtle scale if no direction
  };

  return (
    <motion.div
      ref={ref}
      className={className}
      initial={initial}
      animate={isInView ? { opacity: 1, y: 0, x: 0, scale: 1 } : initial}
      transition={{
        duration: 0.9,
        delay,
        ease: spring,
      }}
    >
      {children}
    </motion.div>
  );
}

// Optional wrapper for staggered children using variants
const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.1,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: { 
    opacity: 1, 
    y: 0,
    transition: {
      duration: 0.9,
      ease: spring,
    }
  },
};

export function RevealGroup({ children, className, once = true }: { children: ReactNode, className?: string, once?: boolean }) {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once, margin: "-50px" });

  return (
    <motion.div
      ref={ref}
      className={className}
      variants={containerVariants}
      initial="hidden"
      animate={isInView ? "visible" : "hidden"}
    >
      {children}
    </motion.div>
  );
}

export function RevealItem({ children, className }: { children: ReactNode, className?: string }) {
  return (
    <motion.div variants={itemVariants} className={className}>
      {children}
    </motion.div>
  );
}
