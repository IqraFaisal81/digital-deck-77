
import { ArrowRight, Calendar } from "lucide-react";
import { services } from "@/data/services";
import { Button } from "@/components/ui/button";
import { useIsMobile } from "@/hooks/use-mobile";
import ServiceCarousel from "@/components/ServiceCarousel";
import SectionHeader from "@/components/skills/SectionHeader";

interface ServicesSectionProps {
  visibleSection: string | null;
  scrollToSection: (sectionId: string | null) => void;
}

const ServicesSection = ({ visibleSection, scrollToSection }: ServicesSectionProps) => {
  const isMobile = useIsMobile();
  
  return (
    <section id="services" className="section-padding relative">
      {/* Background decoration */}
      <div className="absolute inset-0 bg-gradient-to-b from-white to-blue-50 dark:from-gray-900 dark:to-blue-950/30 -z-10"></div>
      <div className="absolute top-40 right-20 w-72 h-72 bg-blue-200/30 dark:bg-blue-800/20 rounded-full blur-[80px]"></div>
      <div className="absolute bottom-40 left-20 w-96 h-96 bg-indigo-200/30 dark:bg-indigo-800/20 rounded-full blur-[100px]"></div>
      
      <div className="container mx-auto relative z-10">
        <SectionHeader
          title="Services"
          description="I offer a comprehensive range of services to help your business grow through strategic digital solutions, automation, and marketing optimization. Click on any service to learn more."
          alignment="center"
          useGradient={true}
        />
        
        {/* Services cards with hover animations */}
        <div className="mt-16">
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
                  className={`group rounded-xl overflow-hidden shadow-md hover:shadow-xl transition-all duration-500 bg-white/90 dark:bg-gray-800/90 backdrop-blur-sm border border-gray-100/80 dark:border-gray-700/80 p-6 
                    ${service.sectionId ? 'cursor-pointer hover:translate-y-[-8px]' : ''} 
                    ${service.sectionId && visibleSection === service.sectionId ? 'ring-2 ring-royal dark:ring-electric translate-y-[-8px]' : ''}`}
                  onClick={() => scrollToSection(service.sectionId)}
                >
                  <div className="bg-gradient-to-br from-blue-100 to-indigo-100 dark:from-blue-900/50 dark:to-indigo-900/50 p-4 rounded-xl w-16 h-16 flex items-center justify-center mb-5 transform transition-transform group-hover:scale-110 group-hover:rotate-3">
                    <service.icon className="text-royal dark:text-electric" size={24} />
                  </div>
                  <h3 className="text-xl font-semibold mb-3 bg-clip-text text-transparent bg-gradient-to-r from-royal to-electric dark:from-electric dark:to-maroon group-hover:from-electric group-hover:to-royal dark:group-hover:from-maroon dark:group-hover:to-electric transition-all duration-300">{service.title}</h3>
                  <p className="text-gray-600 dark:text-gray-300 mb-5">{service.description}</p>
                  
                  <div className="flex justify-between items-center mt-2">
                    {service.sectionId && (
                      <div className="text-royal dark:text-electric text-sm flex items-center group-hover:translate-x-1 transition-transform duration-300">
                        <span>{visibleSection === service.sectionId ? 'Hide details' : 'View details'}</span>
                        <ArrowRight size={14} className="ml-1 transition-transform duration-300 group-hover:translate-x-1" />
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
        </div>
        
        <div className="mt-16 text-center">
          <p className="text-gray-600 dark:text-gray-300 mb-6 max-w-2xl mx-auto">
            Not sure which service you need? Let's discuss your goals in a personalized consultation.
          </p>
          <Button 
            className="relative overflow-hidden bg-gradient-to-r from-royal to-electric hover:to-royal dark:from-electric dark:to-maroon dark:hover:to-electric text-white px-6 py-5 h-auto group"
            asChild
          >
            <a href="#booking" className="flex items-center">
              <span className="absolute inset-0 w-full h-full bg-gradient-to-r from-electric to-royal dark:from-maroon dark:to-electric opacity-0 group-hover:opacity-100 transition-opacity duration-300"></span>
              <span className="relative flex items-center">
                <Calendar className="mr-2 h-5 w-5 group-hover:rotate-12 transition-transform duration-300" />
                Schedule a Free Strategy Call
              </span>
            </a>
          </Button>
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
