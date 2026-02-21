import { Card } from "@/components/ui/card";
import { Navbar } from "@/components/navbar";
import { Button } from "@/components/ui/button";
import { HeroDemo } from "@/components/hero-demo";
import { SkipToContent } from "@/components/skip-to-content";
import {
  Zap,
  Globe,
  Shield,
  Sparkles,
  Brain,
  MessageSquareText,
  CheckCircle2,
} from "lucide-react";
import Image from "next/image";

export default function Home() {
  return (
    <div className="min-h-screen bg-background relative overflow-hidden">
      <SkipToContent />
      
      {/* Dot grid pattern overlay for depth */}
      <div className="absolute inset-0 grid-pattern pointer-events-none z-0" aria-hidden="true" />

      {/* Decorative background orbs — larger, more varied */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none" aria-hidden="true">
        <div className="absolute -top-40 -right-40 w-[500px] h-[500px] bg-primary/15 rounded-full blur-[64px] float will-change-transform motion-reduce:animate-none" />
        <div className="absolute top-1/4 -left-60 w-[400px] h-[400px] bg-[oklch(0.45_0.2_240_/_0.12)] rounded-full blur-[64px] float-delayed will-change-transform motion-reduce:animate-none" />
        <div className="absolute bottom-1/3 right-1/5 w-[350px] h-[350px] bg-[oklch(0.5_0.18_330_/_0.1)] rounded-full blur-[64px] float will-change-transform motion-reduce:animate-none" />
        <div className="absolute top-2/3 left-1/3 w-[300px] h-[300px] bg-primary/8 rounded-full blur-[48px] float-delayed will-change-transform motion-reduce:animate-none" />
      </div>

      {/* Modern Navbar */}
      <Navbar />

      {/* Hero Section */}
      <section id="main-content" className="container mx-auto px-4 pt-8 md:pt-16 pb-20 md:pb-28 relative z-10 section-glow" aria-label="Hero">
        <div className="mx-auto max-w-[90%] text-center">
          {/* Badge — glassmorphic with inner glow */}
          <div className="mb-8 inline-flex items-center gap-2 rounded-full border border-primary/25 bg-primary/[0.08] backdrop-blur-md px-5 py-2 text-sm text-foreground shadow-lg shadow-primary/5">
            <span className="relative flex h-2 w-2" aria-hidden="true">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-primary opacity-75 motion-reduce:animate-none"></span>
              <span className="relative inline-flex h-2 w-2 rounded-full bg-primary"></span>
            </span>
            Your AI agent for global payments — Launching on Stellar
          </div>

          <h1 className="mb-6 text-balance text-6xl font-bold tracking-tighter md:text-7xl lg:text-8xl text-glow">
            Meet the AI agent that{" "}
            <span className="gradient-text">moves your money.</span>
          </h1>

          <p className="mx-auto mb-10 max-w-3xl text-pretty text-lg text-muted-foreground md:text-xl">
            Tell IntMoney what you need in plain language. Your personal
            financial agent figures out the best route, handles currency
            conversion, and executes — in seconds.
          </p>

          <div className="mb-4 flex flex-col gap-4 sm:flex-row sm:justify-center">
            <Button
              size="lg"
              className="text-base gap-2 rounded-full px-8 shadow-lg hover:shadow-xl hover:scale-105 transition-all duration-300 motion-reduce:transition-none motion-reduce:hover:scale-100 glow-sm"
            >
              <Sparkles className="h-5 w-5" aria-hidden="true" />
              Join the Waitlist
            </Button>
            <a href="#how-it-works">
              <Button
                size="lg"
                variant="outline"
                className="text-base bg-transparent gap-2 rounded-full px-8 border-primary/30 hover:bg-primary/10 hover:border-primary/50 transition-all duration-300 motion-reduce:transition-none"
              >
                See Your Agent in Action
              </Button>
            </a>
          </div>

          <p className="text-sm text-muted-foreground">
            Join 2,000+ early adopters on the waitlist
          </p>
        </div>

        {/* Hero Visual — with radial glow underneath to make it "float" */}
        <div className="mx-auto mt-20 max-w-4xl relative">
          <div className="absolute -inset-10 bg-primary/[0.07] rounded-[40px] blur-[40px] pointer-events-none motion-reduce:hidden" aria-hidden="true" />
          <div className="relative">
            <HeroDemo />
          </div>
        </div>
      </section>

      {/* Features Bento Grid */}
      <section
        id="features"
        className="container mx-auto px-4 py-24 relative z-10 section-glow"
        aria-labelledby="features-heading"
      >
        <div className="mb-16 text-center">
          <div className="inline-flex items-center gap-2 rounded-full bg-primary/10 px-4 py-1.5 text-sm font-medium text-primary mb-4">
            <Sparkles className="h-4 w-4" aria-hidden="true" />
            Features
          </div>
          <h2 id="features-heading" className="mb-4 text-balance text-3xl font-bold md:text-5xl text-glow">
            Your agent works{" "}
            <span className="gradient-text">while you don&apos;t</span>
          </h2>
          <p className="mx-auto max-w-2xl text-pretty text-lg text-muted-foreground">
            An intelligent agent that understands, plans, and executes your
            financial tasks autonomously
          </p>
        </div>

        <div className="grid gap-4 md:grid-cols-3 lg:gap-5">
          {/* Hero card — AI Understanding, spans 2 cols × 2 rows */}
          <Card className="glass-card gradient-border border-0 p-8 md:col-span-2 md:row-span-2 flex flex-col justify-between rounded-3xl group hover:shadow-2xl transition-all duration-500 motion-reduce:transition-none will-change-transform relative overflow-hidden">
            <div className="absolute inset-0 gradient-mesh opacity-40 pointer-events-none motion-reduce:hidden" aria-hidden="true" />
            <div className="relative z-10">
              <div className="mb-6 flex h-14 w-14 items-center justify-center rounded-2xl icon-gradient border border-primary/20 group-hover:scale-110 group-hover:glow-sm transition-all duration-300 motion-reduce:transition-none motion-reduce:group-hover:scale-100" aria-hidden="true">
                <Brain className="h-7 w-7 text-primary" />
              </div>
              <h3 className="mb-3 text-2xl md:text-3xl font-bold">
                Understands &amp; Learns
              </h3>
              <p className="text-muted-foreground text-base md:text-lg leading-relaxed mb-8">
                Say what you need naturally — your agent parses intent, asks
                smart clarifying questions, and remembers your patterns over
                time. Frequent contacts, preferred currencies, past
                transactions — it all makes your next request faster.
              </p>
            </div>

            <div className="relative z-10 grid grid-cols-2 gap-3">
              <div className="flex items-center gap-3 p-3 rounded-xl bg-muted/30 border border-border/50">
                <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-green-500/20 shrink-0" aria-hidden="true">
                  <Sparkles className="h-4 w-4 text-green-500" />
                </div>
                <span className="text-sm">&quot;Send rent to landlord&quot;</span>
              </div>
              <div className="flex items-center gap-3 p-3 rounded-xl bg-muted/30 border border-border/50">
                <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-blue-500/20 shrink-0" aria-hidden="true">
                  <Sparkles className="h-4 w-4 text-blue-500" />
                </div>
                <span className="text-sm">&quot;Best rate for USDC&quot;</span>
              </div>
              <div className="flex items-center gap-3 p-3 rounded-xl bg-muted/30 border border-border/50">
                <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-purple-500/20 shrink-0" aria-hidden="true">
                  <Sparkles className="h-4 w-4 text-purple-500" />
                </div>
                <span className="text-sm">&quot;Spending this week?&quot;</span>
              </div>
              <div className="flex items-center gap-3 p-3 rounded-xl bg-muted/30 border border-border/50">
                <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-orange-500/20 shrink-0" aria-hidden="true">
                  <Sparkles className="h-4 w-4 text-orange-500" />
                </div>
                <span className="text-sm">&quot;Split dinner, 3 friends&quot;</span>
              </div>
            </div>
          </Card>

          {/* Right top — Stellar-Powered Speed, cyan accent */}
          <Card className="glass-card gradient-border border-0 p-6 rounded-3xl group hover:shadow-xl hover:shadow-cyan-500/5 hover:-translate-y-1 transition-all duration-300 motion-reduce:transition-none motion-reduce:hover:translate-y-0 will-change-transform relative overflow-hidden">
            <div className="absolute top-0 inset-x-0 h-[2px] bg-gradient-to-r from-cyan-500/0 via-cyan-500 to-cyan-500/0" aria-hidden="true" />
            <div>
              <div className="mb-4 flex h-11 w-11 items-center justify-center rounded-xl icon-gradient border border-primary/20 group-hover:scale-110 transition-transform duration-300 motion-reduce:transition-none motion-reduce:group-hover:scale-100" aria-hidden="true">
                <Globe className="h-5 w-5 text-primary" />
              </div>
              <h3 className="mb-2 text-lg font-bold">
                Stellar-Powered Speed
              </h3>
              <p className="text-muted-foreground text-sm leading-relaxed">
                Optimal path on Stellar&apos;s network — fastest route, lowest
                fee, best exchange rate. Under 5 seconds, less than $0.01.
              </p>
            </div>
          </Card>

          {/* Right bottom — End-to-End Protection, green accent */}
          <Card className="glass-card gradient-border border-0 p-6 rounded-3xl group hover:shadow-xl hover:shadow-green-500/5 hover:-translate-y-1 transition-all duration-300 motion-reduce:transition-none motion-reduce:hover:translate-y-0 will-change-transform relative overflow-hidden">
            <div className="absolute top-0 inset-x-0 h-[2px] bg-gradient-to-r from-green-500/0 via-green-500 to-green-500/0" aria-hidden="true" />
            <div>
              <div className="mb-4 flex h-11 w-11 items-center justify-center rounded-xl icon-gradient border border-primary/20 group-hover:scale-110 transition-transform duration-300 motion-reduce:transition-none motion-reduce:group-hover:scale-100" aria-hidden="true">
                <Shield className="h-5 w-5 text-primary" />
              </div>
              <h3 className="mb-2 text-lg font-bold">
                End-to-End Protection
              </h3>
              <p className="text-muted-foreground text-sm leading-relaxed">
                Biometric authentication, fully encrypted keys, and an agent
                that verifies every transaction before it moves a single cent.
              </p>
            </div>
          </Card>
        </div>
      </section>

      {/* How It Works */}
      <section
        id="how-it-works"
        className="container mx-auto px-4 py-28 relative z-10 section-glow"
        aria-labelledby="how-it-works-heading"
      >
        <div className="mx-auto max-w-4xl">
          <div className="mb-16 text-center">
            <div className="inline-flex items-center gap-2 rounded-full bg-primary/10 px-4 py-1.5 text-sm font-medium text-primary mb-4">
              <Zap className="h-4 w-4" aria-hidden="true" />
              How It Works
            </div>
            <h2 id="how-it-works-heading" className="mb-4 text-balance text-3xl font-bold md:text-5xl text-glow">
              From words to{" "}
              <span className="gradient-text">money moved</span>
            </h2>
            <p className="mx-auto max-w-2xl text-pretty text-lg text-muted-foreground">
              Three steps. Your agent handles the complexity in between.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-[1fr_auto_1fr_auto_1fr] gap-10 md:gap-0 items-start relative">

            {/* Step 1 — You request */}
            <div className="text-center group relative">
              <div className="mx-auto mb-5 flex h-14 w-14 items-center justify-center rounded-2xl bg-background border-2 border-primary/40 group-hover:scale-110 group-hover:border-primary/70 transition-all duration-300 motion-reduce:transition-none motion-reduce:group-hover:scale-100 relative z-10" aria-hidden="true">
                <MessageSquareText className="h-7 w-7 text-primary" />
              </div>
              <h3 className="mb-2 text-lg font-bold">You request</h3>
              <p className="text-muted-foreground text-sm leading-relaxed text-balance">
                Say what you need in plain language, text or voice. No menus, no forms.
              </p>
            </div>

            {/* Line 1→2 */}
            <div className="hidden md:flex items-center pt-7 px-4" aria-hidden="true">
              <div className="w-24 h-[2px] bg-primary/30 rounded-full" />
            </div>

            {/* Step 2 — Agent understands */}
            <div className="text-center group relative">
              <div className="mx-auto mb-5 flex h-14 w-14 items-center justify-center rounded-2xl bg-background border-2 border-primary/40 group-hover:scale-110 group-hover:border-primary/70 transition-all duration-300 motion-reduce:transition-none motion-reduce:group-hover:scale-100 relative z-10" aria-hidden="true">
                <Brain className="h-7 w-7 text-primary" />
              </div>
              <h3 className="mb-2 text-lg font-bold">Agent understands intent</h3>
              <p className="text-muted-foreground text-sm leading-relaxed text-balance">
                Your agent parses your request, figures out exactly what you mean, and prepares the transaction.
              </p>
            </div>

            {/* Line 2→3 */}
            <div className="hidden md:flex items-center pt-7 px-4" aria-hidden="true">
              <div className="w-24 h-[2px] bg-gradient-to-r from-primary/30 to-green-400/30 rounded-full" />
            </div>

            {/* Step 3 — You approve */}
            <div className="text-center group relative">
              <div className="mx-auto mb-5 flex h-14 w-14 items-center justify-center rounded-2xl bg-background border-2 border-green-500/40 group-hover:scale-110 group-hover:border-green-500/70 transition-all duration-300 motion-reduce:transition-none motion-reduce:group-hover:scale-100 relative z-10" aria-hidden="true">
                <CheckCircle2 className="h-7 w-7 text-green-400" />
              </div>
              <h3 className="mb-2 text-lg font-bold">You approve, it executes</h3>
              <p className="text-muted-foreground text-sm leading-relaxed text-balance">
                Review the details, tap to confirm. Your agent executes and funds arrive in seconds.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Ecosystem Section */}
      <section
        id="ecosystem"
        className="container mx-auto px-4 py-24 relative z-10 section-glow"
        aria-labelledby="ecosystem-heading"
      >
        <div className="mb-16 text-center">
          <div className="inline-flex items-center gap-2 rounded-full bg-primary/10 px-4 py-1.5 text-sm font-medium text-primary mb-4">
            <Globe className="h-4 w-4" aria-hidden="true" />
            Ecosystem
          </div>
          <h2 id="ecosystem-heading" className="mb-4 text-balance text-3xl font-bold md:text-5xl text-glow">
            Part of the{" "}
            <span className="gradient-text">Stellar Ecosystem</span>
          </h2>
          <p className="mx-auto max-w-2xl text-pretty text-lg text-muted-foreground">
            Your agent leverages the full power of Stellar&apos;s network to
            move your money faster, cheaper, and smarter
          </p>
        </div>

        <div className="mx-auto max-w-4xl">
          <Card className="glass-card shimmer-border border-0 p-8 md:p-10 rounded-3xl">
            <div className="space-y-6">
              <div className="flex items-start gap-5 p-4 rounded-2xl hover:bg-primary/5 transition-all duration-300 motion-reduce:transition-none group border-l-2 border-transparent hover:border-primary/40">
                <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-2xl icon-gradient border border-primary/20 group-hover:scale-110 transition-transform duration-300 motion-reduce:transition-none motion-reduce:group-hover:scale-100" aria-hidden="true">
                  <Zap className="h-7 w-7 text-primary" />
                </div>
                <div>
                  <h3 className="mb-2 text-lg font-bold">
                    Agent + Stellar = Instant Payments
                  </h3>
                  <p className="text-muted-foreground leading-relaxed">
                    Your AI agent and Stellar&apos;s payment-optimized network
                    work together to deliver near-instant, low-cost cross-border
                    transactions that feel effortless.
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-5 p-4 rounded-2xl hover:bg-primary/5 transition-all duration-300 motion-reduce:transition-none group border-l-2 border-transparent hover:border-primary/40">
                <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-2xl icon-gradient border border-primary/20 group-hover:scale-110 transition-transform duration-300 motion-reduce:transition-none motion-reduce:group-hover:scale-100" aria-hidden="true">
                  <Shield className="h-7 w-7 text-primary" />
                </div>
                <div>
                  <h3 className="mb-2 text-lg font-bold">
                    Security Your Agent Enforces
                  </h3>
                  <p className="text-muted-foreground leading-relaxed">
                    Stellar&apos;s decentralized, battle-tested network combined
                    with your agent&apos;s transaction verification ensures every
                    payment is safe, authenticated, and accounted for.
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-5 p-4 rounded-2xl hover:bg-primary/5 transition-all duration-300 motion-reduce:transition-none group border-l-2 border-transparent hover:border-primary/40">
                <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-2xl icon-gradient border border-primary/20 group-hover:scale-110 transition-transform duration-300 motion-reduce:transition-none motion-reduce:group-hover:scale-100" aria-hidden="true">
                  <Brain className="h-7 w-7 text-primary" />
                </div>
                <div>
                  <h3 className="mb-2 text-lg font-bold">
                    A Network That Makes Your Agent Smarter
                  </h3>
                  <p className="text-muted-foreground leading-relaxed">
                    As the Stellar ecosystem grows with new anchors, stablecoin
                    rails, and remittance corridors, your agent gains more routes
                    and better rates to work with.
                  </p>
                </div>
              </div>
            </div>
          </Card>
        </div>
      </section>

      {/* CTA Section — full-bleed gradient mesh aurora */}
      <section className="relative z-10 py-28" aria-labelledby="cta-heading">
        <div className="absolute inset-0 gradient-mesh opacity-70 motion-reduce:hidden" aria-hidden="true" />
        <div className="absolute inset-0 bg-background/40 backdrop-blur-sm" aria-hidden="true" />
        <div className="container mx-auto px-4 relative z-10">
          <div className="px-6 py-20 text-center md:px-12">
            <div className="inline-flex items-center gap-2 rounded-full bg-primary/10 border border-primary/20 px-4 py-1.5 text-sm font-medium text-primary mb-6 backdrop-blur-sm">
              <Sparkles className="h-4 w-4" aria-hidden="true" />
              Early Access
            </div>
            <h2 id="cta-heading" className="mb-6 text-balance text-4xl font-bold md:text-6xl text-glow">
              Ready to meet your{" "}
              <span className="gradient-text">financial agent?</span>
            </h2>
            <p className="mx-auto max-w-xl mb-10 text-pretty text-lg text-muted-foreground">
              Join 2,000+ early adopters on the waitlist. Be among the first to
              let an AI agent handle your cross-border payments.
            </p>
            <div className="flex flex-col gap-4 sm:flex-row sm:justify-center">
              <Button
                size="lg"
                className="text-base gap-2 rounded-full px-10 shadow-lg hover:shadow-xl hover:scale-105 transition-all duration-300 motion-reduce:transition-none motion-reduce:hover:scale-100 glow-sm"
              >
                <Sparkles className="h-5 w-5" aria-hidden="true" />
                Join the Waitlist
              </Button>
              <a href="#features">
                <Button
                  size="lg"
                  variant="outline"
                  className="text-base bg-transparent gap-2 rounded-full px-8 border-primary/30 hover:bg-primary/10 hover:border-primary/50 transition-all duration-300 motion-reduce:transition-none"
                >
                  Explore Features
                </Button>
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Footer — gradient divider */}
      <footer className="relative z-10 backdrop-blur-sm" role="contentinfo">
        {/* Gradient divider line instead of plain border */}
        <div className="h-[1px] bg-gradient-to-r from-transparent via-primary/30 to-transparent" aria-hidden="true" />
        <div className="container mx-auto px-4 py-16">
          <div className="grid gap-10 md:grid-cols-4">
            <div>
              <div className="mb-5 flex items-center gap-2">
                <Image
                  src="/icon.svg"
                  alt=""
                  width={40}
                  height={40}
                  className="rounded-lg"
                  loading="lazy"
                  aria-hidden="true"
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

            <div>
              <h4 className="mb-5 text-sm font-bold uppercase tracking-wider text-foreground/70">
                Product
              </h4>
              <nav aria-label="Product links">
                <ul className="space-y-3 text-sm text-muted-foreground">
                  <li>
                    <a
                      href="#features"
                      className="hover:text-primary transition-colors duration-200 motion-reduce:transition-none focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 focus-visible:ring-offset-background rounded"
                    >
                      Features
                    </a>
                  </li>
                  <li>
                    <a
                      href="#how-it-works"
                      className="hover:text-primary transition-colors duration-200 motion-reduce:transition-none focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 focus-visible:ring-offset-background rounded"
                    >
                      How It Works
                    </a>
                  </li>
                  <li>
                    <a
                      href="#"
                      className="hover:text-primary transition-colors duration-200 motion-reduce:transition-none focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 focus-visible:ring-offset-background rounded"
                    >
                      Security
                    </a>
                  </li>
                </ul>
              </nav>
            </div>

            <div>
              <h4 className="mb-5 text-sm font-bold uppercase tracking-wider text-foreground/70">
                Developers
              </h4>
              <nav aria-label="Developer links">
                <ul className="space-y-3 text-sm text-muted-foreground">
                  <li>
                    <a
                      href="#"
                      className="hover:text-primary transition-colors duration-200 motion-reduce:transition-none focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 focus-visible:ring-offset-background rounded"
                    >
                      Documentation
                    </a>
                  </li>
                  <li>
                    <a
                      href="#"
                      className="hover:text-primary transition-colors duration-200 motion-reduce:transition-none focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 focus-visible:ring-offset-background rounded"
                    >
                      API
                    </a>
                  </li>
                  <li>
                    <a
                      href="#"
                      className="hover:text-primary transition-colors duration-200 motion-reduce:transition-none focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 focus-visible:ring-offset-background rounded"
                    >
                      GitHub
                    </a>
                  </li>
                </ul>
              </nav>
            </div>

            <div>
              <h4 className="mb-5 text-sm font-bold uppercase tracking-wider text-foreground/70">
                Company
              </h4>
              <nav aria-label="Company links">
                <ul className="space-y-3 text-sm text-muted-foreground">
                  <li>
                    <a
                      href="#"
                      className="hover:text-primary transition-colors duration-200 motion-reduce:transition-none focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 focus-visible:ring-offset-background rounded"
                    >
                      About
                    </a>
                  </li>
                  <li>
                    <a
                      href="#"
                      className="hover:text-primary transition-colors duration-200 motion-reduce:transition-none focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 focus-visible:ring-offset-background rounded"
                    >
                      Blog
                    </a>
                  </li>
                  <li>
                    <a
                      href="#"
                      className="hover:text-primary transition-colors duration-200 motion-reduce:transition-none focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 focus-visible:ring-offset-background rounded"
                    >
                      Contact
                    </a>
                  </li>
                </ul>
              </nav>
            </div>
          </div>

          <div className="mt-14 pt-8 flex flex-col md:flex-row items-center justify-between gap-4 text-sm text-muted-foreground">
            <div className="h-[1px] w-full bg-gradient-to-r from-transparent via-border/50 to-transparent absolute left-0 right-0" aria-hidden="true" />
            <p>
              &copy; 2025 IntMoney. Your personal AI agent for cross-border
              payments.
            </p>
            <nav aria-label="Legal links">
              <div className="flex items-center gap-6">
                <a
                  href="#"
                  className="hover:text-primary transition-colors duration-200 motion-reduce:transition-none focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 focus-visible:ring-offset-background rounded"
                >
                  Privacy
                </a>
                <a
                  href="#"
                  className="hover:text-primary transition-colors duration-200 motion-reduce:transition-none focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 focus-visible:ring-offset-background rounded"
                >
                  Terms
                </a>
              </div>
            </nav>
          </div>
        </div>
      </footer>
    </div>
  );
}
