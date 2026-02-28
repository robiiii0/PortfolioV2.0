"use client";

import { motion } from "framer-motion";
import Image from "next/image";

const ease = [0.25, 0.46, 0.45, 0.94] as const;

const fadeUp = {
  initial: { opacity: 0, y: 30 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true },
};

export function HeroBadge({ children }: { children: React.ReactNode }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="flex flex-wrap items-center gap-4 mb-6"
    >
      {children}
    </motion.div>
  );
}

export function HeroTitle({ children }: { children: React.ReactNode }) {
  return (
    <div className="overflow-hidden">
      <motion.h1
        initial={{ y: "100%" }}
        animate={{ y: 0 }}
        transition={{ duration: 0.8, delay: 0.1, ease }}
        className="font-display text-4xl md:text-6xl lg:text-7xl font-semibold text-text-primary leading-tight"
      >
        {children}
      </motion.h1>
    </div>
  );
}

export function CoverImage({ src, alt }: { src: string; alt: string }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.7, delay: 0.3 }}
      className="relative aspect-[16/9] rounded-2xl overflow-hidden bg-bg-surface"
    >
      <Image
        src={src}
        alt={alt}
        fill
        className="object-cover"
        sizes="(max-width: 768px) 100vw, 1440px"
        priority
      />
    </motion.div>
  );
}

export function AnimatedSection({
  children,
  className = "",
  delay = 0,
}: {
  children: React.ReactNode;
  className?: string;
  delay?: number;
}) {
  return (
    <motion.div
      {...fadeUp}
      transition={{ duration: 0.6, delay }}
      className={className}
    >
      {children}
    </motion.div>
  );
}

export function GalleryImage({
  src,
  alt,
  index,
  className = "",
}: {
  src: string;
  alt: string;
  index: number;
  className?: string;
}) {
  return (
    <motion.div
      {...fadeUp}
      transition={{ duration: 0.6, delay: index * 0.1 }}
      className={`rounded-2xl overflow-hidden bg-bg-surface ${className}`}
    >
      <Image
        src={src}
        alt={alt}
        width={1920}
        height={1080}
        className="w-full h-auto"
        sizes={className.includes("col-span-2") ? "(max-width: 768px) 100vw, 1440px" : "(max-width: 768px) 100vw, 50vw"}
      />
    </motion.div>
  );
}

export function CTASection({
  title,
  children,
}: {
  title: string;
  children: React.ReactNode;
}) {
  return (
    <>
      <motion.h2
        {...fadeUp}
        transition={{ duration: 0.7 }}
        className="font-display text-4xl md:text-6xl font-semibold text-text-primary"
      >
        {title}
      </motion.h2>
      <motion.div
        {...fadeUp}
        transition={{ duration: 0.6, delay: 0.2 }}
        className="mt-10"
      >
        {children}
      </motion.div>
    </>
  );
}
