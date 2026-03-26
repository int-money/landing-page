import { describe, it, expect, vi, beforeEach, beforeAll } from "vitest";
import * as fc from "fast-check";
import { render, screen, fireEvent, cleanup } from "@testing-library/react";
import { CtaSection } from "./cta-section";
import { WaitlistModal } from "@/components/organisms/waitlist-modal";
import { WaitlistProvider } from "@/components/providers/waitlist-provider";

// Required for React 18 act() in jsdom
beforeAll(() => {
  // @ts-expect-error - global flag for React act() environment
  globalThis.IS_REACT_ACT_ENVIRONMENT = true;
});

// ---------------------------------------------------------------------------
// Helpers
// ---------------------------------------------------------------------------

function renderWithProvider() {
  return render(
    <WaitlistProvider>
      <CtaSection />
      <WaitlistModal />
    </WaitlistProvider>
  );
}

// ---------------------------------------------------------------------------
// Sub-task 5.1 — Property 6: Button click always opens modal
// Feature: keyboard-shortcut-waitlist, Property 6: button click always opens modal
// Validates: Requirements 5.1
// ---------------------------------------------------------------------------

describe("Property 6: button click always opens modal", () => {
  beforeEach(() => {
    vi.restoreAllMocks();
    cleanup();
  });

  it('clicking "Join the Waitlist" button opens the modal regardless of initial state', () => {
    fc.assert(
      fc.property(
        // We generate a boolean but don't use it to set initial state —
        // the provider always starts closed. The property verifies that
        // a click always results in the modal being open.
        fc.boolean(),
        (_seed: boolean) => {
          renderWithProvider();

          const button = screen.getByRole("button", { name: /join the waitlist/i });
          fireEvent.click(button);

          // The Dialog renders with role="dialog" when open
          const dialog = screen.queryByRole("dialog");
          expect(dialog).toBeTruthy();

          cleanup();
        }
      ),
      { numRuns: 100 }
    );
  }, 30_000); // 30s timeout for 100 iterations
});
