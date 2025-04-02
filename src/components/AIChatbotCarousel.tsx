
import React, { useState } from "react";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogDescription } from "@/components/ui/dialog";

const AIChatbotCarousel = () => {
  const aiImages = [
    {
      src: "/lovable-uploads/62db0c38-4d35-41c2-b6db-6dcc3d85ecac.png",
      alt: "AI Chatbot interface showing customer interaction",
      description: "Chat Widget AI – Real-Time Messaging Automation with custom fields for Name, Phone, Email, & Message capture, instant response acknowledgment, tag-based lead segmentation, and automated team notification for faster follow-ups."
    },
    {
      src: "/lovable-uploads/9bcb292a-8bfc-4d7d-b048-fa75e96bec94.png",
      alt: "Voice AI Agent setup interface",
      description: "Voice AI Agent – Smart Inbound Call Handler with dynamic voice selection, inbound call routing based on caller behavior, language selection & timezone configuration, and business-specific branding and voice flow."
    },
  ];

  const [selectedImage, setSelectedImage] = useState<typeof aiImages[0] | null>(null);
  const [modalOpen, setModalOpen] = useState(false);

  const openImageModal = (image: typeof aiImages[0]) => {
    setSelectedImage(image);
    setModalOpen(true);
  };

  return (
    <div className="w-full">
      <Carousel
        opts={{
          align: "start",
          loop: true,
        }}
        className="w-full"
      >
        <CarouselContent>
          {aiImages.map((image, index) => (
            <CarouselItem
              key={index}
              className="basis-full md:basis-1/2 lg:basis-1/2 h-full p-2"
            >
              <div 
                className="cursor-pointer h-full bg-white dark:bg-gray-800 shadow-md rounded-lg border border-gray-200 dark:border-gray-700 overflow-hidden transition-all duration-300 hover:shadow-xl hover:border-blue-200 dark:hover:border-blue-700 group"
                onClick={() => openImageModal(image)}
              >
                <div className="relative h-[200px] md:h-[220px] overflow-hidden">
                  <img
                    src={image.src}
                    alt={image.alt}
                    className="w-full h-full object-cover object-top transition-all duration-300 transform group-hover:scale-110"
                  />
                </div>
                <div className="p-4 bg-gray-50 dark:bg-gray-800">
                  <h4 className="text-lg font-semibold text-black dark:text-white">{image.alt.split(" ").slice(0, 3).join(" ")}</h4>
                  <p className="text-gray-800 dark:text-gray-300 text-sm mt-1">{image.description.split(" ").slice(0, 10).join(" ")}...</p>
                </div>
              </div>
            </CarouselItem>
          ))}
        </CarouselContent>
        <CarouselPrevious className="left-2 bg-black/50 hover:bg-black/80 border-none" />
        <CarouselNext className="right-2 bg-black/50 hover:bg-black/80 border-none" />
      </Carousel>

      {/* Image Modal */}
      <Dialog open={modalOpen} onOpenChange={setModalOpen}>
        <DialogContent className="bg-white max-w-4xl max-h-[90vh] overflow-y-auto">
          {selectedImage && (
            <>
              <DialogHeader>
                <DialogTitle className="text-2xl font-bold text-gray-800">{selectedImage.alt}</DialogTitle>
                <DialogDescription className="text-gray-600">
                  {selectedImage.description.split(" – ")[0]}
                </DialogDescription>
              </DialogHeader>
              
              <div className="mt-4 bg-gray-50 p-2 rounded-lg">
                <img 
                  src={selectedImage.src} 
                  alt={selectedImage.alt} 
                  className="w-full object-contain rounded-lg"
                />
              </div>
              
              <div className="mt-4">
                <h3 className="text-lg font-semibold mb-2 text-gray-800">Features</h3>
                {selectedImage.description.includes("Chat Widget AI") && (
                  <ul className="list-disc pl-5 mb-2 space-y-1 text-gray-600">
                    <li>Custom fields for Name, Phone, Email, & Message</li>
                    <li>Instant response acknowledgment</li>
                    <li>Tag-based lead segmentation</li>
                    <li>Automated team notification for faster follow-ups</li>
                  </ul>
                )}
                {selectedImage.description.includes("Voice AI Agent") && (
                  <ul className="list-disc pl-5 mb-2 space-y-1 text-gray-600">
                    <li>Dynamic voice selection with playback testing</li>
                    <li>Inbound call routing based on caller behavior</li>
                    <li>Language selection & timezone configuration</li>
                    <li>Business-specific branding and voice flow</li>
                  </ul>
                )}
                <p className="font-medium text-gray-600 mt-2">
                  {selectedImage.description.includes("Chat Widget AI") ? 
                    "📲 Result: No lead left unseen. Real-time visibility, faster response times, and enhanced UX." :
                    "🎯 Result: Reduced manual call handling. Smarter qualification before human handoff."}
                </p>
              </div>
            </>
          )}
        </DialogContent>
      </Dialog>

      <div className="mt-8 text-center">
        <h3 className="text-xl font-bold mb-2 text-blue-600">Why It Works:</h3>
        <ul className="inline-block text-left mx-auto mb-6">
          <li className="flex items-start mb-2">
            <span className="text-green-500 mr-2">✓</span>
            <span className="text-black">Converts cold traffic into warm leads via chat</span>
          </li>
          <li className="flex items-start mb-2">
            <span className="text-green-500 mr-2">✓</span>
            <span className="text-black">Filters & qualifies callers using AI before they hit your team</span>
          </li>
          <li className="flex items-start mb-2">
            <span className="text-green-500 mr-2">✓</span>
            <span className="text-black">Scalable for agencies, service providers, and product brands</span>
          </li>
          <li className="flex items-start">
            <span className="text-green-500 mr-2">✓</span>
            <span className="text-black">Available 24/7 – no burnout, no bottlenecks</span>
          </li>
        </ul>
        <p className="text-lg font-medium text-black">Let your AI do the talking.</p>
        <p className="text-gray-600">From live chat to inbound voice—I'll help you build the kind of smart system that never sleeps (but always sells).</p>
      </div>
    </div>
  );
};

export default AIChatbotCarousel;
