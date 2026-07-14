"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import styles from "./page.module.css";
import ContactForm from "@/components/ui/ContactForm";
import { RevealGroup, RevealItem } from "@/components/ui/Reveal";

const contactDetails = [
  {
    icon: (
      <svg viewBox="0 0 24 24" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" className="icon">
        <path d="M6.62 10.79c1.44 2.83 3.76 5.14 6.59 6.59l2.2-2.2c.28-.28.67-.36 1.02-.25 1.12.37 2.33.57 3.57.57.55 0 1 .45 1 1V20c0 .55-.45 1-1 1-9.39 0-17-7.61-17-17 0-.55.45-1 1-1h3.5c.55 0 1 .45 1 1 0 1.25.2 2.45.57 3.57.11.35.03.74-.25 1.02l-2.2 2.2z" />
      </svg>
    ),
    label: "Phone",
    value: " +254 727 107 994 / +254 141 033 779",
    href: "tel:+254 727 107 994",
  },
  {
    icon: (
      <svg viewBox="0 0 24 24" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" className="icon">
        <rect x="2" y="4" width="20" height="16" rx="2" />
        <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7" />
      </svg>
    ),
    label: "Email",
    value: "info@safishanchi.co.ke",
    href: "mailto:info@safishanchi.co.ke",
  },
  {
    icon: (
      <svg viewBox="0 0 24 24" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" className="icon">
        <path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z" />
        <circle cx="12" cy="10" r="3" />
      </svg>
    ),
    label: "Headquarters",
    value: "Kisumu, Kenya",
    href: "https://maps.google.com/?Kisumu,Kenya",
  },
];

const interests = [
  {
    icon: (
      <svg viewBox="0 0 24 24" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="icon">
        <path d="M3 6h18M3 6l1.5 14h15L21 6M3 6l3-3h12l3 3" />
        <path d="M9 11v6M15 11v6" />
      </svg>
    ),
    title: "Waste Collection",
    desc: "Partner with us for scheduled pick-ups for your business or community.",
  },
  {
    icon: (
      <svg viewBox="0 0 24 24" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="icon">
        <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" />
        <circle cx="9" cy="7" r="4" />
        <path d="M23 21v-2a4 4 0 0 0-3-3.87M16 3.13a4 4 0 0 1 0 7.75" />
      </svg>
    ),
    title: "Community Partnerships",
    desc: "Collaborate on awareness campaigns and local recycling initiatives.",
  },
  {
    icon: (
      <svg viewBox="0 0 24 24" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="icon">
        <path d="M12 2v20M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6" />
      </svg>
    ),
    title: "Sponsor a Project",
    desc: "Fund a buy-back centre or our waste pickers programme.",
  },
  {
    icon: (
      <svg viewBox="0 0 24 24" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="icon">
        <path d="M2 3h6a4 4 0 0 1 4 4v14a3 3 0 0 0-3-3H2z" />
        <path d="M22 3h-6a4 4 0 0 0-4 4v14a3 3 0 0 1 3-3h7z" />
      </svg>
    ),
    title: "Consultation",
    desc: "Expert advisory on NEMA compliance and sustainable waste management.",
  },
];

const spring: [number, number, number, number] = [0.16, 1, 0.3, 1];

