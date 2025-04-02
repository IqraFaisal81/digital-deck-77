
import React from "react";
import TestimonialSectionHeader from "@/components/testimonials/TestimonialSectionHeader";
import { ClientTestimonialCarousel } from "@/components/testimonials/ClientTestimonialCarousel";
import { motion } from "framer-motion";
import { Sparkles } from "lucide-react";

const TestimonialsSection = () => {
  return (
    <section 
      id="testimonials" 
      className="py-24 md:py-32 relative overflow-hidden"
    >
      {/* Enhanced background gradient for better dark/light mode */}
      <div className="absolute inset-0 bg-gradient-to-b from-white/90 to-blue-50/60 dark:from-gray-900/90 dark:to-blue-950/50 z-0"></div>
      
      {/* Enhanced decorative elements */}
      <div className="absolute top-0 right-0 w-1/3 h-1/3 bg-blue-100/50 dark:bg-blue-900/30 rounded-full blur-3xl -mr-20 -mt-20"></div>
      <div className="absolute bottom-0 left-0 w-1/4 h-1/4 bg-indigo-100/40 dark:bg-indigo-900/30 rounded-full blur-3xl -ml-10 -mb-10"></div>
      <div className="absolute bottom-1/3 right-1/4 w-32 h-32 bg-purple-100/30 dark:bg-purple-900/20 rounded-full blur-2xl"></div>
      
      {/* Floating particles for visual interest */}
      <div className="absolute top-1/4 left-1/5 w-3 h-3 rounded-full bg-blue-400/60 dark:bg-blue-500/60 animate-float"></div>
      <div className="absolute bottom-1/3 right-1/3 w-2 h-2 rounded-full bg-indigo-400/60 dark:bg-indigo-500/60 animate-float" style={{animationDelay: '1s'}}></div>
      <div className="absolute top-2/3 left-2/3 w-4 h-4 rounded-full bg-purple-400/50 dark:bg-purple-500/50 animate-float" style={{animationDelay: '2s'}}></div>
      
      <div className="container mx-auto px-4 relative z-10">
        {/* Label with icon */}
        <motion.div 
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="flex justify-center mb-6"
        >
          <div className="inline-flex items-center px-4 py-2 rounded-full bg-blue-100/60 dark:bg-blue-900/30 backdrop-blur-sm">
            <Sparkles className="h-4 w-4 mr-2 text-blue-600 dark:text-blue-400" />
            <span className="text-sm font-medium text-blue-800 dark:text-blue-300">Client Testimonials</span>
          </div>
        </motion.div>
        
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.1 }}
        >
          <TestimonialSectionHeader />
        </motion.div>
        
        <div className="mt-16">
          <ClientTestimonialCarousel />
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
