
import React, { useEffect, useRef, useState } from "react";
import { motion } from "framer-motion";
import { clients } from "@/data/clients";
import SectionHeader from "@/components/skills/SectionHeader";
import { TestimonialCard } from "@/components/testimonials/TestimonialCard";
import { Separator } from "@/components/ui/separator";

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
      className="py-24 md:py-32 px-4 md:px-8 overflow-hidden bg-gradient-to-b from-white via-gray-50 to-gray-100 dark:from-gray-900 dark:via-gray-800 dark:to-gray-800"
    >
      <div className="container mx-auto">
        <SectionHeader 
          subtitle="What Clients Say"
          title="Client Testimonials"
          description="Hear directly from our clients about their experience working with us"
          alignment="center"
          useGradient={true}
        />
        
        <div className="max-w-6xl mx-auto mt-20 animate-on-scroll opacity-0 translate-y-8 transition-all duration-700 delay-300">
          <div className="relative h-[550px] w-full">
            <div className="mx-auto relative h-[480px] w-[380px] md:w-[80%] lg:w-[70%]">
              {testimonials.slice(0, 3).map((testimonial, index) => (
                <TestimonialCard
                  key={index}
                  id={index + 1}
                  position={positions[index]}
                  handleShuffle={handleShuffle}
                  testimonial={testimonial.testimonial?.quote || ""}
                  author={`${testimonial.testimonial?.author}, ${testimonial.testimonial?.position}`}
                  company={testimonial.name}
                  logo={testimonial.logo}
                />
              ))}
            </div>
            
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5 }}
              className="mt-16 text-center"
            >
              <p className="text-gray-600 dark:text-gray-400 italic">
                <span className="bg-clip-text text-transparent bg-gradient-to-r from-royal to-electric font-semibold">Swipe left</span> to see more testimonials
              </p>
            </motion.div>
          </div>
        </div>
        
        <Separator className="max-w-5xl mx-auto my-20 bg-gray-200 dark:bg-gray-700" />
        
        {/* Trusted By Companies - Two Column Layout */}
        <div className="animate-on-scroll opacity-0 translate-y-8 transition-all duration-700">
          <div className="grid md:grid-cols-2 gap-10 max-w-5xl mx-auto">
            <div className="p-6 glass-card rounded-2xl">
              <h3 className="text-2xl font-semibold mb-6 text-royal dark:text-electric">Trusted by Companies</h3>
              <p className="text-gray-600 dark:text-gray-400 mb-8">
                We're proud to work with innovative businesses across multiple industries. Our clients trust us to deliver exceptional results.
              </p>
              
              <div className="flex flex-wrap gap-6">
                {clients.slice(0, 4).map((client, index) => (
                  <div 
                    key={index} 
                    className="p-3 bg-white dark:bg-gray-700 backdrop-blur-sm rounded-xl shadow-sm border border-gray-100 dark:border-gray-600 transition-all hover:shadow-md hover:-translate-y-1"
                  >
                    {client.logo ? (
                      <img 
                        src={client.logo} 
                        alt={client.name} 
                        className="h-10 md:h-12 object-contain" 
                      />
                    ) : (
                      <div className="h-10 md:h-12 flex items-center justify-center px-4 font-medium text-royal dark:text-electric">
                        {client.name}
                      </div>
                    )}
                  </div>
                ))}
              </div>
            </div>
            
            <div className="p-6 glass-card rounded-2xl">
              <h3 className="text-2xl font-semibold mb-6 text-royal dark:text-electric">Client Feedback</h3>
              <div className="space-y-6">
                {testimonials.slice(3, 5).map((client, index) => (
                  <div 
                    key={index}
                    className="p-4 bg-gradient-to-r from-white/70 to-white/50 dark:from-gray-800/70 dark:to-gray-800/50 rounded-xl shadow-sm border border-gray-200 dark:border-gray-700"
                  >
                    <div className="flex justify-between items-start mb-3">
                      <div>
                        <p className="font-medium text-royal dark:text-electric">{client.testimonial?.author}</p>
                        <p className="text-sm text-gray-500">{client.testimonial?.position}</p>
                      </div>
                      <img 
                        src={client.logo} 
                        alt={`${client.name} logo`} 
                        className="h-8 w-auto object-contain" 
                      />
                    </div>
                    <p className="text-gray-600 dark:text-gray-300 text-sm italic">"{client.testimonial?.quote}"</p>
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
