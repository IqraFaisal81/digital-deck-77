
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

const EmailMarketingCarousel = () => {
  const emailImages = [
    {
      src: "/lovable-uploads/cd62fc60-1d8d-4724-8529-ab9612ca9c41.png",
      alt: "All Pro Heating & Plumbing email newsletter",
      description: "Property management winter heating newsletter",
    },
    {
      src: "/lovable-uploads/37cac9ff-58d3-4577-aa46-17ca9bc6d57d.png",
      alt: "Grey Matters Brain Training Studio newsletter",
      description: "Health & wellness New Year newsletter",
    },
    {
      src: "/lovable-uploads/c641dd9b-f122-4f6c-989b-d760cfd177a1.png",
      alt: "March On Mission nonprofit email",
      description: "Nonprofit support campaign email",
    },
    {
      src: "/lovable-uploads/e99811cd-24a6-40c0-a28c-b85ada26d3b2.png",
      alt: "Triad Diagnostic Solutions abandoned cart email",
      description: "E-commerce cart recovery email",
    },
    {
      src: "/lovable-uploads/e8bacddf-ae58-40e4-ab9a-679e21ec55db.png",
      alt: "Triad Diagnostic Solutions review request email",
      description: "Customer feedback request email",
    },
  ];

  return (
    <div className="relative w-full max-w-5xl mx-auto px-4 md:px-6">
      <div className="mb-8 text-center">
        <h2 className="text-2xl font-bold mb-2">Email Marketing & Automation</h2>
        <p className="text-gray-600 max-w-3xl mx-auto">
          I craft email campaigns and automations that engage, convert, and retain your audience without sounding like a robot.
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
          {emailImages.map((image, index) => (
            <CarouselItem
              key={index}
              className="md:basis-1/2 lg:basis-1/3 h-full"
            >
              <div className="p-1 h-full">
                <Card className="overflow-hidden border border-gray-200 rounded-lg shadow-md h-full">
                  <CardContent className="p-0">
                    <AspectRatio ratio={9 / 16} className="bg-muted">
                      <img
                        src={image.src}
                        alt={image.alt}
                        className="object-cover w-full h-full"
                      />
                    </AspectRatio>
                    <div className="p-4 bg-white">
                      <p className="text-sm text-gray-600">{image.description}</p>
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
    </div>
  );
};

export default EmailMarketingCarousel;
