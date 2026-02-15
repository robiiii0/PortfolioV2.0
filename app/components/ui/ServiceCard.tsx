"use client";

import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import Link from "next/link";
import { Service } from "@/app/lib/types";
import { FaGlobe, FaShoppingBag, FaCode } from "react-icons/fa";

const iconMap: Record<string, React.ComponentType<{ className?: string }>> = {
  globe: FaGlobe,
  "shopping-bag": FaShoppingBag,
  code: FaCode,
};

interface ServiceCardProps {
  service: Service;
  index?: number;
}

export default function ServiceCard({ service, index = 0 }: ServiceCardProps) {
  const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.2 });
  const Icon = iconMap[service.icon] || FaCode;

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 40 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{
        duration: 0.6,
        delay: index * 0.15,
        ease: [0.25, 0.46, 0.45, 0.94],
      }}
      className="group relative p-8 md:p-10 rounded-2xl bg-bg-surface border border-border hover:border-accent/30 transition-all duration-500"
    >
      <div className="absolute inset-0 rounded-2xl bg-gradient-to-b from-accent/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

      <div className="relative z-10">
        <div className="w-12 h-12 flex items-center justify-center rounded-xl bg-accent/10 text-accent mb-6 group-hover:bg-accent/20 transition-colors duration-300">
          <Icon className="w-5 h-5" />
        </div>

        <h3 className="font-display text-xl md:text-2xl font-semibold text-text-primary mb-2">
          {service.title}
        </h3>
        <p className="text-accent text-sm font-medium mb-4">
          {service.subtitle}
        </p>
        <p className="text-text-secondary text-sm leading-relaxed mb-6">
          {service.description}
        </p>

        <Link
          href="/contact"
          className="inline-flex items-center gap-2 text-sm font-medium text-text-primary group-hover:text-accent transition-colors duration-300"
        >
          Démarrer un projet
          <span className="group-hover:translate-x-1 transition-transform duration-300">
            →
          </span>
        </Link>
      </div>
    </motion.div>
  );
}
