import HeroSection from "./_components/heroSection";
import KeyFeatures from "./_components/keyFeatures";
import Footer from "./_components/footer";
import HowItWorks from "./_components/howItWorks";
import Pricing from "./_components/pricing";
import CallToAction from "./_components/callToAction";

export default async function Home() {
  return (
    <main className="flex-1 items-center">
      <HeroSection />
      <KeyFeatures />
      <HowItWorks />
      <Pricing />
      <CallToAction />
      <Footer />
    </main>
  );
}
