
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
  return (
    <div 
      className={cn(
        "bg-white border border-gray-200 rounded-lg p-4 flex items-center justify-center hover:shadow-md transition-shadow duration-200 cursor-pointer h-32",
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
