
import React, { useState } from "react";
import { clients } from "@/data/clients";
import { ClientType } from "@/types/client";
import ClientGrid from "./clients/ClientGrid";
import TestimonialModal from "./clients/TestimonialModal";
import FeaturedClient from "./clients/FeaturedClient";

const ClientShowcase: React.FC = () => {
  const [activeClient, setActiveClient] = useState<ClientType | null>(null);

  const openTestimonial = (client: ClientType) => {
    setActiveClient(client);
  };

  const closeTestimonial = () => {
    setActiveClient(null);
  };

  return (
    <div className="w-full">
      <div className="bg-gradient-to-br from-white to-blue-50 rounded-xl p-8 shadow-md border border-blue-100 mb-12">
        <ClientGrid 
          clients={clients} 
          onOpenTestimonial={openTestimonial} 
        />
      </div>

      {/* Testimonial modal */}
      <TestimonialModal 
        client={activeClient} 
        onClose={closeTestimonial} 
      />

      {/* Featured client testimonial/case study */}
      <FeaturedClient />
    </div>
  );
};

export default ClientShowcase;
