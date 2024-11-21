"use client";

import { usePathname, useRouter } from "next/navigation";
import { ListJobs, ObjList } from "../JobList";
import Image from "next/image";
import { motion } from "framer-motion";
import React, { useEffect, useState } from "react";
import NavLink from "@/app/NavLink/NavLink";
import Footer from "@/app/components/Footer";

const JobDetailPage = () => {
  const pathname = usePathname();
  console.log(pathname);
  const slug = pathname?.split("/").pop();
  console.log(slug);

  const [job, setJob] = useState<ObjList | null>(null);

  useEffect(() => {
    if (slug) {
      const foundJob = ListJobs.find((job: ObjList) => job.company === slug);
      setJob(foundJob || null);
    }
  }, [slug]);

  if (!slug) {
    return <div>Loading...</div>;
  }
  console.log(job);

  if (!job) {
    return (
      <div>
        <h1>Job not found</h1>
      </div>
    );
  }

  return (
    <div className="w-full  bg-black text-white font-montserrat">
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
              className="text-5xl md:text-9xl font-bold text-center leading-tight"
            >
              {job.jobName}
            </motion.h1>

            <div className="pt-16 flex space-x-8">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 items-center justify-items-center">
                <div className="w-full h-[500px] relative border rounded-xl shadow-lg p-6">
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
                  className="w-full h-[500px] flex items-center justify-center rounded-xl shadow-lg p-6"
                >
                  <p className="text-4xl md:text-5xl text-center leading-relaxed">
                    {job.description}
                  </p>
                </motion.div>
              </div>
            </div>


            <div className="pt-16 flex space-x-8">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 items-center justify-items-center">

                <motion.div
                  initial={{ y: 50, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  transition={{ duration: 0.5, delay: 0.6 }}
                  className="w-full h-[500px] flex items-center justify-center rounded-xl shadow-lg p-6"
                >
                  <p className="text-4xl md:text-5xl text-center leading-relaxed">
                    {job.aboutThem}
                  </p>
                </motion.div>
                <div className="w-full h-[500px] relative border rounded-xl shadow-lg p-6">
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
                <iframe
                  src={job.imgArray[job.imgArray.length - 1]}
                  width="100%"
                  height="600"
                  allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                  className="rounded-lg shadow-xl mt-28"
                ></iframe>
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
            className="w-full h-[500px] flex items-center justify-center rounded-xl shadow-lg p-6 "
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
      <Footer color="black"/>
    </div>
  );
};

export default JobDetailPage;
