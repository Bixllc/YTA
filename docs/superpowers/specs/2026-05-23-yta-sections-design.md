# YTA Website — Remaining Sections Design Spec

**Date:** 2026-05-23
**Scope:** About, Services, Roster, Contact, Footer sections

---

## Color Palette (shared with Hero)

| Token | Value | Usage |
|-------|-------|-------|
| `red-brand` | `#C41E3A` | Tags, accents, CTAs |
| `bg-dark` | `#0d0d0d` | Services section bg, footer bg |
| `card-dark` | `#111111` | Service cards, roster info panels, contact info card |
| `bg-page` | `#f2f2f2` | Page background |
| `text-primary` | `#111111` | Headings |
| `text-muted` | `#6b7280` | Body / gray text |

---

## File Structure

```
components/
  AboutSection.tsx       # About + partner logos scroll
  ServicesSection.tsx    # Services dark section with 3 cards
  RosterSection.tsx      # Creator roster cards + bottom banner
  ContactSection.tsx     # Contact form + info card
  Footer.tsx             # Dark footer
app/
  api/
    contact/
      route.ts           # POST handler — validates form, sends email via Resend
  page.tsx               # Updated to include all new sections
```

---

## 1. AboutSection

**File:** `components/AboutSection.tsx`
**Anchor:** `id="about"`
**Background:** White

### Layout
Two-column, max-w-7xl centered, large gap:
- Left column (~45%): text content
- Right column (~55%): scrolling logos

### Left Column

1. **Tag:** `ABOUT YOUNG TALENT AGENCY` — red (`#C41E3A`), text-xs, font-bold, tracking-widest, uppercase
2. **H2:** Two lines:
   - `We're in your corner.`
   - `Always.` — in red (`#C41E3A`)
   - Font: font-extrabold, text-4xl md:text-5xl lg:text-6xl, text-gray-900
