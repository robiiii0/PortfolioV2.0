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

import img3 from "@/public/IROC.png";
import img4 from "@/public/THE JEANS RESTOCK.png";
import img5 from "@/public/enedis.png";

export const dataHomePage: DataHomePage[] = [
  {
    description:
      "As a web developer, I help companies and organizations around the world build effective digital solutions and enhance their online presence.",
    descriptionEng:
      "As a web developer, I help companies and organizations around the world build effective digital solutions and enhance their online presence.",
    description2:
      "I collaborate directly with clients or provide support to agencies and studios globally, ensuring tailored digital experiences.",
    description2Eng:
      "I collaborate directly with clients or provide support to agencies and studios globally, ensuring tailored digital experiences.",
  },
  {
    description:
      "I am passionate about computer science and software development, constantly seeking to improve and deliver innovative solutions.",
    descriptionEng:
      "I am passionate about computer science and software development, constantly seeking to improve and deliver innovative solutions.",
    description2:
      "I work closely with clients or in collaboration with agencies and studios worldwide to deliver impactful digital projects.",
    description2Eng:
      "I work closely with clients or in collaboration with agencies and studios worldwide to deliver impactful digital projects.",
  },
  {
    description:
      "With a strong background in programming, I enjoy solving complex problems and building efficient, scalable digital solutions.",
    descriptionEng:
      "With a strong background in programming, I enjoy solving complex problems and building efficient, scalable digital solutions.",
    description2:
      "I partner directly with clients or support agencies and studios worldwide, focusing on building meaningful digital experiences.",
    description2Eng:
      "I partner directly with clients or support agencies and studios worldwide, focusing on building meaningful digital experiences.",
  },
];

export const ExempleListJobs: ObjList[] = [
  {
    index: 1,
    company: "HiddensHills",
    companyEn: "HiddensHills",
    jobName: "Collaboration avec HiddensHills",
    jobNameEn: "Collaboration with HiddensHills",
    title3: "title3",
    description:
      "Lors d'une mission en freelance j'ai dû concevoir de nouvelles fonctionnalités pour le site E-commerce de HiddensHills, une société basée à Los Angeles, je me suis donc occupé de toute la partie front-end.",
    descriptionEng:
      "During a freelance mission I had to design new features for the E-commerce site of HiddensHills, a company based in Los Angeles, so I took care of the entire front-end part.",
    alt: "alt",
    imgCover: img4,
    imgArray: [
      "https://plus.unsplash.com/premium_photo-1675793715030-0584c8ec4a13?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      "https://plus.unsplash.com/premium_photo-1675793715030-0584c8ec4a13?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      "https://plus.unsplash.com/premium_photo-1675793715030-0584c8ec4a13?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    ],
    date: new Date(2022, 3, 24),
    path: "",
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
    imgCover: img3,
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
    imgCover: img5,
    imgArray: [
      "https://plus.unsplash.com/premium_photo-1675793715030-0584c8ec4a13?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      "https://plus.unsplash.com/premium_photo-1675793715030-0584c8ec4a13?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      "https://plus.unsplash.com/premium_photo-1675793715030-0584c8ec4a13?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    ],
    date: new Date(2022, 3, 24),
    path: "",
  },
];
