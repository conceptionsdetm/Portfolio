import Hero from "@/components/sections/Hero";
import Marquee from "@/components/sections/Marquee";
import FeaturedWork from "@/components/sections/FeaturedWork";
import Stats from "@/components/sections/Stats";
import CallToAction from "@/components/sections/CallToAction";

export default function HomePage() {
  return (
    <main>
      <Hero />
      <Marquee />
      <FeaturedWork />
      <Stats />
      <CallToAction />
    </main>
  );
}
