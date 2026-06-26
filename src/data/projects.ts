// ---------------------------------------------------------------------------
// PROJECTS DATA
// Single source of truth for the Projects section AND the case study pages.
//
// 👉 TO REPLACE LINKS LATER:
//    - Update `liveUrl` and `githubUrl` for each project below.
//    - Use "#" as a placeholder if a link isn't ready yet (button still renders).
//
// 👉 TO ADD SCREENSHOTS:
//    - Drop images into /public/screenshots/ and reference them in `screenshots`.
//    - Until then, the case study pages render styled placeholder boxes.
// ---------------------------------------------------------------------------

export interface Project {
  /** URL-safe id used for the case study route: /projects/[slug] */
  slug: string;
  title: string;
  tagline: string;
  description: string;
  techStack: string[];
  features: string[];
  // TODO: Replace with your real deployed URL
  liveUrl: string;
  // TODO: Replace with your real GitHub repo URL
  githubUrl: string;
  /** Whether a dedicated /projects/[slug] case study page exists */
  hasCaseStudy: boolean;
  /** Accent gradient used on the card thumbnail (fallback when no image) */
  accent: string;
  /**
   * Card thumbnail screenshot.
   * 👉 Drop the image in /public/screenshots/ and set the path here, e.g.
   *    image: "/screenshots/saas-customer-support-dashboard.png"
   * Leave undefined to show the gradient + initials placeholder.
   */
  image?: string;

  // ---- Case study only fields (optional for projects without a page) ----
  caseStudy?: {
    overview: string;
    problem: string;
    solution: string;
    architecture: string[];
    challenges: { title: string; body: string }[];
    learnings: string[];
    // TODO: Add screenshot paths e.g. "/screenshots/dashboard-1.png"
    screenshots: { src?: string; caption: string }[];
  };
}

