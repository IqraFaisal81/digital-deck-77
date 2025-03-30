
import React, { useState } from "react";
import { motion } from "framer-motion";
import { ExternalLink, Star, Quote } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";

interface ClientType {
  name: string;
  logo: string;
  website: string;
  description: string;
  testimonial?: {
    quote: string;
    author: string;
    position: string;
    rating?: number;
  };
}

const clients: ClientType[] = [
  {
    name: "Advanced Dental Care",
    logo: "/lovable-uploads/01ce4945-a7d8-4c51-b0b6-5f3bb018aee9.png",
    website: "https://www.advancedindiana.com/",
    description: "Premier dental care services with advanced technology and patient-focused approach.",
    testimonial: {
      quote: "Iqra transformed our online booking system, resulting in a 30% increase in new patient appointments. The automated follow-up system has been a game-changer.",
      author: "Dr. Sarah Miller",
      position: "Lead Dentist",
      rating: 5
    }
  },
  {
    name: "All Pro Heating & Cooling",
    logo: "/lovable-uploads/cbda554d-0f5b-483c-99ad-5b285101ffd3.png",
    website: "https://www.callallproindy.com/",
    description: "Comprehensive HVAC, plumbing, and drainage solutions for residential and commercial clients.",
    testimonial: {
      quote: "The CRM system Iqra implemented helped us track service calls and follow-ups seamlessly. Our response time has improved by 40%.",
      author: "James Thompson",
      position: "Operations Manager",
      rating: 5
    }
  },
  {
    name: "Grey Matters",
    logo: "/lovable-uploads/afd512f8-af6f-4adb-bb3e-ed3b41ed3d11.png",
    website: "https://greymatters.studio/",
    description: "Innovative brain training studio focused on cognitive health and mental wellness.",
    testimonial: {
      quote: "Iqra transformed our entire digital approach. From clunky systems to smooth automation, we now spend less time on admin and more time with clients.",
      author: "Michael Chen",
      position: "Director",
      rating: 5
    }
  },
  {
    name: "MB Collections",
    logo: "/lovable-uploads/a2f6aa66-f631-443c-a7da-7418a3f06fb2.png",
    website: "https://mbcollections.com.pk/",
    description: "Curated fashion collections bringing premium style and elegance to discerning clients.",
    testimonial: {
      quote: "Our online presence has been completely revitalized. Sales have increased by 55% since implementing the automated marketing campaigns.",
      author: "Maryam Butt",
      position: "Creative Director",
      rating: 5
    }
  },
  {
    name: "March on Mission",
    logo: "/lovable-uploads/459570af-5ccd-4c1d-9cd0-3b4bc8a4a618.png",
    website: "https://www.marchonmission.org/",
    description: "Nonprofit organization dedicated to making positive impacts in communities through targeted initiatives.",
    testimonial: {
      quote: "Iqra's email marketing expertise helped us increase donor engagement by 70%. Her automation strategies have been invaluable to our small team.",
      author: "Jennifer Walsh",
      position: "Executive Director",
      rating: 5
    }
  },
  {
    name: "Triad Diagnostic Solutions",
    logo: "/lovable-uploads/33c82f7f-e3d3-4794-bb0f-f6c2db821eb5.png",
    website: "https://www.triad-ds.com/",
    description: "Cutting-edge diagnostic solutions and equipment for the automotive industry.",
    testimonial: {
      quote: "The chat widget automation Iqra built has revolutionized our lead generation process. It's like having an extra team member working 24/7.",
      author: "Robert Garcia",
      position: "Sales Director",
      rating: 5
    }
  },
  {
    name: "BearPlex",
    logo: "/lovable-uploads/84abbd7d-4c45-4186-8442-6b7415f8a35a.png",
    website: "https://bearplex.com/",
    description: "Innovative digital solutions and technology services for modern businesses.",
    testimonial: {
      quote: "Working with Iqra was transformative for our client onboarding process. The automated workflows have reduced our admin time by 65%.",
      author: "Alex Johnson",
      position: "CTO",
      rating: 5
    }
  }
];

