"use client"
import { motion } from "framer-motion";
import { ListJobs, ObjList } from "@/app/Job/JobList";
import Image from "next/image";
import { useState } from "react";



function Card(props: { data: ObjList }) {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <>
      <div
        className="p-4 mt-48 relative rounded-2xl"
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
      >

        <div className=" w-12/12  font-thin flex justify-between">
          <p className="text-2xl">00{props.data.index} at {props.data.company}</p>
          <p className="text-2xl">
            {props.data.date.getDate()}/{props.data.date.getMonth() + 1}/
            {props.data.date.getFullYear()}
          </p>
        </div>
        <div className="flex justify-center mt-4 relative overflow-hidden">
          {props.data.path !== "" ? (
            <iframe
              className="rounded-2xl shadow-2xl transform-gpu hover:scale-105 transition-transform duration-300"
              src={props.data.path}
              style={{ width: "100%", height: "60rem", border: "none" }}
              title={`${props.data.company} Preview`}
            />
          ) : (
            <Image
              alt={props.data.alt || "Descriptive text about the image"}
              width={1920}
              height={1080}
              src={props.data.imgCover}
              className="w-full h-[60rem] rounded-xl mt-4 shadow-2xl cursor-pointer transform-gpu hover:scale-105 transition-transform duration-300"
              objectFit="cover"
            />
          )}
        </div>
      </div>
    </>
  );
}

export default function Home() {
  const email = "robindevpro1@gmail.com";

  return (
<>
      <div className="w-full">
        <motion.div
          initial={{ y: 50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }} 
          transition={{ duration: 0.5, delay: 0.2 }} 
          className="w-11/12 mx-auto mt-[5%] font-montserrat"
        >
          <div className="space-y-2">
            <motion.h1
              initial={{ y: 50, opacity: 0 }} 
              animate={{ y: 0, opacity: 1 }} 
              transition={{ duration: 0.5, delay: 0.4 }} 
              className="text-8xl font-bold"
            >
              Robin Chabert
            </motion.h1>
            <motion.h1
              initial={{ y: 50, opacity: 0 }} 
              animate={{ y: 0, opacity: 1 }} 
              transition={{ duration: 0.5, delay: 0.6 }} 
              className="text-8xl ml-12"
            >
              Web and software developer
            </motion.h1>
          </div>
          <div
            initial={{ y: 50, opacity: 0 }} 
            animate={{ y: 0, opacity: 1 }} 
            transition={{ duration: 0.5, delay: 0.8 }} 
            className="w-5/12 mt-12"
          >
            <motion.p
              initial={{ y: 50, opacity: 0 }} 
              animate={{ y: 0, opacity: 1 }} 
              transition={{ duration: 0.5, delay: 1 }} 
              className="text-xl"
            >
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Vero commodi modi magni saepe officia placeat aspernatur nobis! Modi, soluta, similique doloribus sunt nihil vitae eius quo in incidunt, temporibus laudantium.
            </motion.p>
          </div>
          <div
            initial={{ y: 50, opacity: 0 }} 
            animate={{ y: 0, opacity: 1 }} 
            transition={{ duration: 0.5, delay: 1.2 }} 
            className="mt-12"
          >
            <motion.button
              whileHover={{ background: "linear-gradient(to top, #020617 100%, transparent 100%)", color: "#FFFF"}}
              whileTap={{ scale: 0.9 }}
              className="animate-bounce rounded-2xl bg-transparent text-gray-700 font-semibold py-2 px-4 border border-black  transition-all duration-300"
              onClick={() => window.open(`https://mail.google.com/mail/?view=cm&fs=1&to=${email}`, "_blank")}
            >
              {email}
            </motion.button>
            </div>
        </motion.div>
        <div className="w-11/12 mx-auto mt-48">

        {ListJobs.map((job, index) => (
          <Card key={index} data={job} />
        ))}
        </div>
      </div>
    </>
  );
}
