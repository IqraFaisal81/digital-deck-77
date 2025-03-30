
import { Button } from "@/components/ui/button";
import AIChatbotCarousel from "@/components/AIChatbotCarousel";

interface AIChatbotSectionProps {
  isSectionVisible: (sectionId: string) => boolean;
  setVisibleSection: (sectionId: string | null) => void;
  aiChatbotRef: React.RefObject<HTMLElement>;
}

const AIChatbotSection = ({ isSectionVisible, setVisibleSection, aiChatbotRef }: AIChatbotSectionProps) => {
  return (
    <section id="ai-chatbot" ref={aiChatbotRef} className={`section-padding transition-all duration-300 ${isSectionVisible('ai-chatbot') ? 'opacity-100' : 'hidden opacity-0 h-0 overflow-hidden'}`}>
      <div className="container mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold mb-6 text-center">AI Chatbot & Voice Agent</h2>
        <div className="max-w-3xl mx-auto mb-12">
          <p className="text-white/80 text-center">
            Engage visitors 24/7 with intelligent AI chatbots and voice agents that qualify leads, answer questions, and drive conversions — all while providing a seamless customer experience.
          </p>
        </div>
        
        <AIChatbotCarousel />
        
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

export default AIChatbotSection;
