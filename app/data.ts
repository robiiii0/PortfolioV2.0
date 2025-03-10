import { StaticImageData } from "next/image";

export interface DataHomePage {
  description: string;
  descriptionEng: string;
  description2: string;
  description2Eng: string;
}

export interface ObjList {
  index: number;
  company: string;
  companyEn: string;
  jobName: string;
  jobNameEn: string;
  title3: string;
  description: string;
  descriptionEng: string;
  alt: string;
  imgCover: string | StaticImageData;
  imgArray: string[];
  date: Date;
  path: string;
}

export const dataHomePage: DataHomePage[] = [
  {
    description:
      "En tant que développeur web, j'aide les entreprises et les organisations du monde entier à créer des solutions numériques efficaces et à améliorer leur présence en ligne.",
    descriptionEng:
      "En tant que développeur web, j'aide les entreprises et les organisations du monde entier à créer des solutions numériques efficaces et à améliorer leur présence en ligne.",
    description2:
      "Je collabore directement avec les clients ou je soutiens les agences et les studios à l'échelle mondiale, en garantissant des expériences numériques sur mesure.",
    description2Eng:
      "Je collabore directement avec les clients ou je soutiens les agences et les studios à l'échelle mondiale, en garantissant des expériences numériques sur mesure.",
  },
  {
    description:
      "Je suis passionné par l'informatique et le développement de logiciels, cherchant constamment à m'améliorer et à proposer des solutions innovantes.",
    descriptionEng:
      "Je suis passionné par l'informatique et le développement de logiciels, cherchant constamment à m'améliorer et à proposer des solutions innovantes.",
    description2:
      "Je travaille en étroite collaboration avec les clients ou en partenariat avec des agences et des studios du monde entier pour livrer des projets numériques percutants.",
    description2Eng:
      "Je travaille en étroite collaboration avec les clients ou en partenariat avec des agences et des studios du monde entier pour livrer des projets numériques percutants.",
  },
  {
    description:
      "Avec une solide expérience en programmation, j'aime résoudre des problèmes complexes et créer des solutions numériques efficaces et évolutives.",
    descriptionEng:
      "Avec une solide expérience en programmation, j'aime résoudre des problèmes complexes et créer des solutions numériques efficaces et évolutives.",
    description2:
      "Je m'efforce de comprendre les besoins uniques de chaque client pour offrir des solutions numériques personnalisées et efficaces.",
    description2Eng:
      "Je travaille directement avec les clients ou je soutiens les agences et les studios du monde entier, en me concentrant sur la création d'expériences numériques significatives.",
  },
];

export const ExempleListJobs: ObjList[] = [
  {
    index: 1,
    company: "Bosco",
    companyEn: "Bosco",
    jobName:
      "Migration et optimisation d'un site WordPress/Titan vers OVH Cloud",
    jobNameEn:
      "Migration and optimization of a WordPress/Titan site to OVH Cloud",
    title3: "title3",
    description:
      "Transfert des données et configuration des DNS pour assurer une transition fluide. Optimisation des performances et compatibilité avec l'hébergement OVH. Sécurisation et test du site après migration pour garantir son bon fonctionnement",
    descriptionEng:
      "Transfer of data and configuration of DNS to ensure a smooth transition. Optimization of performance and compatibility with OVH hosting. Securing and testing the site after migration to ensure its proper functioning",
    alt: "alt",
    imgCover: "/public/image.png",
    imgArray: [
      "/Eloken/devbeta.png",
      "/Eloken/devalpha.png",
      "https://www.agencebosco.com/notre-travail",
    ],
    date: new Date(2022, 3, 24),
    path: "https://www.agencebosco.com/",
  },
  {
    index: 2,
    company: "Iroc",
    companyEn: "Iroc",
    jobName: "Developpement Full-Stack Chez IROC",
    jobNameEn: "Full-Stack Development at IROC",
    title3: "title3",
    description:
      "Pendant une période de 1 mois, j'ai réalisé une mission en freelance chez IROC, où j'ai été chargé de développer de nouvelles features en front-end et en back-end ainsi que de maintenanir le back-end et la base de donnée de l'application",
    descriptionEng:
      "During 1 month, I carried out a freelance mission at IROC, where I was responsible for developing new front-end and back-end features as well as maintaining the back-end and the application database",
    alt: "alt",
    imgCover: "/public/IROC.png",
    imgArray: [
      "https://plus.unsplash.com/premium_photo-1675793715030-0584c8ec4a13?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      "https://plus.unsplash.com/premium_photo-1675793715030-0584c8ec4a13?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      "https://plus.unsplash.com/premium_photo-1675793715030-0584c8ec4a13?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    ],
    date: new Date(2022, 3, 24),
    path: "https://www.iroc.app/",
  },
  {
    index: 3,
    company: "Enedis",
    companyEn: "Enedis",
    jobName:
      "Gestion de la base de donnée des travaux d'Enedis sur Lyon Métropole",
    jobNameEn: "Management of the Enedis Works Database on Lyon Métropole",
    title3: "title3",
    description:
      "Dans le cadre d'un stage de 4 mois chez Enedis, j'ai été chargé de gérer la base de donnée des travaux d'Enedis sur Lyon Métropole, en utilisant des outils de gestion de base de donnée et de programmation.",
    descriptionEng:
      "As part of a 4-month internship at Enedis, I was responsible for managing the Enedis works database on Lyon Métropole, using database management and programming tools.",
    alt: "alt",
    imgCover: "/public/enedis.png",
    imgArray: [
      "https://plus.unsplash.com/premium_photo-1675793715030-0584c8ec4a13?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      "https://plus.unsplash.com/premium_photo-1675793715030-0584c8ec4a13?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      "https://plus.unsplash.com/premium_photo-1675793715030-0584c8ec4a13?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    ],
    date: new Date(2022, 3, 24),
    path: "https://www.enedis.fr",
  },
];
