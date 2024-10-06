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
      "Realization of Responsive Components for Eloken's Website and Products",
    jobNameEn:
      "Realization of Responsive Components for Eloken's Website and Products",
    title3: "title3",
    description:
      "In the context of Eloken, the web development project involved the realization of responsive components for both their website and the products featured on their online platform. By applying their expertise in front-end development.",
    descriptionEng:
      "In the context of Eloken, the web development project involved the realization of responsive components for both their website and the products featured on their online platform. By applying their expertise in front-end development.",
    alt: "alt",
    imgCover: img1,
    imgArray: [
      "https://plus.unsplash.com/premium_photo-1675793715030-0584c8ec4a13?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      "https://plus.unsplash.com/premium_photo-1675793715030-0584c8ec4a13?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      "https://plus.unsplash.com/premium_photo-1675793715030-0584c8ec4a13?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    ],
    date: new Date(2022, 3, 24),
    path: "https://eloken.com",
  },
  {
    index: 2,
    company: "Iroc",
    companyEn: "Iroc",
    jobName: "Full-Stack Development at IROC",
    jobNameEn: "Full-Stack Development at IROC",
    title3: "title3",
    description:
      "During 1 month, I carried out a freelance mission at IROC, where I was responsible for developing new front-end and back-end features as well as maintaining the back-end and the application database.",
    descriptionEng:
      "During 1 month, I carried out a freelance mission at IROC, where I was responsible for developing new front-end and back-end features as well as maintaining the back-end and the application database.",
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
    jobName: "Management of the Enedis Works Database on Lyon Métropole",
    jobNameEn: "Management of the Enedis Works Database on Lyon Métropole",
    title3: "title3",
    description:
      "As part of a 4-month internship at Enedis, I was responsible for managing the Enedis works database on Lyon Métropole, using database management and programming tools.",
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
  {
    index: 4,
    company: "HiddensHills",
    companyEn: "HiddensHills",
    jobName: "Collaboration with HiddensHills",
    jobNameEn: "Collaboration with HiddensHills",
    title3: "title3",
    description:
      "During a freelance mission, I had to design new features for the E-commerce site of HiddensHills, a company based in Los Angeles, where I handled the entire front-end development.",
    descriptionEng:
      "During a freelance mission, I had to design new features for the E-commerce site of HiddensHills, a company based in Los Angeles, where I handled the entire front-end development.",
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
    index: 5,
    company: "GK",
    companyEn: "GK",
    jobName: "Development of a Mobile Application at GK",
    jobNameEn: "Development of a Mobile Application at GK",
    title3: "title3",
    description:
      "During a 4-month period, I completed an internship at GK, where I was tasked with developing a mobile application. Unfortunately, due to its current development stage, I am unable to showcase any images of the application.",
    descriptionEng:
      "During a 4-month period, I completed an internship at GK, where I was tasked with developing a mobile application. Unfortunately, due to its current development stage, I am unable to showcase any images of the application.",
    alt: "alt",
    imgCover: img2,
    imgArray: [
      "https://plus.unsplash.com/premium_photo-1675793715030-0584c8ec4a13?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      "https://plus.unsplash.com/premium_photo-1675793715030-0584c8ec4a13?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      "https://plus.unsplash.com/premium_photo-1675793715030-0584c8ec4a13?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    ],
    date: new Date(2022, 3, 24),
    path: "",
  },
];
