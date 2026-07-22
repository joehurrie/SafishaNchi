"use client";

import { motion, AnimatePresence } from "framer-motion";
import { useEffect } from "react";
import Image from "next/image";
import styles from "./ProjectModal.module.css";

export interface ProjectData {
  id: string;
  title: string;
  image: string;
  overview: string;
  stakeholders: string[];
  impact: { label: string; value: string }[];
  aboutTheProject: string;
}

interface ProjectModalProps {
  project: ProjectData | null;
  onClose: () => void;
}

export default function ProjectModal({ project, onClose }: ProjectModalProps) {
  // Lock body scroll when modal is open
  useEffect(() => {
    if (project) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [project]);

  // Handle ESC key to close
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [onClose]);

  return (
    <AnimatePresence>
      {project && (
        <motion.div
          className={styles.fullscreen}
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: 40 }}
          transition={{ duration: 0.55, ease: [0.16, 1, 0.3, 1] }}
        >
          {/* Close Button — top-right, very prominent */}
          <button
            className={styles.closeBtn}
            onClick={onClose}
            aria-label="Close project"
            id="project-modal-close"
          >
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
              <path d="M18 6 6 18M6 6l12 12" />
            </svg>
            <span>Close</span>
          </button>

          {/* Split layout: image left, details right */}
          <div className={styles.layout}>
            {/* Left: full-height image */}
            <div className={styles.imagePanel}>
              <Image
                src={project.image}
                alt={project.title}
                fill
                style={{ objectFit: "cover" }}
                priority
              />
              {/* Subtle bottom gradient for text on image */}
              <div className={styles.imageGrad} />
              {/* Title overlay on image */}
              <div className={styles.imageMeta}>
                <span className={styles.imageTag}>Project</span>
                <h2 className={styles.imageTitle}>{project.title}</h2>
              </div>
            </div>

            {/* Right: scrollable details */}
            <div className={styles.detailsPanel}>
              <div className={styles.detailsInner}>
                <span className="overline">Project Details</span>

                <div className={styles.section}>
                  <h3>Overview</h3>
                  <p className="body-md">{project.overview}</p>
                </div>

                <div className={styles.grid2}>
                  <div className={styles.section}>
                    <h3>Stakeholders</h3>
                    <ul className={styles.list}>
                      {project.stakeholders.map((s, i) => (
                        <li key={i}>{s}</li>
                      ))}
                    </ul>
                  </div>
                  <div className={styles.section}>
                    <h3>Impact</h3>
                    <ul className={styles.list}>
                      {project.impact.map((imp, i) => (
                        <li key={i}>
                          <strong>{imp.value}</strong>, {imp.label}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>

                <div className={styles.section}>
                  <h3>About This Project</h3>
                  <p className="body-md">{project.aboutTheProject}</p>
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
