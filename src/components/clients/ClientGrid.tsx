
import React from "react";
import { ClientType } from "@/types/client";
import ClientCard from "./ClientCard";

interface ClientGridProps {
  clients: ClientType[];
  onOpenTestimonial: (client: ClientType) => void;
}

const ClientGrid: React.FC<ClientGridProps> = ({ clients, onOpenTestimonial }) => {
  // Organize clients to position featured ones in strategic positions
  const organizedClients = [...clients].sort((a, b) => {
    // Place important clients in key positions
    if (a.name === "Mike Greene Consulting") return -1;
    if (b.name === "Mike Greene Consulting") return 1;
    return 0;
  });

  return (
    <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 md:gap-6">
      {organizedClients.map((client, index) => {
        // Special handling for Mike Greene
        const isMikeGreene = client.name === "Mike Greene Consulting";
        
        return (
          <ClientCard 
            key={index}
            client={client} 
            onOpenTestimonial={onOpenTestimonial}
            className={isMikeGreene ? "special-client border-blue-200 bg-gradient-to-br from-white to-blue-50" : ""}
            imageClassName={isMikeGreene ? "object-cover rounded-lg" : "object-contain"}
            index={index}
          />
        );
      })}
    </div>
  );
};

export default ClientGrid;
