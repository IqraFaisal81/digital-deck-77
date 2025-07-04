
import { ArrowRight, Calendar, Eye, EyeOff, Sparkles } from "lucide-react";
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
    <section id="services" className="py-24 lg:py-32 relative overflow-hidden bg-gradient-to-br from-white via-blue-50/30 to-purple-50/30 dark:from-gray-900 dark:via-blue-950/30 dark:to-purple-950/30">
      {/* Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-0 right-0 w-96 h-96 bg-blue-500/5 rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 left-0 w-80 h-80 bg-purple-500/5 rounded-full blur-3xl"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-64 h-64 bg-pink-500/5 rounded-full blur-2xl"></div>
      </div>
      
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center px-4 py-2 mb-6 rounded-full bg-gradient-to-r from-blue-100 to-purple-100 dark:from-blue-900/30 dark:to-purple-900/30 border border-blue-200 dark:border-blue-800">
            <Sparkles className="h-4 w-4 mr-2 text-blue-600 dark:text-blue-400" />
            <span className="text-sm font-medium text-blue-800 dark:text-blue-300">What I Offer</span>
          </div>
          
          <h2 className="text-4xl lg:text-6xl font-bold mb-6">
            <span className="bg-gradient-to-r from-gray-900 via-blue-800 to-purple-800 dark:from-white dark:via-blue-200 dark:to-purple-200 bg-clip-text text-transparent">
              Comprehensive Digital
            </span>
            <br />
            <span className="bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 bg-clip-text text-transparent">
              Solutions & Services
            </span>
          </h2>
          
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-4xl mx-auto leading-relaxed">
            From strategic automation to cutting-edge AI integration, I deliver end-to-end solutions 
            that transform how your business operates and grows in the digital landscape.
          </p>
        </div>
        
        {/* Services Grid/Carousel */}
        {isMobile ? (
          <ServiceCarousel 
            visibleSection={visibleSection} 
            scrollToSection={scrollToSection} 
          />
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto mb-16">
            {services && services.map((service, index) => (
              <Card 
                key={service.id} 
                className={`group relative overflow-hidden transition-all duration-500 hover:scale-105 hover:-translate-y-2 bg-white/90 dark:bg-gray-800/90 backdrop-blur-sm border border-gray-100 dark:border-gray-700 hover:shadow-2xl hover:shadow-blue-500/10 ${
                  service.sectionId ? 'cursor-pointer' : ''
                } ${
                  service.sectionId && visibleSection === service.sectionId 
                    ? 'ring-2 ring-blue-500 shadow-2xl shadow-blue-500/20' 
                    : ''
                }`}
                onClick={() => scrollToSection(service.sectionId)}
              >
                {/* Gradient overlay */}
                <div className="absolute inset-0 bg-gradient-to-br from-blue-500/5 via-purple-500/5 to-pink-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                
                <CardHeader className="relative z-10 pb-4">
                  <div className="flex items-start gap-4">
                    <div className={`p-4 rounded-2xl bg-gradient-to-br from-blue-500 to-purple-600 shadow-xl group-hover:shadow-2xl group-hover:scale-110 transition-all duration-300 ${
                      service.sectionId && visibleSection === service.sectionId ? 'animate-pulse' : ''
                    }`}>
                      <service.icon className="text-white h-6 w-6" />
                    </div>
                    <div className="flex-1">
                      <CardTitle className="text-xl font-bold bg-gradient-to-r from-gray-900 to-blue-800 dark:from-white dark:to-blue-200 bg-clip-text text-transparent group-hover:from-blue-600 group-hover:to-purple-600 transition-all duration-300">
                        {service.title}
                      </CardTitle>
                    </div>
                  </div>
                </CardHeader>
                
                <CardContent className="relative z-10 pb-6">
                  <CardDescription className="text-gray-600 dark:text-gray-300 leading-relaxed">
                    {service.description}
                  </CardDescription>
                </CardContent>
                
                <CardFooter className="relative z-10 flex justify-between items-center border-t border-gray-100 dark:border-gray-700 pt-4 bg-gray-50/50 dark:bg-gray-800/50">
                  {service.sectionId && (
                    <div className="flex items-center text-sm text-blue-600 dark:text-blue-400 font-medium">
                      {visibleSection === service.sectionId ? (
                        <>
                          <EyeOff size={16} className="mr-2" />
                          <span>Hide Details</span>
                        </>
                      ) : (
                        <>
                          <Eye size={16} className="mr-2" />
                          <span>View Details</span>
                        </>
                      )}
                      <ArrowRight size={16} className="ml-2 group-hover:translate-x-1 transition-transform duration-300" />
                    </div>
                  )}
                  
                  <Button
                    variant="ghost"
                    size="sm"
                    className="text-gray-500 hover:text-blue-600 dark:hover:text-blue-400 hover:bg-blue-50 dark:hover:bg-blue-900/20 transition-all duration-300"
                    onClick={(e) => {
                      e.stopPropagation();
                      window.open("https://calendly.com/iqrafaisal81/discovery-call?month=2025-04", "_blank");
                    }}
                  >
                    <Calendar className="mr-2 h-4 w-4" />
                    Book Call
                  </Button>
                </CardFooter>
              </Card>
            ))}
          </div>
        )}
        
        {/* CTA Section */}
        <div className="text-center mt-20">
          <div className="bg-gradient-to-r from-blue-50 to-purple-50 dark:from-blue-950/50 dark:to-purple-950/50 rounded-3xl p-8 lg:p-12 border border-blue-100 dark:border-blue-800 backdrop-blur-sm">
            <div className="max-w-3xl mx-auto">
              <h3 className="text-2xl lg:text-3xl font-bold mb-4 bg-gradient-to-r from-gray-900 to-blue-800 dark:from-white dark:to-blue-200 bg-clip-text text-transparent">
                Ready to Transform Your Business?
              </h3>
              <p className="text-gray-600 dark:text-gray-300 mb-8 text-lg leading-relaxed">
                Let's discuss your unique challenges and explore how my expertise can drive your business forward. 
                Book a free strategy session to get started.
              </p>
              <Button 
                className="bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 hover:from-blue-700 hover:via-purple-700 hover:to-pink-700 text-white rounded-full px-8 py-6 text-lg font-semibold shadow-xl hover:shadow-2xl transition-all duration-300 transform hover:scale-105"
                asChild
              >
                <a href="https://calendly.com/iqrafaisal81/discovery-call?month=2025-04" target="_blank" rel="noopener noreferrer" className="flex items-center">
                  <Calendar className="mr-2 h-5 w-5" />
                  Schedule Free Strategy Call
                  <ArrowRight className="ml-2 h-5 w-5" />
                </a>
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
