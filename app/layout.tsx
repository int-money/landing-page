import type React from "react";
import type { Metadata } from "next";
import { Geist, Inter } from "next/font/google";
import { Analytics } from "@vercel/analytics/next";
import { ThemeProvider } from "@/components/providers/theme-provider";
import { WaitlistProvider } from "@/components/providers/waitlist-provider";
import { Toaster } from "@/components/ui/toaster";
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
  metadataBase: new URL(process.env.NEXT_PUBLIC_SITE_URL!),
  title: "IntMoney - AI-Powered Cross-Border Payments",
  description:
    "The AI-powered mobile wallet for seamless cross-border payments using simple chat or voice commands. Built on Stellar.",
  alternates: {
    canonical: "/",
    languages: {
      en: "/",
      "x-default": "/",
    },
  },
  openGraph: {
    title: "IntMoney - AI-Powered Cross-Border Payments",
    description:
      "The AI-powered mobile wallet for seamless cross-border payments using simple chat or voice commands. Built on Stellar.",
    url: "/",
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
      "@id": "/#organization",
      name: "IntMoney",
      url: "/",
      logo: "/icon.svg",
      sameAs: ["https://github.com/int-money/landing-page"],
    },
    {
      "@type": "WebSite",
      "@id": "/#website",
      url: "/",
      name: "IntMoney - AI-Powered Cross-Border Payments",
      description:
        "The AI-powered mobile wallet for seamless cross-border payments using simple chat or voice commands.",
      publisher: {
        "@id": "/#organization",
      },
    },
  ],
};

import { SkipToContent } from "@/components/atoms/skip-to-content";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`${inter.variable} ${geist.variable} font-body antialiased`}>
        <SkipToContent />
        <ThemeProvider attribute="class" defaultTheme="dark" enableSystem disableTransitionOnChange>
          <WaitlistProvider>
            {children}
            <Toaster />
          </WaitlistProvider>
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
