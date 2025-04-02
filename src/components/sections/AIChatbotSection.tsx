import { Button } from "@/components/ui/button";
import AIChatbotCarousel from "@/components/AIChatbotCarousel";
import { Check, ArrowRight, Calendar } from "lucide-react";

interface AIChatbotSectionProps {
  isSectionVisible: (sectionId: string) => boolean;
  setVisibleSection: (sectionId: string | null) => void;
  aiChatbotRef: React.RefObject<HTMLElement>;
}

const AIChatbotSection = ({ isSectionVisible, setVisibleSection, aiChatbotRef }: AIChatbotSectionProps) => {
  const isVisible = isSectionVisible('ai-chatbot');
  
  return (
    <section 
      id="ai-chatbot" 
      ref={aiChatbotRef} 
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
        <h2 className="text-3xl md:text-4xl font-bold mb-6 text-center bg-clip-text text-transparent bg-gradient-to-r from-royal to-blue-600 dark:from-electric dark:to-royal">AI Chatbot & Voice Agent</h2>
        <div className="max-w-3xl mx-auto mb-8">
          <p className="text-gray-700 dark:text-gray-300 text-center">
            Intelligent conversational solutions that transform customer interactions. My AI-powered chatbots and voice agents provide instant, personalized support, capturing leads and enhancing user experience 24/7.
          </p>
        </div>
        
        <div className="bg-white dark:bg-gray-800 shadow-md rounded-xl p-6 border border-gray-200 dark:border-gray-700 mb-8">
          <h3 className="text-xl font-semibold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-royal to-blue-600 dark:from-electric dark:to-royal">AI Chatbot Services</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="p-4 bg-gray-50 dark:bg-gray-700 rounded-lg border border-gray-100 dark:border-gray-600">
              <h4 className="font-semibold mb-2 text-gray-800 dark:text-gray-200">Custom Chatbot Development</h4>
              <p className="text-sm text-gray-600 dark:text-gray-300">Bespoke chatbot solutions tailored to your specific business needs and customer interactions.</p>
            </div>
            <div className="p-4 bg-gray-50 dark:bg-gray-700 rounded-lg border border-gray-100 dark:border-gray-600">
              <h4 className="font-semibold mb-2 text-gray-800 dark:text-gray-200">Voice Agent Integration</h4>
              <p className="text-sm text-gray-600 dark:text-gray-300">Seamlessly integrate AI voice agents into your existing phone systems for automated customer support.</p>
            </div>
            <div className="p-4 bg-gray-50 dark:bg-gray-700 rounded-lg border border-gray-100 dark:border-gray-600">
              <h4 className="font-semibold mb-2 text-gray-800 dark:text-gray-200">24/7 Customer Support</h4>
              <p className="text-sm text-gray-600 dark:text-gray-300">Provide round-the-clock assistance to your customers, improving satisfaction and reducing response times.</p>
            </div>
            <div className="p-4 bg-gray-50 dark:bg-gray-700 rounded-lg border border-gray-100 dark:border-gray-600">
              <h4 className="font-semibold mb-2 text-gray-800 dark:text-gray-200">Lead Generation & Qualification</h4>
              <p className="text-sm text-gray-600 dark:text-gray-300">Automate lead capture and qualification processes, ensuring your sales team focuses on high-potential prospects.</p>
            </div>
          </div>
        </div>
        
        <h3 className="text-xl font-semibold mb-6 text-center bg-clip-text text-transparent bg-gradient-to-r from-royal to-blue-600 dark:from-electric dark:to-royal">Featured AI Chatbots</h3>
        <AIChatbotCarousel />
        
        <div className="mt-8 bg-blue-50 dark:bg-blue-900/30 rounded-xl p-6 border border-blue-100 dark:border-blue-800">
          <h3 className="text-xl font-semibold mb-4 text-center bg-clip-text text-transparent bg-gradient-to-r from-royal to-blue-600 dark:from-electric dark:to-royal">Results Delivered</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="flex items-start space-x-2">
              <Check className="text-blue-600 dark:text-electric mt-1 flex-shrink-0" />
              <span className="text-gray-700 dark:text-gray-300">Increased customer engagement by 45% with personalized chatbot interactions</span>
            </div>
            <div className="flex items-start space-x-2">
              <Check className="text-blue-600 dark:text-electric mt-1 flex-shrink-0" />
              <span className="text-gray-700 dark:text-gray-300">Reduced customer support costs by 30% through AI-powered automation</span>
            </div>
            <div className="flex items-start space-x-2">
              <Check className="text-blue-600 dark:text-electric mt-1 flex-shrink-0" />
              <span className="text-gray-700 dark:text-gray-300">Generated 25% more leads through proactive chatbot conversations</span>
            </div>
            <div className="flex items-start space-x-2">
              <Check className="text-blue-600 dark:text-electric mt-1 flex-shrink-0" />
              <span className="text-gray-700 dark:text-gray-300">Improved customer satisfaction scores by providing instant support and issue resolution</span>
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

export default AIChatbotSection;
