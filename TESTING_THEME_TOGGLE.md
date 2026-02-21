# Testing Guide: Theme Toggle Feature

This guide helps you test the theme toggle implementation thoroughly before submitting your PR.

## Quick Start

### 1. Install Dependencies (if needed)
```bash
pnpm install
# or
npm install
```

### 2. Start Development Server
```bash
pnpm dev
# or
npm run dev
```

### 3. Open Browser
Navigate to `http://localhost:3000`

## Visual Testing Checklist

### Desktop View

#### Navbar Layout
- [ ] Theme toggle appears between nav links and "Join Waitlist" button
- [ ] Toggle button has proper spacing (separators visible)
- [ ] Toggle button is properly sized (icon-sm variant)
- [ ] Toggle button has rounded-full shape
- [ ] Toggle button has ghost variant styling

#### Theme Toggle Interaction
- [ ] Sun icon visible in dark mode
- [ ] Moon icon visible in light mode
- [ ] Icons transition smoothly (300ms rotation + scale)
- [ ] Only one icon visible at a time
- [ ] Hover state works (ghost button hover effect)
- [ ] Click toggles theme immediately
- [ ] No layout shift when toggling

#### Dark Mode Appearance
- [ ] Background is deep purple-black (oklch(0.065 0.01 290))
- [ ] Text is light and readable
- [ ] Glassmorphism cards have proper transparency
- [ ] Gradient text is vibrant purple→cyan→violet
- [ ] Glow effects are visible and prominent
- [ ] Background orbs are visible
- [ ] Grid pattern is subtle
- [ ] Borders are visible

#### Light Mode Appearance
- [ ] Background is white/near-white (oklch(0.99 0 0))
- [ ] Text is dark and readable
- [ ] Glassmorphism cards have proper transparency
- [ ] Gradient text is visible (purple tones)
- [ ] Glow effects are subtle but present
- [ ] Background orbs are visible but lighter
- [ ] Grid pattern is visible (purple-tinted dots)
- [ ] Borders are visible and have good contrast

### Mobile View

#### Mobile Menu
- [ ] Open mobile menu (hamburger icon)
- [ ] Theme toggle appears after nav links
- [ ] Theme toggle appears before "Join Waitlist" button
- [ ] Toggle is centered in mobile menu
- [ ] Toggle works when clicked
- [ ] Theme persists when menu is closed
- [ ] Menu can be closed after toggling theme

#### Mobile Theme Toggle
- [ ] Sun/Moon icons visible and properly sized
- [ ] Transitions work smoothly
- [ ] Touch target is adequate (44x44px minimum)
- [ ] No layout issues on small screens

### Tablet View (768px - 1024px)
- [ ] Desktop navbar layout is used
- [ ] Theme toggle appears in correct position
- [ ] All interactions work properly

## Functional Testing

### Theme Persistence
1. [ ] Set theme to light mode
2. [ ] Refresh page (F5 or Cmd+R)
3. [ ] Verify light mode persists
4. [ ] Set theme to dark mode
5. [ ] Refresh page
6. [ ] Verify dark mode persists

### No Flash of Incorrect Theme
1. [ ] Set theme to light mode
2. [ ] Hard refresh (Ctrl+Shift+R or Cmd+Shift+R)
3. [ ] Verify no flash of dark theme before light appears
4. [ ] Set theme to dark mode
5. [ ] Hard refresh
6. [ ] Verify no flash of light theme before dark appears

### System Preference Detection
1. [ ] Clear localStorage: `localStorage.clear()` in console
2. [ ] Refresh page
3. [ ] Verify theme matches system preference
4. [ ] Change system theme in OS settings
5. [ ] Refresh page
6. [ ] Verify theme updates to match system

### Browser Compatibility

#### Chrome/Edge
- [ ] Theme toggle works
- [ ] Transitions are smooth
- [ ] No console errors
- [ ] Theme persists

#### Firefox
- [ ] Theme toggle works
- [ ] Transitions are smooth
- [ ] No console errors
- [ ] Theme persists

#### Safari (Desktop)
- [ ] Theme toggle works
- [ ] Transitions are smooth
- [ ] No console errors
- [ ] Theme persists

