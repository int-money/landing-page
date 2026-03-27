import { act, renderHook } from "@testing-library/react";
import { afterEach, beforeEach, describe, expect, it, vi } from "vitest";

import { useActiveSection } from "@/hooks/use-active-section";

// ---- TYPES ----

type ObserverCallback = IntersectionObserverCallback;

// ---- MOCK INTERSECTION OBSERVER ----

let observeMock: ReturnType<typeof vi.fn>;
let disconnectMock: ReturnType<typeof vi.fn>;
let callbackRef: ObserverCallback;

class MockIntersectionObserver implements IntersectionObserver {
  readonly root: Element | Document | null = null;
  readonly rootMargin: string = "";
  readonly thresholds: ReadonlyArray<number> = [];

  constructor(callback: IntersectionObserverCallback) {
    callbackRef = callback;
    observeMock = vi.fn();
    disconnectMock = vi.fn();
  }

  observe = (element: Element): void => {
    (observeMock as (el: Element) => void)(element);
  };

  unobserve = (_element: Element): void => {};

  disconnect = (): void => {
    (disconnectMock as () => void)();
  };

  takeRecords(): IntersectionObserverEntry[] {
    return [];
  }
}

vi.stubGlobal("IntersectionObserver", MockIntersectionObserver);

// ---- HELPERS ----

const createSection = (id: string): HTMLElement => {
  const el = document.createElement("div");
  el.id = id;

  // Properly typed mock for DOMRect
  el.getBoundingClientRect = vi.fn(
    (): DOMRect => ({
      x: 0,
      y: 0,
      width: 0,
      height: 200,
      top: 100,
      right: 0,
      bottom: 0,
      left: 0,
      toJSON: () => {},
    })
  );

  document.body.appendChild(el);
  return el;
};

const triggerIntersection = (entries: Partial<IntersectionObserverEntry>[]) => {
  const fullEntries: IntersectionObserverEntry[] = entries.map((entry) => ({
    time: 0,
    rootBounds: null,
    boundingClientRect: {} as DOMRectReadOnly,
    intersectionRect: {} as DOMRectReadOnly,
    intersectionRatio: entry.isIntersecting ? 1 : 0,
    target: entry.target as Element,
    isIntersecting: Boolean(entry.isIntersecting),
  }));

  act(() => {
    callbackRef(fullEntries, {} as IntersectionObserver);
  });
};

// ---- TESTS ----

describe("useActiveSection", () => {
  beforeEach(() => {
    document.body.innerHTML = "";
    vi.clearAllMocks();

    // reset scroll
    Object.defineProperty(window, "scrollY", {
      value: 100,
      writable: true,
    });

    Object.defineProperty(window, "innerHeight", {
      value: 800,
      writable: true,
    });

    Object.defineProperty(document.documentElement, "scrollHeight", {
      value: 2000,
      writable: true,
    });
  });

  afterEach(() => {
    document.body.innerHTML = "";
  });

  // Test: returns correct section when visible
  it("returns correct section ID when a section is in view", () => {
    createSection("features");

    const { result } = renderHook(() => useActiveSection(["features"]));

    triggerIntersection([
      {
        target: document.getElementById("features")!,
        isIntersecting: true,
      },
    ]);

    expect(result.current).toBe("features");
  });

  // Test: updates when user scrolls to different section
  it("updates when user scrolls to a different section", () => {
    createSection("features");
    createSection("ecosystem");

    const { result } = renderHook(() => useActiveSection(["features", "ecosystem"]));

    // first section visible
    triggerIntersection([
      {
        target: document.getElementById("features")!,
        isIntersecting: true,
      },
    ]);

    expect(result.current).toBe("features");

    // switch visibility
    triggerIntersection([
      {
        target: document.getElementById("features")!,
        isIntersecting: false,
      },
      {
        target: document.getElementById("ecosystem")!,
        isIntersecting: true,
      },
    ]);

    expect(result.current).toBe("ecosystem");
  });

  // Test: handles no sections visible
  it("returns null when no sections are visible", () => {
    createSection("features");

    const { result } = renderHook(() => useActiveSection(["features"]));

    triggerIntersection([
      {
        target: document.getElementById("features")!,
        isIntersecting: false,
      },
    ]);

    expect(result.current).toBe(null);
  });

  // Test: cleanup disconnects observer
  it("disconnects observer on unmount", () => {
    createSection("features");

    const { unmount } = renderHook(() => useActiveSection(["features"]));

    unmount();

    expect(disconnectMock).toHaveBeenCalledTimes(1);
  });
});
