
import React from "react";
import ClientCard from "./ClientCard";
import { ClientType } from "@/types/client";

interface ClientGridProps {
  clients: ClientType[];
  onOpenTestimonial: (client: ClientType) => void;
}

const ClientGrid: React.FC<ClientGridProps> = ({ clients, onOpenTestimonial }) => {
  return (
    <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8 mb-16">
      {clients.map((client, index) => (
        <ClientCard 
          key={index}
          client={client}
          index={index}
          onOpenTestimonial={onOpenTestimonial}
        />
      ))}
    </div>
  );
};

export default ClientGrid;
