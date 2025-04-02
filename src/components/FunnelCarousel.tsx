
import { useState } from "react";
import { 
  Carousel, 
  CarouselContent, 
  CarouselItem, 
  CarouselNext, 
  CarouselPrevious 
} from "@/components/ui/carousel";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogDescription } from "@/components/ui/dialog";
import { funnels } from "@/data/workflows";

const FunnelCarousel = () => {
  const [selectedFunnel, setSelectedFunnel] = useState<typeof funnels[0] | null>(null);
  const [modalOpen, setModalOpen] = useState(false);

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
      >
        <CarouselContent>
          {funnels.map((funnel, index) => (
            <CarouselItem key={index} className="basis-full md:basis-1/2 lg:basis-1/3 p-2">
              <div 
                className="cursor-pointer h-full bg-white shadow-md rounded-lg border border-gray-200 overflow-hidden transition-all duration-300 hover:shadow-lg"
                onClick={() => openFunnelModal(funnel)}
              >
                <div className="relative h-[200px] md:h-[220px] overflow-hidden">
                  <img 
                    src={funnel.imageUrl} 
                    alt={funnel.title} 
                    className="w-full h-full object-cover object-top transition-all duration-300 transform hover:scale-110"
                  />
                </div>
                <div className="p-4 bg-gray-50">
                  <h4 className="text-lg font-semibold text-black">{funnel.title}</h4>
                  <p className="text-gray-800 text-sm mt-1">{funnel.description}</p>
                </div>
              </div>
            </CarouselItem>
          ))}
        </CarouselContent>
        <CarouselPrevious className="left-2 bg-black/50 hover:bg-black/80 border-none" />
        <CarouselNext className="right-2 bg-black/50 hover:bg-black/80 border-none" />
      </Carousel>

      {/* Funnel Modal */}
      <Dialog open={modalOpen} onOpenChange={setModalOpen}>
        <DialogContent className="bg-white max-w-4xl max-h-[90vh] overflow-y-auto">
          {selectedFunnel && (
            <>
              <DialogHeader>
                <DialogTitle className="text-2xl font-bold text-gray-800">{selectedFunnel.title}</DialogTitle>
                <DialogDescription className="text-gray-600">
                  {selectedFunnel.description}
                </DialogDescription>
              </DialogHeader>
              
              <div className="mt-4 bg-gray-50 p-2 rounded-lg">
                <img 
                  src={selectedFunnel.imageUrl} 
                  alt={selectedFunnel.title} 
                  className="w-full object-contain rounded-lg"
                />
              </div>
              
              <div className="mt-4 flex justify-end">
                <a 
                  href={selectedFunnel.url} 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="inline-flex items-center px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 transition-colors"
                >
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
