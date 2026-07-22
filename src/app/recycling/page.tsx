"use client";

import Image from "next/image";
import { motion, useInView } from "framer-motion";
import { useRef, useState } from "react";
import styles from "./page.module.css";
import { RevealGroup, RevealItem } from "@/components/ui/Reveal";

const hubs = [
  { id: "main", type: "main", label: "Kisumu Central Hub", desc: "Main processing site. Sorting, crushing, baling." },
  { id: "h1", type: "mini", label: "Nyalenda Hub" },
  { id: "h2", type: "mini", label: "Manyatta Hub" },
  { id: "h3", type: "mini", label: "Kondele Hub" },
  { id: "h4", type: "mini", label: "Otonglo Hub" },
  { id: "h5", type: "mini", label: "Mamboleo Hub" },
  { id: "h6", type: "mini", label: "Obunga Hub" },
  { id: "h7", type: "mini", label: "Kasese Landfill Hub" },
];

const lifecycle = [
  {
    num: "01",
    title: "Collection",
    desc: "150+ informal collectors and 8 hubs recover plastics, glass, and cartons from communities and businesses across the region.",
  },
  {
    num: "02",
    title: "Aggregation",
    desc: "Materials flow into our Central Kisumu Hub, where they are weighed, logged, and staged for processing at over 10 metric tonnes per week.",
  },
  {
    num: "03",
    title: "Processing",
    desc: "Sorted plastics are washed, shredded, and dried into high-quality plastic flakes ready for industrial use. Our roadmap includes scaling to pellet extrusion as infrastructure and funding grow.",
  },
  {
    num: "04",
    title: "Output",
    desc: "Finished industrial commodities including baled PET, clean flakes, and sorted glass cullet are supplied directly to manufacturers, completing the circular economy loop.",
  },
];

const materials = [
  {
    num: "01",
    title: "Plastics Recovery",
    types: ["PET Bottles & Containers", "LDPE Bags", "HDPE (Black/White)", "PP Food Containers"],
    output: "Flakes & Bales",
    img: "/assets/pellets.png",
  },
  {
    num: "02",
    title: "Glass Sorting",
    types: ["Beverage Glass", "All Colors & Types"],
    output: ["Cullet/", "Upcycling/", "Bottle Return Projects"],
    img: "/assets/glass.png",
  },
  {
    num: "03",
    title: "Cartons & Paperboard",
    types: ["Cardboard Packaging", "Various Paper Grades", "Tetra Pak", "Newsprint"],
    output: "Baled Grades",
    img: "/assets/bales.jpg",
  },
];

const specs = [
  { lbl: "Baler Capacity", val: "1.5 Tonnes / Hr" },
  { lbl: "Crusher Throughput", val: "500 Kg / Hr" },
  { lbl: "Flakes Output", val: "300 Kg / Hr" },
  { lbl: "Total Floor Space", val: "15,000 Sq Ft" },
];

const spring: [number, number, number, number] = [0.16, 1, 0.3, 1];

