
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

interface ServiceCarouselProps {
  visibleSection: string | null;
  scrollToSection: (sectionId: string | null) => void;
}

const ServiceCarousel = ({ visibleSection, scrollToSection }: ServiceCarouselProps) => {
  const { carouselApi, setCarouselApi, currentIndex } = useCarouselState();
  
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
              <div 
                className={`rounded-lg overflow-hidden shadow-md transition-all duration-300 hover:shadow-xl hover:scale-[1.02] bg-white dark:bg-gray-800 border border-gray-100 dark:border-gray-700 p-6 h-full flex flex-col ${
                  service.sectionId ? 'cursor-pointer hover:bg-blue-50 dark:hover:bg-blue-900/30' : ''
                } ${
                  service.sectionId && visibleSection === service.sectionId ? 'ring-2 ring-royal dark:ring-electric' : ''
                }`}
                onClick={() => scrollToSection(service.sectionId)}
              >
                <div className="bg-blue-100 dark:bg-blue-900/50 p-3 rounded-full w-14 h-14 flex items-center justify-center mb-4">
                  <service.icon className="text-royal dark:text-electric" size={24} />
                </div>
                <h3 className="text-xl font-semibold mb-3 bg-clip-text text-transparent bg-gradient-to-r from-black to-royal dark:from-white dark:to-electric">{service.title}</h3>
                <p className="text-gray-600 dark:text-gray-300 mb-4 flex-grow">{service.description}</p>
                
                <div className="flex justify-between items-center mt-auto">
                  {service.sectionId && (
                    <div className="text-royal dark:text-electric text-sm flex items-center">
                      <span>{visibleSection === service.sectionId ? 'Hide details' : 'View details'}</span>
                      <ArrowRight size={14} className="ml-1" />
                    </div>
                  )}
                  
                  <Button
                    variant="ghost"
                    size="sm"
                    className="text-gray-600 dark:text-gray-300 hover:text-royal dark:hover:text-electric hover:bg-blue-50 dark:hover:bg-blue-900/20 text-xs"
                    onClick={(e) => {
                      e.stopPropagation();
                      document.getElementById('booking')?.scrollIntoView({ behavior: 'smooth' });
                    }}
                  >
                    <Calendar className="mr-1 h-3 w-3" />
                    Book Consultation
                  </Button>
                </div>
              </div>
            </CarouselItem>
          ))}
        </CarouselContent>
        
        <div className="flex justify-center items-center gap-4 mt-6">
          <CarouselPrevious className="static transform-none bg-royal/50 hover:bg-royal/80 dark:bg-electric/50 dark:hover:bg-electric/80 border-none" />
          <CarouselPagination 
            carouselApi={carouselApi}
            currentIndex={currentIndex}
            items={services}
          />
          <CarouselNext className="static transform-none bg-royal/50 hover:bg-royal/80 dark:bg-electric/50 dark:hover:bg-electric/80 border-none" />
        </div>
      </Carousel>
    </div>
  );
};

export default ServiceCarousel;
