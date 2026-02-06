import HeroSection from "@/components/HeroSection";
import ProjectSection from "@/components/ProjectSection";
import Image from "next/image";

export default function Home() {
  return (
    <div className="container mx-auto max-w-7xl">
      <HeroSection />
      <ProjectSection />
    </div>
  );
}
