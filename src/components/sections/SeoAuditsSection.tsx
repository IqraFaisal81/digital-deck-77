
import { Button } from "@/components/ui/button";
import SEOAuditCarousel from "@/components/SEOAuditCarousel";
import { Check } from "lucide-react";

interface SeoAuditsSectionProps {
  isSectionVisible: (sectionId: string) => boolean;
  setVisibleSection: (sectionId: string | null) => void;
  seoAuditsRef: React.RefObject<HTMLElement>;
}

const SeoAuditsSection = ({ isSectionVisible, setVisibleSection, seoAuditsRef }: SeoAuditsSectionProps) => {
  const isVisible = isSectionVisible('seo-audits');
  
  return (
    <section 
      id="seo-audits" 
      ref={seoAuditsRef} 
      className={`section-padding bg-gradient-to-br from-blue-50 to-white dark:from-gray-900 dark:to-gray-800 transition-all duration-500 ${isVisible ? 'opacity-100 scale-100' : 'opacity-0 scale-95'}`}
      style={{ 
        display: isVisible ? 'block' : 'none',
        height: isVisible ? 'auto' : '0',
        overflow: isVisible ? 'visible' : 'hidden',
        position: 'relative',
        zIndex: isVisible ? '10' : '-1'
      }}
    >
      {/* Background decorations */}
      <div className="absolute top-20 right-10 w-64 h-64 bg-blue-200/30 dark:bg-blue-800/20 rounded-full blur-[60px] -z-1"></div>
      <div className="absolute bottom-20 left-10 w-64 h-64 bg-indigo-200/30 dark:bg-indigo-800/20 rounded-full blur-[60px] -z-1"></div>
      
      <div className="container mx-auto px-4 relative z-10">
        <h2 className="text-3xl md:text-4xl font-bold mb-6 text-center bg-clip-text text-transparent bg-gradient-to-r from-royal to-blue-600 dark:from-electric dark:to-royal">SEO & Analytics</h2>
        <div className="max-w-3xl mx-auto mb-8">
          <p className="text-gray-700 dark:text-gray-300 text-center">
            Improve your website's visibility and track performance with comprehensive SEO audits and analytics dashboards. I identify optimization opportunities and implement data-driven strategies to increase organic traffic and conversions.
          </p>
        </div>
        
        <div className="bg-white/90 dark:bg-gray-800/90 backdrop-blur-sm shadow-xl rounded-xl p-6 border border-gray-200 dark:border-gray-700 mb-8 transform transition-all duration-300 hover:shadow-2xl hover:border-blue-200 dark:hover:border-blue-800/40">
          <h3 className="text-xl font-semibold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-royal to-blue-600 dark:from-electric dark:to-royal">SEO & Analytics Services</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <div className="p-4 bg-gradient-to-br from-gray-50 to-blue-50/50 dark:from-gray-800 dark:to-blue-900/20 rounded-lg border border-gray-100 dark:border-gray-700/60 shadow-sm hover:shadow-md transition-all duration-300 hover:-translate-y-1">
              <h4 className="font-semibold mb-2 text-gray-800 dark:text-gray-200">Technical SEO Audits</h4>
              <p className="text-sm text-gray-600 dark:text-gray-300">Comprehensive site analysis to identify and fix technical issues affecting your search visibility.</p>
            </div>
            <div className="p-4 bg-gradient-to-br from-gray-50 to-blue-50/50 dark:from-gray-800 dark:to-blue-900/20 rounded-lg border border-gray-100 dark:border-gray-700/60 shadow-sm hover:shadow-md transition-all duration-300 hover:-translate-y-1">
              <h4 className="font-semibold mb-2 text-gray-800 dark:text-gray-200">Keyword Research</h4>
              <p className="text-sm text-gray-600 dark:text-gray-300">Strategic keyword discovery to target high-intent search terms relevant to your business.</p>
            </div>
            <div className="p-4 bg-gradient-to-br from-gray-50 to-blue-50/50 dark:from-gray-800 dark:to-blue-900/20 rounded-lg border border-gray-100 dark:border-gray-700/60 shadow-sm hover:shadow-md transition-all duration-300 hover:-translate-y-1">
              <h4 className="font-semibold mb-2 text-gray-800 dark:text-gray-200">Content Optimization</h4>
              <p className="text-sm text-gray-600 dark:text-gray-300">On-page optimization to ensure your content ranks for relevant search queries.</p>
            </div>
            <div className="p-4 bg-gradient-to-br from-gray-50 to-blue-50/50 dark:from-gray-800 dark:to-blue-900/20 rounded-lg border border-gray-100 dark:border-gray-700/60 shadow-sm hover:shadow-md transition-all duration-300 hover:-translate-y-1">
              <h4 className="font-semibold mb-2 text-gray-800 dark:text-gray-200">Analytics Implementation</h4>
              <p className="text-sm text-gray-600 dark:text-gray-300">Set up Google Analytics 4, Google Tag Manager, and other tracking tools for comprehensive data collection.</p>
            </div>
            <div className="p-4 bg-gradient-to-br from-gray-50 to-blue-50/50 dark:from-gray-800 dark:to-blue-900/20 rounded-lg border border-gray-100 dark:border-gray-700/60 shadow-sm hover:shadow-md transition-all duration-300 hover:-translate-y-1">
              <h4 className="font-semibold mb-2 text-gray-800 dark:text-gray-200">Performance Dashboards</h4>
              <p className="text-sm text-gray-600 dark:text-gray-300">Custom Looker Studio dashboards to visualize key metrics and track campaign performance.</p>
            </div>
            <div className="p-4 bg-gradient-to-br from-gray-50 to-blue-50/50 dark:from-gray-800 dark:to-blue-900/20 rounded-lg border border-gray-100 dark:border-gray-700/60 shadow-sm hover:shadow-md transition-all duration-300 hover:-translate-y-1">
              <h4 className="font-semibold mb-2 text-gray-800 dark:text-gray-200">Local SEO</h4>
              <p className="text-sm text-gray-600 dark:text-gray-300">Optimize your local presence with Google Business Profile and local citation management.</p>
            </div>
          </div>
        </div>
        
        <h3 className="text-xl font-semibold mb-6 text-center bg-clip-text text-transparent bg-gradient-to-r from-royal to-blue-600 dark:from-electric dark:to-royal">SEO Audit Examples</h3>
        <SEOAuditCarousel />
        
        <div className="mt-8 bg-gradient-to-br from-blue-50 to-indigo-50/50 dark:from-blue-900/30 dark:to-indigo-900/20 rounded-xl p-6 border border-blue-100 dark:border-blue-800/40 shadow-lg transform transition-all duration-300 hover:shadow-xl hover:border-blue-200 dark:hover:border-blue-700/60">
          <h3 className="text-xl font-semibold mb-4 text-center bg-clip-text text-transparent bg-gradient-to-r from-royal to-blue-600 dark:from-electric dark:to-royal">Client Results</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="flex items-start space-x-2 bg-white/60 dark:bg-gray-800/60 p-3 rounded-lg shadow-sm border border-blue-50 dark:border-blue-900/20 transition-all duration-300 hover:shadow-md hover:-translate-y-0.5">
              <Check className="text-blue-600 dark:text-electric mt-1 flex-shrink-0" />
              <span className="text-gray-700 dark:text-gray-300">52% increase in organic traffic for a local service business</span>
            </div>
            <div className="flex items-start space-x-2 bg-white/60 dark:bg-gray-800/60 p-3 rounded-lg shadow-sm border border-blue-50 dark:border-blue-900/20 transition-all duration-300 hover:shadow-md hover:-translate-y-0.5">
              <Check className="text-blue-600 dark:text-electric mt-1 flex-shrink-0" />
              <span className="text-gray-700 dark:text-gray-300">35% improvement in conversion rates through landing page optimization</span>
            </div>
            <div className="flex items-start space-x-2 bg-white/60 dark:bg-gray-800/60 p-3 rounded-lg shadow-sm border border-blue-50 dark:border-blue-900/20 transition-all duration-300 hover:shadow-md hover:-translate-y-0.5">
              <Check className="text-blue-600 dark:text-electric mt-1 flex-shrink-0" />
              <span className="text-gray-700 dark:text-gray-300">First page Google rankings for 18 high-value keywords</span>
            </div>
            <div className="flex items-start space-x-2 bg-white/60 dark:bg-gray-800/60 p-3 rounded-lg shadow-sm border border-blue-50 dark:border-blue-900/20 transition-all duration-300 hover:shadow-md hover:-translate-y-0.5">
              <Check className="text-blue-600 dark:text-electric mt-1 flex-shrink-0" />
              <span className="text-gray-700 dark:text-gray-300">Custom analytics dashboards with real-time performance tracking</span>
            </div>
          </div>
        </div>
        
        <div className="mt-8 text-center">
          <Button 
            variant="outline" 
            className="border border-blue-200 dark:border-blue-800 text-blue-600 dark:text-electric hover:bg-blue-50 dark:hover:bg-blue-900/50 shadow-md hover:shadow-lg transition-all duration-300 hover:-translate-y-0.5"
            onClick={() => setVisibleSection(null)}
          >
            Close Section
          </Button>
        </div>
      </div>
    </section>
  );
};

export default SeoAuditsSection;
