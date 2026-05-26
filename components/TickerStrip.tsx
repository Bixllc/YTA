const ITEMS = [
  "Brand Partnerships", "Deal Negotiation", "Contract Vetting",
  "Creator Representation", "Athlete Management",
];

export default function TickerStrip() {
  const doubled = [...ITEMS, ...ITEMS];
  return (
    <div style={{ background: "var(--red)", overflow: "hidden", padding: "14px 0", position: "relative", zIndex: 10 }}>
      <div style={{ display: "flex", width: "max-content", animation: "ticker 22s linear infinite" }}>
        {doubled.map((item, i) => (
          <span key={i} style={{ fontFamily: "var(--font-bebas)", fontSize: 16, letterSpacing: "0.15em", color: "#fff", padding: "0 32px", whiteSpace: "nowrap", opacity: 0.9 }}>
            {item}
            <span style={{ color: "rgba(255,255,255,0.4)", paddingLeft: 32 }}>·</span>
          </span>
        ))}
      </div>
    </div>
  );
}
