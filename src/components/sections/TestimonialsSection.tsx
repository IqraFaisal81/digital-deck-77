
import React from "react";
import { Separator } from "@/components/ui/separator";
import TestimonialSectionHeader from "@/components/testimonials/TestimonialSectionHeader";
import { ClientTestimonialCarousel } from "@/components/testimonials/ClientTestimonialCarousel";

const TestimonialsSection = () => {
  return (
    <section 
      id="testimonials" 
      className="py-24 md:py-32 relative overflow-hidden"
    >
      {/* Background elements */}
      <div className="absolute inset-0 bg-gradient-to-b from-white to-blue-50 dark:from-gray-900 dark:to-blue-950/40 -z-10"></div>
      <div className="absolute top-40 -left-64 w-96 h-96 bg-blue-300/20 dark:bg-blue-500/10 rounded-full blur-3xl -z-5"></div>
      <div className="absolute bottom-40 -right-64 w-96 h-96 bg-indigo-300/20 dark:bg-indigo-500/10 rounded-full blur-3xl -z-5"></div>
      
      <div className="container mx-auto px-4 md:px-8 relative z-10">
        <TestimonialSectionHeader />
        
        <div className="max-w-6xl mx-auto mt-16">
          <ClientTestimonialCarousel />
        </div>
        
        <Separator className="max-w-4xl mx-auto my-16 bg-blue-200/50 dark:bg-blue-700/30" />
      </div>
    </section>
  );
};

export default TestimonialsSection;
