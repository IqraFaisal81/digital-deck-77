
"use client";

import { useState, useEffect } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { clients } from "@/data/clients";
import { motion, AnimatePresence } from "framer-motion";
import { Testimonial } from "@/components/ui/testimonial";
import { useIsMobile } from "@/hooks/use-mobile";

export function TestimonialCarouselDemo() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [direction, setDirection] = useState(0);
  const [autoplay, setAutoplay] = useState(true);
  const isMobile = useIsMobile();

  // Filter clients with testimonials
  const testimonials = clients
    .filter(client => client.testimonial)
    .map((client) => ({
      company: client.name,
      logo: client.logo,
      name: client.testimonial?.author || "",
      role: client.testimonial?.position || "",
      review: client.testimonial?.quote || "",
      rating: client.testimonial?.rating || 5
    }));

  const prev = () => {
    setDirection(-1);
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? testimonials.length - 1 : prevIndex - 1
    );
  };

  const next = () => {
    setDirection(1);
    setCurrentIndex((prevIndex) =>
      prevIndex === testimonials.length - 1 ? 0 : prevIndex + 1
    );
  };

  // Autoplay functionality
  useEffect(() => {
    if (!autoplay) return;
    
    const interval = setInterval(() => {
      next();
    }, 5000);
    
    return () => clearInterval(interval);
  }, [currentIndex, autoplay]);

  // Pause autoplay on hover
  const handleMouseEnter = () => setAutoplay(false);
  const handleMouseLeave = () => setAutoplay(true);

  // Animation variants
  const variants = {
    enter: (direction: number) => ({
      x: direction > 0 ? 200 : -200,
      opacity: 0,
    }),
    center: {
      x: 0,
      opacity: 1,
    },
    exit: (direction: number) => ({
      x: direction < 0 ? 200 : -200,
      opacity: 0,
    }),
  };

  return (
    <div 
      className="relative overflow-hidden py-6 sm:py-10 px-2 sm:px-4"
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      <div className="max-w-6xl mx-auto">
        <div className="relative rounded-xl sm:rounded-2xl overflow-hidden">
          <div className="bg-gradient-to-br from-white via-white to-blue-50/50 dark:from-gray-900 dark:via-gray-900 dark:to-blue-950/30 rounded-xl p-4 sm:p-8 md:p-12 overflow-hidden">
            <div className="relative h-[400px] sm:h-[320px] md:h-[260px]">
              <AnimatePresence custom={direction} initial={false}>
                <motion.div
                  key={currentIndex}
                  custom={direction}
                  variants={variants}
                  initial="enter"
                  animate="center"
                  exit="exit"
                  transition={{
                    x: { type: "spring", stiffness: 300, damping: 30 },
                    opacity: { duration: 0.2 },
                  }}
                  className="absolute w-full"
                >
                  <Testimonial
                    name={testimonials[currentIndex].name}
                    role={testimonials[currentIndex].role}
                    company={testimonials[currentIndex].company}
                    testimonial={testimonials[currentIndex].review}
                    rating={testimonials[currentIndex].rating}
                    className="h-full transform transition-all duration-500 hover:scale-[1.02] group"
                  />
                </motion.div>
              </AnimatePresence>
            </div>
            
            <div className="flex flex-col sm:flex-row justify-between items-center mt-6 sm:mt-8 gap-4 sm:gap-0">
              <div className="flex gap-2">
                {testimonials.map((_, index) => (
                  <button
                    key={index}
                    onClick={() => {
                      setDirection(index > currentIndex ? 1 : -1);
                      setCurrentIndex(index);
                    }}
                    className={cn(
                      "w-6 sm:w-10 h-1.5 rounded-full transition-all duration-500",
                      index === currentIndex
                        ? "bg-blue-600 dark:bg-blue-500 scale-110"
                        : "bg-gray-200 dark:bg-gray-700 hover:bg-blue-400 dark:hover:bg-blue-700"
                    )}
                    aria-label={`Go to testimonial ${index + 1}`}
                  />
                ))}
              </div>
              
              <div className="flex gap-3">
                <Button
                  variant="outline"
                  size="icon"
                  onClick={prev}
                  className="h-8 w-8 sm:h-9 sm:w-9 rounded-full border-blue-100 dark:border-blue-900 hover:bg-blue-50 dark:hover:bg-blue-900/20 hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
                  aria-label="Previous testimonial"
                >
                  <ChevronLeft className="h-4 w-4 sm:h-5 sm:w-5" />
                </Button>
                <Button
                  variant="outline"
                  size="icon"
                  onClick={next}
                  className="h-8 w-8 sm:h-9 sm:w-9 rounded-full border-blue-100 dark:border-blue-900 hover:bg-blue-50 dark:hover:bg-blue-900/20 hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
                  aria-label="Next testimonial"
                >
                  <ChevronRight className="h-4 w-4 sm:h-5 sm:w-5" />
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
