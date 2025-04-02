
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
import { ExternalLink } from "lucide-react";
import { funnels } from "@/data/workflows";
import { useCarouselState } from "@/hooks/useCarouselState";

const FunnelCarousel = () => {
  const [selectedFunnel, setSelectedFunnel] = useState<typeof funnels[0] | null>(null);
  const [modalOpen, setModalOpen] = useState(false);
  const { currentIndex, count, setCarouselApi } = useCarouselState();

  const openFunnelModal = (funnel: typeof funnels[0]) => {
    setSelectedFunnel(funnel);
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
          {funnels.map((funnel, index) => (
            <CarouselItem key={index} className="basis-full md:basis-1/2 lg:basis-1/3 p-2">
              <div 
                className="cursor-pointer h-full bg-white dark:bg-gray-800 shadow-md rounded-lg border border-gray-200 dark:border-gray-700 overflow-hidden transition-all duration-300 hover:shadow-xl hover:border-blue-200 dark:hover:border-blue-700 group"
                onClick={() => openFunnelModal(funnel)}
              >
                <div className="relative h-[200px] md:h-[220px] overflow-hidden">
                  <img 
                    src={funnel.imageUrl} 
                    alt={funnel.title} 
                    className="w-full h-full object-cover object-top transition-all duration-500 transform group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                </div>
                <div className="p-4 bg-gray-50 dark:bg-gray-800">
                  <h4 className="text-lg font-semibold text-gray-800 dark:text-gray-100 group-hover:text-royal dark:group-hover:text-electric transition-colors">{funnel.title}</h4>
                  <p className="text-gray-600 dark:text-gray-300 text-sm mt-1">{funnel.description}</p>
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

      {/* Funnel Modal */}
      <Dialog open={modalOpen} onOpenChange={setModalOpen}>
        <DialogContent className="bg-white dark:bg-gray-800 max-w-4xl max-h-[90vh] overflow-y-auto">
          {selectedFunnel && (
            <>
              <DialogHeader>
                <DialogTitle className="text-2xl font-bold text-gray-800 dark:text-gray-100">{selectedFunnel.title}</DialogTitle>
                <DialogDescription className="text-gray-600 dark:text-gray-300">
                  {selectedFunnel.description}
                </DialogDescription>
              </DialogHeader>
              
              <div className="mt-4 bg-gray-50 dark:bg-gray-700 p-2 rounded-lg">
                <img 
                  src={selectedFunnel.imageUrl} 
                  alt={selectedFunnel.title} 
                  className="w-full object-contain rounded-lg"
                />
              </div>
              
              <div className="mt-6 flex justify-end">
                <a 
                  href={selectedFunnel.url} 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="inline-flex items-center px-4 py-2 bg-gradient-to-r from-royal to-blue-600 dark:from-electric dark:to-royal text-white rounded-md hover:opacity-90 transition-opacity"
                >
                  <ExternalLink size={16} className="mr-2" />
                  Visit Funnel
                </a>
              </div>
            </>
          )}
        </DialogContent>
      </Dialog>
    </div>
  );
};

export default FunnelCarousel;
