
import React from "react";
import { ClientType } from "@/types/client";
import ClientCard from "./ClientCard";
import { motion } from "framer-motion";

interface ClientGridProps {
  clients: ClientType[];
  onOpenTestimonial: (client: ClientType) => void;
}

const ClientGrid: React.FC<ClientGridProps> = ({ clients, onOpenTestimonial }) => {
  return (
    <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 md:gap-6">
      {clients.map((client, index) => {
        // Special handling for Mike Greene
        const isMikeGreene = client.name === "Mike Greene Consulting";
        
        return (
          <motion.div 
            key={index}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.3, delay: index * 0.1 }}
          >
            <ClientCard 
              client={client} 
              onOpenTestimonial={onOpenTestimonial}
              className={isMikeGreene ? "special-client border-blue-100" : "border-gray-200"}
              imageClassName={isMikeGreene ? "object-cover rounded-lg" : "object-contain"}
            />
          </motion.div>
        );
      })}
    </div>
  );
};

export default ClientGrid;
