"use client";

import { usePathname, useRouter } from "next/navigation";
import { ListJobs, ObjList } from "../JobList";
import Image from "next/image";
import { motion } from "framer-motion";
import React, { useEffect, useState } from "react";

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
    <div className="w-full absolute top-0 bg-black text-white font-montserrat">
      <div className="mt-28 md:mt-40 px-4">
        <div className="w-full">
          <motion.div
            initial={{ y: 50, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="w-11/12 mx-auto mt-12"
          >
            <div className="space-y-6">
              {/* Job Title */}
              <motion.h1
                initial={{ y: 50, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.5, delay: 0.4 }}
                className="text-5xl md:text-9xl font-bold leading-tight"
              >
                {job.jobName}
              </motion.h1>

              {/* Job Description */}
              <motion.p
                initial={{ y: 50, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.5, delay: 0.6 }}
                className="text-lg md:text-xl mt-4 leading-relaxed"
              >
                {job.description}
              </motion.p>

              {/* Display first two images side by side */}
              <div className="mt-8 flex space-x-8">
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

              {/* Display last image in an iframe */}
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

              {/* Link to the company website (Commented out for now) */}
              {/* {job.path && (
                <div className="mt-8">
                  <a
                    href={job.path}
                    className="text-blue-500 hover:text-blue-700"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Visit {job.companyEn}'s Website
                  </a>
                </div>
              )} */}
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default JobDetailPage;
