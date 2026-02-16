import Image from "next/image";
import Navbar from "./components/ui/Navbar";
import Footer from "./components/ui/Footer";
import SectionHeader from "./components/ui/SectionHeader";
import ProjectCard from "./components/ui/ProjectCard";
import ServiceCard from "./components/ui/ServiceCard";
import Button from "./components/ui/Button";
import {
  HeroSubtitle,
  HeroHeading,
  HeroDescription,
  HeroCTA,
  ScrollIndicator,
  CTASection,
} from "./components/animations/HomeAnimations";
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
            <HeroSubtitle />

            <HeroHeading delay={0.3} className="text-text-primary">
              Je conçois et développe
            </HeroHeading>
            <HeroHeading delay={0.4} className="text-text-secondary">
              des expériences
            </HeroHeading>
            <HeroHeading delay={0.5} className="text-accent">
              numériques.
            </HeroHeading>

            <HeroDescription>
              J&apos;accompagne les entreprises dans la création de sites
              vitrine, boutiques e-commerce et applications web sur mesure.
            </HeroDescription>

            <HeroCTA>
              <Button href="/contact">Démarrer un projet</Button>
              <Button href="/projets" variant="outline">
                Voir mes réalisations
              </Button>
            </HeroCTA>
          </div>

          {/* Scroll indicator */}
          <ScrollIndicator />
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
          <CTASection
            title="Un projet en tête ?"
            subtitle="Discutons de votre projet et trouvons ensemble la meilleure solution."
          >
            <Button href="/contact">Parlons de votre projet</Button>
          </CTASection>
        </div>
      </section>

      <Footer />
    </>
  );
}
