"use client";

import { motion } from "framer-motion";

export function HeroSubtitle() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, delay: 0.2 }}
      className="mb-6"
    >
      <span className="text-accent font-body text-sm font-medium tracking-widest uppercase">
        Développeur Web Freelance
      </span>
    </motion.div>
  );
}

export function HeroHeading({
  children,
  delay,
  className,
}: {
  children: React.ReactNode;
  delay: number;
  className: string;
}) {
  return (
    <div className="overflow-hidden">
      <motion.h1
        initial={{ y: "100%" }}
        animate={{ y: 0 }}
        transition={{ duration: 0.8, delay, ease: [0.25, 0.46, 0.45, 0.94] }}
        className={`font-display text-5xl md:text-7xl lg:text-8xl font-semibold leading-[1.05] tracking-tight ${className}`}
      >
        {children}
      </motion.h1>
    </div>
  );
}

export function HeroDescription({ children }: { children: React.ReactNode }) {
  return (
    <motion.p
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, delay: 0.7 }}
      className="mt-8 text-text-secondary text-base md:text-lg max-w-xl leading-relaxed"
    >
      {children}
    </motion.p>
  );
}

export function HeroCTA({ children }: { children: React.ReactNode }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, delay: 0.9 }}
      className="mt-10 flex flex-wrap gap-4"
    >
      {children}
    </motion.div>
  );
}

export function ScrollIndicator() {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ delay: 1.5, duration: 1 }}
      className="absolute bottom-10 left-1/2 -translate-x-1/2"
    >
      <motion.div
        animate={{ y: [0, 8, 0] }}
        transition={{ repeat: Infinity, duration: 2 }}
        className="w-5 h-8 border-2 border-text-secondary/30 rounded-full flex justify-center pt-1.5"
      >
        <div className="w-1 h-2 bg-text-secondary/50 rounded-full" />
      </motion.div>
    </motion.div>
  );
}

export function CTASection({
  title,
  subtitle,
  children,
}: {
  title: string;
  subtitle: string;
  children: React.ReactNode;
}) {
  return (
    <>
      <motion.h2
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.7 }}
        className="font-display text-4xl md:text-6xl lg:text-7xl font-semibold text-text-primary"
      >
        {title}
      </motion.h2>
      <motion.p
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6, delay: 0.2 }}
        className="mt-6 text-text-secondary text-lg max-w-md mx-auto"
      >
        {subtitle}
      </motion.p>
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6, delay: 0.4 }}
        className="mt-10"
      >
        {children}
      </motion.div>
    </>
  );
}
