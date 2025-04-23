import HeroSection from "./_components/heroSection";
import KeyFeatures from "./_components/keyFeatures";

export default async function Home() {
  return (
    <main className="flex-1 items-center px-6 md:px-3 lg:px-0">
      <HeroSection />
      <KeyFeatures />
    </main>
  );
}
