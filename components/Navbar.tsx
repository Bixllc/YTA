"use client";
import { useState, useEffect } from "react";
import Image from "next/image";

const LINKS = [
  { label: "About", href: "#about" },
  { label: "Services", href: "#services" },
  { label: "Our Roster", href: "#roster" },
  { label: "Work With Us", href: "#contact" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [drawerOpen, setDrawerOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 10);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <>
      <nav
        style={{
          position: "fixed", top: 0, left: 0, right: 0, zIndex: 200,
          display: "flex", alignItems: "center", justifyContent: "space-between",
          padding: "12px 52px",
          height: 100,
          transition: "background .4s, border-color .4s, box-shadow .4s",
          background: scrolled ? "rgba(247,244,240,0.97)" : "transparent",
          borderBottom: scrolled ? "1px solid var(--light-border)" : "1px solid transparent",
          backdropFilter: scrolled ? "blur(12px)" : "none",
          boxShadow: scrolled ? "0 2px 20px rgba(26,23,20,0.06)" : "none",
        }}
      >
        {/* Logo */}
        <a href="#" style={{ display: "flex", alignItems: "center", textDecoration: "none" }}>
          <Image src="/logo.png" alt="Young Talent Agency" height={46} width={120} style={{ height: 46, width: "auto", objectFit: "contain" }} priority />
        </a>

        {/* Desktop links */}
        <ul style={{ alignItems: "center", gap: 36, listStyle: "none" }} className="hidden md:flex">
          {LINKS.map((l) => (
            <li key={l.label}>
              <a href={l.href} className="nav-ul-link">{l.label}</a>
            </li>
          ))}
        </ul>

        {/* CTA */}
        <button
          className="hidden md:inline-block"
          onClick={() => window.dispatchEvent(new CustomEvent("open-contact", { detail: { type: "general" } }))}
          style={{
            background: "var(--ink)", color: "#fff",
            padding: "11px 28px", fontSize: 12,
            letterSpacing: "0.1em", textTransform: "uppercase",
            border: "none",
            transition: "background .2s, transform .2s",
            fontFamily: "var(--font-dm)",
          }}
          onMouseEnter={e => { (e.currentTarget as HTMLElement).style.background = "var(--red)"; (e.currentTarget as HTMLElement).style.transform = "translateY(-1px)"; }}
          onMouseLeave={e => { (e.currentTarget as HTMLElement).style.background = "var(--ink)"; (e.currentTarget as HTMLElement).style.transform = ""; }}
        >
          Contact Us
        </button>

        {/* Hamburger */}
        <button
          className={`md:hidden nav-burger ${drawerOpen ? "open" : ""}`}
          onClick={() => setDrawerOpen((v) => !v)}
          aria-label="Toggle menu"
          style={{ flexDirection: "column", justifyContent: "center", alignItems: "center", gap: 5, width: 40, height: 40, background: "none", border: "none", padding: 4, position: "relative", zIndex: 400 }}
        >
          <span style={{ display: "block", width: 24, height: 2, background: "var(--ink)", borderRadius: 2, transition: "transform .3s, opacity .3s", transform: drawerOpen ? "translateY(7px) rotate(45deg)" : "" }} />
          <span style={{ display: "block", height: 2, background: "var(--ink)", borderRadius: 2, transition: "transform .3s, opacity .3s, width .3s", opacity: drawerOpen ? 0 : 1, width: drawerOpen ? 0 : 24 }} />
          <span style={{ display: "block", width: 24, height: 2, background: "var(--ink)", borderRadius: 2, transition: "transform .3s, opacity .3s", transform: drawerOpen ? "translateY(-7px) rotate(-45deg)" : "" }} />
        </button>
      </nav>

      {/* Mobile drawer */}
      <div
        style={{
          position: "fixed", top: 0, left: 0, right: 0, bottom: 0, zIndex: 300,
          background: "var(--cream)",
          display: "flex", flexDirection: "column", justifyContent: "center", alignItems: "center",
          transform: drawerOpen ? "translateX(0)" : "translateX(100%)",
          transition: "transform .45s cubic-bezier(.16,1,.3,1)",
          padding: "80px 40px 40px",
        }}
      >
        {/* Close button */}
        <button
          onClick={() => setDrawerOpen(false)}
          aria-label="Close menu"
          style={{
            position: "absolute", top: 28, right: 20,
            display: "flex", alignItems: "center", justifyContent: "center",
            width: 40, height: 40, background: "none", border: "none",
            cursor: "pointer",
          }}
        >
          <span style={{ display: "block", width: 24, height: 2, background: "var(--ink)", borderRadius: 2, transform: "rotate(45deg)", position: "absolute" }} />
          <span style={{ display: "block", width: 24, height: 2, background: "var(--ink)", borderRadius: 2, transform: "rotate(-45deg)", position: "absolute" }} />
        </button>
        <ul style={{ listStyle: "none", display: "flex", flexDirection: "column", alignItems: "center", width: "100%" }}>
          {LINKS.map((l, i) => (
            <li key={l.label} style={{ width: "100%", borderBottom: "1px solid var(--light-border)", borderTop: i === 0 ? "1px solid var(--light-border)" : undefined }}>
              <a
                href={l.href}
                onClick={() => setDrawerOpen(false)}
                style={{
                  display: "block", padding: "22px 0",
                  fontFamily: "var(--font-bebas)", fontSize: 44, letterSpacing: "0.04em",
                  color: "var(--ink)", textDecoration: "none",
                  transition: "color .2s, padding-left .2s",
                }}
                onMouseEnter={e => { (e.currentTarget as HTMLElement).style.color = "var(--red)"; (e.currentTarget as HTMLElement).style.paddingLeft = "12px"; }}
                onMouseLeave={e => { (e.currentTarget as HTMLElement).style.color = "var(--ink)"; (e.currentTarget as HTMLElement).style.paddingLeft = "0"; }}
              >
                {l.label}
              </a>
            </li>
          ))}
        </ul>
        <a
          href="#contact"
          onClick={() => setDrawerOpen(false)}
          style={{
            marginTop: 40, background: "var(--red)", color: "#fff",
            padding: "16px 52px", fontSize: 13,
            letterSpacing: "0.12em", textTransform: "uppercase",
            textDecoration: "none", display: "inline-block",
            fontFamily: "var(--font-dm)",
          }}
        >
          Work With Us
        </a>
      </div>
    </>
  );
}
