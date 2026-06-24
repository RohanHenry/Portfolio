"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import type { Project } from "@/data/projects";

// ---------------------------------------------------------------------------
// ProjectCard
// Premium, clickable project card used in the Projects grid.
// Renders Live Demo / GitHub / Case Study buttons based on the project data.
// ---------------------------------------------------------------------------

interface ProjectCardProps {
  project: Project;
  index: number;
}

export default function ProjectCard({ project, index }: ProjectCardProps) {
  return (
    <motion.article
      initial={{ opacity: 0, y: 28 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-60px" }}
      transition={{ duration: 0.55, delay: index * 0.1 }}
      whileHover={{ y: -6 }}
      className="glass glass-hover group flex flex-col overflow-hidden"
    >
      {/* Thumbnail / placeholder banner */}
      {/* 👉 SCREENSHOT: replace this gradient block with a <Image> once you add
          a project thumbnail to /public/screenshots/ */}
      <div
        className={`relative h-44 overflow-hidden bg-gradient-to-br ${project.accent}`}
      >
        <div className="absolute inset-0 bg-grid-faint [background-size:24px_24px] opacity-30" />
        <div className="absolute inset-0 flex items-center justify-center">
          <span className="text-5xl font-black text-white/90 drop-shadow-lg">
            {project.title
              .split(" ")
              .slice(0, 2)
              .map((w) => w[0])
              .join("")}
          </span>
        </div>
        <span className="absolute bottom-3 left-3 rounded-md bg-black/30 px-2 py-1 text-[10px] font-medium uppercase tracking-wider text-white/80 backdrop-blur">
          Project Preview
        </span>
      </div>

      {/* Body */}
      <div className="flex flex-1 flex-col p-6">
        <h3 className="text-lg font-bold text-white transition-colors group-hover:text-gradient">
          {project.title}
        </h3>
        <p className="mt-1 text-xs font-medium text-brand-via">
          {project.tagline}
        </p>
        <p className="mt-3 text-sm leading-relaxed text-slate-400">
          {project.description}
        </p>

        {/* Tech stack */}
        <div className="mt-4 flex flex-wrap gap-1.5">
          {project.techStack.map((tech) => (
            <span key={tech} className="chip text-[11px]">
              {tech}
            </span>
          ))}
        </div>

        {/* Key features (first four) */}
        <ul className="mt-4 grid grid-cols-1 gap-1.5 sm:grid-cols-2">
          {project.features.slice(0, 4).map((f) => (
            <li
              key={f}
              className="flex items-center gap-2 text-xs text-slate-400"
            >
              <span className="h-1.5 w-1.5 flex-none rounded-full bg-brand-to" />
              {f}
            </li>
          ))}
        </ul>

        {/* Buttons */}
        <div className="mt-6 flex flex-wrap gap-2 pt-2">
          {/* 👉 LINK: live demo URL is set in src/data/projects.ts (liveUrl) */}
          <a
            href={project.liveUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="btn-primary px-4 py-2 text-xs"
          >
            Live Demo
          </a>
          {/* 👉 LINK: GitHub URL is set in src/data/projects.ts (githubUrl) */}
          <a
            href={project.githubUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="btn-ghost px-4 py-2 text-xs"
          >
            GitHub
          </a>
          {project.hasCaseStudy && (
            <Link
              href={`/projects/${project.slug}`}
              className="btn-ghost px-4 py-2 text-xs"
            >
              Case Study →
            </Link>
          )}
        </div>
      </div>
    </motion.article>
  );
}
