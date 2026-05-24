"use client";

import Image from "next/image";
import { ArrowUpRight, ChevronDown } from "lucide-react";

const RED = "#C8102E";

// Cinematic creator economy imagery
const CARDS = [
  { src: "https://images.unsplash.com/photo-1529626455594-4ff0802cfb7e?w=600&q=85", alt: "Creator" },
  { src: "https://images.unsplash.com/photo-1516035069371-29a1b244cc32?w=600&q=85", alt: "Camera" },
  { src: "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=600&q=85", alt: "Athlete" },
  { src: "https://images.unsplash.com/photo-1583454110551-21f2fa2afe61?w=600&q=85", alt: "Fitness" },
  { src: "https://images.unsplash.com/photo-1492691527719-9d1e07e534b4?w=600&q=85", alt: "Studio" },
  { src: "https://images.unsplash.com/photo-1511919884226-fd3cad34687c?w=600&q=85", alt: "Luxury" },
];

// Varied card heights for organic asymmetry
const CARD_HEIGHTS = [295, 325, 355, 345, 310, 278];

const CW = 168;
const PW = 218;
const PH = 452;
const OVERLAP = 54; // Deep tuck behind phone

// Asymmetric gaps for non-uniform feel
const GL1 = 16; // L1→L2
const GL2 = 12; // L2→L3
const GR1 = 14; // R1→R2
const GR2 = 18; // R2→R3

