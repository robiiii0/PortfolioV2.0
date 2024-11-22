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
import img1 from "@/public/image.png";
import img2 from "@/public/gk.png";
import img3 from "@/public/IROC.png";
import img4 from "@/public/THE JEANS RESTOCK.png";
import img5 from "@/public/enedis.png";

export const ListJobs: ObjList[] = [
  {
    index: 1,
    company: "Eloken",
    companyEn: "Eloken",
    jobName:
      "Réalisation de composants réactifs pour le site web et les produits d'Eloken",
    jobNameEn:
      "Realization of Responsive Components for Eloken's Website and Products",
    title3: "title3",
    description:
      "Dans le cadre d'Eloken, le projet de développement web impliquait la réalisation de composants réactifs pour leur site web et les produits présentés sur leur plateforme en ligne. En appliquant leur expertise en développement front-end.",
    descriptionEng:
      "In the context of Eloken, the web development project involved the realization of responsive components for both their website and the products featured on their online platform. By applying their expertise in front-end development.",
    alt: "alt",
    imgCover: img1,
    imgArray: [
      "/Eloken/devbeta.png",
      "/Eloken/devalpha.png",
      "https://eloken.com/portfolio",
    ],
    date: new Date(2022, 3, 24),
    path: "https://eloken.com",
    aboutThem:
      "Eloken est une entreprise spécialisée dans la création de sites web de haute qualité. Ils offrent une gamme de services de développement web pour aider les entreprises à établir une forte présence en ligne.",
    imglogo:
      "https://eloken.com/_next/image?url=%2F_next%2Fstatic%2Fmedia%2FLogo.9cbeff77.png&w=1200&q=75",
    link: "https://eloken.com/",
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
    imgCover: img3,
    imgArray: [
      "/Iroc/image1.png",
      "/Iroc/image2.png",
      "https://www.iroc.app/#features",
    ],
    date: new Date(2022, 3, 24),
    path: "https://www.iroc.app/",
    aboutThem:
      "Iroc est une entreprise qui se concentre sur le développement autour des chercheurs. Ils fournissent des outils et des services pour soutenir et améliorer le travail des chercheurs.",
    imglogo: "https://www.iroc.app/images/Logo_IROC.png",
    link: "https://www.iroc.app/",
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
    imgCover: img5,
    imgArray: [
      "https://www.cfnewsimmo.net/var/cfnews/storage/images/2/5/4/8/16698452-1-fre-FR/3b.jpg",
      "https://www.monconseillerenergie.fr/wp-content/uploads/sites/11/2019/10/74-erdf-enedis-nouveau-gestionnaire-de-la-distribution-d-electricite.jpg",
      "https://www.enedis.fr",
    ],
    date: new Date(2022, 3, 24),
    path: "https://www.enedis.fr",
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
    imgCover: img4,
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
