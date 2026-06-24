import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { site } from "@/data/site";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

// ---------------------------------------------------------------------------
// SEO METADATA
// 👉 Update `metadataBase` with your production domain after deploying.
// ---------------------------------------------------------------------------
export const metadata: Metadata = {
  metadataBase: new URL("https://your-domain.vercel.app"), // TODO: replace with your domain
  title: {
    default: `${site.shortName} — Frontend & Full-Stack Developer`,
    template: `%s — ${site.shortName}`,
  },
  description:
    "Frontend & Full-Stack Developer building AI-powered web applications with React, Next.js, TypeScript, Node.js, and Tailwind CSS.",
  keywords: [
    "Frontend Developer",
    "React Developer",
    "Full Stack Developer",
    "Next.js Developer",
    "MERN Developer",
    "TypeScript",
    "AI web applications",
    "Rohan Henry",
  ],
  authors: [{ name: site.name }],
  creator: site.name,
  openGraph: {
    type: "website",
    title: `${site.shortName} — Frontend & Full-Stack Developer`,
    description:
      "Building AI-powered, production-ready web applications with React, Next.js, TypeScript, and Node.js.",
    siteName: site.shortName,
  },
  twitter: {
    card: "summary_large_image",
    title: `${site.shortName} — Frontend & Full-Stack Developer`,
    description:
      "Building AI-powered, production-ready web applications with React, Next.js, TypeScript, and Node.js.",
  },
  robots: { index: true, follow: true },
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" className={inter.variable}>
      <body className="min-h-screen font-sans">{children}</body>
    </html>
  );
}