3. **Red underline:** 40px wide, 3px tall, bg-[#C41E3A], mt-4 mb-8
4. **Three paragraphs** (gray-600, text-base, leading-relaxed, max-w-lg):
   - P1: "We started Young Talent Agency because we love the business side of the creator world. Negotiating deals, advocating for talent, and making sure the people we represent are valued and protected – that's what drives us. We're not just middlemen. We're in your corner, fighting for what you're worth and making sure every opportunity that comes your way works in your favor."
   - P2: "We believe that every creator deserves someone who genuinely cares about their growth and their business, someone who takes the time to understand their brand and advocates for them like it's personal. Because for us, it is."
   - P3: "Whether you're a full-time creator or someone building something on the side, we're here to handle the business so you can focus on what you're good at and make sure you're compensated fairly along the way."
5. **CTA:** `WORK WITH US ↗` — outlined button (border-2 border-gray-900, bg-transparent, hover:bg-gray-900 hover:text-white), ArrowUpRight icon, text-xs font-bold tracking-widest uppercase, px-6 py-3, mt-8

### Right Column — Infinite Vertical Logo Scroll

Two sub-columns side by side, each running a separate infinite vertical scroll animation at slightly different speeds (left column scrolls up at 25s, right column scrolls up at 20s).

**Logos (10 total, split 5+5):**

Column A (left sub-column):
1. Frontier Airlines — `https://upload.wikimedia.org/wikipedia/commons/thumb/0/04/Frontier_Airlines_logo.svg/320px-Frontier_Airlines_logo.svg.png`
2. Visit Colorado Springs — `https://upload.wikimedia.org/wikipedia/commons/thumb/2/2e/Colorado_Springs_Logo.svg/320px-Colorado_Springs_Logo.svg.png` (fallback: text)
3. Hyatt — `https://upload.wikimedia.org/wikipedia/commons/thumb/3/3c/Hyatt_logo.svg/320px-Hyatt_logo.svg.png`
4. Moxy Hotels — use text "moxy HOTELS" styled in a cursive/italic font
5. GoPro — `https://upload.wikimedia.org/wikipedia/commons/thumb/8/87/GoPro_logo.svg/320px-GoPro_logo.svg.png`

Column B (right sub-column):
1. Meta — `https://upload.wikimedia.org/wikipedia/commons/thumb/7/7b/Meta_Platforms_Inc._logo.svg/320px-Meta_Platforms_Inc._logo.svg.png`
2. Krispy Kreme — `https://upload.wikimedia.org/wikipedia/commons/thumb/8/8b/Krispy_Kreme_logo.svg/320px-Krispy_Kreme_logo.svg.png`
3. Expedia — `https://upload.wikimedia.org/wikipedia/commons/thumb/0/09/Expedia_logo_2012.svg/320px-Expedia_logo_2012.svg.png`
4. Kroger — `https://upload.wikimedia.org/wikipedia/commons/thumb/f/fa/Kroger_logo.svg/320px-Kroger_logo.svg.png`
5. Monday.com — `https://upload.wikimedia.org/wikipedia/commons/thumb/c/c6/Monday_logo.svg/320px-Monday_logo.svg.png`

**Implementation:**
- Each logo in a white card (bg-white, rounded-xl, px-8 py-6, shadow-sm)
- Logo rendered with `<img>` tag (not next/image — external Wikimedia URLs not in remotePatterns)
- Each column: `position: relative; overflow: hidden; height: ~600px`
- Inner track duplicated (logos × 2) and animated with `@keyframes scrollUp { 0% translateY(0) → 100% translateY(-50%) }`
- Left column: `animation: scrollUp 25s linear infinite`
- Right column: `animation: scrollUp 20s linear infinite` (slight offset creates natural feel)
- Section label `OUR PARTNERS` in small gray tracking text below the scroll columns

---

## 2. ServicesSection

**File:** `components/ServicesSection.tsx`
**Anchor:** `id="services"`
**Background:** `#0d0d0d` (near-black)

### Header (centered)
1. **Tag:** `OUR SERVICES` — red, text-xs, font-bold, tracking-widest, uppercase
2. **H2:** Two lines:
   - `We handle the business.`
   - `You focus on` **`creating.`** (red)
   - Font: font-extrabold, text-4xl md:text-5xl, text-white
3. **Subtitle:** "From securing brand deals to managing contracts and maximizing opportunities, we provide end-to-end support so you can grow your brand while we handle the rest." — text-gray-400, max-w-xl, centered

### 3 Service Cards

Each card: `bg-[#111]`, rounded-2xl, p-8, relative, overflow-hidden, min-height ~400px

#### Common card structure:
- **Top row:** Number (`01`) in red text-sm font-bold + red rounded-lg icon box (p-2, bg-[#C41E3A]/10, border border-[#C41E3A]/20) with lucide icon in red
- **Title:** text-white, text-2xl, font-bold, mt-6
- **Description:** text-gray-400, text-sm, leading-relaxed, max-w-xs
- **Bottom-left:** Red circle arrow button (w-10 h-10, bg-[#C41E3A]/10, border border-[#C41E3A]/30, rounded-full, ArrowUpRight icon in red)
- **Bottom-right:** CSS illustration (absolute positioned)

#### Card 1 — Brand Partnership Management
- Icon: `Handshake` from lucide-react
- Description: "When brands come knocking, we answer. We manage all inbound collaboration requests on your behalf reviewing opportunities, communicating with brands, and moving deals forward from first contact to final delivery."
- **CSS Illustration:** Phone notification card mockup:
  - Dark rounded card (`#1a1a1a`, rounded-xl, p-4, shadow-lg)
  - Header: "New Partnership Request" in white font-semibold text-sm
  - Row: small circular avatar (bg-gray-600, w-8 h-8) + "Fashion Brand" text + blue verified badge
  - Subtext: "Instagram Campaign" in gray text-xs
  - Two buttons side by side: "Review" (bg-[#C41E3A], white text) + "Decline" (bg-gray-700, gray text)
  - Card sits on a slightly larger envelope shape (two white triangular flaps at top using CSS border tricks, envelope body below)
  - Rotated ~-8deg, positioned bottom-right

#### Card 2 — Deal Negotiation
- Icon: `FileEdit` from lucide-react
- Description: "We negotiate on your behalf to make sure you're being paid what your platform is worth. We set competitive rates based on your reach, engagement, and market value and we push back when brands undervalue your work."
- **CSS Illustration:** Deal comparison card:
  - Dark card (`#1a1a1a`, rounded-xl, p-4)
  - "Negotiated Deal ✓" header (white text + green checkmark badge)
  - "Original Offer" label + `$8,500` (gray, line-through or muted)
  - "Negotiated Offer" label + `$15,000` (red, text-xl font-bold)
  - Simple upward-trending chart: SVG polyline in red, 4-5 points going up-right, on dark bg
  - Positioned bottom-right, slight rotation ~+6deg

#### Card 3 — Brand & Contract Vetting
- Icon: `ShieldCheck` from lucide-react
- Description: "Not every deal is a good deal. We review every partnership opportunity to ensure it aligns with your brand, protects your reputation, and includes fair terms. We look at compensation, usage rights, exclusivity clauses, and deliverables so nothing catches you off guard."
- **CSS Illustration:** Clipboard checklist:
  - Clipboard shape: white rounded-lg with dark clip bar at top
  - "PARTNERSHIP AGREEMENT" bold header
  - 5 checklist rows with red checkmarks: Compensation, Usage Rights, Exclusivity, Deliverables, Terms & Conditions
  - Red shield with white checkmark badge overlapping bottom-right corner of clipboard
  - Positioned bottom-right

---

## 3. RosterSection

**File:** `components/RosterSection.tsx`
**Anchor:** `id="roster"`
**Background:** White

### Header (centered)
1. **Tag:** `OUR ROSTER` — red, uppercase, tracking-widest
2. **H2:**
   - `Creators. Innovators.`
   - `Trendsetters.` **`Represented.`** (red)
   - font-extrabold, text-4xl md:text-5xl
3. **Subtitle:** "We represent a select group of creators who are building brands, shaping culture, and inspiring millions across platforms." — text-gray-500, max-w-2xl, centered

### Creator Cards (2 side-by-side)

Each card: rounded-2xl overflow-hidden, flex-row, height ~400px

Left half (~45%): photo (next/image, object-cover, fill)
- Platform badge: absolute top-left (bg-black, rounded-lg, p-2) — Instagram or TikTok SVG icon in white

Right half (~55%): dark bg (`#111`), p-8, flex-col, justify-between
- **Name row:** Name in text-white text-2xl font-bold + red verified checkmark circle (bg-[#C41E3A], white checkmark)
- **Role:** text-gray-400 text-sm (e.g. "Lifestyle Creator")
- **Divider:** thin gray line
- **Bio:** text-gray-300 text-sm leading-relaxed
- **Stats row:** 3 stats separated by thin vertical dividers:
  - Number in red font-bold text-xl
  - Label in gray text-xs uppercase (Followers / Engagement / Avg. Views)

**Creator data:**

Creator 1 — Jade McIntosh:
- Photo: `https://images.unsplash.com/photo-1529626455594-4ff0802cfb7e?w=600` (already in hero)
- Platform: Instagram
- Role: Lifestyle Creator
- Bio: "Lifestyle creator sharing real moments, style, and motivation. Inspiring confidence and authenticity every day."
- Stats: 850K Followers | 12.6% Engagement | 8.2M Avg. Views

Creator 2 — Dre Thompson:
- Photo: `https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=600` (already in hero)
- Platform: TikTok
- Role: Fitness Creator
- Bio: "Fitness creator and athlete helping thousands build discipline, strength, and a better mindset."
- Stats: 1.2M Followers | 10.8% Engagement | 15.4M Avg. Views

### Bottom Banner

Two-panel row (border-t border-gray-100, mt-16, pt-8):

Left panel (flex-1):
- Red circle with white star icon (w-12 h-12, bg-[#C41E3A])
- "We don't just manage careers. We build futures." — font-bold text-gray-900
- "Personalized support. Strategic growth. Lasting impact." — text-gray-500 text-sm

Right panel (flex-1, items-end):
- "Want to join our roster?" — text-gray-500 text-sm
- "Let's build something incredible together." — font-bold text-gray-900
- "WORK WITH US ↗" dark filled button (bg-gray-900 hover:bg-black, white text, ArrowUpRight icon)

---

## 4. ContactSection

**File:** `components/ContactSection.tsx`
**Anchor:** `id="contact"`
**Background:** White

### Header (left-aligned)
- **Tag:** `CONTACT US` — red, uppercase, tracking-widest
- **H2:**
  - `Let's build something`
  - `incredible together.` (red)

### Two-Column Layout

**Left column (~55%): Form**

Fields (all required, labeled via placeholder):
1. First Name + Last Name (side-by-side)
2. Email Address (full width)
3. "I am a…" dropdown: Creator / Brand / Other
4. Subject (full width)
5. Message textarea (full width, min-height 120px)

All inputs: border border-gray-300, rounded-lg, px-4 py-3, text-sm, focus:border-[#C41E3A] focus:ring-1 focus:ring-[#C41E3A]

Submit button: full-width, bg-[#C41E3A] hover:bg-[#a01830], white text, "SEND MESSAGE" + ArrowUpRight icon, uppercase tracking-widest, font-bold

Below button: "By submitting this form, you agree to our Privacy Policy" in text-gray-400 text-xs

**Form state:** loading spinner during submit, success message on sent, error message on failure.

**Right column (~45%): Contact Info Card**

Dark gradient card (`bg-gradient-to-br from-[#111] to-[#1a0505]`), rounded-2xl, p-8, text-white:
- Send icon in red circle at top
- "We're here for creators and brands." — text-white text-2xl font-bold
- Red 40px underline
- Intro text: "Have a question or just want to say hello? Reach out through any of the channels below." — text-gray-400
- 4 info rows (each with red circle icon + label + value, separated by gray dividers):
  1. Email Us — `hello@yngtlntagency.com`
  2. Call Us — `(614) 123-4567`
  3. Our Office — `Columbus, OH / United States`
  4. Business Hours — `Mon - Fri: 9AM - 6PM EST`
- Icons: Mail, Phone, MapPin, Clock from lucide-react

### API Route — `/app/api/contact/route.ts`

`POST /api/contact`

Request body (JSON): `{ firstName, lastName, email, role, subject, message }`

Validation: all fields required, email format check.

On success: send email via Resend SDK to `hello@yngtlntagency.com`:
- From: `YTA Website <noreply@yngtlntagency.com>` (or Resend sandbox sender)
- Subject: `[YTA Contact] ${subject} — ${role}`
- Body: HTML email with all fields formatted

Resend API key: stored in `.env.local` as `RESEND_API_KEY` (copy from PonDiRio `.env`)

Returns `{ success: true }` on success, `{ error: "..." }` with 4xx/5xx on failure.

---

## 5. Footer

**File:** `components/Footer.tsx`
**Background:** `#0a0a0a`

### Structure

**Top section** (border-b border-white/10, pb-12):

Left col (~25%):
- YTA logo: white/light version — use the SVG triangle mark + "YOUNG TALENT AGENCY" text in white (since logo.png has red bg, render a text-based version here)
- Tagline: "We represent creators. We build careers. We create opportunities that make an impact." — text-gray-400 text-sm, mt-4, max-w-xs
- Social icons row (mt-6): circular bordered buttons (border border-white/20, rounded-full, p-2):
  - Instagram, TikTok (custom SVG), YouTube, Mail — all icons from lucide-react or inline SVG

**Nav columns** (flex-1 grid with 4 equal cols):

| COMPANY | CREATORS | BRANDS | LEGAL |
|---------|----------|--------|-------|
| About Us | Why Join Us | Work With Us | Privacy Policy |
| Services | What We Offer | Our Process | Terms of Service |
| Our Roster | FAQs | Case Studies | Cookie Policy |
| Work With Us | | FAQs | |
| Contact Us | | | |

Column header: text-white text-xs font-bold tracking-widest uppercase, mb-4
Links: text-gray-400 text-sm hover:text-white transition-colors, block, py-1

**Bottom bar** (border-t border-white/10, pt-6, flex justify-between):
- Left: "© 2025 Young Talent Agency. All rights reserved." — text-gray-500 text-xs
- Right: "Built with passion. Driven by creators. ❤" — text-gray-500 text-xs (red heart)

---

## page.tsx Update

Add all new sections in order:

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

---

## .env.local

```
RESEND_API_KEY=<your_resend_api_key>
```

Copy the key from `/Users/sheneskawilliams/PonDiRio/.env` — the same key is used across projects.

---

## Implementation Notes

- Logo images in AboutSection use plain `<img>` tags (Wikimedia CDN not in next.config remotePatterns — easier to leave out than add dozens of hostnames)
- Creator photos in RosterSection use `next/image` with `fill` (already in remotePatterns for unsplash)
- Footer logo uses CSS/text recreation (logo.png has red bg, unsuitable for dark footer)
- TikTok icon not in lucide-react — use inline SVG path
- Instagram icon not in lucide-react — use inline SVG path
- All sections already have `id=` anchors matching the Navbar href values
