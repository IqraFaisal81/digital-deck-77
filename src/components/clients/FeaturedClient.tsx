
import React, { useState } from "react";
import { ExternalLink } from "lucide-react";
import { 
  Carousel, 
  CarouselContent, 
  CarouselItem, 
  CarouselNext, 
  CarouselPrevious 
} from "@/components/ui/carousel";
import type { CarouselApi } from "@/components/ui/carousel";

const featuredClients = [
  {
    name: "Grey Matters Studio",
    logo: "/lovable-uploads/afd512f8-af6f-4adb-bb3e-ed3b41ed3d11.png",
    website: "https://greymatters.studio/",
    description: "Complete brand redesign and marketing automation implementation that resulted in a 45% increase in client acquisition. Built custom CRM workflows, email sequences, and a new booking system that eliminated manual follow-ups.",
    testimonial: "Iqra transformed our entire digital approach. From clunky systems to smooth automation, we now spend less time on admin and more time with clients.",
    author: "Director, Grey Matters Studio"
  },
  {
    name: "GetSAID",
    logo: "/lovable-uploads/64c324e0-6cd3-4ea1-84b9-45893813da58.png",
    website: "https://getsaid.ai/",
    description: "AI chatbot implementation and integration with existing CRM system. Improved customer engagement and automated lead qualification process resulting in higher quality leads.",
    testimonial: "Iqra's integration of our AI tools with automated marketing sequences increased our conversion rates by 45%. Her technical expertise is outstanding.",
    author: "David Chen, Product Manager"
  },
  {
    name: "All Pro Heating & Cooling",
    logo: "/lovable-uploads/cbda554d-0f5b-483c-99ad-5b285101ffd3.png",
    website: "https://www.callallproindy.com/",
    description: "Developed a comprehensive service scheduling system with automatic notifications and technician dispatch. Implemented customer follow-up sequences.",
    testimonial: "The CRM system Iqra implemented helped us track service calls and follow-ups seamlessly. Our response time has improved by 40%.",
    author: "James Thompson, Operations Manager"
  }
];

const FeaturedClient: React.FC = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [carouselApi, setCarouselApi] = useState<CarouselApi | null>(null);

  // Update the current index when the carousel changes
  React.useEffect(() => {
    if (!carouselApi) return;

    const onSelect = () => {
      setCurrentIndex(carouselApi.selectedScrollSnap());
    };

    carouselApi.on("select", onSelect);
    return () => {
      carouselApi.off("select", onSelect);
    };
  }, [carouselApi]);

  return (
    <div className="bg-white rounded-xl shadow-lg border border-gray-100 p-6 mb-12">
      <Carousel
        opts={{
          align: "start",
          loop: true,
        }}
        className="w-full"
        setApi={setCarouselApi}
      >
        <CarouselContent>
          {featuredClients.map((client, index) => (
            <CarouselItem key={index} className="basis-full pl-0">
              <div className="flex flex-col md:flex-row gap-6 items-center">
                <div className="md:w-1/3">
                  <div className="bg-blue-50 p-5 rounded-lg flex items-center justify-center">
                    <img 
                      src={client.logo} 
                      alt={`${client.name} Featured Client`} 
                      className="max-w-full h-auto"
                    />
                  </div>
                </div>
                <div className="md:w-2/3">
                  <div className="flex justify-between items-start mb-2">
                    <h3 className="text-2xl font-bold text-gray-900">Client Spotlight: {client.name}</h3>
                    <a href={client.website} target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:text-blue-800">
                      <ExternalLink size={18} />
                    </a>
                  </div>
                  <p className="text-gray-700 mb-4">
                    {client.description}
                  </p>
                  <blockquote className="italic text-gray-600 border-l-4 border-blue-500 pl-4 my-4">
                    "{client.testimonial}"
                    <footer className="text-gray-500 mt-2 font-medium">— {client.author}</footer>
                  </blockquote>
                </div>
              </div>
            </CarouselItem>
          ))}
        </CarouselContent>
        <div className="flex justify-center gap-2 mt-6">
          <CarouselPrevious className="static transform-none bg-blue-100 hover:bg-blue-200 text-blue-600 border-none h-8 w-8 rounded-full" />
          <div className="flex items-center space-x-2">
            {featuredClients.map((_, idx) => (
              <span 
                key={idx} 
                className={`block h-2 w-2 rounded-full ${currentIndex === idx ? 'bg-blue-600' : 'bg-blue-200'}`}
              />
            ))}
          </div>
          <CarouselNext className="static transform-none bg-blue-100 hover:bg-blue-200 text-blue-600 border-none h-8 w-8 rounded-full" />
        </div>
      </Carousel>
    </div>
  );
};

export default FeaturedClient;
