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

      {/* Hero Graphic */}
      <div className="relative mt-16 w-full max-w-4xl mx-auto flex items-end justify-center" style={{ height: "560px" }}>

        {/* === LEFT CARDS === */}

        {/* L3 — outermost left */}
        <div
          className="absolute hidden md:block"
          style={{
            width: 130,
            height: 210,
            bottom: 40,
            left: "calc(50% - 360px)",
            zIndex: 5,
            transform: "rotate(-20deg)",
            transformOrigin: "bottom center",
          }}
        >
          <FanCard
            src="https://images.unsplash.com/photo-1529626455594-4ff0802cfb7e?w=400"
            alt="Creator lifestyle"
            width={130}
            height={210}
          />
        </div>

        {/* L2 — middle left */}
        <div
          className="absolute hidden md:block"
          style={{
            width: 140,
            height: 230,
            bottom: 40,
            left: "calc(50% - 280px)",
            zIndex: 10,
            transform: "rotate(-12deg)",
            transformOrigin: "bottom center",
          }}
        >
          <FanCard
            src="https://images.unsplash.com/photo-1516035069371-29a1b244cc32?w=400"
            alt="Camera setup"
            width={140}
            height={230}
          />
        </div>

        {/* L1 — closest left */}
        <div
          className="absolute hidden md:block"
          style={{
            width: 150,
            height: 260,
            bottom: 40,
            left: "calc(50% - 210px)",
            zIndex: 15,
            transform: "rotate(-5deg)",
            transformOrigin: "bottom center",
          }}
        >
          <FanCard
            src="https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=400"
            alt="Athlete"
            width={150}
            height={260}
          />
        </div>

        {/* === PHONE MOCKUP (center) === */}
        <div
          className="absolute"
          style={{
            width: 240,
            height: 500,
            bottom: 0,
            left: "50%",
            transform: "translateX(-50%)",
            zIndex: 20,
          }}
        >
          <PhoneMockup />
        </div>

        {/* === RIGHT CARDS === */}

        {/* R1 — closest right */}
        <div
          className="absolute hidden md:block"
          style={{
            width: 150,
            height: 260,
            bottom: 40,
            left: "calc(50% + 60px)",
            zIndex: 15,
            transform: "rotate(5deg)",
            transformOrigin: "bottom center",
          }}
        >
          <FanCard
            src="https://images.unsplash.com/photo-1583454110551-21f2fa2afe61?w=400"
            alt="Fitness creator"
            width={150}
            height={260}
          />
        </div>

        {/* R2 — middle right */}
        <div
          className="absolute hidden md:block"
          style={{
            width: 140,
            height: 230,
            bottom: 40,
            left: "calc(50% + 140px)",
            zIndex: 10,
            transform: "rotate(12deg)",
            transformOrigin: "bottom center",
          }}
        >
          <FanCard
            src="https://images.unsplash.com/photo-1492691527719-9d1e07e534b4?w=400"
            alt="Studio lighting"
            width={140}
            height={230}
          />
        </div>

        {/* R3 — outermost right */}
        <div
          className="absolute hidden md:block"
          style={{
            width: 130,
            height: 210,
            bottom: 40,
            left: "calc(50% + 230px)",
            zIndex: 5,
            transform: "rotate(20deg)",
            transformOrigin: "bottom center",
          }}
        >
          <FanCard
            src="https://images.unsplash.com/photo-1511919884226-fd3cad34687c?w=400"
            alt="Palm trees"
            width={130}
            height={210}
          />
        </div>

        {/* Ground reflection */}
        <div
          className="absolute bottom-0 left-1/2 -translate-x-1/2 w-56 h-6 rounded-full bg-black/10 blur-md"
          style={{ zIndex: 1 }}
        />
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
    <div
      className="relative w-full h-full"
      style={{
        background: "#111",
        borderRadius: 36,
        boxShadow: "0 32px 64px rgba(0,0,0,0.35), 0 8px 24px rgba(0,0,0,0.2)",
        border: "2px solid #333",
        overflow: "hidden",
      }}
    >
      {/* Notch / Dynamic Island */}
      <div
        className="absolute top-3 left-1/2 -translate-x-1/2 bg-black rounded-full"
        style={{ width: 80, height: 26, zIndex: 10 }}
      />

      {/* Screen content */}
      <div className="absolute inset-0 flex flex-col items-center justify-center gap-4 px-6">
        {/* YTA Triangle Logo (SVG) */}
        <svg
          viewBox="0 0 80 80"
          className="w-16 h-16"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          {/* Outer triangle */}
          <polygon
            points="40,4 76,72 4,72"
            stroke="#C41E3A"
            strokeWidth="5"
            fill="none"
          />
          {/* Inner inverted triangle */}
          <polygon
            points="40,62 18,22 62,22"
            fill="#C41E3A"
          />
          {/* YT letter mark */}
          <text
            x="40"
            y="50"
            textAnchor="middle"
            fill="white"
            fontSize="16"
            fontWeight="bold"
            fontFamily="Arial, sans-serif"
          >
            YT
          </text>
        </svg>

        {/* Agency name */}
        <div className="text-center">
          <p className="text-white font-extrabold text-xl tracking-widest leading-tight">
            YOUNG
            <br />
            TALENT
            <br />
            AGENCY
          </p>
        </div>

        {/* Tagline */}
        <div className="text-center mt-2">
          <p className="text-white/70 text-[10px] tracking-widest uppercase">
            CREATORS FIRST.
          </p>
          <p className="text-[#C41E3A] text-[10px] font-bold tracking-widest uppercase">
            BUSINESS ALWAYS.
          </p>
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
          className="w-full h-full object-cover"
        />
      </div>
    </div>
  );
}
