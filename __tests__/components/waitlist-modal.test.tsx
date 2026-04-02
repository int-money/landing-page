import { beforeEach, describe, expect, it, vi } from "vitest";
import { render, screen, waitFor } from "@testing-library/react";

import { WaitlistModal } from "@/components/organisms/waitlist-modal";
import userEvent from "@testing-library/user-event";

// ---- MOCKS ----

// Mock useWaitlist
vi.mock("@/components/providers/waitlist-provider", () => ({
  useWaitlist: () => ({
    isOpen: true, // FORCE MODAL OPEN
    closeWaitlist: vi.fn(),
  }),
}));

// Mock toast
vi.mock("@/hooks/use-toast", () => ({
  toast: vi.fn(),
}));

// Mock next env
vi.stubEnv("NEXT_PUBLIC_WAITLIST_API_URL", "https://test.api");

// ---- HELPERS ----

const setup = () => {
  return render(<WaitlistModal />);
};

// ---- TESTS ----

describe("WaitlistModal", () => {
  beforeEach(() => {
    vi.clearAllMocks();
  });

  // Modal renders
  it("renders when open", () => {
    setup();

    expect(screen.getByText(/join the waitlist/i)).toBeInTheDocument();
  });

  // Invalid email
  it("shows error for invalid email", async () => {
    setup();

    const emailInput = screen.getByPlaceholderText(/jane@example.com/i);
    const submitBtn = screen.getByRole("button", { name: /join waitlist/i });

    await userEvent.type(emailInput, "invalid-email");
    await userEvent.click(submitBtn);

    expect(await screen.findByText(/please enter a valid email address/i)).toBeInTheDocument();
  });

  // Empty email
  it("shows error for empty email", async () => {
    setup();

    const submitBtn = screen.getByRole("button", { name: /join waitlist/i });

    await userEvent.click(submitBtn);

    expect(await screen.findByText(/email is required/i)).toBeInTheDocument();
  });

  // Success flow
  it("shows success state on successful submission", async () => {
    vi.stubGlobal(
      "fetch",
      vi.fn(() =>
        Promise.resolve({
          ok: true,
        } as Response)
      )
    );

    setup();

    const emailInput = screen.getByPlaceholderText(/jane@example.com/i);
    const submitBtn = screen.getByRole("button", { name: /join waitlist/i });

    await userEvent.type(emailInput, "test@example.com");
    await userEvent.click(submitBtn);

    expect(await screen.findByText(/you're on the list!/i)).toBeInTheDocument();
  });

  // API error
  it("shows error message when API fails", async () => {
    vi.stubGlobal(
      "fetch",
      vi.fn(() =>
        Promise.resolve({
          ok: false,
        } as Response)
      )
    );

    setup();

    const emailInput = screen.getByPlaceholderText(/jane@example.com/i);
    const submitBtn = screen.getByRole("button", { name: /join waitlist/i });

    await userEvent.type(emailInput, "test@example.com");
    await userEvent.click(submitBtn);

    expect(await screen.findByText(/failed to join waitlist/i)).toBeInTheDocument();
  });

  // Accessibility
  it("is accessible (aria + focus)", async () => {
    setup();

    const dialog = screen.getByRole("dialog");
    expect(dialog).toBeInTheDocument();

    // Focus should land on first input
    const inputs = screen.getAllByRole("textbox");
    await waitFor(() => expect(inputs[0]).toHaveFocus());
  });
});
