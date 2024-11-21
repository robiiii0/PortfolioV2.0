"use client";
import Link from "next/link";
import { motion } from "framer-motion";
import NavLink from "./NavLink/NavLink";
import Image from "next/image";

export default function Custom404() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-white to-gray-400 flex flex-col items-center justify-center">
      <div className="w-10/12 mx-auto">
        <NavLink colorScheme="black" />
      </div>

      <Image
        src="https://static.wikia.nocookie.net/leagueoflegends/images/1/1b/Does_Not_Compute_Emote.png/revision/latest/scale-to-width-down/250?cb=20230316211521"
        alt="404"
        width={250}
        height={250}
        className="mt-8"
      />
      <motion.h1
        initial={{ y: -50, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.5 }}
        className="text-6xl font-bold text-gray-800"
      >
        404
      </motion.h1>
      <motion.h2
        initial={{ y: -50, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.5, delay: 0.2 }}
        className="text-2xl text-gray-600 mt-4"
      >
        Page non trouvée
      </motion.h2>
      <motion.p
        initial={{ y: -50, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.5, delay: 0.4 }}
        className="text-lg text-gray-500 mt-4"
      >
        Désolé, la page que vous recherchez n'existe pas.
      </motion.p>
      <motion.div
        initial={{ y: -50, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.5, delay: 0.6 }}
        className="mt-8"
      >
        <Link
          href="/"
          className="bg-blue-500 text-white px-4 py-2 rounded-lg hover:bg-blue-600 transition duration-300"
        >
          Retour à l'accueil
        </Link>
      </motion.div>
    </div>
  );
}
