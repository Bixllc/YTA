const BRANDS = [
  "Frontier Airlines", "Visit Colorado Springs", "Meta", "Krispy Kreme",
  "Hyatt", "Expedia", "Moxy Hotels", "Kroger", "GoPro",
];

export default function BrandsSection() {
  const doubled = [...BRANDS, ...BRANDS];
  return (
    <section id="brands" style={{ background: "var(--ink)", padding: "120px 0", position: "relative", overflow: "hidden" }}>
      <div className="reveal" style={{ textAlign: "center", marginBottom: 80, padding: "0 52px" }}>
        <p style={{ fontSize: 11, letterSpacing: "0.25em", textTransform: "uppercase", color: "rgba(200,32,42,0.9)", marginBottom: 18, fontFamily: "var(--font-dm)" }}>
          Partnerships
        </p>
        <h2 style={{ fontFamily: "var(--font-bebas)", fontSize: "clamp(52px, 6vw, 86px)", lineHeight: 0.93, letterSpacing: "0.015em", color: "#fff" }}>
          Brands We've<br />Worked With
        </h2>
      </div>

      {/* Marquee */}
      <div style={{ overflow: "hidden", position: "relative" }}>
        {/* Edge fades */}
        <div style={{ position: "absolute", top: 0, bottom: 0, left: 0, width: "min(150px, 15vw)", background: "linear-gradient(to right, var(--ink), transparent)", zIndex: 2, pointerEvents: "none" }} />
        <div style={{ position: "absolute", top: 0, bottom: 0, right: 0, width: "min(150px, 15vw)", background: "linear-gradient(to left, var(--ink), transparent)", zIndex: 2, pointerEvents: "none" }} />

        <div style={{ display: "flex", animation: "marquee 30s linear infinite", width: "max-content" }}>
          {doubled.map((name, i) => (
            <div
              key={i}
              className="m-item"
              style={{ padding: "36px 48px", borderRight: "1px solid rgba(255,255,255,0.06)", display: "flex", alignItems: "center", flexShrink: 0 }}
            >
              <span
                className="m-name"
                style={{ fontFamily: "var(--font-bebas)", fontSize: 18, letterSpacing: "0.12em", color: "rgba(255,255,255,0.28)", whiteSpace: "nowrap", transition: "color .3s" }}
              >
                {name}
              </span>
            </div>
          ))}
        </div>
      </div>

      <style>{`
        @media (max-width: 768px) {
          #brands { padding: 80px 0 !important; }
          #brands .reveal { padding: 0 20px !important; margin-bottom: 48px !important; }
          .m-item { padding: 24px 32px !important; }
        }
      `}</style>
    </section>
  );
}
