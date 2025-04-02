
import { useState } from "react";
import { 
  Carousel, 
  CarouselContent, 
  CarouselItem, 
  CarouselNext, 
  CarouselPrevious 
} from "@/components/ui/carousel";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogDescription } from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { ExternalLink, ZoomIn, MessageSquare, Mic, ChevronLeft, ChevronRight } from "lucide-react";
import { scrollToServiceSection } from "@/utils/ScrollToServiceUtils";

// Define AI Chatbot data
const aiChatbots = [
  {
    id: 1,
    title: "Chat Widget AI",
    description: "Real-Time Messaging Automation with custom fields for Name, Phone, Email, & Message capture, instant response acknowledgment, tag-based lead segmentation, and automated team notification for faster follow-ups.",
    image: "/lovable-uploads/62db0c38-4d35-41c2-b6db-6dcc3d85ecac.png",
    iconName: "messageSquare",
    features: [
      "Custom fields for Name, Phone, Email, & Message",
      "Instant response acknowledgment",
      "Tag-based lead segmentation",
      "Automated team notification for faster follow-ups"
    ],
    result: "No lead left unseen. Real-time visibility, faster response times, and enhanced UX."
  },
  {
    id: 2,
    title: "Voice AI Agent",
    description: "Smart Inbound Call Handler with dynamic voice selection, inbound call routing based on caller behavior, language selection & timezone configuration, and business-specific branding and voice flow.",
    image: "/lovable-uploads/9bcb292a-8bfc-4d7d-b048-fa75e96bec94.png",
    iconName: "mic",
    features: [
      "Dynamic voice selection with playback testing",
      "Inbound call routing based on caller behavior",
      "Language selection & timezone configuration",
      "Business-specific branding and voice flow"
    ],
    result: "Reduced manual call handling. Smarter qualification before human handoff."
  }
];

// Helper function to render the icon based on name
const renderIcon = (iconName: string) => {
  switch (iconName) {
    case "messageSquare":
      return <MessageSquare className="h-5 w-5" />;
    case "mic":
      return <Mic className="h-5 w-5" />;
    default:
      return <MessageSquare className="h-5 w-5" />;
  }
};

