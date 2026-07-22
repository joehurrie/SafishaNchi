"use client";

import { useState } from "react";

import Image from "next/image";
import Link from "next/link";
import styles from "./page.module.css";
import AnimatedCounter from "@/components/ui/AnimatedCounter";
import ImpactCard, { ImpactCardData } from "@/components/ui/ImpactCard";
import Typewriter from "@/components/ui/Typewriter";
import ExpertiseGrid from "@/components/ui/ExpertiseGrid";
import PartnerMarquee from "@/components/ui/PartnerMarquee";
import ProjectsShowcase from "@/components/ui/ProjectsShowcase";
import ContactForm from "@/components/ui/ContactForm";
import { RevealGroup, RevealItem, SPRING } from "@/components/ui/Reveal";

// ─── Static data ────────────────────────────────────────────────
const partners = [
  { name: "Kisumu County Government", src: "/assets/County Government of Kisumu-logo.jfif" },
  { name: "NEMA Kenya", src: "/assets/nema logo.jfif" },
  { name: "KEPRO", src: "/assets/kepro-logo.png" },
  { name: "New Life Mission Aid", src: "/assets/New Life Mission Aid.jfif" },
];

const impactCards: ImpactCardData[] = [
  {
    id: "diverted",
    label: "Waste Diverted from Landfills",
    value: 360,
    suffix: "T+",
    metric: "Tonnes",
    detail:
      "360+ metric tonnes of post-consumer plastics, glass, and fibre recovered from communities material that would otherwise enter waterways or open dumps.",
    img: "/assets/bales2.jpeg",
    imgAlt: "Baled plastics at Safisha Nchi processing hub",
  },
  {
    id: "collectors",
    label: "Informal Collectors Supported",
    value: 150,
    suffix: "+",
    metric: "People",
    detail:
      "Over 150 informal waste pickers integrated into our formal collection network, receiving transparent pricing, PPE, health training, and financial literacy support.",
    img: "/assets/wastepicker.png",
    imgAlt: "Waste pickers at community buy-back centre",
  },
  {
    id: "hubs",
    label: "Community Buy-Back Centres",
    value: 8,
    suffix: "",
    metric: "Hubs",
    detail:
      "Eight collection hubs each operating transparent weighing systems and immediate cash payment to engage informal waste pickers in the circular waste management model.",
    img: "/assets/buyback.jpeg",
    imgAlt: "Safisha Nchi buy-back centre operations",
  },
  {
    id: "co2",
    label: "CO₂ Equivalent Offset",
    value: 270,
    suffix: "T",
    metric: "CO₂",
    detail:
      "Recycling 360+ tonnes of material avoids the equivalent of 270 tonnes of CO₂, compared to virgin material production and open landfill decomposition.",
    img: "/assets/emmisions3.jpeg",
    imgAlt: "Community tree planting and environmental cleanup",
  },
];

