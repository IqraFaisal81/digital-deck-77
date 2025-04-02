
"use client";

import { useState, useEffect } from "react";
import { ChevronLeft, ChevronRight, Star } from "lucide-react";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { motion, AnimatePresence } from "framer-motion";

interface Testimonial {
  company: string;
  avatar?: string;
  logo?: string;
  name: string;
  role: string;
  review: string;
  rating?: number;
  customLogo?: boolean;
}

interface TestimonialCarouselProps {
  testimonials: Testimonial[];
  companyLogoPath?: string;
  avatarPath?: string;
  useCustomLogo?: boolean;
}

export function TestimonialCarousel({
  testimonials,
  companyLogoPath = "",
  avatarPath = "",
  useCustomLogo = false
}: TestimonialCarouselProps) {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [direction, setDirection] = useState(0);
  const [autoplay, setAutoplay] = useState(true);

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

  // Generate star ratings
  const renderStars = (rating: number = 5) => {
    return Array.from({ length: 5 }).map((_, i) => (
      <Star 
        key={i} 
        className={cn(
          "w-4 h-4", 
          i < rating 
            ? "text-amber-400 fill-amber-400" 
            : "text-gray-300 dark:text-gray-600"
        )}
      />
    ));
  };

  return (
    <div 
      className="relative overflow-hidden py-10 px-4"
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      <div className="max-w-6xl mx-auto">
        <div className="relative rounded-2xl glass-card p-1">
          <div className="bg-white/80 dark:bg-gray-900/80 backdrop-blur-sm rounded-xl p-8 md:p-12 overflow-hidden">
            <div className="relative h-[340px] md:h-[280px]">
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
                        <div className="mb-6 bg-white dark:bg-gray-800 rounded-lg p-4 w-auto h-16 flex items-center justify-center shadow-sm">
                          {useCustomLogo && testimonials[currentIndex].logo ? (
                            <img
                              src={testimonials[currentIndex].logo}
                              alt={`${testimonials[currentIndex].company} logo`}
                              className="h-10 w-auto object-contain"
                              loading="lazy"
                            />
                          ) : companyLogoPath ? (
                            <img
                              src={`${companyLogoPath}${testimonials[currentIndex].company}.svg`}
                              alt={`${testimonials[currentIndex].company} logo`}
                              className="h-10 w-auto object-contain"
                              loading="lazy"
                            />
                          ) : (
                            <span className="font-semibold text-lg capitalize">
                              {testimonials[currentIndex].company}
                            </span>
                          )}
                        </div>
                      )}
                      <div className="relative w-full hidden md:block">
                        <div className="absolute inset-0 bg-gradient-to-br from-blue-500/20 to-indigo-500/20 dark:from-blue-400/10 dark:to-indigo-400/10 rounded-full blur-3xl"></div>
                        <div className="relative flex items-center justify-center">
                          <Avatar className="w-24 h-24 border-4 border-white dark:border-gray-800 shadow-lg">
                            {testimonials[currentIndex].avatar && avatarPath ? (
                              <AvatarImage src={`${avatarPath}${testimonials[currentIndex].avatar}`} alt={testimonials[currentIndex].name} />
                            ) : (
                              <AvatarFallback className="bg-gradient-to-br from-blue-600 to-indigo-600 text-white text-2xl">
                                {testimonials[currentIndex].name.split(" ").map(n => n[0]).join("")}
                              </AvatarFallback>
                            )}
                          </Avatar>
                        </div>
                      </div>
                    </div>
                    
                    <div className="flex flex-col">
                      <div className="flex items-center gap-4 mb-4 md:hidden">
                        <Avatar className="w-16 h-16 border-2 border-white dark:border-gray-800 shadow-md">
                          {testimonials[currentIndex].avatar && avatarPath ? (
                            <AvatarImage src={`${avatarPath}${testimonials[currentIndex].avatar}`} alt={testimonials[currentIndex].name} />
                          ) : (
                            <AvatarFallback className="bg-gradient-to-br from-blue-600 to-indigo-600 text-white">
                              {testimonials[currentIndex].name.split(" ").map(n => n[0]).join("")}
                            </AvatarFallback>
                          )}
                        </Avatar>
                        <div>
                          <h3 className="font-semibold">{testimonials[currentIndex].name}</h3>
                          <p className="text-sm text-gray-500 dark:text-gray-400">{testimonials[currentIndex].role}</p>
                        </div>
                      </div>
                      
                      <div className="flex mb-3">
                        {renderStars(testimonials[currentIndex].rating)}
                      </div>
                      
                      <blockquote className="text-xl md:text-2xl font-medium text-gray-900 dark:text-gray-100 mb-6 leading-relaxed">
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
                  className="h-9 w-9 rounded-full bg-white/80 dark:bg-gray-800/80 border-blue-100 dark:border-blue-900/50 backdrop-blur-sm hover:bg-blue-50 dark:hover:bg-blue-900/30"
                  aria-label="Previous testimonial"
                >
                  <ChevronLeft className="h-5 w-5" />
                </Button>
                <Button
                  variant="outline"
                  size="icon"
                  onClick={next}
                  className="h-9 w-9 rounded-full bg-white/80 dark:bg-gray-800/80 border-blue-100 dark:border-blue-900/50 backdrop-blur-sm hover:bg-blue-50 dark:hover:bg-blue-900/30"
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
