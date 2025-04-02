
import React, { useState } from "react";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogDescription } from "@/components/ui/dialog";
import { useCarouselState } from "@/hooks/useCarouselState";

const EmailMarketingCarousel = () => {
  const emailImages = [
    {
      src: "/lovable-uploads/cd62fc60-1d8d-4724-8529-ab9612ca9c41.png",
      alt: "All Pro Heating & Plumbing email newsletter",
      description: "Property management winter heating newsletter with seasonal maintenance tips and service promotions."
    },
    {
      src: "/lovable-uploads/37cac9ff-58d3-4577-aa46-17ca9bc6d57d.png",
      alt: "Grey Matters Brain Training Studio newsletter",
      description: "Health & wellness New Year newsletter featuring BOGO promotion and wellness tips for mental clarity."
    },
    {
      src: "/lovable-uploads/c641dd9b-f122-4f6c-989b-d760cfd177a1.png",
      alt: "March On Mission nonprofit email",
      description: "Nonprofit support campaign email highlighting community impact stories and donation opportunities."
    },
    {
      src: "/lovable-uploads/e99811cd-24a6-40c0-a28c-b85ada26d3b2.png",
      alt: "Triad Diagnostic Solutions abandoned cart email",
      description: "E-commerce cart recovery email with personalized product reminder and limited-time discount offer."
    },
    {
      src: "/lovable-uploads/e8bacddf-ae58-40e4-ab9a-679e21ec55db.png",
      alt: "Triad Diagnostic Solutions review request email",
      description: "Customer feedback request email designed to boost engagement and collect product reviews."
    },
  ];

  const [selectedImage, setSelectedImage] = useState<typeof emailImages[0] | null>(null);
  const [modalOpen, setModalOpen] = useState(false);
  const { currentIndex, count, setCarouselApi } = useCarouselState();

  const openImageModal = (image: typeof emailImages[0]) => {
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
        setApi={setCarouselApi}
      >
        <CarouselContent>
          {emailImages.map((image, index) => (
            <CarouselItem
              key={index}
              className="basis-full md:basis-1/2 lg:basis-1/3 p-2"
            >
              <div 
                className="cursor-pointer h-full bg-white dark:bg-gray-800 shadow-md rounded-lg border border-gray-200 dark:border-gray-700 overflow-hidden transition-all duration-300 hover:shadow-xl hover:border-blue-200 dark:hover:border-blue-700 group"
                onClick={() => openImageModal(image)}
              >
                <div className="relative h-[200px] md:h-[220px] overflow-hidden">
                  <img
                    src={image.src}
                    alt={image.alt}
                    className="w-full h-full object-cover object-top transition-all duration-500 transform group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                </div>
                <div className="p-4 bg-gray-50 dark:bg-gray-800">
                  <h4 className="text-lg font-semibold text-gray-800 dark:text-gray-100 group-hover:text-royal dark:group-hover:text-electric transition-colors">Email Campaign {index + 1}</h4>
                  <p className="text-gray-600 dark:text-gray-300 text-sm mt-1">{image.description.split(" ").slice(0, 6).join(" ")}...</p>
                </div>
              </div>
            </CarouselItem>
          ))}
        </CarouselContent>
        <CarouselPrevious className="left-2 bg-black/50 hover:bg-black/80 border-none text-white" />
        <CarouselNext className="right-2 bg-black/50 hover:bg-black/80 border-none text-white" />
      </Carousel>

      {/* Carousel Pagination Indicators */}
      <div className="flex justify-center mt-4 gap-1.5">
        {Array.from({ length: count }).map((_, index) => (
          <button
            key={index}
            className={`h-2 rounded-full transition-all ${
              currentIndex === index 
                ? "w-6 bg-royal dark:bg-electric" 
                : "w-2 bg-gray-300 dark:bg-gray-600"
            }`}
            aria-label={`Go to slide ${index + 1}`}
          />
        ))}
      </div>

      {/* Image Modal */}
      <Dialog open={modalOpen} onOpenChange={setModalOpen}>
        <DialogContent className="bg-white dark:bg-gray-800 max-w-4xl max-h-[90vh] overflow-y-auto">
          {selectedImage && (
            <>
              <DialogHeader>
                <DialogTitle className="text-2xl font-bold text-gray-800 dark:text-gray-100">{selectedImage.alt}</DialogTitle>
                <DialogDescription className="text-gray-600 dark:text-gray-300">
                  {selectedImage.description}
                </DialogDescription>
              </DialogHeader>
              
              <div className="mt-4 bg-gray-50 dark:bg-gray-700 p-2 rounded-lg">
                <img 
                  src={selectedImage.src} 
                  alt={selectedImage.alt} 
                  className="w-full object-contain rounded-lg"
                />
              </div>
            </>
          )}
        </DialogContent>
      </Dialog>
    </div>
  );
};

export default EmailMarketingCarousel;
