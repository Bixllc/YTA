"use client";

import Image from "next/image";
import { ArrowUpRight, ChevronDown } from "lucide-react";

const RED = "#C8102E";

const CARDS = [
  { src: "https://images.unsplash.com/photo-1529626455594-4ff0802cfb7e?w=600&q=85", alt: "Creator" },
  { src: "https://images.unsplash.com/photo-1516035069371-29a1b244cc32?w=600&q=85", alt: "Camera" },
  { src: "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=600&q=85", alt: "Athlete" },
  { src: "https://images.unsplash.com/photo-1583454110551-21f2fa2afe61?w=600&q=85", alt: "Fitness" },
  { src: "https://images.unsplash.com/photo-1492691527719-9d1e07e534b4?w=600&q=85", alt: "Studio" },
  { src: "https://images.unsplash.com/photo-1511919884226-fd3cad34687c?w=600&q=85", alt: "Luxury" },
];

// Phone
const PW = 300;
const PH = 580;

// Cards (smaller than phone)
const CW = 148;
const CH = 260;

// Fan transforms exactly as specified
const CARD_TRANSFORMS = [
  { rotate: -25, translateX: -180 }, // Card 0 — far left
  { rotate: -15, translateX: -100 }, // Card 1 — left
  { rotate:  -7, translateX:  -40 }, // Card 2 — near left
  { rotate:   7, translateX:   40 }, // Card 3 — near right
  { rotate:  15, translateX:  100 }, // Card 4 — right
  { rotate:  25, translateX:  180 }, // Card 5 — far right
];

// Near cards slightly higher z-index, outer lower, phone highest
const CARD_ZINDEX = [4, 6, 8, 8, 6, 4];

export default function HeroSection() {
  return (
    <section
      className="relative flex flex-col items-center pt-32 pb-16"
      style={{ background: "#F6F6F4", overflow: "visible" }}
    >
      {/* ── Text block ─────────────────────────────────── */}
      <div className="flex flex-col items-center text-center px-6 max-w-3xl w-full">
        <p className="text-xs font-bold tracking-[0.3em] uppercase mb-6" style={{ color: RED }}>
          CREATORS FIRST. BUSINESS ALWAYS.
        </p>

        <h1 className="text-5xl md:text-6xl lg:text-7xl font-semibold text-gray-900 leading-[1.1] mb-6">
          <span className="block">We Handle the Business.</span>
          <span className="block">
            You Focus on <span style={{ color: RED }}>the Content.</span>
          </span>
        </h1>

        <p className="text-gray-500 text-base md:text-lg max-w-md leading-relaxed mb-10 text-center">
          Young Talent Agency represents creators, managing the business side of
          their brand so they can do what they do best,{" "}
          <span style={{ color: RED }} className="font-semibold">create.</span>
        </p>

        <div className="flex flex-wrap items-center justify-center gap-4">
          <a
            href="#contact"
            className="inline-flex items-center gap-2 text-white text-xs font-bold tracking-[0.15em] uppercase px-8 py-4 rounded-lg transition-colors"
            style={{ background: RED }}
            onMouseEnter={e => (e.currentTarget.style.background = "#a00e24")}
            onMouseLeave={e => (e.currentTarget.style.background = RED)}
          >
            WORK WITH US <ArrowUpRight className="w-4 h-4" strokeWidth={2.5} />
          </a>
          <a
            href="#roster"
            className="inline-flex items-center gap-2 bg-transparent border-2 border-gray-900 hover:bg-gray-900 hover:text-white text-gray-900 text-xs font-bold tracking-[0.15em] uppercase px-8 py-4 rounded-lg transition-colors"
          >
            MEET OUR TALENT <ArrowUpRight className="w-4 h-4" strokeWidth={2.5} />
          </a>
        </div>
      </div>

      {/* ── Hero Graphic ───────────────────────────────── */}
      <div
        className="relative w-full mt-16"
        style={{ height: PH + 40, overflow: "visible" }}
      >
        {/* Ground shadow */}
        <div
          className="absolute left-1/2 -translate-x-1/2"
          style={{
            bottom: 0,
            width: 420,
            height: 48,
            background: "radial-gradient(ellipse, rgba(0,0,0,0.2) 0%, transparent 70%)",
            filter: "blur(12px)",
            zIndex: 1,
          }}
        />

        {/* Red glow beneath phone */}
        <div
          className="absolute left-1/2 -translate-x-1/2"
          style={{
            bottom: 28,
            width: 260,
            height: 40,
            background: `radial-gradient(ellipse, ${RED}40 0%, transparent 70%)`,
            filter: "blur(10px)",
            zIndex: 2,
          }}
        />

        {/* ── CARDS (fan layout) ── */}
        {CARDS.map((card, i) => {
          const t = CARD_TRANSFORMS[i];
          return (
            <div
              key={i}
              className="absolute hidden md:block"
              style={{
                width: CW,
                height: CH,
                bottom: 0,
                left: `calc(50% - ${CW / 2}px)`,
                zIndex: CARD_ZINDEX[i],
                transform: `rotate(${t.rotate}deg) translateX(${t.translateX}px)`,
                transformOrigin: "bottom center",
              }}
            >
              <PhotoCard src={card.src} alt={card.alt} />
            </div>
          );
        })}

        {/* ── PHONE (center, highest z-index) ── */}
        <div
          className="absolute"
          style={{
            width: PW,
            height: PH,
            bottom: 0,
            left: "50%",
            transform: "translateX(-50%)",
            zIndex: 20,
          }}
        >
          <PhoneMockup />
        </div>
      </div>

      {/* ── Scroll cue ─────────────────────────────────── */}
      <div className="flex flex-col items-center gap-2 mt-8 text-gray-400">
        <span className="text-[10px] font-semibold tracking-[0.35em] uppercase">
          Scroll to Discover
        </span>
        <ChevronDown className="w-4 h-4" strokeWidth={2} />
      </div>

    </section>
  );
}

