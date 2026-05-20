# Go API Server + Monorepo — Implementation Plan

## Repository Structure

```
dev/
├── client/                  # React SPA (moved from root)
│   ├── index.html
│   ├── vite.config.ts
│   ├── tsconfig.json
│   ├── eslint.config.js
│   ├── package.json
│   ├── pnpm-lock.yaml
│   ├── public/
│   │   ├── _redirects
│   │   ├── files/
│   │   ├── images/
│   │   └── ...
│   ├── src/
│   │   ├── index.tsx
│   │   ├── App.tsx
│   │   ├── pages/
│   │   ├── components/
│   │   ├── data/
│   │   └── ...
│   └── build/               # Vite output (gitignored)
│
├── server/                  # Go API server (new)
│   ├── cmd/
│   │   └── api/
│   │       └── main.go
│   ├── internal/
│   │   ├── database/
│   │   │   ├── db.go
│   │   │   └── seed.go
│   │   ├── handlers/
│   │   │   ├── projects.go
│   │   │   ├── experiences.go
│   │   │   ├── skills.go
│   │   │   └── interests.go
│   │   ├── models/
│   │   │   ├── project.go
│   │   │   ├── experience.go
│   │   │   ├── skill.go
│   │   │   └── interest.go
│   │   └── repository/
│   │       ├── projects.go
│   │       ├── experiences.go
│   │       ├── skills.go
│   │       └── interests.go
│   ├── .env.example
│   └── go.mod
│
├── design/                  # Design docs (already exists)
├── AGENTS.md                # Repo-wide instructions
├── README.md                # Repo overview
├── netlify.toml             # Updated: base = "client"
└── .gitignore               # Updated
```

## Architecture

```
┌──────────────────────┐       ┌──────────────────────┐
│  React SPA (client/)  │  API  │  Go Server (server/) │
│  Deployed: Netlify    │──────▶│  Hosted: Lightsail   │
│                       │       │                      │
│  johnescalona.com     │       │  api.johnescalona.com│
└──────────────────────┘       └──────────┬───────────┘
                                          │
                                   ┌──────▼──────┐
                                   │   SQLite     │
                                   │  server.db   │
                                   └─────────────┘
```

---

## Step-by-step

### Step 0: Restructure into monorepo

1. Create `client/` directory
2. Move these from root → `client/`:
   - `index.html`, `vite.config.ts`, `tsconfig.json`, `eslint.config.js`
   - `package.json`, `pnpm-lock.yaml`, `pnpm-workspace.yaml` (delete if empty)
   - `src/`, `public/`, `build/`, `node_modules/`
   - `favicon.ico`
3. Update `netlify.toml` at root:
   ```toml
   [build]
     base = "client"
     command = "pnpm build"
     publish = "build"

   [build.environment]
     NODE_VERSION = "22"

   [[redirects]]
     from = "/*"
     to = "/index.html"
     status = 200
   ```
4. Update `.gitignore` — paths relative to client now: `build/` stays, `node_modules` stays
5. Update `AGENTS.md` — all paths now relative to `client/`
6. Test: `cd client && pnpm dev` still works on port 3000
7. Commit: "restructure repo into client/server monorepo"

### Step 1: Initialize Go server

8. `mkdir server && cd server && go mod init github.com/jrescalona96/johnescalonadotcom-server`
9. Add dependencies:
   - `modernc.org/sqlite` — pure Go SQLite driver (no CGO)
   - `github.com/go-chi/chi/v5` — lightweight HTTP router
   - `github.com/go-chi/cors` — CORS middleware
   - `github.com/joho/godotenv` — `.env` file loader

10. Create directory structure:
    ```
    server/
    ├── cmd/api/main.go
    ├── internal/
    │   ├── database/
    │   ├── handlers/
    │   ├── models/
    │   └── repository/
    ├── .env.example
    └── go.mod
    ```

### Step 2: Models

11. Define Go structs in `internal/models/`:
    - `Project` — matches `src/data/models/Project.tsx`
    - `Experience` — matches `src/data/models/Experience.tsx`
    - `Skill` — matches `src/data/models/Skill.tsx`
    - `Interest` — matches `src/data/models/Interest.tsx`
    - Helper types: `Link`, `Media`

### Step 3: Database

12. SQLite connection + schema in `internal/database/db.go`
    - `CREATE TABLE IF NOT EXISTS` for each entity
    - Arrays stored as JSON TEXT columns
    - Auto-run on startup

13. Seed function in `internal/database/seed.go`
    - Insert all content from `client/src/data/repository/Repository.tsx`
    - Only seeds if tables are empty

### Step 4: Repository layer

14. Each entity gets a repository file:
    - `GetAll()` — `SELECT *`
    - `GetByID(id)` — `SELECT * WHERE id = ?`
    - `Create(entry)` — `INSERT INTO`
    - `Update(id, entry)` — `UPDATE WHERE id = ?`
    - `Delete(id)` — `DELETE WHERE id = ?`

### Step 5: HTTP handlers

15. Chi router with CORS:
    ```
    GET    /api/health
    GET    /api/projects
    GET    /api/projects/{id}
    POST   /api/projects
    PUT    /api/projects/{id}
    DELETE /api/projects/{id}
    ```
    Same pattern for `/api/experiences`, `/api/skills`, `/api/interests`

### Step 6: Wire up main.go

16. `cmd/api/main.go`:
    - Load `.env`
    - Open SQLite DB
    - Run migrations
    - Seed if empty
    - Create router + mount handlers
    - Start server

### Step 7: Local testing

17. `cd server && go run ./cmd/api`
18. `curl http://localhost:8080/api/projects`
19. `curl http://localhost:8080/api/health`

### Step 8: Build for Lightsail

20. `cd server && GOOS=linux GOARCH=amd64 go build -o bin/api ./cmd/api`

### Step 9: Lightsail deployment

21. Launch Ubuntu instance ($3.50/mo)
22. SSH in, upload binary
23. Create `/etc/systemd/system/api.service`:
    ```
    [Unit]
    Description=johnescalona API
    After=network.target

    [Service]
    ExecStart=/home/ubuntu/api
    WorkingDirectory=/home/ubuntu
    Restart=always
    User=ubuntu

    [Install]
    WantedBy=multi-user.target
    ```
24. Install Caddy as reverse proxy:
    ```
    api.johnescalona.com {
        reverse_proxy localhost:8080
    }
    ```
25. Start services: `systemctl enable --now api caddy`
26. DNS: `api.johnescalona.com` CNAME → Lightsail IP

### Step 10: Connect frontend

27. Create `client/src/lib/apiClient.ts`
28. Replace `Repository.tsx` calls with `fetch()` to `https://api.johnescalona.com`
29. Remove hardcoded data from `Repository.tsx`
30. Test locally with Vite proxy:
    ```ts
    // vite.config.ts
    server: {
      proxy: {
        '/api': 'http://localhost:8080'
      }
    }
    ```

---

## What you'll learn at each step

| Step | Skill |
|---|---|
| 0 | Monorepo structure, Netlify config |
| 1 | Go modules, dependency management |
| 2 | Go structs, JSON serialization |
| 3 | SQL, `database/sql`, SQLite |
| 4 | Repository pattern in Go |
| 5 | HTTP handlers, Chi routing, CORS |
| 6 | Application wiring, config management |
| 7 | Manual API testing with curl |
| 8 | Cross-compilation for Linux |
| 9 | Linux sysadmin, systemd, Caddy, DNS |
| 10 | Frontend API integration, dev proxy |
