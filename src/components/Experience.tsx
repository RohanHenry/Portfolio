import SectionHeading from "./SectionHeading";
import Reveal from "./Reveal";
import { experience, education } from "@/data/experience";

// ---------------------------------------------------------------------------
// Experience
// Clean vertical timeline for work history + an Education sub-section.
// ---------------------------------------------------------------------------

export default function Experience() {
  return (
    <section id="experience" className="mx-auto max-w-6xl px-4 py-24 sm:px-6">
      <SectionHeading
        eyebrow="Experience"
        title="Where I've worked"
        subtitle="Two years of shipping responsive websites and web apps for real clients."
      />

      {/* Work timeline */}
      <div className="mx-auto mt-14 max-w-3xl">
        <div className="relative border-l border-white/10 pl-8">
          {experience.map((item, i) => (
            <Reveal key={item.company} delay={i * 0.1} className="relative mb-10 last:mb-0">
              {/* Timeline dot */}
              <span className="absolute -left-[2.6rem] top-1.5 flex h-5 w-5 items-center justify-center rounded-full bg-gradient-to-br from-brand-from to-brand-to ring-4 ring-ink-900" />
              <div className="glass glass-hover p-6">
                <div className="flex flex-wrap items-baseline justify-between gap-2">
                  <h3 className="text-lg font-bold text-white">{item.role}</h3>
                  <span className="chip text-[11px]">{item.date}</span>
                </div>
                <p className="mt-1 text-sm font-semibold text-brand-via">
                  {item.company}{" "}
                  <span className="font-normal text-slate-500">
                    · {item.location}
                  </span>
                </p>
                <ul className="mt-4 space-y-2">
                  {item.bullets.map((b) => (
                    <li key={b} className="flex items-start gap-3">
                      <span className="mt-1.5 h-1.5 w-1.5 flex-none rounded-full bg-brand-to" />
                      <span className="text-sm leading-relaxed text-slate-400">
                        {b}
                      </span>
                    </li>
                  ))}
                </ul>
              </div>
            </Reveal>
          ))}
        </div>
      </div>

      {/* Education */}
      <div className="mt-20">
        <Reveal className="mb-8 text-center">
          <h3 className="text-2xl font-bold text-white">Education</h3>
        </Reveal>
        <div className="grid gap-6 sm:grid-cols-2">
          {education.map((edu, i) => (
            <Reveal key={edu.institution} delay={i * 0.1}>
              <div className="glass glass-hover h-full p-6">
                <div className="mb-3 flex items-center gap-3">
                  <span className="flex h-10 w-10 items-center justify-center rounded-xl bg-gradient-to-br from-white/10 to-white/[0.02] text-lg">
                    🎓
                  </span>
                  <span className="chip text-[11px]">{edu.date}</span>
                </div>
                <h4 className="font-bold text-white">{edu.institution}</h4>
                <p className="mt-1 text-sm text-brand-via">{edu.degree}</p>
                <p className="mt-1 text-xs text-slate-500">{edu.location}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
