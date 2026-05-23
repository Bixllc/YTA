# YTA Remaining Sections Implementation Plan

> **For agentic workers:** REQUIRED: Use superpowers:subagent-driven-development (if subagents available) or superpowers:executing-plans to implement this plan. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Build About, Services, Roster, Contact, and Footer sections to complete the YTA marketing site homepage.

**Architecture:** Five independent React client components plus one Next.js API route. Each component is self-contained with its own animations/illustrations. The contact form POSTs to `/api/contact` which sends email via Resend. All sections are wired into `app/page.tsx` in order.

**Tech Stack:** Next.js 14, TypeScript, Tailwind CSS, lucide-react, next/image, Resend

**Spec:** `docs/superpowers/specs/2026-05-23-yta-sections-design.md`

---

## Chunk 1: Setup + AboutSection

### Task 1: Install Resend and configure .env.local

**Files:**
- Modify: `package.json` (via npm install)
- Create: `.env.local`

- [ ] **Step 1: Install resend**

```bash
cd /Users/sheneskawilliams/yta && npm install resend
```

Expected: resend added to `dependencies` in package.json.

- [ ] **Step 2: Create .env.local**

```bash
cat > /Users/sheneskawilliams/yta/.env.local << 'EOF'
RESEND_API_KEY=re_YnmKrDJ7_4GjRqCfpeuxkXXD154sF4nYU
EOF
```

- [ ] **Step 3: Verify .env.local is gitignored**

```bash
cat /Users/sheneskawilliams/yta/.gitignore | grep env
```

Expected: `.env*.local` or `.env.local` present. If not, add it:
```bash
echo ".env.local" >> /Users/sheneskawilliams/yta/.gitignore
```

- [ ] **Step 4: Commit**

```bash
cd /Users/sheneskawilliams/yta
git add package.json package-lock.json
git commit -m "chore: install resend for contact form email"
```

---

### Task 2: Build AboutSection

**Files:**
- Create: `components/AboutSection.tsx`

- [ ] **Step 1: Create components/AboutSection.tsx**

```tsx
"use client";

import { ArrowUpRight } from "lucide-react";

const LOGOS_A = [
  { name: "Frontier Airlines", src: "https://logo.clearbit.com/flyfrontier.com" },
  { name: "Visit Colorado Springs", src: "https://logo.clearbit.com/visitcos.com" },
  { name: "Hyatt", src: "https://logo.clearbit.com/hyatt.com" },
  { name: "Moxy Hotels", src: "https://logo.clearbit.com/marriott.com" },
  { name: "GoPro", src: "https://logo.clearbit.com/gopro.com" },
];

const LOGOS_B = [
  { name: "Meta", src: "https://logo.clearbit.com/meta.com" },
  { name: "Krispy Kreme", src: "https://logo.clearbit.com/krispykreme.com" },
  { name: "Expedia", src: "https://logo.clearbit.com/expedia.com" },
  { name: "Kroger", src: "https://logo.clearbit.com/kroger.com" },
  { name: "Monday.com", src: "https://logo.clearbit.com/monday.com" },
];

function LogoCard({ name, src }: { name: string; src: string }) {
  return (
    <div className="bg-white rounded-xl px-8 py-6 shadow-sm flex items-center justify-center w-full">
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
      <span
        className="text-gray-700 font-semibold text-sm text-center hidden"
        aria-hidden="true"
      >
        {name}
      </span>
    </div>
  );
}

function LogoColumn({
  logos,
  duration,
}: {
  logos: { name: string; src: string }[];
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
      <style>{`
        @keyframes scrollUp {
          0% { transform: translateY(0); }
          100% { transform: translateY(-50%); }
        }
      `}</style>

      <div className="mx-auto max-w-7xl px-6 grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
        {/* Left: Text */}
        <div>
          <p className="text-[#C41E3A] text-xs font-bold tracking-[0.25em] uppercase mb-6">
            ABOUT YOUNG TALENT AGENCY
          </p>

          <h2 className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-gray-900 leading-tight">
            We&apos;re in your corner.
            <br />
            <span className="text-[#C41E3A]">Always.</span>
          </h2>

          <div className="w-10 h-[3px] bg-[#C41E3A] mt-5 mb-8" />

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
```

- [ ] **Step 2: Run TypeScript check**

