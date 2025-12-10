"use client";
import { motion, useAnimation } from "framer-motion";
import Image from "next/image";
import { useState, useEffect, memo } from "react";
import { useInView } from "react-intersection-observer";
import {
  dataHomePage,
  DataHomePage,
  ObjList,
  ExempleListJobs,
  carrousel,
} from "./data";
import Link from "next/link";
import Footer from "./components/Footer";
import NavLink from "./NavLink/NavLink";

import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

const Card = memo(function Card(props: {
  data: ObjList;
  dataHomePage: DataHomePage;
}) {
  const [isHovered, setIsHovered] = useState(false);
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  return (
    <>
      <Link href={`/Job/${props.data.company}`} className="block">
        <div
          className="p-4 mt-12 md:mt-12 relative rounded-2xl overflow-hidden"
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

          <div className="flex justify-center mt-4 relative">
            {props.data.path !== "" ? (
              <motion.div
                initial={{ y: 50, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.5, delay: 1.5 }}
                className="relative w-full overflow-hidden"
                style={{ willChange: "transform" }}
              >
                <div className="group relative">
                  <Image
                    alt={`${props.data.company} Preview`}
                    width={1920}
                    height={1080}
                    src={props.data.imgCover}
                    className="w-full h-auto rounded-2xl max-h-[40rem] md:max-h-[50rem] object-contain transform transition-all duration-300 group-hover:blur-sm cursor-pointer"
                    style={{ willChange: "transform, filter" }}
                  />
                  {/* Bouton pour visiter le site */}
                  <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
                    <motion.button
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                      className="bg-white/90 hover:bg-white text-black font-semibold px-6 py-3 rounded-lg shadow-lg transition-all duration-300 opacity-0 group-hover:opacity-100 pointer-events-auto"
                      onClick={(e) => {
                        e.preventDefault();
                        e.stopPropagation();
                        if (props.data.path) {
                          window.open(props.data.path, "_blank", "noopener,noreferrer");
                        }
                      }}
                    >
                      Visiter le site →
                    </motion.button>
                  </div>
                </div>
              </motion.div>
            ) : (
              <motion.div
                initial={{ y: 50, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.5, delay: 1.5 }}
                className="w-full"
              >
                <Image
                  alt={props.data.alt || "Descriptive text about the image"}
                  width={1920}
                  height={1080}
                  priority
                  loading="eager"
                  src={props.data.imgCover}
                  className="w-full h-auto max-h-[40rem] md:max-h-[50rem] cursor-pointer transform transition-all duration-300 object-contain hover:blur-sm"
                  style={{ willChange: "transform, filter" }}
                />
              </motion.div>
            )}
          </div>
        </div>
      </Link>

      <div
        ref={ref}
        className="mt-12 md:mt-24 text-center w-full md:w-8/12 mx-auto"
      >
        <motion.p
          initial={{ opacity: 0, y: 50 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
          className="text-lg md:text-2xl"
          style={{ willChange: "transform, opacity" }}
        >
          (00{props.data.index})
        </motion.p>
        <motion.p
          initial={{ opacity: 0, y: 50 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="text-xl md:text-5xl w-full mt-12 md:w-10/12 mx-auto font-montserrat-thin"
          style={{ willChange: "transform, opacity" }}
        >
          {props.dataHomePage.description}
        </motion.p>
        <motion.hr
          initial={{ opacity: 0, y: 50 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="border-black md:mt-24 w-10/12 mx-auto mt-12"
          style={{ willChange: "transform, opacity" }}
        />
        <motion.p
          initial={{ opacity: 0, y: 50 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5, delay: 0.8 }}
          className="mt-12 md:mt-24 text-xl md:text-5xl w-full md:w-10/12 mx-auto font-montserrat-thin"
          style={{ willChange: "transform, opacity" }}
        >
          {props.dataHomePage.description2}
        </motion.p>
      </div>
    </>
  );
});

export default function Home() {
  const controls = useAnimation();
  const [ref, inView] = useInView({ triggerOnce: true });

  useEffect(() => {
    if (inView) {
      controls.start("visible");
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

  const [loadingAnimation, setLoadingAnimation] = useState<boolean>(false);
  const screenAnimation = useAnimation(); // Animation principale pour l'écran
  const textAnimation = useAnimation(); // Animation des lettres et du texte
  const bgExitAnimation = useAnimation(); // Animation pour la fermeture du rideau

  useEffect(() => {
    const hasSeenAnimation = sessionStorage.getItem("hasSeenAnimation");

    if (!hasSeenAnimation) {
      document.body.classList.add("no-scroll");
      const startAnimation = async () => {
        // Animation des lettres
        await textAnimation.start({
          y: -100,
          opacity: 0,
          transition: {
            duration: 1,
            ease: "easeInOut",
          },
        });

        await new Promise((resolve) => setTimeout(resolve, 3000));

        await bgExitAnimation.start({
          height: "0%",
          transition: {
            duration: 1.5,
            ease: "easeInOut",
          },
        });

        setLoadingAnimation(true);
        sessionStorage.setItem("hasSeenAnimation", "true");
        document.body.classList.remove("no-scroll");
      };

      startAnimation();
    } else {
      setLoadingAnimation(true);
    }
  }, [textAnimation, bgExitAnimation]);

  return (
    <>
      {!loadingAnimation && (
        <motion.div
          style={{
            background: "black",
            width: "100vw",
            height: "100vh",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            flexDirection: "column",
            overflow: "hidden",
          }}
          initial={{ height: "100vh" }}
          animate={bgExitAnimation}
        >
          <motion.h1
            style={{ color: "white", fontSize: "4rem" }}
            initial={{ y: 100, opacity: 0 }}
            animate={{
              y: 0,
              opacity: 1,
              transition: {
                duration: 1,
                type: "spring",
                stiffness: 100,
              },
            }}
            exit={{
              y: -100,
              opacity: 0,
              transition: {
                duration: 1,
                ease: "easeInOut",
              },
            }}
          >
            {"Robin©".split("").map((char, index) => (
              <motion.span
                key={index}
                style={{ display: "inline-block" }}
                initial={{ opacity: 0, y: 50 }}
                animate={{
                  opacity: 1,
                  y: 0,
                  transition: {
                    delay: 0.2 * index,
                    duration: 0.5,
                  },
                }}
              >
                {char}
              </motion.span>
            ))}
          </motion.h1>

          <motion.h2
            style={{ color: "white", fontSize: "2rem", marginTop: "1rem" }}
            initial={{ y: 100, opacity: 0 }}
            animate={{
              y: 0,
              opacity: 1,
              transition: {
                delay: 1.5,
                duration: 1,
                type: "spring",
                stiffness: 100,
              },
            }}
            exit={{
              y: -100,
              opacity: 0,
              transition: {
                duration: 1,
                ease: "easeInOut",
              },
            }}
          >
            Bienvenue sur mon site
          </motion.h2>
        </motion.div>
      )}
      <div className="min-h-screen bg-[#fff7ed]">
        {loadingAnimation && (
          <>
            <div className="w-10/12 mx-auto pt-4">
              <NavLink colorScheme="black" />
            </div>
            <div className="w-full min-h-screen">
              <motion.div
                initial={{ y: 50, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.5, delay: 0.2 }}
                className="w-11/12 mx-auto mt-[25%] md:mt-[8%] font-montserrat"
                style={{ willChange: "transform, opacity" }}
              >
                <div className="space-y-2">
                  <motion.h1
                    initial={{ y: 50, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    transition={{ duration: 1, delay: 0.8 }}
                    className="text-4xl md:text-8xl font-bold"
                    style={{ willChange: "transform, opacity" }}
                  >
                    Robin Chabert
                  </motion.h1>
                  <motion.h1
                    initial={{ y: 50, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    transition={{ duration: 1, delay: 0.2 }}
                    className="text-3xl md:text-8xl ml-6 md:ml-12"
                    style={{ willChange: "transform, opacity" }}
                  >
                    Développeur web et logiciel
                  </motion.h1>
                </div>
                <div className="mt-12 md:mt-24">
                  <motion.p
                    initial={{ y: 50, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    transition={{ duration: 0.5, delay: 1 }}
                    className="text-md md:text-xl md:w-5/12 font-montserrat-thin"
                    style={{ willChange: "transform, opacity" }}
                  >
                    Bienvenue dans mon portfolio ! Ici, vous pouvez explorer les
                    sites web que j&apos;ai développés, les entreprises avec
                    lesquelles j&apos;ai collaboré, et en apprendre davantage
                    sur moi et mon parcours professionnel.
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
                    className="animate-bounce rounded-2xl bg-transparent text-gray-700 font-semibold py-2 px-4 border border-black transition-all duration-300"
                    onClick={() =>
                      window.open(
                        `https://mail.google.com/mail/?view=cm&fs=1&to=${email}`,
                        "_blank"
                      )
                    }
                    style={{ willChange: "transform, background, color" }}
                  >
                    {email}
                  </motion.button>
                </div>
              </motion.div>
              <div className="w-11/12 mx-auto mt-24 md:mt-48">
                {ExempleListJobs.map((job, index) => (
                  <Card
                    key={index}
                    data={job}
                    dataHomePage={dataHomePage[index]}
                  />
                ))}
              </div>
              <Swiper
                modules={[Navigation, Pagination, Autoplay]}
                spaceBetween={40}
                slidesPerView={1}
                navigation
                pagination={{ clickable: true }}
                autoplay={{ delay: 4000, disableOnInteraction: false }}
                loop
                className="w-full max-w-6xl mx-auto mt-16"
              >
                {carrousel.map((img, index) => (
                  <SwiperSlide key={index}>
                    <div className="relative w-full h-[250px] md:h-[350px] lg:h-[400px] flex justify-center items-center bg-[#fff7ed] rounded-2xl shadow-lg overflow-hidden group hover:shadow-2xl transition-all duration-300">
                      <Image
                        src={img.img}
                        alt={`Slide ${index}`}
                        width={1200}
                        height={600}
                        className="max-w-[85%] max-h-[75%] object-contain transition-transform duration-300 group-hover:scale-110"
                      />
                    </div>
                  </SwiperSlide>
                ))}
              </Swiper>
            </div>
            <Footer color="white" />
          </>
        )}
      </div>
    </>
  );
}
