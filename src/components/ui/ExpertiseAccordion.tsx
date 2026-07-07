"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import styles from "./ExpertiseAccordion.module.css";

interface Pipeline {
  step: string;
  label: string;
  desc: string;
  icon: React.ReactNode;
}

interface ExpertiseItem {
  id: string;
  num: string;
  title: string;
  sub: string;
  summary: string;
  accent: string;
  icon: React.ReactNode;
  pipeline: Pipeline[];
}

// ── Inline SVG icons ──────────────────────────────────────────
const IconTruck = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
    <rect x="1" y="3" width="15" height="13" rx="1" />
    <path d="M16 8h4l3 5v4h-7V8z" />
    <circle cx="5.5" cy="18.5" r="2.5" />
    <circle cx="18.5" cy="18.5" r="2.5" />
  </svg>
);

const IconSort = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
    <path d="M3 6l9 6 9-6M3 12l9 6 9-6" />
  </svg>
);

const IconRecycle = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
    <path d="M7 19H4.815a1.83 1.83 0 0 1-1.57-2.763L7.186 9.5" />
    <path d="M11 19h8.203a1.83 1.83 0 0 0 1.556-2.752l-4.175-7.151" />
    <path d="m6.022 8.1-2.956-.735.734-2.956" />
    <path d="m17.978 8.1 2.956-.735-.734-2.956" />
    <path d="M12 5 9.207 2.207 12 5 14.793 2.207 12 5z" />
  </svg>
);

const IconGraduate = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
    <path d="M22 10v6M2 10l10-5 10 5-10 5z" />
    <path d="M6 12v5c3 3 9 3 12 0v-5" />
  </svg>
);

const IconClipboard = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
    <path d="M9 5H7a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2V7a2 2 0 0 0-2-2h-2" />
    <rect x="9" y="3" width="6" height="4" rx="1" />
    <path d="M9 12h6M9 16h4" />
  </svg>
);

const IconPeople = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
    <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" />
    <circle cx="9" cy="7" r="4" />
    <path d="M23 21v-2a4 4 0 0 0-3-3.87M16 3.13a4 4 0 0 1 0 7.75" />
  </svg>
);

