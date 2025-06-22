import { PolaroidGallery } from "@/components/PolaroidGallery";
import { Navigation } from "@/components/Navigation";
import { HeroSection } from "@/components/HeroSection";
import { ResearchSection } from "@/components/ResearchSection";
import { ProjectsSection } from "@/components/ProjectsSection";
import { Footer } from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen bg-zinc-900 text-white overflow-x-hidden relative">
      {/* 🧭 Thinner Navigation Bar */}
      <div className="fixed top-0 left-0 w-full z-20 bg-zinc-900/70 backdrop-blur-md border-b border-zinc-800 px-4 py-1 flex justify-end font-sans text-sm text-blue-50 tracking-tight space-x-4">
        <Navigation />
      </div>

      {/* Hero Section + Polaroids */}
      <div className="relative flex flex-col lg:flex-row mt-[4rem] items-stretch lg:items-center min-h-screen gap-x-8">
        {/* Polaroid Gallery - Left */}
        <div className="relative w-full px-8 lg:w-2/3 min-h-[15rem] sm:min-h-[60vh] md:min-h-[50vh] lg:min-h-[60vh] overflow-visible">
          <PolaroidGallery />
        </div>

        {/* Hero - Right */}
        <div className="relative w-full px-8 flex justify-center lg:justify-end">
          <div className="w-full lg:w-3/4 px-4 sm:px-6 lg:px-12">
            <HeroSection />
          </div>
        </div>
      </div>

      {/* Research, Projects, Footer */}
      <div className="relative z-0 px-8 lg:px-16 pb-16">
        <ResearchSection />
        <ProjectsSection />
        <Footer />
      </div>
    </div>
  );
};

export default Index;
