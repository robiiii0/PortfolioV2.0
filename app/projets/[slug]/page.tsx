import { notFound } from "next/navigation";
import Image from "next/image";
import Link from "next/link";
import Navbar from "@/app/components/ui/Navbar";
import Footer from "@/app/components/ui/Footer";
import Button from "@/app/components/ui/Button";
import {
  HeroBadge,
  HeroTitle,
  CoverImage,
  AnimatedSection,
  GalleryImage,
  CTASection,
} from "@/app/components/animations/ProjectDetailAnimations";
import { projects, getProjectBySlug, categoryLabels } from "@/app/lib/projects";

export function generateStaticParams() {
  return projects.map((p) => ({ slug: p.slug }));
}

export default async function ProjectDetailPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const project = getProjectBySlug(slug);

  if (!project) {
    notFound();
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
          <HeroBadge>
            <span className="px-3 py-1 text-xs font-medium bg-accent/10 text-accent rounded-full">
              {categoryLabels[project.category]}
            </span>
            <span className="text-text-secondary text-sm">
              {project.client} — {project.date}
            </span>
          </HeroBadge>

          <HeroTitle>{project.title}</HeroTitle>
        </div>
      </section>

      {/* Cover Image */}
      <section className="pb-16 md:pb-24">
        <div className="max-w-site mx-auto px-6 md:px-12">
          <CoverImage src={project.imgCover} alt={project.title} />
        </div>
      </section>

      {/* Content: 2-Column Layout */}
      <section className="py-16 md:py-24">
        <div className="max-w-content mx-auto px-6 md:px-12">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12 lg:gap-20">
            {/* Left: Narrative */}
            <div className="lg:col-span-2 space-y-12">
              <AnimatedSection>
                <h2 className="font-display text-2xl md:text-3xl font-semibold text-text-primary mb-4">
                  Le défi
                </h2>
                <p className="text-text-secondary text-base leading-relaxed">
                  {project.challenge}
                </p>
              </AnimatedSection>

              <AnimatedSection>
                <h2 className="font-display text-2xl md:text-3xl font-semibold text-text-primary mb-4">
                  La solution
                </h2>
                <p className="text-text-secondary text-base leading-relaxed">
                  {project.solution}
                </p>
              </AnimatedSection>
            </div>

            {/* Right: Details sidebar */}
            <AnimatedSection delay={0.2} className="space-y-8">
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
            </AnimatedSection>
          </div>
        </div>
      </section>

      {/* Image Gallery */}
      {project.imgArray.length > 1 && (
        <section className="py-16 md:py-24 bg-bg-secondary">
          <div className="max-w-site mx-auto px-6 md:px-12">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {project.imgArray.map((img, i) => (
                <GalleryImage
                  key={i}
                  src={img}
                  alt={`${project.client} - Image ${i + 1}`}
                  index={i}
                  className={
                    i === 0
                      ? "md:col-span-2"
                      : ""
                  }
                />
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
          <CTASection title="Un projet similaire ?">
            <Button href="/contact">Discutons de votre projet</Button>
          </CTASection>
        </div>
      </section>

      <Footer />
    </>
  );
}
