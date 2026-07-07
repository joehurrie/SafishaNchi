"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import styles from "./page.module.css";
import { RevealGroup, RevealItem } from "@/components/ui/Reveal";
import AnimatedCounter from "@/components/ui/AnimatedCounter";
import PartnerMarquee from "@/components/ui/PartnerMarquee";

const strategy = [
  { title: "Expand Buy-Back Network", desc: "Scale from 7 to 15+ satellite hubs, covering more communities and increasing monthly collection volumes." },
  { title: "Household Garbage Collection", desc: "Expand our logistics network to provide direct household waste collection, ensuring proper segregation at source." },
  { title: "Organic Waste & BSF", desc: "Introduce large-scale organic waste management using Black Soldier Fly (BSF) larvae — producing high-protein animal feed and organic fertilizer." },
  { title: "New Balers & Infrastructure", desc: "Install industrial-grade hydraulic balers at main hubs to increase throughput capacity and improve baled output quality for mills." },
  { title: "Government & Policy Alliances", desc: "Strengthen collaborations with county governments and support NEMA Act recycling mandate implementation across all operating regions." },
];

const timeline = [
  { year: "2014", label: "The Beginning", desc: "Founded with a single buy-back centre in Kisumu, focused on informal plastic recovery." },
  { year: "2017", label: "Network Growth", desc: "Expanded to 3 satellite hubs; established relationships with 50+ informal collectors." },
  { year: "2020", label: "Value Addition", desc: "Introduced sorting, crushing and baling capabilities, producing quality plastic flakes for industrial buyers. Pellet production is on our growth roadmap, pending infrastructure investment." },
  { year: "2023", label: "Scaling Impact", desc: "Reached 150+ active collectors, 7 satellite hubs, and 360T+ total waste diverted. KIWAN membership established." },
  { year: "2026+", label: "The Future", desc: "Household collection, BSF organic waste processing, expansion to 15+ hubs, and growth into additional Kenyan counties as we build national recycling infrastructure." },
];

const coreValues = [
  {
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M12 2v20M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6" />
      </svg>
    ),
    title: "Economic Inclusion",
    desc: "Connecting informal waste aggregators directly to the industry, ensuring fair pay and dignified work.",
  },
  {
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <circle cx="12" cy="8" r="3" /><path d="M12 11v7" /><path d="M9 14h6" />
      </svg>
    ),
    title: "Community Empowerment",
    desc: "Uplifting youth and women by providing training, protective equipment, and a sustainable livelihood.",
  },
  {
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M12 22c5.523 0 10-4.477 10-10S17.523 2 12 2 2 6.477 2 12s4.477 10 10 10z" />
        <path d="M12 8v4l3 3" />
      </svg>
    ),
    title: "Environmental Stewardship",
    desc: "Combating plastic pollution in Lake Victoria and across Kenya by significantly boosting national recycling rates.",
  },
  {
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
      </svg>
    ),
    title: "Integrity & Fairness",
    desc: "Operating with absolute transparency, removing exploitative middlemen, and building trust across our ecosystem.",
  },
];

const gallery = [
  { src: "/assets/kids.jpeg", alt: "School Kids Site Tour To Safisha Nchis Recycling Facility" },
  { src: "/assets/sacks.png", alt: "Crushed Plastic Flakes at Safisha Nchis Recycling Facility" },
  { src: "/assets/bales1.jpeg", alt: "Baled recyclables ready for processing" },
  { src: "/assets/sitetour.JPG", alt: "Safisha Nchi collection New Baling Machine" },
  { src: "/assets/wastecollector.jpeg", alt: "A waste Collector delivering plastic waste to Safisha Nchi's Buyback Center" },
];

const partners = [
  { name: "County Government of Kisumu", src: "/assets/County%20Government%20of%20Kisumu-logo.jfif" },
  { name: "NEMA", src: "/assets/nema%20logo.jfif" },
  { name: "Kepro", src: "/assets/kepro-logo.png" },
  { name: "New Life Mission", src: "/assets/New%20Life%20Mission%20Aid.jfif" },
];

const stats = [
  { target: 360, suffix: "T+", lbl: "Waste Diverted" },
  { target: 150, suffix: "+", lbl: "Collectors Supported" },
  { target: 7, suffix: "", lbl: "Collection Hubs" },
  { target: 10, suffix: "+", lbl: "Years Operating" },
];

const spring: [number, number, number, number] = [0.16, 1, 0.3, 1];



