
import React, { useEffect, useRef } from "react";
import { 
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious
} from "@/components/ui/carousel";
import { useCarouselState } from "@/hooks/useCarouselState";
import { Card, CardContent } from "@/components/ui/card";
import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar";
import { clients } from "@/data/clients";
import { Star, Quote } from "lucide-react";

const TestimonialsSection = () => {
  const testimonials = clients.filter(client => client.testimonial);
  const { carouselApi, setCarouselApi, currentIndex } = useCarouselState();
  const sectionRef = useRef<HTMLElement>(null);
  
  // Animation on scroll
  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('opacity-100', 'translate-y-0');
          entry.target.classList.remove('opacity-0', 'translate-y-8');
        }
      });
    }, { threshold: 0.1 });
    
    const elements = sectionRef.current?.querySelectorAll('.animate-on-scroll');
    elements?.forEach(el => observer.observe(el));
    
    return () => elements?.forEach(el => observer.unobserve(el));
  }, []);
  
  const renderStars = (rating: number = 5) => {
    return Array(5).fill(0).map((_, i) => (
      <Star 
        key={i} 
        className={`h-4 w-4 ${i < rating ? 'text-yellow-400 fill-yellow-400' : 'text-gray-300'}`} 
      />
    ));
  };

  return (
    <section 
      id="testimonials" 
      ref={sectionRef}
      className="py-20 md:py-28 px-4 md:px-8 bg-gradient-to-br from-gray-50 via-gray-50 to-white overflow-hidden"
    >
      <div className="container mx-auto">
        <div className="flex flex-col items-center mb-16 animate-on-scroll opacity-0 translate-y-8 transition-all duration-700">
          <span className="text-gray-600 text-sm uppercase tracking-wider font-semibold mb-2">Trusted by Businesses</span>
          <h2 className="text-3xl md:text-5xl font-bold mb-4 text-center relative">
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-gray-700 to-gray-600">
              Client Testimonials
            </span>
            <div className="absolute w-24 h-1 bg-gradient-to-r from-gray-400 to-gray-500 left-1/2 -translate-x-1/2 bottom-0 mt-4"></div>
          </h2>
          <p className="text-gray-700 max-w-2xl mx-auto text-center text-lg mt-6 mb-2">
            Hear directly from our clients about their experience working with us
          </p>
        </div>
        
        {/* Client Logos */}
        <div className="flex flex-wrap justify-center gap-4 mb-12 animate-on-scroll opacity-0 translate-y-8 transition-all duration-700">
          {clients.map((client, index) => (
            <div key={index} className="p-3 bg-gray-100/50 backdrop-blur-sm rounded-xl shadow-sm border border-gray-100 transition-all hover:shadow-md hover:bg-white group">
              {client.logo ? (
                <img 
                  src={client.logo} 
                  alt={client.name} 
                  className="h-14 object-contain grayscale group-hover:grayscale-0 transition-all" 
                />
              ) : (
                <div className="h-14 flex items-center justify-center px-4 font-medium text-gray-600">
                  {client.name}
                </div>
              )}
            </div>
          ))}
        </div>
        
        <div className="max-w-6xl mx-auto animate-on-scroll opacity-0 translate-y-8 transition-all duration-700 delay-300">
          {testimonials.length > 0 && (
            <Carousel
              setApi={setCarouselApi}
              className="relative"
              opts={{
                loop: true,
                align: "center",
              }}
            >
              <CarouselContent className="-ml-2 md:-ml-4">
                {testimonials.map((client, index) => (
                  <CarouselItem key={index} className="pl-2 md:pl-4 md:basis-4/5 lg:basis-3/4">
                    <div className="h-full">
                      <Card className="shadow-lg border-0 overflow-hidden bg-white hover:shadow-2xl transition-all duration-500 h-full transform hover:-translate-y-1 rounded-xl">
                        <CardContent className="p-0 h-full">
                          <div className="flex flex-col md:flex-row h-full">
                            <div className="md:w-2/5 lg:w-1/3 bg-gradient-to-br from-gray-600 via-gray-700 to-gray-800 flex flex-col items-center justify-center p-8 text-white relative overflow-hidden">
                              <div className="absolute top-0 left-0 w-full h-full opacity-10">
                                <svg className="w-full h-full" viewBox="0 0 100 100" preserveAspectRatio="none">
                                  <path d="M0,0 L100,0 L100,100 L0,100 Z" fill="none" stroke="white" strokeWidth="0.5"></path>
                                  <path d="M0,0 L100,100 M100,0 L0,100" stroke="white" strokeWidth="0.5"></path>
                                </svg>
                              </div>
                              {client.logo && (
                                <div className="mb-6 bg-white/20 backdrop-blur-sm p-4 rounded-xl shadow-inner">
                                  <img src={client.logo} alt={client.name} className="h-16 w-auto object-contain" />
                                </div>
                              )}
                              <div className="mb-6">
                                <h4 className="text-xl font-bold text-center mb-2">{client.name}</h4>
                              </div>
                              <p className="text-sm text-gray-100 text-center opacity-90 font-light">{client.description}</p>
                              <div className="mt-6 text-xs font-light italic text-gray-200 opacity-80 text-center">
                                {client.website !== "#" && (
                                  <a href={client.website} target="_blank" rel="noopener noreferrer" className="hover:underline">
                                    Visit Website
                                  </a>
                                )}
                              </div>
                            </div>
                            <div className="md:w-3/5 lg:w-2/3 p-8 md:p-10 relative flex flex-col justify-center bg-gradient-to-br from-white to-gray-50/50">
                              <div className="absolute top-6 left-6 opacity-10">
                                <Quote className="h-24 w-24 text-gray-300" />
                              </div>
                              <div className="flex items-center mb-4 z-10">
                                {renderStars(client.testimonial?.rating)}
                              </div>
                              
                              <blockquote className="text-gray-700 italic mb-6 relative z-10 text-lg md:text-xl leading-relaxed">
                                "{client.testimonial?.quote}"
                              </blockquote>
                              
                              <div className="mt-auto flex items-center border-t border-gray-100 pt-5">
                                <Avatar className="h-14 w-14 border-2 border-gray-100 mr-4 shadow-sm">
                                  <AvatarFallback className="bg-gradient-to-br from-gray-100 to-gray-200 text-gray-600 font-semibold">
                                    {client.testimonial?.author.split(' ').map(n => n[0]).join('')}
                                  </AvatarFallback>
                                </Avatar>
                                <div>
                                  <div className="font-bold text-gray-900 text-lg">
                                    {client.testimonial?.author}
                                  </div>
                                  <div className="text-sm text-gray-500">
                                    {client.testimonial?.position}, {client.name}
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                        </CardContent>
                      </Card>
                    </div>
                  </CarouselItem>
                ))}
              </CarouselContent>
              
              <div className="absolute -bottom-14 left-0 right-0 flex justify-center gap-2 py-4">
                {testimonials.map((_, index) => (
                  <button
                    key={index}
                    onClick={() => carouselApi?.scrollTo(index)}
                    className={`transition-all duration-300 ${
                      currentIndex === index 
                        ? 'bg-gradient-to-r from-gray-400 to-gray-600 w-8 h-2.5 rounded-full shadow-md' 
                        : 'bg-gray-300 w-2.5 h-2.5 rounded-full hover:bg-gray-400 hover:scale-110'
                    }`}
                    aria-label={`Go to testimonial ${index + 1}`}
                  />
                ))}
              </div>
              
              <CarouselPrevious className="hidden md:flex -left-5 h-10 w-10 border-none bg-white shadow-lg focus:ring-2 focus:ring-gray-400 focus:ring-offset-2 text-gray-600 hover:bg-gray-50 hover:text-gray-700" />
              <CarouselNext className="hidden md:flex -right-5 h-10 w-10 border-none bg-white shadow-lg focus:ring-2 focus:ring-gray-400 focus:ring-offset-2 text-gray-600 hover:bg-gray-50 hover:text-gray-700" />
            </Carousel>
          )}
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
