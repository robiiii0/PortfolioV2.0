"use client";

import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import Navbar from "@/app/components/ui/Navbar";
import Footer from "@/app/components/ui/Footer";
import Button from "@/app/components/ui/Button";
import { projects, getProjectBySlug, categoryLabels } from "@/app/lib/projects";
import { Project } from "@/app/lib/types";

export default function ProjectDetailPage() {
  const pathname = usePathname();
  const slug = pathname?.split("/").pop();
  const [project, setProject] = useState<Project | null>(null);

  useEffect(() => {
    if (slug) {
      const found = getProjectBySlug(slug);
      setProject(found || null);
    }
  }, [slug]);

  if (!project) {
    return (
      <div className="min-h-screen bg-bg-primary flex items-center justify-center">
        <p className="text-text-secondary">Chargement...</p>
      </div>
    );
  }

  const currentIndex = projects.findIndex((p) => p.slug === project.slug);
  const prevProject = currentIndex > 0 ? projects[currentIndex - 1] : null;
  const nextProject =
    currentIndex < projects.length - 1 ? projects[currentIndex + 1] : null;

  return (
    <>
      <Navbar />

      {/* Hero */}
      <section className="pt-32 pb-12 md:pt-40 md:pb-16">
        <div className="max-w-content mx-auto px-6 md:px-12">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="flex flex-wrap items-center gap-4 mb-6"
          >
            <span className="px-3 py-1 text-xs font-medium bg-accent/10 text-accent rounded-full">
              {categoryLabels[project.category]}
            </span>
            <span className="text-text-secondary text-sm">
              {project.client} — {project.date}
            </span>
          </motion.div>

          <div className="overflow-hidden">
            <motion.h1
              initial={{ y: "100%" }}
              animate={{ y: 0 }}
              transition={{
                duration: 0.8,
                delay: 0.1,
                ease: [0.25, 0.46, 0.45, 0.94],
              }}
              className="font-display text-4xl md:text-6xl lg:text-7xl font-semibold text-text-primary leading-tight"
            >
              {project.title}
            </motion.h1>
          </div>
        </div>
      </section>

      {/* Cover Image */}
      <section className="pb-16 md:pb-24">
        <div className="max-w-site mx-auto px-6 md:px-12">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.3 }}
            className="relative aspect-[16/9] rounded-2xl overflow-hidden bg-bg-surface"
          >
            <Image
              src={project.imgCover}
              alt={project.title}
              fill
              className="object-cover"
              priority
            />
          </motion.div>
        </div>
      </section>

      {/* Content: 2-Column Layout */}
      <section className="py-16 md:py-24">
        <div className="max-w-content mx-auto px-6 md:px-12">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12 lg:gap-20">
            {/* Left: Narrative */}
            <div className="lg:col-span-2 space-y-12">
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
              >
                <h2 className="font-display text-2xl md:text-3xl font-semibold text-text-primary mb-4">
                  Le défi
                </h2>
                <p className="text-text-secondary text-base leading-relaxed">
                  {project.challenge}
                </p>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
              >
                <h2 className="font-display text-2xl md:text-3xl font-semibold text-text-primary mb-4">
                  La solution
                </h2>
                <p className="text-text-secondary text-base leading-relaxed">
                  {project.solution}
                </p>
              </motion.div>
            </div>

            {/* Right: Details sidebar */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="space-y-8"
            >
              <div>
                <h3 className="text-text-secondary text-xs font-medium uppercase tracking-widest mb-3">
                  Client
                </h3>
                <p className="text-text-primary font-medium">
                  {project.client}
                </p>
              </div>
              <div>
                <h3 className="text-text-secondary text-xs font-medium uppercase tracking-widest mb-3">
                  Date
                </h3>
                <p className="text-text-primary font-medium">{project.date}</p>
              </div>
              <div>
                <h3 className="text-text-secondary text-xs font-medium uppercase tracking-widest mb-3">
                  Catégorie
                </h3>
                <p className="text-text-primary font-medium">
                  {categoryLabels[project.category]}
                </p>
              </div>
              <div>
                <h3 className="text-text-secondary text-xs font-medium uppercase tracking-widest mb-3">
                  Technologies
                </h3>
                <div className="flex flex-wrap gap-2">
                  {project.technologies.map((tech) => (
                    <span
                      key={tech}
                      className="px-3 py-1 text-xs bg-bg-surface border border-border rounded-full text-text-secondary"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
              {project.link && (
                <div>
                  <h3 className="text-text-secondary text-xs font-medium uppercase tracking-widest mb-3">
                    Lien
                  </h3>
                  <Link
                    href={project.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-accent text-sm font-medium hover:text-accent-hover transition-colors duration-300"
                  >
                    Visiter le site →
                  </Link>
                </div>
              )}
            </motion.div>
          </div>
        </div>
      </section>

      {/* Image Gallery */}
      {project.imgArray.length > 1 && (
        <section className="py-16 md:py-24 bg-bg-secondary">
          <div className="max-w-site mx-auto px-6 md:px-12">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {project.imgArray.map((img, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: i * 0.1 }}
                  className={`relative rounded-2xl overflow-hidden bg-bg-surface ${
                    i === 0 ? "md:col-span-2 aspect-[16/9]" : "aspect-[4/3]"
                  }`}
                >
                  <Image
                    src={img}
                    alt={`${project.client} - Image ${i + 1}`}
                    fill
                    className="object-cover"
                  />
                </motion.div>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* Prev/Next Navigation */}
      <section className="py-16 border-t border-border">
        <div className="max-w-content mx-auto px-6 md:px-12">
          <div className="grid grid-cols-2 gap-8">
            <div>
              {prevProject && (
                <Link
                  href={`/projets/${prevProject.slug}`}
                  className="group block"
                >
                  <span className="text-text-secondary text-xs uppercase tracking-widest">
                    ← Projet précédent
                  </span>
                  <p className="font-display text-lg md:text-xl font-medium text-text-primary group-hover:text-accent transition-colors duration-300 mt-2">
                    {prevProject.client}
                  </p>
                </Link>
              )}
            </div>
            <div className="text-right">
              {nextProject && (
                <Link
                  href={`/projets/${nextProject.slug}`}
                  className="group block"
                >
                  <span className="text-text-secondary text-xs uppercase tracking-widest">
                    Projet suivant →
                  </span>
                  <p className="font-display text-lg md:text-xl font-medium text-text-primary group-hover:text-accent transition-colors duration-300 mt-2">
                    {nextProject.client}
                  </p>
                </Link>
              )}
            </div>
          </div>
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
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="mt-10"
          >
            <Button href="/contact">Discutons de votre projet</Button>
          </motion.div>
        </div>
      </section>

      <Footer />
    </>
  );
}
