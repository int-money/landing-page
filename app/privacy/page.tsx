import { Navbar } from "@/components/navbar";
import { Footer } from "@/components/organisms/footer";
import { Shield } from "lucide-react";

export default function PrivacyPage() {
  return (
    <div className="min-h-screen bg-background relative overflow-hidden">
      {/* Dot grid pattern overlay for depth */}
      <div className="absolute inset-0 grid-pattern pointer-events-none z-0" />

      {/* Decorative background orbs */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute -top-40 -right-40 w-[500px] h-[500px] bg-primary/15 rounded-full blur-[64px] float will-change-transform" />
        <div className="absolute top-1/4 -left-60 w-[400px] h-[400px] bg-[oklch(0.45_0.2_240_/_0.12)] rounded-full blur-[64px] float-delayed will-change-transform" />
      </div>

      <Navbar />

      <main className="container mx-auto px-4 py-16 md:py-24 relative z-10 max-w-4xl">
        <div className="mb-12 text-center">
          <div className="inline-flex items-center gap-2 rounded-full bg-primary/10 px-4 py-1.5 text-sm font-medium text-primary mb-4">
            <Shield className="h-4 w-4" />
            Legal
          </div>
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Privacy Policy</h1>
          <p className="text-muted-foreground">
            Last updated: February 20, 2026
          </p>
        </div>

        <div className="prose prose-neutral dark:prose-invert max-w-none space-y-8">
          <section>
            <h2 className="text-2xl font-bold mb-4">Introduction</h2>
            <p className="text-muted-foreground leading-relaxed">
              IntMoney (&quot;we,&quot; &quot;our,&quot; or &quot;us&quot;) is committed to protecting your privacy. This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you use our AI agent wallet service built on the Stellar network.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold mb-4">Information We Collect</h2>
            <p className="text-muted-foreground leading-relaxed mb-4">
              We collect information that you provide directly to us, including:
            </p>
            <ul className="list-disc pl-6 space-y-2 text-muted-foreground">
              <li>Account information (email address, username)</li>
              <li>Transaction data and payment history</li>
              <li>Communication preferences</li>
              <li>Device information and usage data</li>
              <li>Voice commands and chat interactions with the AI agent</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-bold mb-4">How We Use Your Information</h2>
            <p className="text-muted-foreground leading-relaxed mb-4">
              We use the information we collect to:
            </p>
            <ul className="list-disc pl-6 space-y-2 text-muted-foreground">
              <li>Provide, maintain, and improve our services</li>
              <li>Process transactions and send related information</li>
              <li>Train and improve our AI agent capabilities</li>
              <li>Send you technical notices and support messages</li>
              <li>Respond to your comments and questions</li>
              <li>Detect, prevent, and address fraud and security issues</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-bold mb-4">Data Security</h2>
            <p className="text-muted-foreground leading-relaxed">
              We implement industry-standard security measures to protect your information, including end-to-end encryption for sensitive data, biometric authentication, and secure key storage. Your private keys are encrypted and never leave your device. However, no method of transmission over the Internet is 100% secure, and we cannot guarantee absolute security.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold mb-4">Stellar Network</h2>
            <p className="text-muted-foreground leading-relaxed">
              IntMoney operates on the Stellar blockchain network. Transactions on the Stellar network are public and permanently recorded on the blockchain. While your personal information is not directly tied to your Stellar address in our system, blockchain transactions are transparent and traceable.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold mb-4">Third-Party Services</h2>
            <p className="text-muted-foreground leading-relaxed">
              We may use third-party services for analytics, payment processing, and infrastructure. These third parties have access to your information only to perform specific tasks on our behalf and are obligated to protect your information.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold mb-4">Your Rights</h2>
            <p className="text-muted-foreground leading-relaxed mb-4">
              You have the right to:
            </p>
            <ul className="list-disc pl-6 space-y-2 text-muted-foreground">
              <li>Access and receive a copy of your personal data</li>
              <li>Correct inaccurate or incomplete information</li>
              <li>Request deletion of your personal data</li>
              <li>Object to or restrict certain processing of your data</li>
              <li>Export your data in a portable format</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-bold mb-4">Changes to This Policy</h2>
            <p className="text-muted-foreground leading-relaxed">
              We may update this Privacy Policy from time to time. We will notify you of any changes by posting the new Privacy Policy on this page and updating the &quot;Last updated&quot; date.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold mb-4">Contact Us</h2>
            <p className="text-muted-foreground leading-relaxed">
              If you have any questions about this Privacy Policy, please contact us at{" "}
              <a href="mailto:privacy@intmoney.com" className="text-primary hover:underline">
                privacy@intmoney.com
              </a>
            </p>
          </section>
        </div>
      </main>

      <Footer />
    </div>
  );
}
