"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { projectsData } from "./projectsData";
import styles from "./ProjectsShowcase.module.css";

export default function ProjectsShowcase() {
  const [activeId, setActiveId] = useState<string | null>(null);
  const active = projectsData.find((p) => p.id === activeId) ?? null;

  const handleSelect = (id: string) => {
    setActiveId((prev) => (prev === id ? null : id));
  };

  return (
    <div className={styles.showcase}>
      {/* ── Main interactive area ── */}
      <div className={`${styles.layout} ${activeId ? styles.layout__expanded : ""}`}>

        {/* ── Columns strip (left thumbnails when one is active) ── */}
        <div className={`${styles.columns} ${activeId ? styles.columns__compressed : ""}`}>
          {projectsData.map((project, i) => {
            const isActive = activeId === project.id;
            return (
              <motion.button
                key={project.id}
                className={`${styles.col} ${isActive ? styles.col__active : ""} ${activeId && !isActive ? styles.col__idle : ""}`}
                onClick={() => handleSelect(project.id)}
                aria-expanded={isActive}
                aria-label={`View ${project.title}`}
                layout
                initial={{ opacity: 0, y: 28 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{
                  layout: { duration: 0.45, ease: [0.25, 0.1, 0.25, 1] },
                  opacity: { duration: 0.55, delay: i * 0.09 },
                  y: { duration: 0.55, delay: i * 0.09, ease: [0.16, 1, 0.3, 1] }
                }}
              >
                {/* Image top */}
                <div className={styles.col__img}>
                  <Image
                    src={project.image}
                    alt={project.title}
                    fill
                    sizes="(max-width: 768px) 100vw, 30vw"
                    style={{ objectFit: "cover" }}
                  />
                  <div className={styles.col__img__overlay} />
                  <span className={`chip ${styles.col__chip}`}>{project.tag}</span>
                </div>
                {/* Text bottom */}
                <div className={styles.col__body}>
                  <h3 className={styles.col__title}>{project.title}</h3>
                  <AnimatePresence initial={false}>
                    {!activeId && (
                      <motion.div
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: "auto" }}
                        exit={{ opacity: 0, height: 0 }}
                        transition={{ duration: 0.35, ease: [0.25, 0.1, 0.25, 1] }}
                        style={{ overflow: "hidden" }}
                      >
                        <p className={styles.col__overview}>{project.overview}</p>
                        <div className={styles.col__cta}>
                          <span>Explore</span>
                          <motion.svg
                            viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round"
                            style={{ width: 14, height: 14, flexShrink: 0 }}
                          >
                            <path d="M8 2v12M2 8h12" />
                          </motion.svg>
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              </motion.button>
            );
          })}
        </div>

        {/* ── Expanded project panel (right side) ── */}
        <AnimatePresence>
          {active && (
            <motion.div
              key={active.id}
              className={styles.panel}
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: 10 }}
              transition={{ duration: 0.4, ease: [0.25, 0.1, 0.25, 1] }}
              aria-label={`${active.title} project overview`}
            >
              {/* Panel hero image */}
              <div className={styles.panel__hero}>
                <Image
                  src={active.image}
                  alt={active.title}
                  fill
                  sizes="(max-width: 900px) 100vw, 55vw"
                  style={{ objectFit: "cover" }}
                  priority
                />
                <div className={styles.panel__hero__veil} />
                <div className={styles.panel__hero__content}>
                  <span className="chip">{active.tag}</span>
                  <h2 className={`display-sm ${styles.panel__title}`}>{active.title}</h2>
                </div>
              </div>

              {/* Panel body */}
              <div className={styles.panel__body}>
                {/* Metrics row */}
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
                    <span className={styles.panel__section__label}>Partners & Stakeholders</span>
                    <div className={styles.panel__chips}>
                      {active.stakeholders.map((s) => (
                        <span key={s} className="chip chip--outline">{s}</span>
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

                {/* Learn More CTA */}
                <div className={styles.panel__footer}>
                  <Link
                    href={`/projects/${active.id}`}
                    className="btn btn-primary"
                  >
                    Learn More
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" aria-hidden="true">
                      <path d="M5 12h14M12 5l7 7-7 7" />
                    </svg>
                  </Link>
                  <button
                    className={styles.panel__close}
                    onClick={() => setActiveId(null)}
                    aria-label="Close project panel"
                  >
                    <svg viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round">
                      <path d="M2 2l12 12M14 2L2 14" />
                    </svg>
                    Close
                  </button>
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </div>
  );
}
