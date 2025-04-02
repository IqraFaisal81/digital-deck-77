
import React from "react";
import { Separator } from "@/components/ui/separator";
import TestimonialSectionHeader from "@/components/testimonials/TestimonialSectionHeader";
import { ClientTestimonialCarousel } from "@/components/testimonials/ClientTestimonialCarousel";

const TestimonialsSection = () => {
  return (
    <section 
      id="testimonials" 
      className="py-24 md:py-32 px-4 md:px-8 bg-gradient-to-b from-white to-gray-50 dark:from-gray-900 dark:to-gray-800 overflow-hidden"
    >
      <div className="container mx-auto">
        <TestimonialSectionHeader />
        
        <div className="max-w-6xl mx-auto mt-20">
          <ClientTestimonialCarousel />
        </div>
        
        <Separator className="max-w-4xl mx-auto my-16 bg-gray-200 dark:bg-gray-700" />
      </div>
    </section>
  );
};

export default TestimonialsSection;