```bash
cd /Users/sheneskawilliams/yta && npx tsc --noEmit 2>&1 | grep -v "HeroSection\|ServicesSection\|RosterSection\|ContactSection\|Footer" | head -20
```

Fix any TS errors in AboutSection.tsx.

- [ ] **Step 3: Commit**

```bash
git add components/AboutSection.tsx
git commit -m "feat: About section with partner logos infinite scroll"
```

---

## Chunk 2: ServicesSection

### Task 3: Build ServicesSection

**Files:**
- Create: `components/ServicesSection.tsx`

- [ ] **Step 1: Create components/ServicesSection.tsx**

```tsx
import { Handshake, FileEdit, ShieldCheck, ArrowUpRight } from "lucide-react";

function ServiceCard({
  number,
  icon: Icon,
  title,
  description,
  illustration,
}: {
  number: string;
  icon: React.ElementType;
  title: string;
  description: string;
  illustration: React.ReactNode;
}) {
  return (
    <div className="relative bg-[#111] rounded-2xl p-8 overflow-hidden flex flex-col min-h-[420px]">
      {/* Top row */}
      <div className="flex items-center gap-4 mb-6">
        <span className="text-[#C41E3A] text-sm font-bold">{number}</span>
        <div className="p-2 rounded-lg bg-[#C41E3A]/10 border border-[#C41E3A]/20">
          <Icon className="w-5 h-5 text-[#C41E3A]" strokeWidth={1.5} />
        </div>
      </div>

      {/* Content */}
      <h3 className="text-white text-2xl font-bold mb-4 leading-snug">{title}</h3>
      <p className="text-gray-400 text-sm leading-relaxed max-w-xs">{description}</p>

      {/* Arrow button */}
      <div className="mt-auto pt-8">
        <button className="w-10 h-10 rounded-full bg-[#C41E3A]/10 border border-[#C41E3A]/30 flex items-center justify-center hover:bg-[#C41E3A]/20 transition-colors">
          <ArrowUpRight className="w-4 h-4 text-[#C41E3A]" strokeWidth={2} />
        </button>
      </div>

      {/* Illustration */}
      <div className="absolute bottom-0 right-0 pointer-events-none">
        {illustration}
      </div>
    </div>
  );
}

function EnvelopeIllustration() {
  return (
    <div style={{ width: 200, height: 220, position: "relative", transform: "rotate(-8deg) translate(20px, 20px)" }}>
      {/* Envelope body */}
      <div style={{
        position: "absolute", bottom: 0, left: 0, right: 0, height: 130,
        background: "#1c1c1c", borderRadius: "0 0 12px 12px",
        border: "1px solid #2a2a2a",
      }} />
      {/* Envelope flap left */}
      <div style={{
        position: "absolute", bottom: 70, left: 0,
        width: 0, height: 0,
        borderBottom: "70px solid #222",
        borderRight: "100px solid transparent",
      }} />
      {/* Envelope flap right */}
      <div style={{
        position: "absolute", bottom: 70, right: 0,
        width: 0, height: 0,
        borderBottom: "70px solid #222",
        borderLeft: "100px solid transparent",
      }} />
      {/* Envelope top flap */}
      <div style={{
        position: "absolute", bottom: 130, left: 0, right: 0,
        width: 0, height: 0,
        borderLeft: "100px solid transparent",
        borderRight: "100px solid transparent",
        borderTop: "60px solid #252525",
      }} />

      {/* Notification card */}
      <div style={{
        position: "absolute", top: 0, left: 8, right: 8,
        background: "#1e1e1e", borderRadius: 10, padding: 12,
        border: "1px solid #2e2e2e",
      }}>
        <p style={{ color: "white", fontWeight: 700, fontSize: 11, marginBottom: 8 }}>
          New Partnership Request
        </p>
        <div style={{ display: "flex", gap: 8, alignItems: "center", marginBottom: 8 }}>
          <div style={{ width: 26, height: 26, background: "#374151", borderRadius: "50%", flexShrink: 0 }} />
          <div>
            <p style={{ color: "white", fontSize: 10, fontWeight: 600 }}>
              Fashion Brand{" "}
              <span style={{ color: "#60a5fa", fontSize: 9 }}>✓</span>
            </p>
            <p style={{ color: "#6b7280", fontSize: 9 }}>Instagram Campaign</p>
          </div>
        </div>
        <div style={{ display: "flex", gap: 6 }}>
          <span style={{
            background: "#C41E3A", color: "white", borderRadius: 6,
            padding: "4px 10px", fontSize: 10, fontWeight: 600,
          }}>Review</span>
          <span style={{
            background: "#374151", color: "#9ca3af", borderRadius: 6,
            padding: "4px 10px", fontSize: 10,
          }}>Decline</span>
        </div>
      </div>
    </div>
  );
}

function DealIllustration() {
  return (
    <div style={{
      width: 190, background: "#1a1a1a", borderRadius: 12, padding: 14,
      transform: "rotate(6deg) translate(16px, 16px)",
      border: "1px solid #2a2a2a",
    }}>
      <div style={{ display: "flex", alignItems: "center", gap: 6, marginBottom: 12 }}>
        <span style={{ color: "white", fontWeight: 700, fontSize: 11 }}>Negotiated Deal</span>
        <span style={{
          background: "#16a34a", borderRadius: "50%", width: 16, height: 16,
          display: "inline-flex", alignItems: "center", justifyContent: "center",
          fontSize: 9, color: "white", flexShrink: 0,
        }}>✓</span>
      </div>
      <div style={{ marginBottom: 6 }}>
        <p style={{ color: "#6b7280", fontSize: 9, marginBottom: 2 }}>Original Offer</p>
        <p style={{ color: "#6b7280", fontSize: 15, fontWeight: 700, textDecoration: "line-through" }}>$8,500</p>
      </div>
      <div style={{ marginBottom: 12 }}>
        <p style={{ color: "#9ca3af", fontSize: 9, marginBottom: 2 }}>Negotiated Offer</p>
        <p style={{ color: "#C41E3A", fontSize: 22, fontWeight: 800 }}>$15,000</p>
      </div>
      <svg viewBox="0 0 160 45" style={{ width: "100%", height: 45, display: "block" }}>
        <polyline
          points="0,42 40,32 80,22 120,12 160,3"
          fill="none"
          stroke="#C41E3A"
          strokeWidth="2.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    </div>
  );
}

function ClipboardIllustration() {
  const items = ["Compensation", "Usage Rights", "Exclusivity", "Deliverables", "Terms & Conditions"];
  return (
    <div style={{ width: 175, transform: "rotate(-3deg) translate(14px, 14px)", position: "relative" }}>
      {/* Clip */}
      <div style={{
        background: "#333", height: 20, borderRadius: "8px 8px 0 0",
        display: "flex", alignItems: "center", justifyContent: "center",
      }}>
        <div style={{ width: 42, height: 12, background: "#555", borderRadius: 6 }} />
      </div>
      {/* Body */}
      <div style={{ background: "white", borderRadius: "0 0 8px 8px", padding: 12 }}>
        <p style={{
          fontWeight: 800, fontSize: 9, color: "#111",
          letterSpacing: "0.06em", marginBottom: 8, textTransform: "uppercase",
        }}>
          Partnership Agreement
        </p>
        {items.map((item) => (
          <div key={item} style={{ display: "flex", alignItems: "center", gap: 5, marginBottom: 5 }}>
            <span style={{ color: "#C41E3A", fontSize: 10, fontWeight: 700 }}>✓</span>
            <span style={{ fontSize: 9, color: "#374151" }}>{item}</span>
          </div>
        ))}
      </div>
      {/* Shield badge */}
      <div style={{
        position: "absolute", bottom: -10, right: -10,
        width: 36, height: 36, background: "#C41E3A", borderRadius: "50%",
        display: "flex", alignItems: "center", justifyContent: "center",
        border: "2px solid #111",
      }}>
        <span style={{ color: "white", fontSize: 14, fontWeight: 700 }}>✓</span>
      </div>
    </div>
  );
}

export default function ServicesSection() {
  return (
    <section id="services" className="bg-[#0d0d0d] py-24">
      <div className="mx-auto max-w-7xl px-6">
        {/* Header */}
        <div className="text-center mb-16">
          <p className="text-[#C41E3A] text-xs font-bold tracking-[0.25em] uppercase mb-6">
            OUR SERVICES
          </p>
          <h2 className="text-4xl md:text-5xl font-extrabold text-white leading-tight mb-6">
            We handle the business.
            <br />
            You focus on{" "}
            <span className="text-[#C41E3A]">creating.</span>
          </h2>
          <p className="text-gray-400 text-base max-w-xl mx-auto leading-relaxed">
            From securing brand deals to managing contracts and maximizing opportunities, we
            provide end-to-end support so you can grow your brand while we handle the rest.
          </p>
        </div>

        {/* Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <ServiceCard
            number="01"
            icon={Handshake}
            title="Brand Partnership Management"
            description="When brands come knocking, we answer. We manage all inbound collaboration requests on your behalf reviewing opportunities, communicating with brands, and moving deals forward from first contact to final delivery."
            illustration={<EnvelopeIllustration />}
          />
          <ServiceCard
            number="02"
            icon={FileEdit}
            title="Deal Negotiation"
            description="We negotiate on your behalf to make sure you're being paid what your platform is worth. We set competitive rates based on your reach, engagement, and market value and we push back when brands undervalue your work."
            illustration={<DealIllustration />}
          />
          <ServiceCard
            number="03"
            icon={ShieldCheck}
            title="Brand & Contract Vetting"
            description="Not every deal is a good deal. We review every partnership opportunity to ensure it aligns with your brand, protects your reputation, and includes fair terms. We look at compensation, usage rights, exclusivity clauses, and deliverables so nothing catches you off guard."
            illustration={<ClipboardIllustration />}
          />
        </div>
      </div>
    </section>
  );
}
```

