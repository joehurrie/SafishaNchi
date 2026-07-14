"use client";

import { useState, useEffect, useCallback } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { projectsData } from "./projectsData";
import styles from "./ProjectsShowcase.module.css";

export default function ProjectsShowcase() {
  const [activeId, setActiveId] = useState<string | null>(null);
  const active = projectsData.find((p) => p.id === activeId) ?? null;

  // Close on Escape key
  const handleKey = useCallback(
    (e: KeyboardEvent) => { if (e.key === "Escape") setActiveId(null); },
    []
  );
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
      {/* ── Project cards grid ── */}
      <div className={styles.grid}>
        {projectsData.map((project, i) => (
          <motion.button
            key={project.id}
            className={styles.card}
            onClick={() => setActiveId(project.id)}
            aria-label={`View ${project.title}`}
            initial={{ opacity: 0, y: 32 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{
              opacity: { duration: 0.55, delay: i * 0.1 },
              y: { duration: 0.6, delay: i * 0.1, ease: [0.16, 1, 0.3, 1] },
            }}
            whileHover={{ y: -6, transition: { duration: 0.3 } }}
            whileTap={{ scale: 0.98 }}
          >
            {/* Image */}
            <div className={styles.card__img}>
              <Image
                src={project.image}
                alt={project.title}
                fill
                sizes="(max-width: 640px) 100vw, (max-width: 1100px) 50vw, 33vw"
                style={{ objectFit: "cover" }}
              />
              <div className={styles.card__img__overlay} />
              <span className={styles.card__tag}>{project.tag}</span>
            </div>
            {/* Body */}
            <div className={styles.card__body}>
              <h3 className={styles.card__title}>{project.title}</h3>
              <div className={styles.card__cta}>
                <span>View project</span>
                <svg viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" className={styles.card__cta__arrow}>
                  <path d="M3 8h10M9 4l4 4-4 4" />
                </svg>
              </div>
            </div>
          </motion.button>
        ))}
      </div>

      {/* ── Full-screen overlay ── */}
      <AnimatePresence>
        {active && (
          <>
            {/* Backdrop */}
            <motion.div
              className={styles.backdrop}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.3 }}
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
              initial={{ opacity: 0, scale: 0.96 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.97 }}
              transition={{ duration: 0.35, ease: [0.16, 1, 0.3, 1] }}
            >
              {/* Close button */}
              <button
                className={styles.panel__close}
                onClick={() => setActiveId(null)}
                aria-label="Close project panel"
              >
                <svg viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round">
                  <path d="M2 2l12 12M14 2L2 14" />
                </svg>
              </button>

              {/* Hero image */}
              <div className={styles.panel__hero}>
                <Image
                  src={active.image}
                  alt={active.title}
                  fill
                  sizes="100vw"
                  style={{ objectFit: "cover", objectPosition: "center 30%" }}
                  priority
                />
                <div className={styles.panel__hero__overlay} />
                <div className={styles.panel__hero__content}>
                  <span className={styles.panel__tag}>{active.tag}</span>
                  <h2 className={`display-lg ${styles.panel__title}`}>{active.title}</h2>
                </div>
              </div>

              {/* Scrollable body */}
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

                {/* Overview */}
                <p className={styles.panel__overview}>{active.overview}</p>

                {/* Stakeholders */}
                {active.stakeholders.length > 0 && (
                  <div className={styles.panel__section}>
                    <span className={styles.panel__section__label}>Partners &amp; Stakeholders</span>
                    <div className={styles.panel__chips}>
                      {active.stakeholders.map((s) => (
                        <span key={s} className={styles.panel__chip}>{s}</span>
                      ))}
                    </div>
                  </div>
                )}

                {/* Impact rows */}
                <div className={styles.panel__section}>
                  <span className={styles.panel__section__label}>Measured Impact</span>
                  {active.impact.map((item) => (
                    <div key={item.label} className={styles.panel__impact__row}>
                      <span className={styles.panel__impact__label}>{item.label}</span>
                      <span className={styles.panel__impact__value}>{item.value}</span>
                    </div>
                  ))}
                </div>

                {/* Footer CTAs */}
                <div className={styles.panel__footer}>
                  <Link href={`/projects/${active.id}`} className="btn btn-primary">
                    Full Project Story
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" aria-hidden="true">
                      <path d="M5 12h14M12 5l7 7-7 7" />
                    </svg>
                  </Link>
                  <button className={styles.panel__dismiss} onClick={() => setActiveId(null)}>
                    Close
                  </button>
                </div>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </div>
  );
}
