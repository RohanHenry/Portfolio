// ---------------------------------------------------------------------------
// MORE PROJECTS DATA
// These show up in the "Explore More Projects" pop-up modal (NOT GitHub).
//
// 👉 HOW TO ADD A PROJECT:
//    1. Take a screenshot of the live site (the homepage / front page).
//    2. Save it in /public/screenshots/  (e.g. hostel-website-1.png)
//    3. Add an entry below with title, description, the live URL, and image.
//
// Until you add a real `image`, a gradient placeholder is shown automatically.
// ---------------------------------------------------------------------------

export interface MoreProject {
  title: string;
  description: string;
  /** Tech / tags shown as small chips */
  tags: string[];
  // 👉 LIVE URL — opens in a new tab (does NOT redirect away from the modal)
  liveUrl: string;
  /** Front-page screenshot, e.g. "/screenshots/hostel-website-1.png" */
  image?: string;
  /** Fallback gradient when no image is set */
  accent: string;
}

export const moreProjects: MoreProject[] = [
  // ---- EXAMPLE / PLACEHOLDER ENTRIES — replace with your real Vercel sites ----
  {
    title: "Hostel Website",
    description:
      "A modern, responsive hostel/accommodation website with room listings, booking enquiry, and a clean marketing layout.",
    tags: ["Next.js", "React", "Tailwind CSS"],
    liveUrl: "#", // 👉 paste the Vercel live URL of this hostel site
    // image: "/screenshots/hostel-website-1.png", // 👉 add the front-page screenshot
    accent: "from-amber-400 via-orange-500 to-rose-500",
  },
  {
    title: "Hostel Website 2",
    description:
      "A second hostel website build with an updated design system, gallery, and contact/enquiry flow.",
    tags: ["Next.js", "Tailwind CSS"],
    liveUrl: "#", // 👉 paste the Vercel live URL of this hostel site
    // image: "/screenshots/hostel-website-2.png", // 👉 add the front-page screenshot
    accent: "from-sky-400 via-blue-500 to-indigo-500",
  },
  {
    title: "Another Project",
    description:
      "Short description of another project you've deployed. Duplicate this block for each additional project you want to showcase.",
    tags: ["React", "JavaScript"],
    liveUrl: "#", // 👉 paste the live URL
    // image: "/screenshots/another-project.png",
    accent: "from-emerald-400 via-teal-500 to-cyan-500",
  },
];
