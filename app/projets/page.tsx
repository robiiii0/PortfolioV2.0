"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import Navbar from "../components/ui/Navbar";
import Footer from "../components/ui/Footer";
import ProjectCard from "../components/ui/ProjectCard";
import Button from "../components/ui/Button";
import { projects, categoryLabels } from "../lib/projects";

const categories = Object.keys(categoryLabels);

export default function ProjetsPage() {
  const [activeCategory, setActiveCategory] = useState("all");

  const filtered =
    activeCategory === "all"
      ? projects
      : projects.filter((p) => p.category === activeCategory);

  const years = projects.map((p) => p.year);
  const minYear = Math.min(...years);
  const maxYear = Math.max(...years);

  return (
    <>
      <Navbar />

      {/* Hero */}
      <section className="pt-32 pb-8 md:pt-40 md:pb-12">
        <div className="max-w-content mx-auto px-6 md:px-12">
          <motion.span
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="text-accent font-body text-sm font-medium tracking-widest uppercase"
          >
            Réalisations
          </motion.span>
          <div className="overflow-hidden mt-4">
            <motion.h1
              initial={{ y: "100%" }}
              animate={{ y: 0 }}
              transition={{
                duration: 0.8,
                delay: 0.1,
                ease: [0.25, 0.46, 0.45, 0.94],
              }}
              className="font-display text-5xl md:text-7xl lg:text-8xl font-semibold text-text-primary"
            >
              Projets
            </motion.h1>
          </div>
          <div className="overflow-hidden">
            <motion.h2
              initial={{ y: "100%" }}
              animate={{ y: 0 }}
              transition={{
                duration: 0.8,
                delay: 0.2,
                ease: [0.25, 0.46, 0.45, 0.94],
              }}
              className="font-display text-3xl md:text-5xl lg:text-6xl font-semibold text-text-secondary"
            >
              ({minYear} — {maxYear})
            </motion.h2>
          </div>
        </div>
      </section>

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

      {/* CTA */}
      <section className="py-24 md:py-32 bg-bg-secondary">
        <div className="max-w-content mx-auto px-6 md:px-12 text-center">
          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="font-display text-4xl md:text-6xl font-semibold text-text-primary"
          >
            Un projet similaire ?
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="mt-6 text-text-secondary text-lg max-w-md mx-auto"
          >
            Parlons-en et trouvons la meilleure approche pour votre projet.
          </motion.p>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="mt-10"
          >
            <Button href="/contact">Démarrer un projet</Button>
          </motion.div>
        </div>
      </section>

      <Footer />
    </>
  );
}