- [ ] **Step 2: TypeScript check**

```bash
cd /Users/sheneskawilliams/yta && npx tsc --noEmit 2>&1 | grep "ServicesSection" | head -10
```

Fix any errors.

- [ ] **Step 3: Commit**

```bash
git add components/ServicesSection.tsx
git commit -m "feat: Services section with dark cards and CSS illustrations"
```

---

## Chunk 3: RosterSection

### Task 4: Build RosterSection

**Files:**
- Create: `components/RosterSection.tsx`

- [ ] **Step 1: Create components/RosterSection.tsx**

```tsx
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
      {/* Photo half */}
      <div className="relative w-[45%] flex-shrink-0">
        <Image
          src={creator.photo}
          alt={creator.name}
          fill
          className="object-cover"
          sizes="(max-width: 768px) 45vw, 300px"
        />
        {/* Platform badge */}
        <div className="absolute top-4 left-4 bg-black/80 rounded-xl p-2 text-white">
          {creator.platform === "instagram" ? <InstagramIcon /> : <TikTokIcon />}
        </div>
      </div>

      {/* Info half */}
      <div className="flex-1 bg-[#111] p-8 flex flex-col justify-between">
        {/* Name + role */}
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

        {/* Stats */}
        <div className="flex items-center gap-0 mt-6">
          {creator.stats.map((stat, i) => (
            <div key={stat.label} className="flex items-center">
              <div className="text-center px-4 first:pl-0">
                <p className="text-[#C41E3A] text-xl font-bold">{stat.value}</p>
                <p className="text-gray-500 text-xs uppercase tracking-wide mt-0.5">{stat.label}</p>
              </div>
              {i < creator.stats.length - 1 && (
                <div className="w-px h-8 bg-white/10" />
              )}
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
        {/* Header */}
        <div className="text-center mb-16">
          <p className="text-[#C41E3A] text-xs font-bold tracking-[0.25em] uppercase mb-6">
            OUR ROSTER
          </p>
          <h2 className="text-4xl md:text-5xl font-extrabold text-gray-900 leading-tight mb-6">
            Creators. Innovators.
            <br />
            Trendsetters.{" "}
            <span className="text-[#C41E3A]">Represented.</span>
          </h2>
          <p className="text-gray-500 text-base max-w-2xl mx-auto leading-relaxed">
            We represent a select group of creators who are building brands, shaping culture,
            and inspiring millions across platforms.
          </p>
        </div>

        {/* Creator cards */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          {CREATORS.map((creator) => (
            <CreatorCard key={creator.name} creator={creator} />
          ))}
        </div>

        {/* Bottom banner */}
        <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-8 mt-16 pt-8 border-t border-gray-100">
          {/* Left */}
          <div className="flex items-start gap-4">
            <div className="w-12 h-12 rounded-full bg-[#C41E3A] flex items-center justify-center flex-shrink-0">
              <Star className="w-5 h-5 text-white" fill="white" />
            </div>
            <div>
              <p className="font-bold text-gray-900">
                We don&apos;t just manage careers. We build futures.
              </p>
              <p className="text-gray-500 text-sm mt-1">
                Personalized support. Strategic growth. Lasting impact.
              </p>
            </div>
          </div>

          {/* Right */}
          <div className="flex flex-col md:items-end gap-2">
            <p className="text-gray-500 text-sm">Want to join our roster?</p>
            <p className="font-bold text-gray-900">
              Let&apos;s build something incredible together.
            </p>
            <a
              href="#contact"
              className="inline-flex items-center gap-2 mt-2 bg-gray-900 hover:bg-black text-white text-xs font-bold tracking-widest uppercase px-6 py-3 rounded-lg transition-colors"
            >
              WORK WITH US
              <ArrowUpRight className="w-4 h-4" strokeWidth={2.5} />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
```

