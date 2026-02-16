import Image from "next/image";
import Navbar from "../components/ui/Navbar";
import Footer from "../components/ui/Footer";
import Button from "../components/ui/Button";
import {
  HeroLabel,
  RevealHeading,
  RevealH2,
  FadeUp,
  PhotoReveal,
  ScrollFadeUp,
  ScrollFadeScale,
  CTASection,
} from "../components/animations/AboutAnimations";
import { services } from "../lib/services";
import { FaGlobe, FaShoppingBag, FaCode } from "react-icons/fa";

const iconMap: Record<string, React.ComponentType<{ className?: string }>> = {
  globe: FaGlobe,
  "shopping-bag": FaShoppingBag,
  code: FaCode,
};

const experiences = [
  {
    period: "2025",
    title: "Sentinelle — Plateforme IA",
    description:
      "Conception et développement d'une plateforme d'intelligence artificielle prédictive pour la prévention des risques d'avalanche en montagne.",
  },
  {
    period: "2022",
    title: "IROC — Développement Full-Stack",
    description:
      "Mission freelance de développement full-stack pour une plateforme dédiée aux chercheurs. Nouvelles fonctionnalités front-end et back-end.",
  },
  {
    period: "2022",
    title: "Enedis — Système de gestion",
    description:
      "Conception d'un système de gestion de base de données pour le suivi des travaux sur Lyon Métropole.",
  },
  {
    period: "2022",
    title: "Hidden Hills Club — E-Commerce",
    description:
      "Refonte front-end du site e-commerce d'une marque lifestyle premium basée à Los Angeles.",
  },
];

const techStack = [
  "React",
  "Next.js",
  "TypeScript",
  "Tailwind CSS",
  "Node.js",
  "PostgreSQL",
  "Python",
  "Shopify",
  "Framer Motion",
  "Git",
  "Figma",
  "Vercel",
];

export default function AProposPage() {
  return (
    <>
      <Navbar />

      {/* Hero */}
      <section className="pt-32 pb-16 md:pt-40 md:pb-24">
        <div className="max-w-content mx-auto px-6 md:px-12">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
            <div>
              <HeroLabel />
              <div className="mt-4">
                <RevealHeading className="font-display text-4xl md:text-6xl font-semibold text-text-primary">
                  Robin Chabert
                </RevealHeading>
              </div>
              <RevealH2 className="font-display text-2xl md:text-4xl font-semibold text-text-secondary mt-2">
                Développeur Web Freelance
              </RevealH2>

              <FadeUp delay={0.5}>
                <p className="mt-8 text-text-secondary text-base leading-relaxed">
                  Passionné par le développement web et la création d&apos;expériences
                  numériques, j&apos;accompagne les entreprises dans la conception
                  et le développement de leurs projets digitaux. Mon approche
                  combine expertise technique et sens du design pour livrer des
                  solutions qui allient performance, esthétique et fonctionnalité.
                </p>
              </FadeUp>
              <FadeUp delay={0.6}>
                <p className="mt-4 text-text-secondary text-base leading-relaxed">
                  De la startup au grand groupe, je m&apos;adapte à chaque contexte
                  pour proposer des solutions sur mesure, allant du site vitrine à
                  l&apos;application web complexe.
                </p>
              </FadeUp>
              <FadeUp delay={0.7} className="mt-8">
                <Button href="/contact">Me contacter</Button>
              </FadeUp>
            </div>

            <PhotoReveal>
              <div className="relative aspect-[3/4] rounded-2xl overflow-hidden">
                <Image
                  src="/testmoi.jpg"
                  alt="Robin Chabert — Développeur Web Freelance"
                  fill
                  sizes="(max-width: 1024px) 100vw, 50vw"
                  quality={90}
                  className="object-cover"
                  priority
                />
              </div>
              {/* Decorative accent */}
              <div className="absolute -bottom-4 -right-4 w-24 h-24 border-2 border-accent/20 rounded-2xl -z-10" />
            </PhotoReveal>
          </div>
        </div>
      </section>

      {/* Expertise = 3 Services */}
      <section className="py-24 md:py-32 bg-bg-secondary">
        <div className="max-w-content mx-auto px-6 md:px-12">
          <ScrollFadeUp>
            <h2 className="font-display text-3xl md:text-5xl font-semibold text-text-primary mb-12">
              Domaines d&apos;expertise
            </h2>
          </ScrollFadeUp>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {services.map((service, i) => {
              const Icon = iconMap[service.icon] || FaCode;
              return (
                <ScrollFadeUp key={service.slug} delay={i * 0.1} className="p-8 rounded-2xl bg-bg-surface border border-border">
                  <div className="w-10 h-10 flex items-center justify-center rounded-lg bg-accent/10 text-accent mb-5">
                    <Icon className="w-4 h-4" />
                  </div>
                  <h3 className="font-display text-xl font-semibold text-text-primary mb-2">
                    {service.title}
                  </h3>
                  <p className="text-text-secondary text-sm leading-relaxed">
                    {service.subtitle}
                  </p>
                </ScrollFadeUp>
              );
            })}
          </div>
        </div>
      </section>

      {/* Experience Timeline */}
      <section className="py-24 md:py-32">
        <div className="max-w-content mx-auto px-6 md:px-12">
          <ScrollFadeUp>
            <h2 className="font-display text-3xl md:text-5xl font-semibold text-text-primary mb-12">
              Expérience
            </h2>
          </ScrollFadeUp>
          <div className="space-y-0">
            {experiences.map((exp, i) => (
              <ScrollFadeUp
                key={i}
                delay={i * 0.1}
                className="grid grid-cols-[80px_1fr] md:grid-cols-[120px_1fr] gap-6 py-8 border-b border-border"
              >
                <span className="text-accent font-display text-lg font-semibold">
                  {exp.period}
                </span>
                <div>
                  <h3 className="font-display text-lg md:text-xl font-semibold text-text-primary mb-2">
                    {exp.title}
                  </h3>
                  <p className="text-text-secondary text-sm leading-relaxed">
                    {exp.description}
                  </p>
                </div>
              </ScrollFadeUp>
            ))}
          </div>
        </div>
      </section>

      {/* Tech Stack */}
      <section className="py-24 md:py-32 bg-bg-secondary">
        <div className="max-w-content mx-auto px-6 md:px-12">
          <ScrollFadeUp>
            <h2 className="font-display text-3xl md:text-5xl font-semibold text-text-primary mb-12">
              Stack technique
            </h2>
          </ScrollFadeUp>
          <div className="flex flex-wrap gap-3">
            {techStack.map((tech, i) => (
              <ScrollFadeScale
                key={tech}
                delay={i * 0.03}
                className="px-5 py-2.5 text-sm font-medium bg-bg-surface border border-border rounded-full text-text-secondary hover:border-accent/30 hover:text-text-primary transition-all duration-300"
              >
                {tech}
              </ScrollFadeScale>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-24 md:py-32">
        <div className="max-w-content mx-auto px-6 md:px-12 text-center">
          <CTASection title="Travaillons ensemble">
            <Button href="/contact">Démarrer un projet</Button>
          </CTASection>
        </div>
      </section>

      <Footer />
    </>
  );
}
