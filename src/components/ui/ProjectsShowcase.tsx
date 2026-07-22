"use client";

import { useState, useRef, useCallback, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { projectsData } from "./projectsData";
import styles from "./ProjectsShowcase.module.css";

export default function ProjectsShowcase() {
  const [activeId, setActiveId] = useState<string | null>(null);
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);
  const [canScrollLeft, setCanScrollLeft] = useState(false);
  const [canScrollRight, setCanScrollRight] = useState(true);
  const trackRef = useRef<HTMLDivElement>(null);
  const active = projectsData.find((p) => p.id === activeId) ?? null;

  // The "active" card index: hovered one takes priority, otherwise default to index 1
  const activeCardIndex = hoveredIndex !== null ? hoveredIndex : 1;

  // Update scroll button states
  const updateScrollState = useCallback(() => {
    const el = trackRef.current;
    if (!el) return;
    setCanScrollLeft(el.scrollLeft > 4);
    setCanScrollRight(el.scrollLeft + el.clientWidth < el.scrollWidth - 4);
  }, []);

  useEffect(() => {
    const el = trackRef.current;
    if (!el) return;
    updateScrollState();
    el.addEventListener("scroll", updateScrollState, { passive: true });
    return () => el.removeEventListener("scroll", updateScrollState);
  }, [updateScrollState]);

  const scroll = (dir: "left" | "right") => {
    const el = trackRef.current;
    if (!el) return;
    const amount = el.clientWidth * 0.75;
    el.scrollBy({ left: dir === "left" ? -amount : amount, behavior: "smooth" });
  };

  // Close modal on Escape
  const handleKey = useCallback((e: KeyboardEvent) => {
    if (e.key === "Escape") setActiveId(null);
  }, []);

  useEffect(() => {
    if (activeId) {
      document.addEventListener("keydown", handleKey);
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.removeEventListener("keydown", handleKey);
      document.body.style.overflow = "";
    };
  }, [activeId, handleKey]);

  return (
    <div className={styles.showcase}>
      {/* ── Scroll controls ── */}
      <div className={styles.controls}>
        <button
          className={`${styles.scroll__btn} ${!canScrollLeft ? styles["scroll__btn--disabled"] : ""}`}
          onClick={() => scroll("left")}
          aria-label="Scroll projects left"
          disabled={!canScrollLeft}
        >
          <svg viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <path d="M10 3L5 8l5 5" />
          </svg>
        </button>
        <button
          className={`${styles.scroll__btn} ${!canScrollRight ? styles["scroll__btn--disabled"] : ""}`}
          onClick={() => scroll("right")}
          aria-label="Scroll projects right"
          disabled={!canScrollRight}
        >
          <svg viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <path d="M6 3l5 5-5 5" />
          </svg>
        </button>
      </div>

      {/* ── Horizontal track ── */}
      <div className={styles.track} ref={trackRef} role="list">
        {projectsData.map((project, i) => {
          const isActive = i === activeCardIndex;
          return (
            <motion.button
              key={project.id}
              className={`${styles.card} ${isActive ? styles["card--active"] : ""}`}
              onClick={() => setActiveId(project.id)}
              onMouseEnter={() => setHoveredIndex(i)}
              onMouseLeave={() => setHoveredIndex(null)}
              role="listitem"
              aria-label={`View ${project.title}`}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.7, delay: i * 0.08, ease: [0.16, 1, 0.3, 1] }}
              whileTap={{ scale: 0.97 }}
            >
              {/* Image */}
              <div className={styles.card__img}>
                <Image
                  src={project.image}
                  alt={project.title}
                  fill
                  sizes="(max-width: 768px) 300px, 360px"
                  style={{ objectFit: "cover" }}
                />
                <span className={styles.card__tag}>{project.tag}</span>
              </div>

              {/* Body */}
              <div className={styles.card__body}>
                <h3 className={styles.card__title}>{project.title}</h3>
                <p className={styles.card__excerpt}>
                  {project.overview.slice(0, 110)}…
                </p>
                <div className={styles.card__cta} aria-hidden="true">
                  <span>View project</span>
                  <svg viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={styles.card__arrow}>
                    <path d="M3 8h10M9 4l4 4-4 4" />
                  </svg>
                </div>
              </div>
            </motion.button>
          );
        })}
      </div>

      {/* ── Full-screen modal (unchanged behaviour) ── */}
      <AnimatePresence>
        {active && (
          <>
            {/* Backdrop */}
            <motion.div
              className={styles.backdrop}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.25 }}
              onClick={() => setActiveId(null)}
              aria-hidden="true"
            />

            {/* Panel */}
            <motion.div
              key={active.id}
              className={styles.panel}
              role="dialog"
              aria-modal="true"
              aria-label={`${active.title} project details`}
              initial={{ opacity: 0, scale: 0.97 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.98 }}
              transition={{ duration: 0.28, ease: [0.16, 1, 0.3, 1] }}
            >
              {/* Close */}
              <button className={styles.panel__close} onClick={() => setActiveId(null)} aria-label="Close">
                <svg viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round">
                  <path d="M2 2l12 12M14 2L2 14" />
                </svg>
              </button>

              {/* Hero */}
              <div className={styles.panel__hero}>
                <Image src={active.image} alt={active.title} fill sizes="100vw" style={{ objectFit: "cover", objectPosition: "center 30%" }} priority />
                <div className={styles.panel__hero__overlay} />
                <div className={styles.panel__hero__content}>
                  <span className={styles.panel__tag}>{active.tag}</span>
                  <h2 className={`display-lg ${styles.panel__title}`}>{active.title}</h2>
                </div>
              </div>

              {/* Body */}
              <div className={styles.panel__body}>
                {/* Metrics */}
                <div className={styles.panel__metrics}>
                  {active.metrics.map((m) => (
                    <div key={m.lbl} className={styles.panel__metric}>
                      <span className={styles.panel__metric__val}>{m.val}</span>
                      <span className={styles.panel__metric__lbl}>{m.lbl}</span>
                    </div>
                  ))}
                </div>

                <p className={styles.panel__overview}>{active.overview}</p>

                {active.stakeholders.length > 0 && (
                  <div className={styles.panel__section}>
                    <span className={styles.panel__section__label}>Partners & Stakeholders</span>
                    <div className={styles.panel__chips}>
                      {active.stakeholders.map((s) => (
                        <span key={s} className={styles.panel__chip}>{s}</span>
                      ))}
                    </div>
                  </div>
                )}

                <div className={styles.panel__section}>
                  <span className={styles.panel__section__label}>Measured Impact</span>
                  {active.impact.map((item) => (
                    <div key={item.label} className={styles.panel__impact__row}>
                      <span className={styles.panel__impact__label}>{item.label}</span>
                      <span className={styles.panel__impact__value}>{item.value}</span>
                    </div>
                  ))}
                </div>

                <div className={styles.panel__footer}>
                  <Link href={`/projects/${active.id}`} className="btn btn-primary">
                    Full Project Story
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" aria-hidden="true"><path d="M5 12h14M12 5l7 7-7 7" /></svg>
                  </Link>
                  <button className={styles.panel__dismiss} onClick={() => setActiveId(null)}>Close</button>
                </div>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </div>
  );
}
