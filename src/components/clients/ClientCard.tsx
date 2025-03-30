
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
          className="bg-black/30 h-36 w-full rounded-xl backdrop-blur-sm border border-white/10 flex items-center justify-center p-6 transition-all duration-300 hover:border-electric/50 hover:shadow-lg hover:shadow-electric/20 group"
        >
          <div className="relative w-full h-full flex items-center justify-center">
            <img 
              src={client.logo} 
              alt={client.name} 
              className="max-h-full max-w-full object-contain transition-all duration-300 group-hover:scale-105" 
            />
            <div className="absolute inset-0 bg-gradient-to-b from-black/0 via-black/0 to-black/70 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end justify-center pb-2">
              <ExternalLink className="text-white/80 w-5 h-5" />
            </div>
          </div>
        </a>
        
        {client.testimonial && (
          <button 
            onClick={() => onOpenTestimonial(client)}
            className="mt-2 text-sm text-electric hover:underline flex items-center justify-center w-full"
          >
            <Quote size={14} className="mr-1" />
            View Testimonial
          </button>
        )}
      </div>
    </motion.div>
  );
};

export default ClientCard;
