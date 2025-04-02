
import * as React from 'react';
import { motion } from 'framer-motion';
import { Star } from "lucide-react";

interface TestimonialCardProps {
  handleShuffle: () => void;
  testimonial: string;
  position: string;
  id: number;
  author: string;
  logo: string;
  company: string;
}

export function TestimonialCard({ handleShuffle, testimonial, position, id, author, logo, company }: TestimonialCardProps) {
  const dragRef = React.useRef(0);
  const isFront = position === "front";
  
  const renderStars = () => {
    return Array(5).fill(0).map((_, i) => (
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
        rotate: position === "front" ? "-6deg" : position === "middle" ? "0deg" : "6deg",
        x: position === "front" ? "0%" : position === "middle" ? "33%" : "66%",
        scale: position === "front" ? 1 : position === "middle" ? 0.9 : 0.8,
        opacity: position === "front" ? 1 : position === "middle" ? 0.9 : 0.7
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
        if (dragRef.current - getClientX(e) > 150) {
          handleShuffle();
        }
        dragRef.current = 0;
      }}
      transition={{ duration: 0.35 }}
      className={`absolute left-0 top-0 grid h-[480px] w-[380px] select-none rounded-2xl border bg-white/90 dark:bg-gray-800/90 border-gray-200 dark:border-gray-700 p-6 shadow-xl backdrop-blur-md ${
        isFront ? "cursor-grab active:cursor-grabbing" : ""
      }`}
    >
      <div className="flex justify-center mb-2">
        {renderStars()}
      </div>
      
      <div className="text-center text-lg italic text-gray-700 dark:text-gray-300 mb-4">
        "{testimonial}"
      </div>
      
      <div className="mt-auto flex items-center justify-between border-t border-gray-200 dark:border-gray-700 pt-4">
        <div className="flex flex-col">
          <div className="flex items-center mb-2">
            <div className="bg-gradient-to-r from-royal to-electric rounded-full p-0.5 mr-3">
              <div className="bg-white dark:bg-gray-800 rounded-full">
                <img
                  src={`https://i.pravatar.cc/128?img=${id}`}
                  alt={`Avatar of ${author.split(',')[0]}`}
                  className="h-12 w-12 rounded-full border-2 border-white dark:border-gray-700 object-cover"
                />
              </div>
            </div>
            <div>
              <p className="font-medium text-royal dark:text-electric">{author}</p>
            </div>
          </div>
        </div>
        
        {logo && (
          <div className="ml-auto">
            <img 
              src={logo} 
              alt={`${company} logo`} 
              className="h-14 object-contain"
            />
          </div>
        )}
      </div>
    </motion.div>
  );
}
