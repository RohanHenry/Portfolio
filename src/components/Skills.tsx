import SectionHeading from "./SectionHeading";
import Reveal from "./Reveal";
import { skillGroups } from "@/data/skills";

// ---------------------------------------------------------------------------
// Skills
// Grouped glassmorphism cards, one per skill category.
// ---------------------------------------------------------------------------

export default function Skills() {
  return (
    <section id="skills" className="mx-auto max-w-6xl px-4 py-24 sm:px-6">
      <SectionHeading
        eyebrow="Skills"
        title="The tools I build with"
        subtitle="A full-stack toolkit spanning UI, APIs, data, and an AI-assisted workflow."
      />

      <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {skillGroups.map((group, i) => (
          <Reveal key={group.title} delay={i * 0.06}>
            <div className="glass glass-hover group h-full p-6">
              <div className="mb-4 flex items-center gap-3">
                <span className="flex h-11 w-11 items-center justify-center rounded-xl bg-gradient-to-br from-white/10 to-white/[0.02] text-xl">
                  {group.icon}
                </span>
                <div>
                  <h3 className="font-semibold text-white">{group.title}</h3>
                  <p className="text-xs text-slate-500">{group.tagline}</p>
                </div>
              </div>
              <div className="flex flex-wrap gap-2">
                {group.skills.map((skill) => (
                  <span
                    key={skill}
                    className="chip transition-colors group-hover:border-brand-via/40 group-hover:text-white"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          </Reveal>
        ))}
      </div>
    </section>
  );
}
