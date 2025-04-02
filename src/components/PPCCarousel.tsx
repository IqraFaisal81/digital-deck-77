
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
import { ExternalLink, ZoomIn, LineChart, BarChart3, PieChart, ChevronLeft, ChevronRight } from "lucide-react";
import { scrollToServiceSection } from "@/utils/ScrollToServiceUtils";

// Define PPC campaigns data
const ppcAnalytics = [
  {
    id: 1,
    title: "Google Tag Manager Setup",
    description: "Custom configured tags and triggers for tracking form submissions, call tracking, and live chat clicks",
    image: "/lovable-uploads/8298ac25-72ea-45df-8b02-fec826aa557c.png",
    icon: <LineChart className="h-5 w-5" />
  },
  {
    id: 2,
    title: "Google Ads Campaign Performance",
    description: "Strategic campaign management with metrics showing 904 clicks, 104K impressions, and 26 conversions",
    image: "/lovable-uploads/da16c894-2606-4ce0-ac83-3e381213d0bf.png",
    icon: <BarChart3 className="h-5 w-5" />
  },
  {
    id: 3,
    title: "Call All Pro - Search Console Results",
    description: "Performance metrics showing 274 clicks, 79.4K impressions with 0.3% CTR and position improvements",
    image: "/lovable-uploads/491f73f1-1501-4479-9a02-f57f1d22b855.png",
    icon: <LineChart className="h-5 w-5" />
  },
  {
    id: 4,
    title: "Cojali USA - Search Console Results",
    description: "Achieved 2.42K clicks, 67K impressions with 3.6% CTR and position 17.5 improvements",
    image: "/lovable-uploads/b0916f77-aa86-4923-b3f5-8a877a43ba74.png",
    icon: <BarChart3 className="h-5 w-5" />
  },
  {
    id: 5,
    title: "Grey Matters - Search Console Results",
    description: "SEO strategy results showing 3.57K clicks, 223K impressions with position improvements",
    image: "/lovable-uploads/2c828478-38e1-490e-b777-76e3f980ee9f.png",
    icon: <LineChart className="h-5 w-5" />
  },
  {
    id: 6,
    title: "Office H2O - Web Traffic Dashboard",
    description: "Custom Looker Studio dashboard showing user metrics and engagement analytics",
    image: "/lovable-uploads/42916a80-9856-4ead-b0e9-cde8f4d44292.png",
    icon: <PieChart className="h-5 w-5" />
  },
  {
    id: 7,
    title: "Office H2O - Campaign Performance",
    description: "Comprehensive campaign metrics showing CTR, conversion rates, and cost analysis",
    image: "/lovable-uploads/35f482ac-5ef5-4d4e-bb5b-83bb739c6f81.png",
    icon: <BarChart3 className="h-5 w-5" />
  },
  {
    id: 8,
    title: "E-commerce Campaign Analytics",
    description: "Performance breakdown of multiple e-commerce campaigns showing ROI and conversion metrics",
    image: "/lovable-uploads/3f352506-2af3-4f2c-ad84-db6e5eabdf5b.png",
    icon: <PieChart className="h-5 w-5" />
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
    <div className="w-full bg-gradient-to-br from-blue-50 via-white to-blue-50 dark:from-gray-900 dark:via-gray-800 dark:to-gray-900 p-6 rounded-2xl border border-blue-100/50 dark:border-blue-900/30 shadow-lg">
      <Carousel
        opts={{
          align: "start",
          loop: true,
        }}
        className="w-full"
      >
        <CarouselContent>
          {ppcAnalytics.map((analytic) => (
            <CarouselItem key={analytic.id} className="basis-full md:basis-1/2 lg:basis-1/3 p-2">
              <div 
                className="cursor-pointer h-full bg-white dark:bg-gray-800 rounded-xl border border-blue-100 dark:border-blue-900/50 overflow-hidden transition-all duration-300 hover:shadow-xl hover:-translate-y-1 group shadow"
                onClick={() => openAnalyticModal(analytic)}
              >
                <div className="relative h-[180px] md:h-[200px] overflow-hidden">
                  <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-black/70 z-10 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                    <ZoomIn className="h-10 w-10 text-white bg-blue-600/80 p-2 rounded-full" />
                  </div>
                  <img 
                    src={analytic.image} 
                    alt={analytic.title} 
                    className="w-full h-full object-cover object-top transition-all duration-500 transform group-hover:scale-105"
                  />
                </div>
                <div className="p-4 bg-white dark:bg-gray-800">
                  <div className="flex items-center mb-2">
                    <div className="bg-blue-600 dark:bg-blue-500 p-1.5 rounded-md mr-3 text-white">
                      {analytic.icon}
                    </div>
                    <h4 className="text-md font-bold text-gray-800 dark:text-gray-200 line-clamp-1">{analytic.title}</h4>
                  </div>
                  <p className="text-gray-600 dark:text-gray-300 text-sm line-clamp-2">{analytic.description}</p>
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

      {/* Analytics Modal */}
      <Dialog open={modalOpen} onOpenChange={setModalOpen}>
        <DialogContent className="bg-white dark:bg-gray-800 max-w-4xl max-h-[90vh] overflow-y-auto rounded-xl border border-blue-100 dark:border-blue-900/50 shadow-2xl p-0">
          {selectedAnalytic && (
            <>
              <DialogHeader className="p-6 border-b border-gray-100 dark:border-gray-700">
                <div className="flex items-center">
                  <div className="bg-blue-600 dark:bg-blue-500 p-2 rounded-md mr-3 text-white">
                    {selectedAnalytic.icon}
                  </div>
                  <DialogTitle className="text-2xl font-bold text-gray-800 dark:text-gray-200">{selectedAnalytic.title}</DialogTitle>
                </div>
                <DialogDescription className="text-gray-600 dark:text-gray-300 text-base mt-2">
                  {selectedAnalytic.description}
                </DialogDescription>
              </DialogHeader>
              
              <div className="p-6">
                <div className="bg-gray-50 dark:bg-gray-900/50 p-4 rounded-lg border border-gray-100 dark:border-gray-700">
                  <img 
                    src={selectedAnalytic.image} 
                    alt={selectedAnalytic.title} 
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
                    className="bg-blue-600 hover:bg-blue-700 text-white"
                    onClick={() => {
                      setModalOpen(false);
                      scrollToServiceSection("ppc-analytics");
                    }}
                  >
                    <ExternalLink className="h-4 w-4 mr-2" />
                    View PPC Services
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

export default PPCCarousel;