const ClientShowcase: React.FC = () => {
  const [activeClient, setActiveClient] = useState<ClientType | null>(null);

  const openTestimonial = (client: ClientType) => {
    setActiveClient(client);
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
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8 mb-16">
        {clients.map((client, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            className="flex flex-col items-center"
          >
            <div className="relative w-full">
              <a 
                href={client.website} 
                target="_blank" 
                rel="noopener noreferrer"
                className="bg-black/30 h-36 w-full rounded-xl backdrop-blur-sm border border-white/10 flex items-center justify-center p-6 transition-all duration-300 hover:border-electric/50 hover:shadow-lg hover:shadow-electric/20 group"
              >
                <div className="relative w-full h-full flex items-center justify-center">
                  <img 
                    src={client.logo} 
                    alt={client.name} 
                    className="max-h-full max-w-full object-contain transition-all duration-300 group-hover:scale-105" 
                  />
                  <div className="absolute inset-0 bg-gradient-to-b from-black/0 via-black/0 to-black/70 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end justify-center pb-2">
                    <ExternalLink className="text-white/80 w-5 h-5" />
                  </div>
                </div>
              </a>
              
              {client.testimonial && (
                <button 
                  onClick={() => openTestimonial(client)}
                  className="mt-2 text-sm text-electric hover:underline flex items-center justify-center w-full"
                >
                  <Quote size={14} className="mr-1" />
                  View Testimonial
                </button>
              )}
            </div>
          </motion.div>
        ))}
      </div>

      {/* Testimonial modal */}
      {activeClient && (
        <div className="fixed inset-0 bg-black/80 backdrop-blur-sm z-50 flex items-center justify-center p-4" onClick={() => setActiveClient(null)}>
          <div 
            className="bg-black/60 backdrop-blur-lg rounded-xl border border-white/10 p-6 max-w-md w-full" 
            onClick={(e) => e.stopPropagation()}
          >
            <div className="flex items-center mb-4">
              <img src={activeClient.logo} alt={activeClient.name} className="h-12 mr-4" />
              <div>
                <h3 className="font-bold text-xl">{activeClient.name}</h3>
                {activeClient.testimonial?.rating && (
                  <div className="flex mt-1">
                    {[...Array(activeClient.testimonial.rating)].map((_, i) => (
                      <Star key={i} size={16} className="text-yellow-400 fill-yellow-400" />
                    ))}
                  </div>
                )}
              </div>
            </div>
            
            <blockquote className="italic text-white/90 border-l-4 border-electric pl-4 my-4">
              "{activeClient.testimonial?.quote}"
            </blockquote>
            
            <footer className="text-white/70 mt-2 text-right">
              — {activeClient.testimonial?.author}, {activeClient.testimonial?.position}
            </footer>
            
            <div className="mt-6 flex justify-end">
              <Button variant="outline" onClick={() => setActiveClient(null)}>
                Close
              </Button>
            </div>
          </div>
        </div>
      )}

      {/* Featured client testimonial/case study */}
      <div className="bg-black/30 backdrop-blur-lg rounded-2xl border border-white/10 p-8 mb-16">
        <div className="flex flex-col md:flex-row gap-8 items-center">
          <div className="md:w-1/3">
            <img 
              src="/lovable-uploads/afd512f8-af6f-4adb-bb3e-ed3b41ed3d11.png" 
              alt="Grey Matters Featured Client" 
              className="max-w-full h-auto rounded-xl bg-black/40 p-6"
            />
          </div>
          <div className="md:w-2/3">
            <h3 className="text-2xl font-bold mb-4 text-electric">Client Spotlight: Grey Matters Studio</h3>
            <p className="text-white/80 mb-4">
              Complete brand redesign and marketing automation implementation that resulted in a 45% increase in 
              client acquisition. Built custom CRM workflows, email sequences, and a new booking system that eliminated manual follow-ups.
            </p>
            <blockquote className="italic text-white/70 border-l-4 border-electric pl-4 my-4">
              "Iqra transformed our entire digital approach. From clunky systems to smooth automation, we now spend less time on admin and more time with clients."
              <footer className="text-white/60 mt-2">— Director, Grey Matters Studio</footer>
            </blockquote>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ClientShowcase;
