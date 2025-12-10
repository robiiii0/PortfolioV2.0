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

  if (!job) {
    return (
      <div>
        <h1>Job not found</h1>
      </div>
    );
  }

  return (
    <div className="w-full bg-[#1f2020] text-[#fff7ed] font-montserrat">
      <div className="w-10/12 mx-auto pt-4">
        <NavLink colorScheme="black" />
      </div>
      
      {/* Hero Section */}
      <section className="pt-20 md:pt-32 px-4">
        <div className="w-11/12 mx-auto">
          <div className="flex flex-col md:flex-row justify-between items-start mb-8">
            <motion.h1
              initial={{ y: 50, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="text-6xl sm:text-7xl md:text-8xl lg:text-9xl font-bold leading-tight"
            >
              {job.company}
            </motion.h1>
            <motion.div
              initial={{ y: 50, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.3 }}
              className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold mt-4 md:mt-0"
            >
              ({job.date.getFullYear()})
            </motion.div>
          </div>
          
          <motion.h2
            initial={{ y: 50, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-semibold mb-12 md:mb-16 leading-tight"
          >
            {job.jobName}
          </motion.h2>
        </div>
      </section>

      {/* Description Section */}
      <section id="description" className="py-16 md:py-24 px-4 relative">
        <div className="absolute inset-0 bg-gradient-to-b from-[#1f2020] via-[#1f2020] to-[#2a2b2b] pointer-events-none"></div>
        <div className="w-11/12 mx-auto relative z-10">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12 items-center">
            <motion.div
              initial={{ y: 50, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="w-full h-[20rem] md:h-[28rem] lg:h-[32rem] relative rounded-xl overflow-hidden"
            >
              <Image
                src={job.imgArray[0]}
                alt={job.alt}
                fill
                style={{ objectFit: "cover" }}
                className="rounded-xl"
              />
            </motion.div>
            <motion.div
              initial={{ y: 50, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.3 }}
              className="flex items-center justify-center"
            >
              <p className="text-xl sm:text-2xl md:text-3xl lg:text-4xl leading-relaxed font-montserrat-thin">
                {job.description}
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* About Them Section */}
      <section className="py-16 md:py-24 px-4 relative">
        <div className="absolute inset-0 bg-gradient-to-b from-[#2a2b2b] via-[#2a2b2b] to-[#1f2020] pointer-events-none"></div>
        <div className="w-11/12 mx-auto relative z-10">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12 items-center">
            <motion.div
              initial={{ y: 50, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="flex items-center justify-center order-2 md:order-1"
            >
              <p className="text-xl sm:text-2xl md:text-3xl lg:text-4xl leading-relaxed font-montserrat-thin">
                {job.aboutThem}
              </p>
            </motion.div>
            <motion.div
              initial={{ y: 50, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.3 }}
              className="w-full h-[20rem] md:h-[28rem] lg:h-[32rem] relative rounded-xl overflow-hidden order-1 md:order-2"
            >
              <Image
                src={job.imgArray[1]}
                alt={job.alt}
                fill
                style={{ objectFit: "cover" }}
                className="rounded-xl"
              />
            </motion.div>
          </div>
        </div>
      </section>

      {/* Preview Section */}
      {job.imgArray.length > 2 && job.link && (
        <section id="preview" className="py-16 md:py-24 px-4 relative">
          <div className="absolute inset-0 bg-gradient-to-b from-[#1f2020] via-[#1f2020] to-[#1f2020] pointer-events-none"></div>
          <div className="w-11/12 mx-auto relative z-10">
            <motion.div
              initial={{ y: 50, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="text-center mb-12"
            >
              <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-8">
                Plongez dans leur univers
              </h2>
              <Link
                href={job.link}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block"
              >
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="rounded-2xl bg-transparent text-[#fff7ed] font-semibold py-3 px-8 text-lg sm:text-xl md:text-2xl border-2 border-[#fff7ed] transition-all duration-300 hover:bg-[#fff7ed] hover:text-[#1f2020]"
                >
                  Partir à la découverte de {job.company}
                </motion.button>
              </Link>
            </motion.div>
            
            <Link
              href={job.link}
              target="_blank"
              rel="noopener noreferrer"
              className="block"
            >
              <motion.div
                initial={{ y: 50, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.8, delay: 0.3 }}
                className="relative w-full mx-auto h-[300px] md:h-[500px] lg:h-[600px] rounded-xl overflow-hidden group cursor-pointer"
              >
                <Image
                  src={job.imgArray[2]}
                  alt={`${job.company} Preview`}
                  fill
                  style={{ objectFit: "cover" }}
                  className="rounded-xl group-hover:scale-105 transition-transform duration-300"
                />
                <div className="absolute inset-0 bg-black/20 group-hover:bg-black/30 transition-all duration-300 flex items-center justify-center">
                  <motion.button
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="bg-white/90 hover:bg-white text-black font-semibold px-6 py-3 rounded-lg shadow-lg transition-all duration-300 opacity-0 group-hover:opacity-100"
                  >
                    Visiter le site →
                  </motion.button>
                </div>
              </motion.div>
            </Link>
          </div>
        </section>
      )}

      {/* Logo Section */}
      {job.imglogo && (
        <section className="py-16 md:py-24 px-4 relative">
          <div className="absolute inset-0 bg-gradient-to-b from-[#1f2020] via-[#2a2b2b] to-[#2a2b2b] pointer-events-none"></div>
          <div className="w-11/12 mx-auto relative z-10">
            <motion.div
              initial={{ y: 50, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="flex items-center justify-center"
            >
              <div className="bg-white p-8 rounded-xl">
                <Image
                  width={300}
                  height={120}
                  alt={`${job.company} Logo`}
                  src={job.imglogo}
                  className="object-contain"
                />
              </div>
            </motion.div>
          </div>
        </section>
      )}
      
      <Footer color="black" />
    </div>
  );
};

export default JobDetailPage;
