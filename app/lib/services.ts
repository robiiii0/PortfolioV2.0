import { Service } from "./types";

export const services: Service[] = [
  {
    slug: "site-vitrine",
    title: "Site Vitrine",
    subtitle: "Votre image en ligne, pensée pour convertir",
    description:
      "Conception de sites vitrines modernes et performants qui mettent en valeur votre activité. Chaque site est pensé pour refléter votre identité de marque tout en offrant une expérience utilisateur optimale et un référencement naturel solide.",
    features: [
      "Design sur mesure adapté à votre identité",
      "Responsive design (mobile, tablette, desktop)",
      "Optimisation SEO et performances",
      "Animations et interactions soignées",
      "Formulaire de contact intégré",
      "Hébergement et mise en ligne",
    ],
    icon: "globe",
  },
  {
    slug: "e-commerce",
    title: "E-Commerce",
    subtitle: "Une boutique en ligne qui vend",
    description:
      "Développement de boutiques en ligne complètes, du catalogue produit au tunnel de conversion. Je crée des expériences d'achat fluides qui maximisent vos ventes tout en simplifiant la gestion quotidienne de votre activité.",
    features: [
      "Catalogue produits et gestion de stock",
      "Tunnel de conversion optimisé",
      "Paiement sécurisé multi-devises",
      "Interface d'administration intuitive",
      "Intégration logistique et livraison",
      "Analytics et suivi des performances",
    ],
    icon: "shopping-bag",
  },
  {
    slug: "logiciel-saas",
    title: "Logiciel / SaaS",
    subtitle: "Des applications web sur mesure",
    description:
      "Conception et développement d'applications web complexes et de plateformes SaaS. De l'architecture technique au déploiement, je construis des solutions robustes et scalables adaptées à vos processus métier.",
    features: [
      "Architecture technique sur mesure",
      "Interfaces utilisateur complexes",
      "API et intégrations tierces",
      "Base de données et back-end",
      "Authentification et gestion des rôles",
      "Déploiement et maintenance",
    ],
    icon: "code",
  },
];

export const processSteps = [
  {
    number: "01",
    title: "Découverte",
    description:
      "Échange approfondi pour comprendre votre projet, vos objectifs et votre audience cible. Définition du périmètre et des priorités.",
  },
  {
    number: "02",
    title: "Conception",
    description:
      "Création des maquettes et du design de votre interface. Validation du parcours utilisateur et de l'identité visuelle.",
  },
  {
    number: "03",
    title: "Développement",
    description:
      "Intégration et développement de votre projet avec les technologies les plus adaptées. Tests rigoureux à chaque étape.",
  },
  {
    number: "04",
    title: "Lancement",
    description:
      "Mise en ligne, optimisation des performances et formation à l'utilisation. Suivi post-lancement et ajustements.",
  },
];
