import { describe, it, expect } from "vitest";
import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { HeroSection } from "@/components/organisms/hero-section";
import { WaitlistProvider } from "@/components/providers/waitlist-provider";

describe("HeroSection", () => {
  it("opens waitlist modal when CTA button is clicked", async () => {
    const user = userEvent.setup();
    render(
      <WaitlistProvider>
        <HeroSection />
      </WaitlistProvider>
    );

    const button = screen.getByRole("button", { name: /join the waitlist/i });
    await user.click(button);

    // modal should show success or title text
    expect(
      await screen.findByRole("heading", { name: /join the waitlist/i })
    ).toBeInTheDocument();
  });
});
