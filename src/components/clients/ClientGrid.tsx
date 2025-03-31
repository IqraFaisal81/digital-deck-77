
import React from "react";
import { ClientType } from "@/types/client";
import ClientCard from "./ClientCard";

interface ClientGridProps {
  clients: ClientType[];
  onOpenTestimonial: (client: ClientType) => void;
}

const ClientGrid: React.FC<ClientGridProps> = ({ clients, onOpenTestimonial }) => {
  return (
    <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4 md:gap-6 mb-8">
      {clients.map((client, index) => {
        // Special handling for Mike Greene
        const isMikeGreene = client.name === "Mike Greene Consulting";
        
        return (
          <ClientCard 
            key={index} 
            client={client} 
            onOpenTestimonial={onOpenTestimonial}
            className={isMikeGreene ? "special-client bg-gray-700" : "bg-gray-700"}
            imageClassName={isMikeGreene ? "object-cover rounded-lg" : "object-contain"}
          />
        );
      })}
    </div>
  );
};

export default ClientGrid;
