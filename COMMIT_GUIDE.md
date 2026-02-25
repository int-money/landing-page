# Commit Guide for Theme Toggle Feature

This guide provides the exact commands to commit the theme toggle implementation following Conventional Commits specification.

## Prerequisites

Before committing, ensure you're on a feature branch:

```bash
# Create and checkout a new branch
git checkout -b feat/theme-toggle

# Or if you're already on a branch, verify it
git branch
```

## Commit Sequence

Execute these commits in order. Each commit represents one logical change and builds successfully on its own.

### Commit 1: Create Theme Toggle Atom Component

```bash
# Stage the new atom component
git add components/atoms/theme-toggle.tsx

# Commit with conventional commit message
git commit -m "feat(atoms): add theme toggle component with smooth transitions

- Create ThemeToggle atom component in components/atoms/
- Implement smooth icon transitions between Sun and Moon icons
- Use next-themes useTheme() hook for state management
- Add hydration mismatch prevention with mounted state
- Include accessibility features with dynamic ARIA labels
- Respect prefers-reduced-motion for animations
- Use ghost button variant for minimal visual weight"
```

### Commit 2: Configure Theme Provider in Layout

```bash
# Stage the layout changes
git add app/layout.tsx

# Commit the layout configuration
git commit -m "feat(layout): configure ThemeProvider with dark default and system support

- Remove hardcoded 'dark' className from html tag
- Add suppressHydrationWarning to prevent Next.js warnings
- Wrap children with ThemeProvider component
- Configure attribute='class' for class-based theme switching
- Set defaultTheme='dark' to maintain current behavior
- Enable system preference detection with enableSystem
- Disable transition on change to prevent flash"
```

### Commit 3: Integrate Theme Toggle into Navbar

```bash
# Stage the navbar changes
git add components/navbar.tsx

# Commit the navbar integration
git commit -m "feat(navbar): integrate theme toggle in desktop and mobile views

- Import ThemeToggle component from atoms
- Add theme toggle to desktop navbar between nav links and CTA
- Add theme toggle to mobile menu after nav links
- Maintain consistent spacing with separators
- Preserve existing navbar functionality and styling"
```

### Commit 4: Enhance Light Mode Styling

```bash
# Stage the CSS changes
git add app/globals.css

# Commit the styling enhancements
git commit -m "style(theme): enhance light mode styling for all UI elements

- Add light mode variants for gradient-text
- Add light mode variants for glow and glow-sm effects
- Add light mode variant for section-glow
- Add light mode variant for text-glow
- Add light mode variant for grid-pattern
- Reduce effect intensity in light mode for better contrast
- Ensure glassmorphism cards work well in both themes"
```

### Commit 5: Add Implementation Documentation

```bash
# Stage the documentation
git add THEME_TOGGLE_IMPLEMENTATION.md COMMIT_GUIDE.md

# Commit the documentation
git commit -m "docs(theme): add implementation guide and commit instructions

- Add comprehensive implementation documentation
- Include testing checklist and troubleshooting guide
- Document atomic design compliance
- Provide commit guide for conventional commits
- Add PR description template"
```

## Verify Commits

After committing, verify your commit history:

```bash
# View commit history
git log --oneline -5

# Expected output:
# abc1234 docs(theme): add implementation guide and commit instructions
# def5678 style(theme): enhance light mode styling for all UI elements
# ghi9012 feat(navbar): integrate theme toggle in desktop and mobile views
# jkl3456 feat(layout): configure ThemeProvider with dark default and system support
# mno7890 feat(atoms): add theme toggle component with smooth transitions
```

## Push to Remote

```bash
# Push your feature branch to remote
git push origin feat/theme-toggle

# Or if this is your first push on this branch
git push -u origin feat/theme-toggle
```

## Create Pull Request

After pushing, create a PR with the following details:

### PR Title
```
feat: add theme toggle with light/dark mode support
```

