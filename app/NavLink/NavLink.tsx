"use client";

import Link from "next/link";
import React from "react";
import { useSelectedLayoutSegment } from "next/navigation";
import { motion } from "framer-motion";

export default function NavLink({
  link,
  title,
  children,
}: {
  link: string;
  title: boolean;
  children: React.ReactNode;
}) {
  let segment = useSelectedLayoutSegment();
  let active = link === `/${segment}`;

  return (
    <>
      <motion.a
        href={link}
        className={`relative ${
          title ? "text-4xl font-bold" : "text-xl font-medium"
        } font-montserrat`}
      >
        {children}
        <motion.div
          className="absolute bottom-0 left-0 w-full h-[0.05rem] bg-black"
          initial={{ scaleX: 0 }}
          animate={{ scaleX: active ? 1 : 0 }}
          transition={{ duration: 0.3 }}
        />
      </motion.a>
    </>
  );
}
