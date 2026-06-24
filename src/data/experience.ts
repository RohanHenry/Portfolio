// ---------------------------------------------------------------------------
// EXPERIENCE & EDUCATION DATA
// Powers the Experience timeline and Education section.
// ---------------------------------------------------------------------------

export interface ExperienceItem {
  company: string;
  role: string;
  location: string;
  date: string;
  bullets: string[];
}

export interface EducationItem {
  institution: string;
  degree: string;
  date: string;
  location: string;
}

export const experience: ExperienceItem[] = [
  {
    company: "Revvlift",
    role: "Web Developer / Software Engineer",
    location: "India",
    date: "Nov 2023 – May 2024",
    bullets: [
      "Designed, developed, and maintained responsive websites using HTML5, CSS3, JavaScript, and Bootstrap.",
      "Customized Shopify, WordPress, and GoHighLevel websites by modifying themes, layouts, and UI components.",
      "Integrated third-party tools, optimized site performance, and supported testing, debugging, domain updates, and A/B-focused improvements.",
    ],
  },
  {
    company: "Staffigo",
    role: "Web Developer / Software Engineer",
    location: "Chennai, India",
    date: "Oct 2022 – Oct 2023",
    bullets: [
      "Developed dynamic and responsive web interfaces using HTML, CSS, JavaScript, and Bootstrap.",
      "Managed deployment and hosting operations through cPanel, including domain configuration, email setup, and database connectivity.",
      "Performed troubleshooting, UI updates, feature enhancements, and performance monitoring in a team environment.",
    ],
  },
];

export const education: EducationItem[] = [
  {
    institution: "University of Central Missouri",
    degree: "Master's in Technology",
    date: "Aug 2024 – May 2026",
    location: "Warrensburg, Missouri, USA",
  },
  {
    institution: "Karunya University",
    degree: "B.Tech in Electronics & Communication Engineering (ECE)",
    date: "Jun 2018 – Jun 2022",
    location: "Coimbatore, India",
  },
];
