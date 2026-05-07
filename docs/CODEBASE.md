# Portfolio codebase map

This repo is a **Next.js (App Router)** single-page portfolio. Use this file to find where UI, data, and styles live.

## Top-level flow (`src/app`)

| File | Role |
|------|------|
| `layout.tsx` | Root HTML shell, fonts, theme provider, global **ThemeDock**. |
| `page.tsx` | Home page only: orders sections top → bottom. |
| `globals.css` | Tailwind entry + global tokens + a few shared `@keyframes`. |

## Content vs code

| Path | Role |
|------|------|
| `src/content/profile.ts` | **Copy & facts**: jobs, projects, education, links. Edit here to update text. |

## Components (`src/components`)

### `layout/` — site chrome

Sticky header, footer, theme switcher. Imported via `@/components/layout`.

### `sections/` — scroll regions of the home page

Each file is one major block on `page.tsx`:

- `Hero.tsx`
- `ExperienceSection.tsx`
- `projects/` — tabbed projects grid, dialogs, and **all hero animations** under `projects/animations/`
- `EducationSection.tsx`
- `ContactSection.tsx`

Import shortcuts: `@/components/sections` (see `sections/index.ts`).

### `ui/` — small reusable primitives

Buttons, badges, section wrappers (`Section`, `Container`).

### `motion/` — motion wrappers

`Reveal`, `MorphingLogo` — animation helpers used inside sections.

### `visual/` — full-page backdrop

`AnimatedBackdrop` — decorative layer behind content.

### `chat/` — floating widget

`ChatbotWidget` — self-contained assistant UI.

## Styles: where CSS lives

| Kind | Location |
|------|----------|
| **Global** | `src/app/globals.css` (Tailwind `@import`, `:root`, body, shared keyframes). |
| **Utility layout** | Tailwind `className` strings next to markup (standard for this stack). |
| **Project hero animations** | `sections/projects/animations/*.tsx` use **styled-jsx** for scoped keyframes and complex selectors so names don’t clash. |

Moving those animations to `.module.css` files is possible later; they were kept co-located to avoid a thousand-line refactor in one step.

## Projects module (detail)

```
sections/projects/
  ProjectsSection.tsx       → re-exports the section entry
  projects-section.tsx      → tabs + grid + dialog wiring
  project-detail-modal.tsx  → dialog shell (overlay, close, body)
  project-modal-hero.tsx    → which animation to show in the modal
  project-hero-matchers.ts  → title-based rules (“is this the Cryptage project?”)
  project-category-tint.ts
  project-links.tsx
  project-card-footer.tsx
  types.ts
  animations/               → every animated hero + `index.ts` barrel
```

## Lib

`src/lib/utils.ts` — shared helpers (e.g. `cn` for class names).
