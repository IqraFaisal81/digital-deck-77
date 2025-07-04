
import { ArrowRight, Calendar, Sparkles } from "lucide-react";
import { services } from "@/data/services";
import { Button } from "@/components/ui/button";
import { useIsMobile } from "@/hooks/use-mobile";
import ServiceCarousel from "@/components/ServiceCarousel";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { useNavigate } from "react-router-dom";

interface ServicesSectionProps {
  visibleSection: string | null;
  scrollToSection: (sectionId: string | null) => void;
}

const ServicesSection = ({ visibleSection, scrollToSection }: ServicesSectionProps) => {
  const isMobile = useIsMobile();
  const navigate = useNavigate();
  
  // Colorful gradient combinations for each service card
  const cardGradients = [
    "from-blue-500/20 via-cyan-500/20 to-teal-500/20", // CRM Automation
    "from-purple-500/20 via-pink-500/20 to-rose-500/20", // Funnel Development
    "from-green-500/20 via-emerald-500/20 to-cyan-500/20", // Email Marketing
    "from-orange-500/20 via-red-500/20 to-pink-500/20", // Webflow Development
    "from-indigo-500/20 via-purple-500/20 to-blue-500/20", // SEO & Analytics
    "from-yellow-500/20 via-orange-500/20 to-red-500/20", // Zapier Automations
    "from-pink-500/20 via-rose-500/20 to-red-500/20", // Tracking & Attribution
    "from-cyan-500/20 via-blue-500/20 to-indigo-500/20", // AI Chatbot
    "from-violet-500/20 via-purple-500/20 to-pink-500/20", // Lovable Development
    "from-emerald-500/20 via-green-500/20 to-teal-500/20", // Shopify Solutions
  ];

  const iconGradients = [
    "from-blue-500 to-cyan-500", // CRM Automation
    "from-purple-500 to-pink-500", // Funnel Development
    "from-green-500 to-emerald-500", // Email Marketing
    "from-orange-500 to-red-500", // Webflow Development
    "from-indigo-500 to-purple-500", // SEO & Analytics
    "from-yellow-500 to-orange-500", // Zapier Automations
    "from-pink-500 to-rose-500", // Tracking & Attribution
    "from-cyan-500 to-blue-500", // AI Chatbot
    "from-violet-500 to-purple-500", // Lovable Development
    "from-emerald-500 to-green-500", // Shopify Solutions
  ];

  const handleServiceClick = (service: any) => {
    if (service.sectionId) {
      // Map section IDs to route paths
      const routeMap: { [key: string]: string } = {
        'workflows': '/services/workflows',
        'funnels': '/services/funnels',
        'email-marketing': '/services/email-marketing',
        'seo-audits': '/services/seo-audits',
        'ai-chatbot': '/services/ai-chatbot'
      };
      
      const route = routeMap[service.sectionId];
      if (route) {
        navigate(route);
      }
    }
  };
  
  return (
    <section id="services" className="py-24 lg:py-32 relative overflow-hidden bg-gradient-to-br from-white via-blue-50/50 to-purple-50/50 dark:from-gray-900 dark:via-blue-950/30 dark:to-purple-950/30">
      {/* Enhanced Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-0 right-0 w-96 h-96 bg-gradient-to-br from-blue-500/10 to-cyan-500/10 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-0 left-0 w-80 h-80 bg-gradient-to-br from-purple-500/10 to-pink-500/10 rounded-full blur-3xl animate-pulse delay-1000"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-64 h-64 bg-gradient-to-br from-emerald-500/10 to-teal-500/10 rounded-full blur-2xl animate-pulse delay-2000"></div>
        <div className="absolute top-1/4 left-1/4 w-48 h-48 bg-gradient-to-br from-orange-500/10 to-red-500/10 rounded-full blur-2xl animate-pulse delay-500"></div>
        <div className="absolute bottom-1/4 right-1/4 w-56 h-56 bg-gradient-to-br from-violet-500/10 to-purple-500/10 rounded-full blur-2xl animate-pulse delay-1500"></div>
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
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 max-w-8xl mx-auto mb-16">
            {services && services.map((service, index) => (
              <Card 
                key={service.id} 
                className={`group relative overflow-hidden transition-all duration-500 hover:scale-105 hover:-translate-y-3 bg-white/95 dark:bg-gray-800/95 backdrop-blur-sm border border-gray-200 dark:border-gray-700 hover:shadow-2xl hover:shadow-blue-500/20 ${
                  service.sectionId ? 'cursor-pointer' : ''
                }`}
                onClick={() => handleServiceClick(service)}
              >
                {/* Colorful gradient overlay */}
                <div className={`absolute inset-0 bg-gradient-to-br ${cardGradients[index % cardGradients.length]} opacity-0 group-hover:opacity-100 transition-opacity duration-500`}></div>
                
                <CardHeader className="relative z-10 pb-4">
                  <div className="flex flex-col items-center text-center gap-4">
                    <div className={`p-4 rounded-2xl bg-gradient-to-br ${iconGradients[index % iconGradients.length]} shadow-xl group-hover:shadow-2xl group-hover:scale-110 transition-all duration-300`}>
                      <service.icon className="text-white h-7 w-7" />
                    </div>
                    <CardTitle className="text-lg font-bold bg-gradient-to-r from-gray-900 to-blue-800 dark:from-white dark:to-blue-200 bg-clip-text text-transparent group-hover:from-blue-600 group-hover:to-purple-600 transition-all duration-300">
                      {service.title}
                    </CardTitle>
                  </div>
                </CardHeader>
                
                <CardContent className="relative z-10 pb-6">
                  <CardDescription className="text-gray-600 dark:text-gray-300 leading-relaxed text-sm text-center">
                    {service.description}
                  </CardDescription>
                </CardContent>
                
                <CardFooter className="relative z-10 flex flex-col gap-3 border-t border-gray-100 dark:border-gray-700 pt-4 bg-gray-50/80 dark:bg-gray-800/80">
                  {service.sectionId && (
                    <div className="flex items-center justify-center text-sm text-blue-600 dark:text-blue-400 font-medium">
                      <span>Learn More</span>
                      <ArrowRight size={16} className="ml-2 group-hover:translate-x-1 transition-transform duration-300" />
                    </div>
                  )}
                  
                  <Button
                    variant="ghost"
                    size="sm"
                    className="w-full text-gray-500 hover:text-white hover:bg-gradient-to-r hover:from-blue-500 hover:to-purple-500 dark:hover:text-white transition-all duration-300"
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
        
        {/* Enhanced CTA Section */}
        <div className="text-center mt-20">
          <div className="relative bg-gradient-to-r from-blue-50 via-purple-50 to-pink-50 dark:from-blue-950/50 dark:via-purple-950/50 dark:to-pink-950/50 rounded-3xl p-8 lg:p-12 border border-blue-200 dark:border-blue-800 backdrop-blur-sm overflow-hidden">
            {/* Animated background elements */}
            <div className="absolute inset-0 overflow-hidden">
              <div className="absolute top-0 left-0 w-32 h-32 bg-gradient-to-br from-blue-400/20 to-cyan-400/20 rounded-full blur-2xl animate-pulse"></div>
              <div className="absolute bottom-0 right-0 w-40 h-40 bg-gradient-to-br from-purple-400/20 to-pink-400/20 rounded-full blur-2xl animate-pulse delay-1000"></div>
            </div>
            
            <div className="max-w-3xl mx-auto relative z-10">
              <h3 className="text-2xl lg:text-3xl font-bold mb-4 bg-gradient-to-r from-gray-900 via-blue-800 to-purple-800 dark:from-white dark:via-blue-200 dark:to-purple-200 bg-clip-text text-transparent">
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
