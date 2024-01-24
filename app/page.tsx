import Hero from "@/components/main/Hero";
import PortfolioDesign from "@/components/main/PortfolioDesign";
import Skills from "@/components/main/Skills";
import Blackhole from "@/components/video/Blackhole";
import Image from "next/image";

export default function Home() {
  return (
    <main className="h-full w-full">
      <div className="flex flex-col mt-[65px] gap-8">
        <Hero />
        <Skills />
        <PortfolioDesign />
      </div>
    </main>
  );
}
