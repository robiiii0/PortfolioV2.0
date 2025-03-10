"use client";
import { motion, useAnimation } from "framer-motion";
import Image from "next/image";
import { useState, useEffect, memo } from "react";
import { useInView } from "react-intersection-observer";
import { dataHomePage, DataHomePage, ObjList, ExempleListJobs } from "./data";
import Link from "next/link";
import Footer from "./components/Footer";
import NavLink from "./NavLink/NavLink";

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
          <div className="flex justify-center mt-4">
              {props.data.path !== "" ? (

          <iframe
            className="rounded-2xl shadow-2xl transform transition-transform duration-300 w-full h-auto md:h-[60rem] border-none"
            src={props.data.path}
            title={`${props.data.company} Preview`}
            style={{ willChange: "transform" }}
          />
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
                  className="w-full h-auto md:h-[60rem] rounded-xl mt-4 shadow-2xl cursor-pointer transform  transition-transform duration-300 object-cover"
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
              <Link href={"/job"}>
                <div className="md:w-9/12 w-11/12 mx-auto mt-20 md:mt-48 mb-48 overflow-hidden rounded-2xl shadow-2xl bg-stone-200/60 p-4">
                  <motion.div className="flex flex-col md:flex-row justify-center items-center space-y-12 md:space-y-0 md:space-x-12 ">
                    <Image
                      width={250}
                      height={100}
                      alt="Logo Enedis"
                      src="https://upload.wikimedia.org/wikipedia/fr/thumb/7/77/Logo_enedis_header.png/1200px-Logo_enedis_header.png"
                      className="object-contain"
                    />
                    <Image
                      width={250}
                      height={100}
                      alt="Logo Iroc"
                      src="https://www.iroc.app/images/Logo_IROC.png"
                      className="object-contain"
                    />
                    <Image
                      width={250}
                      height={100}
                      alt="Logo Eloken"
                      src="https://hiddenhillsclub.com/cdn/shop/files/MAIN_HIDDEN_HILLS_GRN_1d93f736-b25e-42f9-a074-8bba4446ba73.png?v=1667236646&width=3533"
                      className="object-contain"
                    />
                    <Image
                      width={250}
                      height={100}
                      alt="Logo Eloken"
                      src="https://eloken.com/_next/image?url=%2F_next%2Fstatic%2Fmedia%2FLogo.9cbeff77.png&w=1200&q=75"
                      className="object-contain"
                    />
                  </motion.div>
                </div>
              </Link>
            </div>
            <Footer color="white" />
          </>
        )}
      </div>
    </>
  );
}
