"use client";
import { useEffect, useRef, useState } from "react";

const SLIDES = [
  { type: "video", src: "/videos/reel1.mp4" },
  { type: "video", src: "/videos/reel2.mp4" },
];

export default function HeroSection() {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const [activeSlide, setActiveSlide] = useState(0);
  const [prev, setPrev] = useState<number | null>(null);
  const [dir, setDir] = useState<1 | -1>(1);

  // Noise canvas
  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;
    const resize = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };
    resize();
    window.addEventListener("resize", resize);
    let timer: ReturnType<typeof setTimeout>;
    const draw = () => {
      const { width: w, height: h } = canvas;
      const img = ctx.createImageData(w, h);
      const d = img.data;
      for (let i = 0; i < d.length; i += 4) {
        const v = Math.random() * 255;
        d[i] = d[i + 1] = d[i + 2] = v;
        d[i + 3] = 255;
      }
      ctx.putImageData(img, 0, 0);
      timer = setTimeout(() => requestAnimationFrame(draw), 80);
    };
    draw();
    return () => {
      clearTimeout(timer);
      window.removeEventListener("resize", resize);
    };
  }, []);

  // Auto-advance slides
  useEffect(() => {
    const interval = setInterval(() => {
      setDir(1);
      setPrev(activeSlide);
      setActiveSlide((s) => (s + 1) % SLIDES.length);
    }, 4500);
    return () => clearInterval(interval);
  }, [activeSlide]);

  // Clear prev after transition
  useEffect(() => {
    if (prev === null) return;
    const t = setTimeout(() => setPrev(null), 750);
    return () => clearTimeout(t);
  }, [prev]);

  return (
    <section
      id="hero"
      style={{
        minHeight: "100vh",
        display: "flex",
        alignItems: "center",
        padding: "100px 52px 88px",
        position: "relative",
        overflow: "hidden",
        background: "#fff",
      }}
    >
      {/* Noise */}
      <canvas
        ref={canvasRef}
        style={{ position: "absolute", inset: 0, opacity: 0.03, pointerEvents: "none" }}
      />

      {/* Left content */}
      <div
        style={{
          position: "relative",
          zIndex: 2,
          maxWidth: 580,
        }}
      >
          <p
            className="hero-eyebrow"
            style={{
              fontSize: 11,
              letterSpacing: "0.25em",
              textTransform: "uppercase",
              color: "var(--red)",
              marginBottom: 24,
              fontFamily: "var(--font-dm)",
            }}
          >
            Creator Management Agency
          </p>

          <h1
            className="hero-h1"
            style={{
              fontFamily: "var(--font-dm), 'DM Sans', sans-serif",
              fontWeight: 300,
              fontSize: "clamp(38px, 5.2vw, 72px)",
              lineHeight: 1.1,
              letterSpacing: "-0.025em",
              color: "var(--ink)",
              marginBottom: 28,
            }}
          >
            We Handle the{" "}
            <span style={{ color: "var(--red)", fontWeight: 300 }}>Business.</span>
            <br />
            You Focus on the{" "}
            <span style={{ color: "var(--red)", fontWeight: 300 }}>Content.</span>
          </h1>

          <p
            className="hero-sub"
            style={{
              fontSize: 16,
              lineHeight: 1.75,
              color: "var(--mid)",
              maxWidth: 420,
              marginBottom: 48,
              fontFamily: "var(--font-dm)",
              fontWeight: 300,
            }}
          >
            Young Talent Agency represents creators, managing the business side
            of their brand so they can do what they do best, create.
          </p>

          <div className="hero-btns" style={{ display: "flex", gap: 14, flexWrap: "wrap" }}>
            <a href="#contact" className="btn-red-yta">
              <span>Work With Us</span>
            </a>
            <a
              href="#roster"
              style={{
                background: "transparent",
                color: "var(--ink)",
                padding: "15px 42px",
                border: "1.5px solid rgba(26,23,20,0.3)",
                fontFamily: "var(--font-dm)",
                fontSize: 12,
                letterSpacing: "0.12em",
                textTransform: "uppercase",
                textDecoration: "none",
                display: "inline-block",
                transition: "border-color .2s, transform .2s, background .2s, color .2s",
              }}
              onMouseEnter={(e) => {
                const el = e.currentTarget as HTMLElement;
                el.style.borderColor = "var(--ink)";
                el.style.background = "var(--ink)";
                el.style.color = "#fff";
                el.style.transform = "translateY(-2px)";
              }}
              onMouseLeave={(e) => {
                const el = e.currentTarget as HTMLElement;
                el.style.borderColor = "rgba(26,23,20,0.3)";
                el.style.background = "transparent";
                el.style.color = "var(--ink)";
                el.style.transform = "";
              }}
            >
              Meet Our Talent
            </a>
          </div>
      </div>

      {/* ── RIGHT: Phone mockup — absolutely positioned ── */}
      <div
        className="hero-phone-wrap"
        style={{
          position: "absolute",
          right: 72,
          top: 120,
          zIndex: 3,
        }}
      >
          {/* Ambient glow — behind the card */}
          <div style={{
            position: "absolute",
            width: 520,
            height: 520,
            borderRadius: "50%",
            background: "radial-gradient(circle, rgba(220,38,38,0.09) 0%, transparent 68%)",
            top: "50%",
            left: "50%",
            transform: "translate(-44%, -46%)",
            filter: "blur(48px)",
            pointerEvents: "none",
            zIndex: 0,
          }} />

          {/* Premium creator card */}
          <div
            className="hero-phone"
            style={{
              position: "relative",
              zIndex: 1,
              width: 420,
              height: 660,
              borderRadius: 28,
              background: "#d0d0d0",
              overflow: "hidden",
              border: "1px solid rgba(255,255,255,0.35)",
              boxShadow:
                "0 20px 60px rgba(0,0,0,0.10), 0 8px 24px rgba(0,0,0,0.08)",
              transition: "transform .5s cubic-bezier(.16,1,.3,1), box-shadow .5s",
            }}
            onMouseEnter={(e) => {
              (e.currentTarget as HTMLElement).style.transform = "translateY(-7px)";
              (e.currentTarget as HTMLElement).style.boxShadow =
                "0 36px 80px rgba(0,0,0,0.14), 0 12px 32px rgba(0,0,0,0.10)";
            }}
            onMouseLeave={(e) => {
              (e.currentTarget as HTMLElement).style.transform = "";
              (e.currentTarget as HTMLElement).style.boxShadow =
                "0 20px 60px rgba(0,0,0,0.10), 0 8px 24px rgba(0,0,0,0.08)";
            }}
          >
            {/* Full-bleed video slides */}
            {SLIDES.map((slide, i) => {
              const isActive = i === activeSlide;
              const isPrev = i === prev;
              let translateX = "100%";
              if (isActive) translateX = "0%";
              else if (isPrev) translateX = `${-100 * dir}%`;

              return (
                <div
                  key={i}
                  style={{
                    position: "absolute",
                    inset: 0,
                    transform: `translateX(${translateX})`,
                    transition: isActive || isPrev
                      ? "transform 0.82s cubic-bezier(.16,1,.3,1)"
                      : "none",
                    zIndex: isActive ? 2 : isPrev ? 1 : 0,
                  }}
                >
                  <video
                    src={slide.src}
                    autoPlay
                    muted
                    loop
                    playsInline
                    style={{
                      width: "100%",
                      height: "100%",
                      objectFit: "cover",
                      display: "block",
                      filter: "contrast(1.06) brightness(0.92) saturate(1.10)",
                    }}
                  />
                </div>
              );
            })}

            {/* Top vignette — atmospheric, not UI */}
            <div style={{
              position: "absolute", top: 0, left: 0, right: 0,
              height: 160,
              background: "linear-gradient(to bottom, rgba(0,0,0,0.28) 0%, transparent 100%)",
              zIndex: 10,
              pointerEvents: "none",
            }} />

            {/* Minimal creator identity — top left, very subtle */}
            <div style={{
              position: "absolute", top: 22, left: 20,
              display: "flex", alignItems: "center", gap: 8,
              zIndex: 11,
            }}>
              {/* Avatar dot */}
              <div style={{
                width: 28, height: 28, borderRadius: "50%",
                background: "var(--red)",
                border: "1.5px solid rgba(255,255,255,0.55)",
                display: "flex", alignItems: "center", justifyContent: "center",
                flexShrink: 0,
              }}>
                <span style={{ fontSize: 9, fontWeight: 700, color: "#fff", fontFamily: "var(--font-dm)", letterSpacing: "0.02em" }}>YT</span>
              </div>
              <div style={{ display: "flex", flexDirection: "column", gap: 1 }}>
                <div style={{ display: "flex", alignItems: "center", gap: 5 }}>
                  <span style={{ fontSize: 11, fontWeight: 500, color: "rgba(255,255,255,0.88)", fontFamily: "var(--font-dm)", letterSpacing: "0.01em" }}>
                    yngtlntagency
                  </span>
                  {/* Verified */}
                  <svg width="11" height="11" viewBox="0 0 24 24" fill="none">
                    <circle cx="12" cy="12" r="10" fill="#3b9eff" opacity="0.9"/>
                    <path d="M8 12l3 3 5-5" stroke="#fff" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                </div>
                <span style={{ fontSize: 10, color: "rgba(255,255,255,0.45)", fontFamily: "var(--font-dm)" }}>
                  Just now
                </span>
              </div>
            </div>

            {/* Bottom vignette + minimal branding */}
            <div style={{
              position: "absolute", bottom: 0, left: 0, right: 0,
              padding: "80px 22px 26px",
              background: "linear-gradient(to top, rgba(0,0,0,0.50) 0%, transparent 100%)",
              zIndex: 10,
              pointerEvents: "none",
            }}>
              <div style={{ display: "flex", alignItems: "center", gap: 8 }}>
                <div style={{ width: 20, height: 1.5, background: "var(--red)", opacity: 0.85 }} />
                <span style={{
                  fontFamily: "var(--font-dm)",
                  fontSize: 11,
                  letterSpacing: "0.18em",
                  textTransform: "uppercase",
                  color: "rgba(255,255,255,0.55)",
                }}>
                  Creator Management
                </span>
              </div>
            </div>
          </div>

          {/* Floating social proof pill */}
          <div style={{
            marginTop: 18,
            display: "flex", alignItems: "center", gap: 8,
            padding: "9px 18px",
            background: "rgba(255,255,255,0.9)",
            backdropFilter: "blur(12px)",
            border: "1px solid rgba(0,0,0,0.06)",
            borderRadius: 100,
            boxShadow: "0 4px 20px rgba(0,0,0,0.06)",
            width: "fit-content",
          }}>
            <div style={{ width: 7, height: 7, borderRadius: "50%", background: "var(--red)" }} />
            <span style={{ fontFamily: "var(--font-dm)", fontSize: 12, color: "var(--mid)", letterSpacing: "0.03em" }}>
              9+ Brand Partners&nbsp;&nbsp;·&nbsp;&nbsp;45K+ Creator Reach
            </span>
          </div>
        </div>

      {/* Vertical red line */}
      <div style={{ position: "absolute", bottom: 0, left: 52,
          width: 1,
          height: 80,
          background: "linear-gradient(to bottom, var(--red), transparent)",
        }}
      />

      <style>{`
        .btn-red-yta {
          background: var(--red); color: #fff;
          padding: 15px 42px; border: none;
          font-family: var(--font-dm), sans-serif;
          font-size: 12px; letter-spacing: 0.12em; text-transform: uppercase;
          text-decoration: none; display: inline-block;
          position: relative; overflow: hidden;
          transition: transform .2s;
        }
        .btn-red-yta::before {
          content: ''; position: absolute; inset: 0;
          background: var(--red-dark);
          transform: translateX(-101%);
          transition: transform .3s ease;
        }
        .btn-red-yta:hover { transform: translateY(-2px); }
        .btn-red-yta:hover::before { transform: translateX(0); }
        .btn-red-yta span { position: relative; z-index: 1; }

        @media (max-width: 1024px) {
          .hero-phone-wrap { right: 24px !important; }
        }
        @media (max-width: 768px) {
          .hero-phone-wrap { display: none !important; }
        }
      `}</style>
    </section>
  );
}
