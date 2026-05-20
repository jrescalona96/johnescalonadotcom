# AGENTS.md — johnescalonadotcom

**Stack:** React 19 + TypeScript + Vite 5 + Tailwind 3 + Vitest 1  
**Deploy:** Netlify (SPA via `public/_redirects`)  
**API:** Go server on Lightsail (see `server/docs/SERVER_PLAN.md`)  
**Live:** https://johnescalona.com

## Monorepo structure

```
dev/
├── client/       — React SPA (frontend)
├── server/       — Go API server
├── design/       — design documents
├── AGENTS.md     — this file
├── client/netlify.toml  — Netlify config (UI base directory = "client")
└── README.md
```

## Commands (run from `client/`)

| Action | Command |
|---|---|
| Dev server (port 3000) | `pnpm dev` |
| Production build | `pnpm build` |
| Preview build | `pnpm preview` |
| Run tests | `pnpm test` (vitest) |
| Single test file | `pnpm test -- src/App.test.tsx` |
| Add dependency | `pnpm add <pkg>` |
| Add dev dependency | `pnpm add -D <pkg>` |

## Project structure (client/)

- `index.html` — Vite entry point
- `src/index.tsx` — React entry point
- `src/App.tsx` — routes: `/`, `/resume`, `/interests`, `/interests/camping`. Coffee/Fitness routes are commented out.
- `src/data/repository/Repository.tsx` — hardcoded data store (will be replaced by API calls to Go server)
- `src/pages/` — page components
- `src/components/` — shared UI components
- `src/assets/constants/` — route URLs, external URLs, string constants
- `src/hooks/useAsyncData.ts` — React 19 `use()` hook wrapper
- `public/` — static assets (images, PDFs, `_redirects`)
- `build/` — Vite output (gitignored)

## CRA → Vite migration artifacts

The project migrated from Create React App. Leftover CRA traces:
- `react-app-env.d.ts` references `react-scripts`
- ESLint config is inline in `package.json` using `react-app` preset
- `README.md` still says "Created with Create React App"
- `logo.svg` referenced in manifest but doesn't exist on disk

## Active branch

Work on `dev` branch (not `master`). PRs merge into `dev`.

## Data model

Content is hardcoded in `Repository.tsx` — no backend, no API calls. Edit `client/src/data/repository/Repository.tsx` to update projects, skills, experience, interests. Eventually this will be replaced by the Go API (`server/`).

## Git commits

Commits are **manual only** — never commit unless the user explicitly asks. Run `git add -A && git commit` only when instructed.

## Other notes

- No CI/CD pipelines, no pre-commit hooks, no formatter config
- ESLint inline in `client/package.json` (no `.eslintrc` file)
- `pnpm-lock.yaml` is committed (required for Netlify to detect pnpm)
- React 19 features used: `use()` hook, `useTransition()`, `createRoot`
- `netlify.toml` lives in `client/`, Netlify UI base directory set to `client/`
