
import { ArrowRight, Calendar } from "lucide-react";
import { services } from "@/data/services";
import { Button } from "@/components/ui/button";

interface ServicesSectionProps {
  visibleSection: string | null;
  scrollToSection: (sectionId: string | null) => void;
}

const ServicesSection = ({ visibleSection, scrollToSection }: ServicesSectionProps) => {
  return (
    <section id="services" className="section-padding">
      <div className="container mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold mb-6 text-center">Services</h2>
        <div className="max-w-3xl mx-auto mb-12">
          <p className="text-white/80 text-center">
            I offer a comprehensive range of services to help your business grow through strategic digital solutions, 
            automation, and marketing optimization. Click on any service to learn more.
          </p>
        </div>
        
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
              <p className="text-white/70 mb-4">{service.description}</p>
              
              <div className="flex justify-between items-center">
                {service.sectionId && (
                  <div className="text-electric text-sm flex items-center">
                    <span>{visibleSection === service.sectionId ? 'Hide details' : 'View details'}</span>
                    <ArrowRight size={14} className="ml-1" />
                  </div>
                )}
                
                <Button
                  variant="ghost"
                  size="sm"
                  className="text-white/70 hover:text-electric hover:bg-electric/10 text-xs"
                  onClick={(e) => {
                    e.stopPropagation();
                    document.getElementById('booking')?.scrollIntoView({ behavior: 'smooth' });
                  }}
                >
                  <Calendar className="mr-1 h-3 w-3" />
                  Book Consultation
                </Button>
              </div>
            </div>
          ))}
        </div>
        
        <div className="mt-16 text-center">
          <p className="text-white/70 mb-6 max-w-2xl mx-auto">
            Not sure which service you need? Let's discuss your goals in a personalized consultation.
          </p>
          <Button 
            className="bg-electric hover:bg-electric/80 text-white px-6 py-5 h-auto"
            asChild
          >
            <a href="#booking" className="flex items-center">
              <Calendar className="mr-2 h-5 w-5" />
              Schedule a Free Strategy Call
            </a>
          </Button>
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
