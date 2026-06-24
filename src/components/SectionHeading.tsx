import Reveal from "./Reveal";

// ---------------------------------------------------------------------------
// SectionHeading
// Consistent eyebrow + title + subtitle block used at the top of each section.
// ---------------------------------------------------------------------------

interface SectionHeadingProps {
  eyebrow: string;
  title: string;
  subtitle?: string;
  align?: "left" | "center";
}

export default function SectionHeading({
  eyebrow,
  title,
  subtitle,
  align = "center",
}: SectionHeadingProps) {
  return (
    <Reveal
      className={
        align === "center"
          ? "mx-auto max-w-2xl text-center"
          : "max-w-2xl text-left"
      }
    >
      <span className="chip mb-4 uppercase tracking-widest text-brand-via">
        {eyebrow}
      </span>
      <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl">
        {title}
      </h2>
      {subtitle && (
        <p className="mt-4 text-base leading-relaxed text-slate-400">
          {subtitle}
        </p>
      )}
    </Reveal>
  );
}
