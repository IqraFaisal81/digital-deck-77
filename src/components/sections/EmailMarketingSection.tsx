
import { Check, ArrowRight, Calendar } from "lucide-react";
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
      className={`section-padding bg-gradient-to-br from-blue-50 to-white dark:from-gray-900 dark:to-gray-800 transition-opacity duration-500 ${isVisible ? 'opacity-100' : 'opacity-0'}`}
      style={{ 
        display: isVisible ? 'block' : 'none',
        height: isVisible ? 'auto' : '0',
        overflow: isVisible ? 'visible' : 'hidden',
        position: 'relative',
        zIndex: isVisible ? '10' : '-1'
      }}
    >
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold mb-6 text-center bg-clip-text text-transparent bg-gradient-to-r from-royal to-blue-600 dark:from-electric dark:to-royal">Email Marketing & Automation</h2>
        <div className="max-w-3xl mx-auto mb-8">
          <p className="text-gray-700 dark:text-gray-300 text-center">
            Inbox strategy that speaks human—not spammy. I craft high-impact email campaigns and automated flows that engage, nurture, and convert—without annoying your audience or clogging their inbox.
          </p>
          <p className="text-gray-700 dark:text-gray-300 text-center mt-4">
            Whether it&apos;s onboarding sequences, abandoned cart reminders, newsletters, or drip campaigns—I design every touchpoint with strategy, storytelling, and sales psychology in mind.
          </p>
        </div>
        
        <div className="bg-white dark:bg-gray-800 shadow-md rounded-xl p-6 border border-gray-200 dark:border-gray-700 mb-8">
          <h3 className="text-xl font-semibold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-royal to-blue-600 dark:from-electric dark:to-royal">Strategic Email Solutions</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="p-4 bg-gray-50 dark:bg-gray-700 rounded-lg border border-gray-100 dark:border-gray-600">
              <h4 className="font-semibold mb-2 text-gray-800 dark:text-gray-200">Personalized Sequences</h4>
              <p className="text-sm text-gray-600 dark:text-gray-300">Custom automation flows that meet your contacts where they are in their journey, delivering relevant content at exactly the right time.</p>
            </div>
            <div className="p-4 bg-gray-50 dark:bg-gray-700 rounded-lg border border-gray-100 dark:border-gray-600">
              <h4 className="font-semibold mb-2 text-gray-800 dark:text-gray-200">Revenue-Generating Campaigns</h4>
              <p className="text-sm text-gray-600 dark:text-gray-300">Sales-focused emails that convert subscribers into customers through strategic CTAs, compelling offers, and buyer psychology principles.</p>
            </div>
            <div className="p-4 bg-gray-50 dark:bg-gray-700 rounded-lg border border-gray-100 dark:border-gray-600">
              <h4 className="font-semibold mb-2 text-gray-800 dark:text-gray-200">Segmentation & Personalization</h4>
              <p className="text-sm text-gray-600 dark:text-gray-300">Custom targeting based on purchase history, engagement levels, preferences, and behavior for significantly higher conversion rates.</p>
            </div>
            <div className="p-4 bg-gray-50 dark:bg-gray-700 rounded-lg border border-gray-100 dark:border-gray-600">
              <h4 className="font-semibold mb-2 text-gray-800 dark:text-gray-200">A/B Testing & Optimization</h4>
              <p className="text-sm text-gray-600 dark:text-gray-300">Data-driven refinement of subject lines, content, and send times to continuously improve performance metrics.</p>
            </div>
          </div>
        </div>
        
        <h3 className="text-xl font-semibold mb-6 text-center bg-clip-text text-transparent bg-gradient-to-r from-royal to-blue-600 dark:from-electric dark:to-royal">Featured Email Campaigns</h3>
        <EmailMarketingCarousel />
        
        <div className="mt-8 bg-blue-50 dark:bg-blue-900/30 rounded-xl p-6 border border-blue-100 dark:border-blue-800">
          <h3 className="text-xl font-semibold mb-4 text-center bg-clip-text text-transparent bg-gradient-to-r from-royal to-blue-600 dark:from-electric dark:to-royal">Results Delivered</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="flex items-start space-x-2">
              <Check className="text-blue-600 dark:text-electric mt-1 flex-shrink-0" />
              <span className="text-gray-700 dark:text-gray-300">Increased open rates by 45% with personalized subject lines and segmentation</span>
            </div>
            <div className="flex items-start space-x-2">
              <Check className="text-blue-600 dark:text-electric mt-1 flex-shrink-0" />
              <span className="text-gray-700 dark:text-gray-300">Reduced customer support costs by 30% through automated nurture sequences</span>
            </div>
            <div className="flex items-start space-x-2">
              <Check className="text-blue-600 dark:text-electric mt-1 flex-shrink-0" />
              <span className="text-gray-700 dark:text-gray-300">Generated 25% more revenue through strategic abandoned cart workflows</span>
            </div>
            <div className="flex items-start space-x-2">
              <Check className="text-blue-600 dark:text-electric mt-1 flex-shrink-0" />
              <span className="text-gray-700 dark:text-gray-300">Improved customer satisfaction scores by providing timely, relevant content</span>
            </div>
          </div>
        </div>
        
        <div className="mt-6 text-center">
          <Button 
            variant="outline" 
            className="border border-blue-200 dark:border-blue-800 text-blue-600 dark:text-electric hover:bg-blue-50 dark:hover:bg-blue-900/50"
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
