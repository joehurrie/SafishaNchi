"use client";

import { motion } from "framer-motion";
import { ReactNode } from "react";

interface MotionCardProps {
  children: ReactNode;
  className?: string;
  style?: React.CSSProperties;
}

export default function MotionCard({ children, className, style }: MotionCardProps) {
  return (
    <motion.div
      whileHover={{ y: -6 }}
      whileTap={{ scale: 0.98 }}
      className={className}
      style={{ ...style, height: "100%", width: "100%" }}
    >
      {children}
    </motion.div>
  );
}

