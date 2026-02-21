# IntMoney

[![CI](https://github.com/int-money/landing-page/actions/workflows/ci.yml/badge.svg)](https://github.com/int-money/landing-page/actions/workflows/ci.yml)

An AI agent wallet built on Stellar. Send, receive, swap, and manage your funds using natural language — IntMoney understands your intent and handles the rest.

This repository contains the landing page for IntMoney, featuring a modern, responsive design with interactive elements and smooth animations.

## Features

- **Modern UI/UX** - Glassmorphism effects, gradient accents, and smooth animations
- **Interactive Demo** - Try the chat/voice interface directly on the landing page
- **Responsive Design** - Fully responsive across all device sizes
- **Smooth Scrolling** - Animated navigation between sections
- **Dark Mode Ready** - Built with theming support via next-themes
- **Accessible** - Built with Radix UI primitives for accessibility
- **Performance Optimized** - Next.js 16 with React 19 for optimal performance

## Tech Stack

- **Framework**: [Next.js 16](https://nextjs.org/) with App Router
- **Language**: [TypeScript](https://www.typescriptlang.org/)
- **Styling**: [Tailwind CSS 4](https://tailwindcss.com/)
- **UI Components**: [Radix UI](https://www.radix-ui.com/) + [shadcn/ui](https://ui.shadcn.com/)
- **Icons**: [Lucide React](https://lucide.dev/)
- **Animations**: CSS animations + Tailwind Animate
- **Theming**: [next-themes](https://github.com/pacocoursey/next-themes)

## Getting Started

### Prerequisites

- Node.js 20+
- pnpm

### Installation

1. **Fork the repository** — click the "Fork" button on [github.com/int-money/landing-page](https://github.com/int-money/landing-page)

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

6. **Open your browser** — navigate to [http://localhost:3000](http://localhost:3000)

## Project Structure

This project follows [Atomic Design](https://bradfrost.com/blog/post/atomic-web-design/) principles:

```
landing-page/
├── app/
│   ├── globals.css          # Global styles, CSS variables, animations
│   ├── layout.tsx           # Root layout with theme provider
│   └── page.tsx             # Main landing page
├── components/
│   ├── atoms/               # Indivisible UI primitives (Button, Card, GradientText)
│   ├── molecules/           # Small groups of atoms (SectionHeader, FeatureChip, StepCard)
│   ├── organisms/           # Complex composed sections (Navbar, HeroSection, Footer)
│   ├── templates/           # Page-level layout shells
│   └── providers/           # Context providers (ThemeProvider)
├── hooks/                   # Custom React hooks
├── lib/
│   └── utils.ts             # Utility functions (cn helper)
├── public/                  # Static assets
└── styles/                  # Additional stylesheets
```

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

We welcome contributions! Before you start, please read this section carefully.

### Workflow

1. **Fork** the repository to your own GitHub account
2. **Clone** your fork locally
3. **Branch** from `main`:
   ```bash
   git checkout -b feat/issue-number-short-description
   ```
4. **Make** your changes following the guidelines below
5. **Push** to your fork
6. **Open a Pull Request** against `int-money/landing-page:main`

### Commit Standards

All commits **must** follow the [Conventional Commits](https://www.conventionalcommits.org/) specification:

```
<type>(<scope>): <short description>
```

**Types:**

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
feat(waitlist): add email validation to waitlist modal
fix(navbar): resolve mobile menu focus trap
refactor(atoms): extract SectionBadge from inline JSX
docs: update README with project structure
chore: remove unused radix-ui dependencies
```

### Atomic Commits

Each commit must represent **one logical change**:

- Extracting a component AND fixing a bug = **two separate commits**
- No `WIP`, `fixup`, or `save progress` commits in your final PR
- Every commit should build and pass lint on its own
- Use `git rebase -i` to clean up your history before submitting

### Screen Recording Requirement

Every PR that includes UI changes **must** include a screen recording:

- Record a walkthrough demonstrating the feature or fix
- For bug fixes, show the before and after
- For new features, show the full user interaction
- Upload directly to the PR description or as a comment
- Accepted formats: `.mp4`, `.mov`, `.gif`, or a Loom/YouTube link

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

### Colors

The color scheme is defined in `app/globals.css` using CSS custom properties with the OKLCH color space:

```css
.dark {
  --primary: oklch(0.65 0.25 290); /* Space purple */
  --background: oklch(0.065 0.01 290); /* Deep purple-black */
}
```

### Theme

The site supports both light and dark modes. Theme switching is handled by `next-themes`. The dark theme features a deep purple-black background with space purple accents.

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## Links

- **Stellar Network**: [https://stellar.org](https://stellar.org)
- **GitHub**: [https://github.com/int-money/landing-page](https://github.com/int-money/landing-page)
