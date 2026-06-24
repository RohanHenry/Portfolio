import Link from "next/link";
import Navbar from "./Navbar";
import Footer from "./Footer";
import Reveal from "./Reveal";
import type { Project } from "@/data/projects";

// ---------------------------------------------------------------------------
// CaseStudy
// Reusable detail layout shared by every /projects/[slug] page.
// Renders overview, problem, solution, features, tech stack, architecture,
// screenshot placeholders, challenges, learnings, and CTAs.
// ---------------------------------------------------------------------------

export default function CaseStudy({ project }: { project: Project }) {
  const cs = project.caseStudy;
  if (!cs) return null;

  return (
    <>
      <Navbar />
      <main className="mx-auto max-w-4xl px-4 pb-24 pt-32 sm:px-6 sm:pt-40">
        {/* Back link */}
        <Link
          href="/#projects"
          className="text-sm text-slate-400 transition-colors hover:text-white"
        >
          ← Back to projects
        </Link>

        {/* Header */}
        <Reveal className="mt-6">
          <span className="chip mb-4 uppercase tracking-widest text-brand-via">
            Case Study
          </span>
          <h1 className="text-4xl font-bold tracking-tight text-white sm:text-5xl">
            {project.title}
          </h1>
          <p className="mt-3 text-lg text-slate-400">{project.tagline}</p>

          {/* CTAs */}
          <div className="mt-6 flex flex-wrap gap-3">
            {/* 👉 LINK: set liveUrl / githubUrl in src/data/projects.ts */}
            <a
              href={project.liveUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-primary"
            >
              Live Demo
            </a>
            <a
              href={project.githubUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-ghost"
            >
              GitHub
            </a>
          </div>
        </Reveal>

        {/* Tech stack */}
        <Reveal className="mt-10">
          <div className="flex flex-wrap gap-2">
            {project.techStack.map((t) => (
              <span key={t} className="chip">
                {t}
              </span>
            ))}
          </div>
        </Reveal>

        {/* Overview / Problem / Solution */}
        <Section title="Overview">
          <p>{cs.overview}</p>
        </Section>

        <div className="mt-6 grid gap-6 md:grid-cols-2">
          <Reveal className="glass glass-hover p-6">
            <h3 className="mb-3 text-sm font-semibold uppercase tracking-widest text-rose-300">
              The Problem
            </h3>
            <p className="text-sm leading-relaxed text-slate-400">
              {cs.problem}
            </p>
          </Reveal>
          <Reveal delay={0.1} className="glass glass-hover p-6">
            <h3 className="mb-3 text-sm font-semibold uppercase tracking-widest text-emerald-300">
              The Solution
            </h3>
            <p className="text-sm leading-relaxed text-slate-400">
              {cs.solution}
            </p>
          </Reveal>
        </div>

        {/* Core features */}
        <Section title="Core Features">
          <ul className="grid gap-3 sm:grid-cols-2">
            {project.features.map((f) => (
              <li
                key={f}
                className="glass flex items-center gap-3 p-3 text-sm text-slate-300"
              >
                <span className="flex h-5 w-5 flex-none items-center justify-center rounded-full bg-gradient-to-br from-brand-from to-brand-to text-[10px] text-white">
                  ✓
                </span>
                {f}
              </li>
            ))}
          </ul>
        </Section>

        {/* Architecture */}
        <Section title="Architecture">
          <ul className="space-y-3">
            {cs.architecture.map((a) => (
              <li key={a} className="flex items-start gap-3">
                <span className="mt-1.5 h-1.5 w-1.5 flex-none rounded-full bg-brand-to" />
                <span className="text-sm leading-relaxed text-slate-400">
                  {a}
                </span>
              </li>
            ))}
          </ul>
        </Section>

        {/* Screenshots */}
        <Section title="Screenshots">
          {/* 👉 SCREENSHOTS: add images to /public/screenshots/ and set the
              `src` in src/data/projects.ts. Until then, these are placeholders. */}
          <div className="grid gap-5 sm:grid-cols-2">
            {cs.screenshots.map((shot, i) => (
              <Reveal key={i} delay={i * 0.08}>
                <figure className="glass glass-hover overflow-hidden">
                  {shot.src ? (
                    // eslint-disable-next-line @next/next/no-img-element
                    <img
                      src={shot.src}
                      alt={shot.caption}
                      className="h-52 w-full object-cover"
                    />
                  ) : (
                    <div className="flex h-52 w-full items-center justify-center bg-gradient-to-br from-white/[0.06] to-white/[0.01]">
                      <div className="text-center">
                        <div className="text-3xl">🖼️</div>
                        <p className="mt-2 text-xs text-slate-500">
                          Screenshot placeholder
                        </p>
                      </div>
                    </div>
                  )}
                  <figcaption className="border-t border-white/10 px-4 py-3 text-xs text-slate-400">
                    {shot.caption}
                  </figcaption>
                </figure>
              </Reveal>
            ))}
          </div>
        </Section>

        {/* Challenges */}
        <Section title="Challenges Solved">
          <div className="space-y-4">
            {cs.challenges.map((c, i) => (
              <Reveal key={c.title} delay={i * 0.06} className="glass glass-hover p-6">
                <h3 className="font-semibold text-white">{c.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-slate-400">
                  {c.body}
                </p>
              </Reveal>
            ))}
          </div>
        </Section>

        {/* Learnings */}
        <Section title="What I Learned">
          <ul className="space-y-3">
            {cs.learnings.map((l) => (
              <li key={l} className="flex items-start gap-3">
                <span className="mt-0.5 text-brand-via">★</span>
                <span className="text-sm leading-relaxed text-slate-400">
                  {l}
                </span>
              </li>
            ))}
          </ul>
        </Section>

        {/* Bottom CTA */}
        <Reveal className="mt-14 flex flex-wrap justify-center gap-3">
          <a
            href={project.liveUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="btn-primary"
          >
            View Live Demo
          </a>
          <a
            href={project.githubUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="btn-ghost"
          >
            View on GitHub
          </a>
        </Reveal>
      </main>
      <Footer />
    </>
  );
}

// Small internal helper for consistent section spacing + heading
function Section({
  title,
  children,
}: {
  title: string;
  children: React.ReactNode;
}) {
  return (
    <section className="mt-12">
      <Reveal>
        <h2 className="mb-5 text-2xl font-bold text-white">{title}</h2>
      </Reveal>
      <Reveal delay={0.05}>{children}</Reveal>
    </section>
  );
}
