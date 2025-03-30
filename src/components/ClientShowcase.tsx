
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
      <div className="text-center mb-12">
        <h2 className="text-3xl md:text-4xl font-bold mb-4">Trusted By Industry Leaders</h2>
        <p className="text-white/80 max-w-2xl mx-auto">
          I've had the privilege of working with these remarkable businesses, helping them transform their digital presence and automate their success.
        </p>
      </div>

      {/* Main showcase with hover effects */}
      <ClientGrid 
        clients={clients} 
        onOpenTestimonial={openTestimonial} 
      />

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
