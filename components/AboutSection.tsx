"use client";

import { ArrowUpRight } from "lucide-react";

const LOGOS_A = [
  { name: "Frontier Airlines", src: "https://logo.clearbit.com/flyfrontier.com" },
  { name: "Visit Colorado Springs", src: "https://logo.clearbit.com/visitcos.com" },
  { name: "Hyatt", src: "https://logo.clearbit.com/hyatt.com" },
  { name: "moxy HOTELS", src: null },
  { name: "GoPro", src: "https://logo.clearbit.com/gopro.com" },
];

const LOGOS_B = [
  { name: "Meta", src: "https://logo.clearbit.com/meta.com" },
  { name: "Krispy Kreme", src: "https://logo.clearbit.com/krispykreme.com" },
  { name: "Expedia", src: "https://logo.clearbit.com/expedia.com" },
  { name: "Kroger", src: "https://logo.clearbit.com/kroger.com" },
  { name: "Monday.com", src: "https://logo.clearbit.com/monday.com" },
];

function LogoCard({ name, src }: { name: string; src: string | null }) {
  return (
    <div className="bg-white rounded-xl px-8 py-6 shadow-sm flex items-center justify-center w-full">
      {src ? (
        <>
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src={src}
            alt={name}
            className="h-10 w-auto object-contain grayscale hover:grayscale-0 transition-all"
            onError={(e) => {
              const target = e.currentTarget as HTMLImageElement;
              target.style.display = "none";
              const fallback = target.nextElementSibling as HTMLElement;
              if (fallback) fallback.style.display = "flex";
            }}
          />
          <span className="text-gray-700 font-semibold text-sm text-center hidden">
            {name}
          </span>
        </>
      ) : (
        <span className="text-gray-700 font-semibold text-sm text-center italic tracking-wide">
          {name}
        </span>
      )}
    </div>
  );
}

function LogoColumn({
  logos,
  duration,
}: {
  logos: { name: string; src: string | null }[];
  duration: string;
}) {
  const doubled = [...logos, ...logos];
  return (
    <div className="relative overflow-hidden flex-1" style={{ height: 560 }}>
      <div
        className="flex flex-col gap-4"
        style={{ animation: `scrollUp ${duration} linear infinite` }}
      >
        {doubled.map((logo, i) => (
          <LogoCard key={`${logo.name}-${i}`} name={logo.name} src={logo.src} />
        ))}
      </div>
    </div>
  );
}

export default function AboutSection() {
  return (
    <section id="about" className="bg-white py-24">
      <div className="mx-auto max-w-7xl px-6 grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
        {/* Left: Text */}
        <div>
          <p className="text-[#C8102E] text-xs font-bold tracking-[0.25em] uppercase mb-6">
            ABOUT YOUNG TALENT AGENCY
          </p>

          <h2 className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-gray-900 leading-tight">
            We&apos;re in your corner.
            <br />
            <span className="text-[#C8102E]">Always.</span>
          </h2>

          <div className="w-10 h-[3px] bg-[#C8102E] mt-5 mb-8" />

          <div className="space-y-5 text-gray-600 text-base leading-relaxed max-w-lg">
            <p>
              We started Young Talent Agency because we love the business side of the creator
              world. Negotiating deals, advocating for talent, and making sure the people we
              represent are valued and protected – that&apos;s what drives us. We&apos;re not just
              middlemen. We&apos;re in your corner, fighting for what you&apos;re worth and making
              sure every opportunity that comes your way works in your favor.
            </p>
            <p>
              We believe that every creator deserves someone who genuinely cares about their
              growth and their business, someone who takes the time to understand their brand
              and advocates for them like it&apos;s personal. Because for us, it is.
            </p>
            <p>
              Whether you&apos;re a full-time creator or someone building something on the side,
              we&apos;re here to handle the business so you can focus on what you&apos;re good at
              and make sure you&apos;re compensated fairly along the way.
            </p>
          </div>

          <a
            href="#work"
            className="inline-flex items-center gap-2 mt-8 border-2 border-gray-900 text-gray-900 hover:bg-gray-900 hover:text-white text-xs font-bold tracking-widest uppercase px-6 py-3 rounded-lg transition-colors"
          >
            WORK WITH US
            <ArrowUpRight className="w-4 h-4" strokeWidth={2.5} />
          </a>
        </div>

        {/* Right: Logo scroll */}
        <div className="flex flex-col gap-3">
          <div className="flex gap-4">
            <LogoColumn logos={LOGOS_A} duration="25s" />
            <LogoColumn logos={LOGOS_B} duration="20s" />
          </div>
          <p className="text-center text-xs font-semibold tracking-[0.3em] text-gray-400 uppercase mt-2">
            OUR PARTNERS
          </p>
        </div>
      </div>
    </section>
  );
}