### PR Description
```markdown
## Description
Adds theme toggle functionality to the navbar, allowing users to switch between light and dark modes with proper persistence and no flash of incorrect theme on page load.

## Context
The project already has next-themes installed and a ThemeProvider wrapping the app, but the theme was hardcoded to dark mode. This PR adds a UI toggle and ensures both light and dark themes are visually polished.

## Changes
- ✨ Created `ThemeToggle` atom component with smooth icon transitions
- ⚙️ Configured `ThemeProvider` in layout with dark default and system support
- 🎨 Integrated toggle into desktop and mobile navbar
- 💅 Enhanced light mode styling for all UI elements (cards, glows, gradients)

## Implementation Details
- Uses `next-themes` `useTheme()` hook for state management
- Theme preference persists via localStorage (handled by next-themes)
- No flash of incorrect theme on page load (suppressHydrationWarning + next-themes script)
- Smooth 300ms transitions with prefers-reduced-motion support
- Follows Atomic Design principles (component in atoms/)
- Accessible with proper ARIA labels and keyboard navigation

## Testing Checklist
- [x] Toggle works on desktop navbar
- [x] Toggle works in mobile menu
- [x] Theme persists after page reload
- [x] No flash of wrong theme on initial load
- [x] Light mode is visually polished (proper contrast, visible borders)
- [x] All animated elements work in both themes
- [x] Glassmorphism cards adapt to both themes
- [x] Gradient text visible in both themes
- [x] Glow effects appropriate for each theme
- [x] Respects prefers-reduced-motion
- [x] Keyboard navigation works
- [x] ARIA labels are correct

## Screen Recording
[Attach your screen recording here showing:]
- Theme toggle on desktop
- Theme toggle on mobile
- Theme persistence after reload
- Light mode visual polish

## Complexity
Medium (150 points)

## Atomic Design Compliance
- ✅ Component placed in `components/atoms/`
- ✅ No barrel exports used
- ✅ Direct file imports only
- ✅ Follows existing component patterns

## Conventional Commits
All commits follow the Conventional Commits specification:
- `feat(atoms)`: Theme toggle component
- `feat(layout)`: ThemeProvider configuration
- `feat(navbar)`: Navbar integration
- `style(theme)`: Light mode enhancements
- `docs(theme)`: Implementation documentation
```

## Commit Message Format Reference

All commits follow this format:

```
<type>(<scope>): <short description>

<body>
```

### Types Used
- `feat`: New feature
- `style`: Styling changes (CSS)
- `docs`: Documentation

### Scopes Used
- `atoms`: Atomic component
- `layout`: Root layout
- `navbar`: Navigation component
- `theme`: Theme-related changes

### Guidelines
- Use present tense ("add" not "added")
- Use imperative mood ("move" not "moves")
- Don't capitalize first letter of description
- No period at the end of description
- Body is optional but recommended for complex changes
- Each commit should build and pass lint

## Troubleshooting

### Issue: Commit rejected due to lint errors
```bash
# Run lint to see errors
npm run lint

# Fix errors and amend commit
git add .
git commit --amend --no-edit
```

### Issue: Need to modify last commit
```bash
# Make your changes
git add <files>

# Amend the last commit
git commit --amend

# Force push if already pushed
git push origin feat/theme-toggle --force-with-lease
```

### Issue: Commits in wrong order
```bash
# Interactive rebase to reorder
git rebase -i HEAD~5

# Follow the instructions to reorder commits
```

### Issue: Need to squash commits
```bash
# Interactive rebase
git rebase -i HEAD~5

# Change 'pick' to 'squash' for commits to combine
```

## Post-Merge Cleanup

After your PR is merged:

```bash
# Switch back to main branch
git checkout main

# Pull latest changes
git pull origin main

# Delete feature branch locally
git branch -d feat/theme-toggle

# Delete feature branch remotely
git push origin --delete feat/theme-toggle
```

## Notes

- Each commit is atomic and represents one logical change
- All commits build successfully on their own
- Commit messages follow Conventional Commits spec
- No WIP or fixup commits in final PR
- Each commit has a clear, descriptive message
- Body text provides context when needed

## References

- [Conventional Commits](https://www.conventionalcommits.org/)
- [Atomic Commits](https://www.freshconsulting.com/insights/blog/atomic-commits/)
- [Git Best Practices](https://git-scm.com/book/en/v2/Distributed-Git-Contributing-to-a-Project)
