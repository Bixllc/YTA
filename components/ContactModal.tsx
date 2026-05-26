"use client";
import { useEffect, useState, useRef } from "react";

export type ContactType = "brand" | "talent" | "general";

interface FormData {
  name: string;
  email: string;
  phone: string;
  context: string; // brand name OR instagram handle OR subject
  message: string;
}

const CONFIG: Record<ContactType, { title: string; contextLabel: string; contextPlaceholder: string }> = {
  brand: {
    title: "Start a Partnership",
    contextLabel: "Brand / Company",
    contextPlaceholder: "Your brand or company name",
  },
  talent: {
    title: "Join Our Roster",
    contextLabel: "Instagram Handle",
    contextPlaceholder: "@yourhandle",
  },
  general: {
    title: "Contact Us",
    contextLabel: "Subject",
    contextPlaceholder: "What can we help with?",
  },
};

const EMPTY: FormData = { name: "", email: "", phone: "", context: "", message: "" };

export default function ContactModal() {
  const [open, setOpen] = useState(false);
  const [type, setType] = useState<ContactType>("general");
  const [form, setForm] = useState<FormData>(EMPTY);
  const [submitted, setSubmitted] = useState(false);
  const [submitting, setSubmitting] = useState(false);
  const overlayRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handler = (e: Event) => {
      const detail = (e as CustomEvent<{ type?: ContactType }>).detail;
      setType(detail?.type ?? "general");
      setForm(EMPTY);
      setSubmitted(false);
      setOpen(true);
    };
    window.addEventListener("open-contact", handler);
    return () => window.removeEventListener("open-contact", handler);
  }, []);

  // Lock scroll
  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => { document.body.style.overflow = ""; };
  }, [open]);

  // Escape key
  useEffect(() => {
    const handler = (e: KeyboardEvent) => { if (e.key === "Escape") setOpen(false); };
    window.addEventListener("keydown", handler);
    return () => window.removeEventListener("keydown", handler);
  }, []);

  const cfg = CONFIG[type];

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setForm((f) => ({ ...f, [e.target.name]: e.target.value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitting(true);

    const subject = `[YTA] ${cfg.title} — ${form.name}`;
    const body = [
      `Name: ${form.name}`,
      `Email: ${form.email}`,
      `Phone: ${form.phone || "—"}`,
      `${cfg.contextLabel}: ${form.context || "—"}`,
      `Message: ${form.message}`,
    ].join("\n");

    // Open mailto as fallback delivery
    window.location.href = `mailto:yta@younglifemanagement.com?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;

    // Small delay then show success
    setTimeout(() => {
      setSubmitting(false);
      setSubmitted(true);
    }, 600);
  };

  if (!open) return null;

  return (
    <div
      ref={overlayRef}
      onClick={(e) => { if (e.target === overlayRef.current) setOpen(false); }}
      style={{
        position: "fixed", inset: 0, zIndex: 1000,
        background: "rgba(26,23,20,0.55)",
        backdropFilter: "blur(6px)",
        display: "flex", alignItems: "center", justifyContent: "center",
        padding: "24px",
        animation: "fadeIn .22s ease",
      }}
    >
      <div
        style={{
          background: "#fff",
          width: "100%",
          maxWidth: 520,
          maxHeight: "90vh",
          overflowY: "auto",
          padding: "clamp(28px, 6vw, 52px) clamp(20px, 5vw, 48px) clamp(24px, 5vw, 48px)",
          position: "relative",
          animation: "slideUp .28s cubic-bezier(.16,1,.3,1)",
        }}
      >
        {/* Close */}
        <button
          onClick={() => setOpen(false)}
          style={{
            position: "absolute", top: 20, right: 20,
            background: "none", border: "none",
            width: 36, height: 36,
            display: "flex", alignItems: "center", justifyContent: "center",
            color: "var(--mid)", fontSize: 20,
          }}
          aria-label="Close"
        >
          ✕
        </button>

        {submitted ? (
          <div style={{ textAlign: "center", padding: "20px 0" }}>
            <div style={{ width: 48, height: 48, borderRadius: "50%", background: "rgba(200,32,42,0.1)", display: "flex", alignItems: "center", justifyContent: "center", margin: "0 auto 24px" }}>
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="var(--red)" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                <polyline points="20 6 9 17 4 12" />
              </svg>
            </div>
            <h3 style={{ fontFamily: "var(--font-bebas)", fontSize: 32, letterSpacing: "0.04em", color: "var(--ink)", marginBottom: 12 }}>
              Message Sent
            </h3>
            <p style={{ fontSize: 14, color: "var(--mid)", lineHeight: 1.7, fontFamily: "var(--font-dm)", marginBottom: 32 }}>
              Thanks for reaching out. We&apos;ll be in touch shortly.
            </p>
            <button
              onClick={() => setOpen(false)}
              style={{
                background: "var(--ink)", color: "#fff",
                padding: "13px 36px", border: "none",
                fontFamily: "var(--font-dm)", fontSize: 12,
                letterSpacing: "0.12em", textTransform: "uppercase",
              }}
            >
              Done
            </button>
          </div>
        ) : (
          <>
            {/* Header */}
            <p style={{ fontSize: 11, letterSpacing: "0.22em", textTransform: "uppercase", color: "var(--red)", marginBottom: 10, fontFamily: "var(--font-dm)" }}>
              {type === "brand" ? "For Brands" : type === "talent" ? "For Talent" : "Get In Touch"}
            </p>
            <h2 style={{ fontFamily: "var(--font-bebas)", fontSize: 38, letterSpacing: "0.03em", color: "var(--ink)", marginBottom: 36, lineHeight: 1 }}>
              {cfg.title}
            </h2>

            <form onSubmit={handleSubmit} style={{ display: "flex", flexDirection: "column", gap: 18 }}>
              {/* Name + Email */}
              <div className="modal-field-row" style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 14 }}>
                <Field label="Name" name="name" type="text" placeholder="Your full name" value={form.name} onChange={handleChange} required />
                <Field label="Email" name="email" type="email" placeholder="your@email.com" value={form.email} onChange={handleChange} required />
              </div>

              {/* Phone + Context */}
              <div className="modal-field-row" style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 14 }}>
                <Field label="Phone" name="phone" type="tel" placeholder="+1 (555) 000-0000" value={form.phone} onChange={handleChange} />
                <Field label={cfg.contextLabel} name="context" type="text" placeholder={cfg.contextPlaceholder} value={form.context} onChange={handleChange} />
              </div>

              {/* Message */}
              <div style={{ display: "flex", flexDirection: "column", gap: 6 }}>
                <label style={{ fontSize: 11, letterSpacing: "0.12em", textTransform: "uppercase", color: "var(--mid)", fontFamily: "var(--font-dm)" }}>
                  Message
                </label>
                <textarea
                  name="message"
                  rows={4}
                  placeholder="Tell us more…"
                  value={form.message}
                  onChange={handleChange}
                  style={{
                    border: "1px solid var(--light-border)",
                    background: "var(--paper)",
                    padding: "14px 16px",
                    fontSize: 14,
                    fontFamily: "var(--font-dm)",
                    color: "var(--ink)",
                    resize: "vertical",
                    outline: "none",
                    transition: "border-color .2s",
                  }}
                  onFocus={(e) => (e.target.style.borderColor = "var(--red)")}
                  onBlur={(e) => (e.target.style.borderColor = "var(--light-border)")}
                />
              </div>

              <button
                type="submit"
                disabled={submitting}
                style={{
                  background: "var(--red)", color: "#fff",
                  padding: "16px", border: "none",
                  fontFamily: "var(--font-dm)", fontSize: 12,
                  letterSpacing: "0.14em", textTransform: "uppercase",
                  marginTop: 6, opacity: submitting ? 0.7 : 1,
                  transition: "opacity .2s, transform .2s",
                }}
                onMouseEnter={(e) => { if (!submitting) (e.currentTarget as HTMLElement).style.background = "var(--red-dark)"; }}
                onMouseLeave={(e) => { (e.currentTarget as HTMLElement).style.background = "var(--red)"; }}
              >
                {submitting ? "Sending…" : "Send Message"}
              </button>
            </form>
          </>
        )}
      </div>

      <style>{`
        @keyframes fadeIn { from { opacity: 0 } to { opacity: 1 } }
        @keyframes slideUp { from { opacity: 0; transform: translateY(24px) } to { opacity: 1; transform: translateY(0) } }
        @media (max-width: 540px) {
          .modal-field-row { grid-template-columns: 1fr !important; }
        }
      `}</style>
    </div>
  );
}

function Field({ label, name, type, placeholder, value, onChange, required }: {
  label: string; name: string; type: string; placeholder: string;
  value: string; onChange: (e: React.ChangeEvent<HTMLInputElement>) => void; required?: boolean;
}) {
  return (
    <div style={{ display: "flex", flexDirection: "column", gap: 6 }}>
      <label style={{ fontSize: 11, letterSpacing: "0.12em", textTransform: "uppercase", color: "var(--mid)", fontFamily: "var(--font-dm)" }}>
        {label}
      </label>
      <input
        name={name}
        type={type}
        placeholder={placeholder}
        value={value}
        onChange={onChange}
        required={required}
        style={{
          border: "1px solid var(--light-border)",
          background: "var(--paper)",
          padding: "13px 16px",
          fontSize: 14,
          fontFamily: "var(--font-dm)",
          color: "var(--ink)",
          outline: "none",
          transition: "border-color .2s",
          width: "100%",
        }}
        onFocus={(e) => (e.target.style.borderColor = "var(--red)")}
        onBlur={(e) => (e.target.style.borderColor = "var(--light-border)")}
      />
    </div>
  );
}
