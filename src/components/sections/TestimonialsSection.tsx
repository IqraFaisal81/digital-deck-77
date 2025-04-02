
import React, { useEffect, useRef } from "react";
import { motion } from "framer-motion";
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
import SectionHeader from "@/components/skills/SectionHeader";
import { Button } from "@/components/ui/button";

function FloatingPaths({ position }: { position: number }) {
  const paths = Array.from({ length: 36 }, (_, i) => ({
      id: i,
      d: `M-${380 - i * 5 * position} -${189 + i * 6}C-${
          380 - i * 5 * position
      } -${189 + i * 6} -${312 - i * 5 * position} ${216 - i * 6} ${
          152 - i * 5 * position
      } ${343 - i * 6}C${616 - i * 5 * position} ${470 - i * 6} ${
          684 - i * 5 * position
      } ${875 - i * 6} ${684 - i * 5 * position} ${875 - i * 6}`,
      color: `rgba(15,23,42,${0.1 + i * 0.03})`,
      width: 0.5 + i * 0.03,
  }));

  return (
      <div className="absolute inset-0 pointer-events-none opacity-30">
          <svg
              className="w-full h-full text-blue-500"
              viewBox="0 0 696 316"
              fill="none"
          >
              <title>Background Paths</title>
              {paths.map((path) => (
                  <motion.path
                      key={path.id}
                      d={path.d}
                      stroke="currentColor"
                      strokeWidth={path.width}
                      strokeOpacity={0.1 + path.id * 0.02}
                      initial={{ pathLength: 0.3, opacity: 0.6 }}
                      animate={{
                          pathLength: 1,
                          opacity: [0.3, 0.6, 0.3],
                          pathOffset: [0, 1, 0],
                      }}
                      transition={{
                          duration: 20 + Math.random() * 10,
                          repeat: Number.POSITIVE_INFINITY,
                          ease: "linear",
                      }}
                  />
              ))}
          </svg>
      </div>
  );
}

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
      className="py-20 md:py-28 px-4 md:px-8 bg-white overflow-hidden relative"
    >
      {/* Background Animation */}
      <div className="absolute inset-0">
        <FloatingPaths position={1} />
        <FloatingPaths position={-1} />
      </div>
      
      <div className="container mx-auto relative z-10">
        <motion.div 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1 }}
        >
          <SectionHeader 
            subtitle="Trusted by Businesses"
            title="Client Testimonials"
            description="Hear directly from our clients about their experience working with us"
            alignment="center"
          />
        </motion.div>
        
        {/* Client Logos */}
        <div className="flex flex-wrap justify-center gap-4 mb-12 animate-on-scroll opacity-0 translate-y-8 transition-all duration-700">
          {clients.map((client, index) => (
            <motion.div 
              key={index} 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1, duration: 0.5 }}
              className="p-3 bg-white backdrop-blur-sm rounded-xl shadow-sm border border-gray-100 transition-all hover:shadow-md hover:bg-white group"
            >
              {client.logo ? (
                <img 
                  src={client.logo} 
                  alt={client.name} 
                  className="h-14 object-contain transition-all" 
                />
              ) : (
                <div className="h-14 flex items-center justify-center px-4 font-medium text-gray-600">
                  {client.name}
                </div>
              )}
            </motion.div>
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
                    <motion.div 
                      initial={{ opacity: 0, y: 30 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: 0.2, duration: 0.7 }}
                      className="h-full"
                    >
                      <Card className="shadow-lg border-0 overflow-hidden bg-white hover:shadow-2xl transition-all duration-500 h-full transform hover:-translate-y-1 rounded-xl">
                        <CardContent className="p-0 h-full">
                          <div className="flex flex-col md:flex-row h-full">
                            <div className="md:w-2/5 lg:w-1/3 bg-white flex flex-col items-center justify-center p-8 text-black relative">
                              {client.logo && (
                                <div className="mb-6 bg-white/90 p-4 rounded-xl shadow-sm">
                                  <img src={client.logo} alt={client.name} className="h-16 w-auto object-contain" />
                                </div>
                              )}
                              <div className="mb-6">
                                <h4 className="text-xl font-bold text-center mb-2 text-gray-900">{client.name}</h4>
                              </div>
                              <p className="text-sm text-gray-700 text-center font-light">{client.description}</p>
                              <div className="mt-6 text-xs font-light italic text-gray-500 text-center">
                                {client.website !== "#" && (
                                  <a href={client.website} target="_blank" rel="noopener noreferrer" className="hover:underline">
                                    Visit Website
                                  </a>
                                )}
                              </div>
                            </div>
                            
                            <div className="md:w-3/5 lg:w-2/3 p-8 md:p-10 relative flex flex-col justify-center bg-white">
                              <div className="flex items-center mb-4 z-10">
                                {renderStars(client.testimonial?.rating)}
                              </div>
                              
                              <blockquote className="text-black italic mb-6 relative z-10 text-lg md:text-xl leading-relaxed">
                                "{client.testimonial?.quote}"
                              </blockquote>
                              
                              <div className="mt-auto flex items-center border-t border-gray-100 pt-5">
                                <Avatar className="h-14 w-14 border-2 border-gray-100 mr-4 shadow-sm">
                                  <AvatarFallback className="bg-white text-gray-600 font-semibold">
                                    {client.testimonial?.author.split(' ').map(n => n[0]).join('')}
                                  </AvatarFallback>
                                </Avatar>
                                <div>
                                  <div className="font-bold text-black text-lg">
                                    {client.testimonial?.author}
                                  </div>
                                  <div className="text-sm text-gray-700">
                                    {client.testimonial?.position}, {client.name}
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                        </CardContent>
                      </Card>
                    </motion.div>
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
