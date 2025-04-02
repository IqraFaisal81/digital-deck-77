
import { Button } from "@/components/ui/button";
import PPCCarousel from "@/components/PPCCarousel";
import { Check, ArrowRight, Calendar } from "lucide-react";
import { scrollToServiceSection } from "@/utils/ScrollToServiceUtils";

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
      className={`section-padding bg-gradient-to-br from-blue-50 to-white dark:from-gray-900 dark:to-gray-800 transition-opacity duration-500 ${isVisible ? 'opacity-100' : 'opacity-0'}`}
      style={{ 
        display: isVisible ? 'block' : 'none',
        height: isVisible ? 'auto' : '0',
        overflow: isVisible ? 'visible' : 'hidden',
        position: 'relative',
        zIndex: isVisible ? '10' : '-1'
      }}
    >
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold mb-6 text-center bg-clip-text text-transparent bg-gradient-to-r from-royal to-blue-600 dark:from-electric dark:to-royal">PPC & Analytics</h2>
        <div className="max-w-3xl mx-auto mb-8">
          <p className="text-gray-700 dark:text-gray-300 text-center">
            Data-driven campaigns that generate real business results. I build, manage, and optimize paid advertising campaigns across multiple platforms, with comprehensive tracking and reporting.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
          <div className="bg-white dark:bg-gray-800 shadow-md rounded-xl overflow-hidden border border-gray-200 dark:border-gray-700">
            <div className="p-6">
              <h3 className="text-xl font-semibold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-royal to-blue-600 dark:from-electric dark:to-royal">PPC Services</h3>
              <div className="space-y-4">
                <div className="flex items-start space-x-3">
                  <Check className="text-blue-600 dark:text-electric mt-1 flex-shrink-0" />
                  <div>
                    <h4 className="font-semibold text-gray-800 dark:text-gray-200">Google Ads Management</h4>
                    <p className="text-sm text-gray-600 dark:text-gray-300">Optimized search, display, and video campaigns with strategic keyword targeting and ad creation.</p>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <Check className="text-blue-600 dark:text-electric mt-1 flex-shrink-0" />
                  <div>
                    <h4 className="font-semibold text-gray-800 dark:text-gray-200">Meta Ads Optimization</h4>
                    <p className="text-sm text-gray-600 dark:text-gray-300">Facebook and Instagram ad campaigns with advanced audience targeting and creative testing.</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          
          <div className="bg-white dark:bg-gray-800 shadow-md rounded-xl overflow-hidden border border-gray-200 dark:border-gray-700">
            <div className="p-6">
              <h3 className="text-xl font-semibold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-royal to-blue-600 dark:from-electric dark:to-royal">Analytics & Tracking</h3>
              <div className="space-y-4">
                <div className="flex items-start space-x-3">
                  <Check className="text-blue-600 dark:text-electric mt-1 flex-shrink-0" />
                  <div>
                    <h4 className="font-semibold text-gray-800 dark:text-gray-200">Analytics & Reporting</h4>
                    <p className="text-sm text-gray-600 dark:text-gray-300">Comprehensive performance tracking with custom dashboards and actionable insights.</p>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <Check className="text-blue-600 dark:text-electric mt-1 flex-shrink-0" />
                  <div>
                    <h4 className="font-semibold text-gray-800 dark:text-gray-200">Conversion Optimization</h4>
                    <p className="text-sm text-gray-600 dark:text-gray-300">Landing page improvements and funnel enhancements to maximize ROI from paid traffic.</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        
        <h3 className="text-xl font-semibold mb-8 text-center bg-clip-text text-transparent bg-gradient-to-r from-royal to-blue-600 dark:from-electric dark:to-royal">Campaign Examples & Analytics</h3>
        <div className="mb-12">
          <PPCCarousel />
        </div>
        
        <div className="mb-12 bg-blue-50 dark:bg-blue-900/30 rounded-xl p-8 border border-blue-100 dark:border-blue-800">
          <h3 className="text-xl font-semibold mb-6 text-center bg-clip-text text-transparent bg-gradient-to-r from-royal to-blue-600 dark:from-electric dark:to-royal">Campaign Results</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="flex items-start space-x-3">
              <Check className="text-blue-600 dark:text-electric mt-1 flex-shrink-0" />
              <span className="text-gray-700 dark:text-gray-300">Increased conversion rates by 32% for local service business</span>
            </div>
            <div className="flex items-start space-x-3">
              <Check className="text-blue-600 dark:text-electric mt-1 flex-shrink-0" />
              <span className="text-gray-700 dark:text-gray-300">Reduced cost-per-lead by 47% through strategic audience targeting</span>
            </div>
            <div className="flex items-start space-x-3">
              <Check className="text-blue-600 dark:text-electric mt-1 flex-shrink-0" />
              <span className="text-gray-700 dark:text-gray-300">Built comprehensive analytics dashboards for real-time campaign monitoring</span>
            </div>
            <div className="flex items-start space-x-3">
              <Check className="text-blue-600 dark:text-electric mt-1 flex-shrink-0" />
              <span className="text-gray-700 dark:text-gray-300">Achieved 280% ROAS for e-commerce client through optimized product campaigns</span>
            </div>
          </div>
        </div>
        
        <div className="flex justify-center gap-4">
          <Button 
            onClick={() => {
              scrollToServiceSection('ppc-analytics');
            }}
            className="bg-blue-600 hover:bg-blue-700 text-white dark:bg-electric dark:hover:bg-blue-500 transition-colors"
          >
            Learn More <ArrowRight className="ml-1 h-4 w-4" />
          </Button>
          
          <Button 
            variant="outline" 
            onClick={() => {
              scrollToServiceSection('booking');
            }}
            className="border border-blue-200 dark:border-blue-800 text-blue-600 dark:text-electric hover:bg-blue-50 dark:hover:bg-blue-900/50"
          >
            Book Consultation <Calendar className="ml-1 h-4 w-4" />
          </Button>
        </div>
        
        <div className="mt-8 text-center">
          <Button 
            variant="outline" 
            className="border border-blue-200 dark:border-blue-800 text-blue-600 dark:text-electric hover:bg-blue-50 dark:hover:bg-blue-900/50"
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