#### Safari (iOS)
- [ ] Theme toggle works
- [ ] Touch interactions work
- [ ] Theme persists
- [ ] No layout issues

#### Chrome (Android)
- [ ] Theme toggle works
- [ ] Touch interactions work
- [ ] Theme persists
- [ ] No layout issues

## Accessibility Testing

### Keyboard Navigation
1. [ ] Tab to theme toggle button
2. [ ] Verify focus ring is visible
3. [ ] Press Enter or Space to toggle
4. [ ] Verify theme changes
5. [ ] Tab away and back
6. [ ] Verify focus state is maintained

### Screen Reader Testing

#### VoiceOver (macOS/iOS)
1. [ ] Enable VoiceOver (Cmd+F5)
2. [ ] Navigate to theme toggle
3. [ ] Verify announcement: "Switch to light mode, button" (in dark mode)
4. [ ] Activate button
5. [ ] Verify announcement updates: "Switch to dark mode, button"

#### NVDA (Windows)
1. [ ] Enable NVDA
2. [ ] Navigate to theme toggle
3. [ ] Verify proper button announcement
4. [ ] Activate button
5. [ ] Verify announcement updates

#### JAWS (Windows)
1. [ ] Enable JAWS
2. [ ] Navigate to theme toggle
3. [ ] Verify proper button announcement
4. [ ] Activate button
5. [ ] Verify announcement updates

### Reduced Motion
1. [ ] Enable reduced motion in OS settings
   - macOS: System Preferences → Accessibility → Display → Reduce motion
   - Windows: Settings → Ease of Access → Display → Show animations
2. [ ] Refresh page
3. [ ] Toggle theme
4. [ ] Verify no rotation/scale animations
5. [ ] Verify instant icon swap
6. [ ] Verify other page animations are also reduced

### Color Contrast
1. [ ] Use browser DevTools or WAVE extension
2. [ ] Check contrast ratios in light mode:
   - [ ] Body text: minimum 4.5:1
   - [ ] Heading text: minimum 4.5:1
   - [ ] Button text: minimum 4.5:1
3. [ ] Check contrast ratios in dark mode:
   - [ ] Body text: minimum 4.5:1
   - [ ] Heading text: minimum 4.5:1
   - [ ] Button text: minimum 4.5:1

## Performance Testing

### Lighthouse Audit
1. [ ] Open Chrome DevTools
2. [ ] Go to Lighthouse tab
3. [ ] Run audit in both themes
4. [ ] Verify no performance regressions
5. [ ] Check accessibility score (should be 90+)

### Bundle Size
```bash
# Build the project
pnpm build

# Check bundle size
# Verify theme-toggle.tsx doesn't significantly increase bundle
```

### Hydration
1. [ ] Open DevTools Console
2. [ ] Refresh page
3. [ ] Verify no hydration warnings
4. [ ] Verify no "Text content does not match" errors

## Edge Cases

### Rapid Toggling
1. [ ] Click theme toggle rapidly 10 times
2. [ ] Verify no visual glitches
3. [ ] Verify theme state is consistent
4. [ ] Verify no console errors

### Browser Back/Forward
1. [ ] Toggle theme
2. [ ] Navigate to another page (if available)
3. [ ] Click browser back button
4. [ ] Verify theme is maintained

### Multiple Tabs
1. [ ] Open site in two tabs
2. [ ] Toggle theme in tab 1
3. [ ] Switch to tab 2
4. [ ] Refresh tab 2
5. [ ] Verify theme matches tab 1

### Incognito/Private Mode
1. [ ] Open site in incognito/private window
2. [ ] Toggle theme
3. [ ] Verify toggle works
4. [ ] Close and reopen incognito window
5. [ ] Verify theme resets to default (dark)

## Visual Regression Testing

### Component Appearance

#### Hero Section
- [ ] Badge looks good in both themes
- [ ] Heading gradient text is visible
- [ ] Body text is readable
- [ ] Buttons have proper contrast
- [ ] Background orbs are visible

#### Features Section
- [ ] Section heading is readable
- [ ] Glass cards have proper transparency
- [ ] Card borders are visible
- [ ] Icon gradients work in both themes
- [ ] Hover effects work in both themes

