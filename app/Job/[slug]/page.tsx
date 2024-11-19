"use client";

import { usePathname, useRouter } from "next/navigation";
import { ListJobs, ObjList } from "../JobList";
import Image from "next/image";
import { motion } from "framer-motion";
import React, { useEffect, useState } from "react";
import NavLink from "@/app/NavLink/NavLink";

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

            <motion.p
              initial={{ y: 50, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.5, delay: 0.6 }}
              className="text-lg md:text-xl pt-16 leading-relaxed"
            >
              {job.description}
            </motion.p>
            <div className="pt-16 flex space-x-8">
              {job.imgArray.slice(0, 2).map((image, index) => (
                <div
                  key={index}
                  className="w-1/2 h-[500px] relative border rounded-xl shadow-lg p-6"
                >
                  <Image
                    src={image}
                    alt={job.alt}
                    layout="fill"
                    objectFit="cover"
                    className="rounded-lg"
                  />
                </div>
              ))}
            </div>

            {job.imgArray.length > 2 && (
              <div className="mt-12">
                <iframe
                  src={job.imgArray[job.imgArray.length - 1]}
                  width="100%"
                  height="600"
                  allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                  className="rounded-lg shadow-xl"
                ></iframe>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default JobDetailPage;
