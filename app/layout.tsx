import type React from "react";
import type { Metadata } from "next";
import { Geist, Inter } from "next/font/google";
import { Analytics } from "@vercel/analytics/next";
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
  title: "IntMoney - AI-Powered Cross-Border Payments",
  description:
    "The AI-powered mobile wallet that lets you send, receive, and execute cross-border payments using simple chat or voice commands. Built on Stellar, with seamless authentication.",
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

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark">
      <body className={`${inter.variable} ${geist.variable} font-body antialiased`}>
        {children}
        <Analytics />
      </body>
    </html>
  );
}
