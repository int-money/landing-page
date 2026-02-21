import Image from "next/image";
import { FooterColumn } from "@/components/molecules/footer-column";

export function Footer() {
  const currentYear = new Date().getFullYear();

  const productLinks = [
    { label: "Features", href: "#features" },
    { label: "How It Works", href: "#how-it-works" },
    { label: "Ecosystem", href: "#ecosystem" },
  ];

  const developerLinks = [
    { label: "GitHub", href: "https://github.com/int-money/landing-page" },
  ];

  const companyLinks = [
    { label: "Contact", href: "mailto:hello@intmoney.com" },
  ];

  return (
    <footer className="relative z-10 backdrop-blur-sm">
      {/* Gradient divider line instead of plain border */}
      <div className="h-[1px] bg-gradient-to-r from-transparent via-primary/30 to-transparent" />
      <div className="container mx-auto px-4 py-16">
        <div className="grid gap-10 md:grid-cols-4">
          <div>
            <div className="mb-5 flex items-center gap-2">
              <Image
                src="/icon.svg"
                alt="IntMoney"
                width={40}
                height={40}
                className="rounded-lg"
                loading="lazy"
              />
              <span className="text-base font-bold tracking-tight">
                IntMoney
              </span>
            </div>
            <p className="text-sm text-muted-foreground leading-relaxed">
              Your personal AI agent for cross-border payments. Built on
              Stellar, always learning, always working for you.
            </p>
          </div>

          <FooterColumn title="Product" links={productLinks} />
          <FooterColumn title="Developers" links={developerLinks} />
          <FooterColumn title="Company" links={companyLinks} />
        </div>

        <div className="mt-14 pt-8 flex flex-col md:flex-row items-center justify-between gap-4 text-sm text-muted-foreground">
          <div className="h-[1px] w-full bg-gradient-to-r from-transparent via-border/50 to-transparent absolute left-0 right-0" />
          <p>
            &copy; {currentYear} IntMoney. Your personal AI agent for
            cross-border payments.
          </p>
          <div className="flex items-center gap-6">
            <a
              href="/privacy"
              className="hover:text-primary transition-colors duration-200"
            >
              Privacy
            </a>
            <a
              href="/terms"
              className="hover:text-primary transition-colors duration-200"
            >
              Terms
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
