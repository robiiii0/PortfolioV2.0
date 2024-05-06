import React from "react";
import imgMe from "@/public/me.jpg"
import Image from "next/image";
import imgDCU from "@/public/DCU.jpg";

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
              <h1 className="text-8xl font-bold">ABOUT ME</h1>
              <h1 className="text-6xl ml-24 font-bold">WHO AM I</h1>
            </div>
            <div className="row-span-2 col-span-2 ">
              <div className="flex justify-center items-center  flex-col lg:flex-row ">
                <div className="lg:ml-24 text-sm  lg:text-lg">
                  <hr className="w-full h-1 mx-auto my-4 bg-gray-300 border-0 rounded lg:my-10 dark:bg-gray-700" />
                  <div className="flex">
                    <p className="font-monserrat">
                      {isFrench ? "Prénom : " : "First Name: "}
                      <span className="text-blue-400">Robin</span>
                    </p>
                  </div>

                  <div className="flex mt-2">
                    <p className="font-monserrat">
                      {isFrench ? "Surnom : " : "Nickname: "}
                      <span className="text-blue-400">Rob</span>
                    </p>
                  </div>

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
                        {isFrench ? "Étudiant à Epitech" : "Student at Epitech"}
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

                  <div className="flex">
                    <p className="font-monserrat">
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
                </div>
              </div>
            </div>
            <div className="row-span-3">
              <div className="flex justify-center pr-10 mt-12">
                <Image
                  src={imgMe}
                  alt="Me"
                  width={400}
                  height={780}
                  className="w-8/12 h-8/12 rounded-xl shadow-2xl cursor-pointer"
                  objectFit="cover"
                />
              </div>
            </div>
          </div>

          <div className="grid grid-cols-2">
            <Image
              src={imgDCU}
              alt="Me"
              width={1920}
              height={1080}
              className="w-full h-full rounded-xl mt-4 shadow-2xl cursor-pointer"
              objectFit="cover"
            />
            <div className="text-center">
              <h1 className="font-bold text-2xl">Current project in comming</h1>
              <div className="w-6/12 mx-auto mt-24">
                <p>
                  As an aspiring computer scientist, I am embarking on an
                  exciting academic journey for the academic year 2024/2025 to
                  further hone my skills in both computer science and English
                  language proficiency. My destination? The vibrant campus of
                  Dublin City University (DCU) in Ireland.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
