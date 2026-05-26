"use client";
import { useState } from "react";
import Image from "next/image";

const TALENT = [
  {
    badge: "Lifestyle Creator · Jamaica",
    badgeIcon: (
      <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
        <circle cx="12" cy="12" r="10"/><line x1="2" y1="12" x2="22" y2="12"/>
        <path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z"/>
      </svg>
    ),
    name: "Dr. Jade\nTroi Mc",
    handle: "@jadetroi — Instagram & TikTok",
    bio: "A Jamaican lifestyle creator known for her vibrant personality and authentic content spanning Caribbean culture, wellness, and everyday life. An ideal partner for lifestyle, beauty, travel, and culture-forward brands.",
    stats: [
      { n: "20.8K", l: "Instagram" },
      { n: "24.9K", l: "TikTok" },
      { n: "1.8M", l: "TikTok Likes" },
    ],
    images: ["/roster/jade-1.jpg", "/roster/jade-2.jpg"],
  },
  {
    badge: "NCAA All-American · Track & Field",
    badgeIcon: (
      <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
        <polyline points="6 9 6 2 18 2 18 9"/>
        <path d="M6 18H4a2 2 0 0 1-2-2v-5a2 2 0 0 1 2-2h16a2 2 0 0 1 2 2v5a2 2 0 0 1-2 2h-2"/>
        <rect x="6" y="14" width="12" height="8"/>
      </svg>
    ),
    name: 'Darius\n"Dash" Weathers',
    handle: "@coach.dashjumps — Instagram",
    bio: "An NCAA All-American track and field athlete specializing in long jump and triple jump. As both a competitive athlete and founder of Dash Elite Training, Dash brings credibility and influence in the sports performance space.",
    stats: [
      { n: "9.1K", l: "Instagram" },
      { n: "NCAA", l: "All-American" },
      { n: "Elite", l: "Coach & Trainer" },
    ],
    images: ["/roster/dash-1.jpg", "/roster/dash-2.jpg"],
  },
];

