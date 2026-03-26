"use client";

import * as React from "react";
import { useWaitlist } from "@/components/providers/waitlist-provider";

/**
 * Returns true when the active element is an input context where
 * keyboard shortcuts should be suppressed.
 */
export function isInputContext(element: Element | null): boolean {
  if (!element) return false;
  const tag = element.tagName;
  if (tag === "INPUT" || tag === "TEXTAREA") return true;
  if ((element as HTMLElement).contentEditable === "true") return true;
  return false;
}

/**
 * Registers a global keydown listener that calls toggleWaitlist() when
 * Modifier+Shift+W is pressed outside an input context.
 *
 * - macOS: Cmd (metaKey) + Shift + W
 * - Windows/Linux: Ctrl (ctrlKey) + Shift + W
 *
 * Side-effect only — returns void.
 */
export function useWaitlistShortcut(): void {
  const { toggleWaitlist } = useWaitlist();

  React.useEffect(() => {
    const isMac = typeof navigator !== "undefined" && /Mac/i.test(navigator.platform);

    function handleKeyDown(event: KeyboardEvent): void {
      // Suppress shortcut when typing in an input context
      if (isInputContext(document.activeElement)) return;

      const modifierActive = isMac ? event.metaKey : event.ctrlKey;
      const oppositeModifier = isMac ? event.ctrlKey : event.metaKey;

      if (modifierActive && !oppositeModifier && event.shiftKey && event.key === "W") {
        toggleWaitlist();
      }
    }

    document.addEventListener("keydown", handleKeyDown);
    return () => {
      document.removeEventListener("keydown", handleKeyDown);
    };
  }, [toggleWaitlist]);
}
