
import React, { useState } from "react";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogDescription } from "@/components/ui/dialog";

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
      >
        <CarouselContent>
          {emailImages.map((image, index) => (
            <CarouselItem
              key={index}
              className="basis-full md:basis-1/2 lg:basis-1/3 p-2"
            >
              <div 
                className="cursor-pointer h-full bg-white shadow-md rounded-lg border border-gray-200 overflow-hidden transition-all duration-300 hover:shadow-lg"
                onClick={() => openImageModal(image)}
              >
                <div className="relative h-[200px] md:h-[220px] overflow-hidden">
                  <img
                    src={image.src}
                    alt={image.alt}
                    className="w-full h-full object-cover object-top transition-all duration-300 transform hover:scale-110"
                  />
                </div>
                <div className="p-4 bg-gray-50">
                  <h4 className="text-lg font-semibold text-black">Email Campaign {index + 1}</h4>
                  <p className="text-gray-800 text-sm mt-1">{image.description.split(" ").slice(0, 6).join(" ")}...</p>
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
                  {selectedImage.description}
                </DialogDescription>
              </DialogHeader>
              
              <div className="mt-4 bg-gray-50 p-2 rounded-lg">
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
