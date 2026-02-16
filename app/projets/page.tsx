import Navbar from "../components/ui/Navbar";
import Footer from "../components/ui/Footer";
import Button from "../components/ui/Button";
import ProjectsFilterClient from "../components/animations/ProjectsFilterClient";
import {
  HeroLabel,
  RevealHeading,
  CTASection,
} from "../components/animations/ServicesAnimations";
import { projects } from "../lib/projects";

export default function ProjetsPage() {
  const years = projects.map((p) => p.year);
  const minYear = Math.min(...years);
  const maxYear = Math.max(...years);

  return (
    <>
      <Navbar />

      {/* Hero */}
      <section className="pt-32 pb-8 md:pt-40 md:pb-12">
        <div className="max-w-content mx-auto px-6 md:px-12">
          <HeroLabel>Réalisations</HeroLabel>
          <RevealHeading className="font-display text-5xl md:text-7xl lg:text-8xl font-semibold text-text-primary">
            Projets
          </RevealHeading>
          <RevealHeading
            delay={0.2}
            className="font-display text-3xl md:text-5xl lg:text-6xl font-semibold text-text-secondary"
          >
            ({minYear} — {maxYear})
          </RevealHeading>
        </div>
      </section>

      <ProjectsFilterClient projects={projects} />

      {/* CTA */}
      <section className="py-24 md:py-32 bg-bg-secondary">
        <div className="max-w-content mx-auto px-6 md:px-12 text-center">
          <CTASection
            title="Un projet similaire ?"
            subtitle="Parlons-en et trouvons la meilleure approche pour votre projet."
          >
            <Button href="/contact">Démarrer un projet</Button>
          </CTASection>
        </div>
      </section>

      <Footer />
    </>
  );
}
