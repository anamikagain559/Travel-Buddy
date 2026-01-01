import Hero from "@/components/home/Hero";
import HowItWorks from "@/components/home/HowItWorks";
import Destinations from "@/components/home/Destinations";
import WhyChooseUs from "@/components/home/WhyChooseUs";
import TopTravelers from "@/components/home/TopTravelers";
import CTA from "@/components/home/CTA";

export default function HomePage() {
  return (
    <main className="space-y-24">
      <Hero />
      <HowItWorks />
      <Destinations />
      <WhyChooseUs />
      <TopTravelers />
      <CTA />
    </main>
  );
}
