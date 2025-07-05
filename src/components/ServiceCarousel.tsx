import { 
  Carousel, 
  CarouselContent, 
  CarouselItem, 
  CarouselNext, 
  CarouselPrevious 
} from "@/components/ui/carousel";
import { ArrowRight, Calendar } from "lucide-react";
import { services } from "@/data/services";
import { Button } from "@/components/ui/button";
import { useCarouselState } from "@/hooks/useCarouselState";
import CarouselPagination from "./project-highlights/CarouselPagination";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "./ui/card";
import { useNavigate } from "react-router-dom";

interface ServiceCarouselProps {
  visibleSection: string | null;
  scrollToSection: (sectionId: string | null) => void;
}

const ServiceCarousel = ({ visibleSection, scrollToSection }: ServiceCarouselProps) => {
  const { carouselApi, setCarouselApi, currentIndex } = useCarouselState();
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
        'ai-chatbot': '/services/ai-chatbot',
        'webflow-projects': '/services/webflow',
        'shopify-projects': '/services/shopify',
        'tracking-attribution': '/services/tracking-attribution',
        'zapier-automations': '/services/zapier'
      };
      
      const route = routeMap[service.sectionId];
      if (route) {
        navigate(route);
      }
    }
  };
  
  return (
    <div className="w-full mt-8">
      <Carousel
        opts={{
          align: "start",
          loop: true,
        }}
        className="w-full"
        setApi={setCarouselApi}
      >
        <CarouselContent>
          {services && services.map((service, index) => (
            <CarouselItem 
              key={service.id} 
              className="basis-full sm:basis-1/2 md:basis-1/3 lg:basis-1/3 p-2"
            >
              <Card 
                className={`group relative overflow-hidden h-full flex flex-col transition-all duration-500 hover:scale-105 hover:-translate-y-3 bg-white/95 dark:bg-gray-800/95 backdrop-blur-sm border border-gray-200 dark:border-gray-700 hover:shadow-2xl hover:shadow-blue-500/20 ${
                  service.sectionId ? 'cursor-pointer' : ''
                }`}
                onClick={() => handleServiceClick(service)}
              >
                {/* Colorful gradient overlay */}
                <div className={`absolute inset-0 bg-gradient-to-br ${cardGradients[index % cardGradients.length]} opacity-0 group-hover:opacity-100 transition-opacity duration-500`}></div>
                
                <CardHeader className="relative z-10 pb-2">
                  <div className="flex items-center gap-4">
                    <div className={`p-3 rounded-2xl bg-gradient-to-br ${iconGradients[index % iconGradients.length]} shadow-xl group-hover:shadow-2xl group-hover:scale-110 transition-all duration-300 w-14 h-14 flex items-center justify-center`}>
                      <service.icon className="text-white" size={24} />
                    </div>
                    <CardTitle className="text-xl bg-gradient-to-r from-gray-900 to-blue-800 dark:from-white dark:to-blue-200 bg-clip-text text-transparent group-hover:from-blue-600 group-hover:to-purple-600 transition-all duration-300">
                      {service.title}
                    </CardTitle>
                  </div>
                </CardHeader>
                
                <CardContent className="relative z-10 pb-6 flex-grow">
                  <CardDescription className="text-gray-600 dark:text-gray-300 text-sm">
                    {service.description}
                  </CardDescription>
                </CardContent>
                
                <CardFooter className="relative z-10 flex justify-between items-center border-t pt-4 bg-gray-50/80 dark:bg-gray-800/80 mt-auto">
                  {service.sectionId && (
                    <div className="flex items-center text-sm text-blue-600 dark:text-blue-400 font-medium">
                      <span>Learn More</span>
                      <ArrowRight size={16} className="ml-2 group-hover:translate-x-1 transition-transform duration-300" />
                    </div>
                  )}
                  
                  <Button
                    variant="ghost"
                    size="sm"
                    className="text-gray-500 hover:text-white hover:bg-gradient-to-r hover:from-blue-500 hover:to-purple-500 dark:hover:text-white transition-all duration-300 text-xs"
                    onClick={(e) => {
                      e.stopPropagation();
                      window.open("https://calendly.com/iqrafaisal81/discovery-call?month=2025-04", "_blank");
                    }}
                  >
                    <Calendar className="mr-1 h-3 w-3" />
                    Book Call
                  </Button>
                </CardFooter>
              </Card>
            </CarouselItem>
          ))}
        </CarouselContent>
        
        <div className="flex justify-center items-center gap-4 mt-6">
          <CarouselPrevious className="static transform-none bg-white/90 dark:bg-gray-800/90 backdrop-blur-sm hover:bg-gradient-to-r hover:from-blue-500 hover:to-purple-500 hover:text-white border-2 border-blue-200 dark:border-blue-800 hover:border-transparent text-gray-700 dark:text-gray-300 shadow-lg hover:shadow-xl hover:scale-105 transition-all duration-300 w-12 h-12 rounded-xl" />
          <CarouselPagination 
            carouselApi={carouselApi}
            currentIndex={currentIndex}
            items={services}
          />
          <CarouselNext className="static transform-none bg-white/90 dark:bg-gray-800/90 backdrop-blur-sm hover:bg-gradient-to-r hover:from-blue-500 hover:to-purple-500 hover:text-white border-2 border-blue-200 dark:border-blue-800 hover:border-transparent text-gray-700 dark:text-gray-300 shadow-lg hover:shadow-xl hover:scale-105 transition-all duration-300 w-12 h-12 rounded-xl" />
        </div>
      </Carousel>
    </div>
  );
};

export default ServiceCarousel;
