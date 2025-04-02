
import { 
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious
} from "@/components/ui/carousel";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogDescription } from "@/components/ui/dialog";
import { useState } from "react";
import { useCarouselState } from "@/hooks/useCarouselState";

const SEOAuditCarousel = () => {
  // Array of SEO dashboard images
  const seoImages = [
    {
      src: "/lovable-uploads/3db53d79-7906-4ee7-b2a9-2a28b2c5212a.png",
      alt: "SEO Dashboard Example 1",
      description: "Technical site audit dashboard with performance metrics"
    },
    {
      src: "/lovable-uploads/5a0ede87-2de2-421a-af7a-5e44aad3886d.png",
      alt: "SEO Dashboard Example 2",
      description: "Keyword ranking and content gap analysis"
    },
    {
      src: "/lovable-uploads/9fef311f-0699-4e7c-b2d1-918ce9e8e960.png",
      alt: "SEO Dashboard Example 3",
      description: "Backlink profile and domain authority metrics"
    },
    {
      src: "/lovable-uploads/fc1fe9d9-754d-4c31-a3fb-7c9d18da2df4.png",
      alt: "SEO Dashboard Example 4",
      description: "Organic traffic growth and conversion analytics"
    },
    {
      src: "/lovable-uploads/66fbb743-7c92-4338-9760-c6e38c8e404f.png",
      alt: "SEO Dashboard Example 5",
      description: "Competitor comparison and search visibility"
    }
  ];

  const [selectedImage, setSelectedImage] = useState<typeof seoImages[0] | null>(null);
  const [modalOpen, setModalOpen] = useState(false);
  const { currentIndex, count, setCarouselApi } = useCarouselState();

  const openImageModal = (image: typeof seoImages[0]) => {
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
        onCreated={setCarouselApi}
      >
        <CarouselContent>
          {seoImages.map((image, index) => (
            <CarouselItem key={index} className="basis-full md:basis-1/2 lg:basis-1/3 p-2">
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
                  <h4 className="text-lg font-semibold text-gray-800 dark:text-gray-100 group-hover:text-royal dark:group-hover:text-electric transition-colors">SEO Dashboard {index + 1}</h4>
                  <p className="text-gray-600 dark:text-gray-300 text-sm mt-1">{image.description}</p>
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
                <DialogTitle className="text-2xl font-bold text-gray-800 dark:text-gray-100">SEO Dashboard</DialogTitle>
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

export default SEOAuditCarousel;
