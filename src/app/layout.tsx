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
  metadataBase: new URL("https://honeycraftinteriors.in"),
  title: "Honey Craft Interior — Design Beyond Spaces. For a Better You.",
  description:
    "Thoughtfully designed residential and commercial interiors that blend aesthetics, functionality and your unique lifestyle. Chennai based, serving across Tamil Nadu.",
  keywords: [
    "Honey Craft Interior",
    "Honey Craft",
    "Interior Designers Chennai",
    "Luxury Home Interiors",
    "Modular Kitchens Chennai",
    "Turnkey Interior Solutions",
    "False Ceilings",
    "Wardrobe Design",
  ],
  authors: [{ name: "Honey Craft Interior" }],
  icons: {
    icon: [
      { url: getAssetUrl("/favicon.ico"), sizes: "32x32" },
      { url: getAssetUrl("/icon.png"), type: "image/png", sizes: "48x48" },
    ],
    shortcut: getAssetUrl("/favicon.ico"),
    apple: getAssetUrl("/apple-touch-icon.png"),
  },
  openGraph: {
    title: "Honey Craft Interior — Design Beyond Spaces. For a Better You.",
    description:
      "Thoughtfully designed residential and commercial interiors that blend aesthetics, functionality and your unique lifestyle.",
    url: "https://honeycraftinteriors.in",
    siteName: "Honey Craft Interior",
    images: [
      {
        url: getAssetUrl("/images/logo.webp"),
        width: 1024,
        height: 1024,
        alt: "Honey Craft Interior Official Logo",
      },
    ],
    type: "website",
    locale: "en_US",
  },
  twitter: {
    card: "summary_large_image",
    title: "Honey Craft Interior — Design Beyond Spaces",
    description:
      "Thoughtfully designed residential and commercial interiors that blend aesthetics, functionality and your unique lifestyle.",
    images: [getAssetUrl("/images/logo.webp")],
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
