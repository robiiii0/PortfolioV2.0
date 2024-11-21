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
    <div className="w-full bg-black text-white font-montserrat">
      <div className="w-10/12 mx-auto pt-4">
        <NavLink colorScheme="black" />
      </div>
      <div className="pt-28 md:pt-40 px-4">
        <div className="w-full">
          <div className="space-y-6">
            <motion.h1
              initial={{ y: 50, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.5, delay: 0.4 }}
              className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-bold text-center leading-tight"
            >
              {job.jobName}
            </motion.h1>

            <div className="pt-16 flex flex-col md:flex-row space-y-8 md:space-y-0 md:space-x-8">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 items-center justify-items-center">
                <div className="w-full h-[20rem] md:h-[30rem] lg:h-[40rem] relative border rounded-xl shadow-lg p-6">
                  <Image
                    src={job.imgArray[0]}
                    alt={job.alt}
                    layout="fill"
                    objectFit="cover"
                    className="rounded-lg"
                  />
                </div>
                <motion.div
                  initial={{ y: 50, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  transition={{ duration: 0.5, delay: 0.6 }}
                  className="w-full h-[20rem] md:h-[30rem] lg:h-[40rem] flex items-center justify-center rounded-xl shadow-lg p-6"
                >
                  <p className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl text-center leading-relaxed">
                    {job.description}
                  </p>
                </motion.div>
              </div>
            </div>

            <div className="pt-16 flex flex-col md:flex-row space-y-8 md:space-y-0 md:space-x-8">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 items-center justify-items-center">
                <motion.div
                  initial={{ y: 50, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  transition={{ duration: 0.5, delay: 0.6 }}
                  className="w-full h-[20rem] md:h-[30rem] lg:h-[40rem] flex items-center justify-center rounded-xl shadow-lg p-6"
                >
                  <p className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl text-center leading-relaxed">
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

            {job.imgArray.length > 2 && (
              <div className="">
                {!iframeError ? (
                  <>
                    <div className="flex justify-center items-center justify-items-center space-x-4 mt-36">
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
                      <div className="flex justify-center items-center">
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
                      width="100%"
                      height="800"
                      allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
                      allowFullScreen
                      className="rounded-lg shadow-xl mt-12"
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
                  className="w-full h-[20rem] md:h-[30rem] lg:h-[40rem] flex items-center justify-center rounded-xl shadow-lg p-6"
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