- [ ] **Step 2: TypeScript check**

```bash
cd /Users/sheneskawilliams/yta && npx tsc --noEmit 2>&1 | grep "RosterSection" | head -10
```

- [ ] **Step 3: Commit**

```bash
git add components/RosterSection.tsx
git commit -m "feat: Roster section with creator cards and stats"
```

---

## Chunk 4: ContactSection + API Route

### Task 5: Build contact API route

**Files:**
- Create: `app/api/contact/route.ts`

- [ ] **Step 1: Create app/api/contact/route.ts**

```ts
import { NextResponse } from "next/server";
import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(req: Request) {
  let body: Record<string, string>;
  try {
    body = await req.json();
  } catch {
    return NextResponse.json({ error: "Invalid request body." }, { status: 400 });
  }

  const { firstName, lastName, email, role, subject, message } = body;

  if (!firstName || !lastName || !email || !role || !subject || !message) {
    return NextResponse.json({ error: "All fields are required." }, { status: 400 });
  }

  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!emailRegex.test(email)) {
    return NextResponse.json({ error: "Invalid email address." }, { status: 400 });
  }

  try {
    await resend.emails.send({
      from: "YTA Website <onboarding@resend.dev>",
      to: ["hello@yngtlntagency.com"],
      subject: `[YTA Contact] ${subject} — ${role}`,
      html: `
        <div style="font-family: sans-serif; max-width: 600px; margin: 0 auto;">
          <h2 style="color: #C41E3A;">New Contact Form Submission</h2>
          <table style="width: 100%; border-collapse: collapse;">
            <tr><td style="padding: 8px; font-weight: bold; width: 140px;">Name</td><td style="padding: 8px;">${firstName} ${lastName}</td></tr>
            <tr style="background: #f9f9f9;"><td style="padding: 8px; font-weight: bold;">Email</td><td style="padding: 8px;"><a href="mailto:${email}">${email}</a></td></tr>
            <tr><td style="padding: 8px; font-weight: bold;">I am a</td><td style="padding: 8px;">${role}</td></tr>
            <tr style="background: #f9f9f9;"><td style="padding: 8px; font-weight: bold;">Subject</td><td style="padding: 8px;">${subject}</td></tr>
          </table>
          <div style="margin-top: 16px; padding: 16px; background: #f9f9f9; border-radius: 8px;">
            <p style="font-weight: bold; margin: 0 0 8px;">Message:</p>
            <p style="margin: 0; white-space: pre-wrap;">${message}</p>
          </div>
        </div>
      `,
    });

    return NextResponse.json({ success: true });
  } catch (err) {
    console.error("Resend error:", err);
    return NextResponse.json(
      { error: "Failed to send message. Please try again." },
      { status: 500 }
    );
  }
}
```

