
import * as React from 'react';
import { motion } from 'framer-motion';
import { Star } from "lucide-react";

interface TestimonialCardProps {
  handleShuffle: () => void;
  testimonial: string;
  position: string;
  id: number;
  author: string;
}

export function TestimonialCard({ handleShuffle, testimonial, position, id, author }: TestimonialCardProps) {
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
        dragRef.current = e.clientX;
      }}
      onDragEnd={(e) => {
        if (dragRef.current - e.clientX > 150) {
          handleShuffle();
        }
        dragRef.current = 0;
      }}
      transition={{ duration: 0.35 }}
      className={`absolute left-0 top-0 grid h-[450px] w-[350px] select-none place-content-center rounded-2xl border bg-white/90 dark:bg-gray-800/90 border-gray-200 dark:border-gray-700 p-6 shadow-xl backdrop-blur-md ${
        isFront ? "cursor-grab active:cursor-grabbing" : ""
      }`}
    >
      <div className="flex justify-center mb-3">
        {renderStars()}
      </div>
      
      <div className="text-center text-lg italic text-gray-700 dark:text-gray-300 mb-4">
        "{testimonial}"
      </div>
      
      <div className="border-t border-gray-200 dark:border-gray-700 pt-4 mt-auto">
        <div className="flex items-center justify-center">
          <div className="bg-gradient-to-r from-royal to-electric rounded-full p-0.5">
            <div className="bg-white dark:bg-gray-800 rounded-full">
              <img
                src={`https://i.pravatar.cc/128?img=${id}`}
                alt={`Avatar of ${author.split(',')[0]}`}
                className="h-16 w-16 rounded-full border-2 border-white dark:border-gray-700 object-cover"
              />
            </div>
          </div>
        </div>
        <div className="text-center mt-2">
          <span className="font-medium text-royal dark:text-electric">{author}</span>
        </div>
      </div>
    </motion.div>
  );
}
