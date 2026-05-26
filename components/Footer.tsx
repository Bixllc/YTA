import Image from "next/image";

export default function Footer() {
  return (
    <footer className="site-footer" style={{ background: "var(--ink)", padding: "36px 52px", display: "flex", alignItems: "center", justifyContent: "space-between", flexWrap: "wrap", gap: 16 }}>
      <style>{`
        @media (max-width: 768px) {
          .site-footer { flex-direction: column !important; align-items: flex-start !important; padding: 32px 24px !important; gap: 12px !important; }
        }
      `}</style>
      <div style={{ display: "flex", alignItems: "center", gap: 10 }}>
        <Image src="/logo.png" alt="YTA" height={36} width={96} style={{ height: 36, width: "auto", objectFit: "contain" }} />
        <span style={{ fontFamily: "var(--font-bebas)", fontSize: 15, letterSpacing: "0.14em", color: "#fff" }}>
          YOUNG TALENT AGENCY
        </span>
      </div>
      <p style={{ fontSize: 11, color: "rgba(255,255,255,.3)", letterSpacing: "0.05em", fontFamily: "var(--font-dm)" }}>
        © 2025 Young Talent Agency. All rights reserved.
      </p>
      <p style={{ fontSize: 11, color: "rgba(255,255,255,.2)", fontFamily: "var(--font-dm)" }}>
        Creators First. Business Always.
      </p>
    </footer>

  );
}
