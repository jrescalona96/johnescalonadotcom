---
description: Run reviews, lint, typecheck, tests, then guide through committing
---

## Commit preparation

Before committing, I will:

1. **Review** all staged and unstaged changes for code quality issues
2. **Lint & typecheck** the codebase
3. **Run tests**
4. **Guide** through the commit

### 1. Code review

!`git diff HEAD --stat`
!`git diff HEAD`

Review the changes above for bugs, style issues, security concerns, and adherence to project conventions.

### 2. Lint & typecheck

!`pnpm lint:typecheck`

Fix any lint or type errors found above before proceeding.

### 3. Tests

!`pnpm exec vitest run`

Fix any test failures found above before proceeding.

### 4. Commit guidance

Summarize the changes and suggest an appropriate commit message following the project's conventions.

5. **run commit commands** by grouping all related changes in a loop until all changes are commited or as instructed otherwise. Each commit should have a meaningful commit message.