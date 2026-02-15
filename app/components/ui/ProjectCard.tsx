"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { Project } from "@/app/lib/types";
import { categoryLabels } from "@/app/lib/projects";

interface ProjectCardProps {
  project: Project;
  index?: number;
  featured?: boolean;
}

export default function ProjectCard({
  project,
  index = 0,
  featured = false,
}: ProjectCardProps) {
  const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.1 });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 50 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{
        duration: 0.7,
        delay: index * 0.1,
        ease: [0.25, 0.46, 0.45, 0.94],
      }}
    >
      <Link href={`/projets/${project.slug}`} className="group block">
        <div
          className={`relative overflow-hidden rounded-2xl bg-bg-surface ${
            featured ? "aspect-[16/10]" : "aspect-[4/3]"
          }`}
        >
          <Image
            src={project.imgCover}
            alt={project.title}
            fill
            className="object-cover transition-all duration-700 group-hover:scale-105"
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-bg-primary/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
          <div className="absolute top-4 left-4">
            <span className="px-3 py-1 text-xs font-medium bg-bg-primary/70 backdrop-blur-sm text-text-secondary rounded-full border border-border">
              {categoryLabels[project.category] || project.category}
            </span>
          </div>
          <div className="absolute bottom-0 left-0 right-0 p-6 translate-y-4 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-500">
            <span className="text-accent text-sm font-medium">
              Voir le projet →
            </span>
          </div>
        </div>

        <div className="mt-5">
          <div className="flex items-center justify-between mb-2">
            <span className="text-text-secondary text-xs font-medium tracking-wider uppercase">
              {project.client} — {project.year}
            </span>
          </div>
          <h3 className="font-display text-lg md:text-xl font-medium text-text-primary group-hover:text-accent transition-colors duration-300 leading-snug">
            {project.title}
          </h3>
        </div>
      </Link>
    </motion.div>
  );
}
