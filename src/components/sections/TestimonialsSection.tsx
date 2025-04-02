
import React, { useEffect, useRef, useState } from "react";
import { motion } from "framer-motion";
import { clients } from "@/data/clients";
import SectionHeader from "@/components/skills/SectionHeader";
import { TestimonialCard } from "@/components/testimonials/TestimonialCard";
import { Separator } from "@/components/ui/separator";
import { ChevronRight } from "lucide-react";

const TestimonialsSection = () => {
  const testimonials = clients.filter(client => client.testimonial);
  const sectionRef = useRef<HTMLElement>(null);
  const [positions, setPositions] = useState<string[]>(["front", "middle", "back"]);
  
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

  const handleShuffle = () => {
    setPositions(prev => [prev[2], prev[0], prev[1]]);
  };

  return (
    <section 
      id="testimonials" 
      ref={sectionRef}
      className="py-24 md:py-32 px-4 md:px-8 overflow-hidden bg-gradient-to-br from-gray-50 via-white to-gray-100 dark:from-gray-900 dark:via-gray-800 dark:to-gray-800"
    >
      <div className="container mx-auto">
        <div className="mb-20">
          <SectionHeader 
            subtitle="Client Success Stories"
            title="What Our Clients Say"
            description="Hear directly from the businesses that have transformed their digital presence with our services"
            alignment="center"
            useGradient={true}
          />
        </div>
        
        {/* Testimonial Cards Carousel */}
        <div className="max-w-6xl mx-auto animate-on-scroll opacity-0 translate-y-8 transition-all duration-700 delay-300">
          <div className="relative h-[380px] md:h-[300px] w-full mb-16">
            <div className="relative w-full max-w-lg mx-auto h-full">
              {testimonials.slice(0, 3).map((testimonial, index) => (
                <TestimonialCard
                  key={index}
                  id={index + 1}
                  position={positions[index]}
                  handleShuffle={handleShuffle}
                  testimonial={testimonial.testimonial?.quote || ""}
                  author={testimonial.testimonial?.author || ""}
                  company={testimonial.name}
                  logo={testimonial.logo}
                  rating={testimonial.testimonial?.rating}
                />
              ))}
            </div>
            
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5 }}
              className="mt-8 text-center flex items-center justify-center"
            >
              <span className="text-gray-600 dark:text-gray-400 italic mr-2">
                Swipe left
              </span>
              <ChevronRight className="h-5 w-5 text-royal dark:text-electric animate-pulse" />
              <span className="text-gray-600 dark:text-gray-400 italic ml-2">
                to see more testimonials
              </span>
            </motion.div>
          </div>
        </div>
        
        <Separator className="max-w-5xl mx-auto my-20 bg-gray-200 dark:bg-gray-700" />
        
        {/* Trusted By Companies - New Design */}
        <div className="animate-on-scroll opacity-0 translate-y-8 transition-all duration-700">
          <div className="grid md:grid-cols-2 gap-10 max-w-5xl mx-auto">
            <div className="p-8 rounded-2xl bg-gradient-to-br from-white/80 to-white/50 dark:from-gray-800/80 dark:to-gray-800/50 backdrop-blur-sm border border-gray-200 dark:border-gray-700 shadow-lg">
              <h3 className="text-2xl font-bold bg-gradient-to-r from-royal to-electric bg-clip-text text-transparent mb-6">Trusted by Companies</h3>
              <p className="text-gray-700 dark:text-gray-300 mb-8">
                We partner with innovative businesses across industries to deliver exceptional results and drive meaningful growth.
              </p>
              
              <div className="grid grid-cols-2 sm:grid-cols-2 gap-4">
                {clients.slice(0, 4).map((client, index) => (
                  <div 
                    key={index} 
                    className="group p-4 bg-white dark:bg-gray-700 backdrop-blur-sm rounded-xl shadow-sm border border-gray-200 dark:border-gray-600 transition-all hover:shadow-md hover:-translate-y-1 flex items-center justify-center h-24"
                  >
                    <img 
                      src={client.logo} 
                      alt={client.name} 
                      className="h-16 w-auto object-contain group-hover:scale-110 transition-transform duration-300" 
                    />
                  </div>
                ))}
              </div>
            </div>
            
            <div className="p-8 rounded-2xl bg-gradient-to-br from-white/80 to-white/50 dark:from-gray-800/80 dark:to-gray-800/50 backdrop-blur-sm border border-gray-200 dark:border-gray-700 shadow-lg">
              <h3 className="text-2xl font-bold bg-gradient-to-r from-royal to-electric bg-clip-text text-transparent mb-6">Client Feedback</h3>
              <div className="space-y-4">
                {testimonials.slice(3, 5).map((client, index) => (
                  <div 
                    key={index}
                    className="p-4 bg-white dark:bg-gray-700 rounded-xl shadow-sm border border-gray-200 dark:border-gray-600 transition-all hover:shadow-md"
                  >
                    <div className="flex justify-between items-center mb-3">
                      <h4 className="font-semibold text-royal dark:text-electric">{client.testimonial?.author}</h4>
                      <img 
                        src={client.logo} 
                        alt={`${client.name} logo`} 
                        className="h-8 w-auto object-contain" 
                      />
                    </div>
                    <p className="text-gray-700 dark:text-gray-300 text-sm italic">"{client.testimonial?.quote}"</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
