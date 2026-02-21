---
title: Accessibility Guidelines
description: Quick reference for maintaining WCAG 2.1 AA compliance
inclusion: auto
fileMatchPattern: "**/*.tsx"
---

# Accessibility Guidelines for IntMoney Landing Page

This project maintains WCAG 2.1 AA compliance. Follow these guidelines when making changes.

## Quick Reference

### Semantic HTML
✅ Use proper HTML5 elements:
- `<header>`, `<nav>`, `<main>`, `<section>`, `<footer>`
- `<button>` for actions, `<a>` for navigation
- Proper heading hierarchy (h1 → h2 → h3)

❌ Avoid:
- `<div>` with `onClick` (use `<button>`)
- Skipping heading levels
- Multiple `<h1>` tags per page

### ARIA Labels
✅ Add ARIA when needed:
```tsx
// Navigation
<nav aria-label="Main navigation">

// Sections
<section id="features" aria-labelledby="features-heading">
  <h2 id="features-heading">Features</h2>
</section>

// Icon-only buttons
<button aria-label="Close menu">
  <X aria-hidden="true" />
</button>

// Decorative elements
<div aria-hidden="true">...</div>

// Live regions
<div aria-live="polite" aria-atomic="true">
  {statusMessage}
</div>
```

❌ Avoid:
- Redundant ARIA (don't add aria-label to buttons with visible text)
- Using ARIA instead of semantic HTML
- Forgetting aria-hidden on decorative icons

### Keyboard Navigation
✅ Ensure all interactive elements are keyboard accessible:
```tsx
// Proper focus indicators
<button className="focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring">
  Click me
</button>

// Keyboard event handlers
<div
  role="button"
  tabIndex={0}
  onClick={handleClick}
  onKeyDown={(e) => {
    if (e.key === 'Enter' || e.key === ' ') {
      handleClick();
    }
  }}
>
```

❌ Avoid:
- Removing focus indicators without replacement
- Making non-interactive elements focusable
- Forgetting keyboard event handlers on custom interactive elements

### Reduced Motion
✅ Always add motion-reduce variants:
```tsx
// Transitions
<div className="transition-all duration-300 motion-reduce:transition-none">

// Animations
<div className="animate-spin motion-reduce:animate-none">

// Transforms
<div className="hover:scale-105 motion-reduce:hover:scale-100">

// CSS animations
@media (prefers-reduced-motion: reduce) {
  .my-animation {
    animation: none;
  }
}
```

❌ Avoid:
- Animations without motion-reduce fallback
- Essential information conveyed only through animation
- Autoplay videos without controls

### Images & Icons
✅ Proper alt text strategy:
```tsx
// Informative images
<Image src="/logo.svg" alt="IntMoney logo" />

// Decorative images
<Image src="/decoration.svg" alt="" aria-hidden="true" />

// Icons with text
<button>
  <Sparkles aria-hidden="true" />
  <span>Join Waitlist</span>
</button>

// Icon-only buttons
<button aria-label="Open menu">
  <Menu aria-hidden="true" />
</button>
```

❌ Avoid:
- Missing alt attributes
- Alt text like "image" or "icon"
- Redundant alt text when icon has adjacent text

### Color Contrast
✅ Maintain WCAG AA contrast ratios:
- Normal text: 4.5:1 minimum
- Large text (18pt+): 3:1 minimum
- UI components: 3:1 minimum

Use our color system:
- `text-foreground` - Primary text (high contrast)
- `text-muted-foreground` - Secondary text (meets AA)
- `text-primary` - Accent text (meets AA)

❌ Avoid:
- Light gray text on white backgrounds
- Relying solely on color to convey information
- Low contrast hover states

### Focus Management
✅ Manage focus for modals and overlays:
```tsx
// Use the focus trap hook
const menuRef = useFocusTrap(isOpen);

<div ref={menuRef} role="dialog" aria-modal="true">
  {/* Focus trapped here when open */}
</div>

// Close on Escape
useEffect(() => {
  const handleEscape = (e: KeyboardEvent) => {
    if (e.key === 'Escape') {
      closeModal();
    }
  };
  window.addEventListener('keydown', handleEscape);
  return () => window.removeEventListener('keydown', handleEscape);
}, []);
```

❌ Avoid:
- Modals without focus trap
- Forgetting to return focus after closing
- Missing Escape key handler

### Forms (Future Reference)
✅ When adding forms:
```tsx
<label htmlFor="email">Email</label>
<input
  id="email"
  type="email"
  aria-required="true"
  aria-invalid={hasError}
  aria-describedby={hasError ? "email-error" : undefined}
/>
{hasError && (
  <span id="email-error" role="alert">
    Please enter a valid email
  </span>
)}
```

❌ Avoid:
- Placeholder as label
- Missing error messages
- Unclear error states

## Testing Checklist

Before committing changes:
- [ ] Tab through all interactive elements
- [ ] Test with screen reader (VoiceOver/NVDA)
- [ ] Enable reduced motion and verify animations
- [ ] Check color contrast with DevTools
- [ ] Run Lighthouse accessibility audit
- [ ] Test on mobile viewport
- [ ] Verify no console errors

## Tools

### Browser Extensions
- axe DevTools (Chrome/Firefox)
- WAVE (Chrome/Firefox)
- Lighthouse (built into Chrome DevTools)

### Screen Readers
- VoiceOver (macOS): Cmd+F5
- NVDA (Windows): Free download
- JAWS (Windows): Commercial

### Testing Commands
```bash
# Run Lighthouse
npm run build
npx lighthouse http://localhost:3000 --only-categories=accessibility

# Check for common issues
npm run lint
```

## Common Patterns

### Skip Navigation
Already implemented - don't remove:
```tsx
<SkipToContent />
```

### Section Structure
```tsx
<section
  id="section-name"
  aria-labelledby="section-heading"
  className="..."
>
  <h2 id="section-heading">Section Title</h2>
  {/* Content */}
</section>
```

### Interactive Cards
```tsx
<Card className="group hover:shadow-xl transition-all motion-reduce:transition-none">
  <a href="#" className="focus-visible:outline-none focus-visible:ring-2">
    {/* Card content */}
  </a>
</Card>
```

### Loading States
```tsx
<div role="status" aria-live="polite">
  {isLoading ? (
    <>
      <Spinner aria-hidden="true" />
      <span className="sr-only">Loading...</span>
    </>
  ) : (
    content
  )}
</div>
```

## Resources

- [WCAG 2.1 Quick Reference](https://www.w3.org/WAI/WCAG21/quickref/)
- [MDN Accessibility](https://developer.mozilla.org/en-US/docs/Web/Accessibility)
- [A11y Project Checklist](https://www.a11yproject.com/checklist/)
- [WebAIM](https://webaim.org/)

## Questions?

If unsure about accessibility:
1. Check this guide first
2. Review ACCESSIBILITY_PR.md for implementation examples
3. Test with actual assistive technology
4. When in doubt, ask for review

Remember: Accessibility benefits everyone, not just users with disabilities!
