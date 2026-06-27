"use client";

import { useEffect, useRef, useState } from "react";
import { motion, useInView } from "framer-motion";
import styles from "./CarbonGraph.module.css";

const months2024 = ["Jan", "Mar", "May", "Jul", "Sep", "Nov"];
const months2025 = ["Jan", "Mar", "May", "Jul", "Sep", "Nov"];

// CO2 tonnes saved per bi-monthly period
const data = [
  // 2024
  { label: "Jan '24", value: 12 },
  { label: "Mar '24", value: 19 },
  { label: "May '24", value: 25 },
  { label: "Jul '24", value: 34 },
  { label: "Sep '24", value: 41 },
  { label: "Nov '24", value: 50 },
  // 2025
  { label: "Jan '25", value: 60 },
  { label: "Mar '25", value: 74 },
  { label: "May '25", value: 89 },
  { label: "Jul '25", value: 105 },
  { label: "Sep '25", value: 122 },
  { label: "Nov '25", value: 141 },
];

const W = 280;
const H = 110;
const PAD = { top: 12, right: 12, bottom: 24, left: 28 };
const plotW = W - PAD.left - PAD.right;
const plotH = H - PAD.top - PAD.bottom;

const maxVal = Math.max(...data.map((d) => d.value));

function getPoints() {
  return data.map((d, i) => ({
    x: PAD.left + (i / (data.length - 1)) * plotW,
    y: PAD.top + plotH - (d.value / maxVal) * plotH,
    ...d,
  }));
}

export default function CarbonGraph() {
  const ref = useRef<SVGSVGElement>(null);
  const isInView = useInView(ref as React.RefObject<Element>, { once: true, margin: "-100px" });
  const [drawn, setDrawn] = useState(false);
  const [hovered, setHovered] = useState<number | null>(null);

  useEffect(() => {
    if (isInView) setDrawn(true);
  }, [isInView]);

  const points = getPoints();
  const polylinePoints = points.map((p) => `${p.x},${p.y}`).join(" ");

  // Build smooth path
  const pathD = points.reduce((acc, p, i) => {
    if (i === 0) return `M ${p.x} ${p.y}`;
    const prev = points[i - 1];
    const cx = (prev.x + p.x) / 2;
    return `${acc} C ${cx} ${prev.y} ${cx} ${p.y} ${p.x} ${p.y}`;
  }, "");

  // Area fill
  const areaD = `${pathD} L ${points[points.length - 1].x} ${PAD.top + plotH} L ${points[0].x} ${PAD.top + plotH} Z`;

  return (
    <div className={styles.widget} aria-label="Carbon savings over 2 years">
      <div className={styles.header}>
        <span className={styles.badge}>CO₂ Saved</span>
        <span className={styles.total}>270 Tonnes</span>
      </div>
      <p className={styles.period}>Jan 2024 — Nov 2025</p>

      <svg
        ref={ref}
        viewBox={`0 0 ${W} ${H}`}
        className={styles.svg}
        aria-hidden="true"
      >
        <defs>
          <linearGradient id="cg-fill" x1="0" y1="0" x2="0" y2="1">
            <stop offset="0%" stopColor="#C8F135" stopOpacity="0.25" />
            <stop offset="100%" stopColor="#C8F135" stopOpacity="0" />
          </linearGradient>
          <linearGradient id="cg-line" x1="0" y1="0" x2="1" y2="0">
            <stop offset="0%" stopColor="#C8F135" stopOpacity="0.4" />
            <stop offset="100%" stopColor="#C8F135" stopOpacity="1" />
          </linearGradient>
          <clipPath id="cg-clip">
            <motion.rect
              x={PAD.left}
              y={0}
              height={H}
              initial={{ width: 0 }}
              animate={{ width: drawn ? plotW : 0 }}
              transition={{ duration: 1.8, ease: [0.16, 1, 0.3, 1] }}
            />
          </clipPath>
        </defs>

        {/* Y-axis grid lines */}
        {[0, 0.25, 0.5, 0.75, 1].map((t) => {
          const y = PAD.top + plotH - t * plotH;
          return (
            <line
              key={t}
              x1={PAD.left}
              y1={y}
              x2={PAD.left + plotW}
              y2={y}
              stroke="rgba(255,255,255,0.06)"
              strokeWidth="1"
            />
          );
        })}

        {/* Y-axis labels */}
        {[0, 70, 141].map((v, i) => {
          const y = PAD.top + plotH - (v / maxVal) * plotH;
          return (
            <text
              key={i}
              x={PAD.left - 4}
              y={y + 4}
              textAnchor="end"
              className={styles.axisLabel}
            >
              {v}T
            </text>
          );
        })}

        {/* X labels: years */}
        <text x={PAD.left} y={H - 4} className={styles.axisLabel}>2024</text>
        <text x={PAD.left + plotW} y={H - 4} textAnchor="end" className={styles.axisLabel}>2025</text>

        {/* Area fill */}
        <path d={areaD} fill="url(#cg-fill)" clipPath="url(#cg-clip)" />

        {/* Main line */}
        <path
          d={pathD}
          fill="none"
          stroke="url(#cg-line)"
          strokeWidth="2"
          strokeLinecap="round"
          clipPath="url(#cg-clip)"
        />

        {/* Hover dots */}
        {points.map((p, i) => (
          <g key={i}>
            <circle
              cx={p.x}
              cy={p.y}
              r={12}
              fill="transparent"
              style={{ cursor: "pointer" }}
              onMouseEnter={() => setHovered(i)}
              onMouseLeave={() => setHovered(null)}
            />
            {hovered === i && (
              <>
                <circle cx={p.x} cy={p.y} r={4} fill="#C8F135" opacity={0.9} />
                <rect
                  x={p.x - 28}
                  y={p.y - 28}
                  width={56}
                  height={20}
                  rx={4}
                  fill="rgba(14,21,18,0.9)"
                />
                <text
                  x={p.x}
                  y={p.y - 14}
                  textAnchor="middle"
                  className={styles.tooltip}
                >
                  {p.value}T
                </text>
              </>
            )}
          </g>
        ))}

        {/* End dot (glowing) */}
        {drawn && (
          <motion.circle
            cx={points[points.length - 1].x}
            cy={points[points.length - 1].y}
            r={4}
            fill="#C8F135"
            initial={{ opacity: 0, scale: 0 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 1.7, duration: 0.4 }}
          />
        )}
      </svg>

      <div className={styles.footer}>
        <span className={styles.trend}>↑ 1,075% growth</span>
        <span className={styles.sub}>since operations started</span>
      </div>
    </div>
  );
}
