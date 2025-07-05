import { Check } from "lucide-react";
import { Button } from "@/components/ui/button";
import FunnelCarousel from "@/components/FunnelCarousel";
import { Separator } from "@/components/ui/separator";

interface FunnelsSectionProps {
  isSectionVisible: (sectionId: string) => boolean;
  setVisibleSection: (sectionId: string) => boolean;
  setVisibleSection: (sectionId: string | null) => void;
  funnelsRef: React.RefObject<HTMLElement>;
}

const FunnelsSection = ({ isSectionVisible, setVisibleSection, funnelsRef }: FunnelsSectionProps) => {
  const isVisible = isSectionVisible('funnels');
  
  return (
    <section 
      id="funnels" 
      ref={funnelsRef} 
      className={`section-padding py-16 sm:py-20 bg-gradient-to-br from-gray-850 via-gray-900 to-gray-850 dark:from-gray-850 dark:via-gray-900 dark:to-gray-850 transition-opacity duration-500 ${isVisible ? 'opacity-100' : 'opacity-0'}`}
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
        <div className="absolute top-20 left-20 w-96 h-96 bg-blue-500/5 rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 right-20 w-96 h-96 bg-purple-500/5 rounded-full blur-3xl"></div>
      </div>

      <div className="container max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-10">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-center bg-clip-text text-transparent bg-gradient-to-r from-royal to-blue-600 dark:from-electric dark:to-royal">
            Funnel Development
          </h2>
          <p className="text-gray-700 dark:text-gray-300 text-center max-w-3xl mx-auto">
            Let&apos;s turn clicks into conversions—with zero guesswork. I design and build high-converting funnels that guide your prospects from &quot;just looking&quot; to ready to buy, using psychology-backed flows, clean design, and automation that does the heavy lifting.
          </p>
        </div>
        
        {/* Features Grid */}
        <div className="bg-white/90 dark:bg-gray-800/90 shadow-xl rounded-xl p-6 md:p-8 border border-gray-200 dark:border-gray-700 mb-12 backdrop-blur-sm hover:shadow-2xl transition-all duration-300">
          <h3 className="text-xl font-semibold mb-7 bg-clip-text text-transparent bg-gradient-to-r from-royal to-blue-600 dark:from-electric dark:to-royal">What I Build:</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="p-5 bg-gray-50 dark:bg-gray-700/70 rounded-lg border border-gray-100 dark:border-gray-600 hover:shadow-md transition-all duration-300 transform hover:scale-[1.02] group">
              <h4 className="font-semibold mb-2 text-gray-800 dark:text-gray-200 group-hover:text-royal dark:group-hover:text-electric transition-colors">Lead Generation Funnels</h4>
              <p className="text-sm text-gray-600 dark:text-gray-300">Capture leads with strong CTAs, lead magnets, tagging, and automated follow-ups.</p>
            </div>
            <div className="p-5 bg-gray-50 dark:bg-gray-700/70 rounded-lg border border-gray-100 dark:border-gray-600 hover:shadow-md transition-all duration-300 transform hover:scale-[1.02] group">
              <h4 className="font-semibold mb-2 text-gray-800 dark:text-gray-200 group-hover:text-royal dark:group-hover:text-electric transition-colors">Sales & Checkout Funnels</h4>
              <p className="text-sm text-gray-600 dark:text-gray-300">Product-focused flows with upsells, downsells, testimonials, and streamlined checkout experiences.</p>
            </div>
            <div className="p-5 bg-gray-50 dark:bg-gray-700/70 rounded-lg border border-gray-100 dark:border-gray-600 hover:shadow-md transition-all duration-300 transform hover:scale-[1.02] group">
              <h4 className="font-semibold mb-2 text-gray-800 dark:text-gray-200 group-hover:text-royal dark:group-hover:text-electric transition-colors">Webinar & Booking Funnels</h4>
              <p className="text-sm text-gray-600 dark:text-gray-300">Get attendees on autopilot with landing pages, reminder emails, and calendar integrations.</p>
            </div>
            <div className="p-5 bg-gray-50 dark:bg-gray-700/70 rounded-lg border border-gray-100 dark:border-gray-600 hover:shadow-md transition-all duration-300 transform hover:scale-[1.02] group">
              <h4 className="font-semibold mb-2 text-gray-800 dark:text-gray-200 group-hover:text-royal dark:group-hover:text-electric transition-colors">Onboarding Funnels</h4>
              <p className="text-sm text-gray-600 dark:text-gray-300">Welcome new clients with automated forms, email sequences, and team notifications.</p>
            </div>
            <div className="p-5 bg-gray-50 dark:bg-gray-700/70 rounded-lg border border-gray-100 dark:border-gray-600 hover:shadow-md transition-all duration-300 transform hover:scale-[1.02] group">
              <h4 className="font-semibold mb-2 text-gray-800 dark:text-gray-200 group-hover:text-royal dark:group-hover:text-electric transition-colors">Promo & Launch Funnels</h4>
              <p className="text-sm text-gray-600 dark:text-gray-300">From Black Friday offers to new service launches—I create urgency-driven funnels that deliver results.</p>
            </div>
          </div>
        </div>
        
        {/* Carousel Section */}
        <div className="mb-12">
          <h3 className="text-xl font-semibold mb-6 text-center bg-clip-text text-transparent bg-gradient-to-r from-royal to-blue-600 dark:from-electric dark:to-royal">Featured Funnels</h3>
          <Separator className="mb-8 bg-gray-200 dark:bg-gray-700" />
          <FunnelCarousel />
        </div>
        
        {/* Results Section */}
        <div className="bg-blue-50/80 dark:bg-blue-900/20 rounded-xl p-6 md:p-8 border border-blue-100 dark:border-blue-800 backdrop-filter backdrop-blur-sm transform hover:shadow-xl transition-all duration-300">
          <h3 className="text-xl font-semibold mb-6 text-center bg-clip-text text-transparent bg-gradient-to-r from-royal to-blue-600 dark:from-electric dark:to-royal">Funnels I&apos;ve Delivered</h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div className="flex items-start space-x-3 bg-white/70 dark:bg-gray-800/50 p-4 rounded-lg hover:shadow-md transition-all duration-300 transform hover:scale-[1.02]">
              <Check className="text-blue-600 dark:text-electric mt-1 flex-shrink-0" />
              <span className="text-gray-700 dark:text-gray-300">All Pro – Service Funnel for refrigerant readiness checkups</span>
            </div>
            <div className="flex items-start space-x-3 bg-white/70 dark:bg-gray-800/50 p-4 rounded-lg hover:shadow-md transition-all duration-300 transform hover:scale-[1.02]">
              <Check className="text-blue-600 dark:text-electric mt-1 flex-shrink-0" />
              <span className="text-gray-700 dark:text-gray-300">Triad Diagnostic Solutions – E-Commerce Funnel for Autel products</span>
            </div>
            <div className="flex items-start space-x-3 bg-white/70 dark:bg-gray-800/50 p-4 rounded-lg hover:shadow-md transition-all duration-300 transform hover:scale-[1.02]">
              <Check className="text-blue-600 dark:text-electric mt-1 flex-shrink-0" />
              <span className="text-gray-700 dark:text-gray-300">Charley Grey – Client Onboarding Funnel with auto-tagging</span>
            </div>
            <div className="flex items-start space-x-3 bg-white/70 dark:bg-gray-800/50 p-4 rounded-lg hover:shadow-md transition-all duration-300 transform hover:scale-[1.02]">
              <Check className="text-blue-600 dark:text-electric mt-1 flex-shrink-0" />
              <span className="text-gray-700 dark:text-gray-300">Mike Greene Coaching – Mentoring booking funnel</span>
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

export default FunnelsSection;
