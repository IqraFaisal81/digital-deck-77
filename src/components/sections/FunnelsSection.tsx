
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
        <h2 className="text-3xl md:text-4xl font-bold mb-6 text-center text-gray-900">Funnel Development</h2>
        <div className="max-w-3xl mx-auto mb-8">
          <p className="text-gray-700 text-center">
            Let&apos;s turn clicks into conversions—with zero guesswork. I design and build high-converting funnels that guide your prospects from &quot;just looking&quot; to ready to buy, using psychology-backed flows, clean design, and automation that does the heavy lifting.
          </p>
        </div>
        
        <div className="bg-white shadow-md rounded-xl p-6 border border-gray-200 mb-8">
          <h3 className="text-xl font-semibold mb-6 text-blue-600">What I Build:</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="p-4 bg-gray-50 rounded-lg border border-gray-100">
              <h4 className="font-semibold mb-2 text-gray-800">Lead Generation Funnels</h4>
              <p className="text-sm text-gray-600">Capture leads with strong CTAs, lead magnets, tagging, and automated follow-ups.</p>
            </div>
            <div className="p-4 bg-gray-50 rounded-lg border border-gray-100">
              <h4 className="font-semibold mb-2 text-gray-800">Sales & Checkout Funnels</h4>
              <p className="text-sm text-gray-600">Product-focused flows with upsells, downsells, testimonials, and streamlined checkout experiences.</p>
            </div>
            <div className="p-4 bg-gray-50 rounded-lg border border-gray-100">
              <h4 className="font-semibold mb-2 text-gray-800">Webinar & Booking Funnels</h4>
              <p className="text-sm text-gray-600">Get attendees on autopilot with landing pages, reminder emails, and calendar integrations.</p>
            </div>
            <div className="p-4 bg-gray-50 rounded-lg border border-gray-100">
              <h4 className="font-semibold mb-2 text-gray-800">Onboarding Funnels</h4>
              <p className="text-sm text-gray-600">Welcome new clients with automated forms, email sequences, and team notifications.</p>
            </div>
            <div className="p-4 bg-gray-50 rounded-lg border border-gray-100">
              <h4 className="font-semibold mb-2 text-gray-800">Promo & Launch Funnels</h4>
              <p className="text-sm text-gray-600">From Black Friday offers to new service launches—I create urgency-driven funnels that deliver results.</p>
            </div>
          </div>
        </div>
        
        <h3 className="text-xl font-semibold mb-6 text-center text-gray-900">Featured Funnels</h3>
        <FunnelCarousel />
        
        <div className="mt-8 bg-blue-50 rounded-xl p-6 border border-blue-100">
          <h3 className="text-xl font-semibold mb-4 text-center text-blue-600">Funnels I&apos;ve Delivered</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="flex items-start space-x-2">
              <Check className="text-blue-600 mt-1 flex-shrink-0" />
              <span className="text-gray-700">All Pro – Service Funnel for refrigerant readiness checkups</span>
            </div>
            <div className="flex items-start space-x-2">
              <Check className="text-blue-600 mt-1 flex-shrink-0" />
              <span className="text-gray-700">Triad Diagnostic Solutions – E-Commerce Funnel for Autel products</span>
            </div>
            <div className="flex items-start space-x-2">
              <Check className="text-blue-600 mt-1 flex-shrink-0" />
              <span className="text-gray-700">Charley Grey – Client Onboarding Funnel with auto-tagging</span>
            </div>
            <div className="flex items-start space-x-2">
              <Check className="text-blue-600 mt-1 flex-shrink-0" />
              <span className="text-gray-700">Mike Greene Coaching – Mentoring booking funnel</span>
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

export default FunnelsSection;
