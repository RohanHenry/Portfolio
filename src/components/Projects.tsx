import SectionHeading from "./SectionHeading";
import ProjectCard from "./ProjectCard";
import { projects } from "@/data/projects";

// ---------------------------------------------------------------------------
// Projects
// The most important section — a grid of premium project cards.
// ---------------------------------------------------------------------------

export default function Projects() {
  return (
    <section id="projects" className="mx-auto max-w-6xl px-4 py-24 sm:px-6">
      <SectionHeading
        eyebrow="Featured Projects"
        title="Things I've designed & built"
        subtitle="Production-style applications showcasing full-stack and AI-powered engineering."
      />

      <div className="mt-14 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        {projects.map((project, i) => (
          <ProjectCard key={project.slug} project={project} index={i} />
        ))}
      </div>
    </section>
  );
}
