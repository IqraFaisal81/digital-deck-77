
import { ArrowRight, Calendar } from "lucide-react";
import { services } from "@/data/services";
import { Button } from "@/components/ui/button";
import { useIsMobile } from "@/hooks/use-mobile";
import ServiceCarousel from "@/components/ServiceCarousel";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";

interface ServicesSectionProps {
  visibleSection: string | null;
  scrollToSection: (sectionId: string | null) => void;
}

const ServicesSection = ({ visibleSection, scrollToSection }: ServicesSectionProps) => {
  const isMobile = useIsMobile();
  
  return (
    <section id="services" className="section-padding py-20 bg-gradient-to-b from-white to-blue-50 dark:from-blue-950 dark:to-blue-900/30">
      <div className="container mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-5xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-royal to-electric dark:from-electric dark:to-blue-400">
            My Services
          </h2>
          <div className="max-w-3xl mx-auto">
            <p className="text-gray-700 dark:text-gray-300 text-lg">
              I offer a comprehensive range of services to help your business grow through strategic digital solutions, 
              automation, and marketing optimization. Click on any service to learn more.
            </p>
          </div>
        </div>
        
        {/* Mobile and desktop views */}
        {isMobile ? (
          <ServiceCarousel 
            visibleSection={visibleSection} 
            scrollToSection={scrollToSection} 
          />
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mx-auto max-w-7xl">
            {services && services.map((service) => (
              <Card 
                key={service.id} 
                className={`group h-full transition-all duration-300 hover:shadow-xl hover:scale-[1.02] overflow-hidden border-t-4 ${
                  service.sectionId && visibleSection === service.sectionId ? 'border-t-electric' : 'border-t-royal/70'
                } ${
                  service.sectionId ? 'cursor-pointer hover:bg-gradient-to-br hover:from-blue-50 hover:to-white dark:hover:from-blue-900/10 dark:hover:to-gray-900' : ''
                } rounded-xl backdrop-blur-sm`}
                onClick={() => scrollToSection(service.sectionId)}
              >
                <CardHeader className="pb-2">
                  <div className="flex items-center gap-4">
                    <div className="bg-gradient-to-br from-royal to-electric dark:from-electric dark:to-blue-600 p-3 rounded-full w-14 h-14 flex items-center justify-center shadow-md transform group-hover:rotate-3 transition-transform">
                      <service.icon className="text-white" size={24} />
                    </div>
                    <CardTitle className="text-xl bg-clip-text text-transparent bg-gradient-to-r from-royal to-electric dark:from-electric dark:to-blue-400">
                      {service.title}
                    </CardTitle>
                  </div>
                </CardHeader>
                <CardContent className="pb-6">
                  <CardDescription className="text-gray-700 dark:text-gray-300 text-sm mt-2">
                    {service.description}
                  </CardDescription>
                </CardContent>
                {service.sectionId && (
                  <Button
                    variant="ghost"
                    size="sm"
                    className="text-gray-600 dark:text-gray-300 hover:text-royal dark:hover:text-electric hover:bg-blue-50 dark:hover:bg-blue-900/20 text-xs ml-6 mb-4"
                    onClick={(e) => {
                      e.stopPropagation();
                      document.getElementById('booking')?.scrollIntoView({ behavior: 'smooth' });
                    }}
                  >
                    <Calendar className="mr-1 h-3 w-3" />
                    Book Consultation
                  </Button>
                )}
              </Card>
            ))}
          </div>
        )}
        
        <div className="mt-16 text-center">
          <p className="text-gray-600 dark:text-gray-300 mb-6 max-w-2xl mx-auto">
            Not sure which service you need? Let's discuss your goals in a personalized consultation.
          </p>
          <Button 
            className="bg-gradient-to-r from-royal to-electric hover:opacity-90 dark:from-electric dark:to-blue-600 text-white px-6 py-5 h-auto"
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
