import Image from "next/image";
import Link from "next/link";
import type { Metadata } from "next";
import styles from "./page.module.css";
import AnimatedCounter from "@/components/ui/AnimatedCounter";
import Reveal, { RevealGroup, RevealItem } from "@/components/ui/Reveal";

export const metadata: Metadata = {
  title: "Materials Lifecycle | Safisha Nchi",
  description:
    "Explore Safisha Nchi's full materials lifecycle — from community collection hubs to value-added processing into pellets and raw materials for manufacturing.",
};

const hubs = [
  { id: "main", type: "main", label: "Kisumu Central Hub", desc: "Main processing site. Sorting, crushing, baling." },
  { id: "h1", type: "satellite", label: "Nyalenda Hub" },
  { id: "h2", type: "satellite", label: "Manyatta Hub" },
  { id: "h3", type: "satellite", label: "Kondele Hub" },
  { id: "h4", type: "satellite", label: "Migosi Hub" },
  { id: "h5", type: "satellite", label: "Mamboleo Hub" },
  { id: "h6", type: "satellite", label: "Obunga Hub" },
  { id: "h7", type: "satellite", label: "Kaloleni Hub" },
];

const lifecycle = [
  {
    num: "01",
    title: "Collection",
    desc: "150+ informal collectors and 7 satellite hubs recover plastics, glass, and cartons from communities and businesses across the region.",
  },
  {
    num: "02",
    title: "Aggregation",
    desc: "Materials flow into our Central Kisumu Hub where they are weighed, logged, and staged for processing — 3–5 metric tonnes per week.",
  },
  {
    num: "03",
    title: "Processing",
    desc: "HDPE, LDPE, and flexible plastics are sorted, washed, shredded, and extruded into high-grade manufacturing-ready pellets.",
  },
  {
    num: "04",
    title: "Output",
    desc: "Finished pellets and baled materials are supplied directly to manufacturers, completing the circular economy loop.",
  },
];

const materials = [
  {
    num: "01",
    title: "Plastics Recovery",
    types: ["PET Bottles", "HDPE Jugs", "LDPE Film", "PP Containers"],
    output: "Pellets & Flakes",
    img: "/assets/plastic bootle.jpg",
  },
  {
    num: "02",
    title: "Glass Sorting",
    types: ["Wine Bottles", "Beverage Glass", "Clear Glass", "Coloured Glass"],
    output: "Crushed Cullet",
    img: "/assets/buyback1.jpeg",
  },
  {
    num: "03",
    title: "Cartons & Paper",
    types: ["Cardboard", "Office Paper", "Tetra Pak", "Newsprint"],
    output: "Baled Grades",
    img: "/assets/bins.jpg",
  },
];

