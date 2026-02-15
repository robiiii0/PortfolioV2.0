"use client";

import { motion } from "framer-motion";
import Button from "./components/ui/Button";

export default function NotFound() {
  return (
    <div className="min-h-screen bg-bg-primary flex flex-col items-center justify-center px-6">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="text-center"
      >
        <h1 className="font-display text-[8rem] md:text-[12rem] font-bold text-border leading-none">
          404
        </h1>
        <h2 className="font-display text-2xl md:text-4xl font-semibold text-text-primary mt-4">
          Cette page n&apos;existe pas
        </h2>
        <p className="text-text-secondary text-base mt-4 max-w-md mx-auto">
          La page que vous recherchez a peut-être été déplacée ou n&apos;existe
          plus.
        </p>
        <div className="mt-10">
          <Button href="/">Retour à l&apos;accueil</Button>
        </div>
      </motion.div>
    </div>
  );
}
