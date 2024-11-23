"use client";

import { usePathname } from "next/navigation";
import { ListJobs, ObjList } from "../JobList";
import Image from "next/image";
import { motion } from "framer-motion";
import React, { useEffect, useState } from "react";
import NavLink from "@/app/NavLink/NavLink";
import Footer from "@/app/components/Footer";
import Link from "next/link";

const JobDetailPage = () => {
  const pathname = usePathname();
  const slug = pathname?.split("/").pop();

  const [job, setJob] = useState<ObjList | null>(null);
  const [iframeError, setIframeError] = useState(false);

  useEffect(() => {
    if (slug) {
      const foundJob = ListJobs.find((job: ObjList) => job.company === slug);
      setJob(foundJob || null);
    }
  }, [slug]);

  const handleIframeError = () => {
    setIframeError(true);
  };

  if (!slug) {
    return <div>Loading...</div>;
  }

  if (!job) {
    return (
      <div>
        <h1>Job not found</h1>
      </div>
    );
  }

  return (
    <div className="w-full bg-[#1f2020] text-white font-montserrat">
      <div className="w-10/12 mx-auto pt-4">
        <NavLink colorScheme="black" />
      </div>
      <div className="pt-28 md:pt-40 px-4">
        <div className="w-full">
          <div className="space-y-6">
            <div className="w-11/12 mx-auto">
              <div className="flex flex-col md:flex-row justify-between">
                <motion.h1
                  initial={{ y: 50, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  transition={{ duration: 1, delay: 0.4 }}
                  className="text-8xl sm:text-8xl md:text-6xl lg:text-7xl xl:text-9xl font-bold leading-tight"
                >
                  {job.company}
                </motion.h1>
                <motion.h1
                  initial={{ y: 50, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  transition={{ duration: 1, delay: 0.4 }}
                  className="text-6xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-9xl font-bold leading-tight"
                >
                  &#40;{job.date.getFullYear()}&#41;
                </motion.h1>
              </div>
            </div>
            <div className="w-11/12 mx-auto">
              <div className="flex flex-col md:flex-row justify-between justify-items-center items-center pt-16 md:pt-48">
                <motion.h2
                  initial={{ y: 50, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  transition={{ duration: 0.5, delay: 0.4 }}
                  className="mt-8 text-2xl sm:text-lg md:text-xl lg:text-2xl xl:text-4xl font-bold text-left md:w-4/12 leading-tight"
                >
                  {job.jobName}
                </motion.h2>
                <motion.h2
                  initial={{ y: 50, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  transition={{ duration: 0.5, delay: 0.4 }}
                  className="md:mt-8 mt-12 text-xl flex sm:text-lg md:text-xl lg:text-2xl xl:text-3xl font-bold text-center leading-tight"
                >
                  discover
                  <motion.svg
                    className="w-10 h-10 sm:w-16 sm:h-16 md:w-20 md:h-20 text-white animate-bounce"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M19 9l-7 7-7-7"
                    />
                  </motion.svg>
                </motion.h2>
              </div>
            </div>

            <div className="pt-16 md:pt-48 flex flex-col md:flex-row space-y-8 md:space-y-0 md:space-x-8">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 items-center justify-items-center">
                <motion.div
                  initial={{ y: 50, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  transition={{ duration: 0.5, delay: 0.6 }}
                  className="w-full h-[20rem] md:h-[30rem] lg:h-[40rem] relative border rounded-xl shadow-lg p-6"
                >
                  <Image
                    src={job.imgArray[0]}
                    alt={job.alt}
                    layout="fill"
                    objectFit="cover"
                    className="rounded-lg"
                  />
                </motion.div>
                <motion.div
                  initial={{ y: 50, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  transition={{ duration: 0.5, delay: 0.6 }}
                  className="w-full h-[20rem] md:h-[30rem]  pt-16 lg:h-[40rem] flex items-center justify-center rounded-xl shadow-lg p-6"
                >
                  <p className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl text-center leading-relaxed font-montserrat-thin">
                    {job.description}
                  </p>
                </motion.div>
              </div>
            </div>
            <div className="pt-16">
              <motion.hr
                initial={{ x: -100, opacity: 0 }}
                animate={{ x: 0, opacity: 1 }}
                transition={{ duration: 0.5, delay: 0.6 }}
                className="border-gray-500 w-11/12 mx-auto"
              />
            </div>
            <div className="pt-16 flex flex-col md:flex-row space-y-8 md:space-y-0 md:space-x-8">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 items-center justify-items-center">
                <motion.div
                  initial={{ y: 50, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  transition={{ duration: 0.5, delay: 0.6 }}
                  className="w-full h-[20rem] md:h-[30rem] lg:h-[40rem] flex items-center justify-center rounded-xl shadow-lg p-6"
                >
                  <p className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl text-center leading-relaxed font-montserrat-thin">
                    {job.aboutThem}
                  </p>
                </motion.div>
                <div className="w-full h-[20rem] md:h-[30rem] lg:h-[40rem] relative border rounded-xl shadow-lg p-6">
                  <Image
                    src={job.imgArray[1]}
                    alt={job.alt}
                    layout="fill"
                    objectFit="cover"
                    className="rounded-lg"
                  />
                </div>
              </div>
            </div>

            <div className="pt-16">
              <motion.hr
                initial={{ x: -100, opacity: 0 }}
                animate={{ x: 0, opacity: 1 }}
                transition={{ duration: 0.5, delay: 0.6 }}
                className="border-gray-500 w-11/12 mx-auto"
              />
            </div>

            {job.imgArray.length > 2 && (
              <div className="">
                {!iframeError ? (
                  <>
                    <div className="flex justify-center items-center justify-items-center space-x-4 mt-28">
                      <svg
                        className="w-10 h-10 sm:w-16 sm:h-16 md:w-20 md:h-20 text-white animate-bounce"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth="2"
                          d="M19 9l-7 7-7-7"
                        />
                      </svg>
                      <p className="text-center text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold">
                        Plongez dans leur univers
                      </p>
                      <svg
                        className="w-10 h-10 sm:w-16 sm:h-16 md:w-20 md:h-20 text-white animate-bounce"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth="2"
                          d="M19 9l-7 7-7-7"
                        />
                      </svg>
                    </div>
                    <Link
                      href={job.link}
                      className=""
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <div className="flex justify-center items-center mt-4">
                        <motion.button
                          whileHover={{
                            background:
                              "linear-gradient(to top, #020617 100%, transparent 100%)",
                            color: "#FFFF",
                          }}
                          whileTap={{ scale: 0.9 }}
                          className="rounded-2xl bg-transparent text-gray-700 font-semibold py-2 px-4 text-xl sm:text-2xl md:text-3xl border border-white w-full sm:w-3/4 md:w-1/2 lg:w-1/3 mx-auto transition-all duration-300"
                        >
                          Partir à la découverte de {job.company}
                        </motion.button>
                      </div>
                    </Link>
                    <iframe
                      src={job.imgArray[job.imgArray.length - 1]}
                      width="80%"
                      allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
                      allowFullScreen
                      className="rounded-lg mx-auto shadow-xl mt-12 h-[400px] md:h-[800px]"
                      onError={handleIframeError}
                    ></iframe>
                  </>
                ) : (
                  <div
                    className="cursor-pointer"
                    onClick={() =>
                      window.open(
                        job.imgArray[job.imgArray.length - 1],
                        "_blank"
                      )
                    }
                  >
                    <Image
                      src={job.imgArray[1]}
                      alt="Site preview"
                      width={800}
                      height={600}
                      className="rounded-lg shadow-xl"
                    />
                    <p className="text-center text-gray-500 mt-4">
                      Cliquez ici pour visiter le site
                    </p>
                  </div>
                )}
              </div>
            )}

            <div className="mt-28">
              <motion.div
                initial={{ y: 50, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.5, delay: 0.6 }}
                className="text-4xl md:text-5xl text-center leading-relaxed"
              >
                <motion.div
                  initial={{ y: 50, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  transition={{ duration: 0.5, delay: 0.6 }}
                  className="w-full h-[20rem] md:h-[30rem] lg:h-[40rem] flex items-center justify-center rounded-xl  p-6"
                >
                  <Image
                    width={250}
                    height={100}
                    alt="Logo"
                    src={job.imglogo}
                    className="object-contain bg-white p-4 rounded-xl"
                  />
                </motion.div>
              </motion.div>
            </div>
          </div>
        </div>
      </div>
      <Footer color="black" />
    </div>
  );
};

export default JobDetailPage;
