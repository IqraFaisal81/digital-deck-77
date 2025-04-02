
import { useState } from "react";
import { 
  Carousel, 
  CarouselContent, 
  CarouselItem, 
  CarouselNext, 
  CarouselPrevious 
} from "@/components/ui/carousel";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogDescription } from "@/components/ui/dialog";
import { useCarouselState } from "@/hooks/useCarouselState";

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
  const { currentIndex, count, setCarouselApi } = useCarouselState();

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
        onCreated={setCarouselApi}
      >
        <CarouselContent>
          {ppcAnalytics.map((analytic) => (
            <CarouselItem key={analytic.id} className="basis-full md:basis-1/2 lg:basis-1/3 p-2">
              <div 
                className="cursor-pointer h-full bg-white dark:bg-gray-800 shadow-md rounded-lg border border-gray-200 dark:border-gray-700 overflow-hidden transition-all duration-300 hover:shadow-xl hover:border-blue-200 dark:hover:border-blue-700 group"
                onClick={() => openAnalyticModal(analytic)}
              >
                <div className="relative h-[200px] md:h-[220px] overflow-hidden">
                  <img 
                    src={analytic.image} 
                    alt={analytic.title} 
                    className="w-full h-full object-cover object-top transition-all duration-500 transform group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                </div>
                <div className="p-4 bg-gray-50 dark:bg-gray-800">
                  <h4 className="text-lg font-semibold text-gray-800 dark:text-gray-100 group-hover:text-royal dark:group-hover:text-electric transition-colors">{analytic.title}</h4>
                  <p className="text-gray-600 dark:text-gray-300 text-sm mt-1">{analytic.description}</p>
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

      {/* Analytics Modal */}
      <Dialog open={modalOpen} onOpenChange={setModalOpen}>
        <DialogContent className="bg-white dark:bg-gray-800 max-w-4xl max-h-[90vh] overflow-y-auto">
          {selectedAnalytic && (
            <>
              <DialogHeader>
                <DialogTitle className="text-2xl font-bold text-gray-800 dark:text-gray-100">{selectedAnalytic.title}</DialogTitle>
                <DialogDescription className="text-gray-600 dark:text-gray-300">
                  {selectedAnalytic.description}
                </DialogDescription>
              </DialogHeader>
              
              <div className="mt-4 bg-gray-50 dark:bg-gray-700 p-2 rounded-lg">
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