export default function ContactPage() {
  return (
    <>
      {/* 1. HERO */}
      <section className={`section-100 zone-dark ${styles.hero}`} aria-labelledby="contact-h1">
        <div className={styles.hero__bg}>
          <Image
            src="/assets/happy.jpeg"
            alt="Staff and community members at Safisha Nchi"
            fill priority sizes="100vw"
            style={{ objectFit: "cover", objectPosition: "center 30%" }}
          />
          <div className={styles.hero__overlay} />
        </div>
        <div className={`container ${styles.hero__inner}`}>
          <RevealGroup>
            <RevealItem><span className="overline overline--lime">Get In Touch</span></RevealItem>
            <RevealItem>
              <h1 id="contact-h1" className={`display-xl ${styles.heroTitle}`} style={{ maxWidth: "800px" }}>
                A greener <br />Kenya
              </h1>
            </RevealItem>
            <RevealItem>
              <p className={`body-lg ${styles.heroSubtitle}`}>
                Building clean recycling networks that transform waste into resources across Kenya.
              </p>
            </RevealItem>
          </RevealGroup>
        </div>
      </section>

      {/* 2. INTERESTS STRIP */}
      <section className="section--sm zone-tint">
        <div className="container">
          <RevealGroup>
            <RevealItem>
              <span className="overline">How Can We Help?</span>
            </RevealItem>
          </RevealGroup>
          <div className={styles.interests__grid}>
            {interests.map((item, i) => (
              <motion.div
                key={item.title}
                className={styles.interest__card}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-60px" }}
                transition={{ duration: 0.65, delay: i * 0.1, ease: spring }}
              >
                <div className={styles.interest__icon}>{item.icon}</div>
                <h3 className={styles.interest__title}>{item.title}</h3>
                <p className={styles.interest__desc}>{item.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* 3. CONTACT GRID — light */}
      <section className="section zone-canvas" aria-labelledby="contact-headline">
        <div className="container">
          <div className={styles.contact__grid}>

            {/* Left: details */}
            <RevealGroup className={styles.contact__info}>
              <RevealItem>
                <span className="overline">Contact Details</span>
              </RevealItem>
              <RevealItem>
                <h2 className={`display-md ${styles.contact__headline}`} id="contact-headline">
                  Reach us today.
                </h2>
              </RevealItem>
              <RevealItem>
                <p className="body-md" style={{ marginBottom: "var(--sp-8)", maxWidth: "42ch" }}>
                  We&apos;re always open to conversations about partnerships, sponsorship, and community initiatives. Let&apos;s work together to build a cleaner Kenya.
                </p>
              </RevealItem>

              <div className={styles.details__list}>
                {contactDetails.map((d, i) => (
                  <motion.a
                    key={d.label}
                    href={d.href}
                    className={styles.detail__item}
                    target={d.href.startsWith("http") ? "_blank" : undefined}
                    rel={d.href.startsWith("http") ? "noopener noreferrer" : undefined}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true, margin: "-40px" }}
                    transition={{ duration: 0.55, delay: i * 0.1, ease: spring }}
                  >
                    <div className={styles.detail__icon}>{d.icon}</div>
                    <div>
                      <span className={styles.detail__label}>{d.label}</span>
                      <span className={styles.detail__value}>{d.value}</span>
                    </div>
                  </motion.a>
                ))}
              </div>

              <RevealItem>
                <div className={styles.hours}>
                  <h4 className={styles.hours__title}>Operating Hours</h4>
                  <p className={styles.hours__text}>Monday – Saturday: 8:00 AM – 5:00 PM EAT</p>
                  <p className={styles.hours__text}>Sunday: Closed</p>
                </div>
              </RevealItem>
            </RevealGroup>

            {/* Right: form */}
            <RevealItem direction="right" className={styles.contact__form__wrap}>
              <div className={styles.form__card}>
                <h3 className={styles.form__title}>Send us a Message</h3>
                <p className={styles.form__sub}>
                  Fill in the form and we&apos;ll get back to you shortly.
                </p>
                <ContactForm />
              </div>
            </RevealItem>
          </div>
        </div>
      </section>

      {/* 4. BRAND CLOSE — bold */}
      <section className={styles.map__section} aria-label="Our location" style={{ position: "relative" }}>
        <div className={styles.map__img}>
          <Image
            src="/assets/sitetour.JPG"
            alt="Safisha Nchi Kisumu Central Hub operations"
            fill
            style={{ objectFit: "cover", filter: "grayscale(30%)" }}
          />
          <div className={styles.map__primary__overlay} />
          <div className={styles.map__brand__text}>
            <span className={styles.map__brand__label}>Safisha Nchi</span>
            <span className={styles.map__brand__tagline}>Turning Waste Into Opportunity</span>
          </div>
        </div>
      </section>
    </>
  );
}
