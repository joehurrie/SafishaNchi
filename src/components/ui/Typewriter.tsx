"use client";

import { motion } from "framer-motion";

interface TypewriterProps {
  lines: string[];
  className?: string;
  delay?: number;
}

export default function Typewriter({ lines, className, delay = 0 }: TypewriterProps) {
  return (
    <motion.h2
      className={className}
      style={{ whiteSpace: "pre-wrap" }}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-10%" }}
      variants={{
        visible: {
          transition: {
            staggerChildren: 0.03,
            delayChildren: delay,
          },
        },
        hidden: {},
      }}
    >
      {lines.map((line, lineIndex) => (
        <span key={lineIndex} style={{ display: "block" }}>
          {line.split("").map((char, charIndex) => (
            <motion.span
              key={`${lineIndex}-${charIndex}`}
              variants={{
                hidden: { opacity: 0 },
                visible: { opacity: 1 },
              }}
            >
              {char}
            </motion.span>
          ))}
        </span>
      ))}
    </motion.h2>
  );
}
