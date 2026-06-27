"use client";

import { useState } from "react";
import styles from "./ContactForm.module.css";

const options = [
  "Waste Collection",
  "Community Partnerships",
  "Waste Management Consultation",
  "Sponsor a Project",
  "Training on Waste Management",
  "General Inquiry",
];

export default function ContactForm() {
  const [status, setStatus] = useState<"idle" | "submitting" | "success" | "error">("idle");

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setStatus("submitting");
    setTimeout(() => setStatus("success"), 1500);
  };

  if (status === "success") {
    return (
      <div className={styles.success}>
        <div className={styles.success__icon}>
          {/* Thin-stroke checkmark */}
          <svg viewBox="0 0 24 24" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
            <path d="M20 6 9 17l-5-5" />
          </svg>
        </div>
        <h3>Message Sent</h3>
        <p>Thank you for reaching out. Our team will get back to you within 24–48 hours.</p>
        <button
          className="btn btn-outline--dark"
          onClick={() => setStatus("idle")}
          style={{ marginTop: "0.5rem" }}
        >
          Send another message
        </button>
      </div>
    );
  }

  return (
    <form className={styles.form} onSubmit={handleSubmit} noValidate>
      <div className={styles.form__grid}>
        <div className={styles.form__group}>
          <label htmlFor="cf-name">Full Name</label>
          <input type="text" id="cf-name" name="name" required placeholder="Jane Doe" autoComplete="name" />
        </div>
        <div className={styles.form__group}>
          <label htmlFor="cf-email">Email Address</label>
          <input type="email" id="cf-email" name="email" required placeholder="jane@example.com" autoComplete="email" />
        </div>
        <div className={styles.form__group}>
          <label htmlFor="cf-phone">Phone (Optional)</label>
          <input type="tel" id="cf-phone" name="phone" placeholder="+254 700 000 000" autoComplete="tel" />
        </div>
        <div className={styles.form__group}>
          <label htmlFor="cf-interest">Area of Interest</label>
          <div className={styles.select__wrapper}>
            <select id="cf-interest" name="interest" required defaultValue="">
              <option value="" disabled>Select an option</option>
              {options.map((opt) => (
                <option key={opt} value={opt}>{opt}</option>
              ))}
            </select>
            {/* Thin-stroke chevron */}
            <svg
              viewBox="0 0 24 24"
              strokeWidth="1.5"
              strokeLinecap="round"
              strokeLinejoin="round"
              aria-hidden="true"
              className={styles.select__icon}
            >
              <path d="m6 9 6 6 6-6" />
            </svg>
          </div>
        </div>
        <div className={styles.form__group} style={{ gridColumn: "1 / -1" }}>
          <label htmlFor="cf-message">Message</label>
          <textarea
            id="cf-message"
            name="message"
            required
            placeholder="How can we partner together?"
            rows={5}
          />
        </div>
      </div>

      <button
        type="submit"
        className={`btn btn-primary ${styles.submit__btn}`}
        disabled={status === "submitting"}
      >
        {status === "submitting" ? "Sending…" : "Send Message"}
        {status !== "submitting" && (
          <svg viewBox="0 0 24 24" fill="none" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
            <path d="M5 12h14M12 5l7 7-7 7" />
          </svg>
        )}
      </button>
    </form>
  );
}
