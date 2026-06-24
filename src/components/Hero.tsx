"use client";

import { motion } from "framer-motion";
import { site } from "@/data/site";

// ---------------------------------------------------------------------------
// Hero
// Strong above-the-fold positioning + an animated glass code window with
// floating tech-stack badges on the right.
// ---------------------------------------------------------------------------

const floatingBadges = [
  { label: "React", className: "left-[-8%] top-[12%]", delay: 0 },
  { label: "Next.js", className: "right-[-6%] top-[6%]", delay: 0.4 },
  { label: "TypeScript", className: "right-[-10%] top-[46%]", delay: 0.8 },
  { label: "Node.js", className: "left-[-10%] top-[58%]", delay: 1.2 },
  { label: "Tailwind", className: "right-[2%] bottom-[-6%]", delay: 1.6 },
];

const codeLines = [
  { t: "const developer = {", c: "text-slate-400" },
  { t: "  name: 'Rohan Henry',", c: "text-cyan-300" },
  { t: "  stack: ['React', 'Next.js', 'TS'],", c: "text-violet-300" },
  { t: "  focus: 'AI-powered web apps',", c: "text-emerald-300" },
  { t: "  status: 'open to work',", c: "text-amber-300" },
  { t: "};", c: "text-slate-400" },
  { t: "developer.build(); // 🚀", c: "text-slate-500" },
];

export default function Hero() {
  return (
    <section
      id="home"
      className="relative overflow-hidden pt-32 pb-20 sm:pt-40 sm:pb-28"
    >
      {/* Faint grid backdrop */}
      <div className="pointer-events-none absolute inset-0 -z-10 bg-grid-faint [background-size:44px_44px] [mask-image:radial-gradient(ellipse_at_center,black,transparent_75%)]" />

      <div className="mx-auto grid max-w-6xl items-center gap-12 px-4 sm:px-6 lg:grid-cols-2 lg:gap-8">
        {/* Left: copy */}
        <div>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <span className="chip mb-6 gap-2">
              <span className="relative flex h-2 w-2">
                <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-400 opacity-75" />
                <span className="relative inline-flex h-2 w-2 rounded-full bg-emerald-400" />
              </span>
              Available for new roles · {site.location}
            </span>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-4xl font-bold leading-tight tracking-tight text-white sm:text-5xl lg:text-[3.4rem] lg:leading-[1.07]"
          >
            Frontend &amp; Full-Stack Developer Building{" "}
            <span className="text-gradient">AI-Powered Web Applications</span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="mt-6 max-w-xl text-lg leading-relaxed text-slate-400"
          >
            I build responsive SaaS dashboards, AI tools, and scalable web
            experiences using React, Next.js, TypeScript, Node.js, and Tailwind
            CSS.
          </motion.p>

          {/* CTAs */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="mt-9 flex flex-wrap items-center gap-3"
          >
            <a href="#projects" className="btn-primary">
              View Projects
            </a>
            {/* Resume download — file lives at /public/resume.pdf */}
            <a href={site.resume} download className="btn-ghost">
              Download Resume
            </a>
            <a
              href={site.github}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-ghost"
            >
              GitHub
            </a>
            <a
              href={site.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-ghost"
            >
              LinkedIn
            </a>
          </motion.div>

          {/* Quick stats */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="mt-10 flex flex-wrap gap-8"
          >
            {[
              { k: "2+ yrs", v: "Professional experience" },
              { k: "Full-Stack", v: "Frontend → Backend" },
              { k: "AI-first", v: "Modern dev workflow" },
            ].map((s) => (
              <div key={s.k}>
                <div className="text-2xl font-bold text-white">{s.k}</div>
                <div className="text-sm text-slate-500">{s.v}</div>
              </div>
            ))}
          </motion.div>
        </div>

        {/* Right: animated glass code window + floating badges */}
        <motion.div
          initial={{ opacity: 0, scale: 0.94 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.7, delay: 0.2 }}
          className="relative mx-auto w-full max-w-md lg:mr-0"
        >
          {/* Glow behind the card */}
          <div className="absolute -inset-6 -z-10 rounded-[2rem] bg-gradient-to-tr from-brand-from/30 via-brand-via/20 to-brand-to/30 blur-2xl" />

          {/* Floating badges */}
          {floatingBadges.map((b) => (
            <motion.div
              key={b.label}
              className={`absolute z-20 ${b.className}`}
              animate={{ y: [0, -10, 0] }}
              transition={{
                duration: 4,
                repeat: Infinity,
                ease: "easeInOut",
                delay: b.delay,
              }}
            >
              <span className="glass rounded-full px-3 py-1.5 text-xs font-semibold text-white shadow-card">
                {b.label}
              </span>
            </motion.div>
          ))}

          {/* Code window */}
          <div className="glass overflow-hidden shadow-card">
            <div className="flex items-center gap-2 border-b border-white/10 px-4 py-3">
              <span className="h-3 w-3 rounded-full bg-red-400/80" />
              <span className="h-3 w-3 rounded-full bg-amber-400/80" />
              <span className="h-3 w-3 rounded-full bg-emerald-400/80" />
              <span className="ml-3 text-xs text-slate-500">developer.ts</span>
            </div>
            <div className="space-y-2 p-5 font-mono text-sm">
              {codeLines.map((line, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, x: -8 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.6 + i * 0.18, duration: 0.4 }}
                  className={line.c}
                >
                  <span className="mr-3 select-none text-slate-700">
                    {i + 1}
                  </span>
                  {line.t}
                </motion.div>
              ))}
              {/* Blinking cursor */}
              <motion.span
                className="ml-9 inline-block h-4 w-2 bg-brand-via align-middle"
                animate={{ opacity: [1, 0, 1] }}
                transition={{ duration: 1, repeat: Infinity }}
              />
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
