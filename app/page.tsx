import { LandingLayout } from "@/components/templates/landing-layout";
import { LazySections } from "@/components/templates/lazy-sections";
import { Navbar } from "@/components/organisms/navbar";
import { HeroSection } from "@/components/organisms/hero-section";
import { Footer } from "@/components/organisms/footer";
import { WaitlistProvider } from "@/components/providers/waitlist-provider";
import { WaitlistModal } from "@/components/organisms/waitlist-modal";

export default function Home() {
  return (
    <WaitlistProvider>
      <LandingLayout>
        <Navbar />
        <HeroSection />
        <LazySections />
        <Footer />
        <WaitlistModal />
      </LandingLayout>
    </WaitlistProvider>
  );
}
