import type React from "react";
import type { Metadata } from "next";
import { Geist, Inter } from "next/font/google";
import { Analytics } from "@vercel/analytics/next";
import { ThemeProvider } from "@/components/providers/theme-provider";
import { WaitlistProvider } from "@/components/providers/waitlist-provider";
import "./globals.css";

const geist = Geist({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-geist",
});

const inter = Inter({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-inter",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://intmoney.com"),
  title: "IntMoney - AI-Powered Cross-Border Payments",
  description:
    "The AI-powered mobile wallet for seamless cross-border payments using simple chat or voice commands. Built on Stellar.",
  alternates: {
    canonical: "/",
  },
  openGraph: {
    title: "IntMoney - AI-Powered Cross-Border Payments",
    description:
      "The AI-powered mobile wallet for seamless cross-border payments using simple chat or voice commands. Built on Stellar.",
    url: "https://intmoney.com",
    siteName: "IntMoney",
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "IntMoney - AI-Powered Cross-Border Payments",
    description: "The AI-powered mobile wallet for seamless cross-border payments.",
  },
  icons: {
    icon: [
      {
        url: "/icon.svg",
        type: "image/svg+xml",
      },
    ],
    apple: "/logo.svg",
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Organization",
      "@id": "https://intmoney.com/#organization",
      name: "IntMoney",
      url: "https://intmoney.com",
      logo: "https://intmoney.com/icon.svg",
      sameAs: ["https://github.com/int-money/landing-page"],
    },
    {
      "@type": "WebSite",
      "@id": "https://intmoney.com/#website",
      url: "https://intmoney.com",
      name: "IntMoney - AI-Powered Cross-Border Payments",
      description:
        "The AI-powered mobile wallet for seamless cross-border payments using simple chat or voice commands.",
      publisher: {
        "@id": "https://intmoney.com/#organization",
      },
    },
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`${inter.variable} ${geist.variable} font-body antialiased`}>
        <ThemeProvider attribute="class" defaultTheme="dark" enableSystem disableTransitionOnChange>
          <WaitlistProvider>{children}</WaitlistProvider>
        </ThemeProvider>
        <Analytics />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </body>
    </html>
  );
}
