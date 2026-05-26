import type { Metadata } from "next";
import { Bebas_Neue, Instrument_Serif, DM_Sans } from "next/font/google";
import "./globals.css";
import CustomCursor from "@/components/CustomCursor";
import ScrollReveal from "@/components/ScrollReveal";

const bebas = Bebas_Neue({
  subsets: ["latin"],
  weight: "400",
  variable: "--font-bebas",
});

const instrument = Instrument_Serif({
  subsets: ["latin"],
  weight: "400",
  style: ["normal", "italic"],
  variable: "--font-instrument",
});

const dm = DM_Sans({
  subsets: ["latin"],
  weight: ["300", "400", "500"],
  variable: "--font-dm",
});

const SITE_URL = "https://youngtalentagency.com";

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: "Young Talent Agency — Creator Management Agency",
    template: "%s | Young Talent Agency",
  },
  description:
    "Young Talent Agency represents creators and athletes, managing the business side of their brand — deal negotiation, brand partnerships, and contract vetting — so talent can focus on creating.",
  keywords: [
    "creator management agency",
    "talent management",
    "influencer agency",
    "brand partnerships",
    "creator representation",
    "athlete management",
    "social media management",
    "Young Talent Agency",
    "YTA",
  ],
  authors: [{ name: "Young Talent Agency", url: SITE_URL }],
  creator: "Young Talent Agency",
  publisher: "Young Talent Agency",
  robots: {
    index: true,
    follow: true,
    googleBot: { index: true, follow: true, "max-image-preview": "large" },
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    url: SITE_URL,
    siteName: "Young Talent Agency",
    title: "Young Talent Agency — Creator Management Agency",
    description:
      "We handle the business. You focus on the content. YTA manages brand partnerships, deal negotiation, and creator representation.",
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Young Talent Agency — Creator Management Agency",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Young Talent Agency — Creator Management Agency",
    description:
      "We handle the business. You focus on the content. YTA manages brand partnerships, deal negotiation, and creator representation.",
    images: ["/og-image.jpg"],
    creator: "@yngtlntagency",
    site: "@yngtlntagency",
  },
  alternates: {
    canonical: SITE_URL,
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        <meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=5" />
        <link rel="icon" href="/favicon.ico" sizes="any" />
      </head>
      <body className={`${bebas.variable} ${instrument.variable} ${dm.variable}`}>
        <CustomCursor />
        <ScrollReveal />
        {children}
      </body>
    </html>
  );
}
