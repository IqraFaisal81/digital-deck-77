
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
        <h2 className="text-3xl md:text-4xl font-bold mb-6 text-center bg-clip-text text-transparent bg-gradient-to-r from-black to-blue-600">Email Marketing & Automation</h2>
        <div className="max-w-3xl mx-auto mb-12">
          <p className="text-gray-700 text-center">
            Inbox strategy that speaks human—not spammy. I craft high-impact email campaigns and automated flows that engage, nurture, and convert—without annoying your audience or clogging their inbox.
          </p>
          <p className="text-gray-700 text-center mt-4">
            Whether it&apos;s onboarding sequences, abandoned cart reminders, newsletters, or drip campaigns—I design every touchpoint with strategy, storytelling, and sales psychology in mind.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
          <div className="bg-white shadow-md rounded-xl p-6 border border-gray-200 h-full">
            <h3 className="text-xl font-semibold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-black to-blue-600">Strategic Email Solutions</h3>
            <ul className="space-y-4">
              <li className="flex items-start">
                <Check className="text-blue-600 mt-1 mr-2 flex-shrink-0" />
                <div>
                  <span className="font-medium">Personalized Sequences:</span>
                  <p className="text-gray-600 mt-1">Custom automation flows that meet your contacts where they are in their journey, delivering relevant content at exactly the right time.</p>
                </div>
              </li>
              <li className="flex items-start">
                <Check className="text-blue-600 mt-1 mr-2 flex-shrink-0" />
                <div>
                  <span className="font-medium">Revenue-Generating Campaigns:</span>
                  <p className="text-gray-600 mt-1">Sales-focused emails that convert subscribers into customers through strategic CTAs, compelling offers, and buyer psychology principles.</p>
                </div>
              </li>
              <li className="flex items-start">
                <Check className="text-blue-600 mt-1 mr-2 flex-shrink-0" />
                <div>
                  <span className="font-medium">Segmentation & Personalization:</span>
                  <p className="text-gray-600 mt-1">Custom targeting based on purchase history, engagement levels, preferences, and behavior for significantly higher conversion rates.</p>
                </div>
              </li>
              <li className="flex items-start">
                <Check className="text-blue-600 mt-1 mr-2 flex-shrink-0" />
                <div>
                  <span className="font-medium">A/B Testing & Optimization:</span>
                  <p className="text-gray-600 mt-1">Data-driven refinement of subject lines, content, and send times to continuously improve performance metrics.</p>
                </div>
              </li>
            </ul>
          </div>
          
          <div className="bg-white shadow-md rounded-xl p-6 border border-gray-200 h-full">
            <h3 className="text-xl font-semibold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-black to-blue-600">What I Deliver</h3>
            <div className="grid grid-cols-1 gap-4">
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
            </div>
          </div>
        </div>
        
        <div className="bg-white shadow-md rounded-xl p-6 border border-gray-200 mb-12">
          <h3 className="text-xl font-semibold mb-6 text-center bg-clip-text text-transparent bg-gradient-to-r from-black to-blue-600">My Email Marketing Process</h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="text-center p-4">
              <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="font-bold text-blue-600">1</span>
              </div>
              <h4 className="font-semibold mb-2 text-gray-800">Strategy & Planning</h4>
              <p className="text-sm text-gray-600">Analyzing your audience, mapping customer journeys, and creating comprehensive email marketing plans aligned with your business objectives.</p>
            </div>
            <div className="text-center p-4">
              <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="font-bold text-blue-600">2</span>
              </div>
              <h4 className="font-semibold mb-2 text-gray-800">Content Creation</h4>
              <p className="text-sm text-gray-600">Crafting compelling subject lines, conversion-focused copy, and visually appealing designs that reflect your brand identity and drive action.</p>
            </div>
            <div className="text-center p-4">
              <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="font-bold text-blue-600">3</span>
              </div>
              <h4 className="font-semibold mb-2 text-gray-800">Implementation & Analysis</h4>
              <p className="text-sm text-gray-600">Setting up campaigns, testing functionality, monitoring performance metrics, and making data-driven optimizations to improve results.</p>
            </div>
          </div>
        </div>
        
        <h3 className="text-xl font-semibold mb-6 text-center bg-clip-text text-transparent bg-gradient-to-r from-black to-blue-600">Featured Email Campaigns</h3>
        <EmailMarketingCarousel />
        
        <div className="mt-8 bg-blue-50 rounded-xl p-6 border border-blue-100">
          <h3 className="text-xl font-semibold mb-4 text-center bg-clip-text text-transparent bg-gradient-to-r from-black to-blue-600">Results I've Delivered</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="bg-white p-4 rounded-lg shadow-sm">
              <div className="flex items-start space-x-2">
                <Check className="text-blue-600 mt-1 flex-shrink-0" />
                <div>
                  <h4 className="font-medium text-gray-800">Triad DS – Abandoned Cart Recovery</h4>
                  <p className="text-gray-700 mt-1">Built a personalized WooCommerce workflow that recovered lost sales and increased overall conversion rate by 22%</p>
                  <p className="text-blue-600 text-sm mt-2">Revenue impact: $15,000+ in first quarter</p>
                </div>
              </div>
            </div>
            
            <div className="bg-white p-4 rounded-lg shadow-sm">
              <div className="flex items-start space-x-2">
                <Check className="text-blue-600 mt-1 flex-shrink-0" />
                <div>
                  <h4 className="font-medium text-gray-800">Grey Matters – Welcome Sequence</h4>
                  <p className="text-gray-700 mt-1">Developed a 5-part welcome series that achieved 92% open rate and 45% click rate, exceeding industry benchmarks by 3x</p>
                  <p className="text-blue-600 text-sm mt-2">Result: 40% increase in program enrollment</p>
                </div>
              </div>
            </div>
            
            <div className="bg-white p-4 rounded-lg shadow-sm">
              <div className="flex items-start space-x-2">
                <Check className="text-blue-600 mt-1 flex-shrink-0" />
                <div>
                  <h4 className="font-medium text-gray-800">Finance Verge – Re-engagement Campaign</h4>
                  <p className="text-gray-700 mt-1">Created a targeted win-back series that reactivated 35% of dormant subscribers with personalized incentives</p>
                  <p className="text-blue-600 text-sm mt-2">Outcome: 28% of reactivated users converted to paid plans</p>
                </div>
              </div>
            </div>
            
            <div className="bg-white p-4 rounded-lg shadow-sm">
              <div className="flex items-start space-x-2">
                <Check className="text-blue-600 mt-1 flex-shrink-0" />
                <div>
                  <h4 className="font-medium text-gray-800">Newsletter Optimization</h4>
                  <p className="text-gray-700 mt-1">Redesigned newsletter templates and content strategy for multiple clients, improving engagement metrics across the board</p>
                  <p className="text-blue-600 text-sm mt-2">Average improvement: 32% higher click rates</p>
                </div>
              </div>
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