export default function MaterialsPage() {
  const [activeStep, setActiveStep] = useState<string | null>(null);

  return (
    <>
      {/* 1. HERO */}
      <section className={`section-100 zone-dark ${styles.hero}`} aria-labelledby="materials-h1">
        <div className={styles.hero__bg}>
          <Image src="/assets/pellets.png" alt="Recycling processing operations" fill priority style={{ objectFit: "cover" }} />
          <div className={styles.hero__overlay} />
        </div>
        <div className={`container ${styles.hero__inner}`}>
          <RevealGroup>
            <RevealItem><span className={`overline overline--lime ${styles.heroLabel}`}>Our Operations</span></RevealItem>
            <RevealItem>
              <h1 id="materials-h1" className={`display-xl ${styles.heroTitle}`}>Waste Lifecycle.</h1>
            </RevealItem>
            <RevealItem>
              <p className={`body-lg ${styles.heroSubtitle}`} style={{ marginTop: "1.5rem", maxWidth: "600px" }}>
                From community collection to quality plastic flakes, follow the full journey of how Safisha Nchi transforms recovered waste into verified industrial value.
              </p>
            </RevealItem>
          </RevealGroup>
        </div>
      </section>

      {/* 2. LIFECYCLE — light, horizontal steps */}
      <section className="section zone-canvas" aria-labelledby="lifecycle-h2">
        <div className="container">
          <RevealGroup>
            <RevealItem><span className="overline">How It Works</span></RevealItem>
            <RevealItem>
              <h2 id="lifecycle-h2" className="display-lg" style={{ marginTop: "var(--sp-3)" }}>
                The full recycling lifecycle.
              </h2>
            </RevealItem>
          </RevealGroup>

          <div className={styles.lifecycle__grid}>
            {lifecycle.map((step, i) => (
              <motion.div
                key={step.num}
                className={styles.lifecycle__step}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-60px" }}
                transition={{ duration: 0.7, delay: i * 0.1, ease: spring }}
                onMouseEnter={() => setActiveStep(step.num)}
                onMouseLeave={() => setActiveStep(null)}
              >
                <span className={styles.step__num}>{step.num}</span>
                <div className={styles.step__connector} />
                <h3 className={styles.step__title}>{step.title}</h3>
                <p className={styles.step__desc}>{step.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
      {/* 4. MATERIALS CATEGORIES — light */}
      <section className="section zone-alt" aria-labelledby="materials-cats-h2">
        <div className="container">
          <RevealGroup>
            <RevealItem><span className="overline">What We Collect</span></RevealItem>
            <RevealItem>
              <h2 id="materials-cats-h2" className="display-lg" style={{ marginTop: "var(--sp-3)" }}>
                Waste materials we process.
              </h2>
            </RevealItem>
          </RevealGroup>

          <div className={styles.mats__grid}>
            {materials.map((mat, i) => (
              <RevealItem key={mat.num} delay={i * 0.12} className={styles.mat__card}>
                <div className={styles.mat__img}>
                  <Image src={mat.img} alt={mat.title} fill style={{ objectFit: "cover" }} />
                  <span className={styles.mat__num}>{mat.num}</span>
                </div>
                <div className={styles.mat__body}>
                  <h3 className={styles.mat__title}>{mat.title}</h3>
                  <div className={styles.mat__tags}>
                    {mat.types.map((t) => (
                      <span key={t} className={styles.mat__tag}>{t}</span>
                    ))}
                  </div>
                  <div className={styles.mat__output}>
                    <span className={styles.output__label}>Output:</span>
                    <span className={styles.output__val}>{mat.output}</span>
                  </div>
                </div>
              </RevealItem>
            ))}
          </div>
        </div>
      </section>





      {/* 5. PROCESSING CAPABILITIES — dark, split */}
      <section className="section zone-dark" aria-labelledby="processing-h2">
        <div className="container">
          <div className={styles.processing__grid}>

            {/* Left: heading + body + spec table */}
            <RevealGroup className={styles.processing__copy}>
              <RevealItem><span className="overline overline--on-dark">Capacity</span></RevealItem>
              <RevealItem>
                <h2 id="processing-h2" className="display-md" style={{ color: "var(--on-dark)", marginTop: "var(--sp-4)" }}>
                  Industrial grade<br />processing.
                </h2>
              </RevealItem>
              <RevealItem>
                <p style={{ color: "var(--on-dark-muted)", fontSize: "1rem", lineHeight: 1.7, marginTop: "var(--sp-4)" }}>
                  Our facilities deliver high-quality recycled materials meeting rigorous industrial standards, replacing virgin plastics, reducing carbon footprints and combating plastic pollution.
                </p>
              </RevealItem>
            </RevealGroup>

            {/* Right: image */}
            <RevealItem className={styles.processing__img}>
              <Image src="/assets/sacks.png" alt="Plastics ready for processing" fill style={{ objectFit: "cover" }} />
            </RevealItem>

          </div>
        </div>
      </section>
      {/* 3. NETWORK — dark */}
      <section className="section zone-dark" aria-labelledby="network-h2">
        <div className="container">
          <RevealGroup>
            <RevealItem><span className="overline overline--on-dark">Our Network</span></RevealItem>
            <RevealItem>
              <h2 id="network-h2" className="display-lg" style={{ color: "var(--on-dark)", marginTop: "var(--sp-3)" }}>
                1 Main Hub.<br />7 Collection Mini Hubs.
              </h2>
            </RevealItem>
            <RevealItem>
              <p className="body-lg" style={{ color: "var(--on-dark-muted)", marginTop: "var(--sp-4)", maxWidth: "52ch" }}>
                Our distributed network ensures maximum coverage and collection efficiency across the Kisumu region.
              </p>
            </RevealItem>
          </RevealGroup>

          <div className={styles.network__grid}>
            {hubs.map((hub, i) => (
              <motion.div
                key={hub.id}
                className={`${styles.hub__card} ${hub.type === "main" ? styles["hub__card--main"] : ""}`}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-40px" }}
                transition={{ duration: 0.6, delay: i * 0.07, ease: spring }}
              >
                <div className={styles.hub__dot} aria-hidden="true" />
                <span className={styles.hub__type}>
                  {hub.type === "main" ? "Main Processing Site" : "Mini Hub"}
                </span>
                <h3 className={styles.hub__name}>{hub.label}</h3>
                {hub.desc && <p className={styles.hub__desc}>{hub.desc}</p>}
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
