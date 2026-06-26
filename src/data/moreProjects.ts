// ---------------------------------------------------------------------------
// MORE PROJECTS DATA
// Shown in the "Explore More Projects" pop-up modal.
// Sourced from your GitHub (github.com/RohanHenry) — the 3 featured projects
// live in projects.ts and are intentionally not duplicated here.
//
// 👉 TO ADD A SCREENSHOT: save the live site's front page as an image in
//    /public/screenshots/ and set `image` below. Until then a gradient shows.
// 👉 liveUrl  = deployed site (opens in a new tab; primary "Live Demo" button)
// 👉 repoUrl  = GitHub repo (optional "View Code" button — remove if unwanted)
// ---------------------------------------------------------------------------

export interface MoreProject {
  title: string;
  description: string;
  /** Tech / tags shown as small chips */
  tags: string[];
  /** Deployed site — shows a "Live Demo" button when set */
  liveUrl?: string;
  /** GitHub repo — shows a "View Code" button when set */
  repoUrl?: string;
  /** Front-page screenshot, e.g. "/screenshots/swoley-fit.png" */
  image?: string;
  /** Fallback gradient when no image is set */
  accent: string;
}

export const moreProjects: MoreProject[] = [
  {
    title: "Swoley Fit",
    description:
      "A fitness app that lets users pick target muscle groups and training types (strength, hypertrophy) to generate customized workouts, with set tracking for structured routines.",
    tags: ["React", "Tailwind CSS", "JavaScript"],
    liveUrl: "https://swoley-fit-sigma.vercel.app",
    repoUrl: "https://github.com/RohanHenry/Swoley-fit",
    // image: "/screenshots/swoley-fit.png",
    accent: "from-orange-400 via-rose-500 to-red-500",
  },
  {
    title: "E-Commerce Website",
    description:
      "A responsive e-commerce site for sneakers and fashion, featuring product listings, shopping pages, cart interactions, navigation, and promotional sections.",
    tags: ["HTML5", "CSS3", "JavaScript"],
    // No live URL yet — add one here once deployed.
    repoUrl: "https://github.com/RohanHenry/E-commece-website",
    // image: "/screenshots/ecommerce-website.png",
    accent: "from-amber-400 via-orange-500 to-pink-500",
  },
  {
    title: "Agentic Security Platform",
    description:
      "An AI-powered security log analysis API with risk scoring, suspicious-activity detection, incident reports, SQLite storage, and multi-agent threat investigation.",
    tags: ["Python", "FastAPI", "AI Agents"],
    repoUrl: "https://github.com/RohanHenry/agentic-security-platform",
    // image: "/screenshots/agentic-security-platform.png",
    accent: "from-slate-400 via-slate-500 to-indigo-500",
  },
  {
    title: "NASA Astronomy Picture of the Day",
    description:
      "A React app that fetches NASA's APOD via their public API, displaying the daily image with details, a toggleable info sidebar, and a clean responsive UI.",
    tags: ["React", "JavaScript", "REST API"],
    repoUrl: "https://github.com/RohanHenry/NASA-s-Astronomy-Picture-of-the-Day",
    // image: "/screenshots/nasa-apod.png",
    accent: "from-sky-400 via-blue-500 to-indigo-600",
  },
];
