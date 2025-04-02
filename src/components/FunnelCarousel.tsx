
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
import { ExternalLink, ZoomIn, Layers, MoveUpRight, ChevronLeft, ChevronRight } from "lucide-react";
import { scrollToServiceSection } from "@/utils/ScrollToServiceUtils";
import { funnels } from '@/data/workflows';

// Helper function to render the icon based on index
const renderIcon = (index: number) => {
  if (index % 2 === 0) {
    return <Layers className="h-5 w-5" />;
  } else {
    return <MoveUpRight className="h-5 w-5" />;
  }
};

const FunnelCarousel = () => {
  const [selectedFunnel, setSelectedFunnel] = useState<typeof funnels[0] | null>(null);
  const [modalOpen, setModalOpen] = useState(false);

  const openFunnelModal = (funnel: typeof funnels[0]) => {
    setSelectedFunnel(funnel);
    setModalOpen(true);
  };

  return (
    <div className="w-full bg-gradient-to-br from-blue-100 to-white dark:from-blue-950/50 dark:to-gray-900 p-6 rounded-2xl border border-blue-100/50 dark:border-blue-900/30 shadow-lg">
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
                className="cursor-pointer h-full bg-white/80 dark:bg-gray-800/80 rounded-xl border border-blue-100 dark:border-blue-900/50 overflow-hidden transition-all duration-300 hover:shadow-xl hover:-translate-y-1 group shadow backdrop-blur-sm"
                onClick={() => openFunnelModal(funnel)}
              >
                <div className="relative h-[180px] md:h-[200px] overflow-hidden">
                  <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-black/70 z-10 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                    <ZoomIn className="h-10 w-10 text-white bg-blue-600/80 p-2 rounded-full" />
                  </div>
                  <img 
                    src={funnel.imageUrl} 
                    alt={funnel.title} 
                    className="w-full h-full object-cover object-top transition-all duration-500 transform group-hover:scale-105"
                  />
                </div>
                <div className="p-4 bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm">
                  <div className="flex items-center mb-2">
                    <div className="bg-gradient-to-br from-blue-600 to-indigo-600 dark:from-electric dark:to-blue-500 p-1.5 rounded-md mr-3 text-white">
                      {renderIcon(index)}
                    </div>
                    <h4 className="text-md font-bold text-gray-800 dark:text-gray-200 line-clamp-1">{funnel.title}</h4>
                  </div>
                  <p className="text-gray-600 dark:text-gray-300 text-sm line-clamp-2">{funnel.description}</p>
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

      {/* Funnel Modal */}
      <Dialog open={modalOpen} onOpenChange={setModalOpen}>
        <DialogContent className="bg-white dark:bg-gray-800 max-w-4xl max-h-[90vh] overflow-y-auto rounded-xl border border-blue-100 dark:border-blue-900/50 shadow-2xl p-0">
          {selectedFunnel && (
            <>
              <DialogHeader className="p-6 border-b border-gray-100 dark:border-gray-700">
                <div className="flex items-center">
                  <div className="bg-gradient-to-br from-blue-600 to-indigo-600 dark:from-electric dark:to-blue-500 p-2 rounded-xl shadow-md mr-4">
                    <Layers className="h-6 w-6 text-white" />
                  </div>
                  <DialogTitle className="text-2xl font-bold text-gray-800 dark:text-gray-200">{selectedFunnel.title}</DialogTitle>
                </div>
                <DialogDescription className="text-gray-600 dark:text-gray-300 text-base mt-2">
                  {selectedFunnel.description}
                </DialogDescription>
              </DialogHeader>
              
              <div className="p-6">
                <div className="bg-gray-50 dark:bg-gray-900/50 p-4 rounded-lg border border-gray-100 dark:border-gray-700">
                  <img 
                    src={selectedFunnel.imageUrl} 
                    alt={selectedFunnel.title} 
                    className="w-full object-contain rounded-lg shadow-inner"
                  />
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
                    className="bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700 text-white"
                    onClick={() => {
                      setModalOpen(false);
                      scrollToServiceSection("funnels");
                    }}
                  >
                    <ExternalLink className="h-4 w-4 mr-2" />
                    View Funnel Services
                  </Button>
                </div>
              </div>
            </>
          )}
        </DialogContent>
      </Dialog>
    </div>
  );
};

export default FunnelCarousel;
