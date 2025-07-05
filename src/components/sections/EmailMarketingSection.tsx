import { Button } from "@/components/ui/button";
import EmailMarketingCarousel from "@/components/EmailMarketingCarousel";
import { Check } from "lucide-react";
import { Separator } from "@/components/ui/separator";

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
      className={`section-padding py-16 sm:py-20 bg-gradient-to-br from-gray-900 via-gray-850 to-gray-900 dark:from-gray-900 dark:via-gray-850 dark:to-gray-900 transition-opacity duration-500 ${isVisible ? 'opacity-100' : 'opacity-0'}`}
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
        <div className="absolute top-20 right-20 w-96 h-96 bg-indigo-500/5 rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 left-20 w-96 h-96 bg-purple-500/5 rounded-full blur-3xl"></div>
      </div>

      <div className="container max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-10">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-center bg-clip-text text-transparent bg-gradient-to-r from-royal to-blue-600 dark:from-electric dark:to-royal">
            Email Marketing & Automation
          </h2>
          <p className="text-gray-700 dark:text-gray-300 text-center max-w-3xl mx-auto">
            Inbox strategy that speaks human—not spammy. I craft high-impact email campaigns and automated flows that engage, nurture, and convert—without annoying your audience or clogging their inbox.
          </p>
          <p className="text-gray-700 dark:text-gray-300 text-center max-w-3xl mx-auto mt-4">
            Whether it&apos;s onboarding sequences, abandoned cart reminders, newsletters, or drip campaigns—I design every touchpoint with strategy, storytelling, and sales psychology in mind.
          </p>
        </div>
        
        {/* Features Grid */}
        <div className="bg-white/90 dark:bg-gray-800/90 shadow-xl rounded-xl p-6 md:p-8 border border-gray-200 dark:border-gray-700 mb-12 backdrop-blur-sm hover:shadow-2xl transition-all duration-300">
          <h3 className="text-xl font-semibold mb-7 bg-clip-text text-transparent bg-gradient-to-r from-royal to-blue-600 dark:from-electric dark:to-royal">Strategic Email Solutions</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="p-5 bg-gray-50 dark:bg-gray-700/70 rounded-lg border border-gray-100 dark:border-gray-600 hover:shadow-md transition-all duration-300 transform hover:scale-[1.02] group">
              <h4 className="font-semibold mb-2 text-gray-800 dark:text-gray-200 group-hover:text-royal dark:group-hover:text-electric transition-colors">Personalized Sequences</h4>
              <p className="text-sm text-gray-600 dark:text-gray-300">Custom automation flows that meet your contacts where they are in their journey, delivering relevant content at exactly the right time.</p>
            </div>
            <div className="p-5 bg-gray-50 dark:bg-gray-700/70 rounded-lg border border-gray-100 dark:border-gray-600 hover:shadow-md transition-all duration-300 transform hover:scale-[1.02] group">
              <h4 className="font-semibold mb-2 text-gray-800 dark:text-gray-200 group-hover:text-royal dark:group-hover:text-electric transition-colors">Revenue-Generating Campaigns</h4>
              <p className="text-sm text-gray-600 dark:text-gray-300">Sales-focused emails that convert subscribers into customers through strategic CTAs, compelling offers, and buyer psychology principles.</p>
            </div>
            <div className="p-5 bg-gray-50 dark:bg-gray-700/70 rounded-lg border border-gray-100 dark:border-gray-600 hover:shadow-md transition-all duration-300 transform hover:scale-[1.02] group">
              <h4 className="font-semibold mb-2 text-gray-800 dark:text-gray-200 group-hover:text-royal dark:group-hover:text-electric transition-colors">Segmentation & Personalization</h4>
              <p className="text-sm text-gray-600 dark:text-gray-300">Custom targeting based on purchase history, engagement levels, preferences, and behavior for significantly higher conversion rates.</p>
            </div>
            <div className="p-5 bg-gray-50 dark:bg-gray-700/70 rounded-lg border border-gray-100 dark:border-gray-600 hover:shadow-md transition-all duration-300 transform hover:scale-[1.02] group">
              <h4 className="font-semibold mb-2 text-gray-800 dark:text-gray-200 group-hover:text-royal dark:group-hover:text-electric transition-colors">A/B Testing & Optimization</h4>
              <p className="text-sm text-gray-600 dark:text-gray-300">Data-driven refinement of subject lines, content, and send times to continuously improve performance metrics.</p>
            </div>
          </div>
        </div>
        
        {/* Carousel Section */}
        <div className="mb-12">
          <h3 className="text-xl font-semibold mb-6 text-center bg-clip-text text-transparent bg-gradient-to-r from-royal to-blue-600 dark:from-electric dark:to-royal">Featured Email Campaigns</h3>
          <Separator className="mb-8 bg-gray-200 dark:bg-gray-700" />
          <EmailMarketingCarousel />
        </div>
        
        {/* Results Section */}
        <div className="bg-blue-50/80 dark:bg-blue-900/20 rounded-xl p-6 md:p-8 border border-blue-100 dark:border-blue-800 backdrop-filter backdrop-blur-sm transform hover:shadow-xl transition-all duration-300">
          <h3 className="text-xl font-semibold mb-6 text-center bg-clip-text text-transparent bg-gradient-to-r from-royal to-blue-600 dark:from-electric dark:to-royal">Results Delivered</h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div className="flex items-start space-x-3 bg-white/70 dark:bg-gray-800/50 p-4 rounded-lg hover:shadow-md transition-all duration-300 transform hover:scale-[1.02]">
              <Check className="text-blue-600 dark:text-electric mt-1 flex-shrink-0" />
              <span className="text-gray-700 dark:text-gray-300">Increased open rates by 45% with personalized subject lines and segmentation</span>
            </div>
            <div className="flex items-start space-x-3 bg-white/70 dark:bg-gray-800/50 p-4 rounded-lg hover:shadow-md transition-all duration-300 transform hover:scale-[1.02]">
              <Check className="text-blue-600 dark:text-electric mt-1 flex-shrink-0" />
              <span className="text-gray-700 dark:text-gray-300">Reduced customer support costs by 30% through automated nurture sequences</span>
            </div>
            <div className="flex items-start space-x-3 bg-white/70 dark:bg-gray-800/50 p-4 rounded-lg hover:shadow-md transition-all duration-300 transform hover:scale-[1.02]">
              <Check className="text-blue-600 dark:text-electric mt-1 flex-shrink-0" />
              <span className="text-gray-700 dark:text-gray-300">Generated 25% more revenue through strategic abandoned cart workflows</span>
            </div>
            <div className="flex items-start space-x-3 bg-white/70 dark:bg-gray-800/50 p-4 rounded-lg hover:shadow-md transition-all duration-300 transform hover:scale-[1.02]">
              <Check className="text-blue-600 dark:text-electric mt-1 flex-shrink-0" />
              <span className="text-gray-700 dark:text-gray-300">Improved customer satisfaction scores by providing timely, relevant content</span>
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

export default EmailMarketingSection;