#### How It Works Section
- [ ] Step icons are visible
- [ ] Connecting lines are visible
- [ ] Text is readable
- [ ] Background effects work

#### Ecosystem Section
- [ ] Glass card looks good
- [ ] Shimmer border works in both themes
- [ ] Icons are visible
- [ ] Text is readable

#### CTA Section
- [ ] Gradient mesh background works
- [ ] Text is readable over background
- [ ] Buttons have proper contrast

#### Footer
- [ ] Text is readable
- [ ] Links are visible
- [ ] Gradient divider is visible

## Recording for PR

### What to Record
Create a screen recording showing:

1. **Desktop Theme Toggle** (30 seconds)
   - Show navbar with theme toggle
   - Click toggle to switch to light mode
   - Show page in light mode (scroll through sections)
   - Click toggle to switch back to dark mode
   - Show smooth transitions

2. **Mobile Theme Toggle** (30 seconds)
   - Resize browser to mobile view
   - Open mobile menu
   - Show theme toggle in menu
   - Toggle theme
   - Close menu
   - Show page in new theme

3. **Theme Persistence** (15 seconds)
   - Toggle to light mode
   - Refresh page
   - Show light mode persists
   - Toggle to dark mode
   - Refresh page
   - Show dark mode persists

4. **Visual Polish** (30 seconds)
   - Show light mode:
     - Glassmorphism cards
     - Gradient text
     - Glow effects
     - Background orbs
   - Toggle to dark mode
   - Show same elements in dark mode

### Recording Tools
- **macOS**: QuickTime Player (Cmd+Shift+5)
- **Windows**: Xbox Game Bar (Win+G)
- **Cross-platform**: OBS Studio, Loom, or ScreenToGif

### Recording Tips
- Use 1920x1080 resolution
- Keep recording under 2 minutes total
- Show cursor for clarity
- Demonstrate smooth interactions
- Include both desktop and mobile views
- Show theme persistence

## Automated Testing (Optional)

If you want to add automated tests:

```typescript
// Example test with Playwright or Cypress
describe('Theme Toggle', () => {
  it('should toggle between light and dark mode', () => {
    cy.visit('/')
    cy.get('[aria-label*="Switch to"]').click()
    cy.get('html').should('have.class', 'light')
    cy.get('[aria-label*="Switch to"]').click()
    cy.get('html').should('have.class', 'dark')
  })

  it('should persist theme after reload', () => {
    cy.visit('/')
    cy.get('[aria-label*="Switch to"]').click()
    cy.reload()
    cy.get('html').should('have.class', 'light')
  })
})
```

## Troubleshooting

### Issue: Theme toggle not appearing
- Check console for import errors
- Verify `components/atoms/theme-toggle.tsx` exists
- Verify navbar imports ThemeToggle correctly

### Issue: Theme not persisting
- Check browser localStorage is enabled
- Check console for localStorage errors
- Verify ThemeProvider is configured correctly

### Issue: Flash of wrong theme
- Verify `suppressHydrationWarning` on `<html>` tag
- Verify `disableTransitionOnChange` on ThemeProvider
- Check for any CSS that might override theme

### Issue: Icons not transitioning
- Check browser supports CSS transitions
- Verify reduced motion is not enabled
- Check console for CSS errors

### Issue: Hydration errors
- Verify `mounted` state in ThemeToggle
- Check for any server/client mismatches
- Verify ThemeProvider wraps all content

## Sign-Off Checklist

Before submitting PR:
- [ ] All visual tests pass
- [ ] All functional tests pass
- [ ] All accessibility tests pass
- [ ] All browser compatibility tests pass
- [ ] Screen recording is ready
- [ ] No console errors
- [ ] No console warnings
- [ ] Code follows project conventions
- [ ] Commits follow Conventional Commits
- [ ] PR description is complete

## Questions?

If you encounter any issues during testing:
1. Check the THEME_TOGGLE_IMPLEMENTATION.md troubleshooting section
2. Review the console for errors
3. Verify all files are saved
4. Try clearing browser cache and localStorage
5. Restart development server

Good luck with your testing! 🚀
