
import { Button } from "@/components/ui/button";
import LovableProjectsCarousel from "@/components/LovableProjectsCarousel";

interface LovableProjectsSectionProps {
  isSectionVisible: (sectionId: string) => boolean;
  setVisibleSection: (sectionId: string | null) => void;
  lovableProjectsRef: React.RefObject<HTMLElement>;
}

const LovableProjectsSection = ({ isSectionVisible, setVisibleSection, lovableProjectsRef }: LovableProjectsSectionProps) => {
  const isVisible = isSectionVisible('lovable-projects');
  
  return (
    <section 
      id="lovable-projects" 
      ref={lovableProjectsRef} 
      className={`section-padding transition-opacity duration-500 ${isVisible ? 'opacity-100' : 'opacity-0'}`}
      style={{ 
        display: isVisible ? 'block' : 'none',
        height: isVisible ? 'auto' : '0',
        overflow: isVisible ? 'visible' : 'hidden',
        position: 'relative',
        zIndex: isVisible ? '10' : '-1'
      }}
    >
      <div className="container mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold mb-6 text-center">Lovable Projects</h2>
        <div className="max-w-3xl mx-auto mb-12">
          <p className="text-white/80 text-center">
            Explore my AI-powered web applications built with the Lovable platform. From interactive chatbots to custom dashboards, these projects showcase modern web development with AI integration.
          </p>
        </div>
        
        <LovableProjectsCarousel />
        
        <div className="mt-8 text-center">
          <Button 
            variant="ghost" 
            className="border border-white/20 hover:bg-white/10"
            onClick={() => setVisibleSection(null)}
          >
            Close Section
          </Button>
        </div>
      </div>
    </section>
  );
};

export default LovableProjectsSection;
