
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
        <h2 className="text-3xl md:text-4xl font-bold mb-6 text-center text-gray-900">Email Marketing & Automation</h2>
        <div className="max-w-3xl mx-auto mb-12">
          <p className="text-gray-700 text-center">
            Inbox strategy that speaks human—not spammy. I craft high-impact email campaigns and automated flows that engage, nurture, and convert—without annoying your audience or clogging their inbox.
          </p>
          <p className="text-gray-700 text-center mt-4">
            Whether it&apos;s onboarding sequences, abandoned cart reminders, newsletters, or drip campaigns—I design every touchpoint with strategy, storytelling, and sales psychology in mind.
          </p>
        </div>
        
        <div className="bg-white shadow-md rounded-xl p-6 border border-gray-200 mb-12">
          <h3 className="text-xl font-semibold mb-6 text-blue-600">What I Deliver:</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="p-4 bg-gray-50 rounded-lg border border-gray-100">
              <h4 className="font-semibold mb-2 text-gray-800">Email Sequences & Automations</h4>
              <p className="text-sm text-gray-600">Lead nurturing, onboarding, upselling, reactivation—you name it. Built with conditional logic for the right message at the right time.</p>
            </div>
            <div className="p-4 bg-gray-50 rounded-lg border border-gray-100">
              <h4 className="font-semibold mb-2 text-gray-800">Newsletter Campaigns</h4>
              <p className="text-sm text-gray-600">Monthly, weekly, or seasonal campaigns designed to educate, entertain, and convert—while staying true to your brand voice.</p>
            </div>
            <div className="p-4 bg-gray-50 rounded-lg border border-gray-100">
              <h4 className="font-semibold mb-2 text-gray-800">Abandoned Cart Workflows</h4>
              <p className="text-sm text-gray-600">Personalized reminders with product previews, discounts, and upsell opportunities to bring shoppers back (and boost revenue).</p>
            </div>
            <div className="p-4 bg-gray-50 rounded-lg border border-gray-100">
              <h4 className="font-semibold mb-2 text-gray-800">Review Requests & Follow-Ups</h4>
              <p className="text-sm text-gray-600">Turn customers into raving fans with friendly post-service emails that request reviews and build brand trust.</p>
            </div>
            <div className="p-4 bg-gray-50 rounded-lg border border-gray-100">
              <h4 className="font-semibold mb-2 text-gray-800">Segmentation & Tagging</h4>
              <p className="text-sm text-gray-600">Targeted emails based on behaviors, preferences, and pipeline stages—no more generic blasts.</p>
            </div>
          </div>
        </div>
        
        <h3 className="text-xl font-semibold mb-6 text-center text-gray-900">Featured Email Campaigns</h3>
        <EmailMarketingCarousel />
        
        <div className="mt-8 bg-blue-50 rounded-xl p-6 border border-blue-100">
          <h3 className="text-xl font-semibold mb-4 text-center text-blue-600">Results I've Delivered</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="flex items-start space-x-2">
              <Check className="text-blue-600 mt-1 flex-shrink-0" />
              <span className="text-gray-700">Triad DS – Abandoned Cart Recovery: Built a personalized WooCommerce workflow that recovered lost sales</span>
            </div>
            <div className="flex items-start space-x-2">
              <Check className="text-blue-600 mt-1 flex-shrink-0" />
              <span className="text-gray-700">Grey Matters – Welcome Sequence: 92% open rate and 45% click rate</span>
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

export default EmailMarketingSection;
