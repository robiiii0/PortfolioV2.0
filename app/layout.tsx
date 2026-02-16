import "./globals.css";
import type { Metadata } from "next";

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
    <html lang="fr">
      <body className="font-body">
        <div className="grain-overlay" />
        {children}
      </body>
    </html>
  );
}
