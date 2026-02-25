# Contributing to IntMoney Landing Page

First off, thank you for taking the time to contribute! 🎉

This document provides detailed guidelines for contributing to the IntMoney landing page. Please read it carefully — these rules are **non-negotiable** for all contributions.

## Table of Contents

- [Before You Start](#before-you-start)
- [Development Workflow](#development-workflow)
- [Commit Standards](#commit-standards)
- [Code Structure](#code-structure)
- [Screen Recordings](#screen-recordings-required)
- [Git Hooks](#git-hooks-husky--lint-staged)
- [PR Checklist](#pr-checklist)
- [Issues & Labels](#issues--labels)

---

## Before You Start

### Non-Negotiable Rules ⚠️

**These rules must be followed. PRs that violate them will not be reviewed.**

1. **Screen recording required** for every PR with UI changes
2. **Conventional Commits** for all commit messages
3. **Atomic commits** — one logical change per commit
4. **No barrel exports** — use direct file imports
5. **Atomic Design structure** — place components in the correct hierarchy

---

## Development Workflow

### 1. Fork the Repository

Click the **Fork** button at github.com/int-money/landing-page to create your own copy.

### 2. Clone Your Fork

```bash
git clone https://github.com/YOUR_USERNAME/landing-page.git
cd landing-page
```

### 3. Create a Feature Branch

```bash
git checkout -b feat/issue-number-short-description
```

---

## Commit Standards

All commits **must** follow the Conventional Commits specification:

```
<type>(<scope>): <description>
```

**Types:** `feat`, `fix`, `docs`, `style`, `refactor`, `test`, `chore`, `perf`, `ci`

Each commit must represent **one logical change**.

---

## Code Structure

This project strictly follows **Atomic Design principles**.

- `components/atoms/`
- `components/molecules/`
- `components/organisms/`
- `components/templates/`
- `components/providers/`
- `components/ui/` (do not modify shadcn components)

### Import Rules

❌ Do NOT use barrel exports (`index.ts`).

✅ Always import directly:

```ts
import { Button } from "@/components/atoms/button";
```

---

## Screen Recordings (Required)

Every PR that includes UI changes **must include a screen recording**.

Accepted formats:

- `.mp4`
- `.mov`
- `.gif`
- Loom link

PRs without recordings for UI changes will not be reviewed.

---

## Local Setup

```bash
# Clone your fork
git clone https://github.com/YOUR_USERNAME/landing-page.git
cd landing-page

# Install dependencies
pnpm install

# Copy environment variables
cp .env.example .env.local

# Start dev server
pnpm dev
```

---

## Git Hooks (Husky + lint-staged)

This project uses **Husky** and **lint-staged** to enforce code quality locally before code is committed or pushed.

Hooks are automatically installed after running:

```bash
pnpm install
```

### What Runs Automatically?

### ✅ Pre-commit (Fast)

Runs only on staged files:

- ESLint with `--fix` on `.ts` and `.tsx` files
- Prettier with `--write` on staged files

This ensures formatting and lint issues are fixed before the commit is created.

### ✅ Pre-push (Strict)

Runs on the entire project:

- Full TypeScript type-check: `pnpm tsc --noEmit`
- Full lint run: `pnpm lint`

If any errors are found, the push is blocked.

---

### Emergency Bypass (Use Sparingly)

In rare emergency situations, hooks can be bypassed using:

```bash
git commit --no-verify
git push --no-verify
```

⚠ This is strongly discouraged. Code that bypasses hooks may fail CI and will likely be rejected during review.

---

### Why We Enforce This

- Faster feedback than CI
- Prevents broken branches
- Saves CI minutes
- Keeps `main` clean and stable

---

## PR Checklist

Before submitting your PR, ensure:

- [ ] `pnpm lint` passes
- [ ] `pnpm build` succeeds
- [ ] Commits follow Conventional Commits
- [ ] Each commit is atomic
- [ ] No `WIP` commits
- [ ] Issue linked (e.g., `Closes #18`)
- [ ] Screen recording attached (for UI changes)

---

## Questions?

If you have questions:

- Comment on the issue
- Open a discussion
- Check existing PRs for patterns

Thank you for contributing! 🚀
