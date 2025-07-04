
import { 
  Carousel, 
  CarouselContent, 
  CarouselItem, 
  CarouselNext, 
  CarouselPrevious 
} from "@/components/ui/carousel";
import { ArrowRight, Calendar } from "lucide-react";
import { services } from "@/data/services";
import { Button } from "@/components/ui/button";
import { useCarouselState } from "@/hooks/useCarouselState";
import CarouselPagination from "./project-highlights/CarouselPagination";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "./ui/card";
import { useNavigate } from "react-router-dom";

interface ServiceCarouselProps {
  visibleSection: string | null;
  scrollToSection: (sectionId: string | null) => void;
}

const ServiceCarousel = ({ visibleSection, scrollToSection }: ServiceCarouselProps) => {
  const { carouselApi, setCarouselApi, currentIndex } = useCarouselState();
  const navigate = useNavigate();

  const handleServiceClick = (service: any) => {
    if (service.sectionId) {
      // Map section IDs to route paths
      const routeMap: { [key: string]: string } = {
        'workflows': '/services/workflows',
        'funnels': '/services/funnels',
        'email-marketing': '/services/email-marketing',
        'seo-audits': '/services/seo-audits',
        'ai-chatbot': '/services/ai-chatbot'
      };
      
      const route = routeMap[service.sectionId];
      if (route) {
        navigate(route);
      }
    }
  };
  
  return (
    <div className="w-full mt-8">
      <Carousel
        opts={{
          align: "start",
          loop: true,
        }}
        className="w-full"
        setApi={setCarouselApi}
      >
        <CarouselContent>
          {services && services.map((service) => (
            <CarouselItem 
              key={service.id} 
              className="basis-full sm:basis-1/2 md:basis-1/3 lg:basis-1/3 p-2"
            >
              <Card 
                className={`h-full flex flex-col transition-all duration-300 hover:shadow-xl hover:scale-[1.02] overflow-hidden ${
                  service.sectionId ? 'cursor-pointer hover:bg-blue-50 dark:hover:bg-blue-900/30' : ''
                }`}
                onClick={() => handleServiceClick(service)}
              >
                <CardHeader className="pb-2">
                  <div className="flex items-center gap-4">
                    <div className="bg-gradient-to-br from-royal to-electric dark:from-electric dark:to-blue-600 p-3 rounded-full w-14 h-14 flex items-center justify-center">
                      <service.icon className="text-white" size={24} />
                    </div>
                    <CardTitle className="text-xl bg-clip-text text-transparent bg-gradient-to-r from-royal to-electric dark:from-electric dark:to-blue-400">
                      {service.title}
                    </CardTitle>
                  </div>
                </CardHeader>
                <CardContent className="pb-6 flex-grow">
                  <CardDescription className="text-gray-700 dark:text-gray-300 text-sm">
                    {service.description}
                  </CardDescription>
                </CardContent>
                <CardFooter className="flex justify-between items-center border-t pt-4 bg-gray-50 dark:bg-gray-800/50 mt-auto">
                  {service.sectionId && (
                    <div className="text-royal dark:text-electric text-sm flex items-center">
                      <span>Learn more</span>
                      <ArrowRight size={14} className="ml-1" />
                    </div>
                  )}
                  
                  <Button
                    variant="ghost"
                    size="sm"
                    className="text-gray-600 dark:text-gray-300 hover:text-royal dark:hover:text-electric hover:bg-blue-50 dark:hover:bg-blue-900/20 text-xs"
                    onClick={(e) => {
                      e.stopPropagation();
                      window.open("https://calendly.com/iqrafaisal81/discovery-call?month=2025-04", "_blank");
                    }}
                  >
                    <Calendar className="mr-1 h-3 w-3" />
                    Book Consultation
                  </Button>
                </CardFooter>
              </Card>
            </CarouselItem>
          ))}
        </CarouselContent>
        
        <div className="flex justify-center items-center gap-4 mt-6">
          <CarouselPrevious className="static transform-none bg-gradient-to-r from-royal to-electric/80 dark:from-electric dark:to-blue-600/80 hover:opacity-90 text-white border-none" />
          <CarouselPagination 
            carouselApi={carouselApi}
            currentIndex={currentIndex}
            items={services}
          />
          <CarouselNext className="static transform-none bg-gradient-to-r from-royal to-electric/80 dark:from-electric dark:to-blue-600/80 hover:opacity-90 text-white border-none" />
        </div>
      </Carousel>
    </div>
  );
};

export default ServiceCarousel;
