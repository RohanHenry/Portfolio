import Reveal from "./Reveal";
import { site } from "@/data/site";

// ---------------------------------------------------------------------------
// Contact
// Final CTA with email / LinkedIn / GitHub / resume download.
// ---------------------------------------------------------------------------

const links = [
  { label: "Email", value: site.email, href: `mailto:${site.email}`, icon: "✉️" },
  { label: "LinkedIn", value: "in/rohanhenry", href: site.linkedin, icon: "💼" },
  { label: "GitHub", value: "RohanHenry", href: site.github, icon: "🐙" },
];

export default function Contact() {
  return (
    <section id="contact" className="mx-auto max-w-6xl px-4 py-24 sm:px-6">
      <Reveal>
        <div className="glass relative overflow-hidden p-10 text-center sm:p-16">
          {/* Decorative glow */}
          <div className="pointer-events-none absolute -top-24 left-1/2 h-64 w-64 -translate-x-1/2 rounded-full bg-brand-via/20 blur-3xl" />

          <span className="chip mb-5 uppercase tracking-widest text-brand-via">
            Get in touch
          </span>
          <h2 className="mx-auto max-w-3xl text-3xl font-bold tracking-tight text-white sm:text-4xl">
            Let&apos;s build something great together
          </h2>
          <p className="mx-auto mt-5 max-w-2xl text-base leading-relaxed text-slate-400">
            Open to{" "}
            <span className="font-semibold text-white">Frontend Developer</span>,{" "}
            <span className="font-semibold text-white">Full-Stack Developer</span>,{" "}
            <span className="font-semibold text-white">React Developer</span>, and{" "}
            <span className="font-semibold text-white">
              AI-powered web application
            </span>{" "}
            roles.
          </p>

          {/* Contact links */}
          <div className="mx-auto mt-10 grid max-w-2xl gap-4 sm:grid-cols-3">
            {links.map((l) => (
              <a
                key={l.label}
                href={l.href}
                target={l.href.startsWith("mailto") ? undefined : "_blank"}
                rel="noopener noreferrer"
                className="glass glass-hover flex w-full flex-col items-center gap-1 overflow-hidden p-5"
              >
                <span className="text-2xl">{l.icon}</span>
                <span className="text-sm font-semibold text-white">
                  {l.label}
                </span>
                <span className="w-full break-words text-center text-xs text-slate-500">
                  {l.value}
                </span>
              </a>
            ))}
          </div>

          {/* Primary actions */}
          <div className="mt-10 flex flex-wrap items-center justify-center gap-3">
            <a href={`mailto:${site.email}`} className="btn-primary">
              Email Me
            </a>
            {/* Resume download — file lives at /public/resume.pdf */}
            <a href={site.resume} download className="btn-ghost">
              Download Resume
            </a>
          </div>
        </div>
      </Reveal>
    </section>
  );
}
