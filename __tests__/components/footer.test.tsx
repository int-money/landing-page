import { render, screen } from "@testing-library/react";
import { describe, it, expect, vi } from "vitest";
import { Footer } from "@/components/organisms/footer";

// Mock next/image
vi.mock("next/image", () => ({
  default: (props: any) => <img {...props} />,
}));

describe("Footer", () => {
  const renderFooter = () => render(<Footer />);

  it("renders with correct semantic HTML footer element", () => {
    renderFooter();
    const footerElement = screen.getByRole("contentinfo");
    expect(footerElement.tagName).toBe("FOOTER");
  });

  it("renders all footer columns with correct links", () => {
    renderFooter();

    // Product links
    expect(screen.getByText("Product")).toBeInTheDocument();
    expect(screen.getByText("Features")).toHaveAttribute("href", "#features");
    expect(screen.getByText("How It Works")).toHaveAttribute("href", "#how-it-works");
    expect(screen.getByText("Ecosystem")).toHaveAttribute("href", "#ecosystem");

    // Developers links
    expect(screen.getByText("Developers")).toBeInTheDocument();
    expect(screen.getByText("GitHub")).toHaveAttribute("href", "https://github.com/int-money/landing-page");
    expect(screen.getByText("Documentation")).toHaveAttribute("href", "https://docs.intmoney.com");

    // Company links
    expect(screen.getByText("Company")).toBeInTheDocument();
    expect(screen.getByText("Contact")).toHaveAttribute("href", "mailto:hello@intmoney.com");
  });

  it("privacy and terms links point to correct routes", () => {
    renderFooter();
    expect(screen.getByText("Privacy")).toHaveAttribute("href", "/privacy");
    expect(screen.getByText("Terms")).toHaveAttribute("href", "/terms");
  });

  it("social media links have correct href and target='_blank'", () => {
    renderFooter();

    const githubLink = screen.getByText("GitHub");
    expect(githubLink).toHaveAttribute("href", "https://github.com/int-money/landing-page");
    expect(githubLink).toHaveAttribute("target", "_blank");
    expect(githubLink).toHaveAttribute("rel", "noopener noreferrer");

    const twitterLink = screen.getByText("Twitter");
    expect(twitterLink).toHaveAttribute("href", "https://twitter.com/intmoney");
    expect(twitterLink).toHaveAttribute("target", "_blank");
    expect(twitterLink).toHaveAttribute("rel", "noopener noreferrer");

    const discordLink = screen.getByText("Discord");
    expect(discordLink).toHaveAttribute("href", "https://discord.gg/intmoney");
    expect(discordLink).toHaveAttribute("target", "_blank");
    expect(discordLink).toHaveAttribute("rel", "noopener noreferrer");
  });

  it("copyright year is current", () => {
    renderFooter();
    const currentYear = new Date().getFullYear();
    const copyrightText = screen.getByText(new RegExp(`© ${currentYear} IntMoney`, "i"));
    expect(copyrightText).toBeInTheDocument();
  });

  it("links have descriptive text for accessibility", () => {
    renderFooter();
    const links = screen.getAllByRole("link");
    links.forEach((link) => {
      // Each link should have either text content or an aria-label
      const hasText = link.textContent && link.textContent.trim().length > 0;
      const hasAriaLabel = link.getAttribute("aria-label");
      expect(hasText || hasAriaLabel).toBeTruthy();
    });
  });
});
