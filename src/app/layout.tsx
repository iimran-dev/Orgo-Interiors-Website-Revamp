import type { Metadata } from "next";
import { Inter, Playfair_Display, Alex_Brush } from "next/font/google";
import "./globals.css";
import { Toaster } from "@/components/ui/toaster";
import { getAssetUrl } from "@/lib/utils";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
});

const playfair = Playfair_Display({
  variable: "--font-playfair",
  subsets: ["latin"],
  display: "swap",
  weight: ["400", "500", "600", "700"],
  style: ["normal", "italic"],
});

const alexBrush = Alex_Brush({
  variable: "--font-script",
  subsets: ["latin"],
  weight: ["400"],
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://orgointeriors.com"),
  title: "ORGO Interiors — Refined Architectural & Spatial Design",
  description:
    "ORGO Interiors designs tailored residential architecture, bespoke culinary studios, and executive ateliers defined by light, proportion, and craftsmanship. Chennai atelier serving South India.",
  keywords: [
    "ORGO Interiors",
    "Architectural Interior Design",
    "Luxury Residential Architecture Chennai",
    "Bespoke Kitchens Chennai",
    "Turnkey Interior Architecture",
    "Poes Garden Interior Designers",
    "Boat Club Road Architecture",
  ],
  authors: [{ name: "ORGO Interiors" }],
  icons: {
    icon: [
      { url: getAssetUrl("/favicon.ico"), sizes: "32x32" },
      { url: getAssetUrl("/icon.png"), type: "image/png", sizes: "48x48" },
    ],
    shortcut: getAssetUrl("/favicon.ico"),
    apple: getAssetUrl("/apple-touch-icon.png"),
  },
  openGraph: {
    title: "ORGO Interiors — Refined Architectural & Spatial Design",
    description:
      "Tailored residential architecture, bespoke culinary studios, and executive ateliers defined by light, proportion, and craftsmanship.",
    url: "https://orgointeriors.com",
    siteName: "ORGO Interiors",
    images: [
      {
        url: getAssetUrl("/images/logo.png"),
        width: 705,
        height: 300,
        alt: "ORGO Interiors Official Logo",
      },
    ],
    type: "website",
    locale: "en_US",
  },
  twitter: {
    card: "summary_large_image",
    title: "ORGO Interiors — Refined Architectural & Spatial Design",
    description:
      "Tailored residential architecture, bespoke culinary studios, and executive ateliers defined by light, proportion, and craftsmanship.",
    images: [getAssetUrl("/images/logo.png")],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <link rel="icon" href={getAssetUrl("/favicon.ico")} sizes="any" />
        <link rel="icon" href={getAssetUrl("/icon.png")} type="image/png" sizes="48x48" />
        <link rel="apple-touch-icon" href={getAssetUrl("/apple-touch-icon.png")} />
      </head>
      <body
        className={`${inter.variable} ${playfair.variable} ${alexBrush.variable} antialiased bg-background text-foreground`}
      >
        {children}
        <Toaster />
      </body>
    </html>
  );
}
