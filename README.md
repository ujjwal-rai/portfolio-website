# Portfolio website

Personal portfolio for **Ujjwal Rai** — Mechanical Engineering (IIT Ropar) with a minor in Computer Science & Engineering. The site presents experience, projects (grouped by domain), education, and contact links in a single polished landing page.

## Live site

The app is hosted on **Vercel**:

**[https://portfolio-website-ml1e.vercel.app/](https://portfolio-website-ml1e.vercel.app/)**

## What this project includes

- **Responsive landing page** with sticky navigation, hero, and smooth scrolling.
- **Experience timeline** with company logos, roles, dates, and bullet highlights.
- **Projects** shown in a tabbed grid (**AI/ML**, **SDE**, **IoT**, **Mechanical**) — each card can open a **detail dialog** with description, tags, and repo/demo links when configured.
- **Custom animated heroes** per notable project (e.g. 3D-style crypto coin, charts, IoT/security scenes, robotics-style visuals) implemented as scoped UI scenes under `src/components/sections/projects/animations/`.
- **Education** section with institutions and transcript/report links.
- **Contact** section with email and outbound social links.
- **Theme toggle** (light/dark/system) via `next-themes`, with a docked theme control in the layout.
- **Floating chat widget** on the page; optional backend integration via a Next.js API route and Dialogflow-related tooling where configured.
- **Codebase layout** documented for contributors in [`docs/CODEBASE.md`](docs/CODEBASE.md) (folders, content vs components, where animations live).

## Tech stack

| Area | Technologies |
|------|----------------|
| Framework | [Next.js](https://nextjs.org/) 16 (App Router), React 19 |
| Language | TypeScript |
| Styling | [Tailwind CSS](https://tailwindcss.com/) v4, global styles in `src/app/globals.css`; component-level styling includes scoped styles where needed for complex animations |
| UI primitives | [Radix UI](https://www.radix-ui.com/) — Dialog, Tabs (accessible modals and tabs) |
| Motion | [Framer Motion](https://www.framer.com/motion/) — section reveals, header motion |
| Icons | [Lucide React](https://lucide.dev/) |
| Utilities | `clsx`, `tailwind-merge` (`cn` helper), `flubber` (SVG morphing for logo animation) |
| Fonts | [Geist](https://vercel.com/font) via `next/font` |
| Chat / NLP (optional) | `@google-cloud/dialogflow` where API routes are wired |

## Content

Editable copy and structured data live in **`src/content/profile.ts`** (experience, projects, education, links).

## Scripts

```bash
npm install    # install dependencies
npm run dev    # development server — http://localhost:3000
npm run build  # production build
npm run start  # run production server locally
npm run lint   # ESLint
```

## Deployment

The production deployment uses **[Vercel](https://vercel.com/)** connected to this repository; pushes to the linked branch trigger builds and updates the live URL above.

Environment-specific variables (e.g. for Dialogflow or API keys) should be set in the Vercel project settings, not committed to the repo.

## Local documentation

- **[docs/CODEBASE.md](docs/CODEBASE.md)** — map of `src/` folders (`layout`, `sections`, `projects`, animations, etc.).

---

© Portfolio project — Next.js on Vercel.
