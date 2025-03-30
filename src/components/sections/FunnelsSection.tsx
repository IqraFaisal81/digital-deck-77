
import { Check } from "lucide-react";
import { Button } from "@/components/ui/button";
import FunnelCarousel from "@/components/FunnelCarousel";

interface FunnelsSectionProps {
  isSectionVisible: (sectionId: string) => boolean;
  setVisibleSection: (sectionId: string | null) => void;
  funnelsRef: React.RefObject<HTMLElement>;
}

const FunnelsSection = ({ isSectionVisible, setVisibleSection, funnelsRef }: FunnelsSectionProps) => {
  return (
    <section id="funnels" ref={funnelsRef} className={`section-padding transition-all duration-300 ${isSectionVisible('funnels') ? 'opacity-100' : 'hidden opacity-0 h-0 overflow-hidden'}`}>
      <div className="container mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold mb-6 text-center">Funnel Development</h2>
        <div className="max-w-3xl mx-auto mb-12">
          <p className="text-white/80 text-center">
            Let&apos;s turn clicks into conversions—with zero guesswork. I design and build high-converting funnels that guide your prospects from &quot;just looking&quot; to ready to buy, using psychology-backed flows, clean design, and automation that does the heavy lifting.
          </p>
        </div>
        
        <div className="bg-black/20 backdrop-blur-sm rounded-xl p-6 border border-white/10 mb-12">
          <h3 className="text-xl font-semibold mb-6 text-electric">What I Build:</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="p-4 bg-black/30 rounded-lg">
              <h4 className="font-semibold mb-2">Lead Generation Funnels</h4>
              <p className="text-sm text-white/70">Capture leads with strong CTAs, lead magnets, tagging, and automated follow-ups.</p>
            </div>
            <div className="p-4 bg-black/30 rounded-lg">
              <h4 className="font-semibold mb-2">Sales & Checkout Funnels</h4>
              <p className="text-sm text-white/70">Product-focused flows with upsells, downsells, testimonials, and streamlined checkout experiences.</p>
            </div>
            <div className="p-4 bg-black/30 rounded-lg">
              <h4 className="font-semibold mb-2">Webinar & Booking Funnels</h4>
              <p className="text-sm text-white/70">Get attendees on autopilot with landing pages, reminder emails, and calendar integrations.</p>
            </div>
            <div className="p-4 bg-black/30 rounded-lg">
              <h4 className="font-semibold mb-2">Onboarding Funnels</h4>
              <p className="text-sm text-white/70">Welcome new clients with automated forms, email sequences, and team notifications.</p>
            </div>
            <div className="p-4 bg-black/30 rounded-lg">
              <h4 className="font-semibold mb-2">Promo & Launch Funnels</h4>
              <p className="text-sm text-white/70">From Black Friday offers to new service launches—I create urgency-driven funnels that deliver results.</p>
            </div>
          </div>
        </div>
        
        <h3 className="text-xl font-semibold mb-6 text-center">Featured Funnels</h3>
        <FunnelCarousel />
        
        <div className="mt-12 bg-electric/10 rounded-xl p-6 border border-electric/20">
          <h3 className="text-xl font-semibold mb-4 text-center text-electric">Funnels I&apos;ve Delivered</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="flex items-start space-x-2">
              <Check className="text-electric mt-1 flex-shrink-0" />
              <span className="text-white/80">All Pro – Service Funnel for refrigerant readiness checkups</span>
            </div>
            <div className="flex items-start space-x-2">
              <Check className="text-electric mt-1 flex-shrink-0" />
              <span className="text-white/80">Triad Diagnostic Solutions – E-Commerce Funnel for Autel products</span>
            </div>
            <div className="flex items-start space-x-2">
              <Check className="text-electric mt-1 flex-shrink-0" />
              <span className="text-white/80">Charley Grey – Client Onboarding Funnel with auto-tagging</span>
            </div>
            <div className="flex items-start space-x-2">
              <Check className="text-electric mt-1 flex-shrink-0" />
              <span className="text-white/80">Mike Greene Coaching – Mentoring booking funnel</span>
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

export default FunnelsSection;
