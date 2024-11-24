"use client";
import React from "react";
import Image from "next/image";
import imgDCU from "@/public/DCU.jpg";
import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";
import Footer from "../components/Footer";
import NavLink from "../NavLink/NavLink";

export default function page() {
  const isFrench = true;

  const [Translate, setTranslate] = React.useState(false);

  function calculateAge(birthDate: string) {
    const birthDateObj = new Date(birthDate);
    const today = new Date();
    let age = today.getFullYear() - birthDateObj.getFullYear();
    const m = today.getMonth() - birthDateObj.getMonth();
    if (m < 0 || (m === 0 && today.getDate() < birthDateObj.getDate())) {
      age--;
    }
    return age;
  }
  return (
    <>
      <div className="w-full font-montserrat bg-[#fff7ed]">
        <div className="w-10/12 mx-auto pt-4">
          <NavLink colorScheme="black" />
        </div>
        <div className="w-10/12 mx-auto mt-12 lg:mt-24">
          <div className="flex flex-col lg:flex-row justify-between items-starp-8">
            {/* Partie 1 - Titre et Infos personnelles */}
            <div className="w-full lg:w-1/2 space-y-6 mt-[25%] md:mt-[8%]">
              <div className="flex flex-col">
                <div>
                  <motion.div
                    initial={{ opacity: 0, y: 50 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 0.5 }}
                  >
                    <h1 className="text-6xl sm:text-6xl  text-center  md:text-left lg:text-8xl font-bold">
                      ABOUT ME
                    </h1>
                  </motion.div>

                  <motion.div
                    initial={{ opacity: 0, y: 50 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 0.6 }}
                  >
                    <h2 className="text-3xl md:mt-6 mt-6 sm:text-5xl lg:text-6xl  ml-0 md:ml-12 font-semibold  text-center  md:text-left">
                      QUI SUIS-JE ?
                    </h2>
                  </motion.div>
                </div>
                <motion.div
                  initial={{ opacity: 0, y: 50 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.7 }}
                  className="ml-12 mt-12"
                >
                  <div className="space-y-4 text-xl md:text-2xl">
                    <p>
                      {isFrench ? "Prénom : " : "First Name: "}
                      <span className="text-blue-700">Robin</span>
                    </p>
                    <p>
                      {isFrench ? "Âge : " : "Age: "}
                      <span className="text-blue-700">
                        {calculateAge("2003-02-09")}
                      </span>
                    </p>
                    <p>
                      {isFrench ? "Statut : " : "Status: "}
                      <span className="text-blue-700">
                        {isFrench ? "Étudiant à Epitech" : "Student at Epitech"}
                      </span>
                    </p>
                    <p>
                      {isFrench ? "Nationalité : " : "Nationality: "}
                      <span className="text-blue-700">
                        {isFrench ? "Français " : "French "} &#x1F1EB;&#x1F1F7;
                      </span>
                    </p>
                    <p>
                      {isFrench ? "Langues parlées : " : "Spoken Languages:"}
                    </p>
                    <ul className="ml-0 md:ml-4 space-y-1">
                      <li>
                        &#8594; {isFrench ? "Français :" : "French:"}{" "}
                        <span className="text-blue-700">
                          {isFrench ? "langue maternelle" : "native"}
                        </span>
                      </li>
                      <li>
                        &#8594; {isFrench ? "Anglais :" : "English:"}{" "}
                        <span className="mt-4 text-blue-700">
                          {isFrench
                            ? "Niveau professionnel complet"
                            : "Full professional capacity"}
                        </span>
                      </li>
                    </ul>
                    <p>
                      {isFrench ? "Loisirs:" : "Hobbies:"}{" "}
                      <span className="text-blue-700">
                        {isFrench
                          ? "natation, ski, programmation"
                          : "swimming, skiing, programming"}
                      </span>
                    </p>
                  </div>
                </motion.div>
              </div>
            </div>

            <div className="w-full lg:w-1/2 mt-[25%] md:mt-[8%] flex justify-center lg:justify-end ">
              <motion.div
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.8 }}
              >
                <Image
                  src="/me.jpg"
                  alt="Me"
                  width={600}
                  height={600}
                  priority
                  className="w-auto h-auto max-h-[600px] rounded-xl shadow-2xl cursor-pointer object-cover"
                />
              </motion.div>
            </div>
          </div>
        </div>

      <div className="w-11/12 mx-auto mt-24">
      <motion.h1
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.5 }}
          className="text-2xl md:text-4xl font-bold text-center md:text-center  text-[#1f2020] text-transparent bg-clip-text font-montserrat-thin p-4 rounded-lg"
        >
          Découvrir d'où je viens
        </motion.h1>
            <Image
        src="https://alpesphotographies.com/wp-content/uploads/2020/12/BRIANCON-ALPES-PHOTOGRAPHIES-WEB-4.jpg"
        alt="aboutme"
        width={1920}
        height={600}
        className="rounded-xl mt-12 mx-auto w-full max-w-[80%] bg-center h-auto max-h-[40vh] object-cover"
      />
      </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 mt-24 w-11/12 mx-auto">
          <div className="text-center">
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.5 }}
            >
              <h1 className="font-bold text-4xl font-montserrat-thin">Je suis étudiant à Epitech</h1>
            </motion.div>
            <motion.hr
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.5 }}
              className="w-10/12 mx-auto mt-8 border-2 border-gray-900"
            ></motion.hr>
            <div className="w-10/12 sm:w-6/12 mx-auto sm:text-lg md:text-xl mt-12">
              <motion.div
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.5 }}
              >
                <p className="font-montserrat-thin">
                  Je suis étudiant à Epitech Lyon depuis 4 ans, où j'ai eu
                  l'opportunité d'apprendre et de développer des compétences
                  dans divers domaines tels que les algorithmes, le
                  développement web, les réseaux, l'intelligence artificielle,
                  la résolution de problèmes et le travail d'équipe.
                </p>
              </motion.div>
            </div>
          </div>

          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.5 }}
          >
            <Link
              href="https://www.epitech.eu/ecole-informatique-lyon/"
              className="w-full h-full rounded-xl  shadow-2xl cursor-pointer"
            >
              <Image
                src={
                  "https://upload.wikimedia.org/wikipedia/commons/thumb/2/2d/Epitech.png/1598px-Epitech.png"
                }
                alt="school"
                width={1920}
                height={1080}
                className="rounded-xl mt-8"
                objectFit="cover"
              />
            </Link>
          </motion.div>
        </div>

        <div className="w-11/12 mx-auto h-auto p-12 rounded-2xl mt-24 bg-[#1f2020] text-[#fff7ed]">
          <div className="w-11/12 mx-auto">
            <div className="grid grid-cols-1 sm:grid-cols-2 ">
              <motion.div
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.5 }}
                className="flex justify-center"
              >
                <Link
                  href="https://www.dcu.ie/"
                  className="w-full h-full rounded-xl shadow-2xl cursor-pointer"
                >
                  <Image
                    src={imgDCU}
                    alt="DCU"
                    width={1920}
                    height={1080}
                    className="rounded-xl"
                    objectFit="cover"
                  />
                </Link>
              </motion.div>

              <div className="text-center flex flex-col items-center justify-center">
                <motion.div
                  initial={{ opacity: 0, y: 50 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.5 }}
                >
                  <h1 className="font-bold text-4xl font-montserrat-thin">
                    {Translate
                      ? "Projet actuel: DCU Irlande"
                      : "Current Project: DCU Ireland"}
                  </h1>
                </motion.div>
                <div className="w-full sm:w-8/12 lg:w-6/12 mx-auto mt-8">
                  <motion.div
                    initial={{ opacity: 0, y: 50 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 0.5 }}
                  >
                    {Translate ? (
                      <p className="text-base sm:text-lg md:text-xl font-montserrat-thin">
                        En tant qu'étudiant en informatique, je suis
                        actuellement à Dublin, embarquant pour un voyage
                        académique passionnant pour l'année académique 2024/2025
                        afin de perfectionner davantage mes compétences en
                        informatique et ma maîtrise de la langue anglaise. Ma
                        destination ? Le campus dynamique de Dublin City
                        University (DCU) en Irlande.
                      </p>
                    ) : (
                      <p className="text-base sm:text-lg md:text-xl font-montserrat-thin">
                        As an aspiring computer scientist, I am currently in
                        Dublin, embarking on an exciting academic journey for
                        the 2024/2025 academic year to further hone my skills in
                        both computer science and English language proficiency.
                        My destination? The vibrant campus of Dublin City
                        University (DCU) in Ireland.
                      </p>
                    )}
                    <div className="flex justify-center mt-4">
                      <button
                        onClick={() => setTranslate(!Translate)}
                        className="hover:bg-blue-500 hover:scale-105 transition-transform duration-300 bg-blue-400 text-[#fff7ed] px-4 py-2 rounded-lg"
                      >
                        Traduction ?
                      </button>
                    </div>
                    {Translate && (
                      <p className="text-xs text-gray-400 ml-2 mt-4">
                        Pas de soucis je comprends &#58;&#41;
                      </p>
                    )}
                  </motion.div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <Footer color="white" />
      </div>
    </>
  );
}
