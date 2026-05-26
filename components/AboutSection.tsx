const STATS = [
  { n: "9", sup: "+", label: "Brand Partners" },
  { n: "2", sup: "+", label: "Talent Roster" },
  { n: "45", sup: "K", label: "Total Followers" },
  { n: "1.8", sup: "M", label: "TikTok Likes" },
];

export default function AboutSection() {
  return (
    <section id="about" style={{ background: "var(--cream)", padding: "140px 52px", position: "relative", overflow: "hidden" }}>
      <div style={{ display: "grid", gridTemplateColumns: "1fr 1.1fr", gap: 100, alignItems: "start", maxWidth: 1400, margin: "0 auto" }} className="about-responsive-grid">
        {/* Left */}
        <div className="reveal-left">
          <p style={{ fontSize: 11, letterSpacing: "0.25em", textTransform: "uppercase", color: "var(--red)", marginBottom: 18, fontFamily: "var(--font-dm)" }}>
            Who We Are
          </p>
          <h2 style={{ fontFamily: "var(--font-bebas)", fontSize: "clamp(52px, 6vw, 86px)", lineHeight: 0.93, letterSpacing: "0.015em", marginBottom: 28, color: "var(--ink)" }}>
            In Your<br />Corner.
          </h2>
          <div style={{ width: 36, height: 3, background: "var(--red)", marginBottom: 32 }} />
          <div style={{ fontSize: 16, lineHeight: 1.85, color: "var(--mid)", fontFamily: "var(--font-dm)" }}>
            <p>We started Young Talent Agency because we love the business side of the creator world. Negotiating deals, advocating for talent, and making sure the people we represent are valued and protected — that's what drives us. We're not just middlemen. We're in your corner, fighting for what you're worth and making sure every opportunity that comes your way works in your favor.</p>
            <p style={{ marginTop: 18 }}>We believe that every creator deserves someone who genuinely cares about their growth and their business, someone who takes the time to understand their brand and advocates for them like it's personal. Because for us, it is.</p>
            <p style={{ marginTop: 18 }}>Whether you're a full-time creator or someone building something on the side, we're here to handle the business so you can focus on what you're good at and make sure you're compensated fairly along the way.</p>
          </div>
        </div>

        {/* Right — stat tiles */}
        <div className="reveal" style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 2 }}>
          {STATS.map((s) => (
            <div key={s.label} className="stat-tile">
              <span style={{ fontFamily: "var(--font-bebas)", fontSize: 62, lineHeight: 1, color: "#fff", display: "block" }}>
                {s.n}<em style={{ color: "var(--red)", fontStyle: "normal" }}>{s.sup}</em>
              </span>
              <span style={{ fontSize: 11, letterSpacing: "0.15em", textTransform: "uppercase", color: "rgba(255,255,255,.4)", marginTop: 10, display: "block", fontFamily: "var(--font-dm)" }}>
                {s.label}
              </span>
            </div>
          ))}
        </div>
      </div>

      <style>{`
        @media (max-width: 768px) {
          .about-responsive-grid { grid-template-columns: 1fr !important; gap: 48px !important; }
        }
        @media (max-width: 480px) {
          .about-responsive-grid { gap: 36px !important; }
        }
      `}</style>
    </section>
  );
}
