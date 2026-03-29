import { test, expect } from '@playwright/test';

test.describe('Navbar', () => {
  test.beforeEach(async ({ page }) => {
    await page.goto('/');
  });

  test('should display the navbar', async ({ page }) => {
    const nav = page.locator('nav, header').first();
    await expect(nav).toBeVisible();
  });

  test('should contain navigation links', async ({ page }) => {
    const navLinks = page.locator('nav a, header a');
    const count = await navLinks.count();
    expect(count).toBeGreaterThanOrEqual(1);
  });

  test('should have the logo or brand visible', async ({ page }) => {
    const logo = page.locator('nav img, header img, nav svg, header svg').first();
    await expect(logo).toBeVisible();
  });

  test('navbar should remain visible after scrolling', async ({ page }) => {
    await page.evaluate(() => window.scrollBy(0, 500));
    await page.waitForTimeout(500);
    const nav = page.locator('nav, header').first();
    await expect(nav).toBeVisible();
  });
});
