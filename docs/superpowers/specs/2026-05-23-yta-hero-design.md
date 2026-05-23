# YTA Website — Hero Section Design Spec

**Date:** 2026-05-23  
**Scope:** Initial scaffold + Navbar + Hero section only

---

## Stack

- Next.js 14 (App Router)
- TypeScript
- Tailwind CSS
- lucide-react (icons)
- framer-motion (optional entrance animations)
- next/image

---

## Project Setup

- Scaffold with `create-next-app` at `/Users/sheneskawilliams/yta`
- Push to `https://github.com/Bixllc/YTA`
- No database, no auth, no Prisma — marketing site only for now

---

## Color Palette

| Token | Value | Usage |
|-------|-------|-------|
| `red-brand` | `#C41E3A` (dark red) | Buttons, accents, logo |
| `bg-page` | `#f2f2f2` | Page background |
| `text-primary` | `#111111` | Headings |
| `text-muted` | `#555555` | Body text |

---

## Navbar

**Behavior:** Fixed top, white background, subtle drop shadow.

**Layout (left → right):**
1. Logo — YTA triangle mark + "YOUNG TALENT AGENCY" wordmark (PNG saved to `public/logo.png`)
2. Nav links (centered): ABOUT · SERVICES · OUR ROSTER · WORK WITH US — uppercase, small tracking, dark gray
3. CTA button (right): "CONTACT US ↗" — dark red filled, white text, rounded

**Mobile:** Hamburger menu collapses nav links.

---

## Hero Section

### Background
Light gray (`#f2f2f2`), full viewport height.

### Text Block (centered, above graphic)

1. **Tag line** — `CREATORS FIRST. BUSINESS ALWAYS.`  
   Small, bold, uppercase, red, letter-spacing wide

2. **H1** — Two lines:  
   - `We Handle the Business.`  
   - `You Focus on` ~~`the Content.`~~ → **`the Content.`** (red)  
   Large bold serif/sans, ~60–72px desktop

3. **Subtitle paragraph:**  
   > Young Talent Agency represents creators, managing the business side of their brand so they can do what they do best, **create.**  
   (the word "create." is red)  
   Gray, centered, max-width ~480px

### CTA Buttons (centered row, gap between)

- **Primary:** `WORK WITH US ↗` — dark red filled, white text, rounded, uppercase
- **Secondary:** `MEET OUR TALENT ↗` — white/transparent bg, dark border, dark text, rounded, uppercase

### Hero Graphic (fan layout)

The graphic is the centerpiece below the buttons. It consists of:

#### Center: Phone Mockup
- Black iPhone-style frame (CSS or SVG — no image needed)
- Rounded corners, notch/dynamic island at top
- Screen content: black bg, red YTA triangle logo centered, "YOUNG TALENT AGENCY" bold white text below, "CREATORS FIRST." white small text, "BUSINESS ALWAYS." red small text
- Dimensions: ~240px wide × 500px tall on desktop (aspect ratio ~9:19)
- Border-radius: 36px (outer frame), 28px (inner screen)
- Notch: centered rectangle at top, ~80px wide × 28px tall, black, border-radius 14px
- Subtle drop shadow + reflection beneath

#### Fan Cards (6 total — 3 left, 3 right)
Each card is a portrait photo with a thin white border/padding (photo card style).

**Left cards** (rotated progressively, overlapping behind phone):
- Card L1 (closest to phone): slight left tilt (~-5°), partially hidden behind phone
- Card L2 (middle): more tilt (~-12°), shifted left
- Card L3 (outermost): most tilt (~-20°), partially cropped by viewport edge

**Right cards** (mirror of left):
- Card R1: slight right tilt (~+5°)
- Card R2: ~+12°
- Card R3: ~+20°, partially cropped

**Images (Unsplash, creator/lifestyle theme — use these exact URLs):**
- L3: `https://images.unsplash.com/photo-1529626455594-4ff0802cfb7e?w=400` (woman sunglasses)
- L2: `https://images.unsplash.com/photo-1516035069371-29a1b244cc32?w=400` (camera/videography)
- L1: `https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=400` (athlete sprint)
- R1: `https://images.unsplash.com/photo-1583454110551-21f2fa2afe61?w=400` (woman fitness)
- R2: `https://images.unsplash.com/photo-1492691527719-9d1e07e534b4?w=400` (studio lighting)
- R3: `https://images.unsplash.com/photo-1511919884226-fd3cad34687c?w=400` (palm trees / car scene)

Cards use `next/image` with `object-cover`. The whole fan group is positioned absolutely or uses `transform-origin` with negative margins to create the layered fan appearance.

**Z-index stacking order (phone always on top):**
- Phone: `z-index: 20`
- L1 / R1 (closest to phone): `z-index: 15`
- L2 / R2 (middle): `z-index: 10`
- L3 / R3 (outermost): `z-index: 5`

#### Bottom Scroll Cue
- Text: `SCROLL TO DISCOVER` — small, uppercase, tracking-widest, muted gray
- Chevron down icon (lucide-react `ChevronDown`) below

---

## File Structure

```
yta/
├── app/
│   ├── layout.tsx          # root layout with font setup
│   ├── page.tsx            # renders Navbar + HeroSection
│   └── globals.css         # tailwind directives + base styles
├── components/
│   ├── Navbar.tsx
│   └── HeroSection.tsx
├── next.config.js          # remotePatterns for images.unsplash.com
├── tailwind.config.js
└── public/
    └── logo.png            # YTA logo file
```

---

## Implementation Notes

- Font: Inter (Google Fonts via `next/font`) for sans-serif body; no custom serif needed
- The phone mockup is built entirely in CSS/JSX (no external phone frame image)
- Unsplash images are referenced by direct URL (add `images.unsplash.com` to `next.config.js` remotePatterns)
- No animations required for MVP — static layout only
- Responsive: on mobile (`< md` breakpoint), hide all fan cards — show only the centered phone mockup. Phone scales to ~180px wide on small screens.
