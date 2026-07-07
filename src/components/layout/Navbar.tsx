"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import styles from "./Navbar.module.css";

const navLinks = [
  { label: "Home", href: "/" },
  { label: "Materials", href: "/materials" },
  { label: "About", href: "/about" },
  { label: "Projects", href: "/projects" },
  { label: "Contact", href: "/contact" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const pathname = usePathname();

  // All hero pages have full-bleed imagery (which is now mostly light/faded, but still transparent to start)
  const isHeroPage =
    pathname === "/" ||
    pathname === "/materials" ||
    pathname === "/about" ||
    pathname === "/projects" ||
    pathname === "/contact";

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 48);
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Lock body scroll when mobile menu is open
  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => { document.body.style.overflow = ""; };
  }, [open]);

  const navClass = [
    styles.navbar,
    scrolled ? styles["navbar--scrolled"] : "",
    !scrolled && isHeroPage && !open ? styles["navbar--transparent"] : "",
    open ? styles["navbar--open"] : "",
  ]
    .filter(Boolean)
    .join(" ");

  return (
    <header className={navClass}>
      <div className={styles.navbar__inner}>
        {/* Logo */}
        <Link href="/" className={styles.logo} aria-label="Safisha Nchi home">
          <div className={styles.logo__mark} aria-hidden="true">
            <Image src="/assets/logo.png" alt="" width={72} height={72} className={styles.logo__image} />
          </div>
          <span className={styles.logo__text}>
            Safisha Nchi
          </span>
        </Link>

        {/* Desktop nav links and CTA */}
        <div className={styles.navbar__menu}>
          <nav aria-label="Main navigation">
            <ul className={styles["nav-links"]} data-open={open} id="nav-links">
              {navLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className={pathname === link.href ? styles.active : ""}
                    aria-current={pathname === link.href ? "page" : undefined}
                    onClick={() => setOpen(false)}
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
              <li className={styles["mobile-cta"]}>
                <Link href="/contact" className="btn btn-primary btn-md" onClick={() => setOpen(false)}>
                  Partner With Us
                  <svg viewBox="0 0 24 24" fill="none" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                    <path d="M5 12h14M12 5l7 7-7 7" />
                  </svg>
                </Link>
              </li>
            </ul>
          </nav>
        </div>

        {/* CTA + Mobile toggle */}
        <div className={styles.navbar__actions}>
          <div className={styles["nav-cta"]}>
            <Link href="/contact" className="btn btn-primary btn-md">
              Partner With Us
              <svg viewBox="0 0 24 24" fill="none" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                <path d="M5 12h14M12 5l7 7-7 7" />
              </svg>
            </Link>
          </div>

          {/* Mobile toggle — animated hamburger */}
          <button
            className={`${styles["mobile-toggle"]} ${open ? styles["mobile-toggle--open"] : ""}`}
            onClick={() => setOpen((v) => !v)}
            aria-label={open ? "Close navigation" : "Open navigation"}
            aria-expanded={open}
            aria-controls="nav-links"
          >
            <span />
            <span />
            <span />
          </button>
        </div>
      </div>
    </header>
  );
}
