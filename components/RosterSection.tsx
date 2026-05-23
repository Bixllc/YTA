import Image from "next/image";
import { ArrowUpRight, Star } from "lucide-react";

const CREATORS = [
  {
    name: "Jade McIntosh",
    role: "Lifestyle Creator",
    bio: "Lifestyle creator sharing real moments, style, and motivation. Inspiring confidence and authenticity every day.",
    photo: "https://images.unsplash.com/photo-1529626455594-4ff0802cfb7e?w=600",
    platform: "instagram",
    stats: [
      { value: "850K", label: "Followers" },
      { value: "12.6%", label: "Engagement" },
      { value: "8.2M", label: "Avg. Views" },
    ],
  },
  {
    name: "Dre Thompson",
    role: "Fitness Creator",
    bio: "Fitness creator and athlete helping thousands build discipline, strength, and a better mindset.",
    photo: "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=600",
    platform: "tiktok",
    stats: [
      { value: "1.2M", label: "Followers" },
      { value: "10.8%", label: "Engagement" },
      { value: "15.4M", label: "Avg. Views" },
    ],
  },
];

function InstagramIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5">
      <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
    </svg>
  );
}

function TikTokIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5">
      <path d="M19.59 6.69a4.83 4.83 0 01-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 01-2.88 2.5 2.89 2.89 0 01-2.89-2.89 2.89 2.89 0 012.89-2.89c.28 0 .54.04.79.1V9.01a6.27 6.27 0 00-.79-.05 6.34 6.34 0 00-6.34 6.34 6.34 6.34 0 006.34 6.34 6.34 6.34 0 006.33-6.34V8.69a8.18 8.18 0 004.79 1.54V6.78a4.85 4.85 0 01-1.02-.09z" />
    </svg>
  );
}

function CreatorCard({ creator }: { creator: typeof CREATORS[0] }) {
  return (
    <div className="flex rounded-2xl overflow-hidden" style={{ height: 400 }}>
      <div className="relative w-[45%] flex-shrink-0">
        <Image src={creator.photo} alt={creator.name} fill className="object-cover" sizes="(max-width: 768px) 45vw, 300px" />
        <div className="absolute top-4 left-4 bg-black/80 rounded-xl p-2 text-white">
          {creator.platform === "instagram" ? <InstagramIcon /> : <TikTokIcon />}
        </div>
      </div>
      <div className="flex-1 bg-[#111] p-8 flex flex-col justify-between">
        <div>
          <div className="flex items-center gap-3 mb-1">
            <h3 className="text-white text-2xl font-bold">{creator.name}</h3>
            <div className="w-5 h-5 rounded-full bg-[#C41E3A] flex items-center justify-center flex-shrink-0">
              <svg viewBox="0 0 24 24" fill="white" className="w-3 h-3">
                <path d="M20.285 2l-11.285 11.567-5.286-5.011-3.714 3.716 9 8.728 15-15.285z" />
              </svg>
            </div>
          </div>
          <p className="text-gray-400 text-sm mb-4">{creator.role}</p>
          <div className="w-full h-px bg-white/10 mb-4" />
          <p className="text-gray-300 text-sm leading-relaxed">{creator.bio}</p>
        </div>
        <div className="flex items-center gap-0 mt-6">
          {creator.stats.map((stat, i) => (
            <div key={stat.label} className="flex items-center">
              <div className="text-center px-4 first:pl-0">
                <p className="text-[#C41E3A] text-xl font-bold">{stat.value}</p>
                <p className="text-gray-500 text-xs uppercase tracking-wide mt-0.5">{stat.label}</p>
              </div>
              {i < creator.stats.length - 1 && <div className="w-px h-8 bg-white/10" />}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default function RosterSection() {
  return (
    <section id="roster" className="bg-white py-24">
      <div className="mx-auto max-w-7xl px-6">
        <div className="text-center mb-16">
          <p className="text-[#C41E3A] text-xs font-bold tracking-[0.25em] uppercase mb-6">OUR ROSTER</p>
          <h2 className="text-4xl md:text-5xl font-extrabold text-gray-900 leading-tight mb-6">
            Creators. Innovators.
            <br />
            Trendsetters. <span className="text-[#C41E3A]">Represented.</span>
          </h2>
          <p className="text-gray-500 text-base max-w-2xl mx-auto leading-relaxed">
            We represent a select group of creators who are building brands, shaping culture, and inspiring millions across platforms.
          </p>
        </div>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          {CREATORS.map((creator) => (
            <CreatorCard key={creator.name} creator={creator} />
          ))}
        </div>
        <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-8 mt-16 pt-8 border-t border-gray-100">
          <div className="flex items-start gap-4">
            <div className="w-12 h-12 rounded-full bg-[#C41E3A] flex items-center justify-center flex-shrink-0">
              <Star className="w-5 h-5 text-white" fill="white" />
            </div>
            <div>
              <p className="font-bold text-gray-900">We don&apos;t just manage careers. We build futures.</p>
              <p className="text-gray-500 text-sm mt-1">Personalized support. Strategic growth. Lasting impact.</p>
            </div>
          </div>
          <div className="flex flex-col md:items-end gap-2">
            <p className="text-gray-500 text-sm">Want to join our roster?</p>
            <p className="font-bold text-gray-900">Let&apos;s build something incredible together.</p>
            <a href="#contact" className="inline-flex items-center gap-2 mt-2 bg-gray-900 hover:bg-black text-white text-xs font-bold tracking-widest uppercase px-6 py-3 rounded-lg transition-colors">
              WORK WITH US
              <ArrowUpRight className="w-4 h-4" strokeWidth={2.5} />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
