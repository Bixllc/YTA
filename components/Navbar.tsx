"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { Menu, X, ArrowUpRight } from "lucide-react";

const NAV_LINKS = [
  { label: "ABOUT", href: "#about" },
  { label: "SERVICES", href: "#services" },
  { label: "OUR ROSTER", href: "#roster" },
  { label: "WORK WITH US", href: "#work" },
];

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setIsScrolled(window.scrollY > 10);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-shadow duration-300 ${
        isScrolled ? "shadow-md" : ""
      }`}
    >
      <div className="mx-auto max-w-6xl px-6">
        <div className="flex items-center justify-between bg-white rounded-2xl mt-4 px-6 py-3 shadow-sm">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-2.5 shrink-0">
            <svg viewBox="0 0 48 48" className="w-8 h-8" fill="none">
              <polygon points="24,3 45,42 3,42" stroke="#C8102E" strokeWidth="3.5" fill="none" strokeLinejoin="round" />
              <polygon points="24,36 13,16 35,16" fill="#C8102E" />
            </svg>
            <span className="text-gray-900 font-extrabold text-xs tracking-widest leading-tight uppercase">
              Young<br />Talent<br />Agency
            </span>
          </Link>

          {/* Desktop Nav */}
          <nav className="hidden md:flex items-center gap-8">
            {NAV_LINKS.map((link) => (
              <a
                key={link.label}
                href={link.href}
                className="text-xs font-semibold tracking-widest text-gray-700 hover:text-gray-900 transition-colors"
              >
                {link.label}
              </a>
            ))}
          </nav>

          {/* CTA Button */}
          <div className="hidden md:block">
            <a
              href="#contact"
              className="inline-flex items-center gap-1.5 bg-[#C8102E] hover:bg-[#a01830] text-white text-xs font-bold tracking-widest uppercase px-5 py-3 rounded-lg transition-colors"
            >
              CONTACT US
              <ArrowUpRight className="w-4 h-4" strokeWidth={2.5} />
            </a>
          </div>

          {/* Mobile hamburger */}
          <button
            className="md:hidden p-2 text-gray-700"
            onClick={() => setMobileOpen((v) => !v)}
            aria-label="Toggle menu"
          >
            {mobileOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>

        {/* Mobile menu */}
        {mobileOpen && (
          <div className="md:hidden bg-white rounded-2xl mt-2 px-6 py-4 shadow-sm flex flex-col gap-4">
            {NAV_LINKS.map((link) => (
              <a
                key={link.label}
                href={link.href}
                onClick={() => setMobileOpen(false)}
                className="text-xs font-semibold tracking-widest text-gray-700 hover:text-gray-900 transition-colors"
              >
                {link.label}
              </a>
            ))}
            <a
              href="#contact"
              onClick={() => setMobileOpen(false)}
              className="inline-flex items-center gap-1.5 bg-[#C8102E] hover:bg-[#a01830] text-white text-xs font-bold tracking-widest uppercase px-5 py-3 rounded-lg transition-colors w-fit"
            >
              CONTACT US <ArrowUpRight className="w-4 h-4" strokeWidth={2.5} />
            </a>
          </div>
        )}
      </div>
    </header>
  );
}
