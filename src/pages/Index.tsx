
import { PolaroidGallery } from "@/components/PolaroidGallery";
import { Navigation } from "@/components/Navigation";
import { HeroSection } from "@/components/HeroSection";
import { ResearchSection } from "@/components/ResearchSection";
import { ProjectsSection } from "@/components/ProjectsSection";

const Index = () => {
  return (
    <div className="min-h-screen bg-gray-900 text-white overflow-hidden">
      <div className="relative min-h-screen flex items-center">
        {/* Polaroid Gallery - Left Side */}
        <div className="absolute left-0 top-0 w-1/2 h-full">
          <PolaroidGallery />
        </div>
        
        {/* Main Content - Right Side */}
        <div className="relative z-10 w-full flex justify-end">
          <div className="w-1/2 px-8 lg:px-16">
            <HeroSection />
            <Navigation />
          </div>
        </div>
      </div>
      
      {/* Research and Projects Sections */}
      <div className="relative z-10 px-8 lg:px-16 pb-16">
        <ResearchSection />
        <ProjectsSection />
      </div>
    </div>
  );
};

export default Index;
