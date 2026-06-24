import type { Metadata } from "next";
import { notFound } from "next/navigation";
import CaseStudy from "@/components/CaseStudy";
import { getProjectBySlug } from "@/data/projects";

const SLUG = "saas-customer-support-dashboard";

export const metadata: Metadata = {
  title: "SaaS Customer Support Dashboard",
  description:
    "Case study: a production-style SaaS customer support platform with JWT auth, role-based access control, ticket management, analytics, and an audit trail. Built with Next.js, TypeScript, Node.js, Express, Prisma & MySQL.",
};

export default function Page() {
  const project = getProjectBySlug(SLUG);
  if (!project) return notFound();
  return <CaseStudy project={project} />;
}
