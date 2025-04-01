
import React, { useState, useRef, useEffect } from "react";
import { 
  Globe, 
  Database, 
  Mail,
  BarChart, 
  Bot, 
  TrendingUp,
  Filter,
  ArrowRight
} from "lucide-react";
import SectionHeader from "../skills/SectionHeader";
import SkillCard from "../skills/SkillCard";
import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Button } from "@/components/ui/button";
import { useIsMobile } from "@/hooks/use-mobile";

type SkillCategory = {
  name: string;
  icon: React.ReactNode;
  skills: {
    name: string;
  }[];
};

const skillCategories: SkillCategory[] = [
  {
    name: "Digital Marketing & Growth",
    icon: <Globe className="h-6 w-6 text-blue-600" />,
    skills: [
      { name: "Google Ads Pro (Search, Display, Performance Max)" },
      { name: "Meta, TikTok, & Snapchat Ads Wizardry" },
      { name: "SEO Domination (Technical, On-Page, Off-Page)" },
      { name: "Email Marketing Strategy & Automation" },
    ]
  },
  {
    name: "CRM & Automation Mastery",
    icon: <Database className="h-6 w-6 text-blue-600" />,
    skills: [
      { name: "Go High Level Ninja (Workflows, Pipelines)" },
      { name: "HubSpot & ActiveCampaign Automation" },
      { name: "Funnel Building + Lead Nurture Sequences" },
      { name: "A2P Compliance & Deliverability Optimization" },
    ]
  },
  {
    name: "Data & Analytics",
    icon: <BarChart className="h-6 w-6 text-blue-600" />,
    skills: [
      { name: "Google Analytics (GA4), Looker Studio Dashboards" },
      { name: "R Studio, SQL Queries, Power BI, Tableau" },
      { name: "Data-Driven Decision Making & ROI Reporting" },
    ]
  },
  {
    name: "SaaS & AI Development",
    icon: <Bot className="h-6 w-6 text-blue-600" />,
    skills: [
      { name: "SaaS Funnels, Onboarding, and Subscription Logic" },
      { name: "AI Integration (Chatbots, OpenAI API)" },
      { name: "Conversational AI Systems for Multiple Niches" },
      { name: "Custom CRM Add-ons & Feature Workflows" },
    ]
  },
  {
    name: "Strategy & Creative Direction",
    icon: <TrendingUp className="h-6 w-6 text-blue-600" />,
    skills: [
      { name: "Performance Campaign Strategy & Budget Scaling" },
      { name: "Brand Playbooks & Sales Systems" },
      { name: "Competitor Analysis & Trend Forecasting" },
      { name: "High-Converting Copywriting" },
    ]
  },
];

const SkillsSection = () => {
  const [activeCategory, setActiveCategory] = useState<string | null>(null);
  const sectionRef = useRef<HTMLElement>(null);
  const isMobile = useIsMobile();

  // Animation on scroll
  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          const element = entry.target as HTMLElement;
          const delay = parseInt(element.dataset.delay || '0');
          
          setTimeout(() => {
            element.classList.add('opacity-100', 'translate-y-0');
            element.classList.remove('opacity-0', 'translate-y-8');
          }, delay);
        }
      });
    }, { threshold: 0.1 });
    
    const elements = document.querySelectorAll('.animate-on-scroll');
    elements.forEach((el, index) => {
      (el as HTMLElement).dataset.delay = (index * 100).toString();
      observer.observe(el);
    });
    
    return () => elements.forEach(el => observer.unobserve(el));
  }, []);

  return (
    <section 
      id="skills" 
      ref={sectionRef} 
      className="py-24 md:py-32 px-4 md:px-8 relative overflow-hidden"
    >
      {/* Background elements */}
      <div className="absolute -top-40 -right-40 w-96 h-96 bg-blue-100/50 rounded-full blur-3xl opacity-40"></div>
      <div className="absolute top-1/2 left-1/4 w-64 h-64 bg-purple-100/50 rounded-full blur-3xl opacity-40"></div>
      <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-blue-100/50 rounded-full blur-3xl opacity-30"></div>
      
      <div className="container mx-auto relative z-10">
        <SectionHeader 
          subtitle="Professional Capabilities"
          title={<>Skills & <span className="text-blue-600">Expertise</span></>}
          description="Combining technical expertise with strategic marketing to deliver comprehensive solutions that drive growth and engagement."
        />
        
        {/* Category filter */}
        <div className="flex justify-center mb-12 animate-on-scroll opacity-0 translate-y-8">
          <div className="bg-white p-2 rounded-2xl shadow-md border border-gray-100">
            <Tabs defaultValue="all" onValueChange={(value) => setActiveCategory(value === "all" ? null : value)}>
              <TabsList className="grid grid-cols-2 md:grid-cols-6 gap-1 bg-gray-50/50 p-1 rounded-xl">
                <TabsTrigger 
                  value="all" 
                  className="rounded-lg text-gray-600 data-[state=active]:bg-gradient-to-r data-[state=active]:from-blue-600 data-[state=active]:to-blue-500 data-[state=active]:text-white data-[state=active]:shadow-sm"
                >
                  All
                </TabsTrigger>
                {skillCategories.map((category, index) => (
                  <TabsTrigger 
                    key={index} 
                    value={category.name}
                    className="rounded-lg text-gray-600 data-[state=active]:bg-gradient-to-r data-[state=active]:from-blue-600 data-[state=active]:to-blue-500 data-[state=active]:text-white data-[state=active]:shadow-sm"
                  >
                    {isMobile ? category.name.split(' ')[0] : category.name}
                  </TabsTrigger>
                ))}
              </TabsList>
            </Tabs>
          </div>
        </div>

        {/* Skills Masonry Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
          {skillCategories
            .filter(category => activeCategory === null || category.name === activeCategory)
            .map((category, index) => (
              <SkillCard
                key={index}
                name={category.name}
                icon={category.icon}
                skills={category.skills}
                index={index}
              />
            ))}
        </div>
        
        {/* Call to action */}
        <div className="mt-16 text-center">
          <Button 
            asChild
            className="bg-gradient-to-r from-blue-600 to-blue-500 text-white rounded-full px-8 py-6 shadow-md hover:shadow-lg group transition-all duration-300 hover:-translate-y-1"
          >
            <a href="#services" className="inline-flex items-center">
              <span className="mr-2">View my services</span>
              <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
            </a>
          </Button>
        </div>
      </div>
    </section>
  );
};

export default SkillsSection;
