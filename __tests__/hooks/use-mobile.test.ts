import { renderHook, act } from "@testing-library/react";
import { describe, it, expect, vi, beforeEach, afterEach } from "vitest";

import { useIsMobile } from "@/hooks/use-mobile";

describe("useIsMobile", () => {
  beforeEach(() => {
    // Mock window.innerWidth
    Object.defineProperty(window, "innerWidth", {
      writable: true,
      configurable: true,
      value: 1024,
    });

    // Mock window.matchMedia
    Object.defineProperty(window, "matchMedia", {
      writable: true,
      configurable: true,
      value: vi.fn().mockImplementation((query) => ({
        matches: false,
        media: query,
        onchange: null,
        addListener: vi.fn(), // deprecated
        removeListener: vi.fn(), // deprecated
        addEventListener: vi.fn(),
        removeEventListener: vi.fn(),
        dispatchEvent: vi.fn(),
      })),
    });
  });

  afterEach(() => {
    vi.clearAllMocks();
  });

  it("should return false when viewport width is >= 768px", () => {
    Object.defineProperty(window, "innerWidth", { value: 1024 });
    const { result } = renderHook(() => useIsMobile());
    expect(result.current).toBe(false);
  });

  it("should return true when viewport width is < 768px", () => {
    Object.defineProperty(window, "innerWidth", { value: 500 });
    const { result } = renderHook(() => useIsMobile());
    expect(result.current).toBe(true);
  });

  it("should return false when viewport width is exactly 768px (boundary condition)", () => {
    Object.defineProperty(window, "innerWidth", { value: 768 });
    const { result } = renderHook(() => useIsMobile());
    expect(result.current).toBe(false);
  });

  it("should update when window is resized", () => {
    Object.defineProperty(window, "innerWidth", { value: 1024, writable: true });

    let changeCallback: () => void = () => {};

    // Mock matchMedia to capture the change callback
    (window.matchMedia as any).mockImplementation((query: string) => ({
      matches: false,
      media: query,
      onchange: null,
      addEventListener: vi.fn((event, cb) => {
        if (event === "change") changeCallback = cb;
      }),
      removeEventListener: vi.fn(),
    }));

    const { result } = renderHook(() => useIsMobile());
    expect(result.current).toBe(false);

    // Simulate resize to mobile width
    act(() => {
      (window as any).innerWidth = 500;
      changeCallback();
    });
    expect(result.current).toBe(true);

    // Simulate resize back to desktop width
    act(() => {
      (window as any).innerWidth = 1024;
      changeCallback();
    });
    expect(result.current).toBe(false);
  });

  it("should clean up event listener on unmount", () => {
    const removeEventListenerMock = vi.fn();

    (window.matchMedia as any).mockImplementation((query: string) => ({
      matches: false,
      media: query,
      onchange: null,
      addEventListener: vi.fn(),
      removeEventListener: removeEventListenerMock,
    }));

    const { unmount } = renderHook(() => useIsMobile());
    unmount();

    expect(removeEventListenerMock).toHaveBeenCalledWith("change", expect.any(Function));
  });
});
