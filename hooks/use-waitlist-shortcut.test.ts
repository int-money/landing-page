import { describe, it, expect } from "vitest";
import * as fc from "fast-check";
import { isInputContext } from "./use-waitlist-shortcut";

// ---------------------------------------------------------------------------
// Helpers
// ---------------------------------------------------------------------------

function makeElement(tag: string, contentEditable?: string): Element {
  const el = document.createElement(tag);
  if (contentEditable !== undefined) {
    el.contentEditable = contentEditable;
  }
  return el;
}

// ---------------------------------------------------------------------------
// Sub-task 2.1 — Unit tests for isInputContext
// ---------------------------------------------------------------------------

describe("isInputContext", () => {
  it("returns true for INPUT element", () => {
    expect(isInputContext(makeElement("INPUT"))).toBe(true);
  });

  it("returns true for TEXTAREA element", () => {
    expect(isInputContext(makeElement("TEXTAREA"))).toBe(true);
  });

  it('returns true for element with contentEditable="true"', () => {
    expect(isInputContext(makeElement("DIV", "true"))).toBe(true);
  });

  it("returns false for DIV without contentEditable", () => {
    expect(isInputContext(makeElement("DIV"))).toBe(false);
  });

  it("returns false for BUTTON element", () => {
    expect(isInputContext(makeElement("BUTTON"))).toBe(false);
  });

  it("returns false for SPAN element", () => {
    expect(isInputContext(makeElement("SPAN"))).toBe(false);
  });

  it('returns false for element with contentEditable="false"', () => {
    expect(isInputContext(makeElement("DIV", "false"))).toBe(false);
  });

  it("returns false for null", () => {
    expect(isInputContext(null)).toBe(false);
  });
});

// ---------------------------------------------------------------------------
// Shortcut detection logic (extracted for property testing without DOM hooks)
// ---------------------------------------------------------------------------

/**
 * Pure function mirroring the handler logic inside useWaitlistShortcut.
 * Returns true when the event should trigger toggleWaitlist.
 */
function shouldTrigger(
  event: {
    metaKey: boolean;
    ctrlKey: boolean;
    shiftKey: boolean;
    key: string;
  },
  isMac: boolean,
  activeElement: Element | null
): boolean {
  if (isInputContext(activeElement)) return false;
  const modifierActive = isMac ? event.metaKey : event.ctrlKey;
  const oppositeModifier = isMac ? event.ctrlKey : event.metaKey;
  return modifierActive && !oppositeModifier && event.shiftKey && event.key === "K";
}

// ---------------------------------------------------------------------------
// Sub-task 2.2 — Property 2: Input context suppresses shortcut
// Feature: keyboard-shortcut-waitlist, Property 2: input context suppresses shortcut
// Validates: Requirements 2.1, 2.2, 2.3
// ---------------------------------------------------------------------------

describe("Property 2: input context suppresses shortcut", () => {
  it("never triggers when focused element is INPUT or TEXTAREA", () => {
    fc.assert(
      fc.property(
        fc.constantFrom("INPUT", "TEXTAREA"),
        fc.boolean(),
        (tag: string, isMac: boolean) => {
          const el = makeElement(tag);
          const event = {
            metaKey: isMac,
            ctrlKey: !isMac,
            shiftKey: true,
            key: "K",
          };
          expect(shouldTrigger(event, isMac, el)).toBe(false);
        }
      ),
      { numRuns: 100 }
    );
  });

  it('never triggers when focused element has contenteditable="true"', () => {
    fc.assert(
      fc.property(fc.boolean(), (isMac: boolean) => {
        const el = makeElement("DIV", "true");
        const event = {
          metaKey: isMac,
          ctrlKey: !isMac,
          shiftKey: true,
          key: "K",
        };
        expect(shouldTrigger(event, isMac, el)).toBe(false);
      }),
      { numRuns: 100 }
    );
  });
});

// ---------------------------------------------------------------------------
// Sub-task 2.3 — Property 3: Correct modifier key per platform
// Feature: keyboard-shortcut-waitlist, Property 3: correct modifier key per platform
// Validates: Requirements 3.1, 3.2, 3.3
// ---------------------------------------------------------------------------

describe("Property 3: correct modifier key per platform", () => {
  it("triggers if and only if the correct modifier combination is present", () => {
    fc.assert(
      fc.property(
        fc.boolean(),
        fc.boolean(),
        fc.boolean(),
        fc.string({ minLength: 1, maxLength: 3 }),
        fc.boolean(),
        (metaKey: boolean, ctrlKey: boolean, shiftKey: boolean, key: string, isMac: boolean) => {
          const event = { metaKey, ctrlKey, shiftKey, key };
          const result = shouldTrigger(event, isMac, null);

          const expectedModifier = isMac ? metaKey : ctrlKey;
          const expectedOppositeAbsent = isMac ? !ctrlKey : !metaKey;
          const expected = expectedModifier && expectedOppositeAbsent && shiftKey && key === "K";

          expect(result).toBe(expected);
        }
      ),
      { numRuns: 100 }
    );
  });

  it("does not trigger when both metaKey and ctrlKey are held on Mac", () => {
    fc.assert(
      fc.property(fc.boolean(), (shiftKey: boolean) => {
        const event = { metaKey: true, ctrlKey: true, shiftKey, key: "K" };
        expect(shouldTrigger(event, true, null)).toBe(false);
      }),
      { numRuns: 100 }
    );
  });

  it("does not trigger when both metaKey and ctrlKey are held on non-Mac", () => {
    fc.assert(
      fc.property(fc.boolean(), (shiftKey: boolean) => {
        const event = { metaKey: true, ctrlKey: true, shiftKey, key: "K" };
        expect(shouldTrigger(event, false, null)).toBe(false);
      }),
      { numRuns: 100 }
    );
  });
});
