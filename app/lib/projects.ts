import { Project } from "./types";

export const projects: Project[] = [
  {
    slug: "johan-maillard-paysage",
    client: "Johan Maillard Paysage",
    title: "Création du site vitrine d'un paysagiste des Hautes-Alpes",
    category: "vitrine",
    description:
      "Conception et développement complet du site vitrine de Johan Maillard, paysagiste basé à La Roche de Rame. Un site élégant mettant en valeur ses réalisations et ses services d'aménagement paysager.",
    challenge:
      "Créer une présence en ligne à la hauteur du savoir-faire artisanal d'un paysagiste, en traduisant la beauté de ses réalisations extérieures dans une expérience web immersive et professionnelle, tout en optimisant la visibilité locale dans les Hautes-Alpes.",
    solution:
      "Développement d'un site vitrine moderne avec Next.js et Tailwind CSS, mettant l'accent sur une galerie de projets réalisés, une présentation claire des services et une optimisation SEO locale pour capter la clientèle de la région.",
    technologies: ["Next.js", "React", "Tailwind CSS"],
    imgCover: "/JohanMaillard/hero.jpeg",
    imgArray: [
      "/JohanMaillard/hero.jpeg",
      "/JohanMaillard/devis.png",
      "/JohanMaillard/image2.jpeg",
    ],
    date: "Février 2026",
    year: 2026,
    link: "https://www.johanmaillardpaysage.fr/",
    featured: true,
  },
  {
    slug: "sentinelle",
    client: "Sentinelle",
    title: "Plateforme IA de prévention des risques en montagne",
    category: "logiciel",
    description:
      "Développement d'une plateforme d'intelligence artificielle prédictive dédiée à la sécurité en montagne. Sentinelle anticipe les risques d'avalanche en analysant les données nivologiques et météorologiques.",
    challenge:
      "Concevoir un système capable d'analyser en temps réel des données météorologiques complexes et de fournir des prédictions fiables sur les risques d'avalanche, tout en garantissant une interface intuitive pour les professionnels de la montagne.",
    solution:
      "Développement d'une architecture robuste combinant des modèles de Machine Learning avec une interface web performante. L'application croise données historiques, topographie et analyse du manteau neigeux pour produire des alertes prédictives.",
    technologies: ["React", "Next.js", "Python", "Machine Learning", "API REST"],
    imgCover: "/SENTINELLE.png",
    imgArray: ["/SENTINELLE.png", "/SENTINELLE.png", "/SENTINELLE.png"],
    date: "Décembre 2025",
    year: 2025,
    link: "https://sentinelle.app/",
    featured: true,
  },
  {
    slug: "iroc",
    client: "IROC",
    title: "Développement full-stack de la plateforme recherche",
    category: "logiciel",
    description:
      "Mission freelance chez IROC pour le développement de nouvelles fonctionnalités front-end et back-end, ainsi que la maintenance de la base de données de l'application dédiée aux chercheurs.",
    challenge:
      "Intégrer rapidement l'écosystème technique existant pour livrer de nouvelles fonctionnalités en un mois, tout en maintenant la stabilité de la plateforme en production utilisée par des chercheurs au quotidien.",
    solution:
      "Développement agile de nouvelles fonctionnalités en respectant l'architecture existante. Optimisation des requêtes back-end et refactoring de composants front-end pour améliorer l'expérience utilisateur.",
    technologies: ["React", "Node.js", "PostgreSQL", "API REST"],
    imgCover: "/IROC.png",
    imgArray: ["/Iroc/170shots_so.png", "/Iroc/526shots_so.png", "/IROC.png"],
    date: "Avril 2022",
    year: 2022,
    link: "https://iroc.app/",
    featured: true,
  },
  {
    slug: "enedis",
    client: "Enedis",
    title: "Système de gestion de base de données des travaux Lyon Métropole",
    category: "logiciel",
    description:
      "Conception et gestion d'un système de base de données pour le suivi des travaux d'Enedis sur Lyon Métropole, optimisant les processus de suivi et de reporting.",
    challenge:
      "Structurer et fiabiliser la gestion d'une base de données de travaux à l'échelle d'une métropole, avec des contraintes de précision et de traçabilité propres au secteur de l'énergie.",
    solution:
      "Mise en place d'outils de gestion de base de données avec des workflows automatisés pour le suivi des travaux, le reporting et la visualisation des données géographiques.",
    technologies: ["SQL", "Python", "Excel VBA", "Gestion de données"],
    imgCover: "/enedis.png",
    imgArray: ["/enedis.png", "/enedis.png", "/enedis.png"],
    date: "Avril 2022",
    year: 2022,
    link: "https://www.enedis.fr",
    featured: false,
  },
  {
    slug: "hiddenhills",
    client: "Hidden Hills Club",
    title: "Refonte front-end du site e-commerce",
    category: "ecommerce",
    description:
      "Mission freelance pour la conception et le développement de nouvelles fonctionnalités sur le site e-commerce de Hidden Hills Club, marque lifestyle premium basée à Los Angeles.",
    challenge:
      "Repenser l'expérience d'achat en ligne d'une marque premium en traduisant son positionnement haut de gamme dans chaque interaction utilisateur, tout en optimisant les performances du site.",
    solution:
      "Refonte complète du front-end avec un design épuré et des animations soignées reflétant l'identité premium de la marque. Optimisation du parcours d'achat et intégration de nouvelles fonctionnalités produit.",
    technologies: ["Shopify", "Liquid", "JavaScript", "CSS"],
    imgCover: "/HiddensHills/cover.png",
    imgArray: [
      "/HiddensHills/image1.png",
      "/HiddensHills/image2.png",
      "/HiddensHills/cover.png",
    ],
    date: "Avril 2022",
    year: 2022,
    link: "https://hiddenhillsclub.com/",
    featured: true,
  },
];

export function getProjectBySlug(slug: string): Project | undefined {
  return projects.find((p) => p.slug === slug);
}

export function getFeaturedProjects(): Project[] {
  return projects.filter((p) => p.featured);
}

export function getProjectsByCategory(
  category: string
): Project[] {
  if (category === "all") return projects;
  return projects.filter((p) => p.category === category);
}

export const categoryLabels: Record<string, string> = {
  all: "Tous",
  vitrine: "Sites Vitrine",
  ecommerce: "E-Commerce",
  logiciel: "Logiciel / SaaS",
};
