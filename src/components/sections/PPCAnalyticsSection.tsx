import { Button } from "@/components/ui/button";
import PPCCarousel from "@/components/PPCCarousel";
import { Check } from "lucide-react";
import { Separator } from "@/components/ui/separator";

interface PPCAnalyticsSectionProps {
  isSectionVisible: (sectionId: string) => boolean;
  setVisibleSection: (sectionId: string | null) => void;
  ppcAnalyticsRef: React.RefObject<HTMLElement>;
}

const PPCAnalyticsSection = ({ isSectionVisible, setVisibleSection, ppcAnalyticsRef }: PPCAnalyticsSectionProps) => {
  const isVisible = isSectionVisible('ppc-analytics');
  
  return (
    <section 
      id="ppc-analytics" 
      ref={ppcAnalyticsRef} 
      className={`section-padding py-16 sm:py-20 bg-gradient-to-br from-gray-900 via-gray-850 to-gray-900 dark:from-gray-900 dark:via-gray-850 dark:to-gray-900 transition-opacity duration-500 ${isVisible ? 'opacity-100' : 'opacity-0'}`}
      style={{ 
        display: isVisible ? 'block' : 'none',
        height: isVisible ? 'auto' : '0',
        overflow: isVisible ? 'visible' : 'hidden',
        position: 'relative',
        zIndex: isVisible ? '10' : '-1'
      }}
    >
      {/* Background decoration */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-20 right-20 w-96 h-96 bg-blue-500/5 rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 left-20 w-96 h-96 bg-purple-500/5 rounded-full blur-3xl"></div>
      </div>

      <div className="container max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-10">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-center bg-clip-text text-transparent bg-gradient-to-r from-royal to-blue-600 dark:from-electric dark:to-royal">
            PPC & Analytics
          </h2>
          <p className="text-gray-700 dark:text-gray-300 text-center max-w-3xl mx-auto">
            Data-driven campaigns that generate real business results. I build, manage, and optimize paid advertising campaigns across multiple platforms, with comprehensive tracking and reporting.
          </p>
        </div>
        
        {/* Features Grid */}
        <div className="bg-white/90 dark:bg-gray-800/90 shadow-xl rounded-xl p-6 md:p-8 border border-gray-200 dark:border-gray-700 mb-12 backdrop-blur-sm hover:shadow-2xl transition-all duration-300">
          <h3 className="text-xl font-semibold mb-7 bg-clip-text text-transparent bg-gradient-to-r from-royal to-blue-600 dark:from-electric dark:to-royal">PPC Services</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="p-5 bg-gray-50 dark:bg-gray-700/70 rounded-lg border border-gray-100 dark:border-gray-600 hover:shadow-md transition-all duration-300 transform hover:scale-[1.02] group">
              <h4 className="font-semibold mb-2 text-gray-800 dark:text-gray-200 group-hover:text-royal dark:group-hover:text-electric transition-colors">Google Ads Management</h4>
              <p className="text-sm text-gray-600 dark:text-gray-300">Optimized search, display, and video campaigns with strategic keyword targeting and ad creation.</p>
            </div>
            <div className="p-5 bg-gray-50 dark:bg-gray-700/70 rounded-lg border border-gray-100 dark:border-gray-600 hover:shadow-md transition-all duration-300 transform hover:scale-[1.02] group">
              <h4 className="font-semibold mb-2 text-gray-800 dark:text-gray-200 group-hover:text-royal dark:group-hover:text-electric transition-colors">Meta Ads Optimization</h4>
              <p className="text-sm text-gray-600 dark:text-gray-300">Facebook and Instagram ad campaigns with advanced audience targeting and creative testing.</p>
            </div>
            <div className="p-5 bg-gray-50 dark:bg-gray-700/70 rounded-lg border border-gray-100 dark:border-gray-600 hover:shadow-md transition-all duration-300 transform hover:scale-[1.02] group">
              <h4 className="font-semibold mb-2 text-gray-800 dark:text-gray-200 group-hover:text-royal dark:group-hover:text-electric transition-colors">Analytics & Reporting</h4>
              <p className="text-sm text-gray-600 dark:text-gray-300">Comprehensive performance tracking with custom dashboards and actionable insights.</p>
            </div>
            <div className="p-5 bg-gray-50 dark:bg-gray-700/70 rounded-lg border border-gray-100 dark:border-gray-600 hover:shadow-md transition-all duration-300 transform hover:scale-[1.02] group">
              <h4 className="font-semibold mb-2 text-gray-800 dark:text-gray-200 group-hover:text-royal dark:group-hover:text-electric transition-colors">Conversion Optimization</h4>
              <p className="text-sm text-gray-600 dark:text-gray-300">Landing page improvements and funnel enhancements to maximize ROI from paid traffic.</p>
            </div>
          </div>
        </div>
        
        {/* Carousel Section */}
        <div className="mb-12">
          <h3 className="text-xl font-semibold mb-6 text-center bg-clip-text text-transparent bg-gradient-to-r from-royal to-blue-600 dark:from-electric dark:to-royal">Campaign Examples & Analytics</h3>
          <Separator className="mb-8 bg-gray-200 dark:bg-gray-700" />
          <PPCCarousel />
        </div>
        
        {/* Results Section */}
        <div className="bg-blue-50/80 dark:bg-blue-900/20 rounded-xl p-6 md:p-8 border border-blue-100 dark:border-blue-800 backdrop-filter backdrop-blur-sm transform hover:shadow-xl transition-all duration-300">
          <h3 className="text-xl font-semibold mb-6 text-center bg-clip-text text-transparent bg-gradient-to-r from-royal to-blue-600 dark:from-electric dark:to-royal">Campaign Results</h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div className="flex items-start space-x-3 bg-white/70 dark:bg-gray-800/50 p-4 rounded-lg hover:shadow-md transition-all duration-300 transform hover:scale-[1.02]">
              <Check className="text-blue-600 dark:text-electric mt-1 flex-shrink-0" />
              <span className="text-gray-700 dark:text-gray-300">Increased conversion rates by 32% for local service business</span>
            </div>
            <div className="flex items-start space-x-3 bg-white/70 dark:bg-gray-800/50 p-4 rounded-lg hover:shadow-md transition-all duration-300 transform hover:scale-[1.02]">
              <Check className="text-blue-600 dark:text-electric mt-1 flex-shrink-0" />
              <span className="text-gray-700 dark:text-gray-300">Reduced cost-per-lead by 47% through strategic audience targeting</span>
            </div>
            <div className="flex items-start space-x-3 bg-white/70 dark:bg-gray-800/50 p-4 rounded-lg hover:shadow-md transition-all duration-300 transform hover:scale-[1.02]">
              <Check className="text-blue-600 dark:text-electric mt-1 flex-shrink-0" />
              <span className="text-gray-700 dark:text-gray-300">Built comprehensive analytics dashboards for real-time campaign monitoring</span>
            </div>
            <div className="flex items-start space-x-3 bg-white/70 dark:bg-gray-800/50 p-4 rounded-lg hover:shadow-md transition-all duration-300 transform hover:scale-[1.02]">
              <Check className="text-blue-600 dark:text-electric mt-1 flex-shrink-0" />
              <span className="text-gray-700 dark:text-gray-300">Achieved 280% ROAS for e-commerce client through optimized product campaigns</span>
            </div>
          </div>
        </div>
        
        {/* Footer Action */}
        <div className="mt-10 text-center">
          <Button 
            variant="outline" 
            className="border border-blue-200 dark:border-blue-800 text-blue-600 dark:text-electric hover:bg-blue-50 dark:hover:bg-blue-900/50 shadow-sm"
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
