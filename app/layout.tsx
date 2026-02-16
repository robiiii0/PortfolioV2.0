import "./globals.css";
import type { Metadata } from "next";
import localFont from "next/font/local";

const clashDisplay = localFont({
  src: [
    { path: "./fonts/ClashDisplay-Regular.woff2", weight: "400" },
    { path: "./fonts/ClashDisplay-Medium.woff2", weight: "500" },
    { path: "./fonts/ClashDisplay-Semibold.woff2", weight: "600" },
    { path: "./fonts/ClashDisplay-Bold.woff2", weight: "700" },
  ],
  variable: "--font-clash-display",
  display: "swap",
});

const satoshi = localFont({
  src: [
    { path: "./fonts/Satoshi-Light.woff2", weight: "300" },
    { path: "./fonts/Satoshi-Regular.woff2", weight: "400" },
    { path: "./fonts/Satoshi-Medium.woff2", weight: "500" },
    { path: "./fonts/Satoshi-Bold.woff2", weight: "700" },
  ],
  variable: "--font-satoshi",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://www.robinchabert.com"),
  title: {
    default: "Robin Chabert | Développeur Web Freelance",
    template: "%s | Robin Chabert",
  },
  description:
    "Robin Chabert, développeur web freelance. Création de sites vitrine, e-commerce Shopify et applications web sur mesure. Expertise React, Next.js et TypeScript.",
  keywords: [
    "développeur web freelance",
    "création site vitrine",
    "développement e-commerce",
    "application SaaS",
    "Robin Chabert",
  ],
  authors: [{ name: "Robin Chabert" }],
  openGraph: {
    type: "website",
    locale: "fr_FR",
    siteName: "Robin Chabert — Développeur Web Freelance",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="fr" className={`${clashDisplay.variable} ${satoshi.variable}`}>
      <body className="font-body">
        <div className="grain-overlay" />
        {children}
      </body>
    </html>
  );
}
