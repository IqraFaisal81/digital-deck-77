
import { Check } from "lucide-react";
import { Button } from "@/components/ui/button";
import EmailMarketingCarousel from "@/components/EmailMarketingCarousel";

interface EmailMarketingSectionProps {
  isSectionVisible: (sectionId: string) => boolean;
  setVisibleSection: (sectionId: string | null) => void;
  emailMarketingRef: React.RefObject<HTMLElement>;
}

const EmailMarketingSection = ({ isSectionVisible, setVisibleSection, emailMarketingRef }: EmailMarketingSectionProps) => {
  const isVisible = isSectionVisible('email-marketing');
  
  return (
    <section 
      id="email-marketing" 
      ref={emailMarketingRef} 
      className={`section-padding transition-opacity duration-500 ${isVisible ? 'opacity-100' : 'opacity-0'}`}
      style={{ 
        display: isVisible ? 'block' : 'none',
        height: isVisible ? 'auto' : '0',
        overflow: isVisible ? 'visible' : 'hidden',
        position: 'relative',
        zIndex: isVisible ? '10' : '-1'
      }}
    >
      <div className="container mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold mb-6 text-center">Email Marketing & Automation</h2>
        <div className="max-w-3xl mx-auto mb-12">
          <p className="text-white/80 text-center">
            Inbox strategy that speaks human—not spammy. I craft high-impact email campaigns and automated flows that engage, nurture, and convert—without annoying your audience or clogging their inbox.
          </p>
          <p className="text-white/80 text-center mt-4">
            Whether it&apos;s onboarding sequences, abandoned cart reminders, newsletters, or drip campaigns—I design every touchpoint with strategy, storytelling, and sales psychology in mind.
          </p>
        </div>
        
        <div className="bg-black/20 backdrop-blur-sm rounded-xl p-6 border border-white/10 mb-12">
          <h3 className="text-xl font-semibold mb-6 text-electric">What I Deliver:</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="p-4 bg-black/30 rounded-lg">
              <h4 className="font-semibold mb-2">Email Sequences & Automations</h4>
              <p className="text-sm text-white/70">Lead nurturing, onboarding, upselling, reactivation—you name it. Built with conditional logic for the right message at the right time.</p>
            </div>
            <div className="p-4 bg-black/30 rounded-lg">
              <h4 className="font-semibold mb-2">Newsletter Campaigns</h4>
              <p className="text-sm text-white/70">Monthly, weekly, or seasonal campaigns designed to educate, entertain, and convert—while staying true to your brand voice.</p>
            </div>
            <div className="p-4 bg-black/30 rounded-lg">
              <h4 className="font-semibold mb-2">Abandoned Cart Workflows</h4>
              <p className="text-sm text-white/70">Personalized reminders with product previews, discounts, and upsell opportunities to bring shoppers back (and boost revenue).</p>
            </div>
            <div className="p-4 bg-black/30 rounded-lg">
              <h4 className="font-semibold mb-2">Review Requests & Follow-Ups</h4>
              <p className="text-sm text-white/70">Turn customers into raving fans with friendly post-service emails that request reviews and build brand trust.</p>
            </div>
            <div className="p-4 bg-black/30 rounded-lg">
              <h4 className="font-semibold mb-2">Segmentation & Tagging</h4>
              <p className="text-sm text-white/70">Targeted emails based on behaviors, preferences, and pipeline stages—no more generic blasts.</p>
            </div>
          </div>
        </div>
        
        <h3 className="text-xl font-semibold mb-6 text-center">Featured Email Campaigns</h3>
        <EmailMarketingCarousel />
        
        <div className="mt-12 bg-electric/10 rounded-xl p-6 border border-electric/20">
          <h3 className="text-xl font-semibold mb-4 text-center text-electric">Results I've Delivered</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="flex items-start space-x-2">
              <Check className="text-electric mt-1 flex-shrink-0" />
              <span className="text-white text-opacity-70">Triad DS – Abandoned Cart Recovery: Built a personalized WooCommerce workflow that recovered lost sales</span>
            </div>
            <div className="flex items-start space-x-2">
              <Check className="text-electric mt-1 flex-shrink-0" />
              <span className="text-white text-opacity-70">Grey Matters – Welcome Sequence: 92% open rate and 45% click rate</span>
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

export default EmailMarketingSection;