// ─── Homepage ───────────────────────────────────────────────────
export default function Home() {
  const [hoveredImpact, setHoveredImpact] = useState<string | null>(null);

  return (
    <>
      {/* ═══════════════════════════════════════════
          1. HERO
      ═══════════════════════════════════════════ */}
      <section className={styles.hero} aria-labelledby="hero-h1">
        <div className={styles.hero__bg}>
          <Image
            src="/assets/img.png"
            alt="Safisha Nchi waste management and recycling operations, Kisumu Kenya"
            fill priority
            style={{ objectFit: "cover", objectPosition: "center" }}
          />
          <div className={styles.hero__veil} />
        </div>

        <div className={`container ${styles.hero__body}`}>
          <RevealGroup className={styles.hero__copy}>

            <RevealItem>
              <h1 className={`display-xl ${styles.hero__h1}`} id="hero-h1">
                Recycling Waste,<br /> Changing <span style={{ color: "var(--lime)" }}>Livelihoods</span>
              </h1>
            </RevealItem>
            <RevealItem>
              <p className={styles.hero__sub}>
                We turn waste into resources, creating livelihoods for communities while protecting Kenya&apos;s environment.
              </p>
            </RevealItem>
            <RevealItem>
              <div className={styles.hero__actions}>
                <Link href="/materials" className="btn btn-primary">
                  How We Operate
                  <svg viewBox="0 0 24 24" aria-hidden="true" fill="none" stroke="currentColor"><path d="M5 12h14M12 5l7 7-7 7" /></svg>
                </Link>
                <Link href="/contact" className="btn btn-outline-white">
                  Work With Us
                </Link>
              </div>
            </RevealItem>
          </RevealGroup>
        </div>

        {/* Scroll indicator — outside container so it positions relative to the full hero section */}
        <div className={styles.hero__scroll} aria-hidden="true">
          <div className={styles.scroll__bar} />
          <span>Scroll</span>
        </div>
      </section>



      {/* ═══════════════════════════════════════════
          2. ABOUT — Concise summary
      ═══════════════════════════════════════════ */}
      <section className={`section zone-canvas ${styles.about}`} aria-labelledby="about-h2">
        <div className="container">
          <div className={styles.about__grid}>

            {/* Left: statement */}
            <RevealGroup className={styles.about__left}>
              <RevealItem><span className="overline">About Safisha Nchi Ltd.</span></RevealItem>
              <RevealItem>
                <h2 className={`display-lg ${styles.about__headline}`} id="about-h2">
                  Waste Management<br />for a Better Environment.
                </h2>
              </RevealItem>
            </RevealGroup>

            {/* Right: concise summary */}
            <RevealGroup className={styles.about__right}>
              <RevealItem>
                <p className={styles.about__para}>
                  Safisha Nchi provides comprehensive recycling and waste management services, collecting, sorting, and processing recyclable materials into valuable resources while creating green jobs within a circular economy.
                </p>
              </RevealItem>

              {/* Credentials row */}
              <RevealItem>
                <div className={styles.about__credentials}>
                  {["NEMA Certified", "KIWAN Member", "Waste-to-Green-Jobs", "5+ Years Operating", "EPR COMPLIANT", "WASTE MANAGEMENT CONSULTATION", "CIRCULAR WASTE MANAGEMENT"].map((c) => (
                    <span key={c} className="chip chip--outline">{c}</span>
                  ))}
                </div>
              </RevealItem>
            </RevealGroup>
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════
          3. IMPACT — Full-bleed 100vh image strip
      ═══════════════════════════════════════════ */}
      <section
        className={styles.impact__section}
        aria-labelledby="impact-h2"
        aria-label="Measurable Impact"
      >
        <div className="container" style={{ paddingBottom: "1.5rem" }}>
          <RevealGroup className={styles.impact__label__row}>
            <RevealItem><span className="overline">Our Impact</span></RevealItem>
            <RevealItem>
              <h2 className="display-sm" id="impact-h2" style={{ marginTop: "0.25rem" }}>
                Measurable progress.
              </h2>
            </RevealItem>
          </RevealGroup>
        </div>

        {/* Horizontal strip of image columns */}
        <RevealItem className={styles.impact__wrap}>
          <div className={styles.impact__strip} role="list">
            {impactCards.map((card, i) => (
              <ImpactCard
                key={card.id}
                card={card}
                delay={i * 0.05}
                isHovered={hoveredImpact === card.id}
                onHover={setHoveredImpact}
                anyHovered={hoveredImpact !== null}
              />
            ))}
          </div>
        </RevealItem>
      </section>



      {/* ═══════════════════════════════════════════
          5. EXPERTISE ACCORDION
      ═══════════════════════════════════════════ */}
      <section className={`section zone-tint ${styles.expertise__section}`} aria-labelledby="expertise-h2">
        <div className="container">
          <div className={styles.expertise__header}>
            <RevealGroup>
              <RevealItem><span className="overline">Our Expertise</span></RevealItem>
              <RevealItem>
                <h2 className="display-md" id="expertise-h2" style={{ marginTop: "0.5rem" }}>
                  Our Waste Management System.
                </h2>
              </RevealItem>
              <RevealItem>
                <p className="body-md" style={{ marginTop: "0.75rem", maxWidth: "56ch" }}>
                  Interconnected service streams working as one, from
                  community collection through sorting, recycling, training,
                  consulting, and waste picker empowerment.
                </p>
              </RevealItem>
            </RevealGroup>
          </div>
          <RevealItem>
            <ExpertiseGrid />
          </RevealItem>
        </div>
      </section>

      {/* ═══════════════════════════════════════════
          6. FULL-BLEED BANNER
      ═══════════════════════════════════════════ */}
      <section className={styles.banner} aria-label="Community empowerment through recycling">
        <div className={styles.banner__img}>
          <Image
            src="/assets/sitetour.JPG"
            alt="Community waste collection drives in Kisumu informal settlements"
            fill
            style={{ objectFit: "cover", objectPosition: "center 40%" }}
          />
          <div className={styles.banner__veil} />
        </div>
        <div className={`container ${styles.banner__content}`}>
          <RevealItem>
            <Typewriter
              className={`display-md ${styles.banner__headline}`}
              delay={0.4}
              lines={[
                "We don't just manage waste.We build environmental and economic infrastructure."

              ]}
            />
            <p className={styles.banner__sub}>
              Every tonne collected generates income for women and youth in our communities, turning what was once waste into a sustainable livelihood.
            </p>
          </RevealItem>
          <RevealItem>
            <Link href="/about" className="btn btn-primary">
              Learn More
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" aria-hidden="true"><path d="M5 12h14M12 5l7 7-7 7" /></svg>
            </Link>
          </RevealItem>
        </div>
      </section>

      {/* ═══════════════════════════════════════════
          7. DUAL CTA — Investors + Consultation
      ═══════════════════════════════════════════ */}
      <section className={`section zone-alt ${styles.dual__cta}`} aria-label="Partnership and consultation options">
        <div className="container">
          <div className={styles.dual__grid}>

            {/* Card A — Investor / Partner callout (photo) */}
            <RevealItem className={styles.cta__card__a}>
              <div className={styles.cta__a__img}>
                <Image src="/assets/team1.jpeg" alt="Safisha Nchi partnership meetings" fill sizes="(max-width: 768px) 100vw, 50vw" style={{ objectFit: "cover" }} />
                <div className={styles.cta__a__img__veil} />
              </div>
              <div className={styles.cta__a__body}>
                <span className={`overline overline--on-dark`}>For Investors &amp; Partners</span>
                <h2 className={`display-sm ${styles.cta__a__headline}`}>
                  Enabling investors and partners to contribute to Kenya&apos;s circular economy.
                </h2>
              </div>
            </RevealItem>

            {/* Card B — Free consultation (primary green) */}
            <RevealItem className={styles.cta__card__b}>
              <span className="overline overline--lime">Free Consultation</span>
              <h2 className={`display-sm ${styles.cta__b__headline}`}>
                Ready to recycle smarter? Book a free consultation.
              </h2>
              <p className={styles.cta__b__desc}>
                Whether you run a church, hotel, school, manufacturing plant, or
                county authority, our team will analyse your current waste
                profile and design a compliant, cost-effective diversion plan.
                No obligation, no jargon.
              </p>

              <div className={styles.cta__b__points}>
                {[
                  "On-site waste audit included",
                  "NEMA compliance gap analysis",
                  "Custom collection schedule",
                  "ESG reporting support",
                ].map((pt, i) => (
                  <RevealItem key={pt} delay={i * 0.08}>
                    <div className={styles.cta__point}>
                      <div className={styles.point__dot} aria-hidden="true" />
                      <span>{pt}</span>
                    </div>
                  </RevealItem>
                ))}
              </div>

              <Link href="/contact" className="btn btn-outline-white" style={{ marginTop: "2rem", alignSelf: "flex-start" }}>
                Book a Free Consultation
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" aria-hidden="true"><path d="M5 12h14M12 5l7 7-7 7" /></svg>
              </Link>
            </RevealItem>
          </div>
        </div>
      </section>
      {/* ═══════════════════════════════════════════
          4. PARTNERS CAROUSEL
      ═══════════════════════════════════════════ */}
      <section className={`${styles.partners} zone-tint`} aria-label="Partner organisations" style={{ paddingBottom: "var(--sp-12)" }}>
        <div className="container">
          <RevealItem>
            <p className={styles.partners__eyebrow}>
              OUR PARTNERS AND STAKEHOLDERS
            </p>
          </RevealItem>
        </div>
        <RevealItem>
          <PartnerMarquee />
        </RevealItem>
      </section>

      {/* ═══════════════════════════════════════════
          8. PROJECTS SHOWCASE
      ═══════════════════════════════════════════ */}
      <section className={`section zone-canvas ${styles.projects__section}`} aria-labelledby="projects-h2">
        <div className="container">
          <div className={styles.projects__header}>
            <RevealGroup>
              <RevealItem><span className="overline">Our Projects</span></RevealItem>
              <RevealItem>
                <h2 className="display-md" id="projects-h2" style={{ marginTop: "0.5rem" }}>
                  Our Projects.
                </h2>
              </RevealItem>
              <RevealItem>
                <p className="body-md" style={{ marginTop: "0.75rem", maxWidth: "52ch" }}>
                  Click any project to explore the full story. Each one is a step
                  in building Kenya&apos;s circular economy, ground up.
                </p>
              </RevealItem>
            </RevealGroup>
          </div>
          <RevealItem>
            <ProjectsShowcase />
          </RevealItem>
        </div>
      </section>

      {/* ═══════════════════════════════════════════
          9. MAP — Location hub section
      ═══════════════════════════════════════════ */}
      <section className={`${styles.map__section}`} aria-labelledby="map-h2">
        <div className={styles.map__header}>
          <div className="container">
            <RevealGroup>
              <RevealItem><span className="overline">Find Us</span></RevealItem>
              <RevealItem>
                <h2 className="display-sm" id="map-h2" style={{ marginTop: "0.4rem" }}>
                  Our processing hubs &amp; Buy-Back Centres across Kisumu.
                </h2>
              </RevealItem>
            </RevealGroup>
          </div>
        </div>

        <div className={styles.map__embed}>
          <iframe
            title="Safisha Nchi locations in Kisumu, Kenya"
            src="https://www.google.com/maps/d/u/1/embed?mid=1uz_o-RIaJN7Z_NkptlCzs6jrU0NrzRA&ehbc=2E312F&noprof=1"
            width="100%"
            height="100%"
            style={{ border: 0, filter: "grayscale(15%) contrast(1.05)" }}
            allowFullScreen
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          />

          {/* Hub legend overlay */}
          <RevealItem className={styles.map__legend}>
            <div className={styles.map__legend__title}>Collection Network</div>
            <div className={styles.map__legend__item}>
              <div className={`${styles.map__dot} ${styles.map__dot__main}`} />
              <span>Kisumu Central Hub, Main Processing Site</span>
            </div>

            <Link href="/contact" className={`btn btn-primary ${styles.map__legend__btn}`}>
              Get Directions
            </Link>
          </RevealItem>
        </div>
      </section>

      {/* ═══════════════════════════════════════════
          10. CONNECT / CONTACT PREVIEW
      ═══════════════════════════════════════════ */}
      <section className={`section zone-dark ${styles.connect}`} aria-labelledby="connect-h2">
        <div className="container">
          <div className={styles.connect__grid}>
            <RevealGroup className={styles.connect__left}>
              <RevealItem><span className="overline overline--on-dark">Get in Touch</span></RevealItem>
              <RevealItem>
                <h2 className={`display-lg ${styles.connect__headline}`} id="connect-h2">
                  Get In Touch
                </h2>
              </RevealItem>
              <RevealItem>
                <p className={styles.connect__sub}>
                  Waste collection contracts, community partnerships, investment
                  discussions, or NEMA compliance advisory.
                </p>
              </RevealItem>
              <RevealItem>
                <div className={styles.connect__details}>
                  {[
                    { icon: "📞", val: "+254 727 107 994", href: "tel:+25414103377" },
                    { icon: "✉️", val: "info@safishanchi.com", href: "mailto:info@safishanchi.com" },
                  ].map((d, i) => (
                    <RevealItem key={d.val} delay={0.1 + i * 0.1}>
                      <a href={d.href} className={styles.connect__detail} target={d.href.startsWith("http") ? "_blank" : undefined} rel="noopener noreferrer">
                        <span className={styles.connect__detail__icon}>{d.icon}</span>
                        <span>{d.val}</span>
                      </a>
                    </RevealItem>
                  ))}
                </div>
              </RevealItem>
            </RevealGroup>

            <RevealItem className={styles.connect__form__card}>
              <h3 className={styles.form__card__title}>Send us a message</h3>
              <ContactForm />
            </RevealItem>
          </div>
        </div>
      </section>
    </>
  );
}