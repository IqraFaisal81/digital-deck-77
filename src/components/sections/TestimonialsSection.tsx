
import React from "react";
import TestimonialSectionHeader from "@/components/testimonials/TestimonialSectionHeader";
import { ClientTestimonialCarousel } from "@/components/testimonials/ClientTestimonialCarousel";

const TestimonialsSection = () => {
  return (
    <section 
      id="testimonials" 
      className="py-24 md:py-32 relative overflow-hidden"
    >
      {/* Background gradient - improved for dark/light mode */}
      <div className="absolute inset-0 bg-gradient-to-b from-white/80 to-blue-50/50 dark:from-gray-900/80 dark:to-blue-950/40 z-0"></div>
      
      {/* Decorative elements */}
      <div className="absolute top-0 right-0 w-1/3 h-1/3 bg-blue-100/40 dark:bg-blue-900/20 rounded-full blur-3xl -mr-20 -mt-20"></div>
      <div className="absolute bottom-0 left-0 w-1/4 h-1/4 bg-indigo-100/30 dark:bg-indigo-900/20 rounded-full blur-3xl -ml-10 -mb-10"></div>
      
      <div className="container mx-auto px-4 relative z-10">
        <TestimonialSectionHeader />
        
        <div className="mt-16">
          <ClientTestimonialCarousel />
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
