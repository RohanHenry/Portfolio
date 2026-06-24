# Rohan Henry — Developer Portfolio

A premium, recruiter-ready developer portfolio built with **Next.js (App Router)**, **TypeScript**, **Tailwind CSS**, and **Framer Motion**. Dark SaaS-style theme, glassmorphism cards, smooth animations, fully responsive, and deploy-ready for Vercel.

## Run locally

```bash
npm install
npm run dev
```

Then open http://localhost:3000

```bash
npm run build   # production build
npm start       # run the production build
```

---

## ✅ Things to customize (quick checklist)

Everything you'll likely change lives in **`src/data/`**.

### 1. Where to place your resume PDF
- Export your resume as **`resume.pdf`**.
- Drop it in the **`public/`** folder → `public/resume.pdf`.
- Every "Download Resume" button already points to `/resume.pdf`.
- (Delete the placeholder `public/resume.txt` once added.)
- The path is set in `src/data/site.ts` → `resume: "/resume.pdf"`.

### 2. Where to add project screenshots
- Put images in **`public/screenshots/`**.
- Open `src/data/projects.ts` and add a `src` to any screenshot, e.g.:
  ```ts
  screenshots: [
    { src: "/screenshots/support-dashboard.png", caption: "Analytics dashboard overview" },
  ]
  ```
- Without a `src`, a styled placeholder box is shown automatically.
- To swap a **project card thumbnail** (the gradient banner), edit
  `src/components/ProjectCard.tsx` (look for the `👉 SCREENSHOT` comment).

### 3. Where to replace GitHub / Live Demo links
- **Project links:** `src/data/projects.ts` → each project's `liveUrl` and `githubUrl`
  (currently `"#"` placeholders — search for `👉 LINK`).
- **Profile links:** `src/data/site.ts` → `github`, `linkedin`, `email`.
- **SEO domain:** `src/app/layout.tsx` → `metadataBase` (set after deploying).

### 4. Edit text content
- **Skills:** `src/data/skills.ts`
- **Experience & Education:** `src/data/experience.ts`
- **Projects & case studies:** `src/data/projects.ts`
- **Name / role / location / links:** `src/data/site.ts`

---

## 🚀 Deploy to Vercel

1. Push this folder to a GitHub repo.
   ```bash
   git init && git add . && git commit -m "Initial portfolio"
   git branch -M main
   git remote add origin https://github.com/RohanHenry/<repo-name>.git
   git push -u origin main
   ```
2. Go to **https://vercel.com → New Project → Import** your repo.
3. Vercel auto-detects Next.js — no config needed. Click **Deploy**.
4. After deploy, copy your live URL and update `metadataBase` in
   `src/app/layout.tsx`, then push again.
5. (Optional) Add a custom domain in **Vercel → Settings → Domains**.

---

## 📁 Project structure

```
src/
├── app/
│   ├── layout.tsx                # Root layout + SEO metadata
│   ├── page.tsx                  # Home (composes all sections)
│   ├── globals.css               # Theme, glass + button utilities
│   └── projects/
│       ├── saas-customer-support-dashboard/page.tsx
│       └── ai-website-growth-agent-platform/page.tsx
├── components/
│   ├── Navbar.tsx                # Sticky responsive nav + mobile menu
│   ├── Hero.tsx                  # Hero + animated code window
│   ├── About.tsx
│   ├── Skills.tsx
│   ├── Projects.tsx
│   ├── ProjectCard.tsx
│   ├── Experience.tsx            # Work timeline + Education
│   ├── Contact.tsx
│   ├── Footer.tsx
│   ├── SectionHeading.tsx        # Reusable section header
│   ├── Reveal.tsx                # Reusable scroll-in animation
│   └── CaseStudy.tsx             # Reusable case study layout
└── data/
    ├── site.ts                   # Name, links, nav items
    ├── skills.ts
    ├── experience.ts
    └── projects.ts               # Projects + case study content
```

Built with Next.js, TypeScript, Tailwind CSS & Framer Motion.