// ── Pipeline step icons ───────────────────────────────────────
const PIcon = ({ name }: { name: string }) => {
  const map: Record<string, React.ReactNode> = {
    engage:     <path d="M17 20h5v-2a3 3 0 0 0-5.356-1.857M9 20H4v-2a3 3 0 0 1 5.356-1.857M12 11a4 4 0 1 0 0-8 4 4 0 0 0 0 8z" />,
    collect:    <path d="M5 8h14M5 12h14M5 16h6" />,
    weigh:      <><path d="M12 3v1M5.05 5.05l.707.707M3 12h1M5.05 18.95l.707-.707M12 21v-1M18.95 18.95l-.707-.707M21 12h-1M18.95 5.05l-.707.707" /><circle cx="12" cy="12" r="5" /></>,
    aggregate:  <><rect x="4" y="14" width="6" height="6" rx="1" /><rect x="14" y="14" width="6" height="6" rx="1" /><rect x="9" y="4" width="6" height="6" rx="1" /><path d="M7 14v-4M17 14v-4M7 10h10" /></>,
    report:     <><path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z" /><polyline points="14 2 14 8 20 8" /><line x1="16" y1="13" x2="8" y2="13" /><line x1="16" y1="17" x2="8" y2="17" /></>,
    receive:    <><path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4" /><polyline points="17 8 12 3 7 8" /><line x1="12" y1="3" x2="12" y2="15" /></>,
    sort:       <path d="M3 6l9 6 9-6M3 12l9 6 9-6" />,
    clean:      <><path d="M3 3l18 18M3 21l18-18" /><circle cx="12" cy="12" r="4" /></>,
    grade:      <><polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" /></>,
    shred:      <><path d="M14.5 10c-.83 0-1.5-.67-1.5-1.5v-5c0-.83.67-1.5 1.5-1.5s1.5.67 1.5 1.5v5c0 .83-.67 1.5-1.5 1.5z" /><path d="M20.5 10H19V8.5c0-.83.67-1.5 1.5-1.5s1.5.67 1.5 1.5-.67 1.5-1.5 1.5z" /><path d="M9.5 14c.83 0 1.5.67 1.5 1.5v5c0 .83-.67 1.5-1.5 1.5S8 21.33 8 20.5v-5c0-.83.67-1.5 1.5-1.5z" /><path d="M3.5 14H5v1.5c0 .83-.67 1.5-1.5 1.5S2 16.33 2 15.5 2.67 14 3.5 14z" /><path d="M14 14.5v1c0 1.4-2 2.5-2 2.5s-2-1.1-2-2.5v-1c0-.28.22-.5.5-.5h3c.28 0 .5.22.5.5z" /></>,
    dry:        <><path d="M8 14s1.5 2 4 2 4-2 4-2" /><circle cx="12" cy="12" r="10" /><path d="M9 9h.01M15 9h.01" /></>,
    pack:       <><path d="M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z" /><polyline points="3.27 6.96 12 12.01 20.73 6.96" /><line x1="12" y1="22.08" x2="12" y2="12" /></>,
    assess:     <><path d="M9 11l3 3L22 4" /><path d="M21 12v7a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h11" /></>,
    design:     <><circle cx="12" cy="12" r="10" /><line x1="12" y1="8" x2="12" y2="16" /><line x1="8" y1="12" x2="16" y2="12" /></>,
    train:      <><path d="M2 3h6a4 4 0 0 1 4 4v14a3 3 0 0 0-3-3H2z" /><path d="M22 3h-6a4 4 0 0 0-4 4v14a3 3 0 0 1 3-3h7z" /></>,
    equip:      <><path d="M14.7 6.3a1 1 0 0 0 0 1.4l1.6 1.6a1 1 0 0 0 1.4 0l3.77-3.77a6 6 0 0 1-7.94 7.94l-6.91 6.91a2.12 2.12 0 0 1-3-3l6.91-6.91a6 6 0 0 1 7.94-7.94l-3.76 3.76z" /></>,
    follow:     <><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07A19.5 19.5 0 0 1 4.69 13.5a19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 3.61 2.68h3a2 2 0 0 1 2 1.72c.127.96.361 1.903.7 2.81a2 2 0 0 1-.45 2.11L7.91 10a16 16 0 0 0 6 6l.91-.91a2 2 0 0 1 2.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0 1 21.73 17.5l.19-.58z" /></>,
    audit:      <><path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z" /><polyline points="14 2 14 8 20 8" /><path d="M16 13H8M16 17H8M10 9H8" /></>,
    analyse:    <><line x1="18" y1="20" x2="18" y2="10" /><line x1="12" y1="20" x2="12" y2="4" /><line x1="6" y1="20" x2="6" y2="14" /></>,
    implement:  <><polyline points="22 12 18 12 15 21 9 3 6 12 2 12" /></>,
    connect:    <><path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" /><circle cx="9" cy="7" r="4" /><path d="M23 21v-2a4 4 0 0 0-3-3.87M16 3.13a4 4 0 0 1 0 7.75" /></>,
    pay:        <><line x1="12" y1="1" x2="12" y2="23" /><path d="M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6" /></>,
    uplift:     <><polyline points="23 6 13.5 15.5 8.5 10.5 1 18" /><polyline points="17 6 23 6 23 12" /></>,
    wash:       <><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" /></>,
    default:    <circle cx="12" cy="12" r="4" />,
  };
  const key = name.toLowerCase().split(" ")[0];
  const d = map[key] ?? map.default;
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" className={styles.step__icon__svg}>
      {d}
    </svg>
  );
};

