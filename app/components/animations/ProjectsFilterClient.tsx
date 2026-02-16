"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import ProjectCard from "../ui/ProjectCard";
import { Project } from "@/app/lib/types";
import { categoryLabels } from "@/app/lib/projects";

const categories = Object.keys(categoryLabels);

export default function ProjectsFilterClient({
  projects,
}: {
  projects: Project[];
}) {
  const [activeCategory, setActiveCategory] = useState("all");

  const filtered =
    activeCategory === "all"
      ? projects
      : projects.filter((p) => p.category === activeCategory);

  return (
    <>
      {/* Filters */}
      <section className="py-8">
        <div className="max-w-content mx-auto px-6 md:px-12">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            className="flex flex-wrap gap-3"
          >
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setActiveCategory(cat)}
                className={`px-5 py-2 rounded-full text-sm font-medium transition-all duration-300 ${
                  activeCategory === cat
                    ? "bg-accent text-bg-primary"
                    : "bg-bg-surface text-text-secondary border border-border hover:border-accent/30 hover:text-text-primary"
                }`}
              >
                {categoryLabels[cat]}
              </button>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Projects Grid */}
      <section className="py-12 md:py-16">
        <div className="max-w-content mx-auto px-6 md:px-12">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {filtered.map((project, i) => (
              <ProjectCard key={project.slug} project={project} index={i} />
            ))}
          </div>
          {filtered.length === 0 && (
            <p className="text-text-secondary text-center py-20">
              Aucun projet dans cette catégorie pour le moment.
            </p>
          )}
        </div>
      </section>
    </>
  );
}
