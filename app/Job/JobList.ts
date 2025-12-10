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
  aboutThem: string;
  imglogo: string;
  link: string;
}

import { StaticImageData } from "next/image";

export const ListJobs: ObjList[] = [
  {
    index: 1,
    company: "Sentinelle",
    companyEn: "Sentinelle",
    jobName: "Projet IA - Sentinelle",
    jobNameEn: "AI Project - Sentinelle",
    title3: "title3",
    description:
      "Une technologie d'IA prédictive dédiée à la sécurité en montagne. Sentinelle anticipe les risques d'avalanche en analysant les données nivologiques et météorologiques complexes pour protéger vies et infrastructures.",
    descriptionEng:
      "Predictive AI technology dedicated to mountain safety. Sentinelle anticipates avalanche risks by analyzing complex nivological and meteorological data to protect lives and infrastructure.",
    alt: "Sentinelle AI Project",
    imgCover: "/SENTINELLE.png",
    imgArray: [
      "/SENTINELLE.png",
      "/SENTINELLE.png",
      "/SENTINELLE.png",
    ],
    date: new Date(2025, 11, 10),
    path: "",
    aboutThem:
      "Sentinelle est né d'une mission vitale : redéfinir la prévention des risques en haute montagne grâce à l'intelligence artificielle. En croisant des historiques de données météorologiques, la topographie et l'analyse du manteau neigeux via le Machine Learning, nous développons des modèles capables de prédire les probabilités de déclenchement d'avalanches. Notre objectif est de fournir aux stations et aux secouristes un outil d'aide à la décision fiable pour anticiper le danger avant qu'il ne survienne.",
    imglogo: "",
    link: "https://sentinelle.app/",
  },
  {
    index: 2,
    company: "Iroc",
    companyEn: "Iroc",
    jobName: "Développement Full-Stack chez IROC",
    jobNameEn: "Full-Stack Development at IROC",
    title3: "title3",
    description:
      "Pendant 1 mois, j'ai réalisé une mission freelance chez IROC, où j'étais responsable du développement de nouvelles fonctionnalités front-end et back-end ainsi que de la maintenance du back-end et de la base de données de l'application.",
    descriptionEng:
      "During 1 month, I carried out a freelance mission at IROC, where I was responsible for developing new front-end and back-end features as well as maintaining the back-end and the application database.",
    alt: "alt",
    imgCover: "/IROC.png",
    imgArray: [
      "/Iroc/170shots_so.png",
      "/Iroc/526shots_so.png",
      "/IROC.png",
    ],
    date: new Date(2022, 3, 24),
    path: "",
    aboutThem:
      "Iroc est une entreprise qui se concentre sur le développement autour des chercheurs. Ils fournissent des outils et des services pour soutenir et améliorer le travail des chercheurs.",
    imglogo: "https://iroc.app/assets/iroc-logo-ASAa3fjL.png",
    link: "https://iroc.app/",
  },
  {
    index: 3,
    company: "Enedis",
    companyEn: "Enedis",
    jobName:
      "Gestion de la base de données des travaux d'Enedis sur Lyon Métropole",
    jobNameEn: "Management of the Enedis Works Database on Lyon Métropole",
    title3: "title3",
    description:
      "Dans le cadre d'un stage de 4 mois chez Enedis, j'étais responsable de la gestion de la base de données des travaux d'Enedis sur Lyon Métropole, en utilisant des outils de gestion de base de données et de programmation.",
    descriptionEng:
      "As part of a 4-month internship at Enedis, I was responsible for managing the Enedis works database on Lyon Métropole, using database management and programming tools.",
    alt: "alt",
    imgCover: "/enedis.png",
    imgArray: [
      "https://www.cfnewsimmo.net/var/cfnews/storage/images/2/5/4/8/16698452-1-fre-FR/3b.jpg",
      "https://www.monconseillerenergie.fr/wp-content/uploads/sites/11/2019/10/74-erdf-enedis-nouveau-gestionnaire-de-la-distribution-d-electricite.jpg",
      "/enedis.png",
    ],
    date: new Date(2022, 3, 24),
    path: "",
    aboutThem:
      "Enedis est un important gestionnaire du réseau de distribution d'électricité en France. Ils gèrent le réseau public de distribution d'électricité, assurant la livraison d'électricité aux foyers et aux entreprises.",
    imglogo:
      "https://upload.wikimedia.org/wikipedia/fr/thumb/7/77/Logo_enedis_header.png/1200px-Logo_enedis_header.png",
    link: "https://www.enedis.fr",
  },
  {
    index: 4,
    company: "HiddensHills",
    companyEn: "HiddensHills",

    jobName: "Collaboration avec HiddensHills",
    jobNameEn: "Collaboration with HiddensHills",
    title3: "title3",
    description:
      "Lors d'une mission freelance, j'ai dû concevoir de nouvelles fonctionnalités pour le site E-commerce de HiddensHills, une entreprise basée à Los Angeles, où j'ai pris en charge tout le développement front-end.",
    descriptionEng:
      "During a freelance mission, I had to design new features for the E-commerce site of HiddensHills, a company based in Los Angeles, where I handled the entire front-end development.",
    alt: "alt",
    imgCover: "/HiddensHills/cover.png",
    imgArray: [
      "/HiddensHills/image1.png",
      "/HiddensHills/image2.png",
      "/HiddensHills/cover.png",
    ],
    date: new Date(2022, 3, 24),
    path: "",
    aboutThem:
      "Hidden Hills Club est une marque de style de vie premium qui offre des adhésions et des expériences exclusives. Ils se concentrent sur la fourniture de services et de produits de haute qualité à leurs membres.",
    imglogo:
      "https://hiddenhillsclub.com/cdn/shop/files/MAIN_HIDDEN_HILLS_GRN_1d93f736-b25e-42f9-a074-8bba4446ba73.png?v=1667236646&width=3533",
    link: "https://hiddenhillsclub.com/",
  },
];
