import Image from "next/image";
import Hero from '@/components/Hero';
import About from '@/components/About';
import Tokenomics from '@/components/Tokenomics';
import Roadmap from '@/components/Roadmap';
import Community from '@/components/Community';
import HowToBuy from '@/components/HowToBuy';
import LunarPhases from '@/components/LunarPhases';
import TransformationTales from '@/components/TransformationTales';
import WolfPackBenefits from '@/components/WolfPackBenefits';
import WolfPackAchievements from '@/components/WolfPackAchievements';
import HowlGallery from '@/components/HowlGallery';

export default function Home() {
  return (
    <div className="min-h-screen bg-black">
      <Hero />
      <About />
      <HowToBuy />
      <TransformationTales />
      <LunarPhases />
      <WolfPackBenefits />
      <WolfPackAchievements />
      <HowlGallery />
      <Tokenomics />
      <Roadmap />
      <Community />
    </div>
  );
}
