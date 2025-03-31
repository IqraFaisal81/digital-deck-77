import React, { useState, useRef, useEffect } from "react";
import { 
  Globe, 
  Database, 
  Mail,
  BarChart, 
  Bot, 
  TrendingUp
} from "lucide-react";
import SectionHeader from "../skills/SectionHeader";
import SkillCard from "../skills/SkillCard";

type SkillCategory = {
  name: string;
  icon: React.ReactNode;
  skills: {
    name: string;
    proficiency: number; // 1-5
  }[];
};

const skillCategories: SkillCategory[] = [
  {
    name: "Digital Marketing & Growth",
    icon: <Globe className="h-6 w-6 text-blue-600" />,
    skills: [
      { name: "Google Ads Pro (Search, Display, Performance Max)", proficiency: 4 },
      { name: "Meta, TikTok & Snapchat Ads", proficiency: 4 },
      { name: "SEO Strategies", proficiency: 3 },
      { name: "Landing Page Optimization", proficiency: 4 },
    ]
  },
  {
    name: "CRM & Automation Mastery",
    icon: <Database className="h-6 w-6 text-blue-600" />,
    skills: [
      { name: "Go High Level Workflows", proficiency: 4 },
      { name: "HubSpot & ActiveCampaign", proficiency: 3 },
      { name: "Funnel Building", proficiency: 4 },
      { name: "A2P Compliance & Deliverability", proficiency: 3 },
    ]
  },
  {
    name: "Email Marketing",
    icon: <Mail className="h-6 w-6 text-blue-600" />,
    skills: [
      { name: "Email Strategy & Automation", proficiency: 4 },
      { name: "Klaviyo", proficiency: 4 },
      { name: "Mailchimp", proficiency: 3 },
      { name: "Lead Nurture Sequences", proficiency: 4 },
    ]
  },
  {
    name: "Data & Analytics",
    icon: <BarChart className="h-6 w-6 text-blue-600" />,
    skills: [
      { name: "Google Analytics (GA4)", proficiency: 4 },
      { name: "Looker Studio Dashboards", proficiency: 3 },
      { name: "R Studio, SQL, Power BI", proficiency: 3 },
      { name: "Data-Driven Decision Making", proficiency: 4 },
    ]
  },
  {
    name: "SaaS & AI Development",
    icon: <Bot className="h-6 w-6 text-blue-600" />,
    skills: [
      { name: "SaaS Funnels & Onboarding", proficiency: 4 },
      { name: "AI Integration & Chatbots", proficiency: 4 },
      { name: "OpenAI API Implementation", proficiency: 3 },
      { name: "Custom CRM Add-ons", proficiency: 4 },
    ]
  },
  {
    name: "Strategy & Creative",
    icon: <TrendingUp className="h-6 w-6 text-blue-600" />,
    skills: [
      { name: "Campaign Strategy", proficiency: 4 },
      { name: "Brand Playbooks & Systems", proficiency: 4 },
      { name: "Competitor Analysis", proficiency: 3 },
      { name: "High-Converting Copywriting", proficiency: 4 },
    ]
  },
];

const SkillsSection = () => {
  const [activeCategory, setActiveCategory] = useState<string | null>(null);
  const sectionRef = useRef<HTMLElement>(null);

  // Animation on scroll
  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('opacity-100', 'translate-y-0');
          entry.target.classList.remove('opacity-0', 'translate-y-8');
        }
      });
    }, { threshold: 0.1 });
    
    const elements = sectionRef.current?.querySelectorAll('.animate-on-scroll');
    elements?.forEach(el => observer.observe(el));
    
    return () => elements?.forEach(el => observer.unobserve(el));
  }, []);

  return (
    <section id="skills" ref={sectionRef} className="py-20 md:py-28 px-4 md:px-8 bg-white relative overflow-hidden">
      <div className="absolute -top-40 -right-40 w-80 h-80 bg-blue-50 rounded-full blur-3xl opacity-30"></div>
      <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-blue-50 rounded-full blur-3xl opacity-30"></div>
      
      <div className="container mx-auto relative z-10">
        <SectionHeader 
          subtitle="Professional Capabilities"
          title={<>Skills & <span className="text-blue-600">Expertise</span></>}
          description="Combining technical expertise with strategic marketing to deliver comprehensive solutions that drive growth and engagement."
        />
        
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
      </div>
    </section>
  );
};

export default SkillsSection;