export default function AboutPage() {
  return (
    <>
      {/* 1. HERO */}
      <section className={`section-100 zone-dark ${styles.hero}`} aria-labelledby="about-h1">
        <div className={styles.hero__bg}>
          <Image src="/assets/project1.JPG" alt="Safisha Nchi team at work" fill priority sizes="100vw" style={{ objectFit: "cover", objectPosition: "center 20%" }} />
          <div className={styles.hero__overlay} />
        </div>
        <div className={`container ${styles.hero__inner}`}>
          <RevealGroup>
            <RevealItem><span className="overline overline--lime">About Us</span></RevealItem>
            <RevealItem>
              <h1 id="about-h1" className={`display-xl ${styles.heroTitle}`} style={{ maxWidth: "800px" }}>
                Our journey toward<br />a cleaner future.
              </h1>
            </RevealItem>
            <RevealItem>
              <p className={`body-lg ${styles.heroSubtitle}`} style={{ maxWidth: "54ch", marginTop: "1.5rem" }}>
                A decade of building community-powered circular infrastructure in Kenya — turning hazardous waste into verified value.
              </p>
            </RevealItem>
          </RevealGroup>
        </div>
      </section>

      {/* STATS STRIP */}
      <section className="section--sm zone-alt" style={{ borderBottom: "1px solid var(--border)" }}>
        <div className="container">
          <RevealGroup className={styles.statsStrip}>
            {stats.map((s, i) => (
              <RevealItem key={s.lbl} delay={i * 0.05}>
                <div className={styles.statsStrip__item}>
                  <AnimatedCounter target={s.target} suffix={s.suffix} className={`display-md ${styles.statsStrip__num}`} />
                  <span className={styles.statsStrip__lbl}>{s.lbl}</span>
                </div>
              </RevealItem>
            ))}
          </RevealGroup>
        </div>
      </section>

      {/* 2. MISSION & VISION — dark, split layout */}
      <section className="section zone-dark" aria-labelledby="mission-h2">
        <div className="container">
          <div className={styles.missionNew__grid}>
            <div className={styles.missionNew__content}>
              <RevealGroup>
                <RevealItem>
                  <span className="overline overline--on-dark">Our Core Purpose</span>
                </RevealItem>

                <RevealItem>
                  <div className={styles.missionNew__block}>
                    <h3 className={styles.missionNew__label}>Vision</h3>
                    <p className={styles.missionNew__text}>
                      To promote environmental sustainability, enhance public health, and empower communities in Kenya by collecting and recycling waste.
                    </p>
                  </div>
                </RevealItem>

                <RevealItem>
                  <div className={styles.missionNew__block} style={{ marginTop: "var(--sp-6)" }}>
                    <h3 className={styles.missionNew__label}>Mission</h3>
                    <p className={styles.missionNew__text}>
                      To build scalable recycling hubs that empower communities to collect, sort, and transform waste into economic value.
                    </p>
                  </div>
                </RevealItem>
              </RevealGroup>
            </div>

            <RevealItem direction="right">
              <div className={styles.missionNew__quoteCard}>
                <div className={styles.missionNew__avatarWrap}>
                  <Image
                    src="/assets/Norah.png"
                    alt="Norah Nyagah"
                    fill
                    className={styles.missionNew__avatar}
                  />
                </div>

                <blockquote className={styles.missionNew__quoteText}>
                  Our work in waste management is rooted in creating cleaner environments, better livelihoods, and resilient communities.
                </blockquote>

                <div className={styles.missionNew__author}>
                  <cite className={styles.missionNew__name}>Norah Nyagah</cite>
                  <span className={styles.missionNew__title}>CEO / Founder</span>
                </div>
              </div>
            </RevealItem>
          </div>
        </div>
      </section>

      {/* 3. THE HUMAN COST & VALUES — light, 3-column */}
      <section className="section zone-canvas" aria-labelledby="values-h2">
        <div className="container" style={{ maxWidth: "100%" }}>
          <div className={styles.humanCost__grid}>


            {/* Col 2: Heading & Description */}
            <div className={styles.humanCost__copy}>
              <RevealGroup>
                <RevealItem>
                  <span className="overline">The Human Cost & Our Values</span>
                </RevealItem>
                <RevealItem>
                  <h2 id="values-h2" className="display-md" style={{ marginTop: "var(--sp-3)", marginBottom: "var(--sp-4)" }}>
                    Dignifying<br />the informal sector.
                  </h2>
                </RevealItem>
                <RevealItem>
                  <p className="body-lg">
                    Over 150,000 informal waste pickers operate in hazardous conditions across Kenya without registration, fair pay, or protective equipment. We are here to change that through our four core values:
                  </p>
                </RevealItem>
              </RevealGroup>
            </div>


            {/* Col 3: Values */}
            <div className={styles.humanCost__values}>
              {coreValues.map((item, i) => (
                <RevealItem key={item.title} delay={i * 0.1} className={styles.value__item}>
                  <div className={styles.value__icon}>{item.icon}</div>
                  <div>
                    <h3 className={styles.value__title}>{item.title}</h3>
                    <p className={styles.value__desc}>{item.desc}</p>
                  </div>
                </RevealItem>
              ))}

            </div>
            {/* Col 1: Image */}
            <RevealItem direction="left" className={styles.humanCost__imgWrap}>
              <Image
                src="/assets/wastepickers2.jpg"
                alt="Youth and women waste pickers at work"
                fill
                style={{ objectFit: "cover", filter: "grayscale(60%)" }}
              />
            </RevealItem>
          </div>
        </div>
      </section>

      {/* 4. TIMELINE — light, full-width */}
      <section className="section zone-alt" aria-labelledby="history-h2">
        <div className="container">
          <RevealGroup>
            <RevealItem><span className="overline">Our History</span></RevealItem>
            <RevealItem>
              <h2 id="history-h2" className="display-lg" style={{ marginTop: "var(--sp-3)" }}>
                The path so far.
              </h2>
            </RevealItem>
          </RevealGroup>

          <div className={styles.timeline}>
            {timeline.map((item, i) => (
              <RevealItem key={item.year} delay={i * 0.08} className={styles.timeline__item}>
                <span className={styles.timeline__year}>{item.year}</span>
                <div className={styles.timeline__content}>
                  <h3 className={styles.timeline__label}>{item.label}</h3>
                  <p className={styles.timeline__desc}>{item.desc}</p>
                </div>
              </RevealItem>
            ))}
          </div>
        </div>
      </section>

      {/* 5. STRATEGY — dark */}
      <section className="section zone-dark" aria-labelledby="strategy-h2">
        <div className="container">
          <RevealGroup>
            <RevealItem><span className="overline overline--on-dark">Vision & Growth</span></RevealItem>
            <RevealItem>
              <h2 id="strategy-h2" className="display-lg" style={{ color: "var(--on-dark)", marginTop: "var(--sp-3)" }}>
                Our roadmap<br />to scaled impact.
              </h2>
            </RevealItem>
          </RevealGroup>

          <div className={styles.strategy__grid}>
            {strategy.map((s, i) => (
              <RevealItem key={s.title} delay={i * 0.08} className={styles.strategy__card}>
                <span className={styles.strategy__num}>0{i + 1}</span>
                <h3 className={styles.strategy__title}>{s.title}</h3>
                <p className={styles.strategy__desc}>{s.desc}</p>
              </RevealItem>
            ))}
          </div>
        </div>
      </section>

      {/* 6. GALLERY — light, bento grid */}
      <section className="section zone-canvas" aria-labelledby="gallery-h2" style={{ overflow: "hidden" }}>
        <div className="container">
          <RevealGroup>
            <RevealItem><span className="overline">Gallery</span></RevealItem>
            <RevealItem>
              <h2 id="gallery-h2" className="display-lg" style={{ marginTop: "var(--sp-3)", marginBottom: "var(--sp-8)" }}>
                Scenes from our work.
              </h2>
            </RevealItem>
          </RevealGroup>
        </div>

        <div className={styles.gallery__bento__track}>
          <div className={styles.gallery__bento__container}>
            {[...gallery, ...gallery].map((item, i) => (
              <div
                key={`${item.src}-${i}`}
                className={`${styles.gallery__bento__item} ${i % 3 === 0 ? styles.gallery__bento__item__large : ""}`}
              >
                <Image src={item.src} alt={item.alt} fill style={{ objectFit: "cover" }} sizes="(max-width: 768px) 100vw, 30vw" />
                <div className={styles.gallery__caption}>{item.alt}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 7. PARTNERS — light */}
      <section className="section zone-alt" aria-labelledby="partners-h2" style={{ paddingBottom: "var(--sp-12)" }}>
        <div className="container">
          <RevealGroup>
            <RevealItem><span className="overline">Partners</span></RevealItem>
            <RevealItem>
              <h2 id="partners-h2" className="display-lg" style={{ marginTop: "var(--sp-3)" }}>
                Local and regulatory support.
              </h2>
            </RevealItem>
          </RevealGroup>
        </div>
        <PartnerMarquee />
      </section>

      {/* 8. TEAM — light, full-bleed photo */}
      <section className="section zone-canvas" aria-labelledby="team-h2">
        <div className="container">
          <RevealGroup>
            <RevealItem><span className="overline">Our People</span></RevealItem>
            <RevealItem>
              <h2 id="team-h2" className="display-md" style={{ marginTop: "var(--sp-3)" }}>
                The team behind Safisha Nchi.
              </h2>
            </RevealItem>
            <RevealItem>
              <p className="body-lg" style={{ marginTop: "1rem", maxWidth: "60ch" }}>
                Spearheaded by Executive Director and Co-Founder <strong>Norah Gakii Nyagah</strong>, and supported by Technical Sub-Consultant <strong>Andrew Njenga Kimani</strong> — a dedicated team of environmentalists, engineers, and community organizers working toward a cleaner Kenya.
              </p>
            </RevealItem>
          </RevealGroup>
          <RevealItem direction="none" className={styles.team__photo}>
            <Image src="/assets/project1.jpg" alt="Safisha Nchi Team" fill style={{ objectFit: "contain", }} />
            <div className={styles.team__caption}>
              <p>Our founder and the core operations team on-site at the Kisumu Central Hub</p>
            </div>
          </RevealItem>
        </div>
      </section>
    </>
  );
}