- [ ] **Step 2: Commit**

```bash
mkdir -p /Users/sheneskawilliams/yta/app/api/contact
git add app/api/contact/route.ts
git commit -m "feat: contact form API route with Resend email"
```

---

### Task 6: Build ContactSection

**Files:**
- Create: `components/ContactSection.tsx`

- [ ] **Step 1: Create components/ContactSection.tsx**

```tsx
"use client";

import { useState } from "react";
import { ArrowUpRight, Mail, Phone, MapPin, Clock, Send } from "lucide-react";

const CONTACT_ITEMS = [
  { icon: Mail, label: "Email Us", value: "hello@yngtlntagency.com" },
  { icon: Phone, label: "Call Us", value: "(614) 123-4567" },
  { icon: MapPin, label: "Our Office", value: "Columbus, OH\nUnited States" },
  { icon: Clock, label: "Business Hours", value: "Mon - Fri: 9AM - 6PM EST" },
];

type FormState = {
  firstName: string;
  lastName: string;
  email: string;
  role: string;
  subject: string;
  message: string;
};

const EMPTY_FORM: FormState = {
  firstName: "", lastName: "", email: "",
  role: "", subject: "", message: "",
};

export default function ContactSection() {
  const [form, setForm] = useState<FormState>(EMPTY_FORM);
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");
  const [errorMsg, setErrorMsg] = useState("");

  function handleChange(
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) {
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  }

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setStatus("loading");
    setErrorMsg("");

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form),
      });
      const data = await res.json();
      if (!res.ok) {
        throw new Error(data.error || "Something went wrong.");
      }
      setStatus("success");
      setForm(EMPTY_FORM);
    } catch (err) {
      setStatus("error");
      setErrorMsg(err instanceof Error ? err.message : "Something went wrong.");
    }
  }

  const inputCls =
    "w-full border border-gray-300 rounded-lg px-4 py-3 text-sm text-gray-900 placeholder:text-gray-400 focus:outline-none focus:border-[#C41E3A] focus:ring-1 focus:ring-[#C41E3A] transition-colors";

  return (
    <section id="contact" className="bg-white py-24">
      <div className="mx-auto max-w-7xl px-6 grid grid-cols-1 lg:grid-cols-[1fr_420px] gap-16">
        {/* Left: Form */}
        <div>
          <p className="text-[#C41E3A] text-xs font-bold tracking-[0.25em] uppercase mb-6">
            CONTACT US
          </p>
          <h2 className="text-4xl md:text-5xl font-extrabold text-gray-900 leading-tight mb-4">
            Let&apos;s build something
            <br />
            <span className="text-[#C41E3A]">incredible together.</span>
          </h2>
          <p className="text-gray-500 text-base mb-10">
            Whether you&apos;re a creator looking for representation or a brand looking to
            collaborate, we&apos;d love to hear from you.
            <br />
            Fill out the form and our team will get back to you soon.
          </p>

          {status === "success" ? (
            <div className="rounded-2xl bg-green-50 border border-green-200 p-8 text-center">
              <p className="text-green-700 font-bold text-lg mb-2">Message sent!</p>
              <p className="text-green-600 text-sm">
                Thanks for reaching out. We&apos;ll get back to you soon.
              </p>
              <button
                onClick={() => setStatus("idle")}
                className="mt-4 text-sm text-green-700 underline"
              >
                Send another message
              </button>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-4">
              {/* Name row */}
              <div className="grid grid-cols-2 gap-4">
                <input
                  name="firstName"
                  value={form.firstName}
                  onChange={handleChange}
                  placeholder="First Name *"
                  required
                  className={inputCls}
                />
                <input
                  name="lastName"
                  value={form.lastName}
                  onChange={handleChange}
                  placeholder="Last Name *"
                  required
                  className={inputCls}
                />
              </div>

              <input
                type="email"
                name="email"
                value={form.email}
                onChange={handleChange}
                placeholder="Email Address *"
                required
                className={inputCls}
              />

              <select
                name="role"
                value={form.role}
                onChange={handleChange}
                required
                className={`${inputCls} ${!form.role ? "text-gray-400" : "text-gray-900"}`}
              >
                <option value="" disabled>I am a... *</option>
                <option value="Creator">Creator</option>
                <option value="Brand">Brand</option>
                <option value="Other">Other</option>
              </select>

              <input
                name="subject"
                value={form.subject}
                onChange={handleChange}
                placeholder="Subject *"
                required
                className={inputCls}
              />

              <textarea
                name="message"
                value={form.message}
                onChange={handleChange}
                placeholder="Tell us more about your inquiry *"
                required
                rows={5}
                className={`${inputCls} resize-y`}
              />

              {status === "error" && (
                <p className="text-red-500 text-sm">{errorMsg}</p>
              )}

              <button
                type="submit"
                disabled={status === "loading"}
                className="w-full inline-flex items-center justify-center gap-2 bg-[#C41E3A] hover:bg-[#a01830] disabled:bg-[#C41E3A]/60 text-white text-xs font-bold tracking-widest uppercase px-8 py-4 rounded-lg transition-colors"
              >
                {status === "loading" ? "SENDING..." : "SEND MESSAGE"}
                {status !== "loading" && (
                  <ArrowUpRight className="w-4 h-4" strokeWidth={2.5} />
                )}
              </button>

              <p className="text-gray-400 text-xs">
                By submitting this form, you agree to our{" "}
                <a href="/privacy" className="underline hover:text-gray-600">
                  Privacy Policy
                </a>
              </p>
            </form>
          )}
        </div>

        {/* Right: Info card */}
        <div
          className="rounded-2xl p-8 text-white flex flex-col gap-6"
          style={{
            background: "linear-gradient(135deg, #111 0%, #1a0505 100%)",
          }}
        >
          <div className="w-14 h-14 rounded-full bg-[#C41E3A]/20 border border-[#C41E3A]/30 flex items-center justify-center">
            <Send className="w-6 h-6 text-[#C41E3A]" />
          </div>

          <div>
            <h3 className="text-white text-2xl font-bold leading-snug mb-4">
              We&apos;re here for creators and brands.
            </h3>
            <div className="w-10 h-[3px] bg-[#C41E3A] mb-4" />
            <p className="text-gray-400 text-sm leading-relaxed">
              Have a question or just want to say hello? Reach out through any of the
              channels below.
            </p>
          </div>

          <div className="flex flex-col gap-0">
            {CONTACT_ITEMS.map((item, i) => (
              <div key={item.label}>
                <div className="flex items-start gap-4 py-4">
                  <div className="w-10 h-10 rounded-full border border-[#C41E3A]/40 bg-[#C41E3A]/10 flex items-center justify-center flex-shrink-0">
                    <item.icon className="w-4 h-4 text-[#C41E3A]" />
                  </div>
                  <div>
                    <p className="text-white text-sm font-semibold">{item.label}</p>
                    <p className="text-gray-400 text-sm mt-0.5 whitespace-pre-line">
                      {item.value}
                    </p>
                  </div>
                </div>
                {i < CONTACT_ITEMS.length - 1 && (
                  <div className="w-full h-px bg-white/5" />
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
```

