
import { ArrowRight, Calendar } from "lucide-react";
import { services } from "@/data/services";
import { Button } from "@/components/ui/button";
import { useIsMobile } from "@/hooks/use-mobile";
import ServiceCarousel from "@/components/ServiceCarousel";

interface ServicesSectionProps {
  visibleSection: string | null;
  scrollToSection: (sectionId: string | null) => void;
}

const ServicesSection = ({ visibleSection, scrollToSection }: ServicesSectionProps) => {
  const isMobile = useIsMobile();
  
  return (
    <section id="services" className="section-padding bg-gradient-to-b from-white to-blue-50 dark:from-gray-900 dark:to-blue-950/30">
      <div className="container mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold mb-6 text-center bg-clip-text text-transparent bg-gradient-to-r from-royal to-electric dark:from-electric dark:to-maroon">Services</h2>
        <div className="max-w-3xl mx-auto mb-12">
          <p className="text-gray-700 dark:text-gray-300 text-center">
            I offer a comprehensive range of services to help your business grow through strategic digital solutions, 
            automation, and marketing optimization. Click on any service to learn more.
          </p>
        </div>
        
        {/* Mobile and desktop views */}
        {isMobile ? (
          <ServiceCarousel 
            visibleSection={visibleSection} 
            scrollToSection={scrollToSection} 
          />
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services && services.map((service) => (
              <div 
                key={service.id} 
                className={`rounded-lg overflow-hidden shadow-md transition-all duration-300 hover:shadow-xl hover:scale-[1.02] bg-white dark:bg-gray-800 border border-gray-100 dark:border-gray-700 p-6 ${service.sectionId ? 'cursor-pointer hover:bg-blue-50 dark:hover:bg-blue-900/30' : ''} ${service.sectionId && visibleSection === service.sectionId ? 'ring-2 ring-royal dark:ring-electric' : ''}`}
                onClick={() => scrollToSection(service.sectionId)}
              >
                <div className="bg-blue-100 dark:bg-blue-900/50 p-3 rounded-full w-14 h-14 flex items-center justify-center mb-4">
                  <service.icon className="text-royal dark:text-electric" size={24} />
                </div>
                <h3 className="text-xl font-semibold mb-3 bg-clip-text text-transparent bg-gradient-to-r from-royal to-electric dark:from-electric dark:to-maroon">{service.title}</h3>
                <p className="text-gray-600 dark:text-gray-300 mb-4">{service.description}</p>
                
                <div className="flex justify-between items-center">
                  {service.sectionId && (
                    <div className="text-royal dark:text-electric text-sm flex items-center">
                      <span>{visibleSection === service.sectionId ? 'Hide details' : 'View details'}</span>
                      <ArrowRight size={14} className="ml-1" />
                    </div>
                  )}
                  
                  <Button
                    variant="ghost"
                    size="sm"
                    className="text-gray-600 dark:text-gray-300 hover:text-royal dark:hover:text-electric hover:bg-blue-50 dark:hover:bg-blue-900/20 text-xs"
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
        )}
        
        <div className="mt-16 text-center">
          <p className="text-gray-600 dark:text-gray-300 mb-6 max-w-2xl mx-auto">
            Not sure which service you need? Let's discuss your goals in a personalized consultation.
          </p>
          <Button 
            className="bg-royal hover:bg-royal/90 dark:bg-electric dark:hover:bg-electric/90 text-white px-6 py-5 h-auto"
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
