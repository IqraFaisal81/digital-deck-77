
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

// Define email marketing campaigns data
const emailCampaigns = [
  {
    id: 1,
    title: "Triad DS – Abandoned Cart Recovery",
    description: "Personalized WooCommerce workflow that recovered lost sales with timely nudges and upsell recommendations",
    image: "/lovable-uploads/5a0ede87-2de2-421a-af7a-5e44aad3886d.png"
  },
  {
    id: 2,
    title: "All Pro – Winter Tips Newsletter",
    description: "Seasonal email with actionable tips for property managers—boosting engagement and brand trust",
    image: "/lovable-uploads/a4cb880c-6522-440b-844c-c9a7dc627fd1.png"
  },
  {
    id: 3,
    title: "Grey Matters Studio – BOGO Email Campaign",
    description: "Wellness-focused campaign with heartfelt CTA, leading to higher open rates and more bookings",
    image: "/lovable-uploads/c7722c5c-bb7d-46ae-a69b-9b2d19dfb790.png"
  },
  {
    id: 4,
    title: "March on Mission – Awareness Email",
    description: "Emotional storytelling + visual design = more awareness, donations, and heartfelt replies",
    image: "/lovable-uploads/a0b4591b-d7e2-4f13-a3fe-710c0f306cbd.png"
  },
  {
    id: 5,
    title: "Email Newsletter Template",
    description: "Clean, responsive newsletter design with clear call-to-action and branded elements",
    image: "/lovable-uploads/bf6e5688-20fd-44ea-a3e9-bb48bbf06da3.png"
  }
];

const EmailMarketingCarousel = () => {
  const [selectedCampaign, setSelectedCampaign] = useState<typeof emailCampaigns[0] | null>(null);
  const [modalOpen, setModalOpen] = useState(false);

  const openCampaignModal = (campaign: typeof emailCampaigns[0]) => {
    setSelectedCampaign(campaign);
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
          {emailCampaigns.map((campaign) => (
            <CarouselItem key={campaign.id} className="basis-full md:basis-1/2 lg:basis-1/3">
              <div 
                className="cursor-pointer h-full"
                onClick={() => openCampaignModal(campaign)}
              >
                <div className="relative h-[200px] md:h-[220px] overflow-hidden rounded-t-lg">
                  <img 
                    src={campaign.image} 
                    alt={campaign.title} 
                    className="w-full h-full object-cover object-top transition-all duration-300 transform hover:scale-110"
                  />
                </div>
                <div className="p-4 bg-black/30">
                  <h4 className="text-lg font-semibold text-white">{campaign.title}</h4>
                  <p className="text-white/70 text-sm mt-1">{campaign.description}</p>
                </div>
              </div>
            </CarouselItem>
          ))}
        </CarouselContent>
        <CarouselPrevious className="left-2 bg-black/50 hover:bg-black/80 border-none" />
        <CarouselNext className="right-2 bg-black/50 hover:bg-black/80 border-none" />
      </Carousel>

      {/* Campaign Modal */}
      <Dialog open={modalOpen} onOpenChange={setModalOpen}>
        <DialogContent className="bg-royal/90 backdrop-blur-xl border border-white/10 text-white max-w-4xl max-h-[90vh] overflow-y-auto">
          {selectedCampaign && (
            <>
              <DialogHeader>
                <DialogTitle className="text-2xl font-bold">{selectedCampaign.title}</DialogTitle>
                <DialogDescription className="text-white/80">
                  {selectedCampaign.description}
                </DialogDescription>
              </DialogHeader>
              
              <div className="mt-4 bg-black/30 p-2 rounded-lg">
                <img 
                  src={selectedCampaign.image} 
                  alt={selectedCampaign.title} 
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

export default EmailMarketingCarousel;
