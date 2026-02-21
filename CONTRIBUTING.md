# Contributing to IntMoney Landing Page

First off, thank you for taking the time to contribute! 🎉

This document provides detailed guidelines for contributing to the IntMoney landing page. Please read it carefully — these rules are **non-negotiable** for all contributions.

## Table of Contents

- [Before You Start](#before-you-start)
- [Development Workflow](#development-workflow)
- [Commit Standards](#commit-standards)
- [Code Structure](#code-structure)
- [Screen Recordings](#screen-recordings-required)
- [PR Checklist](#pr-checklist)
- [Issues & Labels](#issues--labels)

## Before You Start

### Non-Negotiable Rules ⚠️

**These rules must be followed. PRs that violate them will not be reviewed.**

1. **Screen recording required** for every PR with UI changes
2. **Conventional Commits** for all commit messages
3. **Atomic commits** — one logical change per commit
4. **No barrel exports** — use direct file imports
5. **Atomic Design structure** — place components in the correct hierarchy

### Prerequisites

- Node.js 20 or higher
- pnpm (install: `npm install -g pnpm`)
- Git and GitHub account

## Development Workflow

### 1. Fork the Repository

Click the **Fork** button at [github.com/int-money/landing-page](https://github.com/int-money/landing-page) to create your own copy.

### 2. Clone Your Fork

```bash
git clone https://github.com/YOUR_USERNAME/landing-page.git
cd landing-page
```

**Important:** Clone _your fork_, not the original repository. This allows you to push your changes.

### 3. Create a Feature Branch

```bash
git checkout -b feat/issue-number-short-description
```

**Branch naming conventions:**

- `feat/add-dark-mode` — for new features
- `fix/resolve-navbar-bug` — for bug fixes
- `docs/update-readme` — for documentation changes
- `refactor/extract-button-component` — for refactoring
- `chore/update-dependencies` — for maintenance

### 4. Make Your Changes

Follow the [Code Structure](#code-structure) guidelines for placing files and components.

Ensure your code:

- Follows the existing code style
- Passes linting: `pnpm lint`
- Builds successfully: `pnpm build`
- Is accessible (use semantic HTML, ARIA when needed)

### 5. Commit Your Changes

Follow the [Commit Standards](#commit-standards) section below. Each commit must be **atomic**.

### 6. Push to Your Fork

```bash
git push origin feat/issue-number-short-description
```

### 7. Open a Pull Request

- Create a PR against `int-money/landing-page:main`
- Reference the issue in your PR description (e.g., `Closes #18`)
- Fill out the PR template completely
- **Attach a screen recording** if your changes include UI modifications
- List any breaking changes

## Commit Standards

### Conventional Commits Specification

All commits **must** follow the [Conventional Commits](https://www.conventionalcommits.org/) format:

```
<type>(<scope>): <description>

[optional body]
[optional footer]
```

### Commit Types

| Type       | When to use                                    | Example                                        |
| ---------- | ---------------------------------------------- | ---------------------------------------------- |
| `feat`     | A new feature                                  | `feat(hero): add animated gradient background` |
| `fix`      | A bug fix                                      | `fix(navbar): resolve mobile menu focus trap`  |
| `refactor` | Code restructuring (no new features, no fixes) | `refactor(button): extract common styles`      |
| `docs`     | Documentation changes                          | `docs: update README with new section`         |
| `style`    | Formatting, linting (not CSS changes)          | `style: remove trailing whitespace`            |
| `test`     | Adding or updating tests                       | `test(navbar): add mobile menu tests`          |
| `chore`    | Maintenance, dependency updates                | `chore: update Next.js to v16.1`               |
| `perf`     | Performance improvements                       | `perf(hero): lazy load images`                 |
| `ci`       | CI/CD pipeline changes                         | `ci: add GitHub Actions workflow`              |

### Atomic Commits

Each commit **must represent one logical change**. Examples:

✅ **Good:**

```bash
commit 1: feat(button): add disabled state visual feedback
commit 2: docs: update button component usage in README
```

❌ **Bad:**

```bash
# Bundling unrelated changes in one commit
commit: feat: add button states, fix navbar, update docs
```

### Commit Message Examples

**Good:**

```
feat(navbar): add dark mode toggle button

- Add toggle icon to top right of navbar
- Connect to next-themes useTheme hook
- Add smooth transition animation

Closes #24
```

**Bad:**

```
Fixed stuff
WIP: navbar changes
Changed some things
```

### Guidelines

- **First line:** Keep it under 50 characters
- **Imperative mood:** Use "add" not "added" or "adds"
- **No period** at the end of the subject line
- **Body:** Explain _why_ the change was made, not _what_ changed
- **Reference issues:** Use `Closes #N`, `Fixes #N`, `Resolves #N`

### Cleaning Up Your History

Before submitting a PR, clean up your commit history:

```bash
git rebase -i main
```

Use this to squash work-in-progress commits, fix typos, or reorder commits logically. However, **never squash different logical changes** into one commit.

## Code Structure

### Atomic Design Hierarchy

This project strictly follows Atomic Design principles. Place components in the correct level:

#### **Atoms** (`components/atoms/`)

Indivisible UI building blocks:

- `Button.tsx`
- `Card.tsx`
- `Badge.tsx`
- `Input.tsx`

#### **Molecules** (`components/molecules/`)

Small groups of atoms:

- `SectionHeader.tsx` (heading + subtitle)
- `FeatureChip.tsx` (icon + text + badge)
- `FormGroup.tsx` (label + input + error message)

#### **Organisms** (`components/organisms/`)

Complex, self-contained sections:

- `Navbar.tsx`
- `HeroSection.tsx`
- `Footer.tsx`
- `FeatureGrid.tsx`

#### **Templates** (`components/templates/`)

Page-level layout shells:

- `LandingPageTemplate.tsx`
- `BlogPostTemplate.tsx`

#### **Providers** (`components/providers/`)

Context providers and wrappers:

- `ThemeProvider.tsx`
- `ToastProvider.tsx`

#### **UI** (`components/ui/`)

Pre-built shadcn/ui components (do not modify):

- `components/ui/button.tsx`
- `components/ui/dialog.tsx`
- etc.

### Import Rules

**Do NOT use barrel exports** (`index.ts`). Always import directly:

```typescript
// ✅ Good
import { Button } from "@/components/atoms/button";
import { Navbar } from "@/components/organisms/navbar";

// ❌ Bad
import { Button } from "@/components";
import { Button } from "@/components/atoms";
```

### File Naming

- **Components:** PascalCase with `.tsx` extension
  - `Button.tsx`, `NavBar.tsx`, `HeroSection.tsx`
- **Hooks:** camelCase with `use-` prefix and `.ts` or `.tsx` extension
  - `useScroll.ts`, `useMobileMenu.ts`
- **Utilities:** camelCase with `.ts` extension
  - `formatDate.ts`, `cn.ts`
- **Styles:** camelCase with `.css` extension
  - `global-animations.css`, `gradients.css`

## Screen Recordings (Required)

Every PR that includes UI changes **must** include a screen recording. This is **non-negotiable**.

### Requirements

- **Show the full interaction:** For new features, demonstrate all user interactions
- **Show before/after:** For bug fixes, include a screen recording showing the issue before your fix and the fix in action
- **Acceptable formats:** `.mp4`, `.mov`, `.gif`, or a Loom/YouTube link
- **Quality:** Clear, smooth, at least 720p resolution preferred

### How to Record

**macOS:**

- Use QuickTime Player (Cmd+Space, type "QuickTime")
- File → New Screen Recording
- Save as `.mov`

**Windows:**

- Use Xbox Game Bar (Windows key + G)
- Or use OBS Studio (free)

**Free Online:**

- [Loom](https://www.loom.com) — browser-based, no download needed
- [Screencastify](https://www.screencastify.com) — Chrome extension

### Where to Attach

Include the recording in your PR description:

```markdown
## 🎬 Screen Recording

[Loom link](https://loom.com/share/xxxxx)

The recording shows:

- Before: [describe the issue/missing feature]
- After: [describe the fix/new feature]
```

Or upload directly to GitHub:

1. In your PR description, drag and drop the video file
2. GitHub will upload and display it

## PR Checklist

Before submitting your PR, verify **all** of the following:

#### Code Quality

- [ ] `pnpm lint` passes without errors or warnings
- [ ] `pnpm build` succeeds
- [ ] No unused imports or variables
- [ ] Code follows existing style and patterns
- [ ] TypeScript types are correct (no `any` unless unavoidable)

#### Structure & Design

- [ ] Components are placed in the correct Atomic Design level
- [ ] No barrel exports (`index.ts`) used
- [ ] Component names follow PascalCase
- [ ] Props are well-typed and documented (JSDoc comments for public APIs)

#### Commits

- [ ] Commits follow Conventional Commits format
- [ ] Each commit is atomic (one logical change)
- [ ] No `WIP`, `fixup`, `save progress`, or similar commits
- [ ] Commit history is clean (use `rebase -i` if needed)

#### Documentation

- [ ] README updated (if feature affects users)
- [ ] Component comments added (if complex logic)
- [ ] Types are exported and clear

#### Testing (if applicable)

- [ ] All new features have corresponding tests
- [ ] Tests pass locally
- [ ] Edge cases are covered

#### PR Submission

- [ ] PR title follows Conventional Commits format
- [ ] PR description explains the _why_, not just the _what_
- [ ] Issue number linked (e.g., `Closes #18`)
- [ ] **Screen recording attached** (required for UI changes)
- [ ] **No merge commits** in the history (use `rebase`)

## Issues & Labels

### Issue Labels

| Label              | Meaning                                         | Who should work on it               |
| ------------------ | ----------------------------------------------- | ----------------------------------- |
| `stellar-wave`     | Part of the Stellar Wave open-source initiative | Anyone, especially new contributors |
| `good first issue` | Great starting point for new contributors       | Beginners encouraged                |
| `enhancement`      | New feature or improvement request              | Feature development                 |
| `bug`              | Something isn't working as expected             | Bug fixes                           |
| `documentation`    | Docs, README, or comments                       | Documentation improvement           |
| `help wanted`      | Extra attention or expertise needed             | Experienced contributors            |

### Finding Issues to Work On

1. Browse [open issues](https://github.com/int-money/landing-page/issues)
2. Look for `good first issue` or `stellar-wave` labels if you're new
3. Comment on the issue to let maintainers know you're working on it
4. Claim the issue before starting to avoid duplicate work

### Creating New Issues

When reporting a bug or suggesting a feature:

1. **Search first** to avoid duplicates
2. **Be specific:** Include steps to reproduce (for bugs) or clear use cases (for features)
3. **Screenshots/recordings:** Include visual context
4. **Your environment:** Node version, OS, browser (if relevant)

## Questions?

Have questions about contributing? Here are your options:

1. **Comment on the issue** if it exists
2. **Open a discussion** on GitHub
3. **Check existing PRs** for similar workflows
4. **Read the docs** in [README.md](README.md)

Thank you for contributing! 🚀
# Contributing to IntMoney

First off, thank you for considering contributing to IntMoney! We welcome contributions from everyone and abide by our [Code of Conduct](CODE_OF_CONDUCT.md). Please read these guidelines to ensure a smooth collaboration.

## Fork & Branch Workflow

1. Fork the repository to your own GitHub account
2. Clone your fork locally
3. Create a feature branch from main: `git checkout -b feat/issue-number-short-description`
4. Make your changes
5. Push to your fork
6. Open a Pull Request against `int-money/landing-page:main`

## Commit Standards (Conventional Commits)

All commits must follow the [Conventional Commits](https://www.conventionalcommits.org/) specification:

```
<type>(<scope>): <short description> [optional body] [optional footer]
```

**Types**: `feat`, `fix`, `docs`, `style`, `refactor`, `test`, `chore`, `perf`, `ci`

**Examples**:

- `feat(waitlist): add email validation to waitlist modal`
- `fix(navbar): resolve mobile menu focus trap`
- `refactor(atoms): extract SectionBadge from inline JSX`
- `docs: update README with project structure`
- `chore: remove unused radix-ui dependencies`

## Atomic Commits

- Each commit should represent one logical change — do not bundle unrelated changes.
- If you're extracting a component AND fixing a bug, those are two separate commits.
- Commits should build and pass lint individually (no "WIP" or "fixup" commits in the final PR).
- Use interactive rebase (`git rebase -i`) to clean up your history before submitting a PR.

## Screen Recording Requirement

- **Every PR that changes UI must include a screen recording** demonstrating the feature or fix.
- Record your screen showing the before/after (for fixes) or a full walkthrough (for new features).
- Upload the recording directly to the PR description or as a comment.
- Acceptable formats: `.mp4`, `.mov`, `.gif`, or a Loom/YouTube link.
- This helps reviewers verify visual correctness without pulling the branch locally.

## Local Setup

The project uses Next.js 16, TypeScript, Tailwind CSS 4, and shadcn/ui.
We also follow [Atomic Design principles](https://atomicdesign.bradfrost.com/) (atoms → molecules → organisms → templates → pages).

```bash
# Clone your fork
git clone https://github.com/YOUR_USERNAME/landing-page.git
cd landing-page

# Install dependencies (we use pnpm)
pnpm install

# Copy environment variables
cp .env.example .env.local

# Start dev server
pnpm dev
```

## PR Review Process

1. Ensure all CI checks pass (lint, type-check, build).
2. Self-review your diff before requesting review.
3. Link the issue being addressed in the PR description.
4. **Include a screen recording (mandatory for UI changes).**
5. Respond to review feedback promptly.

> **Note**: These contribution guidelines are non-negotiable. PRs that do not follow them (e.g., missing conventional commits or missing a required screen recording) will not be reviewed.
