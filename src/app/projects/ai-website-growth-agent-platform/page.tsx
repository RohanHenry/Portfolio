import type { Metadata } from "next";
import { notFound } from "next/navigation";
import CaseStudy from "@/components/CaseStudy";
import { getProjectBySlug } from "@/data/projects";

const SLUG = "ai-website-growth-agent-platform";

export const metadata: Metadata = {
  title: "AI Website Growth Agent Platform",
  description:
    "Case study: an AI-powered SaaS platform that generates landing page content with editing, live preview, regeneration, and HTML export. Built with Next.js, TypeScript, Prisma & PostgreSQL.",
};

export default function Page() {
  const project = getProjectBySlug(SLUG);
  if (!project) return notFound();
  return <CaseStudy project={project} />;
}
