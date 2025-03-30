import { useState } from "react";
import { ArrowRight, Calendar, Filter } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

// Define the case study type
interface CaseStudy {
  id: number;
  title: string;
  client: string;
  category: string;
  image: string;
  challenge: string;
  strategy: string[];
  results: {
    stat1: { value: string; label: string; };
    stat2: { value: string; label: string; };
    stat3?: { value: string; label: string; };
  };
  tags: string[];
}

// Define case studies data
const caseStudies: CaseStudy[] = [
  {
    id: 1,
    title: "Re-engagement Workflow for Abandoned Cart Users",
    client: "Triad Diagnostic Solutions",
    category: "Email Marketing",
    image: "https://images.unsplash.com/photo-1518770660439-4636190af475",
    challenge: "Triad wanted to recover high-value customers who abandoned carts—specifically those considering ADAS kits and full diagnostic packages. The lack of SKU tracking in their system made automation complex, requiring manual segmentation.",
    strategy: [
      "Tags were applied post-abandonment to identify Full Kit vs. ADAS Kit interest.",
      "Custom emails were triggered at 10, 15, and 30-day intervals, encouraging return visits and offering help from support.",
      "Built-in review request automation post-purchase to drive testimonials."
    ],
    results: {
      stat1: { value: "22%", label: "Recovery rate on abandoned carts" },
      stat2: { value: "60%", label: "Increase in review submissions" },
      stat3: { value: "↓", label: "Reduced sales team friction" }
    },
    tags: ["Email Marketing", "Automation Strategy", "Go High Level", "Customer Recovery"]
  },
  {
    id: 2,
    title: "Automated Lead Pipeline Development",
    client: "GreyMatters Studio",
    category: "CRM Automation",
    image: "https://images.unsplash.com/photo-1487058792275-0ad4aaf24ca7",
    challenge: "GreyMatters Studio needed a way to automate lead nurturing for their neurofeedback services. Their team was overwhelmed with manual follow-ups and lacked a proper system to track leads downloading their free resources.",
    strategy: [
      "Built a customized funnel inside Go High Level that captured users who downloaded the Brain Users Handbook.",
      "Created a tagging system for segmenting leads and a pipeline stage inside 'Patient Pipeline' to track progress.",
      "Designed a 12-week automated email workflow that delivered weekly education-based content."
    ],
    results: {
      stat1: { value: "3x", label: "Increase in bookings" },
      stat2: { value: "48%", label: "Average email open rate" },
      stat3: { value: "70%", label: "Reduction in admin work" }
    },
    tags: ["CRM Automation", "Email Workflows", "Lead Nurturing", "Go High Level"]
  },
  {
    id: 3,
    title: "Product Development for Finance Management Software",
    client: "Confidential (Under NDA)",
    category: "Product Development",
    image: "https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d",
    challenge: "The client, a fintech startup, aimed to launch a user-friendly finance management platform tailored to young professionals juggling savings, debt, and daily budgeting. Existing tools in the market were either overly complex or lacked emotional connection with users.",
    strategy: [
      "Developed user personas from interviews with young professionals, side-hustle earners, and financially-anxious first-time budgeters.",
      "Mapped user frustrations and aspirations to emotional triggers—security, autonomy, and motivation—for feature design.",
      "Used Lovable's prioritization matrix to decide on the minimum viable features that delivered maximum emotional impact.",
      "Created interactive wireframes and tested with 20+ early users to gather real-time feedback before development sprints."
    ],
    results: {
      stat1: { value: "86%", label: "User recommendation rate" },
      stat2: { value: "40%", label: "Time-on-task reduction" },
      stat3: { value: "90%", label: "Task completion rate" }
    },
    tags: ["Product Development", "UX/UI Strategy", "Market Research", "Lovable Framework"]
  }
];

