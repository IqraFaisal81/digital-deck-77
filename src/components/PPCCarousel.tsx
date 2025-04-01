
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

// Define PPC campaigns data
const ppcAnalytics = [
  {
    id: 1,
    title: "Google Tag Manager Setup",
    description: "Custom configured tags and triggers for tracking form submissions, call tracking, and live chat clicks",
    image: "/lovable-uploads/8298ac25-72ea-45df-8b02-fec826aa557c.png"
  },
  {
    id: 2,
    title: "Google Ads Campaign Performance",
    description: "Strategic campaign management with metrics showing 904 clicks, 104K impressions, and 26 conversions",
    image: "/lovable-uploads/da16c894-2606-4ce0-ac83-3e381213d0bf.png"
  },
  {
    id: 3,
    title: "Call All Pro - Search Console Results",
    description: "Performance metrics showing 274 clicks, 79.4K impressions with 0.3% CTR and position improvements",
    image: "/lovable-uploads/491f73f1-1501-4479-9a02-f57f1d22b855.png"
  },
  {
    id: 4,
    title: "Cojali USA - Search Console Results",
    description: "Achieved 2.42K clicks, 67K impressions with 3.6% CTR and position 17.5 improvements",
    image: "/lovable-uploads/b0916f77-aa86-4923-b3f5-8a877a43ba74.png"
  },
  {
    id: 5,
    title: "Grey Matters - Search Console Results",
    description: "SEO strategy results showing 3.57K clicks, 223K impressions with position improvements",
    image: "/lovable-uploads/2c828478-38e1-490e-b777-76e3f980ee9f.png"
  },
  {
    id: 6,
    title: "Office H2O - Web Traffic Dashboard",
    description: "Custom Looker Studio dashboard showing user metrics and engagement analytics",
    image: "/lovable-uploads/42916a80-9856-4ead-b0e9-cde8f4d44292.png"
  },
  {
    id: 7,
    title: "Office H2O - Campaign Performance",
    description: "Comprehensive campaign metrics showing CTR, conversion rates, and cost analysis",
    image: "/lovable-uploads/35f482ac-5ef5-4d4e-bb5b-83bb739c6f81.png"
  },
  {
    id: 8,
    title: "E-commerce Campaign Analytics",
    description: "Performance breakdown of multiple e-commerce campaigns showing ROI and conversion metrics",
    image: "/lovable-uploads/3f352506-2af3-4f2c-ad84-db6e5eabdf5b.png"
  }
];

const PPCCarousel = () => {
  const [selectedAnalytic, setSelectedAnalytic] = useState<typeof ppcAnalytics[0] | null>(null);
  const [modalOpen, setModalOpen] = useState(false);

  const openAnalyticModal = (analytic: typeof ppcAnalytics[0]) => {
    setSelectedAnalytic(analytic);
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
          {ppcAnalytics.map((analytic) => (
            <CarouselItem key={analytic.id} className="basis-full md:basis-1/2 lg:basis-1/3">
              <div 
                className="cursor-pointer h-full bg-white shadow-md rounded-lg border border-gray-200 overflow-hidden transition-all duration-300 hover:shadow-lg"
                onClick={() => openAnalyticModal(analytic)}
              >
                <div className="relative h-[200px] md:h-[220px] overflow-hidden">
                  <img 
                    src={analytic.image} 
                    alt={analytic.title} 
                    className="w-full h-full object-cover object-top transition-all duration-300 transform hover:scale-110"
                  />
                </div>
                <div className="p-4 bg-gray-50">
                  <h4 className="text-lg font-semibold text-black">{analytic.title}</h4>
                  <p className="text-gray-800 text-sm mt-1">{analytic.description}</p>
                </div>
              </div>
            </CarouselItem>
          ))}
        </CarouselContent>
        <CarouselPrevious className="left-2 bg-black/50 hover:bg-black/80 border-none" />
        <CarouselNext className="right-2 bg-black/50 hover:bg-black/80 border-none" />
      </Carousel>

      {/* Analytics Modal */}
      <Dialog open={modalOpen} onOpenChange={setModalOpen}>
        <DialogContent className="bg-white max-w-4xl max-h-[90vh] overflow-y-auto">
          {selectedAnalytic && (
            <>
              <DialogHeader>
                <DialogTitle className="text-2xl font-bold text-gray-800">{selectedAnalytic.title}</DialogTitle>
                <DialogDescription className="text-gray-600">
                  {selectedAnalytic.description}
                </DialogDescription>
              </DialogHeader>
              
              <div className="mt-4 bg-gray-50 p-2 rounded-lg">
                <img 
                  src={selectedAnalytic.image} 
                  alt={selectedAnalytic.title} 
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

export default PPCCarousel;
