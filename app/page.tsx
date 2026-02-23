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
        <ThemeProvider
          attribute="class"
          defaultTheme="dark"
          enableSystem
          disableTransitionOnChange
        >
          {children}
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