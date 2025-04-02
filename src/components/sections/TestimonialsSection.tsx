
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
      className="py-24 md:py-32 px-4 md:px-8 bg-gradient-to-b from-white to-gray-50 dark:from-gray-900 dark:to-gray-800 overflow-hidden"
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
        
        <Separator className="max-w-4xl mx-auto my-16 bg-gray-200 dark:bg-gray-700" />
        
        {/* Client Logos */}
        <div className="animate-on-scroll opacity-0 translate-y-8 transition-all duration-700">
          <h3 className="text-center text-xl font-medium mb-10 text-gray-700 dark:text-gray-300">Trusted by Companies</h3>
          <div className="flex flex-wrap justify-center items-center gap-6 md:gap-10">
            {clients.slice(0, 6).map((client, index) => (
              <div 
                key={index} 
                className="p-4 bg-white dark:bg-gray-800 backdrop-blur-sm rounded-xl shadow-sm border border-gray-100 dark:border-gray-700 transition-all hover:shadow-md hover:bg-white dark:hover:bg-gray-700 group"
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
      </div>
    </section>
  );
};

export default TestimonialsSection;
