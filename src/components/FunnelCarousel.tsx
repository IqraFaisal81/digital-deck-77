
import { useState } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { 
  Carousel, 
  CarouselContent, 
  CarouselItem, 
  CarouselNext, 
  CarouselPrevious 
} from "@/components/ui/carousel";
import { Button } from "@/components/ui/button";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogDescription } from "@/components/ui/dialog";

// Define funnels data
const funnels = [
  {
    id: 1,
    title: "All Pro - Refrigerant Change Consultation",
    description: "Service funnel with clean CTAs and friction-free booking path",
    image: "/lovable-uploads/2d5f250d-f776-46fd-8830-3db242d4e52d.png",
    url: "https://go.callallproindy.com/all-pro---pimp-my-ride"
  },
  {
    id: 2,
    title: "Triad Diagnostic - Autel Black Friday",
    description: "E-commerce funnel with product listings and checkout flow",
    image: "/lovable-uploads/bc480130-3453-4ec2-b46d-a946e98fb220.png",
    url: "https://chuck.triad-ds.com/triads-autel-black-friday"
  },
  {
    id: 3,
    title: "Mike Greene Coaching",
    description: "Client mentoring and booking funnel with qualification flow",
    image: "/lovable-uploads/00166fd4-fe91-46af-afd4-15c78b573a88.png",
    url: "https://mikegreenecoaching.co.uk/mentoring-with-mike-greene"
  }
];

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
          {funnels.map((funnel) => (
            <CarouselItem key={funnel.id} className="basis-full md:basis-1/2 lg:basis-1/3 p-2">
              <div 
                className="cursor-pointer h-full bg-white shadow-md rounded-lg border border-gray-200 overflow-hidden transition-all duration-300 hover:shadow-lg"
                onClick={() => openFunnelModal(funnel)}
              >
                <div className="relative h-[200px] md:h-[220px] overflow-hidden">
                  <img 
                    src={funnel.image} 
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
                  src={selectedFunnel.image} 
                  alt={selectedFunnel.title} 
                  className="w-full object-contain rounded-lg"
                />
              </div>
              
              <div className="mt-4 flex justify-end">
                <Button 
                  asChild
                  className="bg-electric hover:bg-electric/80"
                >
                  <a 
                    href={selectedFunnel.url} 
                    target="_blank" 
                    rel="noopener noreferrer"
                  >
                    View Live Funnel
                  </a>
                </Button>
              </div>
            </>
          )}
        </DialogContent>
      </Dialog>
    </div>
  );
};

export default FunnelCarousel;
