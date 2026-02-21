# Accessibility Testing Guide

This guide will help you verify all WCAG 2.1 AA accessibility improvements.

## Prerequisites
- Modern browser (Chrome, Firefox, Safari, or Edge)
- Screen reader (VoiceOver on macOS, NVDA/JAWS on Windows)
- Keyboard for testing
- Screen recording software

## Test 1: Keyboard Navigation (5 minutes)

### Steps:
1. Open the landing page in your browser
2. Press `Tab` key repeatedly and verify:
   - [ ] First tab shows "Skip to main content" link at top-left
   - [ ] All navigation links are reachable
   - [ ] All buttons are reachable
   - [ ] Mobile menu button is reachable (on mobile/narrow viewport)
   - [ ] Footer links are reachable
   - [ ] Focus indicators are clearly visible (blue ring around elements)

3. Test mobile menu (resize browser to mobile width):
   - [ ] Tab to mobile menu button
   - [ ] Press `Enter` or `Space` to open menu
   - [ ] Focus moves into menu
   - [ ] Tab cycles through menu items only (focus is trapped)
   - [ ] Shift+Tab works in reverse
   - [ ] Press `Escape` to close menu
   - [ ] Focus returns to menu button

4. Test skip link:
   - [ ] Refresh page
   - [ ] Press `Tab` once
   - [ ] "Skip to main content" appears
   - [ ] Press `Enter`
   - [ ] Page scrolls to main content
   - [ ] Next tab focuses on first interactive element in main content

### Expected Result:
✅ All interactive elements reachable via keyboard
✅ Focus indicators clearly visible
✅ Focus trap works in mobile menu
✅ Skip link functions correctly

## Test 2: Screen Reader (10 minutes)

### macOS VoiceOver:
1. Enable VoiceOver: `Cmd + F5`
2. Navigate with `VO + Right Arrow`

### Windows NVDA:
1. Start NVDA
2. Navigate with `Down Arrow`

### What to verify:
- [ ] Page title announced: "IntMoney - AI-Powered Cross-Border Payments"
- [ ] "Skip to main content" link announced first
- [ ] Navigation landmark announced: "Main navigation"
- [ ] All navigation links announced with labels
- [ ] Hero section announced as landmark
- [ ] Section headings announced correctly:
  - "Features" section
  - "How it Works" section
  - "Ecosystem" section
- [ ] Hero demo changes announced (wait for animation)
- [ ] All buttons have descriptive labels
- [ ] Images either have alt text or are marked decorative
- [ ] Footer announced as "contentinfo" landmark

### Expected Result:
✅ All content accessible via screen reader
✅ Landmarks properly identified
✅ No "unlabeled" or "button" without description
✅ Demo state changes announced

## Test 3: Reduced Motion (3 minutes)

### Enable Reduced Motion:

**macOS:**
1. System Preferences → Accessibility → Display
2. Check "Reduce motion"

**Windows:**
1. Settings → Ease of Access → Display
2. Turn on "Show animations in Windows"

**Browser DevTools (Chrome/Edge):**
1. Open DevTools (F12)
2. Press `Cmd/Ctrl + Shift + P`
3. Type "Emulate CSS prefers-reduced-motion"
4. Select "Emulate CSS prefers-reduced-motion: reduce"

### What to verify:
- [ ] Refresh the page
- [ ] Floating background orbs are static (not moving)
- [ ] Hero demo typewriter effect is instant (no typing animation)
- [ ] Hover effects don't scale elements
- [ ] Navigation transitions are instant
- [ ] Mobile menu opens/closes instantly
- [ ] All content remains visible and functional
- [ ] No spinning or pulsing animations

### Expected Result:
✅ All animations disabled or instant
✅ Page remains fully functional
✅ No motion sickness triggers

## Test 4: Color Contrast (5 minutes)

### Using Browser DevTools:
1. Open DevTools (F12)
2. Go to Elements tab
3. Select text elements
4. Check Computed styles for contrast ratio

### Using Lighthouse:
1. Open DevTools (F12)
2. Go to Lighthouse tab
3. Select "Accessibility" category
4. Click "Generate report"
5. Check score (should be 90+)

### Manual checks:
- [ ] Body text readable against background
- [ ] Muted text (muted-foreground) readable
- [ ] Button text readable on primary color
- [ ] Link text readable
- [ ] Focus indicators visible

