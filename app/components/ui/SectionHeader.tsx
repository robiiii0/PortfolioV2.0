"use client";

import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";

interface SectionHeaderProps {
  number: string;
  title: string;
  subtitle?: string;
  className?: string;
  align?: "left" | "center";
}

export default function SectionHeader({
  number,
  title,
  subtitle,
  className = "",
  align = "left",
}: SectionHeaderProps) {
  const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.2 });

  return (
    <div
      ref={ref}
      className={`mb-12 md:mb-16 ${
        align === "center" ? "text-center" : ""
      } ${className}`}
    >
      <motion.span
        initial={{ opacity: 0, y: 20 }}
        animate={inView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.5 }}
        className="text-accent font-body text-sm font-medium tracking-widest"
      >
        ({number})
      </motion.span>
      <div className="overflow-hidden mt-3">
        <motion.h2
          initial={{ y: "100%" }}
          animate={inView ? { y: 0 } : {}}
          transition={{
            duration: 0.7,
            delay: 0.1,
            ease: [0.25, 0.46, 0.45, 0.94],
          }}
          className="font-display text-3xl md:text-5xl lg:text-6xl font-semibold text-text-primary"
        >
          {title}
        </motion.h2>
      </div>
      {subtitle && (
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="mt-4 text-text-secondary text-base md:text-lg max-w-2xl"
        >
          {subtitle}
        </motion.p>
      )}
    </div>
  );
}
