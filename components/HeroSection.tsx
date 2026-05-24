"use client";

import Image from "next/image";
import { ArrowUpRight, ChevronDown } from "lucide-react";

const RED = "#C8102E";

export default function HeroSection() {
  return (
    <section className="relative min-h-screen bg-[#F0EFED] flex flex-col items-center overflow-hidden pt-32 pb-16">

      {/* ── Text block ─────────────────────────────────── */}
      <div className="flex flex-col items-center text-center px-6 max-w-3xl w-full">

        {/* Tagline */}
        <p
          className="text-xs font-bold tracking-[0.3em] uppercase mb-6"
          style={{ color: RED }}
        >
          CREATORS FIRST. BUSINESS ALWAYS.
        </p>

        {/* H1 */}
        <h1 className="text-5xl md:text-6xl lg:text-7xl font-semibold text-gray-900 leading-[1.1] mb-6">
          <span className="block">We Handle the Business.</span>
          <span className="block">You Focus on <span style={{ color: RED }}>the Content.</span></span>
        </h1>

        {/* Subtitle */}
        <p className="text-gray-500 text-base md:text-lg max-w-md leading-relaxed mb-10 text-center">
          Young Talent Agency represents creators, managing the business side of
          their brand so they can do what they do best,{" "}
          <span style={{ color: RED }} className="font-semibold">create.</span>
        </p>

        {/* CTA Buttons */}
        <div className="flex flex-wrap items-center justify-center gap-4">
          <a
            href="#contact"
            className="inline-flex items-center gap-2 text-white text-xs font-bold tracking-[0.15em] uppercase px-8 py-4 rounded-lg transition-colors"
            style={{ background: RED }}
            onMouseEnter={e => (e.currentTarget.style.background = "#a00e24")}
            onMouseLeave={e => (e.currentTarget.style.background = RED)}
          >
            WORK WITH US
            <ArrowUpRight className="w-4 h-4" strokeWidth={2.5} />
          </a>
          <a
            href="#roster"
            className="inline-flex items-center gap-2 bg-transparent border-2 border-gray-900 hover:bg-gray-900 hover:text-white text-gray-900 text-xs font-bold tracking-[0.15em] uppercase px-8 py-4 rounded-lg transition-colors"
          >
            MEET OUR TALENT
            <ArrowUpRight className="w-4 h-4" strokeWidth={2.5} />
          </a>
        </div>
      </div>

      {/* ── Hero Graphic ───────────────────────────────── */}
      <div className="relative mt-14 w-full max-w-5xl mx-auto" style={{ height: 520 }}>

        {/* L3 — outermost left (-32°) */}
        <div className="absolute hidden md:block" style={{
          width: 165, height: 310,
          bottom: 0, left: "50%",
          transform: "translateX(-50%) rotate(-32deg)",
          transformOrigin: "bottom center",
          zIndex: 5,
        }}>
          <FanCard src="https://images.unsplash.com/photo-1529626455594-4ff0802cfb7e?w=400" alt="Creator" width={165} height={310} />
        </div>

        {/* L2 (-20°) */}
        <div className="absolute hidden md:block" style={{
          width: 165, height: 310,
          bottom: 0, left: "50%",
          transform: "translateX(-50%) rotate(-20deg)",
          transformOrigin: "bottom center",
          zIndex: 10,
        }}>
          <FanCard src="https://images.unsplash.com/photo-1516035069371-29a1b244cc32?w=400" alt="Camera" width={165} height={310} />
        </div>

        {/* L1 (-9°) */}
        <div className="absolute hidden md:block" style={{
          width: 165, height: 310,
          bottom: 0, left: "50%",
          transform: "translateX(-50%) rotate(-9deg)",
          transformOrigin: "bottom center",
          zIndex: 15,
        }}>
          <FanCard src="https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=400" alt="Athlete" width={165} height={310} />
        </div>

        {/* Phone — center */}
        <div className="absolute" style={{
          width: 210, height: 440,
          bottom: 0, left: "50%",
          transform: "translateX(-50%)",
          zIndex: 20,
        }}>
          <PhoneMockup />
        </div>

        {/* R1 (+9°) */}
        <div className="absolute hidden md:block" style={{
          width: 165, height: 310,
          bottom: 0, left: "50%",
          transform: "translateX(-50%) rotate(9deg)",
          transformOrigin: "bottom center",
          zIndex: 15,
        }}>
          <FanCard src="https://images.unsplash.com/photo-1583454110551-21f2fa2afe61?w=400" alt="Fitness" width={165} height={310} />
        </div>

        {/* R2 (+20°) */}
        <div className="absolute hidden md:block" style={{
          width: 165, height: 310,
          bottom: 0, left: "50%",
          transform: "translateX(-50%) rotate(20deg)",
          transformOrigin: "bottom center",
          zIndex: 10,
        }}>
          <FanCard src="https://images.unsplash.com/photo-1492691527719-9d1e07e534b4?w=400" alt="Studio" width={165} height={310} />
        </div>

        {/* R3 (+32°) */}
        <div className="absolute hidden md:block" style={{
          width: 165, height: 310,
          bottom: 0, left: "50%",
          transform: "translateX(-50%) rotate(32deg)",
          transformOrigin: "bottom center",
          zIndex: 5,
        }}>
          <FanCard src="https://images.unsplash.com/photo-1511919884226-fd3cad34687c?w=400" alt="Palm trees" width={165} height={310} />
        </div>

        {/* Ground shadow */}
        <div
          className="absolute bottom-0 left-1/2 -translate-x-1/2 rounded-full blur-2xl"
          style={{ width: 280, height: 32, background: "rgba(0,0,0,0.12)", zIndex: 1 }}
        />
      </div>

      {/* ── Scroll cue (below graphic) ─────────────────── */}
      <div className="flex flex-col items-center gap-2 mt-10 text-gray-400">
        <span className="text-[10px] font-semibold tracking-[0.35em] uppercase">
          Scroll to Discover
        </span>
        <ChevronDown className="w-4 h-4" strokeWidth={2} />
      </div>

    </section>
  );
}

