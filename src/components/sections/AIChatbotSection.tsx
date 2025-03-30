
import { Button } from "@/components/ui/button";
import AIChatbotCarousel from "@/components/AIChatbotCarousel";

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
      <div className="container mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold mb-6 text-center text-gray-900">AI Chatbot & Voice Agent</h2>
        <div className="max-w-3xl mx-auto mb-12">
          <p className="text-gray-700 text-center">
            Engage visitors 24/7 with intelligent AI chatbots and voice agents that qualify leads, answer questions, and drive conversions — all while providing a seamless customer experience.
          </p>
        </div>
        
        <AIChatbotCarousel />
        
        <div className="mt-8 text-center">
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