const AIChatbotCarousel = () => {
  const [selectedChatbot, setSelectedChatbot] = useState<typeof aiChatbots[0] | null>(null);
  const [modalOpen, setModalOpen] = useState(false);

  const openChatbotModal = (chatbot: typeof aiChatbots[0]) => {
    setSelectedChatbot(chatbot);
    setModalOpen(true);
  };

  return (
    <div className="w-full bg-gradient-to-br from-blue-50 via-white to-blue-50 dark:from-gray-900 dark:via-gray-800 dark:to-gray-900 p-6 rounded-2xl border border-blue-100/50 dark:border-blue-900/30 shadow-lg">
      <Carousel
        opts={{
          align: "start",
          loop: true,
        }}
        className="w-full"
      >
        <CarouselContent>
          {aiChatbots.map((chatbot) => (
            <CarouselItem key={chatbot.id} className="basis-full md:basis-1/2 lg:basis-1/2 p-2">
              <div 
                className="cursor-pointer h-full bg-white dark:bg-gray-800 rounded-xl border border-blue-100 dark:border-blue-900/50 overflow-hidden transition-all duration-300 hover:shadow-xl hover:-translate-y-1 group shadow"
                onClick={() => openChatbotModal(chatbot)}
              >
                <div className="relative h-[180px] md:h-[200px] overflow-hidden">
                  <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-black/70 z-10 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                    <ZoomIn className="h-10 w-10 text-white bg-blue-600/80 p-2 rounded-full" />
                  </div>
                  <img 
                    src={chatbot.image} 
                    alt={chatbot.title} 
                    className="w-full h-full object-cover object-top transition-all duration-500 transform group-hover:scale-105"
                  />
                </div>
                <div className="p-4 bg-white dark:bg-gray-800">
                  <div className="flex items-center mb-2">
                    <div className="bg-blue-600 dark:bg-blue-500 p-1.5 rounded-md mr-3 text-white">
                      {renderIcon(chatbot.iconName)}
                    </div>
                    <h4 className="text-md font-bold text-gray-800 dark:text-gray-200 line-clamp-1">{chatbot.title}</h4>
                  </div>
                  <p className="text-gray-600 dark:text-gray-300 text-sm line-clamp-2">{chatbot.description}</p>
                </div>
              </div>
            </CarouselItem>
          ))}
        </CarouselContent>
        <CarouselPrevious className="left-2 bg-white dark:bg-gray-800 hover:bg-blue-600 hover:text-white border-none shadow-lg">
          <ChevronLeft className="h-4 w-4" />
        </CarouselPrevious>
        <CarouselNext className="right-2 bg-white dark:bg-gray-800 hover:bg-blue-600 hover:text-white border-none shadow-lg">
          <ChevronRight className="h-4 w-4" />
        </CarouselNext>
      </Carousel>

      {/* Chatbot Modal */}
      <Dialog open={modalOpen} onOpenChange={setModalOpen}>
        <DialogContent className="bg-white dark:bg-gray-800 max-w-4xl max-h-[90vh] overflow-y-auto rounded-xl border border-blue-100 dark:border-blue-900/50 shadow-2xl p-0">
          {selectedChatbot && (
            <>
              <DialogHeader className="p-6 border-b border-gray-100 dark:border-gray-700">
                <div className="flex items-center">
                  <div className="bg-blue-600 dark:bg-blue-500 p-2 rounded-md mr-3 text-white">
                    {renderIcon(selectedChatbot.iconName)}
                  </div>
                  <DialogTitle className="text-2xl font-bold text-gray-800 dark:text-gray-200">{selectedChatbot.title}</DialogTitle>
                </div>
                <DialogDescription className="text-gray-600 dark:text-gray-300 text-base mt-2">
                  {selectedChatbot.description.split(" – ")[0]}
                </DialogDescription>
              </DialogHeader>
              
              <div className="p-6">
                <div className="bg-gray-50 dark:bg-gray-900/50 p-4 rounded-lg border border-gray-100 dark:border-gray-700">
                  <img 
                    src={selectedChatbot.image} 
                    alt={selectedChatbot.title} 
                    className="w-full object-contain rounded-lg shadow-inner"
                  />
                </div>
                
                <div className="mt-4">
                  <h3 className="text-lg font-semibold mb-2 text-gray-800 dark:text-gray-200">Features</h3>
                  <ul className="list-disc pl-5 mb-2 space-y-1 text-gray-600 dark:text-gray-300">
                    {selectedChatbot.features.map((feature, index) => (
                      <li key={index}>{feature}</li>
                    ))}
                  </ul>
                  <p className="font-medium text-gray-600 dark:text-gray-300 mt-2">
                    📲 Result: {selectedChatbot.result}
                  </p>
                </div>
                
                <div className="mt-6 flex justify-between">
                  <Button
                    className="bg-gray-200 hover:bg-gray-300 text-gray-800 dark:bg-gray-700 dark:hover:bg-gray-600 dark:text-white"
                    variant="outline"
                    onClick={() => setModalOpen(false)}
                  >
                    Close
                  </Button>
                  
                  <Button
                    className="bg-blue-600 hover:bg-blue-700 text-white"
                    onClick={() => {
                      setModalOpen(false);
                      scrollToServiceSection("ai-chatbot");
                    }}
                  >
                    <ExternalLink className="h-4 w-4 mr-2" />
                    View AI Chatbot Services
                  </Button>
                </div>
              </div>
            </>
          )}
        </DialogContent>
      </Dialog>
      
      <div className="mt-8 text-center">
        <h3 className="text-xl font-bold mb-2 text-blue-600 dark:text-blue-400">Why It Works:</h3>
        <ul className="inline-block text-left mx-auto mb-6">
          <li className="flex items-start mb-2">
            <span className="text-green-500 mr-2">✓</span>
            <span className="text-black dark:text-gray-200">Converts cold traffic into warm leads via chat</span>
          </li>
          <li className="flex items-start mb-2">
            <span className="text-green-500 mr-2">✓</span>
            <span className="text-black dark:text-gray-200">Filters & qualifies callers using AI before they hit your team</span>
          </li>
          <li className="flex items-start mb-2">
            <span className="text-green-500 mr-2">✓</span>
            <span className="text-black dark:text-gray-200">Scalable for agencies, service providers, and product brands</span>
          </li>
          <li className="flex items-start">
            <span className="text-green-500 mr-2">✓</span>
            <span className="text-black dark:text-gray-200">Available 24/7 – no burnout, no bottlenecks</span>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default AIChatbotCarousel;
