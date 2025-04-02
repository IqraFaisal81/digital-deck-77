
import React, { useEffect, useRef, useState } from "react";
import { motion } from "framer-motion";
import { clients } from "@/data/clients";
import SectionHeader from "@/components/skills/SectionHeader";
import { TestimonialCard } from "@/components/testimonials/TestimonialCard";

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
      className="py-20 md:py-28 px-4 md:px-8 bg-white dark:bg-gray-900 overflow-hidden"
    >
      <div className="container mx-auto">
        <SectionHeader 
          subtitle="Trusted by Businesses"
          title="Client Testimonials"
          description="Hear directly from our clients about their experience working with us"
          alignment="center"
          useGradient={true}
        />
        
        {/* Client Logos */}
        <div className="flex flex-wrap justify-center gap-4 mb-20 animate-on-scroll opacity-0 translate-y-8 transition-all duration-700">
          {clients.map((client, index) => (
            <div key={index} className="p-3 bg-white dark:bg-gray-800 backdrop-blur-sm rounded-xl shadow-sm border border-gray-100 dark:border-gray-700 transition-all hover:shadow-md hover:bg-white dark:hover:bg-gray-700 group">
              {client.logo ? (
                <img 
                  src={client.logo} 
                  alt={client.name} 
                  className="h-14 object-contain" 
                />
              ) : (
                <div className="h-14 flex items-center justify-center px-4 font-medium text-royal dark:text-electric">
                  {client.name}
                </div>
              )}
            </div>
          ))}
        </div>
        
        {/* Testimonial Cards */}
        <div className="max-w-6xl mx-auto animate-on-scroll opacity-0 translate-y-8 transition-all duration-700 delay-300">
          <div className="relative h-[550px] w-full">
            <div className="mx-auto relative h-[450px] w-[350px] md:w-[80%] lg:w-[70%]">
              {testimonials.slice(0, 3).map((testimonial, index) => (
                <TestimonialCard
                  key={index}
                  id={index + 1}
                  position={positions[index]}
                  handleShuffle={handleShuffle}
                  testimonial={testimonial.testimonial?.quote || ""}
                  author={`${testimonial.testimonial?.author}, ${testimonial.testimonial?.position} at ${testimonial.name}`}
                />
              ))}
            </div>
            
            <div className="mt-10 text-center">
              <p className="text-gray-600 dark:text-gray-400 italic">
                <span className="text-royal dark:text-electric">Swipe left</span> to see more testimonials
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