### Expected Result:
✅ Lighthouse accessibility score: 90+
✅ All text meets 4.5:1 contrast ratio (AA standard)
✅ Large text meets 3:1 contrast ratio

## Test 5: Mobile Responsiveness (3 minutes)

### Steps:
1. Resize browser to mobile width (375px)
2. Test all keyboard navigation
3. Test mobile menu:
   - [ ] Opens on button click
   - [ ] Focus trapped inside
   - [ ] Closes on Escape
   - [ ] Closes on link click
4. Verify all content accessible
5. Check touch targets are large enough (44x44px minimum)

### Expected Result:
✅ Mobile menu fully accessible
✅ All features work on mobile
✅ Touch targets appropriately sized

## Test 6: ARIA Attributes (5 minutes)

### Using Browser DevTools:
1. Open DevTools (F12)
2. Go to Elements tab
3. Inspect elements and verify:

- [ ] `<header>` has `<nav aria-label="Main navigation">`
- [ ] `<section id="main-content">` exists
- [ ] All sections have `aria-labelledby` pointing to heading IDs
- [ ] Mobile menu has `role="dialog"` and `aria-modal="true"`
- [ ] Mobile menu button has `aria-expanded` and `aria-controls`
- [ ] Active nav links have `aria-current="page"`
- [ ] Hero demo has `aria-live="polite"`
- [ ] Decorative elements have `aria-hidden="true"`
- [ ] Footer has `role="contentinfo"`

### Expected Result:
✅ All ARIA attributes present and correct
✅ No ARIA errors in console

## Screen Recording Requirements

### What to record:
1. **Keyboard Navigation Demo (30 seconds)**
   - Show tabbing through entire page
   - Highlight visible focus indicators
   - Show skip link in action
   - Show mobile menu focus trap

2. **Screen Reader Demo (30 seconds)**
   - Show VoiceOver/NVDA navigating page
   - Show landmarks being announced
   - Show hero demo changes being announced

3. **Reduced Motion Demo (20 seconds)**
   - Show page with animations enabled
   - Enable reduced motion in system settings
   - Show page with animations disabled
   - Demonstrate all features still work

4. **Mobile Demo (20 seconds)**
   - Show mobile menu opening/closing
   - Show keyboard navigation on mobile
   - Show focus trap working

### Recording Tips:
- Use OBS Studio, QuickTime, or built-in screen recorder
- Record at 1080p resolution
- Include audio narration explaining what you're testing
- Keep total video under 2 minutes
- Upload to YouTube/Loom or attach as .mp4/.mov file

## Automated Testing

### Run Lighthouse:
```bash
# Install Lighthouse CLI (optional)
npm install -g lighthouse

# Run audit
lighthouse http://localhost:3000 --only-categories=accessibility --view
```

### Expected Lighthouse Scores:
- Accessibility: 95-100
- Best Practices: 90+
- Performance: 85+
- SEO: 90+

## Common Issues to Check

### ❌ Failures to avoid:
- Missing alt text on images
- Buttons without labels
- Low contrast text
- Missing focus indicators
- Animations that can't be disabled
- Keyboard traps (except intentional like mobile menu)
- Missing ARIA labels on icon-only buttons
- Unlabeled form inputs (if any added later)

### ✅ What good looks like:
- All interactive elements keyboard accessible
- Clear focus indicators on all focusable elements
- Screen reader announces all content meaningfully
- Animations respect user preferences
- Proper semantic HTML structure
- ARIA attributes enhance, not replace, semantic HTML

## Checklist Summary

Before submitting PR, verify:
- [ ] All keyboard navigation tests pass
- [ ] Screen reader can access all content
- [ ] Reduced motion preference respected
- [ ] Color contrast meets WCAG AA
- [ ] Mobile experience fully accessible
- [ ] ARIA attributes correct
- [ ] Lighthouse accessibility score 90+
- [ ] Screen recording attached to PR
- [ ] No console errors related to accessibility

## Questions?

If you encounter any issues or have questions about testing:
1. Check the ACCESSIBILITY_PR.md for implementation details
2. Review WCAG 2.1 guidelines: https://www.w3.org/WAI/WCAG21/quickref/
3. Test with multiple browsers and screen readers
4. Document any issues found for fixing

---

**Remember:** Accessibility is not a checklist, it's a commitment to inclusive design. Test with real users when possible!
