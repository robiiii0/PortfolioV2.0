"use client";
import { motion, useAnimation } from "framer-motion";
import Image from "next/image";
import { useState, useEffect } from "react";
import { useInView } from 'react-intersection-observer';
import { dataHomePage, DataHomePage, ObjList, ExempleListJobs } from "./data";
import Link from "next/link";
import Footer from "./components/Footer";
import NavLink from "./NavLink/NavLink";

function Card(props: { data: ObjList; dataHomePage: DataHomePage }) {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <>
      <Link href={`/Job/${props.data.company}`}>
        <div
          className="p-4 mt-12 md:mt-48 relative rounded-2xl overflow-hidden"
          onMouseEnter={() => setIsHovered(true)}
          onMouseLeave={() => setIsHovered(false)}
        >
          <div className="w-full font-thin flex justify-between">
            <p className="text-lg md:text-2xl">
              (00{props.data.index} at {props.data.company})
            </p>
            <p className="text-lg md:text-2xl">
              {props.data.date.getDate()}/{props.data.date.getMonth() + 1}/
              {props.data.date.getFullYear()}
            </p>
          </div>
          <div className="flex justify-center mt-4">
            {props.data.path !== "" ? (
              <iframe
                className="rounded-2xl shadow-2xl transform hover:scale-105 transition-transform duration-300 w-full h-auto md:h-[60rem] border-none"
                src={props.data.path}
                title={`${props.data.company} Preview`}
              />
            ) : (
              <Image
                alt={props.data.alt || "Descriptive text about the image"}
                width={1920}
                height={1080}
                src={props.data.imgCover}
                className="w-full h-auto md:h-[60rem] rounded-xl mt-4 shadow-2xl cursor-pointer transform hover:scale-105 transition-transform duration-300 object-cover"
              />
            )}
          </div>
        </div>
      </Link>
      <div className="mt-12 md:mt-80 text-center w-5/12 mx-auto">
        <p className="text-lg md:text-2xl">(00{props.data.index})</p>
        <p className="text-3xl md:text-5xl w-full mt-12 md:w-10/12 mx-auto">
          {props.dataHomePage.description}
        </p>
        <p className="mt-12 md:mt-24 text-3xl md:text-5xl w-full md:w-10/12 mx-auto">
          {props.dataHomePage.description2}
        </p>
      </div>
    </>
  );
}

export default function Home() {

  const controls = useAnimation();
  const [ref, inView] = useInView({ triggerOnce: true });

  useEffect(() => {
    if (inView) {
      controls.start('visible');
    }
  }, [controls, inView]);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        delayChildren: 0.5,
        staggerChildren: 0.8,
      },
    },
  };
  
  const itemVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 1.5,
      },
    },
  };
  const email = "robindevpro1@gmail.com";

  return (
    <>
      <div className="w-10/12 mx-auto mt-4">
        <NavLink colorScheme="black" />
      </div>
      <div className="w-full">
        <motion.div
          initial={{ y: 50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="w-11/12 mx-auto mt-12 md:mt-[5%] font-montserrat"
        >
          <div className="space-y-2">
            <motion.h1
              initial={{ y: 50, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.5, delay: 0.4 }}
              className="text-4xl md:text-8xl font-bold"
            >
              Robin Chabert
            </motion.h1>
            <motion.h1
              initial={{ y: 50, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.5, delay: 0.6 }}
              className="text-3xl md:text-8xl ml-6 md:ml-12"
            >
              Web and software developer
            </motion.h1>
          </div>
          <div className="mt-12 md:mt-24">
            <motion.p
              initial={{ y: 50, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.5, delay: 1 }}
              className="text-md md:text-xl md:w-5/12"
            >
              Welcome to my portfolio! Here, you can explore the websites
              I&apos;ve developed, the companies I&apos;ve collaborated with,
              and learn more about me and my professional journey.
            </motion.p>
          </div>
          <div className="mt-12">
            <motion.button
              whileHover={{
                background:
                  "linear-gradient(to top, #020617 100%, transparent 100%)",
                color: "#FFFF",
              }}
              whileTap={{ scale: 0.9 }}
              className="animate-bounce rounded-2xl bg-transparent text-gray-700 font-semibold py-2 px-4 border border-black  transition-all duration-300"
              onClick={() =>
                window.open(
                  `https://mail.google.com/mail/?view=cm&fs=1&to=${email}`,
                  "_blank"
                )
              }
            >
              {email}
            </motion.button>
          </div>
        </motion.div>
        <div className="w-11/12 mx-auto mt-48 md:mt-80">
          {ExempleListJobs.map((job, index) => (
            <Card key={index} data={job} dataHomePage={dataHomePage[index]} />
          ))}
        </div>
      </div>

      
      <div className="w-6/12 mx-auto mt-20 md:mt-48 mb-48">
      <div className="text-center text-6xl font-montserrat font-semibold">
        Ils ont su me faire confiance
      </div>
      <motion.div
        ref={ref}
        className="flex justify-between mt-12 items-center space-x-4"
        initial="hidden"
        animate={controls}
        variants={containerVariants}
      >
        <motion.div variants={itemVariants}>
          <Image
            width={250}
            height={100}
            alt="Logo Enedis"
            src="https://upload.wikimedia.org/wikipedia/fr/thumb/7/77/Logo_enedis_header.png/1200px-Logo_enedis_header.png"
            className="object-contain"
          />
        </motion.div>
        <motion.div variants={itemVariants}>
          <Image
            width={250}
            height={100}
            alt="Logo Iroc"
            src="https://www.iroc.app/images/Logo_IROC.png"
            className="object-contain"
          />
        </motion.div>
        <motion.div variants={itemVariants}>
          <Image
            width={250}
            height={100}
            alt="Logo Eloken"
            src="https://eloken.com/_next/image?url=%2F_next%2Fstatic%2Fmedia%2FLogo.9cbeff77.png&w=1200&q=75"
            className="object-contain"
          />
        </motion.div>
      </motion.div>
    </div>
      <Footer color="white" />
    </>
  );
}
