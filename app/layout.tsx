import "./globals.css";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: {
    default: "Robin Chabert | Développeur Web Freelance",
    template: "%s | Robin Chabert",
  },
  description:
    "Développeur web freelance spécialisé dans la création de sites vitrine, e-commerce et applications SaaS. Basé en France, je conçois des expériences numériques sur mesure.",
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