export const projects: Project[] = [
  {
    slug: "saas-customer-support-dashboard",
    title: "SaaS Customer Support Dashboard",
    tagline: "Production-style support platform with RBAC & analytics",
    description:
      "A production-style SaaS customer support platform with authentication, role-based access control, ticket management, analytics, search, filtering, sorting, pagination, and audit trail functionality.",
    techStack: [
      "Next.js",
      "React",
      "TypeScript",
      "Tailwind CSS",
      "Node.js",
      "Express",
      "Prisma",
      "MySQL",
    ],
    features: [
      "JWT authentication",
      "Role-based access control",
      "Ticket CRUD",
      "Analytics dashboard",
      "Search, filter, sort, and pagination",
      "Audit trail",
      "Responsive UI",
      "Type-safe forms with React Hook Form and Zod",
    ],
    liveUrl: "https://saa-s-customer-support-dashboard.vercel.app",
    githubUrl: "https://github.com/RohanHenry/SaaS-Customer-Support-Dashboard",
    hasCaseStudy: true,
    accent: "from-indigo-500 via-violet-500 to-cyan-400",
    // 👉 Screenshot file: save it as public/screenshots/saas-customer-support-dashboard.png
    //    (falls back to the gradient automatically until the file exists)
    image: "/screenshots/saas-customer-support-dashboard.png",
    caseStudy: {
      overview:
        "A full-stack SaaS support platform that mirrors the workflows real support teams use every day. Agents triage and resolve tickets, managers monitor performance through an analytics dashboard, and every privileged action is recorded in an audit trail. The project was built to demonstrate end-to-end product engineering — from a type-safe data layer to a polished, responsive interface.",
      problem:
        "Support teams need a single place to manage incoming tickets, enforce who can do what, and prove what happened after the fact. Off-the-shelf tools are often heavy and inflexible, while naive internal builds skip critical concerns like access control, auditability, and data integrity. The goal was to build a focused platform that takes these production concerns seriously.",
      solution:
        "I designed a role-based system (Admin, Agent, Viewer) backed by JWT authentication, with a normalized relational schema managed through Prisma. The frontend uses Next.js App Router with type-safe forms validated by Zod, while server-side endpoints handle search, filtering, sorting, and pagination so the UI stays fast even with large ticket volumes. Every create/update/delete on sensitive resources writes an immutable audit log entry.",
      architecture: [
        "Next.js (App Router) frontend with server and client components for an optimal data-fetching boundary.",
        "Express/Node.js API layer exposing REST endpoints for auth, tickets, users, and analytics.",
        "Prisma ORM over MySQL with a normalized schema (Users, Roles, Tickets, AuditLogs) and indexed columns for fast filtering.",
        "JWT-based auth with middleware that enforces role-based access control on every protected route.",
        "React Hook Form + Zod for end-to-end type-safe, validated forms shared between client and server.",
        "Server-driven pagination, sorting, and filtering to keep payloads small and the table responsive.",
      ],
      challenges: [
        {
          title: "Enforcing access control consistently",
          body: "Rather than scattering permission checks across the UI, I centralized authorization in API middleware so the rules live in one place. The frontend then conditionally renders actions based on the same role claims, keeping client and server in agreement.",
        },
        {
          title: "Keeping large ticket lists fast",
          body: "Filtering, sorting, and pagination are handled on the server with indexed queries, so the client only ever fetches a single page. This kept the dashboard snappy regardless of how many tickets exist.",
        },
        {
          title: "Trustworthy audit trails",
          body: "Audit entries are written in the same transaction as the action they describe, so a log can never drift out of sync with the underlying data.",
        },
      ],
      learnings: [
        "How to model role-based access control cleanly and enforce it from a single source of truth.",
        "Designing REST endpoints that push pagination and filtering to the database instead of the client.",
        "Using Prisma transactions to keep audit logs perfectly consistent with the data they track.",
        "Sharing Zod schemas across client and server to eliminate an entire class of validation bugs.",
      ],
      screenshots: [
        { caption: "Analytics dashboard overview" }, // TODO: add { src: "/screenshots/support-dashboard.png" }
        { caption: "Ticket list with search, filter & pagination" },
        { caption: "Ticket detail with audit trail" },
      ],
    },
  },
  {
    slug: "ai-website-growth-agent-platform",
    title: "AI Website Growth Agent Platform",
    tagline: "Generate, edit, preview & export AI landing pages",
    description:
      "An AI-powered SaaS platform that generates landing page content, saves generated pages, supports editing, live preview, regeneration, and HTML export.",
    techStack: ["Next.js", "TypeScript", "Prisma", "PostgreSQL"],
    features: [
      "AI-generated landing page content",
      "Dashboard with saved page cards",
      "Search and filtering",
      "Editable content",
      "Live preview rendering",
      "Regeneration endpoint",
      "HTML export",
      "Deployment-ready architecture",
    ],
    // 👉 TODO: this repo has no live URL on GitHub — paste your Vercel live link here.
    liveUrl: "#",
    githubUrl: "https://github.com/RohanHenry/AI-Growth-Agent-Platform",
    hasCaseStudy: true,
    accent: "from-cyan-400 via-sky-500 to-violet-500",
    // 👉 Screenshot file: save it as public/screenshots/ai-website-growth-agent-platform.png
    //    (falls back to the gradient automatically until the file exists)
    image: "/screenshots/ai-website-growth-agent-platform.png",
    caseStudy: {
      overview:
        "An AI-powered SaaS tool that helps marketers and founders spin up landing page copy in seconds. Users describe their product, the platform generates structured landing page content, and they can then edit, preview it live, regenerate sections, and export production-ready HTML — all from a clean dashboard of saved pages.",
      problem:
        "Writing high-converting landing page copy is slow and intimidating for non-writers, and most AI tools stop at a one-off text blob. There was an opportunity to build a complete workflow: generate, persist, refine, preview, and ship — so the AI output becomes something you can actually use.",
      solution:
        "I built a Next.js application backed by Prisma and PostgreSQL where each generated page is a first-class, persisted entity. Users manage their pages from a searchable dashboard, edit content inline, see a live preview that renders exactly what they'll ship, trigger a regeneration endpoint when they want fresh copy, and export clean HTML when they're done.",
      architecture: [
        "Next.js (App Router) with TypeScript for both the UI and the API route handlers.",
        "Prisma ORM over PostgreSQL persisting generated pages, their content blocks, and metadata.",
        "A generation endpoint that takes a structured prompt and returns landing page content saved to the database.",
        "A regeneration endpoint that refreshes content for an existing page while preserving its identity.",
        "Live preview rendering that maps stored content to the final page layout in real time.",
        "An HTML export pipeline that serializes a page into clean, deployable markup.",
      ],
      challenges: [
        {
          title: "Making AI output editable, not disposable",
          body: "Instead of treating generated text as a throwaway response, I modeled pages as structured, persisted records so users can return, edit, and regenerate without losing their work.",
        },
        {
          title: "A live preview that matches the export",
          body: "The same content model drives both the in-app live preview and the HTML export, so what users see is exactly what they ship — no surprises between preview and output.",
        },
        {
          title: "Designing a deployment-ready architecture",
          body: "I kept the data layer and generation logic cleanly separated so the platform can scale and the export step stays a thin, predictable transformation.",
        },
      ],
      learnings: [
        "How to turn raw AI generations into structured, persistent, editable product data.",
        "Designing generation and regeneration endpoints that are idempotent and safe to retry.",
        "Building a single content model that powers both live preview and final HTML export.",
        "Modeling a SaaS data layer in Prisma + PostgreSQL with deployment in mind.",
      ],
      screenshots: [
        { caption: "Dashboard of saved AI-generated pages" }, // TODO: add { src: "/screenshots/growth-agent.png" }
        { caption: "Content editor with live preview" },
        { caption: "HTML export view" },
      ],
    },
  },
  {
    slug: "ai-chat-bot",
    title: "AI Chat Bot",
    tagline: "Responsive real-time AI chat with the puter.ai API",
    description:
      "A responsive AI-powered chat application with real-time user interactions, API-generated responses, loading states, input validation, smooth scrolling, reusable components, and mobile-friendly layouts.",
    techStack: ["React.js", "Tailwind CSS", "JavaScript", "Vite", "puter.ai API"],
    features: [
      "Third-party AI API integration",
      "Dynamic prompt/response flow",
      "Loading states",
      "Input validation",
      "Async state management",
      "Smooth scrolling",
      "Reusable React components",
      "Responsive UI",
    ],
    liveUrl: "https://ai-chat-bot-sandy-tau.vercel.app",
    githubUrl: "https://github.com/RohanHenry/AI-Chat-Bot",
    hasCaseStudy: false,
    accent: "from-emerald-400 via-teal-500 to-cyan-500",
    // 👉 Screenshot file: save it as public/screenshots/ai-chat-bot.png
    //    (falls back to the gradient automatically until the file exists)
    image: "/screenshots/ai-chat-bot.png",
  },
];

/** Helper: look up a single project by its slug (used by case study pages). */
export function getProjectBySlug(slug: string): Project | undefined {
  return projects.find((p) => p.slug === slug);
}
