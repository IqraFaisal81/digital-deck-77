
import { Button } from "@/components/ui/button";
import PPCCarousel from "@/components/PPCCarousel";
import { Check } from "lucide-react";

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
      className={`section-padding bg-gradient-to-br from-blue-50 to-white transition-opacity duration-500 ${isVisible ? 'opacity-100' : 'opacity-0'}`}
      style={{ 
        display: isVisible ? 'block' : 'none',
        height: isVisible ? 'auto' : '0',
        overflow: isVisible ? 'visible' : 'hidden',
        position: 'relative',
        zIndex: isVisible ? '10' : '-1'
      }}
    >
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold mb-6 text-center text-gray-900">PPC & Analytics</h2>
        <div className="max-w-3xl mx-auto mb-8">
          <p className="text-gray-700 text-center">
            Data-driven campaigns that generate real business results. I build, manage, and optimize paid advertising campaigns across multiple platforms, with comprehensive tracking and reporting.
          </p>
        </div>
        
        <div className="bg-white shadow-md rounded-xl p-6 border border-gray-200 mb-8">
          <h3 className="text-xl font-semibold mb-6 text-blue-600">PPC Services</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="p-4 bg-gray-50 rounded-lg border border-gray-100">
              <h4 className="font-semibold mb-2 text-gray-800">Google Ads Management</h4>
              <p className="text-sm text-gray-600">Optimized search, display, and video campaigns with strategic keyword targeting and ad creation.</p>
            </div>
            <div className="p-4 bg-gray-50 rounded-lg border border-gray-100">
              <h4 className="font-semibold mb-2 text-gray-800">Meta Ads Optimization</h4>
              <p className="text-sm text-gray-600">Facebook and Instagram ad campaigns with advanced audience targeting and creative testing.</p>
            </div>
            <div className="p-4 bg-gray-50 rounded-lg border border-gray-100">
              <h4 className="font-semibold mb-2 text-gray-800">Analytics & Reporting</h4>
              <p className="text-sm text-gray-600">Comprehensive performance tracking with custom dashboards and actionable insights.</p>
            </div>
            <div className="p-4 bg-gray-50 rounded-lg border border-gray-100">
              <h4 className="font-semibold mb-2 text-gray-800">Conversion Optimization</h4>
              <p className="text-sm text-gray-600">Landing page improvements and funnel enhancements to maximize ROI from paid traffic.</p>
            </div>
          </div>
        </div>
        
        <h3 className="text-xl font-semibold mb-6 text-center text-gray-900">Campaign Examples & Analytics</h3>
        <PPCCarousel />
        
        <div className="mt-8 bg-blue-50 rounded-xl p-6 border border-blue-100">
          <h3 className="text-xl font-semibold mb-4 text-center text-blue-600">Campaign Results</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="flex items-start space-x-2">
              <Check className="text-blue-600 mt-1 flex-shrink-0" />
              <span className="text-gray-700">Increased conversion rates by 32% for local service business</span>
            </div>
            <div className="flex items-start space-x-2">
              <Check className="text-blue-600 mt-1 flex-shrink-0" />
              <span className="text-gray-700">Reduced cost-per-lead by 47% through strategic audience targeting</span>
            </div>
            <div className="flex items-start space-x-2">
              <Check className="text-blue-600 mt-1 flex-shrink-0" />
              <span className="text-gray-700">Built comprehensive analytics dashboards for real-time campaign monitoring</span>
            </div>
            <div className="flex items-start space-x-2">
              <Check className="text-blue-600 mt-1 flex-shrink-0" />
              <span className="text-gray-700">Achieved 280% ROAS for e-commerce client through optimized product campaigns</span>
            </div>
          </div>
        </div>
        
        <div className="mt-6 text-center">
          <Button 
            variant="outline" 
            className="border border-blue-200 text-blue-600 hover:bg-blue-50"
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
