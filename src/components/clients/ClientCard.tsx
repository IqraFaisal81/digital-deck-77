
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
  // Determine background color based on client name
  const needsDarkerBg = ["BearPlex", "March on Mission", "GetSAID"].includes(client.name);
  
  return (
    <div 
      className={cn(
        "border rounded-xl p-5 flex flex-col items-center justify-center transition-all duration-300 cursor-pointer shadow-sm hover:shadow-md h-32 w-full",
        needsDarkerBg ? "bg-gray-600" : "bg-white",
        className
      )}
      onClick={() => onOpenTestimonial(client)}
    >
      <div className="flex items-center justify-center h-full w-full">
        <img 
          src={client.logo} 
          alt={client.name} 
          className={cn("max-w-full max-h-20", imageClassName)}
        />
      </div>
    </div>
  );
};

export default ClientCard;
