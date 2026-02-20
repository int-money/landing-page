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
