"use client"
import { motion } from "framer-motion";

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
              className="animate-bounce bg-transparent text-gray-700 font-semibold py-2 px-4 border border-black rounded transition-all duration-300"
              onClick={() => window.open(`https://mail.google.com/mail/?view=cm&fs=1&to=${email}`, "_blank")}
            >
              {email}
            </motion.button>
            </div>
        </motion.div>
      </div>
    </>
  );
}
