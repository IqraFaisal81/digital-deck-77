
import * as React from 'react';
import { motion } from 'framer-motion';
import { Star } from "lucide-react";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";

interface TestimonialCardProps {
  handleShuffle: () => void;
  testimonial: string;
  position: string;
  id: number;
  author: string;
  logo: string;
  company: string;
  rating?: number;
}

export function TestimonialCard({ 
  handleShuffle, 
  testimonial, 
  position, 
  id, 
  author, 
  logo, 
  company,
  rating = 5
}: TestimonialCardProps) {
  const dragRef = React.useRef(0);
  const isFront = position === "front";
  
  const renderStars = () => {
    return Array(rating).fill(0).map((_, i) => (
      <Star 
        key={i} 
        className="h-4 w-4 text-yellow-400 fill-yellow-400"
      />
    ));
  };

  // Helper function to get clientX from different event types
  const getClientX = (event: MouseEvent | TouchEvent | PointerEvent): number => {
    // Check if it's a touch event
    if ('touches' in event) {
      return event.touches[0]?.clientX || 0;
    }
    // For MouseEvent and PointerEvent
    return 'clientX' in event ? event.clientX : 0;
  };

  return (
    <motion.div
      style={{
        zIndex: position === "front" ? "2" : position === "middle" ? "1" : "0"
      }}
      animate={{
        rotate: position === "front" ? "-3deg" : position === "middle" ? "0deg" : "3deg",
        x: position === "front" ? "0%" : position === "middle" ? "28%" : "56%",
        scale: position === "front" ? 1 : position === "middle" ? 0.95 : 0.9,
        opacity: position === "front" ? 1 : position === "middle" ? 0.95 : 0.85
      }}
      drag={true}
      dragElastic={0.35}
      dragListener={isFront}
      dragConstraints={{
        top: 0,
        left: 0,
        right: 0,
        bottom: 0
      }}
      onDragStart={(e) => {
        dragRef.current = getClientX(e);
      }}
      onDragEnd={(e) => {
        if (dragRef.current - getClientX(e) > 100) {
          handleShuffle();
        }
        dragRef.current = 0;
      }}
      transition={{ duration: 0.4, ease: "easeOut" }}
      className={`absolute left-0 top-0 w-full md:w-[480px] select-none rounded-2xl ${
        isFront ? "cursor-grab active:cursor-grabbing" : ""
      }`}
    >
      <div className="relative h-full p-8 backdrop-blur-lg bg-gradient-to-b from-white/90 to-white/70 dark:from-gray-800/90 dark:to-gray-800/70 rounded-2xl border border-gray-200 dark:border-gray-700 shadow-xl">
        <div className="absolute -top-4 -right-4 bg-gradient-to-br from-royal to-electric p-1 rounded-full shadow-lg">
          <img 
            src={logo} 
            alt={`${company} logo`} 
            className="h-12 w-12 rounded-full object-contain bg-white p-1"
          />
        </div>
        
        <div className="flex items-center space-x-1 mb-4">
          {renderStars()}
        </div>
        
        <div className="text-xl font-medium text-gray-800 dark:text-gray-200 mb-4">
          "{testimonial}"
        </div>
        
        <div className="mt-8 flex items-center space-x-4">
          <Avatar className="h-12 w-12 border-2 border-royal dark:border-electric">
            <AvatarImage 
              src={`https://ui-avatars.com/api/?name=${author.split(',')[0]}&background=random`} 
              alt={author} 
            />
            <AvatarFallback className="bg-royal text-white">
              {author.split(' ')[0]?.[0]}{author.split(' ')[1]?.[0]}
            </AvatarFallback>
          </Avatar>
          
          <div>
            <p className="font-semibold text-royal dark:text-electric">{author}</p>
            <p className="text-sm text-gray-600 dark:text-gray-400">{company}</p>
          </div>
        </div>
      </div>
    </motion.div>
  );
}
