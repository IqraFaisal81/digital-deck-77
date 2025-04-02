
import React from "react";
import { TestimonialCarouselDemo } from "@/components/ui/testimonial-carousel-demo";
import SectionHeader from "@/components/skills/SectionHeader";
import { Separator } from "@/components/ui/separator";

const TestimonialsSection = () => {
  return (
    <section 
      id="testimonials" 
      className="py-24 md:py-32 px-4 md:px-8 bg-gradient-to-b from-white to-gray-50 dark:from-gray-900 dark:to-gray-800 overflow-hidden"
    >
      <div className="container mx-auto relative z-10">
        {/* Decorative elements */}
        <div className="absolute -top-16 -left-16 w-64 h-64 rounded-full bg-blue-100/50 dark:bg-blue-900/20 blur-3xl -z-10"></div>
        <div className="absolute -bottom-16 -right-16 w-64 h-64 rounded-full bg-indigo-100/50 dark:bg-indigo-900/20 blur-3xl -z-10"></div>
        
        <SectionHeader 
          subtitle="What Clients Say"
          title="Client Testimonials"
          description="Hear directly from our clients about their experience working with us"
          alignment="center"
          useGradient={true}
        />
        
        <div className="max-w-6xl mx-auto mt-16 relative">
          {/* Subtle decorative accents */}
          <div className="absolute -right-8 top-1/2 transform -translate-y-1/2 h-40 w-40 rounded-full bg-indigo-50/30 dark:bg-indigo-500/5 blur-xl -z-10"></div>
          <div className="absolute -left-8 top-1/3 transform -translate-y-1/2 h-32 w-32 rounded-full bg-blue-50/30 dark:bg-blue-500/5 blur-xl -z-10"></div>
          
          <div className="border border-transparent bg-white/50 dark:bg-gray-900/50 backdrop-blur-sm rounded-3xl p-2 shadow-lg">
            <TestimonialCarouselDemo />
          </div>
        </div>
        
        <Separator className="max-w-4xl mx-auto my-16 bg-gray-200 dark:bg-gray-700" />
      </div>
    </section>
  );
};

export default TestimonialsSection;
