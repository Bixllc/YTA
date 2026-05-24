"use client";

import Image from "next/image";
import { ArrowUpRight, ChevronDown } from "lucide-react";

const RED = "#C8102E";

const CARDS = [
  { src: "https://images.unsplash.com/photo-1529626455594-4ff0802cfb7e?w=600", alt: "Creator lifestyle" },
  { src: "https://images.unsplash.com/photo-1516035069371-29a1b244cc32?w=600", alt: "Camera setup" },
  { src: "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=600", alt: "Athlete" },
  { src: "https://images.unsplash.com/photo-1583454110551-21f2fa2afe61?w=600", alt: "Fitness creator" },
  { src: "https://images.unsplash.com/photo-1492691527719-9d1e07e534b4?w=600", alt: "Studio lighting" },
  { src: "https://images.unsplash.com/photo-1511919884226-fd3cad34687c?w=600", alt: "Luxury lifestyle" },
];

// Card dimensions
const CW = 170; // card width
const CH = 315; // card height
const GAP = 14;  // gap between cards
const PW = 218;  // phone width
const PH = 452;  // phone height
const OVERLAP = 36; // how much L1/R1 tuck behind phone

export default function HeroSection() {
  // L1 left edge: right edge is at (-PW/2 + OVERLAP), so left = right - CW
  const L1 = -(PW / 2) + OVERLAP - CW;          // tucked behind phone
  const L2 = L1 - GAP - CW;
  const L3 = L2 - GAP - CW;
  const R1 = PW / 2 - OVERLAP;                   // mirror
  const R2 = R1 + CW + GAP;
  const R3 = R2 + CW + GAP;

  return (
    <section className="relative min-h-screen bg-[#F0EFED] flex flex-col items-center overflow-hidden pt-32 pb-16">

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
      <div className="relative w-full mt-14 overflow-hidden" style={{ height: 520 }}>

        {/* Ground glow beneath phone */}
        <div
          className="absolute left-1/2 -translate-x-1/2"
          style={{
            bottom: 0,
            width: 340,
            height: 40,
            background: "radial-gradient(ellipse, rgba(0,0,0,0.13) 0%, transparent 70%)",
            zIndex: 1,
            filter: "blur(6px)",
          }}
        />

        {/* ── LEFT CARDS ── */}
        {/* L3 — outermost */}
        <div className="absolute hidden md:block" style={{
          width: CW, height: CH,
          bottom: 70,
          left: `calc(50% + ${L3}px)`,
          zIndex: 4,
          transform: "rotate(-2.5deg) scale(0.88)",
          transformOrigin: "bottom center",
          filter: "brightness(0.82)",
        }}>
          <PhotoCard {...CARDS[0]} />
        </div>

        {/* L2 — middle */}
        <div className="absolute hidden md:block" style={{
          width: CW, height: CH,
          bottom: 70,
          left: `calc(50% + ${L2}px)`,
          zIndex: 8,
          transform: "rotate(-1.5deg) scale(0.94)",
          transformOrigin: "bottom center",
          filter: "brightness(0.9)",
        }}>
          <PhotoCard {...CARDS[1]} />
        </div>

        {/* L1 — closest, tucks behind phone */}
        <div className="absolute hidden md:block" style={{
          width: CW, height: CH,
          bottom: 70,
          left: `calc(50% + ${L1}px)`,
          zIndex: 12,
          transform: "rotate(-0.5deg) scale(0.98)",
          transformOrigin: "bottom center",
        }}>
          <PhotoCard {...CARDS[2]} />
        </div>

        {/* ── PHONE (center, always visible) ── */}
        <div className="absolute" style={{
          width: PW, height: PH,
          bottom: 0,
          left: "50%",
          transform: "translateX(-50%)",
          zIndex: 20,
        }}>
          <PhoneMockup />
        </div>

        {/* ── RIGHT CARDS ── */}
        {/* R1 — closest, tucks behind phone */}
        <div className="absolute hidden md:block" style={{
          width: CW, height: CH,
          bottom: 70,
          left: `calc(50% + ${R1}px)`,
          zIndex: 12,
          transform: "rotate(0.5deg) scale(0.98)",
          transformOrigin: "bottom center",
        }}>
          <PhotoCard {...CARDS[3]} />
        </div>

        {/* R2 — middle */}
        <div className="absolute hidden md:block" style={{
          width: CW, height: CH,
          bottom: 70,
          left: `calc(50% + ${R2}px)`,
          zIndex: 8,
          transform: "rotate(1.5deg) scale(0.94)",
          transformOrigin: "bottom center",
          filter: "brightness(0.9)",
        }}>
          <PhotoCard {...CARDS[4]} />
        </div>

        {/* R3 — outermost */}
        <div className="absolute hidden md:block" style={{
          width: CW, height: CH,
          bottom: 70,
          left: `calc(50% + ${R3}px)`,
          zIndex: 4,
          transform: "rotate(2.5deg) scale(0.88)",
          transformOrigin: "bottom center",
          filter: "brightness(0.82)",
        }}>
          <PhotoCard {...CARDS[5]} />
        </div>

        {/* Left edge fade — "infinite carousel" effect */}
        <div
          className="absolute inset-y-0 left-0 z-30 pointer-events-none hidden md:block"
          style={{
            width: 220,
            background: "linear-gradient(to right, #F0EFED 30%, transparent 100%)",
          }}
        />
        {/* Right edge fade */}
        <div
          className="absolute inset-y-0 right-0 z-30 pointer-events-none hidden md:block"
          style={{
            width: 220,
            background: "linear-gradient(to left, #F0EFED 30%, transparent 100%)",
          }}
        />
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
        background: "linear-gradient(160deg, #d4d4d4 0%, #8c8c8c 45%, #bcbcbc 100%)",
        borderRadius: 46,
        padding: 7,
        boxShadow:
          "0 48px 96px rgba(0,0,0,0.42), 0 16px 32px rgba(0,0,0,0.22), inset 0 1px 0 rgba(255,255,255,0.4)",
      }}
    >
      {/* Screen */}
      <div
        className="relative w-full h-full overflow-hidden flex flex-col items-center justify-center gap-5"
        style={{ background: "#080808", borderRadius: 40 }}
      >
        {/* Dynamic Island */}
        <div
          className="absolute top-[10px] left-1/2 -translate-x-1/2 bg-black rounded-full"
          style={{ width: 74, height: 24, zIndex: 10 }}
        />

        {/* Logo mark */}
        <svg viewBox="0 0 80 80" style={{ width: 60, height: 60 }} fill="none">
          <polygon
            points="40,5 75,70 5,70"
            stroke={RED}
            strokeWidth="4"
            fill="none"
            strokeLinejoin="round"
          />
          <polygon points="40,58 21,27 59,27" fill={RED} />
        </svg>

        {/* Agency name */}
        <p
          className="text-white font-extrabold text-center leading-tight"
          style={{ fontSize: 19, letterSpacing: "0.18em" }}
        >
          YOUNG{"\n"}TALENT{"\n"}AGENCY
        </p>

        {/* Tagline */}
        <div className="text-center" style={{ marginTop: -4 }}>
          <p style={{ color: "rgba(255,255,255,0.5)", fontSize: 9, letterSpacing: "0.2em" }}>
            CREATORS FIRST.
          </p>
          <p style={{ color: RED, fontSize: 9, fontWeight: 700, letterSpacing: "0.2em" }}>
            BUSINESS ALWAYS.
          </p>
        </div>

        {/* Subtle red glow accent at bottom */}
        <div
          className="absolute bottom-0 left-0 right-0"
          style={{
            height: 120,
            background: `radial-gradient(ellipse at 50% 100%, ${RED}22 0%, transparent 70%)`,
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
        borderRadius: 20,
        padding: 5,
        boxShadow: "0 20px 48px rgba(0,0,0,0.22), 0 4px 12px rgba(0,0,0,0.1)",
      }}
    >
      <div className="relative w-full h-full overflow-hidden" style={{ borderRadius: 16 }}>
        <Image
          src={src}
          alt={alt}
          fill
          sizes="180px"
          className="object-cover"
        />
      </div>
    </div>
  );
}
