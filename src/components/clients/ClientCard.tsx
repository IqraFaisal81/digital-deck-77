
import React from "react";
import { motion } from "framer-motion";
import { ExternalLink, Quote } from "lucide-react";
import { ClientType } from "@/types/client";

interface ClientCardProps {
  client: ClientType;
  index: number;
  onOpenTestimonial: (client: ClientType) => void;
}

const ClientCard: React.FC<ClientCardProps> = ({ client, index, onOpenTestimonial }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      className="flex flex-col items-center"
    >
      <div className="relative w-full">
        <a 
          href={client.website} 
          target="_blank" 
          rel="noopener noreferrer"
          className="bg-blue-50 h-28 w-full rounded-xl shadow-md border border-blue-100 flex items-center justify-center p-4 transition-all duration-300 hover:shadow-lg hover:border-blue-500 group"
        >
          <div className="relative w-full h-full flex items-center justify-center">
            <img 
              src={client.logo} 
              alt={client.name} 
              className="max-h-full max-w-full object-contain transition-all duration-300 group-hover:scale-105" 
            />
            <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-blue-500/50 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end justify-center pb-1">
              <ExternalLink className="text-white w-4 h-4" />
            </div>
          </div>
        </a>
        
        {client.testimonial && (
          <button 
            onClick={() => onOpenTestimonial(client)}
            className="mt-1 text-xs text-blue-600 hover:text-blue-700 hover:underline flex items-center justify-center w-full"
          >
            <Quote size={12} className="mr-1" />
            View Testimonial
          </button>
        )}
      </div>
    </motion.div>
  );
};

export default ClientCard;
