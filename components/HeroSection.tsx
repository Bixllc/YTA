"use client";
import { useEffect, useRef, useState } from "react";

export default function HeroSection() {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const [parallax, setParallax] = useState({ x: 0, y: 0 });

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

  // Parallax on mouse move
  const handleMouseMove = (e: React.MouseEvent<HTMLElement>) => {
    const { width, height, left, top } = e.currentTarget.getBoundingClientRect();
    const x = ((e.clientX - left - width / 2) / width) * 28;
    const y = ((e.clientY - top - height / 2) / height) * 14;
    setParallax({ x, y });
  };

  return (
    <section
      id="hero"
      onMouseMove={handleMouseMove}
      style={{
        minHeight: "100vh",
        display: "flex", flexDirection: "column", justifyContent: "flex-end",
        padding: "0 52px 88px",
        paddingTop: 100,
        position: "relative", overflow: "hidden",
        background: "var(--cream)",
      }}
    >
      {/* Noise */}
      <canvas
        ref={canvasRef}
        style={{ position: "absolute", inset: 0, opacity: 0.035, pointerEvents: "none" }}
      />

      {/* Floating "TALENT" word */}
      <div
        style={{
          position: "absolute",
          fontFamily: "var(--font-bebas)",
          fontSize: "clamp(180px, 22vw, 320px)",
          lineHeight: 1,
          color: "transparent",
          WebkitTextStroke: "1px rgba(200,32,42,0.12)",
          letterSpacing: "0.02em",
          top: "50%", left: "50%",
          transform: `translate(calc(-50% + ${parallax.x}px), calc(-50% + ${parallax.y}px))`,
          pointerEvents: "none",
          userSelect: "none",
          whiteSpace: "nowrap",
          transition: "transform 0.1s ease-out",
        }}
      >
        TALENT
      </div>

      {/* Content */}
      <div style={{ position: "relative", zIndex: 2, maxWidth: 980 }}>
        <h1
          className="hero-h1"
          style={{
            fontFamily: "var(--font-bebas)",
            fontSize: "clamp(76px, 11vw, 156px)",
            lineHeight: 0.9,
            letterSpacing: "0.015em",
            color: "var(--ink)",
            marginBottom: 36,
          }}
        >
          We Handle<br />
          The{" "}
          <em
            style={{
              fontFamily: "var(--font-instrument)",
              fontStyle: "italic",
              color: "var(--red)",
              fontSize: "0.88em",
            }}
          >
            Business.
          </em>
          <br />
          You Create.
        </h1>

        <p
          className="hero-sub"
          style={{
            fontSize: 17, lineHeight: 1.7,
            color: "var(--mid)", maxWidth: 500, marginBottom: 52,
            fontFamily: "var(--font-dm)",
          }}
        >
          Young Talent Agency represents creators and athletes — managing the business side of their brand so they can do what they do best.
        </p>

        <div className="hero-btns" style={{ display: "flex", gap: 14, flexWrap: "wrap" }}>
          <a href="#contact" className="btn-red-yta">
            <span>Work With Us</span>
          </a>
          <a
            href="#roster"
            style={{
              background: "transparent", color: "var(--ink)",
              padding: "15px 42px",
              border: "1.5px solid rgba(26,23,20,0.3)",
              fontFamily: "var(--font-dm)",
              fontSize: 12, letterSpacing: "0.12em", textTransform: "uppercase",
              textDecoration: "none", display: "inline-block",
              transition: "border-color .2s, transform .2s, background .2s, color .2s",
            }}
            onMouseEnter={e => { const el = e.currentTarget as HTMLElement; el.style.borderColor = "var(--ink)"; el.style.background = "var(--ink)"; el.style.color = "var(--cream)"; el.style.transform = "translateY(-2px)"; }}
            onMouseLeave={e => { const el = e.currentTarget as HTMLElement; el.style.borderColor = "rgba(26,23,20,0.3)"; el.style.background = "transparent"; el.style.color = "var(--ink)"; el.style.transform = ""; }}
          >
            Meet Our Talent
          </a>
        </div>
      </div>

      {/* Vertical red line bottom-left */}
      <div
        style={{
          position: "absolute", bottom: 0, left: 52,
          width: 1, height: 80,
          background: "linear-gradient(to bottom, var(--red), transparent)",
        }}
      />

      {/* btn-red style injected inline for simplicity */}
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
      `}</style>
    </section>
  );
}
