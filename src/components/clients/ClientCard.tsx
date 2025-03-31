
import React from "react";
import { ClientType } from "@/types/client";
import { cn } from "@/lib/utils";
import { motion } from "framer-motion";

interface ClientCardProps {
  client: ClientType;
  onOpenTestimonial: (client: ClientType) => void;
  className?: string;
  imageClassName?: string;
  index: number; // Added for staggered animations
}

const ClientCard: React.FC<ClientCardProps> = ({ 
  client, 
  onOpenTestimonial,
  className,
  imageClassName = "object-contain",
  index
}) => {
  // Determine background color based on client name
  const needsDarkerBg = ["BearPlex", "March on Mission", "GetSAID"].includes(client.name);
  const isFeatured = ["Mike Greene Consulting", "Grey Matters"].includes(client.name);
  
  return (
    <motion.div 
      className={cn(
        "group border rounded-xl p-5 flex flex-col items-center justify-center transition-all duration-300 cursor-pointer h-32 md:h-36",
        needsDarkerBg ? "bg-gray-600 border-gray-500" : "bg-white border-gray-100",
        isFeatured ? "col-span-1 md:col-span-2 shadow-md" : "shadow-sm hover:shadow-md",
        className
      )}
      onClick={() => onOpenTestimonial(client)}
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ 
        duration: 0.4, 
        delay: index * 0.1,
        ease: "easeOut"
      }}
      whileHover={{ 
        y: -5, 
        boxShadow: "0 10px 25px -5px rgba(59, 130, 246, 0.1), 0 10px 10px -5px rgba(59, 130, 246, 0.04)"
      }}
    >
      <div className="flex items-center justify-center h-full w-full overflow-hidden">
        <img 
          src={client.logo} 
          alt={client.name} 
          className={cn(
            "max-w-full max-h-20 transition-transform duration-300", 
            imageClassName,
            "group-hover:scale-110"
          )}
        />
      </div>
    </motion.div>
  );
};

export default ClientCard;
