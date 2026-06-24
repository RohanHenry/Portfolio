import { site, navItems } from "@/data/site";

// ---------------------------------------------------------------------------
// Footer
// ---------------------------------------------------------------------------

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="border-t border-white/10">
      <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-6 px-4 py-10 sm:flex-row sm:px-6">
        <div className="text-center sm:text-left">
          <div className="text-sm font-bold text-white">
            <span className="text-gradient">{site.shortName}</span>
          </div>
          <p className="mt-1 text-xs text-slate-500">
            Frontend &amp; Full-Stack Developer · {site.location}
          </p>
        </div>

        {/* Quick nav */}
        <nav className="flex flex-wrap justify-center gap-4">
          {navItems.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className="text-xs text-slate-400 transition-colors hover:text-white"
            >
              {item.label}
            </a>
          ))}
        </nav>

        <div className="flex gap-4">
          <a
            href={site.github}
            target="_blank"
            rel="noopener noreferrer"
            className="text-xs text-slate-400 transition-colors hover:text-white"
          >
            GitHub
          </a>
          <a
            href={site.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            className="text-xs text-slate-400 transition-colors hover:text-white"
          >
            LinkedIn
          </a>
        </div>
      </div>
      <div className="border-t border-white/5 py-4 text-center text-xs text-slate-600">
        © {year} {site.name}. Built with Next.js, TypeScript &amp; Tailwind CSS.
      </div>
    </footer>
  );
}
