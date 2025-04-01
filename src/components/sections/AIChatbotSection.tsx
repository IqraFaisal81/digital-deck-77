
import { Button } from "@/components/ui/button";
import AIChatbotCarousel from "@/components/AIChatbotCarousel";
import { Check } from "lucide-react";

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
        <h2 className="text-3xl md:text-4xl font-bold mb-6 text-center bg-clip-text text-transparent bg-gradient-to-r from-black to-blue-600">AI Chatbot & Voice Agent</h2>
        <div className="max-w-3xl mx-auto mb-8">
          <p className="text-gray-700 text-center">
            Engage visitors 24/7 with intelligent AI chatbots and voice agents that qualify leads, answer questions, and drive conversions — all while providing a seamless customer experience.
          </p>
        </div>
        
        <div className="bg-white shadow-md rounded-xl p-6 border border-gray-200 mb-8">
          <h3 className="text-xl font-semibold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-black to-blue-600">AI Solutions</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="p-4 bg-gray-50 rounded-lg border border-gray-100">
              <h4 className="font-semibold mb-2 text-gray-800">Custom AI Chatbots</h4>
              <p className="text-sm text-gray-600">Intelligent conversational agents trained on your business data for personalized customer interactions.</p>
            </div>
            <div className="p-4 bg-gray-50 rounded-lg border border-gray-100">
              <h4 className="font-semibold mb-2 text-gray-800">Voice AI Integration</h4>
              <p className="text-sm text-gray-600">Natural-sounding voice agents that can handle calls, answer questions, and route inquiries appropriately.</p>
            </div>
            <div className="p-4 bg-gray-50 rounded-lg border border-gray-100">
              <h4 className="font-semibold mb-2 text-gray-800">Lead Qualification</h4>
              <p className="text-sm text-gray-600">Automated qualification flows that gather key information and route prospects to your sales team.</p>
            </div>
            <div className="p-4 bg-gray-50 rounded-lg border border-gray-100">
              <h4 className="font-semibold mb-2 text-gray-800">Knowledge Base Integration</h4>
              <p className="text-sm text-gray-600">AI systems that leverage your existing documentation to provide accurate, consistent information.</p>
            </div>
          </div>
        </div>
        
        <AIChatbotCarousel />
        
        <div className="mt-8 bg-blue-50 rounded-xl p-6 border border-blue-100">
          <h3 className="text-xl font-semibold mb-4 text-center bg-clip-text text-transparent bg-gradient-to-r from-black to-blue-600">AI Implementation Results</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="flex items-start space-x-2">
              <Check className="text-blue-600 mt-1 flex-shrink-0" />
              <span className="text-gray-700">50% reduction in customer service response time with 24/7 availability</span>
            </div>
            <div className="flex items-start space-x-2">
              <Check className="text-blue-600 mt-1 flex-shrink-0" />
              <span className="text-gray-700">35% increase in qualified leads captured during off-hours</span>
            </div>
            <div className="flex items-start space-x-2">
              <Check className="text-blue-600 mt-1 flex-shrink-0" />
              <span className="text-gray-700">90% customer satisfaction rate with AI-powered responses</span>
            </div>
            <div className="flex items-start space-x-2">
              <Check className="text-blue-600 mt-1 flex-shrink-0" />
              <span className="text-gray-700">Seamless handoff between AI systems and human agents when needed</span>
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

export default AIChatbotSection;
