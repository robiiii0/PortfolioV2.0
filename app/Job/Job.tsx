"use client";
import { motion } from "framer-motion";
import Image from "next/image";
import React, { useEffect, useState, useRef, memo } from "react";
import { ListJobs, ObjList } from "./JobList";
import Link from "next/link";
import { useInView } from "react-intersection-observer";

const Card = memo(function Card(props: { data: ObjList }) {
  const [isHovered, setIsHovered] = useState(false);
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const [isVisible, setIsVisible] = useState(false);
  const imageRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setIsVisible(true);
            observer.disconnect();
          }
        });
      },
      { threshold: 0.1 }
    );

    if (imageRef.current) {
      observer.observe(imageRef.current);
    }

    return () => {
      if (imageRef.current) {
        observer.unobserve(imageRef.current);
      }
    };
  }, []);

  return (
    <>
      <Link href={`/Job/${props.data.company}`}>
        <div
          className="p-4 mt-12 md:mt-24 relative rounded-2xl overflow-hidden"
          onMouseEnter={() => setIsHovered(true)}
          onMouseLeave={() => setIsHovered(false)}
        >
          <motion.div
            initial={{ y: 50, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 1, delay: 0.8 }}
            className="w-full font-thin flex justify-between"
            style={{ willChange: "transform, opacity" }}
          >
            <p className="text-lg md:text-2xl">
              (00{props.data.index} at {props.data.company})
            </p>
            <p className="text-lg md:text-2xl">
              {props.data.date.getDate()}/{props.data.date.getMonth() + 1}/
              {props.data.date.getFullYear()}
            </p>
          </motion.div>
          <div className="flex justify-center mt-4" ref={imageRef}>
            {props.data.path !== "" ? (
              <iframe
                className="rounded-2xl shadow-2xl transform hover:scale-105 transition-transform duration-300 w-full h-auto md:h-[60rem] border-none"
                src={props.data.path}
                loading="lazy"
                title={`${props.data.company} Preview`}
                style={{ willChange: "transform" }}
              />
            ) : (
              isVisible && (
                <Image
                  alt={props.data.alt || "Descriptive text about the image"}
                  width={1920}
                  height={1080}
                  src={props.data.imgCover}
                  className="w-full h-auto md:h-[60rem] rounded-xl mt-4 shadow-2xl cursor-pointer transform hover:scale-105 transition-transform duration-300 object-cover"
                  placeholder="blur"
                  blurDataURL="/path/to/low-res-image.jpg"
                  loading="lazy"
                  style={{ willChange: "transform" }}
                />
              )
            )}
          </div>
        </div>
      </Link>
    </>
  );
});

export default function Job() {
  return (
    <div className="w-full font-montserrat text-white bg-[#1f2020] m-0 p-0">
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
