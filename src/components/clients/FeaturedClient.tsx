
import React, { useState, useEffect } from "react";
import { ExternalLink, Filter } from "lucide-react";
import { 
  Carousel, 
  CarouselContent, 
  CarouselItem, 
  CarouselNext, 
  CarouselPrevious,
  type CarouselApi
} from "@/components/ui/carousel";
import { Button } from "@/components/ui/button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

interface CaseStudy {
  name: string;
  logo: string;
  website: string;
  description: string;
  testimonial: string;
  author: string;
  category: string;
  results?: {
    stat1: { value: string; label: string; };
    stat2: { value: string; label: string; };
    stat3?: { value: string; label: string; };
  };
}

const caseStudies: CaseStudy[] = [
  {
    name: "Grey Matters Studio",
    logo: "/lovable-uploads/afd512f8-af6f-4adb-bb3e-ed3b41ed3d11.png",
    website: "https://greymatters.studio/",
    category: "CRM Automation",
    description: "Complete brand redesign and marketing automation implementation that resulted in a 45% increase in client acquisition. Built custom CRM workflows, email sequences, and a new booking system that eliminated manual follow-ups.",
    testimonial: "Iqra transformed our entire digital approach. From clunky systems to smooth automation, we now spend less time on admin and more time with clients.",
    author: "Director, Grey Matters Studio",
    results: {
      stat1: { value: "45%", label: "Increase in client acquisition" },
      stat2: { value: "3x", label: "Increase in bookings" },
      stat3: { value: "70%", label: "Reduction in admin work" }
    }
  },
  {
    name: "Triad Diagnostic Solutions",
    logo: "/lovable-uploads/64c324e0-6cd3-4ea1-84b9-45893813da58.png",
    website: "https://triaddiagnosticsolutions.com/",
    category: "Email Marketing",
    description: "Developed a segmented email automation workflow to recover high-value abandoned carts for automotive diagnostic products, specifically ADAS kits and full diagnostic packages.",
    testimonial: "The abandoned cart recovery system increased our conversions by 22% and helped us collect 60% more reviews. The automated segmentation saves our team hours of manual work every week.",
    author: "Operations Manager, Triad Diagnostic Solutions",
    results: {
      stat1: { value: "22%", label: "Recovery rate on abandoned carts" },
      stat2: { value: "60%", label: "Increase in review submissions" },
      stat3: { value: "↓", label: "Reduced sales team friction" }
    }
  },
  {
    name: "GetSAID",
    logo: "/lovable-uploads/64c324e0-6cd3-4ea1-84b9-45893813da58.png",
    website: "https://getsaid.ai/",
    category: "AI Development",
    description: "AI chatbot implementation and integration with existing CRM system. Improved customer engagement and automated lead qualification process resulting in higher quality leads.",
    testimonial: "Iqra's integration of our AI tools with automated marketing sequences increased our conversion rates by 45%. Her technical expertise is outstanding.",
    author: "David Chen, Product Manager",
    results: {
      stat1: { value: "45%", label: "Increase in conversion rates" },
      stat2: { value: "65%", label: "Reduction in support tickets" },
      stat3: { value: "40%", label: "Improved lead qualification" }
    }
  },
  {
    name: "Finance Management Platform",
    logo: "/lovable-uploads/64c324e0-6cd3-4ea1-84b9-45893813da58.png",
    website: "#", // Fixed the syntax error here
    category: "Product Development",
    description: "Designed and developed a user-friendly finance management platform for young professionals juggling savings, debt, and daily budgeting using the Lovable framework for UX/UI strategy and product development.",
    testimonial: "By leaning into Lovable's user-centered, emotion-driven development process, we successfully designed a financial tool that didn't just solve problems—it created an emotional connection with users.",
    author: "Product Lead, Fintech Startup",
    results: {
      stat1: { value: "86%", label: "User recommendation rate" },
      stat2: { value: "40%", label: "Time-on-task reduction" },
      stat3: { value: "90%", label: "Task completion rate" }
    }
  },
  {
    name: "Pure Water",
    logo: "/lovable-uploads/64c324e0-6cd3-4ea1-84b9-45893813da58.png",
    website: "https://purewaterfiltration.com/",
    category: "Funnel Development",
    description: "Designed a multi-step sales funnel for a bottleless water cooler company, increasing lead conversion rate by 45% and reducing customer acquisition cost by 38%.",
    testimonial: "Iqra's funnel design completely transformed our lead quality. We're now getting better leads at a lower cost, and our sales team is more efficient.",
    author: "Michael Roberts, Marketing Director",
    results: {
      stat1: { value: "45%", label: "Increase in lead conversion" },
      stat2: { value: "38%", label: "Reduction in acquisition cost" },
      stat3: { value: "22%", label: "Improved average order value" }
    }
  }
];

