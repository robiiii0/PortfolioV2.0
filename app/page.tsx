"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import Navbar from "./components/ui/Navbar";
import Footer from "./components/ui/Footer";
import SectionHeader from "./components/ui/SectionHeader";
import ProjectCard from "./components/ui/ProjectCard";
import ServiceCard from "./components/ui/ServiceCard";
import Button from "./components/ui/Button";
import { getFeaturedProjects } from "./lib/projects";
import { services } from "./lib/services";
import { carrousel } from "./lib/clients";

const featuredProjects = getFeaturedProjects();

export default function Home() {
  return (
    <>
      <Navbar />

      {/* ─── Hero ─── */}
      <section className="relative min-h-screen flex items-center overflow-hidden">
        {/* Background gradient mesh */}
        <div className="absolute inset-0">
          <div className="absolute top-1/4 -left-32 w-[600px] h-[600px] bg-accent/8 rounded-full blur-[120px]" />
          <div className="absolute bottom-1/4 -right-32 w-[500px] h-[500px] bg-accent/5 rounded-full blur-[100px]" />
          <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(ellipse_at_top_right,_rgba(232,93,58,0.04)_0%,_transparent_60%)]" />
        </div>

        <div className="relative z-10 max-w-site mx-auto px-6 md:px-12 pt-32 pb-20 w-full">
          <div className="max-w-4xl">
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

            <div className="overflow-hidden">
              <motion.h1
                initial={{ y: "100%" }}
                animate={{ y: 0 }}
                transition={{
                  duration: 0.8,
                  delay: 0.3,
                  ease: [0.25, 0.46, 0.45, 0.94],
                }}
                className="font-display text-5xl md:text-7xl lg:text-8xl font-semibold text-text-primary leading-[1.05] tracking-tight"
              >
                Je conçois et développe
              </motion.h1>
            </div>
            <div className="overflow-hidden">
              <motion.h1
                initial={{ y: "100%" }}
                animate={{ y: 0 }}
                transition={{
                  duration: 0.8,
                  delay: 0.4,
                  ease: [0.25, 0.46, 0.45, 0.94],
                }}
                className="font-display text-5xl md:text-7xl lg:text-8xl font-semibold text-text-secondary leading-[1.05] tracking-tight"
              >
                des expériences
              </motion.h1>
            </div>
            <div className="overflow-hidden">
              <motion.h1
                initial={{ y: "100%" }}
                animate={{ y: 0 }}
                transition={{
                  duration: 0.8,
                  delay: 0.5,
                  ease: [0.25, 0.46, 0.45, 0.94],
                }}
                className="font-display text-5xl md:text-7xl lg:text-8xl font-semibold text-accent leading-[1.05] tracking-tight"
              >
                numériques.
              </motion.h1>
            </div>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.7 }}
              className="mt-8 text-text-secondary text-base md:text-lg max-w-xl leading-relaxed"
            >
              J&apos;accompagne les entreprises dans la création de sites
              vitrine, boutiques e-commerce et applications web sur mesure.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.9 }}
              className="mt-10 flex flex-wrap gap-4"
            >
              <Button href="/contact">Démarrer un projet</Button>
              <Button href="/projets" variant="outline">
                Voir mes réalisations
              </Button>
            </motion.div>
          </div>

          {/* Scroll indicator */}
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
        </div>
      </section>

      {/* ─── Services Preview ─── */}
      <section className="py-24 md:py-32 bg-bg-secondary">
        <div className="max-w-content mx-auto px-6 md:px-12">
          <SectionHeader
            number="01"
            title="Services"
            subtitle="Des solutions adaptées à chaque projet, de la vitrine au SaaS."
          />
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {services.map((service, i) => (
              <ServiceCard key={service.slug} service={service} index={i} />
            ))}
          </div>
        </div>
      </section>

      {/* ─── Featured Projects ─── */}
      <section className="py-24 md:py-32">
        <div className="max-w-content mx-auto px-6 md:px-12">
          <SectionHeader
            number="02"
            title="Projets sélectionnés"
            subtitle="Un aperçu de mes réalisations récentes."
          />
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {featuredProjects.map((project, i) => (
              <ProjectCard
                key={project.slug}
                project={project}
                index={i}
                featured
              />
            ))}
          </div>
          <div className="mt-12 text-center">
            <Button href="/projets" variant="outline">
              Tous les projets
            </Button>
          </div>
        </div>
      </section>

      {/* ─── Client Marquee ─── */}
      <section className="py-16 border-y border-border overflow-hidden">
        <div className="flex animate-marquee whitespace-nowrap">
          {[...carrousel, ...carrousel].map((item, i) => (
            <div
              key={i}
              className="flex-shrink-0 mx-12 md:mx-20 flex items-center"
            >
              <Image
                src={item.img}
                alt={item.name}
                width={140}
                height={50}
                className="h-8 md:h-10 w-auto object-contain opacity-40 hover:opacity-70 transition-opacity duration-300 grayscale"
              />
            </div>
          ))}
        </div>
      </section>

      {/* ─── CTA Final ─── */}
      <section className="py-24 md:py-32">
        <div className="max-w-content mx-auto px-6 md:px-12 text-center">
          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="font-display text-4xl md:text-6xl lg:text-7xl font-semibold text-text-primary"
          >
            Un projet en tête ?
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="mt-6 text-text-secondary text-lg max-w-md mx-auto"
          >
            Discutons de votre projet et trouvons ensemble la meilleure solution.
          </motion.p>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="mt-10"
          >
            <Button href="/contact">Parlons de votre projet</Button>
          </motion.div>
        </div>
      </section>

      <Footer />
    </>
  );
}