const items: ExpertiseItem[] = [
  {
    id: "collection",
    num: "01",
    title: "Community & Commercial Waste Collection",
    sub: "Households · Businesses · Institutions · Communities",
    accent: "#C5F84A",
    icon: <IconTruck />,
    summary:
      "We provide reliable waste collection services for households, businesses, institutions, and communities — ensuring responsible waste management while increasing the recovery of recyclable materials across the region.",
    pipeline: [
      { step: "Engage", label: "Community Mobilisation", desc: "We work closely with neighbourhood associations, schools, and businesses to establish consistent collection schedules and educate on proper waste segregation at source.", icon: <PIcon name="engage" /> },
      { step: "Collect", label: "Scheduled Collection Routes", desc: "Trained collection teams operate regular routes across Kisumu — covering informal settlements, commercial zones, and institutional campuses.", icon: <PIcon name="collect" /> },
      { step: "Weigh", label: "Transparent Weighing", desc: "All materials are weighed on calibrated scales at the point of collection or buy-back. Collectors receive immediate, transparent payment based on verified weight.", icon: <PIcon name="weigh" /> },
      { step: "Aggregate", label: "Hub Staging", desc: "Collected materials are staged at our 7 satellite hubs before being consolidated and transported to our Kisumu Central Hub for processing.", icon: <PIcon name="aggregate" /> },
      { step: "Report", label: "Collection Records", desc: "Every collection event is logged — quantity, material type, and location — providing verified data for environmental reporting and NEMA compliance.", icon: <PIcon name="report" /> },
    ],
  },
  {
    id: "sorting",
    num: "02",
    title: "Waste Sorting & Material Recovery",
    sub: "PET · HDPE · LDPE · PP · Glass · Cartons",
    accent: "#1fa389",
    icon: <IconSort />,
    summary:
      "We professionally sort, grade, and aggregate recyclable materials to maximise value and ensure a consistent supply of quality feedstock for recycling and manufacturing industries.",
    pipeline: [
      { step: "Receive", label: "Material Intake", desc: "Inbound materials from our collection network and walk-in collectors are weighed, recorded, and staged by broad category for initial screening.", icon: <PIcon name="receive" /> },
      { step: "Sort", label: "Polymer & Grade Separation", desc: "Trained sorters manually separate materials by type: PET (1), HDPE (2), LDPE (4), PP (5), glass, and paper/carton grades. Contaminated material is quarantined.", icon: <PIcon name="sort" /> },
      { step: "Clean", label: "Decontamination", desc: "Sorted materials are washed and cleaned to remove labels, food residue, and organic contamination — ensuring consistent quality for downstream buyers.", icon: <PIcon name="clean" /> },
      { step: "Grade", label: "Quality Verification", desc: "Each sorted batch is quality-checked against buyer specifications. Material is classified by colour, grade, and contamination level before dispatch.", icon: <PIcon name="grade" /> },
      { step: "Aggregate", label: "Stockpile & Consolidate", desc: "Verified, clean material is consolidated into volume-ready stockpiles, ensuring a consistent and reliable feedstock supply to industrial buyers.", icon: <PIcon name="aggregate" /> },
    ],
  },
  {
    id: "plastics",
    num: "03",
    title: "Plastic Recycling & Flake Production",
    sub: "PET · HDPE · LDPE · PP · Flakes · Bales",
    accent: "#BDFA3C",
    icon: <IconRecycle />,
    summary:
      "We process recovered plastics into high-quality recycled raw materials — including plastic flakes and baled products — supporting local manufacturing and advancing the circular economy.",
    pipeline: [
      { step: "Sort", label: "Polymer Separation", desc: "Optical and manual segregation by polymer code ensures clean, single-grade streams. PET, HDPE, LDPE, and PP are processed separately to maintain output quality.", icon: <PIcon name="sort" /> },
      { step: "Wash", label: "Multi-Stage Washing", desc: "Sorted plastics pass through a multi-stage washing loop that removes labels, adhesives, organic residue, and liquid contamination to meet industrial purity standards.", icon: <PIcon name="wash" /> },
      { step: "Shred", label: "Mechanical Shredding", desc: "Clean plastics are fed through industrial granulators, producing uniform, consistent flake sizes ready for direct use by plastic converters and manufacturers.", icon: <PIcon name="shred" /> },
      { step: "Dry", label: "Moisture Reduction", desc: "Shredded flakes are dried to optimal moisture levels, ensuring they meet the specifications required by downstream industrial buyers.", icon: <PIcon name="dry" /> },
      { step: "Pack & Ship", label: "Bagging & Dispatch", desc: "Finished flakes are weighed, documented, bagged into standard sizes, and dispatched directly to polymer manufacturers and circular supply chains.", icon: <PIcon name="pack" /> },
    ],
  },
  {
    id: "training",
    num: "04",
    title: "Environmental Training & Capacity Building",
    sub: "Waste Pickers · Communities · Institutions · Organisations",
    accent: "#f59e0b",
    icon: <IconGraduate />,
    summary:
      "We deliver practical training programmes on waste management, recycling, occupational safety, and circular economy practices — equipping waste pickers, community groups, institutions, and organisations with the knowledge and tools they need.",
    pipeline: [
      { step: "Assess", label: "Needs Assessment", desc: "We conduct a structured assessment of each group's knowledge gaps, operational context, and specific safety or compliance challenges before designing any programme.", icon: <PIcon name="assess" /> },
      { step: "Design", label: "Programme Design", desc: "Training modules are tailored to the audience — practical field safety for waste pickers, waste audit methodologies for institutions, or circular economy strategy for organisations.", icon: <PIcon name="design" /> },
      { step: "Train", label: "Facilitated Training Sessions", desc: "Sessions combine classroom instruction, hands-on demonstrations, and field practice. All training materials are available in Swahili and English.", icon: <PIcon name="train" /> },
      { step: "Equip", label: "PPE & Tools Distribution", desc: "Where relevant, training is paired with the provision of personal protective equipment, sorting tools, and reference materials for ongoing use.", icon: <PIcon name="equip" /> },
      { step: "Follow Up", label: "Post-Training Support", desc: "We provide follow-up visits and refresher sessions to reinforce learning, address challenges, and track behaviour change and compliance outcomes.", icon: <PIcon name="follow" /> },
    ],
  },
  {
    id: "consulting",
    num: "05",
    title: "Environmental Consulting & EPR Advisory",
    sub: "NEMA Compliance · ESG Reporting · EPR Strategy",
    accent: "#60a5fa",
    icon: <IconClipboard />,
    summary:
      "We provide expert advisory services on environmental compliance, waste management systems, sustainability strategies, and Extended Producer Responsibility (EPR) implementation — helping organisations meet regulatory obligations and sustainability goals.",
    pipeline: [
      { step: "Audit", label: "Waste Audit & Data Capture", desc: "On-site waste audits quantify generation rates by material stream, identify non-compliance risk, and establish baselines for reduction targets.", icon: <PIcon name="audit" /> },
      { step: "Analyse", label: "Gap Analysis", desc: "Current waste infrastructure is mapped against NEMA legal requirements, county by-laws, EPR obligations, and international ESG reporting standards.", icon: <PIcon name="analyse" /> },
      { step: "Design", label: "Strategy & Policy Design", desc: "Customised waste minimisation plans, segregation SOPs, EPR compliance frameworks, and supplier diversion agreements designed for your operational context.", icon: <PIcon name="design" /> },
      { step: "Implement", label: "Implementation Support", desc: "Staff training, sorting station setup, signage, contractor onboarding, and system integration managed by our experienced field operations team.", icon: <PIcon name="implement" /> },
      { step: "Report", label: "Reporting & Certification", desc: "Monthly performance dashboards, NEMA compliance documentation, and ESG impact metrics delivered for regulatory submissions and investor reporting.", icon: <PIcon name="report" /> },
    ],
  },
  {
    id: "empowerment",
    num: "06",
    title: "Waste Picker Empowerment & Community Inclusion",
    sub: "Women · Youth · Livelihoods · Education Access",
    accent: "#f87171",
    icon: <IconPeople />,
    summary:
      "People are at the heart of our work. We support waste pickers — particularly women — with fair market access, skills development, protective equipment, and sustainable livelihood opportunities.",
    pipeline: [
      { step: "Connect", label: "Network Integration", desc: "We bring informal waste pickers into our formal collection network, providing registered status, consistent work, and direct access to fair market pricing.", icon: <PIcon name="connect" /> },
      { step: "Equip", label: "PPE & Safety Gear", desc: "Every registered collector receives personal protective equipment — gloves, boots, reflective vests, and masks — ensuring dignified and safe working conditions.", icon: <PIcon name="equip" /> },
      { step: "Train", label: "Skills & Livelihood Development", desc: "Practical training on safe sorting, weighing, financial literacy, and occupational health builds confidence and capability across our collector community.", icon: <PIcon name="train" /> },
      { step: "Pay", label: "Fair & Transparent Payment", desc: "All collectors are paid at transparent, posted rates immediately upon delivery. No middlemen. No deductions. Direct cash or mobile money payment every time.", icon: <PIcon name="pay" /> },
      { step: "Uplift", label: "Education & Social Support", desc: "Through strategic partnerships, we facilitate access to school enrolment for children of collector families — building safer, healthier, and more resilient communities.", icon: <PIcon name="uplift" /> },
    ],
  },
];


