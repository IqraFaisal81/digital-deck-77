
"use client";

import { useState, useEffect } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { clients } from "@/data/clients";
import { motion, AnimatePresence } from "framer-motion";
import { Testimonial } from "@/components/ui/testimonial";

export function TestimonialCarouselDemo() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [direction, setDirection] = useState(0);
  const [autoplay, setAutoplay] = useState(true);

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
      className="relative overflow-hidden py-10 px-4"
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      <div className="max-w-6xl mx-auto">
        <div className="relative rounded-2xl overflow-hidden">
          <div className="bg-white dark:bg-gray-900 rounded-xl p-8 md:p-12 overflow-hidden">
            <div className="relative h-[300px] md:h-[260px]">
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
                    className="h-full transform transition-all duration-300 hover:scale-[1.01]"
                  />
                </motion.div>
              </AnimatePresence>
            </div>
            
            <div className="flex justify-between items-center mt-6">
              <div className="flex gap-1.5">
                {testimonials.map((_, index) => (
                  <button
                    key={index}
                    onClick={() => {
                      setDirection(index > currentIndex ? 1 : -1);
                      setCurrentIndex(index);
                    }}
                    className={cn(
                      "w-10 h-1.5 rounded-full transition-all duration-300",
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
                  className="h-9 w-9 rounded-full border-gray-200 dark:border-gray-700 hover:bg-blue-50 dark:hover:bg-blue-900/20 hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
                  aria-label="Previous testimonial"
                >
                  <ChevronLeft className="h-5 w-5" />
                </Button>
                <Button
                  variant="outline"
                  size="icon"
                  onClick={next}
                  className="h-9 w-9 rounded-full border-gray-200 dark:border-gray-700 hover:bg-blue-50 dark:hover:bg-blue-900/20 hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
                  aria-label="Next testimonial"
                >
                  <ChevronRight className="h-5 w-5" />
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
