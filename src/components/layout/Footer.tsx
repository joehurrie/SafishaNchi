"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import styles from "./Footer.module.css";

const footerNav = [
  {
    title: "Navigate",
    links: [
      { label: "Home", href: "/" },
      { label: "Materials", href: "/materials" },
      { label: "About Us", href: "/about" },
      { label: "Projects", href: "/projects" },
      { label: "Contact", href: "/contact" },
    ],
  },
  {
    title: "Projects",
    links: [
      { label: "Kisumu Central Hub", href: "/projects/kisumu-project" },
      { label: "Carbon Emission Measurement", href: "/projects/carbon-emission" },
      { label: "KIWAN Network", href: "/projects/kiwan-network" },
    ],
  },
  {
    title: "Get Involved",
    links: [
      { label: "Waste Collection", href: "/contact" },
      { label: "Community Partnerships", href: "/contact" },
      { label: "Sponsor a Project", href: "/contact" },
      { label: "Training", href: "/contact" },
    ],
  },
];

export default function Footer() {
  const [email, setEmail] = useState("");
  const [status, setStatus] = useState<"idle" | "submitting" | "success" | "error">("idle");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!email) return;
    setStatus("submitting");
    try {
      const res = await fetch("/api/newsletter", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email }),
      });
      if (!res.ok) throw new Error("Failed to subscribe");
      setStatus("success");
    } catch {
      setStatus("error");
    }
  };

  return (
    <footer className={styles.footer__wrap}>
      <div className={styles.footer__card}>

        {/* ── Top Row: Logo + Brand + Quick icon links ── */}
        <div className={styles.top__row}>
          {/* Logo + brand name */}
          <Link href="/" className={styles.brand} aria-label="Safisha Nchi home">
            <Image
              src="/assets/logo.png"
              alt="Safisha Nchi"
              width={180}
              height={180}
              className={styles.logo__img}
            />
            <div className={styles.brand__text}>
              <span className={styles.brand__name}>Safisha Nchi</span>
              <span className={styles.brand__tagline}>&quot;Clean The Country&quot;</span>
            </div>
          </Link>
        </div>

        {/* ── Middle: Newsletter + Contact cols + Nav cols ── */}
        <div className={styles.middle__row}>

          {/* Newsletter */}
          <div className={styles.newsletter}>
            <h3 className={styles.newsletter__heading}>Stay updated</h3>
            <p className={styles.newsletter__desc}>Subscribe to news and updates regarding our waste management services.</p>
            {status === "success" ? (
              <p className={styles.newsletter__success}>
                ✓ You&apos;re subscribed! We&apos;ll be in touch soon.
              </p>
            ) : (
              <form onSubmit={handleSubmit} className={styles.newsletter__form}>
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="Your email address"
                  className={styles.newsletter__input}
                  required
                  disabled={status === "submitting"}
                  aria-label="Email address"
                  id="footer-email"
                />
                <button
                  type="submit"
                  className={styles.newsletter__btn}
                  aria-label="Sign up"
                  disabled={status === "submitting"}
                >
                  {status === "submitting" ? "Sending…" : "Sign Up"}
                  {status !== "submitting" && (
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                      <path d="M7 17L17 7M7 7h10v10" />
                    </svg>
                  )}
                </button>
              </form>
            )}
            {status === "error" && (
              <p className={styles.newsletter__error}>
                Something went wrong. Please try again.
              </p>
            )}
            <div className={styles.contact__info}>
              <a href="tel:+254727107994" className={styles.contact__link}>+254 727 107 994</a>
              <a href="mailto:info@safishanchi.com" className={styles.contact__link}>info@safishanchi.com</a>
            </div>
          </div>

          {/* Nav columns */}
          {footerNav.map((col) => (
            <div key={col.title} className={styles.nav__col}>
              <h4 className={styles.nav__col__title}>{col.title}</h4>
              <ul>
                {col.links.map((link) => (
                  <li key={link.label}>
                    <Link href={link.href} className={styles.nav__link}>{link.label}</Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* ── Bottom bar ── */}
        <div className={styles.bottom__bar}>
          <span className={styles.copyright}>
            © {new Date().getFullYear()} Safisha Nchi Limited. All rights reserved.
          </span>
          <div className={styles.legal}>
            <a href="#" className={styles.legal__link}>Privacy Policy</a>
            <a href="#" className={styles.legal__link}>Terms of Service</a>
          </div>
        </div>

      </div>
    </footer>
  );
}
