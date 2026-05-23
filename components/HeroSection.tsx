"use client";

import Image from "next/image";
import { ArrowUpRight, ChevronDown } from "lucide-react";

export default function HeroSection() {
  return (
    <section className="relative min-h-screen bg-[#f2f2f2] flex flex-col items-center overflow-hidden pt-32 pb-20">
      {/* Text block */}
      <div className="flex flex-col items-center text-center px-6 max-w-3xl">
        {/* Tag */}
        <p className="text-[#C41E3A] text-xs font-bold tracking-[0.25em] uppercase mb-6">
          CREATORS FIRST. BUSINESS ALWAYS.
        </p>

        {/* H1 */}
        <h1 className="text-5xl md:text-6xl lg:text-7xl font-extrabold text-gray-900 leading-tight mb-6">
          We Handle the Business.
          <br />
          You Focus on{" "}
          <span className="text-[#C41E3A]">the Content.</span>
        </h1>

        {/* Subtitle */}
        <p className="text-gray-500 text-base md:text-lg max-w-md leading-relaxed mb-10">
          Young Talent Agency represents creators, managing the business side of
          their brand so they can do what they do best,{" "}
          <span className="text-[#C41E3A] font-medium">create.</span>
        </p>

        {/* CTA Buttons */}
        <div className="flex flex-wrap items-center justify-center gap-4">
          <a
            href="#work"
            className="inline-flex items-center gap-2 bg-[#C41E3A] hover:bg-[#a01830] text-white text-xs font-bold tracking-widest uppercase px-8 py-4 rounded-lg transition-colors"
          >
            WORK WITH US
            <ArrowUpRight className="w-4 h-4" strokeWidth={2.5} />
          </a>
          <a
            href="#roster"
            className="inline-flex items-center gap-2 bg-transparent border-2 border-gray-900 hover:bg-gray-900 hover:text-white text-gray-900 text-xs font-bold tracking-widest uppercase px-8 py-4 rounded-lg transition-colors"
          >
            MEET OUR TALENT
            <ArrowUpRight className="w-4 h-4" strokeWidth={2.5} />
          </a>
        </div>
      </div>

      {/* Hero Graphic — true fan from bottom-center pivot */}
      <div className="relative mt-16 w-full max-w-5xl mx-auto" style={{ height: "520px" }}>

        {/* All cards fan from bottom-center pivot */}

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

        {/* L2 — middle left (-20°) */}
        <div className="absolute hidden md:block" style={{
          width: 165, height: 310,
          bottom: 0, left: "50%",
          transform: "translateX(-50%) rotate(-20deg)",
          transformOrigin: "bottom center",
          zIndex: 10,
        }}>
          <FanCard src="https://images.unsplash.com/photo-1516035069371-29a1b244cc32?w=400" alt="Camera" width={165} height={310} />
        </div>

        {/* L1 — closest left (-9°) */}
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
          width: 200, height: 430,
          bottom: 0, left: "50%",
          transform: "translateX(-50%)",
          zIndex: 20,
        }}>
          <PhoneMockup />
        </div>

        {/* R1 — closest right (+9°) */}
        <div className="absolute hidden md:block" style={{
          width: 165, height: 310,
          bottom: 0, left: "50%",
          transform: "translateX(-50%) rotate(9deg)",
          transformOrigin: "bottom center",
          zIndex: 15,
        }}>
          <FanCard src="https://images.unsplash.com/photo-1583454110551-21f2fa2afe61?w=400" alt="Fitness" width={165} height={310} />
        </div>

        {/* R2 — middle right (+20°) */}
        <div className="absolute hidden md:block" style={{
          width: 165, height: 310,
          bottom: 0, left: "50%",
          transform: "translateX(-50%) rotate(20deg)",
          transformOrigin: "bottom center",
          zIndex: 10,
        }}>
          <FanCard src="https://images.unsplash.com/photo-1492691527719-9d1e07e534b4?w=400" alt="Studio" width={165} height={310} />
        </div>

        {/* R3 — outermost right (+32°) */}
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
        <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-64 h-8 rounded-full bg-black/15 blur-xl" style={{ zIndex: 1 }} />
      </div>

      {/* Scroll cue */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-gray-400">
        <span className="text-[10px] font-semibold tracking-[0.3em] uppercase">
          Scroll to Discover
        </span>
        <ChevronDown className="w-4 h-4" strokeWidth={2} />
      </div>
    </section>
  );
}

function PhoneMockup() {
  return (
    /* Outer silver metal frame */
    <div
      className="relative w-full h-full"
      style={{
        background: "linear-gradient(160deg, #c8c8c8 0%, #8a8a8a 50%, #b0b0b0 100%)",
        borderRadius: 44,
        padding: 6,
        boxShadow: "0 40px 80px rgba(0,0,0,0.45), 0 8px 24px rgba(0,0,0,0.25), inset 0 1px 0 rgba(255,255,255,0.3)",
      }}
    >
      {/* Inner black screen */}
      <div
        className="relative w-full h-full overflow-hidden"
        style={{ background: "#0a0a0a", borderRadius: 38 }}
      >
        {/* Dynamic Island */}
        <div
          className="absolute top-3 left-1/2 -translate-x-1/2 bg-black rounded-full"
          style={{ width: 72, height: 24, zIndex: 10 }}
        />

        {/* Screen content */}
        <div className="absolute inset-0 flex flex-col items-center justify-center gap-5 px-6">
          {/* YTA Triangle Logo — no text, clean mark */}
          <svg viewBox="0 0 80 80" className="w-16 h-16" fill="none">
            {/* Outer triangle outline */}
            <polygon points="40,4 76,72 4,72" stroke="#C41E3A" strokeWidth="4.5" fill="none" strokeLinejoin="round" />
            {/* Inner inverted filled triangle */}
            <polygon points="40,60 20,26 60,26" fill="#C41E3A" />
          </svg>

          {/* Agency name */}
          <p className="text-white font-extrabold text-xl tracking-widest leading-tight text-center">
            YOUNG<br />TALENT<br />AGENCY
          </p>

          {/* Tagline */}
          <div className="text-center">
            <p className="text-white/60 text-[10px] tracking-widest uppercase">CREATORS FIRST.</p>
            <p className="text-[#C41E3A] text-[10px] font-bold tracking-widest uppercase">BUSINESS ALWAYS.</p>
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
      style={{
        padding: 6,
        boxShadow: "0 8px 32px rgba(0,0,0,0.18)",
      }}
    >
      <div className="relative w-full h-full rounded-xl overflow-hidden">
        <Image
          src={src}
          alt={alt}
          width={width}
          height={height}
          sizes="(max-width: 768px) 0px, 160px"
          className="w-full h-full object-cover"
        />
      </div>
    </div>
  );
}
