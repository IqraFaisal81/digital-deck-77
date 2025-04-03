
import React from "react";
import { TestimonialCarouselDemo } from "@/components/ui/testimonial-carousel-demo";
import SectionHeader from "@/components/skills/SectionHeader";
import { useIsMobile } from "@/hooks/use-mobile";

const TestimonialsSection = () => {
  const isMobile = useIsMobile();
  
  return (
    <section 
      id="testimonials" 
      className="py-16 sm:py-24 md:py-32 px-4 md:px-8 bg-gradient-to-b from-white to-gray-50 dark:from-gray-900 dark:to-gray-800 overflow-hidden relative"
    >
      {/* Large decorative elements */}
      <div className="absolute top-0 left-0 w-72 sm:w-96 h-72 sm:h-96 bg-blue-200/20 dark:bg-blue-900/10 rounded-full blur-3xl -translate-x-1/2 -translate-y-1/2"></div>
      <div className="absolute bottom-0 right-0 w-72 sm:w-96 h-72 sm:h-96 bg-indigo-200/20 dark:bg-indigo-900/10 rounded-full blur-3xl translate-x-1/2 translate-y-1/2"></div>
      
      <div className="container mx-auto relative z-10">
        {/* Floating decorative elements */}
        <div className="absolute top-32 right-32 w-16 sm:w-20 h-16 sm:h-20 rounded-full bg-blue-300/30 dark:bg-blue-700/20 blur-xl animate-float"></div>
        <div className="absolute bottom-40 left-20 w-24 sm:w-32 h-24 sm:h-32 rounded-full bg-indigo-300/30 dark:bg-indigo-700/20 blur-xl animate-float"></div>
        
        <SectionHeader 
          title="Client Testimonials"
          description="Hear from the people who've experienced the transformative impact of digital solutions"
          alignment="center"
          useGradient={true}
        />
        
        <div className="max-w-6xl mx-auto mt-10 sm:mt-16 relative">
          {/* Subtle accent shapes */}
          <div className="absolute -top-4 -left-12 w-16 sm:w-20 h-16 sm:h-20 bg-blue-50 dark:bg-blue-900/20 rounded-full opacity-70 blur-lg"></div>
          <div className="absolute -bottom-4 -right-12 w-16 sm:w-20 h-16 sm:h-20 bg-indigo-50 dark:bg-indigo-900/20 rounded-full opacity-70 blur-lg"></div>
          
          <div className="relative z-10 border border-blue-100/50 dark:border-blue-800/30 bg-white/80 dark:bg-gray-900/80 backdrop-blur-lg rounded-2xl p-1 sm:p-2 shadow-lg ring-1 ring-blue-100/20 dark:ring-blue-900/20 transition-all duration-500 hover:shadow-blue-200/30 dark:hover:shadow-blue-900/20">
            <TestimonialCarouselDemo />
          </div>
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
