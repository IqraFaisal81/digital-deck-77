
import React, { useRef, useEffect } from "react";
import { 
  Globe, 
  Database, 
  BarChart, 
  Bot, 
  TrendingUp,
  ArrowRight,
  Sparkles
} from "lucide-react";
import SectionHeader from "../skills/SectionHeader";
import SkillCard from "../skills/SkillCard";
import { Button } from "@/components/ui/button";
import { useIsMobile } from "@/hooks/use-mobile";
import { motion } from "framer-motion";

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
    icon: <Globe className="h-6 w-6 text-blue-600 dark:text-blue-400" />,
    skills: [
      { name: "Google Ads Pro (Search, Display, Performance Max)" },
      { name: "Meta, TikTok, & Snapchat Ads Wizardry" },
      { name: "SEO Domination (Technical, On-Page, Off-Page)" },
      { name: "Email Marketing Strategy & Automation" },
    ]
  },
  {
    name: "CRM & Automation Mastery",
    icon: <Database className="h-6 w-6 text-blue-600 dark:text-blue-400" />,
    skills: [
      { name: "Go High Level Ninja (Workflows, Pipelines)" },
      { name: "HubSpot & ActiveCampaign Automation" },
      { name: "Funnel Building + Lead Nurture Sequences" },
      { name: "A2P Compliance & Deliverability Optimization" },
    ]
  },
  {
    name: "Data & Analytics",
    icon: <BarChart className="h-6 w-6 text-blue-600 dark:text-blue-400" />,
    skills: [
      { name: "Google Analytics (GA4), Looker Studio Dashboards" },
      { name: "R Studio, SQL Queries, Power BI, Tableau" },
      { name: "Data-Driven Decision Making & ROI Reporting" },
    ]
  },
  {
    name: "SaaS & AI Development",
    icon: <Bot className="h-6 w-6 text-blue-600 dark:text-blue-400" />,
    skills: [
      { name: "SaaS Funnels, Onboarding, and Subscription Logic" },
      { name: "AI Integration (Chatbots, OpenAI API)" },
      { name: "Conversational AI Systems for Multiple Niches" },
      { name: "Custom CRM Add-ons & Feature Workflows" },
    ]
  },
  {
    name: "Strategy & Creative Direction",
    icon: <TrendingUp className="h-6 w-6 text-blue-600 dark:text-blue-400" />,
    skills: [
      { name: "Performance Campaign Strategy & Budget Scaling" },
      { name: "Brand Playbooks & Sales Systems" },
      { name: "Competitor Analysis & Trend Forecasting" },
      { name: "High-Converting Copywriting" },
    ]
  },
];

const SkillsSection = () => {
  const sectionRef = useRef<HTMLElement>(null);
  const isMobile = useIsMobile();

  // Enhanced animation on scroll
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
    }, { threshold: 0.1, rootMargin: "0px 0px -100px 0px" });
    
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
      className="py-20 md:py-28 px-4 md:px-8 relative overflow-hidden bg-gradient-to-b from-white to-blue-50 dark:from-gray-900 dark:to-gray-800"
    >
      {/* Decorative elements */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none">
        <div className="absolute -top-40 -right-40 w-96 h-96 bg-blue-100/50 dark:bg-blue-900/20 rounded-full blur-3xl opacity-60"></div>
        <div className="absolute top-1/3 -left-20 w-60 h-60 bg-indigo-100/50 dark:bg-indigo-900/20 rounded-full blur-3xl opacity-60"></div>
        <div className="absolute -bottom-40 right-1/4 w-80 h-80 bg-purple-100/50 dark:bg-blue-900/20 rounded-full blur-3xl opacity-40"></div>
        
        {/* Floating shapes */}
        <div className="absolute top-40 right-10 w-4 h-4 rounded-full bg-blue-400 opacity-70 animate-float"></div>
        <div className="absolute top-1/2 left-10 w-6 h-6 rounded-full bg-indigo-400 opacity-60 animate-float" style={{animationDelay: '1s'}}></div>
        <div className="absolute bottom-40 right-1/3 w-5 h-5 rounded-full bg-purple-400 opacity-50 animate-float" style={{animationDelay: '2s'}}></div>
      </div>
      
      <div className="container mx-auto relative z-10">
        <div className="flex flex-col items-center">
          <div className="inline-flex items-center px-4 py-2 mb-6 rounded-full bg-blue-100/60 dark:bg-blue-900/30 backdrop-blur-sm">
            <Sparkles className="h-4 w-4 mr-2 text-blue-600 dark:text-blue-400" />
            <span className="text-sm font-medium text-blue-800 dark:text-blue-300">Professional Skills</span>
          </div>
        </div>
        
        <SectionHeader 
          title={<>Skills & <span className="text-blue-600 dark:text-blue-400 relative inline-block bg-gradient-to-r from-royal to-electric bg-clip-text text-transparent dark:from-blue-600 dark:to-blue-400">
            Expertise
            <span className="absolute -bottom-2 left-0 w-full h-1 bg-blue-400/30 dark:bg-blue-600/30 rounded-full"></span>
          </span></>}
          description="Combining technical expertise with strategic marketing to deliver comprehensive solutions that drive growth and engagement."
        />
        
        {/* Skills Masonry Grid with enhanced animations */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto mt-12">
          {skillCategories.map((category, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
            >
              <SkillCard
                name={category.name}
                icon={category.icon}
                skills={category.skills}
                index={index}
              />
            </motion.div>
          ))}
        </div>
        
        {/* Enhanced call to action */}
        <div className="mt-16 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.6, delay: 0.5 }}
          >
            <Button 
              asChild
              className="bg-gradient-to-r from-royal to-electric hover:from-blue-700 hover:to-indigo-600 dark:from-blue-400 dark:to-blue-600 
                text-white rounded-full px-6 py-6 shadow-lg hover:shadow-xl group transition-all duration-300 
                hover:-translate-y-1 hover:scale-105 border border-blue-400/20"
            >
              <a href="#services" className="inline-flex items-center">
                <span className="mr-2 font-medium">View my services</span>
                <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
              </a>
            </Button>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default SkillsSection;
