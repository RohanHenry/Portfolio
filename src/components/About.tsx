import SectionHeading from "./SectionHeading";
import Reveal from "./Reveal";

// ---------------------------------------------------------------------------
// About
// Recruiter-friendly summary derived from the resume.
// ---------------------------------------------------------------------------

const highlights = [
  "2+ years of professional web development experience",
  "Frontend & full-stack delivery, end to end",
  "React, Next.js, TypeScript, Tailwind, Node.js & Express",
  "REST APIs, Prisma, MySQL & PostgreSQL",
  "Client sites & custom features on Shopify, WordPress, GoHighLevel",
  "Completing a Master's in Technology (UCM)",
];

export default function About() {
  return (
    <section id="about" className="mx-auto max-w-6xl px-4 py-24 sm:px-6">
      <SectionHeading
        eyebrow="About"
        title="Turning ideas into production-ready products"
        subtitle="A quick snapshot of who I am and how I work."
      />

      <div className="mt-14 grid gap-8 lg:grid-cols-5">
        {/* Narrative */}
        <Reveal className="glass glass-hover lg:col-span-3 p-8">
          <p className="text-lg leading-relaxed text-slate-300">
            I&apos;m a{" "}
            <span className="font-semibold text-white">
              Frontend &amp; Full-Stack Developer
            </span>{" "}
            with over two years of professional experience building responsive,
            production-ready web applications. I work across the stack — crafting
            polished interfaces with React, Next.js, TypeScript, and Tailwind
            CSS, and backing them with Node.js, Express, REST APIs, and SQL
            databases.
          </p>
          <p className="mt-5 text-lg leading-relaxed text-slate-400">
            Along the way I&apos;ve shipped real client websites and custom
            features on platforms like Shopify, WordPress, and GoHighLevel. I&apos;m
            currently completing my{" "}
            <span className="font-semibold text-white">
              Master&apos;s in Technology
            </span>{" "}
            at the University of Central Missouri, and I&apos;m focused on building
            real-world SaaS and AI-powered products that solve actual problems.
          </p>
        </Reveal>

        {/* Highlight checklist */}
        <Reveal delay={0.1} className="glass glass-hover lg:col-span-2 p-8">
          <h3 className="mb-5 text-sm font-semibold uppercase tracking-widest text-brand-via">
            At a glance
          </h3>
          <ul className="space-y-4">
            {highlights.map((h) => (
              <li key={h} className="flex items-start gap-3">
                <span className="mt-1 flex h-5 w-5 flex-none items-center justify-center rounded-full bg-gradient-to-br from-brand-from to-brand-to text-[10px] text-white">
                  ✓
                </span>
                <span className="text-sm leading-relaxed text-slate-300">
                  {h}
                </span>
              </li>
            ))}
          </ul>
        </Reveal>
      </div>
    </section>
  );
}
