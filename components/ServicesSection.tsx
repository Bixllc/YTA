const SERVICES = [
  {
    n: "01",
    title: "Brand Partnership Management",
    desc: "When brands come knocking, we answer. We manage all inbound collaboration requests on your behalf — reviewing opportunities, communicating with brands, and moving deals forward from first contact to final delivery. You stay informed at every step without being buried in your inbox.",
  },
  {
    n: "02",
    title: "Deal Negotiation",
    desc: "We negotiate on your behalf to make sure you're being paid what your platform is worth. We set competitive rates based on your reach, engagement, and market value — and we push back when brands undervalue your work.",
  },
  {
    n: "03",
    title: "Brand & Contract Vetting",
    desc: "Not every deal is a good deal. We review every partnership opportunity to ensure it aligns with your brand, protects your reputation, and includes fair terms. We look at compensation, usage rights, exclusivity clauses, and deliverables so nothing catches you off guard.",
  },
];

export default function ServicesSection() {
  return (
    <section
      id="services"
      style={{
        background: "var(--paper)",
        padding: "140px 52px",
        position: "relative",
        borderTop: "1px solid var(--light-border)",
      }}
    >
      <div style={{ maxWidth: 1400, margin: "0 auto" }}>
        {/* Header row */}
        <div className="reveal" style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-end", marginBottom: 72, flexWrap: "wrap", gap: 24 }}>
          <div>
            <p style={{ fontSize: 11, letterSpacing: "0.25em", textTransform: "uppercase", color: "var(--red)", marginBottom: 18, fontFamily: "var(--font-dm)" }}>
              What We Do
            </p>
            <h2 style={{ fontFamily: "var(--font-bebas)", fontSize: "clamp(52px, 6vw, 86px)", lineHeight: 0.93, letterSpacing: "0.015em", color: "var(--ink)" }}>
              Our<br />Services
            </h2>
          </div>
          <p style={{ maxWidth: "min(380px, 100%)", fontSize: 15, lineHeight: 1.7, color: "var(--mid)", fontFamily: "var(--font-dm)" }}>
            From first contact to final delivery, we manage every step of the partnership process.
          </p>
        </div>

        {/* Service list */}
        <div className="reveal">
          {SERVICES.map((s) => (
            <div key={s.n} className="svc-row">
              <span
                className="svc-n"
                style={{
                  fontFamily: "var(--font-bebas)", fontSize: 48,
                  color: "rgba(26,23,20,0.12)", letterSpacing: "0.03em", lineHeight: 1,
                  transition: "color .2s",
                }}
              >
                {s.n}
              </span>
              <div>
                <h3 style={{ fontFamily: "var(--font-bebas)", fontSize: 30, letterSpacing: "0.04em", color: "var(--ink)", marginBottom: 8 }}>
                  {s.title}
                </h3>
                <p style={{ fontSize: 14, lineHeight: 1.65, color: "var(--mid)", maxWidth: "min(580px, 100%)", fontFamily: "var(--font-dm)" }}>
                  {s.desc}
                </p>
              </div>
              <span
                className="svc-arrow"
                style={{ fontSize: 22, color: "var(--red)", opacity: 0, transform: "translateX(-10px)", transition: "opacity .3s, transform .3s", textAlign: "right" }}
              >
                →
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