// ── Phone Mockup ──────────────────────────────────────────

function PhoneMockup() {
  return (
    <div
      className="relative w-full h-full"
      style={{
        background: "linear-gradient(160deg, #d0d0d0 0%, #888 45%, #b8b8b8 100%)",
        borderRadius: 52,
        padding: 8,
        boxShadow:
          "0 64px 120px rgba(0,0,0,0.52), 0 24px 48px rgba(0,0,0,0.28), 0 8px 16px rgba(0,0,0,0.16), inset 0 1px 0 rgba(255,255,255,0.45)",
      }}
    >
      {/* Screen */}
      <div
        className="relative w-full h-full overflow-hidden flex flex-col items-center justify-center gap-5"
        style={{ background: "#080808", borderRadius: 44 }}
      >
        {/* Dynamic Island */}
        <div
          className="absolute top-[12px] left-1/2 -translate-x-1/2 bg-black rounded-full"
          style={{ width: 90, height: 28, zIndex: 10 }}
        />

        {/* Logo: two overlapping downward triangles forming V shape */}
        <svg viewBox="0 0 80 72" style={{ width: 72, height: 72 }} fill="none">
          {/* Outer ▽ — stroke only */}
          <polygon
            points="4,10 76,10 40,70"
            stroke={RED}
            strokeWidth="4"
            fill="none"
            strokeLinejoin="round"
          />
          {/* Inner ▽ — filled, creates the V silhouette */}
          <polygon
            points="18,10 62,10 40,50"
            fill={RED}
          />
        </svg>

        {/* Agency name */}
        <p
          className="text-white font-extrabold text-center leading-tight"
          style={{ fontSize: 22, letterSpacing: "0.18em" }}
        >
          YOUNG{"\n"}TALENT{"\n"}AGENCY
        </p>

        {/* Tagline */}
        <div className="text-center" style={{ marginTop: -4 }}>
          <p style={{ color: "rgba(255,255,255,0.5)", fontSize: 10, letterSpacing: "0.2em" }}>
            CREATORS FIRST.
          </p>
          <p style={{ color: RED, fontSize: 10, fontWeight: 700, letterSpacing: "0.2em" }}>
            BUSINESS ALWAYS.
          </p>
        </div>

        {/* Red glow at bottom */}
        <div
          className="absolute bottom-0 left-0 right-0"
          style={{
            height: 160,
            background: `radial-gradient(ellipse at 50% 100%, ${RED}30 0%, transparent 70%)`,
            pointerEvents: "none",
          }}
        />
      </div>
    </div>
  );
}

// ── Photo Card ────────────────────────────────────────────

function PhotoCard({ src, alt }: { src: string; alt: string }) {
  return (
    <div
      className="w-full h-full bg-white overflow-hidden"
      style={{
        borderRadius: 18,
        padding: 5,
        boxShadow:
          "0 24px 52px rgba(0,0,0,0.28), 0 8px 20px rgba(0,0,0,0.14)",
      }}
    >
      <div className="relative w-full h-full overflow-hidden" style={{ borderRadius: 14 }}>
        <Image
          src={src}
          alt={alt}
          fill
          sizes="160px"
          className="object-cover"
        />
      </div>
    </div>
  );
}