export default function MaterialsPage() {
  return (
    <>
      {/* 1. HERO (100vh, Light Surface) */}
      <section className={`section-100 zone-light ${styles.hero}`}>
        <div className={styles.hero__bg}>
          <Image src="/assets/operations.png" alt="Recycling processing operations" fill priority style={{ objectFit: "cover", opacity: 0.1 }} />
        </div>
        <div className={`container ${styles.hero__inner}`}>
          <RevealGroup>
            <RevealItem><span className="overline">Our Operations</span></RevealItem>
            <RevealItem>
              <h1 className="display-xl">Materials Lifecycle.</h1>
            </RevealItem>
            <RevealItem>
              <p className="body-lg" style={{ marginTop: "1.5rem", maxWidth: "600px" }}>
                From community collection to industrial-grade pellets — follow
                the full journey of how Safisha Nchi transforms waste into value.
              </p>
            </RevealItem>
          </RevealGroup>
        </div>
      </section>

      {/* 2. NETWORK (100vh, Dark Panel) */}
      <section className={`section-100 zone-dark`}>
        <div className="container">
          <div className="section-header--center">
            <RevealGroup>
              <RevealItem><span className="overline overline--dark">Our Network</span></RevealItem>
              <RevealItem>
                <h2 className="display-lg">1 Main Hub.<br />7 Satellite Centres.</h2>
              </RevealItem>
              <RevealItem>
                <p className="body-lg" style={{ color: "var(--dark-sub)", marginTop: "1rem" }}>
                  Our distributed network ensures maximum coverage and collection
                  efficiency across the Kisumu region.
                </p>
              </RevealItem>
            </RevealGroup>
          </div>

          <RevealGroup className={styles.network__grid}>
            {hubs.map((hub) => (
              <RevealItem key={hub.id} className={`${styles.hub__card} ${hub.type === "main" ? styles["hub__card--main"] : ""}`}>
                <div className={styles.hub__dot} aria-hidden="true" />
                <span className={styles.hub__type}>
                  {hub.type === "main" ? "Main Processing Site" : "Satellite Hub"}
                </span>
                <h3 className={styles.hub__name}>{hub.label}</h3>
                {hub.desc && <p className={styles.hub__desc}>{hub.desc}</p>}
              </RevealItem>
            ))}
          </RevealGroup>
        </div>
      </section>

      {/* 3. LIFECYCLE (Light Surface) */}
      <section className={`section-100 zone-light`}>
        <div className="container">
          <div className="section-header--center">
            <RevealGroup>
              <RevealItem><span className="overline">How It Works</span></RevealItem>
              <RevealItem><h2 className="display-lg">The full recycling lifecycle.</h2></RevealItem>
            </RevealGroup>
          </div>

          <RevealGroup className={styles.lifecycle__grid}>
            {lifecycle.map((step) => (
              <RevealItem key={step.num} className={styles.lifecycle__step}>
                <span className={styles.step__num}>{step.num}</span>
                <div className={styles.step__connector} />
                <h3 className={styles.step__title}>{step.title}</h3>
                <p className={styles.step__desc}>{step.desc}</p>
              </RevealItem>
            ))}
          </RevealGroup>
        </div>
      </section>

      {/* 4. MATERIALS CATEGORIES (Light Surface) */}
      <section className={`section-100 zone-light`}>
        <div className="container">
          <div className="section-header--center">
            <RevealGroup>
              <RevealItem><span className="overline">What We Collect</span></RevealItem>
              <RevealItem><h2 className="display-md">Materials we process.</h2></RevealItem>
            </RevealGroup>
          </div>

          <RevealGroup className={styles.mats__grid}>
            {materials.map((mat) => (
              <RevealItem key={mat.num} className={styles.mat__card}>
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
          </RevealGroup>
        </div>
      </section>

      {/* 5. PROCESSING CAPABILITIES (100vh, Dark Panel) */}
      <section className={`section-100 zone-dark`}>
        <div className="container">
          <div className={styles.processing__grid}>
            <div className={styles.processing__copy}>
              <RevealGroup>
                <RevealItem><span className="overline overline--dark">Capacity</span></RevealItem>
                <RevealItem>
                  <h2 className="display-lg">Industrial grade processing.</h2>
                </RevealItem>
                <RevealItem>
                  <div className={styles.processing__specs}>
                    <div className={styles.spec__row}>
                      <span className={styles.spec__lbl}>Baler Capacity</span>
                      <span className={styles.spec__val}>1.5 Tonnes / Hr</span>
                    </div>
                    <div className={styles.spec__row}>
                      <span className={styles.spec__lbl}>Crusher Throughput</span>
                      <span className={styles.spec__val}>500 Kg / Hr</span>
                    </div>
                    <div className={styles.spec__row}>
                      <span className={styles.spec__lbl}>Pelletizer Output</span>
                      <span className={styles.spec__val}>300 Kg / Hr</span>
                    </div>
                    <div className={styles.spec__row}>
                      <span className={styles.spec__lbl}>Total Floor Space</span>
                      <span className={styles.spec__val}>15,000 Sq Ft</span>
                    </div>
                  </div>
                </RevealItem>
              </RevealGroup>
            </div>
            <Reveal className={styles.processing__img}>
              <Image src="/assets/bales.jpg" alt="Baled plastics ready for transport" fill style={{ objectFit: "cover", filter: "grayscale(100%)" }} />
            </Reveal>
          </div>
        </div>
      </section>
    </>
  );
}
