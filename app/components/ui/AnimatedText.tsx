"use client";

import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";

type Variant = "fadeUp" | "splitLetters" | "slideFromLeft" | "clipReveal";

interface AnimatedTextProps {
  children: string;
  variant?: Variant;
  className?: string;
  delay?: number;
  as?: "h1" | "h2" | "h3" | "h4" | "p" | "span";
}

export default function AnimatedText({
  children,
  variant = "fadeUp",
  className = "",
  delay = 0,
  as: Tag = "p",
}: AnimatedTextProps) {
  const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.2 });

  if (variant === "splitLetters") {
    return (
      <Tag ref={ref} className={className}>
        {children.split("").map((char, i) => (
          <motion.span
            key={i}
            initial={{ opacity: 0, y: 30 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{
              duration: 0.4,
              delay: delay + i * 0.03,
              ease: [0.25, 0.46, 0.45, 0.94],
            }}
            style={{ display: "inline-block" }}
          >
            {char === " " ? "\u00A0" : char}
          </motion.span>
        ))}
      </Tag>
    );
  }

  if (variant === "slideFromLeft") {
    return (
      <motion.div
        ref={ref}
        initial={{ x: -60, opacity: 0 }}
        animate={inView ? { x: 0, opacity: 1 } : {}}
        transition={{
          duration: 0.7,
          delay,
          ease: [0.25, 0.46, 0.45, 0.94],
        }}
      >
        <Tag className={className}>{children}</Tag>
      </motion.div>
    );
  }

  if (variant === "clipReveal") {
    return (
      <div ref={ref} className="overflow-hidden">
        <motion.div
          initial={{ y: "100%" }}
          animate={inView ? { y: 0 } : {}}
          transition={{
            duration: 0.8,
            delay,
            ease: [0.25, 0.46, 0.45, 0.94],
          }}
        >
          <Tag className={className}>{children}</Tag>
        </motion.div>
      </div>
    );
  }

  // Default: fadeUp
  return (
    <motion.div
      ref={ref}
      initial={{ y: 40, opacity: 0 }}
      animate={inView ? { y: 0, opacity: 1 } : {}}
      transition={{
        duration: 0.7,
        delay,
        ease: [0.25, 0.46, 0.45, 0.94],
      }}
    >
      <Tag className={className}>{children}</Tag>
    </motion.div>
  );
}
