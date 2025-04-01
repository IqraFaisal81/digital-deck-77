
import { Check } from "lucide-react";
import { Button } from "@/components/ui/button";
import SEOAuditCarousel from "@/components/SEOAuditCarousel";

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
        <h2 className="text-3xl md:text-4xl font-bold mb-6 text-center bg-clip-text text-transparent bg-gradient-to-r from-black to-blue-600">SEO Audits</h2>
        <div className="max-w-3xl mx-auto mb-8">
          <p className="text-gray-700 text-center">
            If your site isn&apos;t ranking, it&apos;s not working. Period. I offer deep-dive SEO audits that uncover exactly what&apos;s
            holding your website back—and build a game plan to fix it, fast.
          </p>
        </div>

        <div className="mb-8">
          <SEOAuditCarousel />
        </div>

        <div className="bg-white shadow-md rounded-xl p-6 border border-gray-200 mb-8">
          <h3 className="text-xl font-semibold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-black to-blue-600">What&apos;s Included in Every SEO Audit:</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="p-4 bg-gray-50 rounded-lg border border-gray-100">
              <h4 className="font-semibold mb-2 text-gray-800">Technical Health Check</h4>
              <p className="text-sm text-gray-600">Crawl errors, indexing issues, site speed, mobile-friendliness, and more—fixed and optimized.</p>
            </div>
            <div className="p-4 bg-gray-50 rounded-lg border border-gray-100">
              <h4 className="font-semibold mb-2 text-gray-800">On-Page SEO Review</h4>
              <p className="text-sm text-gray-600">Meta tags, headers, internal linking, image optimization, keyword placement, and structure improvements.</p>
            </div>
            <div className="p-4 bg-gray-50 rounded-lg border border-gray-100">
              <h4 className="font-semibold mb-2 text-gray-800">Content Gap Analysis</h4>
              <p className="text-sm text-gray-600">Identify missing opportunities, weak pages, and underperforming content—then optimize for results.</p>
            </div>
            <div className="p-4 bg-gray-50 rounded-lg border border-gray-100">
              <h4 className="font-semibold mb-2 text-gray-800">Keyword Performance</h4>
              <p className="text-sm text-gray-600">Deep keyword audit with ranking insights, competition comparison, and growth strategy.</p>
            </div>
            <div className="p-4 bg-gray-50 rounded-lg border border-gray-100">
              <h4 className="font-semibold mb-2 text-gray-800">Backlink & Domain Authority Review</h4>
              <p className="text-sm text-gray-600">Track current link profile, identify toxic links, and outline authority-building steps.</p>
            </div>
            <div className="p-4 bg-gray-50 rounded-lg border border-gray-100">
              <h4 className="font-semibold mb-2 text-gray-800">Customized SEO Action Plan</h4>
              <p className="text-sm text-gray-600">Prioritized checklist with high-impact recommendations to get your rankings moving.</p>
            </div>
          </div>
        </div>
        
        <div className="mt-8 bg-blue-50 rounded-xl p-6 border border-blue-100">
          <h3 className="text-xl font-semibold mb-4 text-center bg-clip-text text-transparent bg-gradient-to-r from-black to-blue-600">Results I&apos;ve Achieved</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="flex items-start space-x-2">
              <Check className="text-blue-600 mt-1 flex-shrink-0" />
              <span className="text-gray-700">Cojali USA: 2.42K clicks, 67K impressions, and a 3.6% CTR within 3 months</span>
            </div>
            <div className="flex items-start space-x-2">
              <Check className="text-blue-600 mt-1 flex-shrink-0" />
              <span className="text-gray-700">Keyword position improvement from avg. 45+ to top 20</span>
            </div>
            <div className="flex items-start space-x-2">
              <Check className="text-blue-600 mt-1 flex-shrink-0" />
              <span className="text-gray-700">Grey Matters & Call All Pro: Boosted health scores to 100</span>
            </div>
            <div className="flex items-start space-x-2">
              <Check className="text-blue-600 mt-1 flex-shrink-0" />
              <span className="text-gray-700">Strengthened internal linking and improved site structure</span>
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

export default SeoAuditsSection;