// Define supporting case studies data
const supportingCaseStudies = [
  {
    title: "GreyMatters Studio – Automated Lead Pipeline",
    category: "CRM Automation",
    description: "Built a customized funnel inside Go High Level that captured users who downloaded the Brain Users Handbook with 12-week automated email workflow."
  },
  {
    title: "Triad DS – Abandoned Cart Recovery",
    category: "Email Automation",
    description: "Automated lead follow-up across channels using conditional logic, improving engagement and conversions."
  },
  {
    title: "Pure Water - E-commerce Sales Funnel",
    category: "Funnel Development",
    description: "Designed a multi-step sales funnel for bottleless water coolers, increasing lead conversion by 45% and reducing acquisition costs."
  }
];

const ProjectHighlightsSection = () => {
  const [activeCategory, setActiveCategory] = useState<string>("all");
  const [activeCaseStudy, setActiveCaseStudy] = useState<CaseStudy>(caseStudies[0]);
  
  // Extract unique categories
  const categories = ["all", ...Array.from(new Set(caseStudies.map(study => study.category)))];
  
  // Filter case studies based on active category
  const filteredCaseStudies = activeCategory === "all" 
    ? caseStudies 
    : caseStudies.filter(study => study.category === activeCategory);

  return (
    <section id="case-studies" className="section-padding relative bg-gradient-to-b from-white to-gray-50">
      {/* Background decorative elements */}
      <div className="absolute top-20 right-10 w-64 h-64 bg-electric/5 rounded-full blur-3xl"></div>
      <div className="absolute bottom-20 left-10 w-80 h-80 bg-electric/5 rounded-full blur-3xl"></div>
      
      <div className="container mx-auto relative z-10">
        <div className="max-w-3xl mx-auto text-center mb-10">
          <div className="inline-block px-4 py-1 bg-electric/10 rounded-full text-electric text-sm font-medium mb-4">
            Client Success Stories
          </div>
          <h2 className="text-3xl md:text-5xl font-bold mb-6 text-black">
            Real Results for Real Clients
          </h2>
          <p className="text-black/80 text-lg mb-8">
            See how our strategic approach and technical expertise delivered measurable outcomes
            for businesses looking to improve their customer engagement and revenue.
          </p>
          
          {/* Category filter tabs */}
          <div className="flex justify-center mb-2">
            <div className="flex items-center space-x-2">
              <Filter size={18} className="text-electric" />
              <span className="text-sm text-gray-600 mr-2">Filter by service:</span>
              <Tabs defaultValue="all" value={activeCategory} onValueChange={setActiveCategory}>
                <TabsList className="bg-electric/10 p-1 rounded-md">
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
        </div>
        
        {/* Case study navigation thumbnails */}
        <div className="flex flex-wrap justify-center gap-4 mb-10">
          {filteredCaseStudies.map((study) => (
            <div 
              key={study.id}
              onClick={() => setActiveCaseStudy(study)}
              className={`cursor-pointer rounded-lg overflow-hidden w-64 h-36 relative group transition-all ${
                activeCaseStudy.id === study.id 
                  ? 'ring-2 ring-electric shadow-lg scale-105' 
                  : 'opacity-80 hover:opacity-100'
              }`}
            >
              <img 
                src={study.image} 
                alt={study.title} 
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent p-4 flex flex-col justify-end">
                <h4 className="text-white text-sm font-medium">{study.client}</h4>
                <p className="text-white/80 text-xs">{study.title}</p>
              </div>
            </div>
          ))}
        </div>
        
        {/* Featured case study showcase */}
        {activeCaseStudy && (
          <div className="max-w-6xl mx-auto bg-white rounded-2xl shadow-md border border-gray-100 overflow-hidden mb-16">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-0">
              {/* Image Section */}
              <div className="h-full">
                <img 
                  src={activeCaseStudy.image} 
                  alt={`${activeCaseStudy.client} - ${activeCaseStudy.title}`} 
                  className="w-full h-full object-cover"
                />
              </div>
              
              {/* Content Section */}
              <div className="p-8 md:p-12 flex flex-col h-full">
                <div>
                  <h3 className="text-xl font-medium text-electric mb-2">CLIENT SUCCESS STORY</h3>
                  <h2 className="text-3xl font-bold mb-4">{activeCaseStudy.client} – {activeCaseStudy.title}</h2>
                  <div className="flex flex-wrap gap-2 mb-6">
                    {activeCaseStudy.tags.map((tag, idx) => (
                      <span key={idx} className="text-xs px-3 py-1 rounded-full bg-electric/10 text-electric">
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
                
                <div className="flex-1 space-y-6">
                  <div>
                    <h4 className="text-lg font-semibold text-gray-900 mb-2">The Challenge</h4>
                    <p className="text-gray-700">
                      {activeCaseStudy.challenge}
                    </p>
                  </div>
                  
                  <div>
                    <h4 className="text-lg font-semibold text-gray-900 mb-2">The Strategy</h4>
                    <p className="text-gray-700 mb-3">
                      I developed a custom solution based on the client's specific needs:
                    </p>
                    <ul className="list-disc pl-5 space-y-2 text-gray-700">
                      {activeCaseStudy.strategy.map((point, idx) => (
                        <li key={idx}>{point}</li>
                      ))}
                    </ul>
                  </div>
                  
                  <div className="bg-electric/5 p-5 rounded-lg border border-electric/20">
                    <h4 className="text-lg font-semibold text-electric mb-3">The Results</h4>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                      <div className="bg-white p-4 rounded-lg shadow-sm text-center">
                        <div className="text-3xl font-bold text-electric">{activeCaseStudy.results.stat1.value}</div>
                        <p className="text-gray-700 text-sm">{activeCaseStudy.results.stat1.label}</p>
                      </div>
                      <div className="bg-white p-4 rounded-lg shadow-sm text-center">
                        <div className="text-3xl font-bold text-electric">{activeCaseStudy.results.stat2.value}</div>
                        <p className="text-gray-700 text-sm">{activeCaseStudy.results.stat2.label}</p>
                      </div>
                      {activeCaseStudy.results.stat3 && (
                        <div className="bg-white p-4 rounded-lg shadow-sm text-center">
                          <div className="text-3xl font-bold text-electric">{activeCaseStudy.results.stat3.value}</div>
                          <p className="text-gray-700 text-sm">{activeCaseStudy.results.stat3.label}</p>
                        </div>
                      )}
                    </div>
                  </div>
                </div>
                
                <div className="mt-8">
                  <Button 
                    className="bg-electric hover:bg-electric/80 text-white w-full py-6 h-auto"
                    asChild
                  >
                    <a href="#booking" className="flex items-center justify-center">
                      <Calendar className="mr-2 h-5 w-5" />
                      Schedule a Free Consultation
                    </a>
                  </Button>
                </div>
              </div>
            </div>
          </div>
        )}
        
        {/* Supporting case study cards */}
        <div className="mb-16">
          <h3 className="text-2xl font-bold text-center mb-8 text-gray-900">More Client Success Stories</h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {supportingCaseStudies.map((study, index) => (
              <Card key={index} className="hover:shadow-md transition-all hover:translate-y-[-5px]">
                <CardHeader>
                  <CardTitle>{study.title}</CardTitle>
                  <CardDescription>{study.category}</CardDescription>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-700">
                    {study.description}
                  </p>
                </CardContent>
                <CardFooter>
                  <Button variant="ghost" className="text-electric hover:text-electric/80 w-full" asChild>
                    <a href="#booking" className="flex items-center justify-center">
                      Get Similar Results <ArrowRight className="ml-2 h-4 w-4" />
                    </a>
                  </Button>
                </CardFooter>
              </Card>
            ))}
          </div>
        </div>
        
        {/* Call-to-action */}
        <div className="max-w-5xl mx-auto bg-electric/10 p-8 rounded-2xl shadow-sm border border-electric/20">
          <h3 className="text-2xl font-bold text-center mb-6 text-gray-900">Ready for Your Own Success Story?</h3>
          <p className="text-center text-gray-700 mb-8 max-w-3xl mx-auto">
            Let's discuss how my expertise in automation, funnel building, and digital marketing can help your business achieve similar results.
          </p>
          <div className="text-center">
            <Button 
              className="bg-electric hover:bg-electric/80 text-white px-8 py-6 h-auto text-lg font-medium rounded-lg"
              asChild
            >
              <a href="#booking" className="flex items-center">
                <Calendar className="mr-2 h-5 w-5" />
                Book Your Strategy Call
              </a>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProjectHighlightsSection;
