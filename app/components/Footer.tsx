"use client";
import React from "react";
import { motion } from "framer-motion";
import Link from "next/link";

export default function Footer() {
  return (
    <div>
      <div className="mt-20 md:mt-100">
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
          </motion.div>
        </div>
        <div className="w-11/12 mx-auto font-semibold text-md md:text-xl">
          <div className="flex flex-col md:flex-row justify-between space-x-0 md:space-x-8 mb-12 mt-8">
            <div className="flex justify-between space-x-4 md:space-x-8">
              <Link href={"https://www.instagram.com/robin_chabb/"}>
                Instagram
              </Link>
              <Link
                href={"https://www.linkedin.com/in/robin-chabert-863105232/"}
              >
                LinkedIn
              </Link>
              <Link href={"https://github.com/robiiii0"}>Github</Link>
            </div>
            <div>© Robin Chabert</div>
          </div>
        </div>
      </div>
    </div>
  );
}
