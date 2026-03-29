import { test, expect } from '@playwright/test';

test.describe('Home Page', () => {
  test.beforeEach(async ({ page }) => {
    await page.goto('/');
  });

  test('should load the home page successfully', async ({ page }) => {
    await expect(page).toHaveURL('/');
    await expect(page).toHaveTitle(/int/i);
  });

  test('should render the hero section', async ({ page }) => {
    const hero = page.locator('section').first();
    await expect(hero).toBeVisible();
  });

  test('should render all major sections', async ({ page }) => {
    const sections = page.locator('section');
    const count = await sections.count();
    expect(count).toBeGreaterThanOrEqual(3);
  });

  test('should render the footer', async ({ page }) => {
    const footer = page.locator('footer');
    await expect(footer).toBeVisible();
  });

  test('should have a call-to-action button visible', async ({ page }) => {
    const ctaButton = page.getByRole('button').first();
    await expect(ctaButton).toBeVisible();
  });
});
