
import { ArrowRight } from "lucide-react";
import { services } from "@/data/services";

interface ServicesSectionProps {
  visibleSection: string | null;
  scrollToSection: (sectionId: string | null) => void;
}

const ServicesSection = ({ visibleSection, scrollToSection }: ServicesSectionProps) => {
  return (
    <section id="services" className="section-padding">
      <div className="container mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">Services</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services && services.map((service) => (
            <div 
              key={service.id} 
              className={`rounded-lg overflow-hidden shadow-lg shadow-black/30 transition-all duration-300 hover:shadow-electric/30 hover:scale-[1.02] bg-black/50 backdrop-blur-sm border border-white/10 p-6 ${service.sectionId ? 'cursor-pointer hover:bg-black/20' : ''} ${service.sectionId && visibleSection === service.sectionId ? 'ring-2 ring-electric' : ''}`}
              onClick={() => scrollToSection(service.sectionId)}
            >
              <div className="bg-electric/20 p-3 rounded-full w-14 h-14 flex items-center justify-center mb-4">
                <service.icon className="text-electric" size={24} />
              </div>
              <h3 className="text-xl font-semibold mb-3">{service.title}</h3>
              <p className="text-white/70">{service.description}</p>
              {service.sectionId && (
                <div className="mt-3 text-electric text-sm flex items-center">
                  <span>{visibleSection === service.sectionId ? 'Hide details' : 'View details'}</span>
                  <ArrowRight size={14} className="ml-1" />
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
