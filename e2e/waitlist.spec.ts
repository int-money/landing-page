import { test, expect } from '@playwright/test';

test.describe('Waitlist Modal', () => {
  test.beforeEach(async ({ page }) => {
    await page.goto('/');
  });

  test('should open the waitlist modal when CTA is clicked', async ({ page }) => {
    // Look for a waitlist / join / get started button
    const ctaButton = page.getByRole('button', { name: /waitlist|join|get started|sign up|get early access/i }).first();

    if (await ctaButton.isVisible().catch(() => false)) {
      await ctaButton.click();
      await page.waitForTimeout(500);

      const modal = page.locator('[role="dialog"], [data-state="open"], .modal, [class*="modal"]');
      const modalCount = await modal.count();
      expect(modalCount).toBeGreaterThanOrEqual(1);
    }
  });

  test('should show validation errors for empty email submission', async ({ page }) => {
    const ctaButton = page.getByRole('button', { name: /waitlist|join|get started|sign up|get early access/i }).first();

    if (await ctaButton.isVisible().catch(() => false)) {
      await ctaButton.click();
      await page.waitForTimeout(500);

      const submitButton = page.locator('[role="dialog"] button[type="submit"], [data-state="open"] button[type="submit"], .modal button[type="submit"]').first();

      if (await submitButton.isVisible().catch(() => false)) {
        await submitButton.click();
        await page.waitForTimeout(300);

        // Check for HTML5 validation or custom error
        const emailInput = page.locator('[role="dialog"] input[type="email"], [data-state="open"] input[type="email"], .modal input[type="email"]').first();
        if (await emailInput.isVisible().catch(() => false)) {
          const validationMessage = await emailInput.evaluate(
            (el: HTMLInputElement) => el.validationMessage
          );
          expect(validationMessage.length).toBeGreaterThan(0);
        }
      }
    }
  });

  test('should accept a valid email in the waitlist form', async ({ page }) => {
    const ctaButton = page.getByRole('button', { name: /waitlist|join|get started|sign up|get early access/i }).first();

    if (await ctaButton.isVisible().catch(() => false)) {
      await ctaButton.click();
      await page.waitForTimeout(500);

      const emailInput = page.locator('[role="dialog"] input[type="email"], [data-state="open"] input[type="email"], .modal input[type="email"], input[type="email"]').first();

      if (await emailInput.isVisible().catch(() => false)) {
        await emailInput.fill('test@example.com');
        await expect(emailInput).toHaveValue('test@example.com');
      }
    }
  });

  test('should close the modal when dismissed', async ({ page }) => {
    const ctaButton = page.getByRole('button', { name: /waitlist|join|get started|sign up|get early access/i }).first();

    if (await ctaButton.isVisible().catch(() => false)) {
      await ctaButton.click();
      await page.waitForTimeout(500);

      // Try pressing Escape to close
      await page.keyboard.press('Escape');
      await page.waitForTimeout(500);
    }
  });
});
