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

  const [errorMessage, setErrorMessage] = useState("");

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setStatus("submitting");
    setErrorMessage("");

    const formData = new FormData(e.currentTarget);
    const data = {
      name: formData.get("name"),
      email: formData.get("email"),
      phone: formData.get("phone"),
      interest: formData.get("interest"),
      message: formData.get("message"),
    };

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });

      if (!response.ok) {
        let errorMessage = "Failed to send message.";
        try {
          const contentType = response.headers.get("content-type");
          if (contentType && contentType.includes("application/json")) {
            const errorData = await response.json();
            errorMessage = errorData.error || errorMessage;
          } else {
            errorMessage = `Server error (${response.status}). Please try again later.`;
          }
        } catch (parseError) {
          errorMessage = "An unexpected error occurred while parsing the response.";
        }
        throw new Error(errorMessage);
      }

      setStatus("success");
    } catch (err: any) {
      console.error("Form submission error:", err);
      setStatus("error");
      setErrorMessage(err.message || "An unexpected error occurred.");
    }
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
          className="btn btn-primary"
          onClick={() => setStatus("idle")}
          style={{ marginTop: "0.5rem" }}
        >
          Send another message
        </button>
      </div>
    );
  }

  return (
    <form className={styles.connect__form} onSubmit={handleSubmit} noValidate>
      {status === "error" && (
        <div style={{ padding: "1rem", backgroundColor: "#ffebee", color: "#c62828", borderRadius: "8px", marginBottom: "1rem" }}>
          <strong>Error:</strong> {errorMessage}
        </div>
      )}
      <div className={styles.form__row}>
        <div className="form-field">
          <label className="form-label" htmlFor="cf-name">Full Name</label>
          <input className="form-input" type="text" id="cf-name" name="name" required placeholder="Jane Mwangi" autoComplete="name" />
        </div>
        <div className="form-field">
          <label className="form-label" htmlFor="cf-email">Email Address</label>
          <input className="form-input" type="email" id="cf-email" name="email" required placeholder="jane@company.co.ke" autoComplete="email" />
        </div>
      </div>

      <div className="form-field">
        <label className="form-label" htmlFor="cf-phone">Phone Number</label>
        <input className="form-input" type="tel" id="cf-phone" name="phone" placeholder="+254 700 000000" autoComplete="tel" />
      </div>

      <div className="form-field">
        <label className="form-label" htmlFor="cf-interest">Area of Interest</label>
        <select className="form-input" id="cf-interest" name="interest" required defaultValue="">
          <option value="" disabled>Select an option…</option>
          {options.map((opt) => (
            <option key={opt} value={opt}>{opt}</option>
          ))}
        </select>
      </div>

      <div className="form-field">
        <label className="form-label" htmlFor="cf-message">Message</label>
        <textarea
          className="form-input"
          id="cf-message"
          name="message"
          required
          placeholder="Tell us about your waste challenge or how you'd like to partner…"
          rows={4}
        />
      </div>

      <button
        type="submit"
        className="btn btn-primary"
        style={{ width: "100%", justifyContent: "center" }}
        disabled={status === "submitting"}
      >
        {status === "submitting" ? "Sending…" : "Send Message"}
        {status !== "submitting" && (
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
            <path d="M5 12h14M12 5l7 7-7 7" />
          </svg>
        )}
      </button>
    </form>
  );
}
