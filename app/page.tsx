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

          <div className="flex justify-center mt-4 relative">
            {props.data.path !== "" ? (
              <>
                {/* Iframe avec pointer-events: none */}
                <iframe
                  className="rounded-2xl shadow-2xl transform transition-transform duration-300 w-full h-auto md:h-[60rem] border-none pointer-events-none"
                  src={props.data.path}
                  title={`${props.data.company} Preview`}
                  style={{ willChange: "transform" }}
                />
                {/* Overlay cliquable */}
                <div className="absolute inset-0 bg-transparent cursor-pointer"></div>
              </>
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
                  className="w-full h-auto md:h-[60rem] rounded-xl mt-4 shadow-2xl cursor-pointer transform transition-transform duration-300 object-cover"
                  style={{ willChange: "transform" }}
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
                spaceBetween={20}
                slidesPerView={1}
                navigation
                pagination={{ clickable: true }}
                autoplay={{ delay: 3000 }}
                loop
                className="w-full max-w-4xl mx-auto rounded-2xl shadow-lg mt-12"
              >
                {carrousel.map((img, index) => (
                  <SwiperSlide key={index}>
                    <div className="relative w-full h-[400px] flex justify-center items-center bg-black/60">
                      <img
                        src={img.img}
                        alt={`Slide ${index}`}
                        className="max-w-full max-h-full object-contain rounded-2xl p-4"
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
