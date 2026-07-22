"use client";
import React from "react";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import styles from "./ExpertiseGrid.module.css";

// ── Types ─────────────────────────────────────────────────────
interface Pipeline {
  step: string;
  label: string;
  desc: string;
  iconName: string;
}

interface ExpertiseItem {
  id: string;
  num: string;
  title: string;
  sub: string;
  summary: string;
  iconName: string;
  pipeline: Pipeline[];
  bg: string;
  text: string;
}

// ── Icon renderer ──────────────────────────────────────────────
function Icon({ name, className }: { name: string; className?: string }) {
  const paths: Record<string, React.ReactNode> = {
    truck: (<><rect x="1" y="3" width="15" height="13" rx="1" /><path d="M16 8h4l3 5v4h-7V8z" /><circle cx="5.5" cy="18.5" r="2.5" /><circle cx="18.5" cy="18.5" r="2.5" /></>),
    sort: (<path d="M3 6l9 6 9-6M3 12l9 6 9-6" />),
    recycle: (<><path d="M7 19H4.815a1.83 1.83 0 0 1-1.57-2.763L7.186 9.5" /><path d="M11 19h8.203a1.83 1.83 0 0 0 1.556-2.752l-4.175-7.151" /><path d="m6.022 8.1-2.956-.735.734-2.956" /><path d="m17.978 8.1 2.956-.735-.734-2.956" /></>),
    graduate: (<><path d="M22 10v6M2 10l10-5 10 5-10 5z" /><path d="M6 12v5c3 3 9 3 12 0v-5" /></>),
    clipboard: (<><path d="M9 5H7a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2V7a2 2 0 0 0-2-2h-2" /><rect x="9" y="3" width="6" height="4" rx="1" /><path d="M9 12h6M9 16h4" /></>),
    people: (<><path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" /><circle cx="9" cy="7" r="4" /><path d="M23 21v-2a4 4 0 0 0-3-3.87M16 3.13a4 4 0 0 1 0 7.75" /></>),
    engage: (<path d="M17 20h5v-2a3 3 0 0 0-5.356-1.857M9 20H4v-2a3 3 0 0 1 5.356-1.857M12 11a4 4 0 1 0 0-8 4 4 0 0 0 0 8z" />),
    collect: (<path d="M5 8h14M5 12h14M5 16h6" />),
    weigh: (<><path d="M12 3v1M5.05 5.05l.707.707M3 12h1M5.05 18.95l.707-.707M12 21v-1M18.95 18.95l-.707-.707M21 12h-1M18.95 5.05l-.707.707" /><circle cx="12" cy="12" r="5" /></>),
    aggregate: (<><rect x="4" y="14" width="6" height="6" rx="1" /><rect x="14" y="14" width="6" height="6" rx="1" /><rect x="9" y="4" width="6" height="6" rx="1" /><path d="M7 14v-4M17 14v-4M7 10h10" /></>),
    report: (<><path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z" /><polyline points="14 2 14 8 20 8" /><line x1="16" y1="13" x2="8" y2="13" /><line x1="16" y1="17" x2="8" y2="17" /></>),
    receive: (<><path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4" /><polyline points="17 8 12 3 7 8" /><line x1="12" y1="3" x2="12" y2="15" /></>),
    clean: (<><path d="M3 3l18 18M3 21l18-18" /><circle cx="12" cy="12" r="4" /></>),
    grade: (<polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />),
    wash: (<path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />),
    shred: (<><path d="M14.5 10c-.83 0-1.5-.67-1.5-1.5v-5c0-.83.67-1.5 1.5-1.5s1.5.67 1.5 1.5v5c0 .83-.67 1.5-1.5 1.5z" /><path d="M9.5 14c.83 0 1.5.67 1.5 1.5v5c0 .83-.67 1.5-1.5 1.5S8 21.33 8 20.5v-5c0-.83.67-1.5 1.5-1.5z" /><path d="M14 14.5v1c0 1.4-2 2.5-2 2.5s-2-1.1-2-2.5v-1c0-.28.22-.5.5-.5h3c.28 0 .5.22.5.5z" /></>),
    dry: (<><path d="M8 14s1.5 2 4 2 4-2 4-2" /><circle cx="12" cy="12" r="10" /><path d="M9 9h.01M15 9h.01" /></>),
    pack: (<><path d="M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z" /><polyline points="3.27 6.96 12 12.01 20.73 6.96" /><line x1="12" y1="22.08" x2="12" y2="12" /></>),
    assess: (<><path d="M9 11l3 3L22 4" /><path d="M21 12v7a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h11" /></>),
    design: (<><circle cx="12" cy="12" r="10" /><line x1="12" y1="8" x2="12" y2="16" /><line x1="8" y1="12" x2="16" y2="12" /></>),
    train: (<><path d="M2 3h6a4 4 0 0 1 4 4v14a3 3 0 0 0-3-3H2z" /><path d="M22 3h-6a4 4 0 0 0-4 4v14a3 3 0 0 1 3-3h7z" /></>),
    equip: (<path d="M14.7 6.3a1 1 0 0 0 0 1.4l1.6 1.6a1 1 0 0 0 1.4 0l3.77-3.77a6 6 0 0 1-7.94 7.94l-6.91 6.91a2.12 2.12 0 0 1-3-3l6.91-6.91a6 6 0 0 1 7.94-7.94l-3.76 3.76z" />),
    follow: (<path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07A19.5 19.5 0 0 1 4.69 13.5a19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 3.61 2.68h3a2 2 0 0 1 2 1.72c.127.96.361 1.903.7 2.81a2 2 0 0 1-.45 2.11L7.91 10a16 16 0 0 0 6 6l.91-.91a2 2 0 0 1 2.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0 1 21.73 17.5l.19-.58z" />),
    audit: (<><path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z" /><polyline points="14 2 14 8 20 8" /><path d="M16 13H8M16 17H8M10 9H8" /></>),
    analyse: (<><line x1="18" y1="20" x2="18" y2="10" /><line x1="12" y1="20" x2="12" y2="4" /><line x1="6" y1="20" x2="6" y2="14" /></>),
    implement: (<polyline points="22 12 18 12 15 21 9 3 6 12 2 12" />),
    connect: (<><path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" /><circle cx="9" cy="7" r="4" /><path d="M23 21v-2a4 4 0 0 0-3-3.87M16 3.13a4 4 0 0 1 0 7.75" /></>),
    pay: (<><line x1="12" y1="1" x2="12" y2="23" /><path d="M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6" /></>),
    uplift: (<><polyline points="23 6 13.5 15.5 8.5 10.5 1 18" /><polyline points="17 6 23 6 23 12" /></>),
    default: (<circle cx="12" cy="12" r="4" />),
  };

  const key = name.toLowerCase().split(" ")[0];
  const d = paths[key] ?? paths.default;

  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.8"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
      className={className}
    >
      {d}
    </svg>
  );
}

// ── Data ──────────────────────────────────────────────────────
const items: ExpertiseItem[] = [
  {
    id: "collection",
    num: "01",
    title: "Community & Commercial Waste Collection",
    sub: "Households · Businesses · Institutions",
    iconName: "truck",
    summary: "We provide reliable waste collection services for households, businesses, institutions, and communities, ensuring responsible waste management while increasing the recovery of recyclable materials.",
    pipeline: [
      { step: "Engage", label: "Community Mobilisation", desc: "Working closely with neighbourhood associations, schools, and businesses to establish consistent collection schedules and educate on proper waste segregation at source.", iconName: "engage" },
      { step: "Collect", label: "Scheduled Collection Routes", desc: "Trained collection teams operate regular routes, covering informal settlements, commercial zones, and institutional campuses.", iconName: "collect" },
      { step: "Weigh", label: "Transparent Weighing", desc: "All materials are weighed on calibrated scales at the point of collection. Collectors receive immediate, transparent payment based on verified weight.", iconName: "weigh" },
      { step: "Aggregate", label: "Hub Staging", desc: "Collected materials are staged at our mini hubs before being consolidated and transported to our Kisumu Central Hub for processing.", iconName: "aggregate" },
      { step: "Report", label: "Collection Records", desc: "Every collection event is logged, quantity, material type, and location, providing verified data for environmental reporting and NEMA compliance.", iconName: "report" },
    ],
    bg: "#268074",
    text: "#ffffff",
  },
  {
    id: "sorting",
    num: "02",
    title: "Waste Sorting & Material Recovery",
    sub: "PET · HDPE · LDPE · PP · Glass · Cartons",
    iconName: "sort",
    summary: "We professionally sort, grade, and aggregate recyclable materials to maximise value and ensure a consistent supply of quality feedstock for recycling and manufacturing industries.",
    pipeline: [
      { step: "Receive", label: "Material Intake", desc: "Inbound materials from our collection network and walk-in collectors are weighed, recorded, and staged by broad category for initial screening.", iconName: "receive" },
      { step: "Sort", label: "Polymer & Grade Separation", desc: "Trained sorters manually separate materials by type: PET, HDPE, LDPE, PP, glass, and paper/carton grades. Contaminated material is quarantined.", iconName: "sort" },
      { step: "Clean", label: "Decontamination", desc: "Sorted materials are washed and cleaned to remove labels, food residue, and organic contamination, ensuring consistent quality for downstream buyers.", iconName: "clean" },
      { step: "Grade", label: "Quality Verification", desc: "Each sorted batch is quality-checked against buyer specifications and classified by colour, grade, and contamination level before dispatch.", iconName: "grade" },
      { step: "Aggregate", label: "Stockpile & Consolidate", desc: "Verified, clean material is consolidated into volume-ready stockpiles, ensuring a consistent and reliable feedstock supply to industrial buyers.", iconName: "aggregate" },
    ],
    bg: "#29b16f",
    text: "#ffffff",
  },
  {
    id: "plastics",
    num: "03",
    title: "Plastic Recycling & Flake Production",
    sub: "PET · HDPE · LDPE · PP · Flakes · Bales",
    iconName: "recycle",
    summary: "We process recovered plastics into high-quality recycled raw materials, including plastic flakes and baled products, supporting local manufacturing and advancing the circular economy.",
    pipeline: [
      { step: "Sort", label: "Polymer Separation", desc: "Optical and manual segregation by polymer code ensures clean, single-grade streams. PET, HDPE, LDPE, and PP are processed separately to maintain output quality.", iconName: "sort" },
      { step: "Wash", label: "Multi-Stage Washing", desc: "Sorted plastics pass through a multi-stage washing loop that removes labels, adhesives, organic residue, and liquid contamination to meet industrial purity standards.", iconName: "wash" },
      { step: "Shred", label: "Mechanical Shredding", desc: "Clean plastics are fed through industrial granulators, producing uniform, consistent flake sizes ready for direct use by plastic converters and manufacturers.", iconName: "shred" },
      { step: "Dry", label: "Moisture Reduction", desc: "Shredded flakes are dried to optimal moisture levels, ensuring they meet the specifications required by downstream industrial buyers.", iconName: "dry" },
      { step: "Pack & Ship", label: "Bagging & Dispatch", desc: "Finished flakes are weighed, documented, bagged into standard sizes, and dispatched directly to polymer manufacturers and circular supply chains.", iconName: "pack" },
    ],
    bg: "#059669",
    text: "#ffffff",
  },
  {
    id: "training",
    num: "04",
    title: "Environmental Training & Capacity Building",
    sub: "Waste Pickers · Communities · Institutions",
    iconName: "graduate",
    summary: "We deliver practical training programmes on waste management, recycling, occupational safety, and circular economy practices, equipping waste pickers, community groups, and organisations with the tools they need.",
    pipeline: [
      { step: "Assess", label: "Needs Assessment", desc: "We conduct a structured assessment of each group's knowledge gaps, operational context, and specific safety or compliance challenges before designing any programme.", iconName: "assess" },
      { step: "Design", label: "Programme Design", desc: "Training modules are tailored to the audience, practical field safety for waste pickers, waste audit methodologies for institutions, or circular economy strategy for organisations.", iconName: "design" },
      { step: "Train", label: "Facilitated Training Sessions", desc: "Sessions combine classroom instruction, hands-on demonstrations, and field practice. All training materials are available in Swahili and English.", iconName: "train" },
      { step: "Equip", label: "PPE & Tools Distribution", desc: "Where relevant, training is paired with the provision of personal protective equipment, sorting tools, and reference materials for ongoing use.", iconName: "equip" },
      { step: "Follow Up", label: "Post-Training Support", desc: "We provide follow-up visits and refresher sessions to reinforce learning, address challenges, and track behaviour change and compliance outcomes.", iconName: "follow" },
    ],
    bg: "#C5F84A",
    text: "#111827",
  },
  {
    id: "consulting",
    num: "05",
    title: "Environmental Consulting & EPR Advisory",
    sub: "NEMA Compliance · ESG Reporting · EPR Strategy",
    iconName: "clipboard",
    summary: "We provide expert advisory services on environmental compliance, waste management systems, sustainability strategies, and EPR implementation, helping organisations meet regulatory obligations and sustainability goals.",
    pipeline: [
      { step: "Audit", label: "Waste Audit & Data Capture", desc: "On-site waste audits quantify generation rates by material stream, identify non-compliance risk, and establish baselines for reduction targets.", iconName: "audit" },
      { step: "Analyse", label: "Gap Analysis", desc: "Current waste infrastructure is mapped against NEMA legal requirements, county by-laws, EPR obligations, and international ESG reporting standards.", iconName: "analyse" },
      { step: "Design", label: "Strategy & Policy Design", desc: "Customised waste minimisation plans, segregation SOPs, EPR compliance frameworks, and supplier diversion agreements designed for your operational context.", iconName: "design" },
      { step: "Implement", label: "Implementation Support", desc: "Staff training, sorting station setup, signage, contractor onboarding, and system integration managed by our experienced field operations team.", iconName: "implement" },
      { step: "Report", label: "Reporting & Certification", desc: "Monthly performance dashboards, NEMA compliance documentation, and ESG impact metrics delivered for regulatory submissions and investor reporting.", iconName: "report" },
    ],
    bg: "#E6F4F1",
    text: "#111827",
  },
  {
    id: "empowerment",
    num: "06",
    title: "Waste Picker Empowerment & Community Inclusion",
    sub: "Women · Youth · Livelihoods · Education Access",
    iconName: "people",
    summary: "People are at the heart of our work. We support waste pickers, particularly women, with fair market access, skills development, protective equipment, and sustainable livelihood opportunities.",
    pipeline: [
      { step: "Connect", label: "Network Integration", desc: "We bring informal waste pickers into our formal collection network, providing registered status, consistent work, and direct access to fair market pricing.", iconName: "connect" },
      { step: "Equip", label: "PPE & Safety Gear", desc: "Every registered collector receives personal protective equipment, gloves, boots, reflective vests, and masks, ensuring dignified and safe working conditions.", iconName: "equip" },
      { step: "Train", label: "Skills & Livelihood Development", desc: "Practical training on safe sorting, weighing, financial literacy, and occupational health builds confidence and capability across our collector community.", iconName: "train" },
      { step: "Pay", label: "Fair & Transparent Payment", desc: "All collectors are paid at transparent, posted rates immediately upon delivery. No middlemen. No deductions. Direct cash or mobile money payment every time.", iconName: "pay" },
      { step: "Uplift", label: "Education & Social Support", desc: "Through strategic partnerships, we facilitate access to school enrolment for children of collector families, building safer, healthier, and more resilient communities.", iconName: "uplift" },
    ],
    bg: "#ffffff",
    text: "#111827",
  },
];

// ── Animation variants ─────────────────────────────────────────
const panelVariants = {
  hidden: { height: 0, opacity: 0 },
  visible: { height: "auto", opacity: 1, transition: { duration: 0.4, ease: [0.4, 0, 0.2, 1] as const } },
  exit:   { height: 0, opacity: 0, transition: { duration: 0.28, ease: [0.4, 0, 0.2, 1] as const } },
};

const stepVariants = {
  hidden: { opacity: 0, y: 14 },
  visible: (i: number) => ({
    opacity: 1, y: 0,
    transition: { delay: i * 0.08, duration: 0.35, ease: "easeOut" as const },
  }),
};

// Caret positions for 3-column grid (left edge of column centre %)
const CARET_POSITIONS = ["17%", "50%", "83%"];

// ── Component ─────────────────────────────────────────────────
export default function ExpertiseGrid() {
  const [openId, setOpenId] = useState<string | null>(null);
  const [cols, setCols] = useState(3);
  const toggle = (id: string) => {
    const willOpen = openId !== id;
    setOpenId((prev) => (prev === id ? null : id));

    if (willOpen) {
      // Scroll the card itself into view, which ensures the panel below it is also visible.
      // This avoids race conditions waiting for AnimatePresence to mount the panel.
      setTimeout(() => {
        const cardEl = document.getElementById(`expertise-card-${id}`);
        if (!cardEl) return;
        const navHeight = 72; // approx sticky nav height in px
        const top = cardEl.getBoundingClientRect().top + window.scrollY - navHeight - 16;
        window.scrollTo({ top, behavior: "smooth" });
      }, 50);
    }
  };

  React.useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth <= 540) setCols(1);
      else if (window.innerWidth <= 768) setCols(2);
      else setCols(3);
    };
    handleResize(); // Set initial
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  // Split into rows dynamically based on breakpoint
  const rows: ExpertiseItem[][] = [];
  for (let i = 0; i < items.length; i += cols) {
    rows.push(items.slice(i, i + cols));
  }

  // Caret positions depending on active column and total columns
  const getCaretPos = (colIdx: number, totalCols: number) => {
    if (totalCols === 1) return "50%";
    if (totalCols === 2) return colIdx === 0 ? "25%" : "75%";
    return ["17%", "50%", "83%"][colIdx];
  };

  return (
    <div className={styles.grid}>
      {rows.map((row, rowIdx) => {
        const activeInRow = row.find((item) => item.id === openId) ?? null;
        const activeColIdx = activeInRow ? row.indexOf(activeInRow) : -1;

        return (
          <React.Fragment key={`row-${rowIdx}`}>
            {/* ── Cards for this row ── */}
            {row.map((item, colIdx) => {
              const isOpen = openId === item.id;
              return (
                <motion.button
                  key={item.id}
                  id={`expertise-card-${item.id}`}
                  className={`${styles.card} ${isOpen ? styles["card--active"] : ""}`}
                  onClick={() => toggle(item.id)}
                  aria-expanded={isOpen}
                  aria-controls={`expertise-panel-${item.id}`}
                  whileHover={{ y: isOpen ? 0 : -4 }}
                  transition={{ duration: 0.2, ease: "easeOut" }}
                  style={{
                    ["--card-bg" as string]: item.bg,
                    ["--card-text" as string]: item.text,
                  }}
                >
                  {/* Icon */}
                  <div className={styles.card__icon__wrap}>
                    <Icon name={item.iconName} className={styles.card__icon} />
                  </div>

                  {/* Number */}
                  <span className={styles.card__num}>{item.num}</span>

                  {/* Title */}
                  <h3 className={styles.card__title}>{item.title}</h3>

                  {/* Sub */}
                  <p className={styles.card__sub}>{item.sub}</p>

                  {/* CTA */}
                  <div className={styles.card__cta}>
                    <span className={styles.card__cta__text}>
                      {isOpen ? "Close" : "Explore Process"}
                    </span>
                    <motion.svg
                      className={styles.card__cta__arrow}
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      animate={{ rotate: isOpen ? 90 : 0 }}
                      transition={{ duration: 0.22 }}
                      aria-hidden="true"
                    >
                      <path d="M5 12h14M12 5l7 7-7 7" />
                    </motion.svg>
                  </div>
                </motion.button>
              );
            })}

            {/* ── Panel for active item in this row ── */}
            <AnimatePresence initial={false} mode="wait" key={`panel-row-${rowIdx}`}>
              {activeInRow && (
                <motion.div
                  key={activeInRow.id}
                  id={`expertise-panel-${activeInRow.id}`}
                  role="region"
                  aria-label={`${activeInRow.title} process`}
                  className={styles.panel__wrapper}
                  variants={panelVariants}
                  initial="hidden"
                  animate="visible"
                  exit="exit"
                  style={{
                    overflow: "hidden",
                    gridColumn: "1 / -1",
                    ["--caret-pos" as string]: getCaretPos(activeColIdx, cols),
                  }}
                >
                  <div className={styles.panel}>
                    <div className={styles.panel__inner}>
                      {/* Header */}
                      <div className={styles.panel__header}>
                        <div className={styles.panel__icon__wrap}>
                          <Icon name={activeInRow.iconName} className={styles.panel__icon} />
                        </div>
                        <div className={styles.panel__header__text}>
                          <p className={styles.panel__num}>{activeInRow.num}</p>
                          <h4 className={styles.panel__title}>{activeInRow.title}</h4>
                          <p className={styles.panel__summary}>{activeInRow.summary}</p>
                        </div>
                      </div>

                      <div className={styles.panel__divider} aria-hidden="true" />

                      {/* Pipeline steps */}
                      <div className={styles.pipeline} role="list">
                        {activeInRow.pipeline.map((step, i) => (
                          <motion.div
                            key={`${activeInRow.id}-${step.step}`}
                            className={styles.pipeline__step}
                            role="listitem"
                            custom={i}
                            variants={stepVariants}
                            initial="hidden"
                            animate="visible"
                          >
                            <div className={styles.step__node}>
                              <div className={styles.step__icon__wrap}>
                                <Icon name={step.iconName} className={styles.step__icon} />
                              </div>
                              {i < activeInRow.pipeline.length - 1 && (
                                <div className={styles.step__connector} aria-hidden="true">
                                  <svg viewBox="0 0 16 10" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                                    <path d="M1 5h12M9 1l4 4-4 4" />
                                  </svg>
                                </div>
                              )}
                            </div>
                            <div className={styles.step__body}>
                              <span className={styles.step__tag}>{step.step}</span>
                              <h5 className={styles.step__label}>{step.label}</h5>
                              <p className={styles.step__desc}>{step.desc}</p>
                            </div>
                          </motion.div>
                        ))}
                      </div>
                    </div>
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </React.Fragment>
        );
      })}
    </div>
  );
}
