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
      "/Eloken/devbeta.png",
      "/Eloken/devalpha.png",
      "https://eloken.com/portfolio",
    ],
    date: new Date(2022, 3, 24),
    path: "https://eloken.com",
    aboutThem: "Eloken is a company that specializes in creating high-quality websites. They offer a range of web development services to help businesses establish a strong online presence.",
    imglogo: "https://eloken.com/_next/image?url=%2F_next%2Fstatic%2Fmedia%2FLogo.9cbeff77.png&w=1200&q=75",
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
    aboutThem: "Iroc is a company that focuses on development around researchers. They provide tools and services to support and enhance the work of researchers.",
    imglogo: "https://www.iroc.app/images/Logo_IROC.png",
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
          aboutThem: "Enedis is a major electricity distribution network operator in France. They manage the public electricity distribution network, ensuring the delivery of electricity to homes and businesses.",
    imglogo: "https://upload.wikimedia.org/wikipedia/fr/thumb/7/77/Logo_enedis_header.png/1200px-Logo_enedis_header.png",
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
    aboutThem: "Hidden Hills Club is a premium lifestyle brand that offers exclusive memberships and experiences. They focus on providing high-quality services and products to their members.",
  imglogo:"https://hiddenhillsclub.com/cdn/shop/files/MAIN_HIDDEN_HILLS_GRN_1d93f736-b25e-42f9-a074-8bba4446ba73.png?v=1667236646&width=3533"
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
    aboutThem: "GK is an application that allows you to meet people who play video games to find new teammates.",
  imglogo:"https://play-lh.googleusercontent.com/UTuSbIOiVLxl0kknNi23fVDC_AaUKewkeJw_jTfPz-aNsmoHKRGGPz-vlNpBvHN7YFs"
  },
];
