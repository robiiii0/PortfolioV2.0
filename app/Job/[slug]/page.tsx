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
    <div className="w-full bg-black text-white font-montserrat">
      <div className="mt-20 md:mt-100">
        <div className="w-full">
          <motion.div
            initial={{ y: 50, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="w-11/12 mx-auto mt-[5%]"
          >
            <div className="space-y-2">
              <motion.h1
                initial={{ y: 50, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.5, delay: 0.4 }}
                className="text-4xl md:text-8xl font-bold"
              >
                {job.jobName}
              </motion.h1>

              <motion.p
                initial={{ y: 50, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.5, delay: 0.6 }}
                className="text-lg md:text-xl mt-4"
              >
                {job.description}
              </motion.p>

              <div className="mt-6 space-y-4">
                {job.imgArray.map((image, index) => (
                  <div key={index} className="w-full h-[400px] relative">
                    <Image
                      src={image}
                      alt={job.alt}
                      layout="fill"
                      objectFit="cover"
                    />
                  </div>
                ))}
              </div>

              {job.path && (
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
              )}
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default JobDetailPage;
