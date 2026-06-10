"use client";
import Image from "next/image";

export default function Footer() {
  return (
    <footer className="site-footer" style={{ background: "var(--ink)", padding: "44px 52px", display: "flex", flexDirection: "column", gap: 24 }}>
      <style>{`
        @media (max-width: 768px) {
          .site-footer { padding: 32px 24px !important; gap: 20px !important; }
        }
      `}</style>

      {/* Top row */}
      <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", flexWrap: "wrap", gap: 16 }}>
        <div style={{ display: "flex", alignItems: "center", gap: 10 }}>
          <Image src="/logo.png" alt="YTA" height={36} width={96} style={{ height: 36, width: "auto", objectFit: "contain" }} />
          <span style={{ fontFamily: "var(--font-bebas)", fontSize: 15, letterSpacing: "0.14em", color: "#fff" }}>
            YOUNG TALENT AGENCY
          </span>
        </div>
        <div style={{ display: "flex", gap: 24, flexWrap: "wrap" }}>
          <a href="mailto:yta@younglifemanagement.com" style={{ fontSize: 12, color: "rgba(255,255,255,.4)", fontFamily: "var(--font-dm)", textDecoration: "none", transition: "color .2s" }}
            onMouseEnter={e => (e.currentTarget as HTMLElement).style.color = "#fff"}
            onMouseLeave={e => (e.currentTarget as HTMLElement).style.color = "rgba(255,255,255,.4)"}
          >
            yta@younglifemanagement.com
          </a>
          <a href="https://instagram.com/yngtlntagency" target="_blank" rel="noopener noreferrer" style={{ fontSize: 12, color: "rgba(255,255,255,.4)", fontFamily: "var(--font-dm)", textDecoration: "none", transition: "color .2s" }}
            onMouseEnter={e => (e.currentTarget as HTMLElement).style.color = "#fff"}
            onMouseLeave={e => (e.currentTarget as HTMLElement).style.color = "rgba(255,255,255,.4)"}
          >
            @yngtlntagency
          </a>
        </div>
      </div>

      {/* Bottom row */}
      <div style={{ display: "flex", justifyContent: "space-between", flexWrap: "wrap", gap: 8, borderTop: "1px solid rgba(255,255,255,0.07)", paddingTop: 20 }}>
        <p style={{ fontSize: 11, color: "rgba(255,255,255,.25)", letterSpacing: "0.05em", fontFamily: "var(--font-dm)" }}>
          © 2026 Young Talent Agency. All rights reserved.
        </p>
        <div style={{ display: "flex", flexDirection: "column", alignItems: "flex-end", gap: 4 }}>
          <p style={{ fontSize: 11, color: "rgba(255,255,255,.18)", fontFamily: "var(--font-dm)" }}>
            Young Talent Agency is a division of Young Life Management LLC
          </p>
          <p style={{ fontSize: 11, color: "rgba(255,255,255,.18)", fontFamily: "var(--font-dm)" }}>
            Website by{" "}
            <a href="https://bixllc.net" target="_blank" rel="noopener noreferrer" style={{ color: "rgba(255,255,255,.35)", textDecoration: "none", transition: "color .2s" }}
              onMouseEnter={e => (e.currentTarget as HTMLElement).style.color = "#fff"}
              onMouseLeave={e => (e.currentTarget as HTMLElement).style.color = "rgba(255,255,255,.35)"}
            >
              Bix LLC
            </a>
          </p>
        </div>
      </div>
    </footer>
  );
}
