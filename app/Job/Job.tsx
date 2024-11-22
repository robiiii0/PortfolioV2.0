"use client";
import { motion } from "framer-motion";
import Image from "next/image";
import React, { useEffect, useState } from "react";
import { ListJobs, ObjList } from "./JobList";
import Link from "next/link";
import NavLink from "../NavLink/NavLink";
import { useInView } from "react-intersection-observer";

function Card(props: { data: ObjList }) {
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  return (
    <>
      <Link href={`/Job/${props.data.company}`}>
        <div className="p-4 rounded-xl shadow-md mt-20 md:mt-36 bg-black">
          <div className="w-full font-bold flex flex-col sm:flex-row items-center justify-items-center justify-between sm:space-x-4">
            <p className="text-4xl text-center sm:text-left">
              {props.data.company}
            </p>
            <p className="text-xl md:text-4xl text-center sm:text-left">
              {props.data.jobName}
            </p>
            <p className="text-md md:text-4xl text-center sm:text-left">
              {props.data.date.getDate()}/{props.data.date.getMonth() + 1}/
              {props.data.date.getFullYear()}
            </p>
          </div>
          <div className="flex justify-center mt-4 relative overflow-hidden">
            {props.data.path !== "" ? (
              <div className="relative w-full h-[20rem] md:h-[50rem]">
                <iframe
                  className="rounded-2xl shadow-2xl transform-gpu w-full h-full hover:scale-105 transition-transform duration-300"
                  src={props.data.path}
                  title={`${props.data.company} Preview`}
                />
                <motion.div
                  className="absolute inset-0 flex items-center justify-center opacity-0 hover:opacity-100 transition-opacity duration-300"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: inView ? 1 : 0 }}
                  transition={{ duration: 0.5 }}
                >
                  <motion.div
                    initial={{ y: 50, opacity: 0 }}
                    animate={{ y: inView ? 0 : 50, opacity: inView ? 1 : 0 }}
                    transition={{ duration: 0.5, delay: 0.4 }}
                    className="bg-black bg-opacity-75 text-2xl text-white rounded-full px-6 py-6"
                  >
                    View More
                  </motion.div>
                </motion.div>
              </div>
            ) : (
              <div className="relative w-full h-[20rem] md:h-[50rem]">
                <Image
                  alt={props.data.alt || "Descriptive text about the image"}
                  width={1920}
                  height={1080}
                  src={props.data.imgCover}
                  className="w-full h-full rounded-xl shadow-2xl cursor-pointer transform-gpu hover:scale-105 transition-transform duration-300 object-cover"
                />
                <motion.div
                  className="absolute inset-0 flex items-center justify-center opacity-0 hover:opacity-100 transition-opacity duration-300"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: inView ? 1 : 0 }}
                  transition={{ duration: 0.5 }}
                >
                  <motion.div
                    initial={{ y: 50, opacity: 0 }}
                    animate={{ y: inView ? 0 : 50, opacity: inView ? 1 : 0 }}
                    transition={{ duration: 0.5, delay: 0.4 }}
                    className="bg-black bg-opacity-75 text-2xl text-white rounded-full px-6 py-6"
                  >
                    View More
                  </motion.div>
                </motion.div>
              </div>
            )}
          </div>
        </div>
      </Link>
    </>
  );
}

export default function Job() {
  return (
    <div className="w-full font-montserrat text-white bg-black m-0 p-0">
      <div className="w-11/12 mx-auto mt-24">
        <div className="space-y-2">
          <motion.h1
            initial={{ y: 50, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 1, delay: 0.8 }}
            className="text-4xl sm:text-6xl md:text-8xl font-bold text-center md:text-left"
          >
            SELECTED WORK
          </motion.h1>
          <motion.h1
            initial={{ y: 50, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            className="text-4xl sm:text-6xl md:text-8xl font-bold text-center md:text-left md:ml-24"
          >
            (2020 — 2023)
          </motion.h1>
        </div>
        <div className="mt-12">
          <motion.h1
            initial={{ y: 50, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            className="text-lg sm:text-xl md:text-2xl mt-24 w-full sm:w-10/12 md:w-5/12 text-center md:text-left md:ml-24"
          >
            Plongez dans certains des projets sur lesquels j&apos;ai travaillé.
            Les clients varient des entreprises de style de vie aux entreprises
            technologiques et de design.
          </motion.h1>
        </div>
        <motion.div
          initial={{ y: 50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="mt-24 space-y-12"
        >
          {ListJobs.map((job, index) => (
            <Card key={index} data={job} />
          ))}
        </motion.div>
      </div>
    </div>
  );
}
