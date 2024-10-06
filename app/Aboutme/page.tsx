"use client";
import React from "react";
import imgMe from "@/public/me.jpg";
import Image from "next/image";
import imgDCU from "@/public/DCU.jpg";
import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";

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
        <div className="w-11/12 mx-auto mt-24">
          <div className="grid grid-rows-3 grid-flow-col gap-4">
            <div className="col-span-2 space-y-2 pl-10">
              <motion.div
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.5 }}
              >
                <h1 className="text-8xl font-bold">ABOUT ME</h1>
              </motion.div>
              <motion.div
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.6 }}
              >
                <h1 className="text-6xl ml-24 font-bold">WHO AM I</h1>
              </motion.div>
            </div>
            <div className="row-span-2 col-span-2 ">
              <div className="flex justify-center items-center  flex-col lg:flex-row ">
                <div className="lg:ml-24 text-sm  lg:text-lg">
                  <motion.div
                    initial={{ opacity: 0, y: 50 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 0.7 }}
                  >
                    <hr className="w-full h-1 mx-auto my-4 bg-gray-300 border-0 rounded lg:my-10 dark:bg-gray-700" />
                  </motion.div>
                  <motion.div
                    initial={{ opacity: 0, y: 50 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 0.8 }}
                  >
                    <div className="flex">
                      <p className="font-monserrat">
                        {isFrench ? "Prénom : " : "First Name: "}
                        <span className="text-blue-400">Robin</span>
                      </p>
                    </div>

                    {/* <div className="flex mt-2">
                      <p className="font-monserrat">
                        {isFrench ? "Surnom : " : "Nickname: "}
                        <span className="text-blue-400">Rob</span>
                      </p>
                    </div> */}

                    <div className="flex mt-2">
                      <p className="font-monserrat">
                        {isFrench ? "Âge : " : "Age: "}
                        <span className="text-blue-400">
                          {calculateAge("2003-02-09")}
                        </span>
                      </p>
                    </div>

                    <div className="flex mt-2">
                      <p className="font-monserrat">
                        {isFrench ? "Statut : " : "Status: "}
                        <span className="text-blue-400">
                          {isFrench
                            ? "Étudiant à Epitech"
                            : "Student at Epitech"}
                        </span>
                      </p>
                    </div>

                    <div className="flex mt-2">
                      <p className="font-monserrat">
                        {isFrench ? "Nationalité : " : "Nationality: "}
                        <span className="text-blue-400">
                          {isFrench ? "Français 🇫🇷" : "French 🇫🇷"}
                        </span>
                      </p>
                    </div>

                    <div className="flex mt-2">
                      <p className="font-monserrat">
                        {isFrench ? "Langues parlées : " : "Spoken Languages: "}
                      </p>
                    </div>

                    <div className="flex mt-2">
                      <p className="font-monserrat ">
                        &nbsp;&nbsp;&nbsp;&nbsp;
                        {isFrench ? "Français :" : "French: "}
                        &nbsp;
                      </p>
                      <p className="text-blue-400 font-monserrat">
                        {isFrench ? "langue maternelle" : "native"}
                      </p>
                    </div>

                    <div className="flex">
                      <p className="font-monserrat">
                        &nbsp;&nbsp;&nbsp;&nbsp;
                        {isFrench ? "Anglais: " : "English:"}
                        &nbsp;
                      </p>
                      <p className="text-blue-400 font-monserrat">
                        {isFrench
                          ? "Niveau professionnel complet"
                          : "Full professional capacity"}
                      </p>
                    </div>

                    <div className="flex mt-2">
                      <p className="font-monserrat">
                        {isFrench ? "Loisirs:" : "Hobbies:"}&nbsp;
                      </p>
                      <p className="text-blue-400 font-monserrat">
                        {isFrench
                          ? "natation, ski, programmation"
                          : "swimming, skiing, programming"}
                      </p>
                    </div>

                    <hr className="w-full h-1 mx-auto my-4 bg-gray-300 border-0 rounded lg:my-10 dark:bg-gray-700" />
                  </motion.div>
                </div>
              </div>
            </div>
            <div className="row-span-3">
              <div className="flex justify-center pr-10 mt-12">
                <motion.div
                  initial={{ opacity: 0, y: 50 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.5 }}
                >
                  <Image
                    src={imgMe}
                    alt="Me"
                    width={600}
                    height={780}
                    className="w-8/12 h-8/12 rounded-xl shadow-2xl cursor-pointer"
                    objectFit="cover"
                  />
                </motion.div>
              </div>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-2 mt-24 w-11/12 mx-auto">
          <div className="text-center">
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.5 }}
            >
              <h1 className="font-bold text-4xl">I'm studduing at Epitech</h1>
            </motion.div>
            <div className="w-6/12 mx-auto mt-24">
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

        <div className="w-screen h-[30rem] rounded-2xl mt-24 bg-gray-900 text-white pb-24">
          <div className="w-11/12 mx-auto">
            <div className="grid grid-cols-2  items-center">
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
                    alt="Me"
                    width={1920}
                    height={1080}
                    className="rounded-xl "
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
                <div className="w-6/12 mx-auto mt-8">
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
        <div className="mt-80 md:mt-100">
          <div className="w-full">
            <motion.div
              initial={{ y: 50, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="w-11/12 mx-auto mt-[5%] font-montserrat"
            >
              <div className="space-y-2">
                <motion.h1
                  initial={{ y: 50, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  transition={{ duration: 0.5, delay: 0.4 }}
                  className="text-4xl md:text-8xl font-bold"
                >
                  Robin Chabert
                </motion.h1>
                <motion.h1
                  initial={{ y: 50, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  transition={{ duration: 0.5, delay: 0.6 }}
                  className="text-3xl md:text-8xl ml-6 md:ml-12"
                >
                  Web and software developer
                </motion.h1>
              </div>
            </motion.div>
          </div>
          <div className="w-11/12 mx-auto font-semibold text-md md:text-xl">
            <div className="flex flex-col md:flex-row justify-between space-x-0 md:space-x-8 mb-12 mt-8">
              <div className="flex justify-between space-x-4 md:space-x-8">
                <Link href={"https://www.instagram.com/robin_chabb/"}>
                  Instagram
                </Link>
                <Link
                  href={"https://www.linkedin.com/in/robin-chabert-863105232/"}
                >
                  LinkedIn
                </Link>
                <Link href={"https://github.com/robiiii0"}>Github</Link>
              </div>
              <div>© Robin Chabert</div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
