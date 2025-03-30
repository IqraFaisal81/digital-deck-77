import React from "react";
import { motion } from "framer-motion";
import { ExternalLink } from "lucide-react";
import { Button } from "@/components/ui/button";

interface ClientType {
  name: string;
  logo: string;
  website: string;
  description: string;
}

const clients: ClientType[] = [
  {
    name: "Advanced Dental Care",
    logo: "/lovable-uploads/01ce4945-a7d8-4c51-b0b6-5f3bb018aee9.png",
    website: "https://www.advancedindiana.com/",
    description: "Premier dental care services with advanced technology and patient-focused approach."
  },
  {
    name: "All Pro Heating & Cooling",
    logo: "/lovable-uploads/cbda554d-0f5b-483c-99ad-5b285101ffd3.png",
    website: "https://www.callallproindy.com/",
    description: "Comprehensive HVAC, plumbing, and drainage solutions for residential and commercial clients."
  },
  {
    name: "Grey Matters",
    logo: "/lovable-uploads/afd512f8-af6f-4adb-bb3e-ed3b41ed3d11.png",
    website: "https://greymatters.studio/",
    description: "Innovative brain training studio focused on cognitive health and mental wellness."
  },
  {
    name: "MB Collections",
    logo: "/lovable-uploads/a2f6aa66-f631-443c-a7da-7418a3f06fb2.png",
    website: "https://mbcollections.com.pk/",
    description: "Curated fashion collections bringing premium style and elegance to discerning clients."
  },
  {
    name: "March on Mission",
    logo: "/lovable-uploads/459570af-5ccd-4c1d-9cd0-3b4bc8a4a618.png",
    website: "https://www.marchonmission.org/",
    description: "Nonprofit organization dedicated to making positive impacts in communities through targeted initiatives."
  },
  {
    name: "Triad Diagnostic Solutions",
    logo: "/lovable-uploads/33c82f7f-e3d3-4794-bb0f-f6c2db821eb5.png",
    website: "https://www.triad-ds.com/",
    description: "Cutting-edge diagnostic solutions and equipment for the automotive industry."
  },
  {
    name: "BearPlex",
    logo: "/lovable-uploads/84abbd7d-4c45-4186-8442-6b7415f8a35a.png",
    website: "https://bearplex.com/",
    description: "Innovative digital solutions and technology services for modern businesses."
  }
];

const ClientShowcase: React.FC = () => {
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
          </motion.div>
        ))}
      </div>

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

      {/* Client collaboration stats */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <div className="bg-black/20 backdrop-blur-sm rounded-xl p-6 border border-white/10 text-center">
          <div className="text-4xl font-bold text-electric mb-2">7+</div>
          <div className="text-white/80">Industry-Leading Clients</div>
        </div>
        <div className="bg-black/20 backdrop-blur-sm rounded-xl p-6 border border-white/10 text-center">
          <div className="text-4xl font-bold text-electric mb-2">30+</div>
          <div className="text-white/80">Projects Delivered</div>
        </div>
        <div className="bg-black/20 backdrop-blur-sm rounded-xl p-6 border border-white/10 text-center">
          <div className="text-4xl font-bold text-electric mb-2">45%</div>
          <div className="text-white/80">Avg. Conversion Boost</div>
        </div>
      </div>
    </div>
  );
};

export default ClientShowcase;
