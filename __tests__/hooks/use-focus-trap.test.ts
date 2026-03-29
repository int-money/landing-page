import { renderHook, act } from "@testing-library/react";
import { describe, it, expect, beforeEach } from "vitest";
import { useFocusTrap } from "@/hooks/use-focus-trap";

// ---------------------------------------------------------------------------
// Helpers – build a real DOM container with focusable elements and attach the
// ref returned by the hook so the effect can query / listen on it.
// ---------------------------------------------------------------------------

function setupContainer() {
  const container = document.createElement("div");

  const btn1 = document.createElement("button");
  btn1.textContent = "First";
  const link = document.createElement("a");
  link.href = "#";
  link.textContent = "Middle";
  const btn2 = document.createElement("button");
  btn2.textContent = "Last";

  container.append(btn1, link, btn2);
  document.body.appendChild(container);

  return { container, btn1, link, btn2 };
}

function fireTab(target: HTMLElement, shift = false) {
  const event = new KeyboardEvent("keydown", {
    key: "Tab",
    shiftKey: shift,
    bubbles: true,
    cancelable: true,
  });
  target.dispatchEvent(event);
  return event;
}

// ---------------------------------------------------------------------------

describe("useFocusTrap", () => {
  let container: HTMLDivElement;
  let btn1: HTMLButtonElement;
  let btn2: HTMLButtonElement;

  beforeEach(() => {
    document.body.innerHTML = "";
    const els = setupContainer();
    container = els.container as HTMLDivElement;
    btn1 = els.btn1 as HTMLButtonElement;
    btn2 = els.btn2 as HTMLButtonElement;
  });

  it("focuses the first focusable element when activated", () => {
    const { result } = renderHook(({ active }) => useFocusTrap(active), {
      initialProps: { active: true },
    });

    // Attach the ref to our container so the effect picks it up
    act(() => {
      Object.defineProperty(result.current, "current", {
        value: container,
        writable: true,
      });
    });

    // Re-render to trigger the effect with the attached ref
    const { rerender } = renderHook(
      ({ active }) => {
        const ref = useFocusTrap(active);
        Object.defineProperty(ref, "current", {
          value: container,
          writable: true,
        });
        return ref;
      },
      { initialProps: { active: true } }
    );

    rerender({ active: true });

    expect(document.activeElement).toBe(btn1);
  });

  it("wraps focus from last to first element on Tab", () => {
    renderHook(() => {
      const ref = useFocusTrap(true);
      Object.defineProperty(ref, "current", {
        value: container,
        writable: true,
      });
      return ref;
    });

    // Move focus to the last element
    btn2.focus();
    expect(document.activeElement).toBe(btn2);

    // Press Tab on the last element — should wrap to the first
    fireTab(container, false);

    expect(document.activeElement).toBe(btn1);
  });

  it("wraps focus from first to last element on Shift+Tab", () => {
    renderHook(() => {
      const ref = useFocusTrap(true);
      Object.defineProperty(ref, "current", {
        value: container,
        writable: true,
      });
      return ref;
    });

    // The hook focuses btn1 on activation, verify
    expect(document.activeElement).toBe(btn1);

    // Press Shift+Tab on the first element — should wrap to the last
    fireTab(container, true);

    expect(document.activeElement).toBe(btn2);
  });

  it("does not trap focus when isActive is false", () => {
    renderHook(() => {
      const ref = useFocusTrap(false);
      Object.defineProperty(ref, "current", {
        value: container,
        writable: true,
      });
      return ref;
    });

    // Focus should NOT have been moved to btn1 automatically
    expect(document.activeElement).not.toBe(btn1);

    // Tab on last element should not wrap (no listener attached)
    btn2.focus();
    fireTab(container, false);

    // Focus stays where the browser left it (no wrapping)
    expect(document.activeElement).not.toBe(btn1);
  });

  it("releases the focus trap when deactivated", () => {
    const { rerender } = renderHook(
      ({ active }) => {
        const ref = useFocusTrap(active);
        Object.defineProperty(ref, "current", {
          value: container,
          writable: true,
        });
        return ref;
      },
      { initialProps: { active: true } }
    );

    // Trap is active — Tab on last should wrap
    btn2.focus();
    fireTab(container, false);
    expect(document.activeElement).toBe(btn1);

    // Deactivate the trap
    rerender({ active: false });

    // Now Tab on last should NOT wrap
    btn2.focus();
    fireTab(container, false);

    // Focus should remain on btn2 (listener removed)
    expect(document.activeElement).toBe(btn2);
  });

  it("does not interfere with non-Tab keys", () => {
    renderHook(() => {
      const ref = useFocusTrap(true);
      Object.defineProperty(ref, "current", {
        value: container,
        writable: true,
      });
      return ref;
    });

    btn2.focus();

    // Fire a non-Tab key — focus should stay where it is
    const event = new KeyboardEvent("keydown", {
      key: "Enter",
      bubbles: true,
      cancelable: true,
    });
    container.dispatchEvent(event);

    expect(document.activeElement).toBe(btn2);
  });
});
