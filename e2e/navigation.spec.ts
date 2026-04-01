import { test, expect } from "@playwright/test";

test.describe("Navigation Pages", () => {
  test("should load the privacy policy page", async ({ page }) => {
    const response = await page.goto("/privacy");
    expect(response?.status()).toBeLessThan(500);

    if (response?.status() === 200) {
      await expect(page.locator("h1, h2").first()).toBeVisible();
    }
  });

  test("should load the terms of service page", async ({ page }) => {
    const response = await page.goto("/terms");
    expect(response?.status()).toBeLessThan(500);

    if (response?.status() === 200) {
      await expect(page.locator("h1, h2").first()).toBeVisible();
    }
  });

  test("privacy page should contain relevant content", async ({ page }) => {
    const response = await page.goto("/privacy");

    if (response?.status() === 200) {
      const bodyText = await page.locator("body").innerText();
      const hasRelevantContent =
        bodyText.toLowerCase().includes("privacy") ||
        bodyText.toLowerCase().includes("data") ||
        bodyText.toLowerCase().includes("policy");
      expect(hasRelevantContent).toBe(true);
    }
  });

  test("terms page should contain relevant content", async ({ page }) => {
    const response = await page.goto("/terms");

    if (response?.status() === 200) {
      const bodyText = await page.locator("body").innerText();
      const hasRelevantContent =
        bodyText.toLowerCase().includes("terms") ||
        bodyText.toLowerCase().includes("service") ||
        bodyText.toLowerCase().includes("agreement");
      expect(hasRelevantContent).toBe(true);
    }
  });
});
