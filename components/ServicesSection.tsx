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
      <div className="flex items-center gap-4 mb-6">
        <span className="text-[#C41E3A] text-sm font-bold">{number}</span>
        <div className="p-2 rounded-lg bg-[#C41E3A]/10 border border-[#C41E3A]/20">
          <Icon className="w-5 h-5 text-[#C41E3A]" strokeWidth={1.5} />
        </div>
      </div>
      <h3 className="text-white text-2xl font-bold mb-4 leading-snug">{title}</h3>
      <p className="text-gray-400 text-sm leading-relaxed max-w-xs">{description}</p>
      <div className="mt-auto pt-8">
        <a
          href="#contact"
          aria-label={`Learn more about ${title}`}
          className="w-10 h-10 rounded-full bg-[#C41E3A]/10 border border-[#C41E3A]/30 flex items-center justify-center hover:bg-[#C41E3A]/20 transition-colors"
        >
          <ArrowUpRight className="w-4 h-4 text-[#C41E3A]" strokeWidth={2} />
        </a>
      </div>
      <div className="absolute bottom-0 right-0 pointer-events-none">
        {illustration}
      </div>
    </div>
  );
}

function EnvelopeIllustration() {
  return (
    <div style={{ width: 200, height: 220, position: "relative", transform: "rotate(-8deg) translate(20px, 20px)" }}>
      <div style={{ position: "absolute", bottom: 0, left: 0, right: 0, height: 130, background: "#1c1c1c", borderRadius: "0 0 12px 12px", border: "1px solid #2a2a2a" }} />
      <div style={{ position: "absolute", bottom: 70, left: 0, width: 0, height: 0, borderBottom: "70px solid #222", borderRight: "100px solid transparent" }} />
      <div style={{ position: "absolute", bottom: 70, right: 0, width: 0, height: 0, borderBottom: "70px solid #222", borderLeft: "100px solid transparent" }} />
      <div style={{ position: "absolute", bottom: 130, left: 0, right: 0, width: 0, height: 0, borderLeft: "100px solid transparent", borderRight: "100px solid transparent", borderTop: "60px solid #252525" }} />
      <div style={{ position: "absolute", top: 0, left: 8, right: 8, background: "#1e1e1e", borderRadius: 10, padding: 12, border: "1px solid #2e2e2e" }}>
        <p style={{ color: "white", fontWeight: 700, fontSize: 11, marginBottom: 8 }}>New Partnership Request</p>
        <div style={{ display: "flex", gap: 8, alignItems: "center", marginBottom: 8 }}>
          <div style={{ width: 26, height: 26, background: "#374151", borderRadius: "50%", flexShrink: 0 }} />
          <div>
            <p style={{ color: "white", fontSize: 10, fontWeight: 600 }}>Fashion Brand <span style={{ color: "#60a5fa", fontSize: 9 }}>✓</span></p>
            <p style={{ color: "#6b7280", fontSize: 9 }}>Instagram Campaign</p>
          </div>
        </div>
        <div style={{ display: "flex", gap: 6 }}>
          <span style={{ background: "#C41E3A", color: "white", borderRadius: 6, padding: "4px 10px", fontSize: 10, fontWeight: 600 }}>Review</span>
          <span style={{ background: "#374151", color: "#9ca3af", borderRadius: 6, padding: "4px 10px", fontSize: 10 }}>Decline</span>
        </div>
      </div>
    </div>
  );
}

function DealIllustration() {
  return (
    <div style={{ width: 190, background: "#1a1a1a", borderRadius: 12, padding: 14, transform: "rotate(6deg) translate(16px, 16px)", border: "1px solid #2a2a2a" }}>
      <div style={{ display: "flex", alignItems: "center", gap: 6, marginBottom: 12 }}>
        <span style={{ color: "white", fontWeight: 700, fontSize: 11 }}>Negotiated Deal</span>
        <span style={{ background: "#16a34a", borderRadius: "50%", width: 16, height: 16, display: "inline-flex", alignItems: "center", justifyContent: "center", fontSize: 9, color: "white", flexShrink: 0 }}>✓</span>
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
        <polyline points="0,42 40,32 80,22 120,12 160,3" fill="none" stroke="#C41E3A" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    </div>
  );
}

function ClipboardIllustration() {
  const items = ["Compensation", "Usage Rights", "Exclusivity", "Deliverables", "Terms & Conditions"];
  return (
    <div style={{ width: 175, transform: "rotate(-3deg) translate(14px, 14px)", position: "relative" }}>
      <div style={{ background: "#333", height: 20, borderRadius: "8px 8px 0 0", display: "flex", alignItems: "center", justifyContent: "center" }}>
        <div style={{ width: 42, height: 12, background: "#555", borderRadius: 6 }} />
      </div>
      <div style={{ background: "white", borderRadius: "0 0 8px 8px", padding: 12 }}>
        <p style={{ fontWeight: 800, fontSize: 9, color: "#111", letterSpacing: "0.06em", marginBottom: 8, textTransform: "uppercase" }}>Partnership Agreement</p>
        {items.map((item) => (
          <div key={item} style={{ display: "flex", alignItems: "center", gap: 5, marginBottom: 5 }}>
            <span style={{ color: "#C41E3A", fontSize: 10, fontWeight: 700 }}>✓</span>
            <span style={{ fontSize: 9, color: "#374151" }}>{item}</span>
          </div>
        ))}
      </div>
      <div style={{ position: "absolute", bottom: -10, right: -10, width: 36, height: 36, background: "#C41E3A", borderRadius: "50%", display: "flex", alignItems: "center", justifyContent: "center", border: "2px solid #111" }}>
        <span style={{ color: "white", fontSize: 14, fontWeight: 700 }}>✓</span>
      </div>
    </div>
  );
}

export default function ServicesSection() {
  return (
    <section id="services" className="bg-[#0d0d0d] py-24">
      <div className="mx-auto max-w-7xl px-6">
        <div className="text-center mb-16">
          <p className="text-[#C41E3A] text-xs font-bold tracking-[0.25em] uppercase mb-6">OUR SERVICES</p>
          <h2 className="text-4xl md:text-5xl font-extrabold text-white leading-tight mb-6">
            We handle the business.
            <br />
            You focus on <span className="text-[#C41E3A]">creating.</span>
          </h2>
          <p className="text-gray-400 text-base max-w-xl mx-auto leading-relaxed">
            From securing brand deals to managing contracts and maximizing opportunities, we provide end-to-end support so you can grow your brand while we handle the rest.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <ServiceCard number="01" icon={Handshake} title="Brand Partnership Management" description="When brands come knocking, we answer. We manage all inbound collaboration requests on your behalf reviewing opportunities, communicating with brands, and moving deals forward from first contact to final delivery." illustration={<EnvelopeIllustration />} />
          <ServiceCard number="02" icon={FileEdit} title="Deal Negotiation" description="We negotiate on your behalf to make sure you're being paid what your platform is worth. We set competitive rates based on your reach, engagement, and market value and we push back when brands undervalue your work." illustration={<DealIllustration />} />
          <ServiceCard number="03" icon={ShieldCheck} title="Brand & Contract Vetting" description="Not every deal is a good deal. We review every partnership opportunity to ensure it aligns with your brand, protects your reputation, and includes fair terms. We look at compensation, usage rights, exclusivity clauses, and deliverables so nothing catches you off guard." illustration={<ClipboardIllustration />} />
        </div>
      </div>
    </section>
  );
}
