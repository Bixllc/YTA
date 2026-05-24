const InstagramIcon = () => (
  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
    <rect x="2" y="2" width="20" height="20" rx="5" ry="5"/>
    <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/>
    <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"/>
  </svg>
);

const MailIcon = () => (
  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
    <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/>
    <polyline points="22,6 12,13 2,6"/>
  </svg>
);

export default function ContactSection() {
  return (
    <section id="contact" style={{ background: "var(--cream)", padding: "140px 52px", position: "relative", borderTop: "1px solid var(--light-border)" }}>
      <div style={{ maxWidth: 1400, margin: "0 auto", display: "grid", gridTemplateColumns: "1fr 1fr", gap: 80 }} className="contact-grid-responsive">

        {/* Left */}
        <div className="reveal-left">
          <p style={{ fontSize: 11, letterSpacing: "0.25em", textTransform: "uppercase", color: "var(--red)", marginBottom: 18, fontFamily: "var(--font-dm)" }}>
            Let&apos;s Connect
          </p>
          <h2 style={{ fontFamily: "var(--font-bebas)", fontSize: "clamp(52px, 6vw, 86px)", lineHeight: 0.93, letterSpacing: "0.015em", color: "var(--ink)", marginBottom: 28 }}>
            Work<br />With Us
          </h2>
          <div style={{ width: 36, height: 3, background: "var(--red)", marginBottom: 32 }} />
          <p style={{ fontSize: 17, lineHeight: 1.75, color: "var(--mid)", marginBottom: 52, fontFamily: "var(--font-dm)" }}>
            Whether you&apos;re a brand looking to partner with our talent, or a creator ready for representation — we want to hear from you.
          </p>

          <div style={{ display: "flex", flexDirection: "column", gap: 14 }}>
            <a
              href="mailto:yta@younglifemanagement.com"
              style={{ display: "flex", alignItems: "center", gap: 16, color: "var(--mid)", textDecoration: "none", fontSize: 14, padding: "18px 22px", border: "1px solid var(--light-border)", background: "var(--paper)", transition: "border-color .2s, color .2s, background .2s", fontFamily: "var(--font-dm)" }}
              onMouseEnter={e => { const el = e.currentTarget as HTMLElement; el.style.borderColor = "var(--red)"; el.style.color = "var(--red)"; el.style.background = "#fff"; }}
              onMouseLeave={e => { const el = e.currentTarget as HTMLElement; el.style.borderColor = "var(--light-border)"; el.style.color = "var(--mid)"; el.style.background = "var(--paper)"; }}
            >
              <MailIcon />
              yta@younglifemanagement.com
            </a>
            <a
              href="https://instagram.com/yngtlntagency"
              target="_blank"
              rel="noopener noreferrer"
              style={{ display: "flex", alignItems: "center", gap: 16, color: "var(--mid)", textDecoration: "none", fontSize: 14, padding: "18px 22px", border: "1px solid var(--light-border)", background: "var(--paper)", transition: "border-color .2s, color .2s, background .2s", fontFamily: "var(--font-dm)" }}
              onMouseEnter={e => { const el = e.currentTarget as HTMLElement; el.style.borderColor = "var(--red)"; el.style.color = "var(--red)"; el.style.background = "#fff"; }}
              onMouseLeave={e => { const el = e.currentTarget as HTMLElement; el.style.borderColor = "var(--light-border)"; el.style.color = "var(--mid)"; el.style.background = "var(--paper)"; }}
            >
              <InstagramIcon />
              @yngtlntagency
            </a>
          </div>
        </div>

        {/* Right — two cards */}
        <div className="reveal" style={{ display: "flex", flexDirection: "column", gap: 16, justifyContent: "center" }}>
          <div className="c-card">
            <h3 style={{ fontFamily: "var(--font-bebas)", fontSize: 30, letterSpacing: "0.05em", color: "var(--ink)", marginBottom: 12 }}>For Brands</h3>
            <p style={{ fontSize: 14, color: "var(--mid)", lineHeight: 1.65, marginBottom: 28, fontFamily: "var(--font-dm)" }}>
              Looking to partner with our talent? Reach out with your campaign details and we&apos;ll connect you with the right fit.
            </p>
            <a
              href="mailto:yta@younglifemanagement.com"
              style={{ background: "var(--ink)", color: "#fff", padding: "13px 30px", fontSize: 11, letterSpacing: "0.12em", textTransform: "uppercase", textDecoration: "none", display: "inline-block", fontFamily: "var(--font-dm)", transition: "background .2s, transform .2s" }}
              onMouseEnter={e => { const el = e.currentTarget as HTMLElement; el.style.background = "var(--red)"; el.style.transform = "translateY(-1px)"; }}
              onMouseLeave={e => { const el = e.currentTarget as HTMLElement; el.style.background = "var(--ink)"; el.style.transform = ""; }}
            >
              Start a Partnership
            </a>
          </div>

          <div className="c-card">
            <h3 style={{ fontFamily: "var(--font-bebas)", fontSize: 30, letterSpacing: "0.05em", color: "var(--ink)", marginBottom: 12 }}>For Talent</h3>
            <p style={{ fontSize: 14, color: "var(--mid)", lineHeight: 1.65, marginBottom: 28, fontFamily: "var(--font-dm)" }}>
              Are you a creator or athlete looking for representation? We work with talent at every stage. Send us your profile and let&apos;s talk.
            </p>
            <a
              href="mailto:yta@younglifemanagement.com"
              style={{ background: "var(--ink)", color: "#fff", padding: "13px 30px", fontSize: 11, letterSpacing: "0.12em", textTransform: "uppercase", textDecoration: "none", display: "inline-block", fontFamily: "var(--font-dm)", transition: "background .2s, transform .2s" }}
              onMouseEnter={e => { const el = e.currentTarget as HTMLElement; el.style.background = "var(--red)"; el.style.transform = "translateY(-1px)"; }}
              onMouseLeave={e => { const el = e.currentTarget as HTMLElement; el.style.background = "var(--ink)"; el.style.transform = ""; }}
            >
              Join Our Roster
            </a>
          </div>
        </div>
      </div>

      <style>{`
        @media (max-width: 768px) {
          .contact-grid-responsive { grid-template-columns: 1fr !important; gap: 48px !important; }
        }
      `}</style>
    </section>
  );
}
