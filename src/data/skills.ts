// ---------------------------------------------------------------------------
// SKILLS DATA
// Grouped skill categories rendered in the Skills section.
// Add / remove items freely — the UI maps over these automatically.
// ---------------------------------------------------------------------------

export interface SkillGroup {
  title: string;
  /** Short helper line shown under the group title */
  tagline: string;
  /** Emoji / icon glyph for the card header */
  icon: string;
  skills: string[];
}

export const skillGroups: SkillGroup[] = [
  {
    title: "Frontend",
    tagline: "Building fast, accessible, pixel-perfect interfaces",
    icon: "🎨",
    skills: [
      "React.js",
      "Next.js",
      "TypeScript",
      "JavaScript",
      "Tailwind CSS",
      "Bootstrap",
      "HTML5",
      "CSS3",
    ],
  },
  {
    title: "Backend",
    tagline: "APIs and server logic that scale",
    icon: "⚙️",
    skills: ["Node.js", "Express.js", "REST APIs", "Prisma"],
  },
  {
    title: "Database",
    tagline: "Modeling and querying relational data",
    icon: "🗄️",
    skills: ["MySQL", "PostgreSQL", "SQL"],
  },
  {
    title: "Platforms",
    tagline: "Shipping real client websites",
    icon: "🚀",
    skills: ["WordPress", "Shopify", "GoHighLevel", "cPanel"],
  },
  {
    title: "Tools",
    tagline: "Daily development workflow",
    icon: "🛠️",
    skills: ["Git", "GitHub", "VS Code", "Figma"],
  },
  {
    title: "AI-Assisted Development",
    tagline: "Building faster with AI in the loop",
    icon: "🤖",
    skills: ["Claude Code", "Codex", "Cursor"],
  },
];
