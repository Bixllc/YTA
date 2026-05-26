"use client";
import { useEffect, useRef, useState } from "react";

// Replace these with real video paths once you drop mp4s into public/videos/
const SLIDES = [
  { type: "placeholder", bg: "linear-gradient(160deg, #1a0f10 0%, #3d1010 50%, #C8202A 100%)", label: "Brand Partnerships" },
  { type: "placeholder", bg: "linear-gradient(160deg, #0f1020 0%, #1a1050 50%, #3040a0 100%)", label: "Creator Growth" },
  { type: "placeholder", bg: "linear-gradient(160deg, #0f1a10 0%, #103020 50%, #205030 100%)", label: "Deal Negotiation" },
  { type: "placeholder", bg: "linear-gradient(160deg, #1a1410 0%, #352510 50%, #C8202A 100%)", label: "Athlete Management" },
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
          right: 52,
          top: 100,
          zIndex: 3,
        }}
      >
          {/* Phone frame */}
          <div
            className="hero-phone"
            style={{
              width: 270,
              height: 560,
              borderRadius: 46,
              background: "#0d0d0d",
              position: "relative",
              overflow: "hidden",
              boxShadow:
                "0 40px 80px rgba(0,0,0,0.20), 0 12px 32px rgba(0,0,0,0.12), inset 0 0 0 1.5px rgba(255,255,255,0.10)",
              transition: "transform .4s cubic-bezier(.16,1,.3,1), box-shadow .4s",
            }}
            onMouseEnter={(e) => {
              (e.currentTarget as HTMLElement).style.transform = "translateY(-8px)";
              (e.currentTarget as HTMLElement).style.boxShadow =
                "0 56px 100px rgba(0,0,0,0.26), 0 20px 40px rgba(0,0,0,0.14), inset 0 0 0 1.5px rgba(255,255,255,0.10)";
            }}
            onMouseLeave={(e) => {
              (e.currentTarget as HTMLElement).style.transform = "";
              (e.currentTarget as HTMLElement).style.boxShadow =
                "0 40px 80px rgba(0,0,0,0.20), 0 12px 32px rgba(0,0,0,0.12), inset 0 0 0 1.5px rgba(255,255,255,0.10)";
            }}
          >
            {/* Slides */}
            {SLIDES.map((slide, i) => {
              const isActive = i === activeSlide;
              const isPrev = i === prev;
              let translateY = "100%";
              if (isActive) translateY = "0%";
              else if (isPrev) translateY = `${-100 * dir}%`;

              return (
                <div
                  key={i}
                  style={{
                    position: "absolute",
                    inset: 0,
                    background: slide.bg,
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    transform: `translateY(${translateY})`,
                    transition: isActive || isPrev
                      ? "transform 0.72s cubic-bezier(.16,1,.3,1)"
                      : "none",
                    zIndex: isActive ? 2 : isPrev ? 1 : 0,
                  }}
                >
                  {/* Placeholder content */}
                  <div style={{ textAlign: "center", padding: "0 28px" }}>
                    <div
                      style={{
                        width: 48,
                        height: 48,
                        borderRadius: "50%",
                        background: "rgba(255,255,255,0.12)",
                        margin: "0 auto 16px",
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                      }}
                    >
                      <svg width="20" height="20" viewBox="0 0 24 24" fill="rgba(255,255,255,0.6)">
                        <polygon points="5,3 19,12 5,21" />
                      </svg>
                    </div>
                    <p
                      style={{
                        fontFamily: "var(--font-dm)",
                        fontSize: 12,
                        letterSpacing: "0.12em",
                        textTransform: "uppercase",
                        color: "rgba(255,255,255,0.45)",
                      }}
                    >
                      {slide.label}
                    </p>
                  </div>
                </div>
              );
            })}

            {/* Status bar top */}
            <div
              style={{
                position: "absolute",
                top: 0,
                left: 0,
                right: 0,
                height: 52,
                background: "linear-gradient(to bottom, rgba(0,0,0,0.55) 0%, transparent 100%)",
                zIndex: 10,
                display: "flex",
                alignItems: "flex-start",
                justifyContent: "center",
                paddingTop: 16,
              }}
            >
              {/* Dynamic island */}
              <div
                style={{
                  width: 88,
                  height: 26,
                  borderRadius: 13,
                  background: "#000",
                  boxShadow: "0 0 0 1px rgba(255,255,255,0.06)",
                }}
              />
            </div>

            {/* Side button glow (right edge) */}
            <div
              style={{
                position: "absolute",
                right: -1,
                top: 120,
                width: 3,
                height: 60,
                background: "rgba(255,255,255,0.08)",
                borderRadius: "0 2px 2px 0",
                zIndex: 20,
              }}
            />

            {/* Bottom progress pills */}
            <div
              style={{
                position: "absolute",
                bottom: 22,
                left: 0,
                right: 0,
                display: "flex",
                justifyContent: "center",
                gap: 5,
                zIndex: 10,
              }}
            >
              {SLIDES.map((_, i) => (
                <div
                  key={i}
                  style={{
                    width: activeSlide === i ? 22 : 6,
                    height: 6,
                    borderRadius: 3,
                    background:
                      activeSlide === i ? "var(--red)" : "rgba(255,255,255,0.3)",
                    transition: "width .45s cubic-bezier(.16,1,.3,1), background .3s",
                  }}
                />
              ))}
            </div>
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
