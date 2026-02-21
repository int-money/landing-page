# IntMoney Landing Page

[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](LICENSE)
[![PRs Welcome](https://img.shields.io/badge/PRs-welcome-brightgreen.svg)](https://github.com/int-money/landing-page/blob/main/CONTRIBUTING.md)
[![Part of Stellar Wave](https://img.shields.io/badge/Stellar-Wave-blue.svg)](https://stellar.org)

**The modern, responsive landing page for IntMoney — an AI agent wallet built on Stellar.**

## Overview

IntMoney is an AI-powered wallet that lets you send, receive, swap, and manage funds using natural language. This repository contains the high-performance, accessible landing page showcasing the IntMoney experience with interactive demos, smooth animations, and a modern design.

## Preview

> 📸 **Screenshot:** Add a screenshot or GIF of the landing page here
>
> For now, run `pnpm dev` locally to see the full experience.

## Features

- **Modern UI/UX** — Glassmorphism effects, gradient accents, and smooth animations
- **Interactive Demo** — Try the chat/voice interface directly on the landing page
- **Responsive Design** — Fully responsive across all device sizes
- **Dark Mode Ready** — Built with theming support via next-themes
- **Accessible** — Built with Radix UI primitives for accessibility
- **Performance Optimized** — Next.js 16 with React 19 for optimal performance

## Tech Stack

- **Framework**: [Next.js 16](https://nextjs.org/) — React framework with App Router
- **Language**: [TypeScript](https://www.typescriptlang.org/) — Type-safe JavaScript
- **Styling**: [Tailwind CSS 4](https://tailwindcss.com/) — Utility-first CSS
- **UI Components**: [Radix UI](https://www.radix-ui.com/) + [shadcn/ui](https://ui.shadcn.com/) — Headless, accessible components
- **Icons**: [Lucide React](https://lucide.dev/) — Beautiful icon library
- **Animations**: CSS animations + Tailwind Animate — Smooth, performant motion
- **Theming**: [next-themes](https://github.com/pacocoursey/next-themes) — Dark mode support

## Getting Started

### Prerequisites

- **Node.js** 20 or higher
- **pnpm** (install globally with `npm install -g pnpm`)

### Installation

1. **Fork the repository**
   - Click the "Fork" button at [github.com/int-money/landing-page](https://github.com/int-money/landing-page)
   - This creates your own copy to work on


2. **Clone your fork**

   ```bash
   git clone https://github.com/YOUR_USERNAME/landing-page.git
   cd landing-page
   ```

3. **Install dependencies**

   ```bash
   pnpm install
   ```

4. **Copy environment variables**

   ```bash
   cp .env.example .env.local
   ```

5. **Start the development server**

   ```bash
   pnpm dev
   ```

5. **Open in browser** — Visit [http://localhost:3000](http://localhost:3000)

Done! You now have the project running locally.

## Project Structure

This project follows **Atomic Design** principles for scalable, organized component architecture:

```
components/
├── atoms/       # Indivisible UI primitives (Button, Card, Badge)
├── molecules/   # Small groups of atoms (SectionHeader, FeatureChip)
├── organisms/   # Complex composed sections (Navbar, Footer, HeroSection)
├── templates/   # Page-level layout shells
├── providers/   # Context providers (ThemeProvider)
└── ui/          # Shadcn/ui pre-built components
```

<details>
<summary><strong>Full project structure</strong></summary>

```
landing-page/
├── app/
│   ├── globals.css          # Global styles, CSS variables, animations
│   ├── layout.tsx           # Root layout with theme provider
│   └── page.tsx             # Main landing page
├── components/
│   ├── atoms/               # Indivisible UI primitives
│   ├── molecules/           # Small groups of atoms
│   ├── organisms/           # Complex composed sections
│   ├── templates/           # Page-level layout shells
│   ├── providers/           # Context providers
│   └── ui/                  # Shadcn/ui components
├── hooks/                   # Custom React hooks
├── lib/
│   └── utils.ts             # Utility functions (cn helper)
├── public/                  # Static assets
├── styles/                  # Additional stylesheets
├── package.json
├── tsconfig.json
└── next.config.mjs
```

</details>

## Available Scripts

| Command             | Description                      |
| ------------------- | -------------------------------- |
| `pnpm dev`          | Start development server         |
| `pnpm build`        | Build for production             |
| `pnpm start`        | Start production server          |
| `pnpm lint`         | Run ESLint                       |
| `pnpm format`       | Format code with Prettier        |
| `pnpm format:check` | Check formatting without writing |
| `pnpm test`         | Run tests                        |

## Contributing

We welcome contributors! **Before you start, please read [CONTRIBUTING.md](CONTRIBUTING.md)** for the full development workflow.

### Non-Negotiable Rules ⚠️

These rules are **mandatory** for all PRs. Violations will block your contribution.

#### 1. Screen Recordings Required for UI Changes

Every PR with UI modifications must include a screen recording:

- Show the full interaction for new features
- Show before/after for bug fixes
- Accepted formats: `.mp4`, `.mov`, `.gif`, or Loom/YouTube link
- Upload directly to your PR description

#### 2. Conventional Commits (Atomic)

All commits must follow the [Conventional Commits](https://www.conventionalcommits.org/) spec:

```
<type>(<scope>): <short description>
```

**Types:** `feat`, `fix`, `refactor`, `docs`, `style`, `test`, `chore`, `perf`, `ci`

| Type       | When to use                                             |
| ---------- | ------------------------------------------------------- |
| `feat`     | A new feature                                           |
| `fix`      | A bug fix                                               |
| `refactor` | Code change that neither fixes a bug nor adds a feature |
| `docs`     | Documentation changes                                   |
| `style`    | Formatting, missing semicolons, etc. (not CSS changes)  |
| `test`     | Adding or updating tests                                |
| `chore`    | Maintenance tasks (deps, config, CI)                    |
| `perf`     | Performance improvements                                |
| `ci`       | CI/CD pipeline changes                                  |

**Examples:**

```bash
feat(navbar): add mobile hamburger menu
fix(hero): resolve text overflow on sm viewports
refactor(button): extract common styles to atom
```

### Quick Start for Contributors

1. **Fork** the repository
2. **Create a branch**: `git checkout -b feat/your-feature`
3. **Make atomic commits** following the spec above
4. **Push to your fork**
5. **Open a PR** with a screen recording (if UI changes)

PRs with UI changes that do not include a screen recording will not be reviewed.

### Issue Labels

| Label              | Meaning                                   |
| ------------------ | ----------------------------------------- |
| `stellar-wave`     | Part of the open-source wave initiative   |
| `good first issue` | Great starting point for new contributors |
| `enhancement`      | New feature or improvement                |
| `bug`              | Something isn't working                   |

### PR Checklist

Before submitting your PR, verify:

- [ ] Code follows Atomic Design structure (atoms → molecules → organisms → templates)
- [ ] Commits follow Conventional Commits format
- [ ] Each commit is atomic (one logical change)
- [ ] `pnpm lint` passes
- [ ] `pnpm build` succeeds
- [ ] Screen recording attached (required for UI changes)
- [ ] Issue number linked in PR description

## Customization

The color scheme uses CSS custom properties (OKLCH color space) in [app/globals.css](app/globals.css). Edit the color values to customize the theme:

```css
.dark {
  --primary: oklch(0.65 0.25 290); /* Space purple */
  --background: oklch(0.065 0.01 290); /* Deep purple-black */
}
```

## License

MIT License — see [LICENSE](LICENSE) for details.

## Links

- **IntMoney**: [https://github.com/int-money](https://github.com/int-money)
- **Stellar Network**: [https://stellar.org](https://stellar.org)
- **This Repository**: [github.com/int-money/landing-page](https://github.com/int-money/landing-page)
