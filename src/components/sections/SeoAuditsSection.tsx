
import { Check } from "lucide-react";
import { Button } from "@/components/ui/button";
import SEOAuditCarousel from "@/components/SEOAuditCarousel";
import { Separator } from "@/components/ui/separator";

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
      className={`section-padding py-16 sm:py-20 bg-gradient-to-br from-blue-50 to-white dark:from-gray-900 dark:to-gray-800 transition-opacity duration-500 ${isVisible ? 'opacity-100' : 'opacity-0'}`}
      style={{ 
        display: isVisible ? 'block' : 'none',
        height: isVisible ? 'auto' : '0',
        overflow: isVisible ? 'visible' : 'hidden',
        position: 'relative',
        zIndex: isVisible ? '10' : '-1'
      }}
    >
      <div className="container max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-10">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-center bg-clip-text text-transparent bg-gradient-to-r from-royal to-blue-600 dark:from-electric dark:to-royal">
            SEO Audits
          </h2>
          <p className="text-gray-700 dark:text-gray-300 text-center max-w-3xl mx-auto">
            If your site isn&apos;t ranking, it&apos;s not working. Period. I offer deep-dive SEO audits that uncover exactly what&apos;s
            holding your website back—and build a game plan to fix it, fast.
          </p>
        </div>

        {/* Carousel Section */}
        <div className="mb-12">
          <h3 className="text-xl font-semibold mb-6 text-center bg-clip-text text-transparent bg-gradient-to-r from-royal to-blue-600 dark:from-electric dark:to-royal">SEO Dashboard Examples</h3>
          <Separator className="mb-8 bg-gray-200 dark:bg-gray-700" />
          <SEOAuditCarousel />
        </div>

        {/* Features Grid */}
        <div className="bg-white/90 dark:bg-gray-800/90 shadow-xl rounded-xl p-6 md:p-8 border border-gray-200 dark:border-gray-700 mb-12 backdrop-blur-sm hover:shadow-2xl transition-all duration-300">
          <h3 className="text-xl font-semibold mb-7 bg-clip-text text-transparent bg-gradient-to-r from-royal to-blue-600 dark:from-electric dark:to-royal">What&apos;s Included in Every SEO Audit:</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="p-5 bg-gray-50 dark:bg-gray-700/70 rounded-lg border border-gray-100 dark:border-gray-600 hover:shadow-md transition-all duration-300 transform hover:scale-[1.02] group">
              <h4 className="font-semibold mb-2 text-gray-800 dark:text-gray-200 group-hover:text-royal dark:group-hover:text-electric transition-colors">Technical Health Check</h4>
              <p className="text-sm text-gray-600 dark:text-gray-300">Crawl errors, indexing issues, site speed, mobile-friendliness, and more—fixed and optimized.</p>
            </div>
            <div className="p-5 bg-gray-50 dark:bg-gray-700/70 rounded-lg border border-gray-100 dark:border-gray-600 hover:shadow-md transition-all duration-300 transform hover:scale-[1.02] group">
              <h4 className="font-semibold mb-2 text-gray-800 dark:text-gray-200 group-hover:text-royal dark:group-hover:text-electric transition-colors">On-Page SEO Review</h4>
              <p className="text-sm text-gray-600 dark:text-gray-300">Meta tags, headers, internal linking, image optimization, keyword placement, and structure improvements.</p>
            </div>
            <div className="p-5 bg-gray-50 dark:bg-gray-700/70 rounded-lg border border-gray-100 dark:border-gray-600 hover:shadow-md transition-all duration-300 transform hover:scale-[1.02] group">
              <h4 className="font-semibold mb-2 text-gray-800 dark:text-gray-200 group-hover:text-royal dark:group-hover:text-electric transition-colors">Content Gap Analysis</h4>
              <p className="text-sm text-gray-600 dark:text-gray-300">Identify missing opportunities, weak pages, and underperforming content—then optimize for results.</p>
            </div>
            <div className="p-5 bg-gray-50 dark:bg-gray-700/70 rounded-lg border border-gray-100 dark:border-gray-600 hover:shadow-md transition-all duration-300 transform hover:scale-[1.02] group">
              <h4 className="font-semibold mb-2 text-gray-800 dark:text-gray-200 group-hover:text-royal dark:group-hover:text-electric transition-colors">Keyword Performance</h4>
              <p className="text-sm text-gray-600 dark:text-gray-300">Deep keyword audit with ranking insights, competition comparison, and growth strategy.</p>
            </div>
            <div className="p-5 bg-gray-50 dark:bg-gray-700/70 rounded-lg border border-gray-100 dark:border-gray-600 hover:shadow-md transition-all duration-300 transform hover:scale-[1.02] group">
              <h4 className="font-semibold mb-2 text-gray-800 dark:text-gray-200 group-hover:text-royal dark:group-hover:text-electric transition-colors">Backlink & Domain Authority Review</h4>
              <p className="text-sm text-gray-600 dark:text-gray-300">Track current link profile, identify toxic links, and outline authority-building steps.</p>
            </div>
            <div className="p-5 bg-gray-50 dark:bg-gray-700/70 rounded-lg border border-gray-100 dark:border-gray-600 hover:shadow-md transition-all duration-300 transform hover:scale-[1.02] group">
              <h4 className="font-semibold mb-2 text-gray-800 dark:text-gray-200 group-hover:text-royal dark:group-hover:text-electric transition-colors">Customized SEO Action Plan</h4>
              <p className="text-sm text-gray-600 dark:text-gray-300">Prioritized checklist with high-impact recommendations to get your rankings moving.</p>
            </div>
          </div>
        </div>
        
        {/* Results Section */}
        <div className="bg-blue-50/80 dark:bg-blue-900/20 rounded-xl p-6 md:p-8 border border-blue-100 dark:border-blue-800 backdrop-filter backdrop-blur-sm transform hover:shadow-xl transition-all duration-300">
          <h3 className="text-xl font-semibold mb-6 text-center bg-clip-text text-transparent bg-gradient-to-r from-royal to-blue-600 dark:from-electric dark:to-royal">Results I&apos;ve Achieved</h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div className="flex items-start space-x-3 bg-white/70 dark:bg-gray-800/50 p-4 rounded-lg hover:shadow-md transition-all duration-300 transform hover:scale-[1.02]">
              <Check className="text-blue-600 dark:text-electric mt-1 flex-shrink-0" />
              <span className="text-gray-700 dark:text-gray-300">Cojali USA: 2.42K clicks, 67K impressions, and a 3.6% CTR within 3 months</span>
            </div>
            <div className="flex items-start space-x-3 bg-white/70 dark:bg-gray-800/50 p-4 rounded-lg hover:shadow-md transition-all duration-300 transform hover:scale-[1.02]">
              <Check className="text-blue-600 dark:text-electric mt-1 flex-shrink-0" />
              <span className="text-gray-700 dark:text-gray-300">Keyword position improvement from avg. 45+ to top 20</span>
            </div>
            <div className="flex items-start space-x-3 bg-white/70 dark:bg-gray-800/50 p-4 rounded-lg hover:shadow-md transition-all duration-300 transform hover:scale-[1.02]">
              <Check className="text-blue-600 dark:text-electric mt-1 flex-shrink-0" />
              <span className="text-gray-700 dark:text-gray-300">Grey Matters & Call All Pro: Boosted health scores to 100</span>
            </div>
            <div className="flex items-start space-x-3 bg-white/70 dark:bg-gray-800/50 p-4 rounded-lg hover:shadow-md transition-all duration-300 transform hover:scale-[1.02]">
              <Check className="text-blue-600 dark:text-electric mt-1 flex-shrink-0" />
              <span className="text-gray-700 dark:text-gray-300">Strengthened internal linking and improved site structure</span>
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

export default SeoAuditsSection;