- [ ] **Step 2: TypeScript check**

```bash
cd /Users/sheneskawilliams/yta && npx tsc --noEmit 2>&1 | grep "ContactSection\|contact/route" | head -10
```

- [ ] **Step 3: Commit**

```bash
git add components/ContactSection.tsx
git commit -m "feat: Contact section with form and info card"
```

---

## Chunk 5: Footer + page.tsx + Final Build

### Task 7: Build Footer

**Files:**
- Create: `components/Footer.tsx`

- [ ] **Step 1: Create components/Footer.tsx**

```tsx
import { Mail } from "lucide-react";

function InstagramIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" className="w-4 h-4">
      <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
    </svg>
  );
}

function TikTokIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" className="w-4 h-4">
      <path d="M19.59 6.69a4.83 4.83 0 01-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 01-2.88 2.5 2.89 2.89 0 01-2.89-2.89 2.89 2.89 0 012.89-2.89c.28 0 .54.04.79.1V9.01a6.27 6.27 0 00-.79-.05 6.34 6.34 0 00-6.34 6.34 6.34 6.34 0 006.34 6.34 6.34 6.34 0 006.33-6.34V8.69a8.18 8.18 0 004.79 1.54V6.78a4.85 4.85 0 01-1.02-.09z" />
    </svg>
  );
}

function YouTubeIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" className="w-4 h-4">
      <path d="M23.498 6.186a3.016 3.016 0 00-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 00.502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 002.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 002.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z" />
    </svg>
  );
}

const NAV_COLUMNS = [
  {
    heading: "COMPANY",
    links: ["About Us", "Services", "Our Roster", "Work With Us", "Contact Us"],
  },
  {
    heading: "CREATORS",
    links: ["Why Join Us", "What We Offer", "FAQs"],
  },
  {
    heading: "BRANDS",
    links: ["Work With Us", "Our Process", "Case Studies", "FAQs"],
  },
  {
    heading: "LEGAL",
    links: ["Privacy Policy", "Terms of Service", "Cookie Policy"],
  },
];

export default function Footer() {
  return (
    <footer className="bg-[#0a0a0a] text-white">
      <div className="mx-auto max-w-7xl px-6 py-16">
        <div className="flex flex-col lg:flex-row gap-12">
          {/* Brand col */}
          <div className="lg:w-64 flex-shrink-0">
            {/* Logo mark (text-based for dark bg) */}
            <div className="flex items-center gap-3 mb-4">
              <svg viewBox="0 0 48 48" className="w-10 h-10" fill="none">
                <polygon points="24,3 45,42 3,42" stroke="#C41E3A" strokeWidth="3" fill="none" />
                <polygon points="24,36 13,14 35,14" fill="#C41E3A" />
              </svg>
              <div>
                <p className="text-white font-extrabold text-sm tracking-widest leading-tight">
                  YOUNG
                  <br />
                  TALENT
                  <br />
                  AGENCY
                </p>
              </div>
            </div>
            <p className="text-gray-400 text-sm leading-relaxed max-w-xs">
              We represent creators. We build careers. We create opportunities that make an
              impact.
            </p>
            {/* Social icons */}
            <div className="flex items-center gap-3 mt-6">
              {[
                { icon: <InstagramIcon />, label: "Instagram" },
                { icon: <TikTokIcon />, label: "TikTok" },
                { icon: <YouTubeIcon />, label: "YouTube" },
                { icon: <Mail className="w-4 h-4" />, label: "Email" },
              ].map(({ icon, label }) => (
                <a
                  key={label}
                  href="#"
                  aria-label={label}
                  className="w-9 h-9 rounded-full border border-white/20 flex items-center justify-center text-gray-400 hover:text-white hover:border-white/40 transition-colors"
                >
                  {icon}
                </a>
              ))}
            </div>
          </div>

          {/* Nav columns */}
          <div className="flex-1 grid grid-cols-2 md:grid-cols-4 gap-8">
            {NAV_COLUMNS.map((col) => (
              <div key={col.heading}>
                <p className="text-white text-xs font-bold tracking-widest uppercase mb-4">
                  {col.heading}
                </p>
                <ul className="space-y-2">
                  {col.links.map((link) => (
                    <li key={link}>
                      <a
                        href="#"
                        className="text-gray-400 text-sm hover:text-white transition-colors"
                      >
                        {link}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Bottom bar */}
      <div className="border-t border-white/10">
        <div className="mx-auto max-w-7xl px-6 py-6 flex flex-col md:flex-row justify-between items-center gap-2">
          <p className="text-gray-500 text-xs">
            © 2025 Young Talent Agency. All rights reserved.
          </p>
          <p className="text-gray-500 text-xs">
            Built with passion. Driven by creators.{" "}
            <span className="text-[#C41E3A]">♥</span>
          </p>
        </div>
      </div>
    </footer>
  );
}
```

