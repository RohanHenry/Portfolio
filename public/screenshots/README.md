# Project Screenshots

Drop your project screenshots in this folder, then reference them in
`src/data/projects.ts`.

## Project card thumbnails

In `ProjectCard.tsx` the banner is currently a gradient placeholder. To use a
real image, replace the gradient `<div>` with a `next/image` `<Image>` pointing
to a file here.

## Case study screenshots

Each case study reads its screenshots from the `caseStudy.screenshots` array in
`src/data/projects.ts`. Add a `src` to switch from placeholder → real image:

```ts
screenshots: [
  { src: "/screenshots/support-dashboard.png", caption: "Analytics dashboard overview" },
  // ...
]
```

Recommended size: ~1200×750px PNG/JPG/WebP.