const FeaturedClient: React.FC = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [carouselApi, setCarouselApi] = useState<CarouselApi | null>(null);
  const [activeCategory, setActiveCategory] = useState<string>("all");
  const [filteredStudies, setFilteredStudies] = useState<CaseStudy[]>(caseStudies);

  // Extract unique categories
  const categories = ["all", ...Array.from(new Set(caseStudies.map(study => study.category)))];

  // Filter case studies based on active category
  useEffect(() => {
    if (activeCategory === "all") {
      setFilteredStudies(caseStudies);
    } else {
      setFilteredStudies(caseStudies.filter(study => study.category === activeCategory));
    }
  }, [activeCategory]);

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
      <div className="flex flex-col md:flex-row justify-between items-center mb-6">
        <h2 className="text-2xl font-bold text-gray-900 mb-4 md:mb-0">Client Case Studies</h2>
        <div className="flex items-center space-x-2">
          <Filter size={18} className="text-blue-600" />
          <span className="text-sm text-gray-600 mr-2">Filter by service:</span>
          <Tabs defaultValue="all" value={activeCategory} onValueChange={setActiveCategory} className="w-full md:w-auto">
            <TabsList className="bg-blue-50 p-1 rounded-md">
              {categories.map((category) => (
                <TabsTrigger 
                  key={category} 
                  value={category}
                  className="text-xs px-3 py-1 capitalize"
                >
                  {category === "all" ? "All" : category}
                </TabsTrigger>
              ))}
            </TabsList>
          </Tabs>
        </div>
      </div>

      <Carousel
        opts={{
          align: "start",
          loop: true,
        }}
        className="w-full"
        setApi={setCarouselApi}
      >
        <CarouselContent>
          {filteredStudies.map((study, index) => (
            <CarouselItem key={index} className="basis-full pl-0">
              <div className="flex flex-col md:flex-row gap-6 items-center">
                <div className="md:w-1/3">
                  <div className="bg-blue-50 p-5 rounded-lg flex items-center justify-center">
                    <img 
                      src={study.logo} 
                      alt={`${study.name} Featured Client`} 
                      className="max-w-full h-auto"
                    />
                  </div>
                  <div className="mt-4 bg-blue-50 p-4 rounded-lg">
                    <h4 className="text-lg font-semibold text-blue-600 mb-3">Results</h4>
                    <div className="grid grid-cols-3 gap-2">
                      {study.results && (
                        <>
                          <div className="text-center">
                            <div className="text-xl font-bold text-gray-900">{study.results.stat1.value}</div>
                            <p className="text-xs text-gray-600">{study.results.stat1.label}</p>
                          </div>
                          <div className="text-center">
                            <div className="text-xl font-bold text-gray-900">{study.results.stat2.value}</div>
                            <p className="text-xs text-gray-600">{study.results.stat2.label}</p>
                          </div>
                          {study.results.stat3 && (
                            <div className="text-center">
                              <div className="text-xl font-bold text-gray-900">{study.results.stat3.value}</div>
                              <p className="text-xs text-gray-600">{study.results.stat3.label}</p>
                            </div>
                          )}
                        </>
                      )}
                    </div>
                  </div>
                </div>
                <div className="md:w-2/3">
                  <div className="flex justify-between items-start mb-2">
                    <div>
                      <h3 className="text-2xl font-bold text-gray-900">Case Study: {study.name}</h3>
                      <span className="inline-block px-3 py-1 bg-blue-100 text-blue-600 text-xs rounded-full mt-2">
                        {study.category}
                      </span>
                    </div>
                    <a href={study.website} target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:text-blue-800">
                      <ExternalLink size={18} />
                    </a>
                  </div>
                  <p className="text-gray-700 mb-4">
                    {study.description}
                  </p>
                  <blockquote className="italic text-gray-600 border-l-4 border-blue-500 pl-4 my-4">
                    "{study.testimonial}"
                    <footer className="text-gray-500 mt-2 font-medium">— {study.author}</footer>
                  </blockquote>
                  <div className="mt-6">
                    <Button className="bg-blue-600 hover:bg-blue-700 text-white" asChild>
                      <a href="#booking">Get Similar Results</a>
                    </Button>
                  </div>
                </div>
              </div>
            </CarouselItem>
          ))}
        </CarouselContent>
        
        <div className="flex justify-center gap-2 mt-6">
          <CarouselPrevious className="static transform-none bg-blue-100 hover:bg-blue-200 text-blue-600 border-none h-8 w-8 rounded-full" />
          <div className="flex items-center space-x-2">
            {filteredStudies.map((_, idx) => (
              <span 
                key={idx} 
                className={`block h-2 w-2 rounded-full cursor-pointer transition-all ${currentIndex === idx ? 'bg-blue-600 w-4' : 'bg-blue-200'}`}
                onClick={() => carouselApi?.scrollTo(idx)}
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
