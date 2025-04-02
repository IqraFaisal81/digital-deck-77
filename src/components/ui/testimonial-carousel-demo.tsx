
"use client";

import { useState, useEffect } from "react";
import { ChevronLeft, ChevronRight, Star } from "lucide-react";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { clients } from "@/data/clients";
import { motion, AnimatePresence } from "framer-motion";

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
        <div className="relative rounded-2xl bg-gradient-to-b from-blue-50 to-indigo-50 dark:from-blue-950/40 dark:to-indigo-950/40 p-1">
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
                  <div className="grid md:grid-cols-[1fr,1.5fr] gap-10 items-center">
                    <div className="flex flex-col items-center md:items-start">
                      {testimonials[currentIndex].company && (
                        <div className="mb-6 bg-gray-100 dark:bg-gray-800 rounded-lg p-4 w-auto h-16 flex items-center justify-center">
                          <span className="font-semibold text-lg capitalize">
                            {testimonials[currentIndex].company}
                          </span>
                        </div>
                      )}
                      <div className="relative w-full hidden md:block">
                        <div className="absolute inset-0 bg-gradient-to-br from-blue-500/10 to-indigo-500/10 dark:from-blue-400/5 dark:to-indigo-400/5 rounded-full blur-3xl"></div>
                        <div className="relative flex items-center justify-center">
                          <Avatar className="w-24 h-24 border-4 border-white dark:border-gray-800 shadow-lg">
                            <AvatarFallback className="bg-gradient-to-br from-blue-500 to-indigo-600 text-white text-2xl">
                              {testimonials[currentIndex].name.split(" ").map(n => n[0]).join("")}
                            </AvatarFallback>
                          </Avatar>
                        </div>
                      </div>
                    </div>
                    
                    <div className="flex flex-col">
                      <div className="flex items-center gap-4 mb-6 md:hidden">
                        <Avatar className="w-14 h-14 border-2 border-white dark:border-gray-800 shadow-md">
                          <AvatarFallback className="bg-gradient-to-br from-blue-500 to-indigo-600 text-white">
                            {testimonials[currentIndex].name.split(" ").map(n => n[0]).join("")}
                          </AvatarFallback>
                        </Avatar>
                        <div>
                          <h3 className="font-semibold">{testimonials[currentIndex].name}</h3>
                          <p className="text-sm text-gray-500 dark:text-gray-400">{testimonials[currentIndex].role}</p>
                        </div>
                      </div>
                      
                      {testimonials[currentIndex].rating > 0 && (
                        <div className="flex gap-1 mb-3">
                          {Array.from({ length: 5 }).map((_, index) => (
                            <Star
                              key={index}
                              size={16}
                              className={cn(
                                index < testimonials[currentIndex].rating
                                  ? "fill-yellow-400 text-yellow-400"
                                  : "fill-muted text-muted"
                              )}
                            />
                          ))}
                        </div>
                      )}
                      
                      <blockquote className="text-2xl font-medium text-gray-900 dark:text-gray-100 mb-6 leading-relaxed">
                        "{testimonials[currentIndex].review}"
                      </blockquote>
                      
                      <div className="mt-auto hidden md:block">
                        <h3 className="font-semibold text-lg">{testimonials[currentIndex].name}</h3>
                        <p className="text-gray-500 dark:text-gray-400">{testimonials[currentIndex].role}</p>
                      </div>
                    </div>
                  </div>
                </motion.div>
              </AnimatePresence>
            </div>
            
            <div className="flex justify-between items-center mt-6">
              <div className="flex gap-1">
                {testimonials.map((_, index) => (
                  <button
                    key={index}
                    onClick={() => {
                      setDirection(index > currentIndex ? 1 : -1);
                      setCurrentIndex(index);
                    }}
                    className={cn(
                      "w-8 h-1.5 rounded-full transition-colors",
                      index === currentIndex
                        ? "bg-blue-600 dark:bg-blue-500"
                        : "bg-gray-200 dark:bg-gray-700 hover:bg-blue-400 dark:hover:bg-blue-700"
                    )}
                    aria-label={`Go to testimonial ${index + 1}`}
                  />
                ))}
              </div>
              
              <div className="flex gap-2">
                <Button
                  variant="outline"
                  size="icon"
                  onClick={prev}
                  className="h-9 w-9 rounded-full border-gray-200 dark:border-gray-700"
                  aria-label="Previous testimonial"
                >
                  <ChevronLeft className="h-5 w-5" />
                </Button>
                <Button
                  variant="outline"
                  size="icon"
                  onClick={next}
                  className="h-9 w-9 rounded-full border-gray-200 dark:border-gray-700"
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
