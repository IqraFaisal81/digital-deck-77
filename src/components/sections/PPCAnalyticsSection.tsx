
import { Button } from "@/components/ui/button";
import PPCCarousel from "@/components/PPCCarousel";

interface PPCAnalyticsSectionProps {
  isSectionVisible: (sectionId: string) => boolean;
  setVisibleSection: (sectionId: string | null) => void;
  ppcAnalyticsRef: React.RefObject<HTMLElement>;
}

const PPCAnalyticsSection = ({ isSectionVisible, setVisibleSection, ppcAnalyticsRef }: PPCAnalyticsSectionProps) => {
  return (
    <section id="ppc-analytics" ref={ppcAnalyticsRef} className={`section-padding transition-all duration-300 ${isSectionVisible('ppc-analytics') ? 'opacity-100' : 'hidden opacity-0 h-0 overflow-hidden'}`}>
      <div className="container mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold mb-6 text-center">PPC & Analytics</h2>
        <div className="max-w-3xl mx-auto mb-12">
          <p className="text-white/80 text-center">
            Data-driven campaigns that generate real business results. I build, manage, and optimize paid advertising campaigns across multiple platforms, with comprehensive tracking and reporting.
          </p>
        </div>
        
        <h3 className="text-xl font-semibold mb-6 text-center">Campaign Examples & Analytics</h3>
        <PPCCarousel />
        
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

export default PPCAnalyticsSection;