function PhoneMockup() {
  return (
    <div
      className="relative w-full h-full"
      style={{
        background: "linear-gradient(160deg, #d0d0d0 0%, #888 50%, #b8b8b8 100%)",
        borderRadius: 46,
        padding: 7,
        boxShadow: "0 40px 80px rgba(0,0,0,0.4), 0 8px 24px rgba(0,0,0,0.2), inset 0 1px 0 rgba(255,255,255,0.35)",
      }}
    >
      <div
        className="relative w-full h-full overflow-hidden"
        style={{ background: "#0a0a0a", borderRadius: 40 }}
      >
        {/* Dynamic Island */}
        <div
          className="absolute top-3 left-1/2 -translate-x-1/2 bg-black rounded-full"
          style={{ width: 74, height: 24, zIndex: 10 }}
        />

        {/* Screen content */}
        <div className="absolute inset-0 flex flex-col items-center justify-center gap-5 px-6">
          {/* YTA logo mark */}
          <svg viewBox="0 0 80 80" className="w-16 h-16" fill="none">
            <polygon points="40,4 76,72 4,72" stroke="#C8102E" strokeWidth="4.5" fill="none" strokeLinejoin="round" />
            <polygon points="40,60 20,26 60,26" fill="#C8102E" />
          </svg>

          <p className="text-white font-extrabold text-xl tracking-widest leading-tight text-center">
            YOUNG<br />TALENT<br />AGENCY
          </p>

          <div className="text-center">
            <p className="text-white/60 text-[10px] tracking-widest uppercase">CREATORS FIRST.</p>
            <p className="text-[10px] font-bold tracking-widest uppercase" style={{ color: "#C8102E" }}>BUSINESS ALWAYS.</p>
          </div>
        </div>
      </div>
    </div>
  );
}

function FanCard({ src, alt, width, height }: { src: string; alt: string; width: number; height: number }) {
  return (
    <div
      className="w-full h-full bg-white rounded-2xl overflow-hidden"
      style={{ padding: 5, boxShadow: "0 8px 32px rgba(0,0,0,0.18)" }}
    >
      <div className="relative w-full h-full rounded-xl overflow-hidden">
        <Image
          src={src}
          alt={alt}
          width={width}
          height={height}
          sizes="(max-width: 768px) 0px, 180px"
          className="w-full h-full object-cover"
        />
      </div>
    </div>
  );
}
