
import { PolaroidGallery } from "@/components/PolaroidGallery";
import { Navigation } from "@/components/Navigation";
import { HeroSection } from "@/components/HeroSection";
import { ResearchSection } from "@/components/ResearchSection";
import { ProjectsSection } from "@/components/ProjectsSection";

const Index = () => {
  return (
    <div className="min-h-screen bg-black text-white overflow-x-hidden gap-x-4">
      <div className="relative flex flex-col lg:flex-row items-center min-h-screen gap-x-8">
        {/* Polaroid Gallery - Left Side */}
        <div className="relative w-full px-8 lg:w-1/2 h-96 lg:h-[80vh] overflow-hidden">
          <PolaroidGallery />
        </div>

        
        {/* Main Content - Right Side */}
        <div className="relative w-full px-8 flex justify-center lg:justify-end">
          <div className="w-full lg:w-3/4 px-4 sm:px-6 lg:px-12 mt-8">
            <HeroSection />
            <Navigation />
          </div>
        </div>

      </div>
      
      {/* Research and Projects Sections */}
      <div className="relative z-0 px-8 lg:px-16 pb-16">
        <ResearchSection />
        <ProjectsSection />
      </div>
    </div>
  );
};

export default Index;
