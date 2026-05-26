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
        overflow: "visible",
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
            <button className="btn-red-yta" onClick={() => window.dispatchEvent(new CustomEvent("open-contact", { detail: { type: "general" } }))}>
              <span>Work With Us</span>
            </button>
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
          padding: 32,               /* breathing room so shadow isn't clipped */
          overflow: "visible",
        }}
      >
          {/* Ambient red glow — behind and beneath card */}
          <div style={{
            position: "absolute",
            inset: "10%",
            background: "rgba(220,38,38,0.13)",
            filter: "blur(80px)",
            zIndex: -1,
            pointerEvents: "none",
            borderRadius: "50%",
          }} />

          {/* Hard ground shadow directly under card */}
          <div style={{
            position: "absolute",
            bottom: -20,
            left: "8%",
            right: "8%",
            height: 60,
            background: "rgba(0,0,0,0.22)",
            filter: "blur(32px)",
            borderRadius: "50%",
            zIndex: -1,
            pointerEvents: "none",
          }} />

          {/* Card — NO overflow:hidden so box-shadow renders freely */}
          <div
            className="hero-phone"
            style={{
              width: 440,
              height: 680,
              borderRadius: 26,
              position: "relative",
              border: "2px solid rgba(255,255,255,0.75)",
              boxShadow: [
                "inset 0 0 0 1px rgba(255,255,255,0.35)",
                "0 2px 4px rgba(0,0,0,0.04)",
                "0 12px 28px rgba(0,0,0,0.18)",
                "0 28px 70px rgba(0,0,0,0.28)",
                "0 60px 120px rgba(0,0,0,0.20)",
              ].join(", "),
              transform: "translateY(0px)",
              transition: "transform .5s cubic-bezier(.16,1,.3,1), box-shadow .5s",
            }}
            onMouseEnter={(e) => {
              const el = e.currentTarget as HTMLElement;
              el.style.transform = "translateY(-10px)";
              el.style.boxShadow = [
                "inset 0 0 0 1px rgba(255,255,255,0.35)",
                "0 2px 4px rgba(0,0,0,0.04)",
                "0 18px 40px rgba(0,0,0,0.22)",
                "0 40px 90px rgba(0,0,0,0.32)",
                "0 80px 140px rgba(0,0,0,0.22)",
              ].join(", ");
            }}
            onMouseLeave={(e) => {
              const el = e.currentTarget as HTMLElement;
              el.style.transform = "translateY(0px)";
              el.style.boxShadow = [
                "inset 0 0 0 1px rgba(255,255,255,0.35)",
                "0 2px 4px rgba(0,0,0,0.04)",
                "0 12px 28px rgba(0,0,0,0.18)",
                "0 28px 70px rgba(0,0,0,0.28)",
                "0 60px 120px rgba(0,0,0,0.20)",
              ].join(", ");
            }}
          >
            {/* Video clip container — overflow:hidden isolated here only */}
            <div style={{
              position: "absolute",
              inset: 0,
              borderRadius: 24,
              overflow: "hidden",
              background: "#c8c8c8",
            }}>
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
                        filter: "contrast(1.12) brightness(0.90) saturate(1.18)",
                      }}
                    />
                  </div>
                );
              })}

              {/* Top vignette */}
              <div style={{
                position: "absolute", top: 0, left: 0, right: 0,
                height: 180,
                background: "linear-gradient(to bottom, rgba(0,0,0,0.32) 0%, transparent 100%)",
                zIndex: 10,
                pointerEvents: "none",
              }} />

              {/* Bottom vignette — grounds the image */}
              <div style={{
                position: "absolute", bottom: 0, left: 0, right: 0,
                height: 140,
                background: "linear-gradient(to top, rgba(0,0,0,0.38) 0%, transparent 100%)",
                zIndex: 10,
                pointerEvents: "none",
              }} />
            </div>{/* end video clip container */}
          </div>{/* end card */}
      </div>{/* end hero-phone-wrap */}

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