- [ ] **Step 2: Commit**

```bash
git add components/Footer.tsx
git commit -m "feat: Footer with nav columns and social links"
```

---

### Task 8: Wire sections into page.tsx + final build

**Files:**
- Modify: `app/page.tsx`

- [ ] **Step 1: Replace app/page.tsx**

```tsx
import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import AboutSection from "@/components/AboutSection";
import ServicesSection from "@/components/ServicesSection";
import RosterSection from "@/components/RosterSection";
import ContactSection from "@/components/ContactSection";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <main>
      <Navbar />
      <HeroSection />
      <AboutSection />
      <ServicesSection />
      <RosterSection />
      <ContactSection />
      <Footer />
    </main>
  );
}
```

- [ ] **Step 2: Run full build**

```bash
cd /Users/sheneskawilliams/yta && npm run build 2>&1 | tail -30
```

Expected: build completes with no errors. Fix any TypeScript or lint errors before proceeding.

- [ ] **Step 3: Commit page.tsx**

```bash
git add app/page.tsx
git commit -m "feat: wire all sections into homepage"
```

- [ ] **Step 4: Push to GitHub**

```bash
cd /Users/sheneskawilliams/yta
git push origin main
```

---

## Final Checklist

- [ ] `.env.local` created with RESEND_API_KEY
- [ ] AboutSection: tag, headline, red underline, 3 paragraphs, CTA, dual infinite logo scroll
- [ ] ServicesSection: dark bg, 3 cards with CSS illustrations (envelope, deal card, clipboard)
- [ ] RosterSection: 2 creator cards with photos + stats, bottom banner
- [ ] ContactSection: form with all fields, loading/success/error states, info card
- [ ] API route `/api/contact`: validates fields, sends via Resend, returns JSON
- [ ] Footer: logo mark, tagline, social icons, 4 nav columns, copyright bar
- [ ] `page.tsx` includes all 7 components in order
- [ ] Full build passes with zero errors
- [ ] Pushed to GitHub
