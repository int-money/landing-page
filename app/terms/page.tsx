import { Navbar } from "@/components/navbar";
import { Footer } from "@/components/organisms/footer";
import { FileText } from "lucide-react";

export default function TermsPage() {
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
            <FileText className="h-4 w-4" />
            Legal
          </div>
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Terms of Service</h1>
          <p className="text-muted-foreground">
            Last updated: February 20, 2026
          </p>
        </div>

        <div className="prose prose-neutral dark:prose-invert max-w-none space-y-8">
          <section>
            <h2 className="text-2xl font-bold mb-4">Agreement to Terms</h2>
            <p className="text-muted-foreground leading-relaxed">
              By accessing or using IntMoney (&quot;the Service&quot;), you agree to be bound by these Terms of Service (&quot;Terms&quot;). If you disagree with any part of these terms, you may not access the Service.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold mb-4">Description of Service</h2>
            <p className="text-muted-foreground leading-relaxed">
              IntMoney is an AI-powered wallet service built on the Stellar blockchain network. The Service allows users to send, receive, swap, and manage digital assets using natural language commands through text or voice interfaces.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold mb-4">User Responsibilities</h2>
            <p className="text-muted-foreground leading-relaxed mb-4">
              As a user of IntMoney, you agree to:
            </p>
            <ul className="list-disc pl-6 space-y-2 text-muted-foreground">
              <li>Provide accurate and complete information during registration</li>
              <li>Maintain the security of your account credentials and private keys</li>
              <li>Notify us immediately of any unauthorized access to your account</li>
              <li>Comply with all applicable laws and regulations</li>
              <li>Not use the Service for any illegal or unauthorized purpose</li>
              <li>Not attempt to gain unauthorized access to any part of the Service</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-bold mb-4">Financial Transactions</h2>
            <p className="text-muted-foreground leading-relaxed">
              All transactions processed through IntMoney are executed on the Stellar blockchain network. Once a transaction is confirmed on the blockchain, it cannot be reversed. You are solely responsible for verifying transaction details before approval. IntMoney is not responsible for losses resulting from user error, including sending funds to incorrect addresses.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold mb-4">AI Agent Limitations</h2>
            <p className="text-muted-foreground leading-relaxed">
              While our AI agent is designed to understand and execute your financial requests accurately, it may occasionally misinterpret commands or make errors. You are responsible for reviewing all transaction details before final approval. IntMoney is not liable for losses resulting from AI misinterpretation of user commands.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold mb-4">Fees</h2>
            <p className="text-muted-foreground leading-relaxed">
              IntMoney may charge fees for certain services. All applicable fees will be clearly disclosed before you complete a transaction. Network fees charged by the Stellar blockchain are separate and not controlled by IntMoney.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold mb-4">Intellectual Property</h2>
            <p className="text-muted-foreground leading-relaxed">
              The Service and its original content, features, and functionality are owned by IntMoney and are protected by international copyright, trademark, patent, trade secret, and other intellectual property laws.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold mb-4">Limitation of Liability</h2>
            <p className="text-muted-foreground leading-relaxed">
              To the maximum extent permitted by law, IntMoney shall not be liable for any indirect, incidental, special, consequential, or punitive damages, or any loss of profits or revenues, whether incurred directly or indirectly, or any loss of data, use, goodwill, or other intangible losses resulting from your use of the Service.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold mb-4">Termination</h2>
            <p className="text-muted-foreground leading-relaxed">
              We may terminate or suspend your account and access to the Service immediately, without prior notice or liability, for any reason, including breach of these Terms. Upon termination, your right to use the Service will immediately cease.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold mb-4">Changes to Terms</h2>
            <p className="text-muted-foreground leading-relaxed">
              We reserve the right to modify or replace these Terms at any time. If a revision is material, we will provide at least 30 days&apos; notice prior to any new terms taking effect. Continued use of the Service after changes become effective constitutes acceptance of the revised Terms.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold mb-4">Governing Law</h2>
            <p className="text-muted-foreground leading-relaxed">
              These Terms shall be governed by and construed in accordance with applicable laws, without regard to conflict of law provisions.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold mb-4">Contact Us</h2>
            <p className="text-muted-foreground leading-relaxed">
              If you have any questions about these Terms, please contact us at{" "}
              <a href="mailto:legal@intmoney.com" className="text-primary hover:underline">
                legal@intmoney.com
              </a>
            </p>
          </section>
        </div>
      </main>

      <Footer />
    </div>
  );
}
