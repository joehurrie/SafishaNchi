import Image from "next/image";
import Link from "next/link";
import type { Metadata } from "next";
import styles from "./page.module.css";
import AnimatedCounter from "@/components/ui/AnimatedCounter";
import Reveal, { RevealGroup, RevealItem } from "@/components/ui/Reveal";
import ProjectShowcase from "@/components/ui/ProjectShowcase";
import CarbonGraph from "@/components/ui/CarbonGraph";

export const metadata: Metadata = {
  title: "Safisha Nchi | Professional Waste Management & Recycling in Kenya",
  description:
    "Professional Waste Management and Recycling Company in Kenya. We transform waste into high-value resources.",
};

const partners = Array(6).fill("");

const services = [
  {
    num: "01",
    title: "Collection",
    desc: "Recovering post-consumer recyclables directly from communities, businesses, and informal collector networks.",
    icon: (
      <svg viewBox="0 0 24 24" className="icon">
        <path d="M3 6h18M3 6l1.5 14h15L21 6M3 6l3-3h12l3 3" />
        <path d="M9 11v6M15 11v6" />
      </svg>
    ),
  },
  {
    num: "02",
    title: "Aggregation",
    desc: "Consolidating volumes at our Central Kisumu Hub and satellite collection centres for efficient bulk processing.",
    icon: (
      <svg viewBox="0 0 24 24" className="icon">
        <rect x="3" y="3" width="7" height="7" rx="1.5" />
        <rect x="14" y="3" width="7" height="7" rx="1.5" />
        <rect x="3" y="14" width="7" height="7" rx="1.5" />
        <path d="M17.5 14v7M14 17.5h7" />
      </svg>
    ),
  },
  {
    num: "03",
    title: "Recycling",
    desc: "Transforming waste into high-value materials — plastic pellets and crushed flakes — ready for manufacturing.",
    icon: (
      <svg viewBox="0 0 24 24" className="icon">
        <path d="M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z" />
        <path d="M3.3 7l8.7 5 8.7-5" />
        <path d="M12 22V12" />
      </svg>
    ),
  },
  {
    num: "04",
    title: "Consulting",
    desc: "Providing professional advisory services on environmental compliance and corporate waste strategies.",
    icon: (
      <svg viewBox="0 0 24 24" className="icon">
        <path d="M14.5 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7.5L14.5 2z" />
        <polyline points="14 2 14 8 20 8" />
        <line x1="16" y1="13" x2="8" y2="13" />
        <line x1="16" y1="17" x2="8" y2="17" />
        <line x1="10" y1="9" x2="8" y2="9" />
      </svg>
    ),
  },
];

const materials = [
  {
    num: "01",
    title: "PET Flakes",
    desc: "Crushed and washed post-consumer PET bottles, ready for fibre and packaging manufacturers.",
    tag: "Plastic",
  },
  {
    num: "02",
    title: "HDPE Pellets",
    desc: "Processed high-density polyethylene granules for injection moulding and pipe manufacturing.",
    tag: "Plastic",
  },
  {
    num: "03",
    title: "Mixed Cullet",
    desc: "Sorted and crushed glass recovered from bottles and jars, supplied to glassworks.",
    tag: "Glass",
  },
];

