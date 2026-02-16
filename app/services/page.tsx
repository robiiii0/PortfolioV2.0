import Navbar from "../components/ui/Navbar";
import Footer from "../components/ui/Footer";
import SectionHeader from "../components/ui/SectionHeader";
import Button from "../components/ui/Button";
import {
  HeroLabel,
  RevealHeading,
  FadeUp,
  SlideInLeft,
  SlideInRight,
  ScrollFadeUp,
  CTASection,
} from "../components/animations/ServicesAnimations";
import { services, processSteps } from "../lib/services";
import { projects } from "../lib/projects";
import { categoryLabels } from "../lib/projects";
import { FaGlobe, FaShoppingBag, FaCode, FaCheck } from "react-icons/fa";
import Link from "next/link";

const iconMap: Record<string, React.ComponentType<{ className?: string }>> = {
  globe: FaGlobe,
  "shopping-bag": FaShoppingBag,
  code: FaCode,
};

const serviceCategoryMap: Record<string, string> = {
  "site-vitrine": "vitrine",
  "e-commerce": "ecommerce",
  "logiciel-saas": "logiciel",
};

export default function ServicesPage() {
  return (
    <>
      <Navbar />

      {/* Hero */}
      <section className="pt-32 pb-16 md:pt-40 md:pb-24">
        <div className="max-w-content mx-auto px-6 md:px-12">
          <HeroLabel>Ce que je propose</HeroLabel>
          <RevealHeading className="font-display text-5xl md:text-7xl lg:text-8xl font-semibold text-text-primary">
            Mes Services
          </RevealHeading>
          <FadeUp delay={0.4} className="mt-6 text-text-secondary text-base md:text-lg max-w-2xl leading-relaxed">
            Du site vitrine à l&apos;application web complexe, je vous
            accompagne dans chaque étape de votre projet numérique.
          </FadeUp>
        </div>
      </section>

      {/* Service Blocks */}
      {services.map((service, i) => {
        const Icon = iconMap[service.icon] || FaCode;
        const category = serviceCategoryMap[service.slug];
        const relatedProjects = projects.filter(
          (p) => p.category === category
        );

        return (
          <section
            key={service.slug}
            className={`py-20 md:py-28 ${
              i % 2 === 0 ? "bg-bg-secondary" : "bg-bg-primary"
            }`}
          >
            <div className="max-w-content mx-auto px-6 md:px-12">
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20">
                {/* Left: Info */}
                <SlideInLeft>
                  <div className="flex items-center gap-4 mb-6">
                    <div className="w-12 h-12 flex items-center justify-center rounded-xl bg-accent/10 text-accent">
                      <Icon className="w-5 h-5" />
                    </div>
                    <span className="text-accent text-sm font-medium tracking-widest uppercase">
                      0{i + 1}
                    </span>
                  </div>
                  <h2 className="font-display text-3xl md:text-5xl font-semibold text-text-primary mb-3">
                    {service.title}
                  </h2>
                  <p className="text-accent text-base font-medium mb-6">
                    {service.subtitle}
                  </p>
                  <p className="text-text-secondary text-base leading-relaxed mb-8">
                    {service.description}
                  </p>
                  <Button href="/contact">Discuter de mon projet</Button>
                </SlideInLeft>

                {/* Right: Features + Related */}
                <SlideInRight>
                  <h3 className="font-display text-lg font-semibold text-text-primary mb-6">
                    Ce qui est inclus
                  </h3>
                  <ul className="space-y-4 mb-10">
                    {service.features.map((feature) => (
                      <li
                        key={feature}
                        className="flex items-start gap-3 text-text-secondary text-sm"
                      >
                        <FaCheck className="w-3 h-3 text-accent mt-1 flex-shrink-0" />
                        {feature}
                      </li>
                    ))}
                  </ul>

                  {relatedProjects.length > 0 && (
                    <div>
                      <h3 className="font-display text-lg font-semibold text-text-primary mb-4">
                        Projets liés
                      </h3>
                      <div className="space-y-3">
                        {relatedProjects.map((project) => (
                          <Link
                            key={project.slug}
                            href={`/projets/${project.slug}`}
                            className="flex items-center justify-between p-4 rounded-xl bg-bg-surface border border-border hover:border-accent/30 transition-all duration-300 group"
                          >
                            <span className="text-text-primary text-sm font-medium group-hover:text-accent transition-colors duration-300">
                              {project.client}
                            </span>
                            <span className="text-text-secondary text-xs">
                              {project.year} →
                            </span>
                          </Link>
                        ))}
                      </div>
                    </div>
                  )}
                </SlideInRight>
              </div>
            </div>
          </section>
        );
      })}

      {/* Process Section */}
      <section className="py-24 md:py-32">
        <div className="max-w-content mx-auto px-6 md:px-12">
          <SectionHeader
            number="04"
            title="Comment je travaille"
            subtitle="Un processus clair et structuré pour chaque projet."
            align="center"
          />
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mt-4">
            {processSteps.map((step, i) => (
              <ScrollFadeUp key={step.number} delay={i * 0.1} className="relative">
                <span className="font-display text-6xl font-bold text-border">
                  {step.number}
                </span>
                <h3 className="font-display text-xl font-semibold text-text-primary mt-4 mb-3">
                  {step.title}
                </h3>
                <p className="text-text-secondary text-sm leading-relaxed">
                  {step.description}
                </p>
              </ScrollFadeUp>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-24 md:py-32 bg-bg-secondary">
        <div className="max-w-content mx-auto px-6 md:px-12 text-center">
          <CTASection
            title="Prêt à démarrer ?"
            subtitle="Parlez-moi de votre projet et recevez une réponse sous 24h."
          >
            <Button href="/contact">Parlons de votre projet</Button>
          </CTASection>
        </div>
      </section>

      <Footer />
    </>
  );
}
