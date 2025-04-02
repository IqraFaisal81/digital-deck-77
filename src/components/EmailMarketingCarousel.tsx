
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
import { ExternalLink, ZoomIn, Mail, MailPlus, SendHorizonal, ChevronLeft, ChevronRight } from "lucide-react";
import { scrollToServiceSection } from "@/utils/ScrollToServiceUtils";

// Define Email campaigns data
const emailCampaigns = [
  {
    id: 1,
    title: "All Pro Heating & Plumbing Newsletter",
    description: "Property management winter heating newsletter with seasonal maintenance tips and service promotions",
    image: "/lovable-uploads/cd62fc60-1d8d-4724-8529-ab9612ca9c41.png",
    iconName: "mail"
  },
  {
    id: 2,
    title: "Grey Matters Brain Training Newsletter",
    description: "Health & wellness New Year newsletter featuring BOGO promotion and wellness tips for mental clarity",
    image: "/lovable-uploads/37cac9ff-58d3-4577-aa46-17ca9bc6d57d.png",
    iconName: "mailPlus"
  },
  {
    id: 3,
    title: "March On Mission Nonprofit Email",
    description: "Nonprofit support campaign email highlighting community impact stories and donation opportunities",
    image: "/lovable-uploads/c641dd9b-f122-4f6c-989b-d760cfd177a1.png",
    iconName: "mail"
  },
  {
    id: 4,
    title: "Triad DS Abandoned Cart Email",
    description: "E-commerce cart recovery email with personalized product reminder and limited-time discount offer",
    image: "/lovable-uploads/e99811cd-24a6-40c0-a28c-b85ada26d3b2.png",
    iconName: "sendHorizonal"
  },
  {
    id: 5,
    title: "Triad DS Review Request Email",
    description: "Customer feedback request email designed to boost engagement and collect product reviews",
    image: "/lovable-uploads/e8bacddf-ae58-40e4-ab9a-679e21ec55db.png",
    iconName: "mail"
  }
];

// Helper function to render the icon based on name
const renderIcon = (iconName: string) => {
  switch (iconName) {
    case "mail":
      return <Mail className="h-5 w-5" />;
    case "mailPlus":
      return <MailPlus className="h-5 w-5" />;
    case "sendHorizonal":
      return <SendHorizonal className="h-5 w-5" />;
    default:
      return <Mail className="h-5 w-5" />;
  }
};

const EmailMarketingCarousel = () => {
  const [selectedCampaign, setSelectedCampaign] = useState<typeof emailCampaigns[0] | null>(null);
  const [modalOpen, setModalOpen] = useState(false);

  const openCampaignModal = (campaign: typeof emailCampaigns[0]) => {
    setSelectedCampaign(campaign);
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
          {emailCampaigns.map((campaign) => (
            <CarouselItem key={campaign.id} className="basis-full md:basis-1/2 lg:basis-1/3 p-2">
              <div 
                className="cursor-pointer h-full bg-white dark:bg-gray-800 rounded-xl border border-blue-100 dark:border-blue-900/50 overflow-hidden transition-all duration-300 hover:shadow-xl hover:-translate-y-1 group shadow"
                onClick={() => openCampaignModal(campaign)}
              >
                <div className="relative h-[180px] md:h-[200px] overflow-hidden">
                  <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-black/70 z-10 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                    <ZoomIn className="h-10 w-10 text-white bg-blue-600/80 p-2 rounded-full" />
                  </div>
                  <img 
                    src={campaign.image} 
                    alt={campaign.title} 
                    className="w-full h-full object-cover object-top transition-all duration-500 transform group-hover:scale-105"
                  />
                </div>
                <div className="p-4 bg-white dark:bg-gray-800">
                  <div className="flex items-center mb-2">
                    <div className="bg-blue-600 dark:bg-blue-500 p-1.5 rounded-md mr-3 text-white">
                      {renderIcon(campaign.iconName)}
                    </div>
                    <h4 className="text-md font-bold text-gray-800 dark:text-gray-200 line-clamp-1">{campaign.title}</h4>
                  </div>
                  <p className="text-gray-600 dark:text-gray-300 text-sm line-clamp-2">{campaign.description}</p>
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

      {/* Campaign Modal */}
      <Dialog open={modalOpen} onOpenChange={setModalOpen}>
        <DialogContent className="bg-white dark:bg-gray-800 max-w-4xl max-h-[90vh] overflow-y-auto rounded-xl border border-blue-100 dark:border-blue-900/50 shadow-2xl p-0">
          {selectedCampaign && (
            <>
              <DialogHeader className="p-6 border-b border-gray-100 dark:border-gray-700">
                <div className="flex items-center">
                  <div className="bg-blue-600 dark:bg-blue-500 p-2 rounded-md mr-3 text-white">
                    {renderIcon(selectedCampaign.iconName)}
                  </div>
                  <DialogTitle className="text-2xl font-bold text-gray-800 dark:text-gray-200">{selectedCampaign.title}</DialogTitle>
                </div>
                <DialogDescription className="text-gray-600 dark:text-gray-300 text-base mt-2">
                  {selectedCampaign.description}
                </DialogDescription>
              </DialogHeader>
              
              <div className="p-6">
                <div className="bg-gray-50 dark:bg-gray-900/50 p-4 rounded-lg border border-gray-100 dark:border-gray-700">
                  <img 
                    src={selectedCampaign.image} 
                    alt={selectedCampaign.title} 
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
                      scrollToServiceSection("email-marketing");
                    }}
                  >
                    <ExternalLink className="h-4 w-4 mr-2" />
                    View Email Services
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

export default EmailMarketingCarousel;
