
import React from "react";
import { Star } from "lucide-react";
import { Button } from "@/components/ui/button";
import { ClientType } from "@/types/client";

interface TestimonialModalProps {
  client: ClientType | null;
  onClose: () => void;
}

const TestimonialModal: React.FC<TestimonialModalProps> = ({ client, onClose }) => {
  if (!client) return null;

  return (
    <div 
      className="fixed inset-0 bg-black/80 backdrop-blur-sm z-50 flex items-center justify-center p-4" 
      onClick={onClose}
    >
      <div 
        className="bg-black/60 backdrop-blur-lg rounded-xl border border-white/10 p-6 max-w-md w-full" 
        onClick={(e) => e.stopPropagation()}
      >
        <div className="flex items-center mb-4">
          <img src={client.logo} alt={client.name} className="h-12 mr-4" />
          <div>
            <h3 className="font-bold text-xl">{client.name}</h3>
            {client.testimonial?.rating && (
              <div className="flex mt-1">
                {[...Array(client.testimonial.rating)].map((_, i) => (
                  <Star key={i} size={16} className="text-yellow-400 fill-yellow-400" />
                ))}
              </div>
            )}
          </div>
        </div>
        
        <blockquote className="italic text-white/90 border-l-4 border-electric pl-4 my-4">
          "{client.testimonial?.quote}"
        </blockquote>
        
        <footer className="text-white/70 mt-2 text-right">
          — {client.testimonial?.author}, {client.testimonial?.position}
        </footer>
        
        <div className="mt-6 flex justify-end">
          <Button 
            variant="outline" 
            onClick={onClose}
            className="text-electric"
          >
            Close
          </Button>
        </div>
      </div>
    </div>
  );
};

export default TestimonialModal;
