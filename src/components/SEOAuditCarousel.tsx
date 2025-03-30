
import { 
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious
} from "@/components/ui/carousel";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogDescription } from "@/components/ui/dialog";
import { useState } from "react";

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
      >
        <CarouselContent>
          {seoImages.map((image, index) => (
            <CarouselItem key={index} className="basis-full md:basis-1/2 lg:basis-1/3 h-full">
              <div 
                className="cursor-pointer h-full"
                onClick={() => openImageModal(image)}
              >
                <div className="relative h-[200px] md:h-[220px] overflow-hidden rounded-t-lg">
                  <img 
                    src={image.src} 
                    alt={image.alt} 
                    className="w-full h-full object-cover object-top transition-all duration-300 transform hover:scale-110" 
                  />
                </div>
                <div className="p-4 bg-black/30">
                  <h4 className="text-lg font-semibold text-white">SEO Dashboard {index + 1}</h4>
                  <p className="text-white/70 text-sm mt-1">{image.description}</p>
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
        <DialogContent className="bg-royal/90 backdrop-blur-xl border border-white/10 text-white max-w-4xl max-h-[90vh] overflow-y-auto">
          {selectedImage && (
            <>
              <DialogHeader>
                <DialogTitle className="text-2xl font-bold">SEO Dashboard</DialogTitle>
                <DialogDescription className="text-white/80">
                  {selectedImage.description}
                </DialogDescription>
              </DialogHeader>
              
              <div className="mt-4 bg-black/30 p-2 rounded-lg">
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
