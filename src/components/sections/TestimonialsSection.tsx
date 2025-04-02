
import React from "react";
import { TestimonialCarouselDemo } from "@/components/ui/testimonial-carousel-demo";
import SectionHeader from "@/components/skills/SectionHeader";
import { Separator } from "@/components/ui/separator";

const TestimonialsSection = () => {
  return (
    <section 
      id="testimonials" 
      className="py-24 md:py-32 px-4 md:px-8 relative overflow-hidden bg-gradient-to-b from-white via-blue-50/30 to-indigo-50/40 dark:from-gray-900 dark:via-blue-950/10 dark:to-indigo-950/20"
    >
      {/* Decorative elements */}
      <div className="absolute top-0 inset-x-0 h-40 bg-gradient-to-b from-blue-100/20 to-transparent dark:from-blue-900/10"></div>
      <div className="absolute -top-24 -right-24 w-96 h-96 bg-blue-200/20 dark:bg-blue-800/10 rounded-full blur-3xl"></div>
      <div className="absolute -bottom-24 -left-24 w-96 h-96 bg-indigo-200/20 dark:bg-indigo-800/10 rounded-full blur-3xl"></div>
      
      <div className="container mx-auto relative z-10">
        <SectionHeader 
          subtitle="What Clients Say"
          title="Client Testimonials"
          description="Hear directly from our clients about their experience working with us"
          alignment="center"
          useGradient={true}
        />
        
        <div className="max-w-6xl mx-auto mt-16 relative">
          {/* Decorative quotation mark */}
          <div className="absolute -top-10 left-0 text-9xl font-serif text-blue-500/10 dark:text-blue-400/10 select-none">
            "
          </div>
          {/* Testimonial carousel with enhanced styling */}
          <div className="relative z-10 rounded-3xl shadow-xl">
            <TestimonialCarouselDemo />
          </div>
          {/* Decorative quotation mark */}
          <div className="absolute -bottom-20 right-0 text-9xl font-serif text-blue-500/10 dark:text-blue-400/10 rotate-180 select-none">
            "
          </div>
        </div>
        
        <Separator className="max-w-4xl mx-auto my-16 bg-blue-200/50 dark:bg-blue-800/30" />
      </div>
    </section>
  );
};

export default TestimonialsSection;
