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
      <div className="w-full font-montserrat">
        <div className="w-10/12 mx-auto mt-4">
          <NavLink colorScheme="black" />
        </div>
        <div className="w-10/12 mx-auto mt-12 lg:mt-24">
          <div className="flex flex-col lg:flex-row justify-between items-starp-8 ">
            {/* Partie 1 - Titre et Infos personnelles */}
            <div className="w-full lg:w-1/2 space-y-6">
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
                      WHO AM I
                    </h2>
                  </motion.div>
                </div>
                <motion.div
                  initial={{ opacity: 0, y: 50 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.7 }}
                  className="ml-12 mt-12"
                >
                  <div className="space-y-4 text-lg">
                    <p>
                      {isFrench ? "Prénom : " : "First Name: "}
                      <span className="text-blue-400">Robin</span>
                    </p>
                    <p>
                      {isFrench ? "Âge : " : "Age: "}
                      <span className="text-blue-400">
                        {calculateAge("2003-02-09")}
                      </span>
                    </p>
                    <p>
                      {isFrench ? "Statut : " : "Status: "}
                      <span className="text-blue-400">
                        {isFrench ? "Étudiant à Epitech" : "Student at Epitech"}
                      </span>
                    </p>
                    <p>
                      {isFrench ? "Nationalité : " : "Nationality: "}
                      <span className="text-blue-400">
                        {isFrench ? "Français 🇫🇷" : "French 🇫🇷"}
                      </span>
                    </p>
                    <p>
                      {isFrench ? "Langues parlées : " : "Spoken Languages:"}
                    </p>
                    <ul className="ml-4 space-y-1">
                      <li>
                        {isFrench ? "Français :" : "French:"}{" "}
                        <span className="text-blue-400">
                          {isFrench ? "langue maternelle" : "native"}
                        </span>
                      </li>
                      <li>
                        {isFrench ? "Anglais :" : "English:"}{" "}
                        <span className="text-blue-400">
                          {isFrench
                            ? "Niveau professionnel complet"
                            : "Full professional capacity"}
                        </span>
                      </li>
                    </ul>
                    <p>
                      {isFrench ? "Loisirs:" : "Hobbies:"}{" "}
                      <span className="text-blue-400">
                        {isFrench
                          ? "natation, ski, programmation"
                          : "swimming, skiing, programming"}
                      </span>
                    </p>
                  </div>
                </motion.div>
              </div>
            </div>

            {/* Partie 2 - Image */}
            <div className="w-full lg:w-1/2 mt-8 lg:mt-0 flex justify-center lg:justify-end">
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

        <div className="grid grid-cols-1 sm:grid-cols-2 mt-24 w-11/12 mx-auto">
          <div className="text-center">
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.5 }}
            >
              <h1 className="font-bold text-4xl">I'm studying at Epitech</h1>
            </motion.div>
            <div className="w-10/12 sm:w-6/12 mx-auto mt-24">
              <motion.div
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.5 }}
              >
                <p>
                  I have now been a student at Epitech Lyon for 4 years, where I
                  have had the opportunity to learn and develop skills in
                  various fields such as algorithms, web development,
                  networking, artificial intelligence, problem-solving, and
                  teamwork.
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
              className="w-full h-full rounded-xl mt-4 shadow-2xl cursor-pointer"
            >
              <Image
                src={
                  "https://upload.wikimedia.org/wikipedia/commons/thumb/2/2d/Epitech.png/1598px-Epitech.png"
                }
                alt="school"
                width={1920}
                height={1080}
                className="rounded-xl"
                objectFit="cover"
              />
            </Link>
          </motion.div>
        </div>

        <div className="w-screen h-[30rem] sm:h-[40rem] lg:h-[30rem] rounded-2xl mt-24 bg-gray-900 text-white pb-24">
          <div className="w-11/12 mx-auto">
            <div className="grid grid-cols-1 sm:grid-cols-2 items-center">
              <motion.div
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.5 }}
                className="flex justify-center"
              >
                <Link
                  href="https://www.dcu.ie/"
                  className="w-full h-full mt-12 rounded-xl shadow-2xl cursor-pointer"
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
                  <h1 className="font-bold text-4xl">Current project: DCU</h1>
                </motion.div>
                <div className="w-10/12 sm:w-6/12 mx-auto mt-8">
                  <motion.div
                    initial={{ opacity: 0, y: 50 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 0.5 }}
                  >
                    <p>
                      As an aspiring computer scientist, I am currently in
                      Dublin, embarking on an exciting academic journey for the
                      2024/2025 academic year to further hone my skills in both
                      computer science and English language proficiency. My
                      destination? The vibrant campus of Dublin City University
                      (DCU) in Ireland.
                    </p>
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