function TalentCard({ t, index }: { t: typeof TALENT[0]; index: number }) {
  const [active, setActive] = useState(0);

  return (
    <article className="talent-card reveal" aria-label={t.name.replace("\n", " ")}>
      {/* Image slider */}
      <div style={{ position: "relative", width: "100%", aspectRatio: "4/5", marginBottom: 32, overflow: "hidden", borderRadius: 4, background: "var(--paper)" }}>
        {t.images.map((src, i) => (
          <div
            key={i}
            style={{
              position: "absolute", inset: 0,
              opacity: active === i ? 1 : 0,
              transform: `translateX(${(i - active) * 100}%)`,
              transition: "opacity 0.55s cubic-bezier(.16,1,.3,1), transform 0.55s cubic-bezier(.16,1,.3,1)",
            }}
          >
            <Image
              src={src}
              alt={`${t.name.replace("\n", " ")} — photo ${i + 1}`}
              fill
              style={{ objectFit: "cover", objectPosition: "top center" }}
              sizes="(max-width: 768px) 100vw, 50vw"
              priority={index === 0 && i === 0}
            />
          </div>
        ))}

        {/* Slider controls */}
        {t.images.length > 1 && (
          <>
            <button
              onClick={() => setActive((a) => (a - 1 + t.images.length) % t.images.length)}
              aria-label="Previous photo"
              style={{
                position: "absolute", left: 12, top: "50%", transform: "translateY(-50%)",
                width: 32, height: 32, borderRadius: "50%",
                background: "rgba(255,255,255,0.82)", border: "none",
                display: "flex", alignItems: "center", justifyContent: "center",
                boxShadow: "0 2px 8px rgba(0,0,0,0.12)", zIndex: 4,
                transition: "background .2s",
              }}
            >
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="var(--ink)" strokeWidth="2.5" strokeLinecap="round"><polyline points="15 18 9 12 15 6"/></svg>
            </button>
            <button
              onClick={() => setActive((a) => (a + 1) % t.images.length)}
              aria-label="Next photo"
              style={{
                position: "absolute", right: 12, top: "50%", transform: "translateY(-50%)",
                width: 32, height: 32, borderRadius: "50%",
                background: "rgba(255,255,255,0.82)", border: "none",
                display: "flex", alignItems: "center", justifyContent: "center",
                boxShadow: "0 2px 8px rgba(0,0,0,0.12)", zIndex: 4,
                transition: "background .2s",
              }}
            >
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="var(--ink)" strokeWidth="2.5" strokeLinecap="round"><polyline points="9 18 15 12 9 6"/></svg>
            </button>

            {/* Dot indicators */}
            <div style={{ position: "absolute", bottom: 12, left: 0, right: 0, display: "flex", justifyContent: "center", gap: 6, zIndex: 4 }}>
              {t.images.map((_, i) => (
                <button
                  key={i}
                  onClick={() => setActive(i)}
                  aria-label={`Photo ${i + 1}`}
                  style={{
                    width: active === i ? 18 : 6, height: 6, borderRadius: 3, border: "none",
                    background: active === i ? "#fff" : "rgba(255,255,255,0.5)",
                    transition: "width .35s, background .35s",
                    padding: 0,
                  }}
                />
              ))}
            </div>
          </>
        )}
      </div>

      <span style={{ display: "inline-flex", alignItems: "center", gap: 8, fontSize: 10, letterSpacing: "0.18em", textTransform: "uppercase", color: "var(--red)", background: "rgba(200,32,42,0.08)", padding: "5px 14px", marginBottom: 24, fontFamily: "var(--font-dm)" }}>
        {t.badgeIcon}
        {t.badge}
      </span>

      <h3 style={{ fontFamily: "var(--font-bebas)", fontSize: "clamp(36px, 8vw, 52px)", lineHeight: 0.92, letterSpacing: "0.02em", color: "var(--ink)", marginBottom: 10, whiteSpace: "pre-line" }}>
        {t.name}
      </h3>

      <p style={{ fontSize: 13, color: "var(--mid)", marginBottom: 24, fontFamily: "var(--font-dm)" }}>{t.handle}</p>
      <p style={{ fontSize: 14, lineHeight: 1.7, color: "var(--mid)", marginBottom: 32, fontFamily: "var(--font-dm)" }}>{t.bio}</p>

      <div style={{ display: "flex", gap: 32, flexWrap: "wrap", paddingTop: 24, borderTop: "1px solid var(--light-border)" }}>
        {t.stats.map((s) => (
          <div key={s.l}>
            <span style={{ fontFamily: "var(--font-bebas)", fontSize: 34, color: "var(--ink)", letterSpacing: "0.02em", display: "block", lineHeight: 1 }}>{s.n}</span>
            <span style={{ fontSize: 10, letterSpacing: "0.15em", textTransform: "uppercase", color: "var(--mid)", marginTop: 4, display: "block", fontFamily: "var(--font-dm)" }}>{s.l}</span>
          </div>
        ))}
      </div>
    </article>
  );
}

export default function RosterSection() {
  return (
    <section id="roster" style={{ background: "var(--cream)", padding: "140px 52px" }}>
      <div style={{ maxWidth: 1400, margin: "0 auto" }}>
        <div style={{ borderTop: "1px solid var(--light-border)", marginBottom: 72 }} />

        <div className="roster-hdr reveal" style={{ marginBottom: 64 }}>
          <p style={{ fontSize: 11, letterSpacing: "0.25em", textTransform: "uppercase", color: "var(--red)", marginBottom: 18, fontFamily: "var(--font-dm)" }}>
            The Talent
          </p>
          <h2 style={{ fontFamily: "var(--font-bebas)", fontSize: "clamp(52px, 6vw, 86px)", lineHeight: 0.93, letterSpacing: "0.015em", color: "var(--ink)" }}>
            Our Roster
          </h2>
        </div>

        <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 2 }} className="roster-grid-responsive">
          {TALENT.map((t, i) => <TalentCard key={i} t={t} index={i} />)}
        </div>
      </div>

      <style>{`
        @media (max-width: 768px) {
          .roster-grid-responsive { grid-template-columns: 1fr !important; }
        }
        @media (max-width: 480px) {
          .roster-grid-responsive { gap: 24px !important; }
        }
      `}</style>
    </section>
  );
}
