
import React from "react";
import { Separator } from "@/components/ui/separator";
import TestimonialSectionHeader from "@/components/testimonials/TestimonialSectionHeader";
import { ClientTestimonialCarousel } from "@/components/testimonials/ClientTestimonialCarousel";

const TestimonialsSection = () => {
  return (
    <section 
      id="testimonials" 
      className="relative py-24 md:py-32 overflow-hidden"
    >
      {/* Background with gradient effect */}
      <div className="absolute inset-0 bg-gradient-to-b from-white via-gray-50 to-blue-50 dark:from-gray-900 dark:via-gray-800 dark:to-blue-950/30 -z-10"></div>
      
      {/* Decorative elements */}
      <div className="absolute top-20 right-10 h-64 w-64 rounded-full bg-blue-200/20 blur-3xl dark:bg-blue-600/10"></div>
      <div className="absolute bottom-20 left-10 h-64 w-64 rounded-full bg-indigo-200/20 blur-3xl dark:bg-indigo-600/10"></div>
      
      <div className="container mx-auto px-4 md:px-8">
        <TestimonialSectionHeader />
        
        <div className="mt-24 max-w-6xl mx-auto">
          <ClientTestimonialCarousel />
        </div>
        
        <Separator className="max-w-4xl mx-auto my-16 bg-blue-100 dark:bg-blue-900/30" />
      </div>
    </section>
  );
};

export default TestimonialsSection;