export default function HeroSection() {
  const L1 = -(PW / 2) + OVERLAP - CW;
  const L2 = L1 - GL1 - CW;
  const L3 = L2 - GL2 - CW;
  const R1 = PW / 2 - OVERLAP;
  const R2 = R1 + CW + GR1;
  const R3 = R2 + CW + GR2;

  return (
    <section
      className="relative min-h-screen flex flex-col items-center overflow-hidden pt-32 pb-16"
      style={{ background: "#F6F6F4" }}
    >
      {/* Subtle vignette */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background:
            "radial-gradient(ellipse 90% 70% at 50% 40%, transparent 35%, rgba(0,0,0,0.035) 100%)",
          zIndex: 1,
        }}
      />

      {/* ── Text block ─────────────────────────────────── */}
      <div className="relative flex flex-col items-center text-center px-6 max-w-3xl w-full" style={{ zIndex: 10 }}>
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
      <div className="relative w-full mt-14 overflow-hidden" style={{ height: 540, zIndex: 2 }}>

        {/* Ground shadow beneath phone */}
        <div
          className="absolute left-1/2 -translate-x-1/2"
          style={{
            bottom: 0,
            width: 380,
            height: 48,
            background: "radial-gradient(ellipse, rgba(0,0,0,0.18) 0%, transparent 70%)",
            filter: "blur(10px)",
            zIndex: 1,
          }}
        />

        {/* Red glow beneath phone */}
        <div
          className="absolute left-1/2 -translate-x-1/2"
          style={{
            bottom: 30,
            width: 240,
            height: 36,
            background: `radial-gradient(ellipse, ${RED}33 0%, transparent 70%)`,
            filter: "blur(8px)",
            zIndex: 2,
          }}
        />

        {/* ── LEFT CARDS ── */}
        {/* L3 — outermost */}
        <div className="absolute hidden md:block" style={{
          width: CW,
          height: CARD_HEIGHTS[0],
          bottom: 72,
          left: `calc(50% + ${L3}px)`,
          zIndex: 4,
          transform: "rotate(-3deg) scale(0.83)",
          transformOrigin: "bottom center",
          filter: "brightness(0.72)",
        }}>
          <PhotoCard {...CARDS[0]} />
        </div>

        {/* L2 — middle */}
        <div className="absolute hidden md:block" style={{
          width: CW,
          height: CARD_HEIGHTS[1],
          bottom: 72,
          left: `calc(50% + ${L2}px)`,
          zIndex: 8,
          transform: "rotate(-1.8deg) scale(0.92)",
          transformOrigin: "bottom center",
          filter: "brightness(0.86)",
        }}>
          <PhotoCard {...CARDS[1]} />
        </div>

        {/* L1 — closest, tucks behind phone */}
        <div className="absolute hidden md:block" style={{
          width: CW,
          height: CARD_HEIGHTS[2],
          bottom: 72,
          left: `calc(50% + ${L1}px)`,
          zIndex: 12,
          transform: "rotate(-0.6deg) scale(0.98)",
          transformOrigin: "bottom center",
        }}>
          <PhotoCard {...CARDS[2]} />
        </div>

        {/* ── PHONE (center) ── */}
        <div className="absolute" style={{
          width: PW,
          height: PH,
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
          width: CW,
          height: CARD_HEIGHTS[3],
          bottom: 72,
          left: `calc(50% + ${R1}px)`,
          zIndex: 12,
          transform: "rotate(0.6deg) scale(0.98)",
          transformOrigin: "bottom center",
        }}>
          <PhotoCard {...CARDS[3]} />
        </div>

        {/* R2 — middle */}
        <div className="absolute hidden md:block" style={{
          width: CW,
          height: CARD_HEIGHTS[4],
          bottom: 72,
          left: `calc(50% + ${R2}px)`,
          zIndex: 8,
          transform: "rotate(1.8deg) scale(0.92)",
          transformOrigin: "bottom center",
          filter: "brightness(0.86)",
        }}>
          <PhotoCard {...CARDS[4]} />
        </div>

        {/* R3 — outermost */}
        <div className="absolute hidden md:block" style={{
          width: CW,
          height: CARD_HEIGHTS[5],
          bottom: 72,
          left: `calc(50% + ${R3}px)`,
          zIndex: 4,
          transform: "rotate(3deg) scale(0.83)",
          transformOrigin: "bottom center",
          filter: "brightness(0.72)",
        }}>
          <PhotoCard {...CARDS[5]} />
        </div>

        {/* Edge fades */}
        <div
          className="absolute inset-y-0 left-0 z-30 pointer-events-none hidden md:block"
          style={{
            width: 240,
            background: "linear-gradient(to right, #F6F6F4 25%, transparent 100%)",
          }}
        />
        <div
          className="absolute inset-y-0 right-0 z-30 pointer-events-none hidden md:block"
          style={{
            width: 240,
            background: "linear-gradient(to left, #F6F6F4 25%, transparent 100%)",
          }}
        />
      </div>

      {/* ── Scroll cue ─────────────────────────────────── */}
      <div className="relative flex flex-col items-center gap-2 mt-8 text-gray-400" style={{ zIndex: 10 }}>
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
        borderRadius: 46,
        padding: 7,
        boxShadow:
          "0 64px 120px rgba(0,0,0,0.52), 0 24px 48px rgba(0,0,0,0.28), 0 8px 16px rgba(0,0,0,0.16), inset 0 1px 0 rgba(255,255,255,0.45)",
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

        {/* Logo mark — ▽ with YT monogram */}
        <svg viewBox="0 0 80 80" style={{ width: 56, height: 56 }} fill="none">
          <polygon
            points="5,15 75,15 40,73"
            stroke="white"
            strokeWidth="4"
            fill="none"
            strokeLinejoin="round"
          />
          <g stroke="white" strokeWidth="4" strokeLinecap="round" strokeLinejoin="round">
            <line x1="17" y1="25" x2="40" y2="50" />
            <line x1="40" y1="25" x2="63" y2="25" />
            <line x1="63" y1="25" x2="40" y2="50" />
            <line x1="40" y1="50" x2="40" y2="67" />
          </g>
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

        {/* Red glow at bottom */}
        <div
          className="absolute bottom-0 left-0 right-0"
          style={{
            height: 140,
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
        borderRadius: 20,
        padding: 5,
        boxShadow:
          "0 28px 56px rgba(0,0,0,0.28), 0 8px 20px rgba(0,0,0,0.14), 0 2px 6px rgba(0,0,0,0.08)",
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
