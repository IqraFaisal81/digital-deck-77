
import { ArrowRight, Calendar } from "lucide-react";
import { services } from "@/data/services";
import { Button } from "@/components/ui/button";
import { useIsMobile } from "@/hooks/use-mobile";

interface ServicesSectionProps {
  visibleSection: string | null;
  scrollToSection: (sectionId: string | null) => void;
}

const ServicesSection = ({ visibleSection, scrollToSection }: ServicesSectionProps) => {
  const isMobile = useIsMobile();
  
  return (
    <section id="services" className="section-padding bg-gradient-to-b from-white to-blue-50">
      <div className="container mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold mb-6 text-center bg-clip-text text-transparent bg-gradient-to-r from-black to-blue-600">Services</h2>
        <div className="max-w-3xl mx-auto mb-12">
          <p className="text-gray-700 text-center">
            I offer a comprehensive range of services to help your business grow through strategic digital solutions, 
            automation, and marketing optimization. Click on any service to learn more.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services && services.map((service) => (
            <div 
              key={service.id} 
              className={`rounded-lg overflow-hidden shadow-md transition-all duration-300 hover:shadow-xl hover:scale-[1.02] bg-white border border-gray-100 p-6 ${service.sectionId ? 'cursor-pointer hover:bg-blue-50' : ''} ${service.sectionId && visibleSection === service.sectionId ? 'ring-2 ring-blue-500' : ''}`}
              onClick={() => scrollToSection(service.sectionId)}
            >
              <div className="bg-blue-100 p-3 rounded-full w-14 h-14 flex items-center justify-center mb-4">
                <service.icon className="text-blue-600" size={24} />
              </div>
              <h3 className="text-xl font-semibold mb-3 bg-clip-text text-transparent bg-gradient-to-r from-black to-blue-600">{service.title}</h3>
              <p className="text-gray-600 mb-4">{service.description}</p>
              
              <div className="flex justify-between items-center">
                {service.sectionId && (
                  <div className="text-blue-600 text-sm flex items-center">
                    <span>{visibleSection === service.sectionId ? 'Hide details' : 'View details'}</span>
                    <ArrowRight size={14} className="ml-1" />
                  </div>
                )}
                
                <Button
                  variant="ghost"
                  size="sm"
                  className="text-gray-600 hover:text-blue-600 hover:bg-blue-50 text-xs"
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
          <p className="text-gray-600 mb-6 max-w-2xl mx-auto">
            Not sure which service you need? Let's discuss your goals in a personalized consultation.
          </p>
          <Button 
            className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-5 h-auto"
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
