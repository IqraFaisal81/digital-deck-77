
import { Check } from "lucide-react";
import { Button } from "@/components/ui/button";
import FunnelCarousel from "@/components/FunnelCarousel";

interface FunnelsSectionProps {
  isSectionVisible: (sectionId: string) => boolean;
  setVisibleSection: (sectionId: string | null) => void;
  funnelsRef: React.RefObject<HTMLElement>;
}

const FunnelsSection = ({ isSectionVisible, setVisibleSection, funnelsRef }: FunnelsSectionProps) => {
  const isVisible = isSectionVisible('funnels');
  
  return (
    <section 
      id="funnels" 
      ref={funnelsRef} 
      className={`section-padding bg-gradient-to-br from-blue-50 to-white dark:from-gray-900 dark:to-gray-800 transition-all duration-500 ${isVisible ? 'opacity-100 scale-100' : 'opacity-0 scale-95'}`}
      style={{ 
        display: isVisible ? 'block' : 'none',
        height: isVisible ? 'auto' : '0',
        overflow: isVisible ? 'visible' : 'hidden',
        position: 'relative',
        zIndex: isVisible ? '10' : '-1'
      }}
    >
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold mb-6 text-center bg-clip-text text-transparent bg-gradient-to-r from-royal to-blue-600 dark:from-electric dark:to-royal">Funnel Development</h2>
        <div className="max-w-3xl mx-auto mb-8">
          <p className="text-gray-700 dark:text-gray-300 text-center">
            Let&apos;s turn clicks into conversions—with zero guesswork. I design and build high-converting funnels that guide your prospects from &quot;just looking&quot; to ready to buy, using psychology-backed flows, clean design, and automation that does the heavy lifting.
          </p>
        </div>
        
        <div className="bg-white dark:bg-gray-800 shadow-xl rounded-xl p-6 border border-gray-200 dark:border-gray-700 mb-8 transform transition-all duration-300 hover:shadow-2xl hover:border-blue-200 dark:hover:border-blue-800/40">
          <h3 className="text-xl font-semibold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-royal to-blue-600 dark:from-electric dark:to-royal">What I Build:</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="p-4 bg-gradient-to-br from-gray-50 to-blue-50/50 dark:from-gray-800 dark:to-blue-900/20 rounded-lg border border-gray-100 dark:border-gray-700/60 shadow-sm hover:shadow-md transition-all duration-300 hover:-translate-y-1">
              <h4 className="font-semibold mb-2 text-gray-800 dark:text-gray-200">Lead Generation Funnels</h4>
              <p className="text-sm text-gray-600 dark:text-gray-300">Capture leads with strong CTAs, lead magnets, tagging, and automated follow-ups.</p>
            </div>
            <div className="p-4 bg-gradient-to-br from-gray-50 to-blue-50/50 dark:from-gray-800 dark:to-blue-900/20 rounded-lg border border-gray-100 dark:border-gray-700/60 shadow-sm hover:shadow-md transition-all duration-300 hover:-translate-y-1">
              <h4 className="font-semibold mb-2 text-gray-800 dark:text-gray-200">Sales & Checkout Funnels</h4>
              <p className="text-sm text-gray-600 dark:text-gray-300">Product-focused flows with upsells, downsells, testimonials, and streamlined checkout experiences.</p>
            </div>
            <div className="p-4 bg-gradient-to-br from-gray-50 to-blue-50/50 dark:from-gray-800 dark:to-blue-900/20 rounded-lg border border-gray-100 dark:border-gray-700/60 shadow-sm hover:shadow-md transition-all duration-300 hover:-translate-y-1">
              <h4 className="font-semibold mb-2 text-gray-800 dark:text-gray-200">Webinar & Booking Funnels</h4>
              <p className="text-sm text-gray-600 dark:text-gray-300">Get attendees on autopilot with landing pages, reminder emails, and calendar integrations.</p>
            </div>
            <div className="p-4 bg-gradient-to-br from-gray-50 to-blue-50/50 dark:from-gray-800 dark:to-blue-900/20 rounded-lg border border-gray-100 dark:border-gray-700/60 shadow-sm hover:shadow-md transition-all duration-300 hover:-translate-y-1">
              <h4 className="font-semibold mb-2 text-gray-800 dark:text-gray-200">Onboarding Funnels</h4>
              <p className="text-sm text-gray-600 dark:text-gray-300">Welcome new clients with automated forms, email sequences, and team notifications.</p>
            </div>
            <div className="p-4 bg-gradient-to-br from-gray-50 to-blue-50/50 dark:from-gray-800 dark:to-blue-900/20 rounded-lg border border-gray-100 dark:border-gray-700/60 shadow-sm hover:shadow-md transition-all duration-300 hover:-translate-y-1">
              <h4 className="font-semibold mb-2 text-gray-800 dark:text-gray-200">Promo & Launch Funnels</h4>
              <p className="text-sm text-gray-600 dark:text-gray-300">From Black Friday offers to new service launches—I create urgency-driven funnels that deliver results.</p>
            </div>
          </div>
        </div>
        
        <h3 className="text-xl font-semibold mb-6 text-center bg-clip-text text-transparent bg-gradient-to-r from-royal to-blue-600 dark:from-electric dark:to-royal">Featured Funnels</h3>
        <FunnelCarousel />
        
        <div className="mt-8 bg-gradient-to-br from-blue-50 to-indigo-50/50 dark:from-blue-900/30 dark:to-indigo-900/20 rounded-xl p-6 border border-blue-100 dark:border-blue-800/40 shadow-lg transform transition-all duration-300 hover:shadow-xl hover:border-blue-200 dark:hover:border-blue-700/60">
          <h3 className="text-xl font-semibold mb-4 text-center bg-clip-text text-transparent bg-gradient-to-r from-royal to-blue-600 dark:from-electric dark:to-royal">Funnels I&apos;ve Delivered</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="flex items-start space-x-2 bg-white/60 dark:bg-gray-800/60 p-3 rounded-lg shadow-sm border border-blue-50 dark:border-blue-900/20 transition-all duration-300 hover:shadow-md hover:-translate-y-0.5">
              <Check className="text-blue-600 dark:text-electric mt-1 flex-shrink-0" />
              <span className="text-gray-700 dark:text-gray-300">All Pro – Service Funnel for refrigerant readiness checkups</span>
            </div>
            <div className="flex items-start space-x-2 bg-white/60 dark:bg-gray-800/60 p-3 rounded-lg shadow-sm border border-blue-50 dark:border-blue-900/20 transition-all duration-300 hover:shadow-md hover:-translate-y-0.5">
              <Check className="text-blue-600 dark:text-electric mt-1 flex-shrink-0" />
              <span className="text-gray-700 dark:text-gray-300">Triad Diagnostic Solutions – E-Commerce Funnel for Autel products</span>
            </div>
            <div className="flex items-start space-x-2 bg-white/60 dark:bg-gray-800/60 p-3 rounded-lg shadow-sm border border-blue-50 dark:border-blue-900/20 transition-all duration-300 hover:shadow-md hover:-translate-y-0.5">
              <Check className="text-blue-600 dark:text-electric mt-1 flex-shrink-0" />
              <span className="text-gray-700 dark:text-gray-300">Charley Grey – Client Onboarding Funnel with auto-tagging</span>
            </div>
            <div className="flex items-start space-x-2 bg-white/60 dark:bg-gray-800/60 p-3 rounded-lg shadow-sm border border-blue-50 dark:border-blue-900/20 transition-all duration-300 hover:shadow-md hover:-translate-y-0.5">
              <Check className="text-blue-600 dark:text-electric mt-1 flex-shrink-0" />
              <span className="text-gray-700 dark:text-gray-300">Mike Greene Coaching – Mentoring booking funnel</span>
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

export default FunnelsSection;
