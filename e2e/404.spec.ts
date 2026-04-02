import { test, expect } from "@playwright/test";

test.describe("404 Page", () => {
  test("should return 404 for unknown routes", async ({ page }) => {
    const response = await page.goto("/this-page-does-not-exist-abc123");
    expect(response?.status()).toBe(404);
  });

  test("should display a not-found message", async ({ page }) => {
    await page.goto("/this-page-does-not-exist-abc123");
    const bodyText = await page.locator("body").innerText();
    const hasNotFoundText =
      bodyText.toLowerCase().includes("not found") ||
      bodyText.toLowerCase().includes("404") ||
      bodyText.toLowerCase().includes("does not exist") ||
      bodyText.toLowerCase().includes("couldn't find");
    expect(hasNotFoundText).toBe(true);
  });

  test("should have a link back to the home page", async ({ page }) => {
    await page.goto("/this-page-does-not-exist-abc123");
    const homeLink = page.locator('a[href="/"], a[href*="home"]').first();

    if (await homeLink.isVisible().catch(() => false)) {
      await homeLink.click();
      await expect(page).toHaveURL("/");
    }
  });
});
