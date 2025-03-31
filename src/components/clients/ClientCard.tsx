
import React from "react";
import { ClientType } from "@/types/client";
import { cn } from "@/lib/utils";

interface ClientCardProps {
  client: ClientType;
  onOpenTestimonial: (client: ClientType) => void;
  className?: string;
  imageClassName?: string;
}

const ClientCard: React.FC<ClientCardProps> = ({ 
  client, 
  onOpenTestimonial,
  className,
  imageClassName = "object-contain"
}) => {
  // Determine if the logo is predominantly white based on client name
  const needsDarkerBg = ["BearPlex", "March on Mission", "GetSAID"].includes(client.name);
  
  return (
    <div 
      className={cn(
        "border border-gray-300 rounded-lg p-4 flex items-center justify-center hover:shadow-md transition-shadow duration-200 cursor-pointer h-28 w-32 md:w-40 md:h-32",
        needsDarkerBg ? "bg-gray-600" : "bg-gray-200",
        className
      )}
      onClick={() => onOpenTestimonial(client)}
    >
      <img 
        src={client.logo} 
        alt={client.name} 
        className={cn("max-w-full max-h-20", imageClassName)}
      />
    </div>
  );
};

export default ClientCard;
