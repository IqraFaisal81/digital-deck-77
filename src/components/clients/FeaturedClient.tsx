
import React from "react";
import { ExternalLink, Quote, Star } from "lucide-react";
import { 
  Carousel, 
  CarouselContent, 
  CarouselItem, 
  CarouselNext, 
  CarouselPrevious
} from "@/components/ui/carousel";
import { Button } from "@/components/ui/button";
import { useCarouselState } from "@/hooks/useCarouselState";
import { clients } from "@/data/clients";

const FeaturedClient: React.FC = () => {
  const { carouselApi, setCarouselApi, currentIndex } = useCarouselState();

  return (
    <div className="bg-gradient-to-r from-blue-100 to-indigo-100 rounded-xl shadow-lg border border-blue-200 p-6 mb-12">
      <div className="flex flex-col md:flex-row justify-between items-center mb-6">
        <h2 className="text-2xl font-bold text-gray-900 mb-4 md:mb-0">Client Testimonials</h2>
      </div>

      <Carousel
        opts={{
          align: "start",
          loop: true,
        }}
        className="w-full"
        setApi={setCarouselApi}
      >
        <CarouselContent>
          {clients.map((client, index) => (
            <CarouselItem key={index} className="basis-full pl-0">
              <div className="flex flex-col md:flex-row gap-6 items-start">
                <div className="md:w-1/3">
                  <div className="bg-gradient-to-r from-blue-100 to-indigo-100 p-5 rounded-lg flex items-center justify-center h-48 border border-blue-200">
                    <img 
                      src={client.logo} 
                      alt={`${client.name} logo`} 
                      className="max-w-full max-h-24 object-contain"
                    />
                  </div>
                  
                  {client.testimonial?.rating && (
                    <div className="mt-4 flex justify-center">
                      {Array.from({ length: 5 }).map((_, i) => (
                        <Star 
                          key={i} 
                          size={20} 
                          className={i < (client.testimonial?.rating || 0) 
                            ? "text-yellow-400 fill-yellow-400" 
                            : "text-gray-300"} 
                        />
                      ))}
                    </div>
                  )}
                </div>
                
                <div className="md:w-2/3">
                  <div className="flex justify-between items-start mb-4">
                    <div>
                      <h3 className="text-2xl font-bold text-gray-900">{client.name}</h3>
                      <p className="text-blue-600 text-sm">{client.testimonial?.position}</p>
                    </div>
                    <a 
                      href={client.website} 
                      target="_blank" 
                      rel="noopener noreferrer" 
                      className="text-blue-600 hover:text-blue-800"
                    >
                      <ExternalLink size={18} />
                    </a>
                  </div>
                  
                  {client.testimonial && (
                    <div className="bg-white rounded-lg p-6 shadow-sm border border-gray-100 relative">
                      <Quote className="absolute text-blue-100 w-16 h-16 -top-2 -left-2 transform -rotate-6" />
                      <p className="text-gray-700 mb-4 relative z-10">
                        {client.testimonial.quote}
                      </p>
                      <footer className="text-gray-500 mt-2 font-medium">
                        — {client.testimonial.author}, {client.testimonial.position}
                      </footer>
                    </div>
                  )}

                  <div className="mt-6">
                    <p className="text-gray-600 mb-4 text-sm">{client.description}</p>
                    <Button className="bg-blue-600 hover:bg-blue-700 text-white" asChild>
                      <a href="#booking">Get Started Now</a>
                    </Button>
                  </div>
                </div>
              </div>
            </CarouselItem>
          ))}
        </CarouselContent>
        
        <div className="flex justify-center gap-2 mt-6">
          <CarouselPrevious className="static transform-none bg-blue-100 hover:bg-blue-200 text-blue-600 border-none h-8 w-8 rounded-full" />
          <div className="flex items-center space-x-2">
            {clients.map((_, idx) => (
              <span 
                key={idx} 
                className={`block h-2 w-2 rounded-full cursor-pointer transition-all ${currentIndex === idx ? 'bg-blue-600 w-4' : 'bg-blue-200'}`}
                onClick={() => carouselApi?.scrollTo(idx)}
              />
            ))}
          </div>
          <CarouselNext className="static transform-none bg-blue-100 hover:bg-blue-200 text-blue-600 border-none h-8 w-8 rounded-full" />
        </div>
      </Carousel>
    </div>
  );
};

export default FeaturedClient;
