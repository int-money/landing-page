import { describe, it, expect, vi, beforeEach } from "vitest";
import * as fc from "fast-check";
import { render, screen, act } from "@testing-library/react";
import { ShortcutBadge } from "./shortcut-badge";

// ---------------------------------------------------------------------------
// Sub-task 4.1 — Unit tests for ShortcutBadge rendering
// ---------------------------------------------------------------------------

describe("ShortcutBadge", () => {
  beforeEach(() => {
    vi.restoreAllMocks();
  });

  it("renders Ctrl+Shift+K by default (SSR / non-Mac)", () => {
    Object.defineProperty(navigator, "platform", {
      value: "Win32",
      configurable: true,
    });

    render(<ShortcutBadge />);
    expect(screen.getByText("Ctrl+Shift+K")).toBeTruthy();
  });

  it("renders ⌘+Shift+K when isMac is true", async () => {
    Object.defineProperty(navigator, "platform", {
      value: "MacIntel",
      configurable: true,
    });

    await act(async () => {
      render(<ShortcutBadge />);
    });

    expect(screen.getByText("⌘+Shift+K")).toBeTruthy();
  });

  it("has hidden md:inline-flex class in rendered output", () => {
    const { container } = render(<ShortcutBadge />);
    const span = container.querySelector("span");
    expect(span?.className).toContain("hidden");
    expect(span?.className).toContain("md:inline-flex");
  });

  it("applies additional className when provided", () => {
    const { container } = render(<ShortcutBadge className="my-custom-class" />);
    const span = container.querySelector("span");
    expect(span?.className).toContain("my-custom-class");
  });
});

// ---------------------------------------------------------------------------
// Sub-task 4.2 — Property 4: Badge text matches platform
// Feature: keyboard-shortcut-waitlist, Property 4: badge text matches platform
// Validates: Requirements 4.2, 4.3
// ---------------------------------------------------------------------------

describe("Property 4: badge text matches platform", () => {
  it("rendered text equals expected string for any isMac value", async () => {
    await fc.assert(
      fc.asyncProperty(fc.boolean(), async (isMac: boolean) => {
        Object.defineProperty(navigator, "platform", {
          value: isMac ? "MacIntel" : "Win32",
          configurable: true,
        });

        const { unmount } = render(<ShortcutBadge />);

        await act(async () => {});

        const expectedText = isMac ? "⌘+Shift+K" : "Ctrl+Shift+K";
        const element = screen.queryByText(expectedText);
        expect(element).toBeTruthy();

        unmount();
      }),
      { numRuns: 100 }
    );
  });
});
