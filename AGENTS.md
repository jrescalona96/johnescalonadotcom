# AGENTS.md — johnescalonadotcom

**Stack:** React 19 + TypeScript + Vite 5 + Tailwind 3 + Vitest 1  
**Deploy:** Netlify (SPA via `public/_redirects`)  
**Live:** https://johnescalona.com

## Commands

| Action | Command |
|---|---|
| Dev server (port 3000) | `pnpm dev` |
| Production build (`build/`) | `pnpm build` |
| Preview build | `pnpm preview` |
| Run tests | `pnpm test` (vitest) |
| Single test file | `pnpm test -- src/App.test.tsx` |
| Add dependency | `pnpm add <pkg>` |
| Add dev dependency | `pnpm add -D <pkg>` |

## Project structure

- `src/index.tsx` — React entry point
- `src/App.tsx` — routes: `/`, `/resume`, `/interests`, `/interests/camping`. Coffee/Fitness routes are commented out.
- `src/data/repository/Repository.tsx` — singleton hardcoded data store (no API/backend). Edit this file to update projects, skills, experience, interests.
- `src/pages/` — page components
- `src/components/` — shared UI components
- `src/assets/constants/` — route URLs, external URLs, string constants
- `src/hooks/useAsyncData.ts` — React 19 `use()` hook wrapper
- `public/` — static assets (images, PDFs, `_redirects`)
- `build/` — Vite output (gitignored)

## CRA → Vite migration artifacts

The project migrated from Create React App. Leftover CRA traces you may encounter:
- `react-app-env.d.ts` references `react-scripts`
- ESLint config is inline in `package.json` using `react-app` preset
- `README.md` still says "Created with Create React App"
- `logo.svg` referenced but doesn't exist on disk

Do not recreate CRA configs or add react-scripts. Vite root is `index.html` at project root (not `public/`).

## Active branch

Work on `dev` branch (not `master`). PRs merge into `dev`.

## Data model

Content is hardcoded in `Repository.tsx` — no backend, no API calls. To update portfolio content, edit the repository methods (`getAllProjects`, `getProfessionalExperiences`, `getSkills`, etc.) or the constants files.

## Other notes

- No CI/CD pipelines, no pre-commit hooks, no formatter config
- ESLint inline in `package.json` (no `.eslintrc` file)
- `pnpm-lock.yaml` is in `.gitignore`; lockfile not committed
- React 19 features used: `use()` hook, `useTransition()`, `createRoot`
- `netlify.toml` exists but is empty (config is in `_redirects`)
