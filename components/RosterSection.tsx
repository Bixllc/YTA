const TALENT = [
  {
    badge: "Lifestyle Creator · Jamaica",
    badgeIcon: (
      <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
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
    email: "jadetroi@younglifemanagement.com",
  },
  {
    badge: 'NCAA All-American · Track & Field',
    badgeIcon: (
      <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
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
    email: "coachdash@younglifemanagement.com",
  },
];

const EmailIcon = () => (
  <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
    <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/>
    <polyline points="22,6 12,13 2,6"/>
  </svg>
);

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
          {TALENT.map((t, i) => (
            <div key={i} className="talent-card reveal">
              <span style={{ display: "inline-flex", alignItems: "center", gap: 8, fontSize: 10, letterSpacing: "0.18em", textTransform: "uppercase", color: "var(--red)", background: "rgba(200,32,42,0.08)", padding: "5px 14px", marginBottom: 32, fontFamily: "var(--font-dm)" }}>
                {t.badgeIcon}
                {t.badge}
              </span>

              <h3 style={{ fontFamily: "var(--font-bebas)", fontSize: 52, lineHeight: 0.92, letterSpacing: "0.02em", color: "var(--ink)", marginBottom: 10, whiteSpace: "pre-line" }}>
                {t.name}
              </h3>

              <p style={{ fontSize: 13, color: "var(--mid)", marginBottom: 28, fontFamily: "var(--font-dm)" }}>{t.handle}</p>
              <p style={{ fontSize: 14, lineHeight: 1.7, color: "var(--mid)", marginBottom: 36, fontFamily: "var(--font-dm)" }}>{t.bio}</p>

              <div style={{ display: "flex", gap: 36, marginBottom: 36, flexWrap: "wrap" }}>
                {t.stats.map((s) => (
                  <div key={s.l}>
                    <span style={{ fontFamily: "var(--font-bebas)", fontSize: 34, color: "var(--ink)", letterSpacing: "0.02em", display: "block", lineHeight: 1 }}>{s.n}</span>
                    <span style={{ fontSize: 10, letterSpacing: "0.15em", textTransform: "uppercase", color: "var(--mid)", marginTop: 4, display: "block", fontFamily: "var(--font-dm)" }}>{s.l}</span>
                  </div>
                ))}
              </div>

              <a
                href={"mailto:" + t.email}
                style={{ display: "flex", alignItems: "center", gap: 12, fontSize: 13, color: "var(--mid)", textDecoration: "none", paddingTop: 28, borderTop: "1px solid var(--light-border)", transition: "color .2s", fontFamily: "var(--font-dm)" }}
              >
                <div style={{ width: 30, height: 30, borderRadius: "50%", background: "rgba(200,32,42,0.1)", display: "flex", alignItems: "center", justifyContent: "center", flexShrink: 0, color: "var(--red)" }}>
                  <EmailIcon />
                </div>
                {t.email}
              </a>
            </div>
          ))}
        </div>
      </div>

      <style>{`
        @media (max-width: 768px) {
          .roster-grid-responsive { grid-template-columns: 1fr !important; }
        }
      `}</style>
    </section>
  );
}