export default function ExpertiseAccordion() {
  const [openId, setOpenId] = useState<string | null>(null);
  const toggle = (id: string) => setOpenId((prev) => (prev === id ? null : id));

  return (
    <div className={styles.accordion} role="list">
      {items.map((item) => {
        const isOpen = openId === item.id;
        return (
          <div
            key={item.id}
            className={`${styles.item} ${isOpen ? styles.item__open : ""}`}
            role="listitem"
          >
            {/* Header / trigger */}
            <button
              className={styles.trigger}
              onClick={() => toggle(item.id)}
              aria-expanded={isOpen}
              aria-controls={`expertise-panel-${item.id}`}
              id={`expertise-trigger-${item.id}`}
            >
              <div className={styles.trigger__left}>
                <div className={`${styles.trigger__icon__pill} ${isOpen ? styles.trigger__icon__pill__open : ""}`}>
                  {item.icon}
                </div>
                <div className={styles.trigger__titles}>
                  <div className={styles.trigger__num__title}>
                    <span className={styles.trigger__num}>{item.num}</span>
                    <span className={styles.trigger__title}>{item.title}</span>
                  </div>
                  <span className={styles.trigger__sub}>{item.sub}</span>
                </div>
              </div>
              <div className={styles.trigger__right}>
                <motion.div
                  className={styles.trigger__chevron}
                  animate={{ rotate: isOpen ? 135 : 0 }}
                  transition={{ duration: 0.25, ease: [0.4, 0, 0.2, 1] }}
                >
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <line x1="7" y1="17" x2="17" y2="7" />
                    <polyline points="7 7 17 7 17 17" />
                  </svg>
                </motion.div>
              </div>
            </button>

            {/* Expandable content */}
            <AnimatePresence initial={false}>
              {isOpen && (
                <motion.div
                  id={`expertise-panel-${item.id}`}
                  role="region"
                  aria-labelledby={`expertise-trigger-${item.id}`}
                  initial={{ height: 0, opacity: 0 }}
                  animate={{ height: "auto", opacity: 1 }}
                  exit={{ height: 0, opacity: 0 }}
                  transition={{ duration: 0.42, ease: [0.4, 0, 0.2, 1] }}
                  style={{ overflow: "hidden" }}
                >
                  <div className={styles.panel}>
                    <p className={styles.panel__summary}>{item.summary}</p>

                    {/* Creative pipeline: icon nodes with connecting flow */}
                    <div className={styles.pipeline} role="list" aria-label="Process pipeline">
                      {item.pipeline.map((step, i) => (
                        <div key={step.step} className={styles.pipeline__step} role="listitem">
                          {/* Icon node */}
                          <div className={styles.step__node}>
                            <div className={styles.step__icon__wrap}>
                              {step.icon}
                            </div>
                            {/* Connector line to next step */}
                            {i < item.pipeline.length - 1 && (
                              <div className={styles.step__connector} aria-hidden="true">
                                <div className={styles.step__connector__line} />
                                <svg className={styles.step__connector__arrow} viewBox="0 0 8 12" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" aria-hidden="true">
                                  <path d="M1 1l6 5-6 5" />
                                </svg>
                              </div>
                            )}
                          </div>
                          {/* Step content */}
                          <div className={styles.step__body}>
                            <span className={styles.step__step}>{step.step}</span>
                            <h4 className={styles.step__label}>{step.label}</h4>
                            <p className={styles.step__desc}>{step.desc}</p>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        );
      })}
    </div>
  );
}
