"use client";

import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { moreProjects } from "@/data/moreProjects";

// ---------------------------------------------------------------------------
// MoreProjects
// An "Explore More Projects" button that opens a closable modal/overlay
// showing additional deployed projects (with front-page screenshots).
// It does NOT redirect to GitHub — everything stays inside the page.
// Close via the X button, the backdrop, or the Escape key.
// ---------------------------------------------------------------------------

export default function MoreProjects() {
  const [open, setOpen] = useState(false);

  // Close on Escape + lock body scroll while the modal is open
  useEffect(() => {
    if (!open) return;
    const onKey = (e: KeyboardEvent) => e.key === "Escape" && setOpen(false);
    window.addEventListener("keydown", onKey);
    document.body.style.overflow = "hidden";
    return () => {
      window.removeEventListener("keydown", onKey);
      document.body.style.overflow = "";
    };
  }, [open]);

  return (
    <>
      {/* Trigger button */}
      <div className="mt-12 flex justify-center">
        <button onClick={() => setOpen(true)} className="btn-ghost group">
          Explore More Projects
          <span className="transition-transform duration-300 group-hover:translate-x-1">
            →
          </span>
        </button>
      </div>

      {/* Modal */}
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
            className="fixed inset-0 z-[100] flex items-start justify-center overflow-y-auto bg-black/70 p-4 backdrop-blur-sm sm:p-8"
            onClick={() => setOpen(false)}
            role="dialog"
            aria-modal="true"
            aria-label="More projects"
          >
            <motion.div
              initial={{ opacity: 0, scale: 0.96, y: 16 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.96, y: 16 }}
              transition={{ duration: 0.25, ease: "easeOut" }}
              // Stop clicks inside the panel from closing the modal
              onClick={(e) => e.stopPropagation()}
              className="glass relative my-auto w-full max-w-5xl p-6 sm:p-8"
            >
              {/* Header */}
              <div className="mb-6 flex items-start justify-between gap-4">
                <div>
                  <h2 className="text-2xl font-bold text-white">
                    All Projects
                  </h2>
                  <p className="mt-1 text-sm text-slate-400">
                    More sites and apps I&apos;ve designed, built, and deployed.
                  </p>
                </div>
                <button
                  onClick={() => setOpen(false)}
                  aria-label="Close"
                  className="flex h-10 w-10 flex-none items-center justify-center rounded-full border border-white/15 bg-white/[0.04] text-slate-300 transition-colors hover:bg-white/10 hover:text-white"
                >
                  ✕
                </button>
              </div>

              {/* Grid of projects */}
              <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
                {moreProjects.map((p) => (
                  <article
                    key={p.title}
                    className="glass glass-hover group flex flex-col overflow-hidden"
                  >
                    {/* Front image / placeholder */}
                    <div
                      className={`relative h-36 overflow-hidden bg-gradient-to-br ${p.accent}`}
                    >
                      {p.image ? (
                        <>
                          {/* eslint-disable-next-line @next/next/no-img-element */}
                          <img
                            src={p.image}
                            alt={`${p.title} screenshot`}
                            className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                          />
                          <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent" />
                        </>
                      ) : (
                        <div className="absolute inset-0 flex items-center justify-center">
                          <span className="text-4xl font-black text-white/90 drop-shadow-lg">
                            {p.title
                              .split(" ")
                              .slice(0, 2)
                              .map((w) => w[0])
                              .join("")}
                          </span>
                        </div>
                      )}
                    </div>

                    {/* Body */}
                    <div className="flex flex-1 flex-col p-5">
                      <h3 className="font-bold text-white">{p.title}</h3>
                      <p className="mt-2 flex-1 text-sm leading-relaxed text-slate-400">
                        {p.description}
                      </p>
                      <div className="mt-3 flex flex-wrap gap-1.5">
                        {p.tags.map((t) => (
                          <span key={t} className="chip text-[11px]">
                            {t}
                          </span>
                        ))}
                      </div>
                      {/* Live link — opens in a new tab, modal stays open */}
                      <a
                        href={p.liveUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="btn-primary mt-4 px-4 py-2 text-xs"
                      >
                        Live Demo
                      </a>
                    </div>
                  </article>
                ))}
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
