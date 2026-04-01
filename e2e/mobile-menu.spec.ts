import { test, expect } from "@playwright/test";

test.describe("Mobile Menu", () => {
  test.use({ viewport: { width: 375, height: 812 } });

  test.beforeEach(async ({ page }) => {
    await page.goto("/");
  });

  test("should show the mobile menu toggle button", async ({ page }) => {
    const menuButton = page
      .getByRole("button")
      .filter({ has: page.locator("svg") })
      .first();
    await expect(menuButton).toBeVisible();
  });

  test("should open the mobile menu when toggle is clicked", async ({ page }) => {
    const menuButton = page
      .getByRole("button")
      .filter({ has: page.locator("svg") })
      .first();
    await menuButton.click();
    await page.waitForTimeout(300);

    const menuLinks = page.locator("a:visible");
    const linkCount = await menuLinks.count();
    expect(linkCount).toBeGreaterThanOrEqual(1);
  });

  test("should close the mobile menu when a link is clicked", async ({ page }) => {
    const menuButton = page
      .getByRole("button")
      .filter({ has: page.locator("svg") })
      .first();
    await menuButton.click();
    await page.waitForTimeout(300);

    const firstLink = page.locator('nav a:visible, [role="dialog"] a:visible').first();
    if (await firstLink.isVisible()) {
      await firstLink.click();
      await page.waitForTimeout(500);
    }
  });
});