export default function Home() {
  return (
    <>
      {/* ——— 1. HERO — Full-screen imagery ——— */}
      <section className={styles.hero}>
        {/* Background Image */}
        <div className={styles.heroBg}>
          <Image
            src="/assets/site.jpg"
            alt="Recycling plant in action at Safisha Nchi processing facility"
            fill
            priority
            style={{ objectFit: "cover" }}
          />
          {/* Dark overlay — not green, keeps image visible */}
          <div className={styles.heroOverlay} />
        </div>

        {/* Content */}
        <div className={`container ${styles.heroInner}`}>
          <div className={styles.heroContent}>
            <RevealGroup>
              <RevealItem>
                <span className={styles.heroLabel}>Waste Recovery & Circular Economy</span>
              </RevealItem>
              <RevealItem>
                <h1 className={`display-xl ${styles.heroHeadline}`}>
                  Transforming waste<br />into clean resources.
                </h1>
              </RevealItem>
              <RevealItem>
                <p className={styles.heroSub}>
                  A professional recycling network building a sustainable circular economy
                  across Kenya through efficient aggregation and processing.
                </p>
              </RevealItem>
              <RevealItem>
                <div className={styles.heroActions}>
                  <Link href="#services" className="btn btn-primary">
                    Explore Services
                    <svg viewBox="0 0 24 24"><path d="M5 12h14M12 5l7 7-7 7" /></svg>
                  </Link>
                  <Link href="/about" className={styles.heroBtnGhost}>
                    About Safisha Nchi
                  </Link>
                </div>
              </RevealItem>
            </RevealGroup>
          </div>

          {/* Scroll indicator */}
          <div className={styles.scrollHint} aria-hidden="true">
            <span className={styles.scrollLine} />
            <span className={styles.scrollText}>scroll</span>
          </div>
        </div>

        {/* Carbon Graph — bottom right */}
        <div className={styles.carbonWidget}>
          <CarbonGraph />
        </div>
      </section>

      {/* ——— 2. STATS BAR ——— */}
      <section className={styles.statsBar}>
        <div className="container">
          <div className={styles.statsRow}>
            {[
              { num: 360, suffix: "T+", label: "Waste Diverted" },
              { num: 270, suffix: "T", label: "CO₂ Offset" },
              { num: 150, suffix: "+", label: "Collectors Supported" },
              { num: 7, suffix: "", label: "Collection Hubs" },
            ].map((s) => (
              <div key={s.label} className={styles.statItem}>
                <AnimatedCounter target={s.num} suffix={s.suffix} className={styles.statNum} />
                <span className={styles.statLabel}>{s.label}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ——— 3. ABOUT SPLIT ——— */}
      <section className={`section-100 zone-light ${styles.aboutSection}`} id="about">
        <div className="container">
          <div className={styles.aboutSplit}>
            {/* Copy */}
            <RevealGroup className={styles.aboutCopy}>
              <RevealItem>
                <span className="overline">Who We Are</span>
              </RevealItem>
              <RevealItem>
                <h2 className="display-md">
                  Building Kenya's circular materials economy.
                </h2>
              </RevealItem>
              <RevealItem>
                <p className="body-lg" style={{ marginTop: "1.5rem" }}>
                  Safisha Nchi operates an integrated network of buy-back centres,
                  satellite hubs, and a central processing facility in Kisumu —
                  connecting informal collectors to industrial manufacturers.
                </p>
              </RevealItem>
              <RevealItem>
                <p className="body-md" style={{ marginTop: "1rem" }}>
                  We formalise the informal sector, pay fair prices for clean
                  materials, and transform recovered waste into high-value outputs
                  that displace virgin plastic and reduce landfill pressure.
                </p>
              </RevealItem>
              <RevealItem>
                <Link href="/about" className={`btn btn-outline ${styles.aboutBtn}`} style={{ marginTop: "2rem" }}>
                  Our Story
                  <svg viewBox="0 0 24 24"><path d="M5 12h14M12 5l7 7-7 7" /></svg>
                </Link>
              </RevealItem>
            </RevealGroup>

            {/* Image grid */}
            <RevealGroup className={styles.aboutImgGrid}>
              <div className={`${styles.imgCell} ${styles.imgLarge}`}>
                <Image src="/assets/operations.png" alt="Operations at Safisha Nchi" fill style={{ objectFit: "cover" }} />
              </div>
              <div className={`${styles.imgCell} ${styles.imgSmall}`}>
                <Image src="/assets/buyback.jpg" alt="Community buy-back centre" fill style={{ objectFit: "cover" }} />
              </div>
              <div className={`${styles.imgCell} ${styles.imgAccent}`}>
                <div className={styles.imgAccentInner}>
                  <svg viewBox="0 0 24 24" width="28" height="28" fill="none" stroke="currentColor" strokeWidth="1.5">
                    <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2z" />
                    <path d="M8 12l2.5 2.5L16 9" />
                  </svg>
                  <span>NEMA Compliant</span>
                </div>
              </div>
            </RevealGroup>
          </div>
        </div>
      </section>

      {/* ——— 4. SERVICES ——— */}
      <section className="section-100 zone-dark" id="services">
        <div className="container">
          <div className="section-header--center">
            <RevealGroup>
              <RevealItem><span className="overline overline--dark">Our Expertise</span></RevealItem>
              <RevealItem><h2 className="display-lg">Comprehensive Waste Solutions.</h2></RevealItem>
            </RevealGroup>
          </div>

          <RevealGroup className={styles.servicesGrid}>
            {services.map((srv) => (
              <RevealItem key={srv.num} className={styles.serviceCard}>
                <div className={styles.serviceTop}>
                  <span className={styles.serviceNum}>{srv.num}</span>
                  <div className={styles.serviceIcon}>{srv.icon}</div>
                </div>
                <h3 className={styles.serviceTitle}>{srv.title}</h3>
                <p className={styles.serviceDesc}>{srv.desc}</p>
              </RevealItem>
            ))}
          </RevealGroup>
        </div>
      </section>

      {/* ——— 5. MATERIALS ——— */}
      <section className="section-100 zone-light" id="materials">
        <div className="container">
          <div className="section-header--center">
            <RevealGroup>
              <RevealItem><span className="overline">What We Process</span></RevealItem>
              <RevealItem><h2 className="display-md">Materials We Recover.</h2></RevealItem>
            </RevealGroup>
          </div>

          <RevealGroup className={styles.materialsGrid}>
            {materials.map((m) => (
              <RevealItem key={m.num} className={styles.materialCard}>
                <span className={styles.materialNum}>{m.num}</span>
                <div className={styles.materialBody}>
                  <span className={styles.materialTag}>{m.tag}</span>
                  <h3 className={styles.materialTitle}>{m.title}</h3>
                  <p className={styles.materialDesc}>{m.desc}</p>
                </div>
              </RevealItem>
            ))}
          </RevealGroup>

          <div style={{ textAlign: "center", marginTop: "4rem" }}>
            <Link href="/materials" className="btn btn-outline">
              View All Materials
              <svg viewBox="0 0 24 24"><path d="M5 12h14M12 5l7 7-7 7" /></svg>
            </Link>
          </div>
        </div>
      </section>

      {/* ——— 6. PROJECT SHOWCASE ——— */}
      <ProjectShowcase />

      {/* ——— 7. IMPACT TICKER ——— */}
      <section className="section-100 zone-accent" id="impact">
        <div className="container">
          <RevealGroup className={styles.impactContent}>
            <RevealItem>
              <h2 className="display-md" style={{ color: "var(--dark)", marginBottom: "4rem", textAlign: "center" }}>
                Measurable environmental impact.
              </h2>
            </RevealItem>
            <div className={styles.statsGrid}>
              <RevealItem className={styles.statCard}>
                <AnimatedCounter target={360} className={styles.statNum2} />
                <span className={styles.statLabel2}>Tonnes Diverted</span>
              </RevealItem>
              <RevealItem className={styles.statCard}>
                <AnimatedCounter target={270} className={styles.statNum2} />
                <span className={styles.statLabel2}>Tons CO₂ Offset</span>
              </RevealItem>
              <RevealItem className={styles.statCard}>
                <AnimatedCounter target={170} className={styles.statNum2} />
                <span className={styles.statLabel2}>Ha Ecosystem Protected</span>
              </RevealItem>
            </div>
          </RevealGroup>
        </div>
      </section>

      {/* ——— 8. PARTNERS ——— */}
      <section className="section-100 zone-dark" id="partners">
        <div className="container" style={{ display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center", height: "100%" }}>
          <RevealGroup>
            <RevealItem><span className="overline overline--dark" style={{ textAlign: "center", display: "block" }}>Trusted By</span></RevealItem>
            <RevealItem><h2 className="display-md" style={{ textAlign: "center", marginBottom: "5rem" }}>Strategic Partners</h2></RevealItem>
          </RevealGroup>
          <RevealGroup className={styles.partnersGrid}>
            {partners.map((_, i) => (
              <RevealItem key={i} className={styles.partnerPlaceholder}>
                <div className={styles.geometricLogo} />
              </RevealItem>
            ))}
          </RevealGroup>
        </div>
      </section>
    </>
  );
}
