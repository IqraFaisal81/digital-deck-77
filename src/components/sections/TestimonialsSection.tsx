
import React, { useState, useEffect } from "react";
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
  
  const renderStars = (rating: number = 5) => {
    return Array(5).fill(0).map((_, i) => (
      <Star 
        key={i} 
        className={`h-4 w-4 ${i < rating ? 'text-yellow-400 fill-yellow-400' : 'text-gray-300'}`} 
      />
    ));
  };

  return (
    <section id="testimonials" className="py-20 px-4 md:px-8 bg-gradient-to-br from-blue-50 to-white">
      <div className="container mx-auto">
        <div className="flex flex-col items-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-3 text-center">
            Client <span className="text-blue-600">Testimonials</span>
          </h2>
          <div className="w-16 h-1 bg-blue-600 mb-6"></div>
          <p className="text-gray-700 max-w-2xl mx-auto text-center mb-8">
            See what our clients have to say about working with us
          </p>
        </div>
        
        <div className="max-w-5xl mx-auto">
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
                      <Card className="shadow-lg border-0 overflow-hidden bg-white hover:shadow-xl transition-shadow duration-300 h-full">
                        <CardContent className="p-0 h-full">
                          <div className="flex flex-col md:flex-row h-full">
                            <div className="md:w-1/3 bg-gradient-to-br from-blue-600 to-blue-700 flex flex-col items-center justify-center p-8 text-white">
                              <div className="mb-4 flex items-center justify-center w-24 h-24 bg-white/10 rounded-full p-4">
                                <img 
                                  src={client.logo} 
                                  alt={client.name} 
                                  className="max-w-[100px] max-h-[60px] object-contain"
                                />
                              </div>
                              <h4 className="text-lg font-semibold text-center mb-1">{client.name}</h4>
                              <p className="text-sm text-blue-100 text-center opacity-90">{client.description}</p>
                            </div>
                            <div className="md:w-2/3 p-8 relative flex flex-col justify-center">
                              <Quote className="absolute top-6 left-6 h-10 w-10 text-blue-100 opacity-30" />
                              <div className="flex items-center mb-4 z-10">
                                {renderStars(client.testimonial?.rating)}
                              </div>
                              
                              <blockquote className="text-gray-700 italic mb-6 relative z-10 text-lg">
                                "{client.testimonial?.quote}"
                              </blockquote>
                              
                              <div className="mt-auto flex items-center">
                                <Avatar className="h-12 w-12 border-2 border-blue-100 mr-4">
                                  <AvatarFallback className="bg-blue-100 text-blue-600 font-medium">
                                    {client.testimonial?.author.split(' ').map(n => n[0]).join('')}
                                  </AvatarFallback>
                                </Avatar>
                                <div>
                                  <div className="font-semibold text-gray-900">
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
              
              <div className="absolute -bottom-12 left-0 right-0 flex justify-center gap-2 py-4">
                {testimonials.map((_, index) => (
                  <button
                    key={index}
                    onClick={() => carouselApi?.scrollTo(index)}
                    className={`w-2.5 h-2.5 rounded-full transition-all duration-300 ${
                      currentIndex === index 
                        ? 'bg-blue-600 w-8' 
                        : 'bg-gray-300 hover:bg-gray-400'
                    }`}
                    aria-label={`Go to testimonial ${index + 1}`}
                  />
                ))}
              </div>
              
              <CarouselPrevious className="hidden md:flex -left-4 md:-left-6 h-9 w-9 border-none bg-white shadow-md focus:ring-2 focus:ring-blue-600 focus:ring-offset-2" />
              <CarouselNext className="hidden md:flex -right-4 md:-right-6 h-9 w-9 border-none bg-white shadow-md focus:ring-2 focus:ring-blue-600 focus:ring-offset-2" />
            </Carousel>
          )}
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
