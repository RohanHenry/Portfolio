// ---------------------------------------------------------------------------
// SITE CONFIG
// Central place for personal info, links, and navigation.
// 👉 Update the URLs below once with your real links.
// ---------------------------------------------------------------------------

export const site = {
  name: "Rohan Henry Richard Saminathan",
  shortName: "Rohan Henry",
  role: "Frontend & Full-Stack Developer",
  location: "Pleasanton, CA",
  email: "rohanhenryrichardsaminathan@gmail.com",
  // TODO: confirm these are your final profile URLs
  github: "https://github.com/RohanHenry",
  linkedin: "https://linkedin.com/in/rohanhenry",
  // Resume lives in /public — file is public/Rohan_Henry_Resume.pdf
  resume: "/Rohan_Henry_Resume.pdf",
} as const;

export interface NavItem {
  label: string;
  href: string;
}

export const navItems: NavItem[] = [
  { label: "Home", href: "#home" },
  { label: "About", href: "#about" },
  { label: "Skills", href: "#skills" },
  { label: "Projects", href: "#projects" },
  { label: "Experience", href: "#experience" },
  { label: "Contact", href: "#contact" },
];
