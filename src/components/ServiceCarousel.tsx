
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
    <div className="w-full">
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
              className="basis-full sm:basis-1/2 md:basis-1/3 lg:basis-1/3 p-3"
            >
              <div 
                className={`group rounded-xl overflow-hidden shadow-md hover:shadow-xl transition-all duration-500 bg-white/90 dark:bg-gray-800/90 backdrop-blur-sm border border-gray-100/80 dark:border-gray-700/80 p-6 h-full flex flex-col 
                  ${service.sectionId ? 'cursor-pointer hover:translate-y-[-5px]' : ''} 
                  ${service.sectionId && visibleSection === service.sectionId ? 'ring-2 ring-royal dark:ring-electric translate-y-[-5px]' : ''}`}
                onClick={() => scrollToSection(service.sectionId)}
              >
                <div className="bg-gradient-to-br from-blue-100 to-indigo-100 dark:from-blue-900/50 dark:to-indigo-900/50 p-3 rounded-xl w-14 h-14 flex items-center justify-center mb-4 transform transition-transform group-hover:scale-110 group-hover:rotate-3">
                  <service.icon className="text-royal dark:text-electric" size={22} />
                </div>
                <h3 className="text-lg font-semibold mb-2 bg-clip-text text-transparent bg-gradient-to-r from-royal to-electric dark:from-electric dark:to-maroon">{service.title}</h3>
                <p className="text-gray-600 dark:text-gray-300 mb-4 flex-grow text-sm">{service.description}</p>
                
                <div className="flex justify-between items-center mt-auto">
                  {service.sectionId && (
                    <div className="text-royal dark:text-electric text-xs flex items-center group-hover:translate-x-1 transition-transform duration-300">
                      <span>{visibleSection === service.sectionId ? 'Hide details' : 'View details'}</span>
                      <ArrowRight size={12} className="ml-1" />
                    </div>
                  )}
                  
                  <Button
                    variant="ghost"
                    size="sm"
                    className="text-gray-600 dark:text-gray-300 hover:text-royal dark:hover:text-electric hover:bg-blue-50 dark:hover:bg-blue-900/20 text-xs p-1 h-auto"
                    onClick={(e) => {
                      e.stopPropagation();
                      document.getElementById('booking')?.scrollIntoView({ behavior: 'smooth' });
                    }}
                  >
                    <Calendar className="mr-1 h-3 w-3" />
                    Book
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
