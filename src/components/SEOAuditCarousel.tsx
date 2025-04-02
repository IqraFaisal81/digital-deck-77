
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
import { ExternalLink, ZoomIn, LineChart, Search, ChevronLeft, ChevronRight } from "lucide-react";
import { scrollToServiceSection } from "@/utils/ScrollToServiceUtils";

// Array of SEO dashboard images
const seoImages = [
  {
    id: 1,
    title: "Technical SEO Audit Dashboard",
    description: "Technical site audit dashboard with performance metrics",
    image: "/lovable-uploads/3db53d79-7906-4ee7-b2a9-2a28b2c5212a.png",
    iconName: "lineChart"
  },
  {
    id: 2,
    title: "Keyword Gap Analysis",
    description: "Keyword ranking and content gap analysis",
    image: "/lovable-uploads/5a0ede87-2de2-421a-af7a-5e44aad3886d.png",
    iconName: "search"
  },
  {
    id: 3,
    title: "Backlink Profile Report",
    description: "Backlink profile and domain authority metrics",
    image: "/lovable-uploads/9fef311f-0699-4e7c-b2d1-918ce9e8e960.png",
    iconName: "lineChart"
  },
  {
    id: 4,
    title: "Organic Traffic Growth",
    description: "Organic traffic growth and conversion analytics",
    image: "/lovable-uploads/fc1fe9d9-754d-4c31-a3fb-7c9d18da2df4.png",
    iconName: "lineChart"
  },
  {
    id: 5,
    title: "Competitor SEO Comparison",
    description: "Competitor comparison and search visibility",
    image: "/lovable-uploads/66fbb743-7c92-4338-9760-c6e38c8e404f.png",
    iconName: "search"
  }
];

// Helper function to render the icon based on name
const renderIcon = (iconName: string) => {
  switch (iconName) {
    case "lineChart":
      return <LineChart className="h-5 w-5" />;
    case "search":
      return <Search className="h-5 w-5" />;
    default:
      return <LineChart className="h-5 w-5" />;
  }
};

const SEOAuditCarousel = () => {
  const [selectedImage, setSelectedImage] = useState<typeof seoImages[0] | null>(null);
  const [modalOpen, setModalOpen] = useState(false);

  const openImageModal = (image: typeof seoImages[0]) => {
    setSelectedImage(image);
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
          {seoImages.map((item) => (
            <CarouselItem key={item.id} className="basis-full md:basis-1/2 lg:basis-1/3 p-2">
              <div 
                className="cursor-pointer h-full bg-white dark:bg-gray-800 rounded-xl border border-blue-100 dark:border-blue-900/50 overflow-hidden transition-all duration-300 hover:shadow-xl hover:-translate-y-1 group shadow"
                onClick={() => openImageModal(item)}
              >
                <div className="relative h-[180px] md:h-[200px] overflow-hidden">
                  <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-black/70 z-10 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                    <ZoomIn className="h-10 w-10 text-white bg-blue-600/80 p-2 rounded-full" />
                  </div>
                  <img 
                    src={item.image} 
                    alt={item.title} 
                    className="w-full h-full object-cover object-top transition-all duration-500 transform group-hover:scale-105"
                  />
                </div>
                <div className="p-4 bg-white dark:bg-gray-800">
                  <div className="flex items-center mb-2">
                    <div className="bg-blue-600 dark:bg-blue-500 p-1.5 rounded-md mr-3 text-white">
                      {renderIcon(item.iconName)}
                    </div>
                    <h4 className="text-md font-bold text-gray-800 dark:text-gray-200 line-clamp-1">{item.title}</h4>
                  </div>
                  <p className="text-gray-600 dark:text-gray-300 text-sm line-clamp-2">{item.description}</p>
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

      {/* Image Modal */}
      <Dialog open={modalOpen} onOpenChange={setModalOpen}>
        <DialogContent className="bg-white dark:bg-gray-800 max-w-4xl max-h-[90vh] overflow-y-auto rounded-xl border border-blue-100 dark:border-blue-900/50 shadow-2xl p-0">
          {selectedImage && (
            <>
              <DialogHeader className="p-6 border-b border-gray-100 dark:border-gray-700">
                <div className="flex items-center">
                  <div className="bg-blue-600 dark:bg-blue-500 p-2 rounded-md mr-3 text-white">
                    {renderIcon(selectedImage.iconName)}
                  </div>
                  <DialogTitle className="text-2xl font-bold text-gray-800 dark:text-gray-200">{selectedImage.title}</DialogTitle>
                </div>
                <DialogDescription className="text-gray-600 dark:text-gray-300 text-base mt-2">
                  {selectedImage.description}
                </DialogDescription>
              </DialogHeader>
              
              <div className="p-6">
                <div className="bg-gray-50 dark:bg-gray-900/50 p-4 rounded-lg border border-gray-100 dark:border-gray-700">
                  <img 
                    src={selectedImage.image} 
                    alt={selectedImage.title} 
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
                      scrollToServiceSection("seo-audit");
                    }}
                  >
                    <ExternalLink className="h-4 w-4 mr-2" />
                    View SEO Services
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

export default SEOAuditCarousel;
