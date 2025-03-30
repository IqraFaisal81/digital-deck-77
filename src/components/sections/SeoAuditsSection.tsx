
import { Check } from "lucide-react";
import { Button } from "@/components/ui/button";
import SEOAuditCarousel from "@/components/SEOAuditCarousel";

interface SeoAuditsSectionProps {
  isSectionVisible: (sectionId: string) => boolean;
  setVisibleSection: (sectionId: string | null) => void;
  seoAuditsRef: React.RefObject<HTMLElement>;
}

const SeoAuditsSection = ({ isSectionVisible, setVisibleSection, seoAuditsRef }: SeoAuditsSectionProps) => {
  return (
    <section id="seo-audits" ref={seoAuditsRef} className={`section-padding transition-all duration-300 ${isSectionVisible('seo-audits') ? 'opacity-100' : 'hidden opacity-0 h-0 overflow-hidden'}`}>
      <div className="container mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold mb-6 text-center">SEO Audits</h2>
        <div className="max-w-3xl mx-auto mb-12">
          <p className="text-white/80 text-center">
            If your site isn&apos;t ranking, it&apos;s not working. Period. I offer deep-dive SEO audits that uncover exactly what&apos;s
            holding your website back—and build a game plan to fix it, fast.
          </p>
        </div>

        <div className="mb-12">
          <SEOAuditCarousel />
        </div>

        <div className="bg-black/20 backdrop-blur-sm rounded-xl p-6 border border-white/10 mb-12">
          <h3 className="text-xl font-semibold mb-6 text-electric">What&apos;s Included in Every SEO Audit:</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="p-4 bg-black/30 rounded-lg">
              <h4 className="font-semibold mb-2">Technical Health Check</h4>
              <p className="text-sm text-white/70">Crawl errors, indexing issues, site speed, mobile-friendliness, and more—fixed and optimized.</p>
            </div>
            <div className="p-4 bg-black/30 rounded-lg">
              <h4 className="font-semibold mb-2">On-Page SEO Review</h4>
              <p className="text-sm text-white/70">Meta tags, headers, internal linking, image optimization, keyword placement, and structure improvements.</p>
            </div>
            <div className="p-4 bg-black/30 rounded-lg">
              <h4 className="font-semibold mb-2">Content Gap Analysis</h4>
              <p className="text-sm text-white/70">Identify missing opportunities, weak pages, and underperforming content—then optimize for results.</p>
            </div>
            <div className="p-4 bg-black/30 rounded-lg">
              <h4 className="font-semibold mb-2">Keyword Performance</h4>
              <p className="text-sm text-white/70">Deep keyword audit with ranking insights, competition comparison, and growth strategy.</p>
            </div>
            <div className="p-4 bg-black/30 rounded-lg">
              <h4 className="font-semibold mb-2">Backlink & Domain Authority Review</h4>
              <p className="text-sm text-white/70">Track current link profile, identify toxic links, and outline authority-building steps.</p>
            </div>
            <div className="p-4 bg-black/30 rounded-lg">
              <h4 className="font-semibold mb-2">Customized SEO Action Plan</h4>
              <p className="text-sm text-white/70">Prioritized checklist with high-impact recommendations to get your rankings moving.</p>
            </div>
          </div>
        </div>
        
        <div className="mt-12 bg-electric/10 rounded-xl p-6 border border-electric/20">
          <h3 className="text-xl font-semibold mb-4 text-center text-electric">Results I&apos;ve Achieved</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="flex items-start space-x-2">
              <Check className="text-electric mt-1 flex-shrink-0" />
              <span className="text-white/80">Cojali USA: 2.42K clicks, 67K impressions, and a 3.6% CTR within 3 months</span>
            </div>
            <div className="flex items-start space-x-2">
              <Check className="text-electric mt-1 flex-shrink-0" />
              <span className="text-white/80">Keyword position improvement from avg. 45+ to top 20</span>
            </div>
            <div className="flex items-start space-x-2">
              <Check className="text-electric mt-1 flex-shrink-0" />
              <span className="text-white/80">Grey Matters & Call All Pro: Boosted health scores to 100</span>
            </div>
            <div className="flex items-start space-x-2">
              <Check className="text-electric mt-1 flex-shrink-0" />
              <span className="text-white/80">Strengthened internal linking and improved site structure</span>
            </div>
          </div>
        </div>
        
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

export default SeoAuditsSection;
