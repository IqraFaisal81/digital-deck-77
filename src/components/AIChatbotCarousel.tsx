
import React from "react";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { Card, CardContent } from "@/components/ui/card";
import { AspectRatio } from "@/components/ui/aspect-ratio";

const AIChatbotCarousel = () => {
  const aiImages = [
    {
      src: "/lovable-uploads/62db0c38-4d35-41c2-b6db-6dcc3d85ecac.png",
      alt: "AI Chatbot interface showing customer interaction",
      description: "Chat Widget AI – Real-Time Messaging Automation",
    },
    {
      src: "/lovable-uploads/9bcb292a-8bfc-4d7d-b048-fa75e96bec94.png",
      alt: "Voice AI Agent setup interface",
      description: "Voice AI Agent – Smart Inbound Call Handler",
    },
  ];

  return (
    <div className="relative w-full max-w-5xl mx-auto px-4 md:px-6">
      <div className="mb-8 text-center">
        <h2 className="text-2xl font-bold mb-2">🗣️ Conversational & Voice AI Setup</h2>
        <p className="text-gray-600 max-w-3xl mx-auto">
          Smart conversations, real-time responses, and zero missed opportunities.
          I design and implement Conversational AI and Voice AI Agents that engage users instantly,
          qualify leads, and automate support—powered by cutting-edge tech and human-like flow.
        </p>
      </div>
      
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
              className="md:basis-1/2 lg:basis-1/2 h-full"
            >
              <div className="p-1 h-full">
                <Card className="overflow-hidden border border-gray-200 rounded-lg shadow-md h-full">
                  <CardContent className="p-0">
                    <AspectRatio ratio={16 / 9} className="bg-muted">
                      <img
                        src={image.src}
                        alt={image.alt}
                        className="object-cover w-full h-full"
                      />
                    </AspectRatio>
                    <div className="p-6 bg-white">
                      <h3 className="font-semibold text-lg mb-2">{image.description}</h3>
                      {index === 0 && (
                        <div className="text-sm text-gray-600">
                          <p className="mb-2">Platform: Charley Grey</p>
                          <p className="mb-2">Built an intelligent chat widget that captures user inquiries and key contact details right from the first interaction.</p>
                          <ul className="list-disc pl-5 mb-2 space-y-1">
                            <li>Custom fields for Name, Phone, Email, & Message</li>
                            <li>Instant response acknowledgment</li>
                            <li>Tag-based lead segmentation</li>
                            <li>Automated team notification for faster follow-ups</li>
                          </ul>
                          <p className="font-medium">📲 Result: No lead left unseen. Real-time visibility, faster response times, and enhanced UX.</p>
                        </div>
                      )}
                      {index === 1 && (
                        <div className="text-sm text-gray-600">
                          <p className="mb-2">Platform: Charley Grey</p>
                          <p className="mb-2">Developed and configured a Voice AI Agent to automate inbound call interactions using a natural voice assistant.</p>
                          <ul className="list-disc pl-5 mb-2 space-y-1">
                            <li>Dynamic voice selection with playback testing</li>
                            <li>Inbound call routing based on caller behavior</li>
                            <li>Language selection & timezone configuration</li>
                            <li>Business-specific branding and voice flow</li>
                          </ul>
                          <p className="font-medium">🎯 Result: Reduced manual call handling. Smarter qualification before human handoff.</p>
                        </div>
                      )}
                    </div>
                  </CardContent>
                </Card>
              </div>
            </CarouselItem>
          ))}
        </CarouselContent>
        <CarouselPrevious className="left-0 md:-left-12" />
        <CarouselNext className="right-0 md:-right-12" />
      </Carousel>

      <div className="mt-8 text-center">
        <h3 className="text-xl font-bold mb-2">🔥 Why It Works:</h3>
        <ul className="inline-block text-left mx-auto mb-6">
          <li className="flex items-start mb-2">
            <span className="text-green-500 mr-2">✅</span>
            <span>Converts cold traffic into warm leads via chat</span>
          </li>
          <li className="flex items-start mb-2">
            <span className="text-green-500 mr-2">✅</span>
            <span>Filters & qualifies callers using AI before they hit your team</span>
          </li>
          <li className="flex items-start mb-2">
            <span className="text-green-500 mr-2">✅</span>
            <span>Scalable for agencies, service providers, and product brands</span>
          </li>
          <li className="flex items-start">
            <span className="text-green-500 mr-2">✅</span>
            <span>Available 24/7 – no burnout, no bottlenecks</span>
          </li>
        </ul>
        <p className="text-lg font-medium">Let your AI do the talking.</p>
        <p className="text-gray-600">From live chat to inbound voice—I'll help you build the kind of smart system that never sleeps (but always sells). 😎</p>
      </div>
    </div>
  );
};

export default AIChatbotCarousel;
