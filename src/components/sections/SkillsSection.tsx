
import React from "react";
import { Card, CardContent } from "@/components/ui/card";
import { 
  Globe, 
  Database, 
  Mail,
  BarChart, 
  Bot, 
  TrendingUp
} from "lucide-react";

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
  const getProficiencyLabel = (proficiency: number) => {
    switch (proficiency) {
      case 5: return "Expert";
      case 4: return "Advanced";
      case 3: return "Intermediate";
      case 2: return "Basic";
      default: return "Beginner";
    }
  };

  return (
    <section id="skills" className="py-16 px-4 md:px-8 bg-white relative overflow-hidden">
      <div className="absolute -top-40 -right-40 w-80 h-80 bg-blue-50 rounded-full blur-3xl opacity-30"></div>
      <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-blue-50 rounded-full blur-3xl opacity-30"></div>
      
      <div className="container mx-auto relative z-10">
        <div className="flex flex-col items-center mb-10">
          <h2 className="text-3xl md:text-4xl font-bold mb-3 text-center text-gray-900">
            Skills & <span className="text-blue-600">Expertise</span>
          </h2>
          <div className="w-16 h-1 bg-blue-600 mb-6"></div>
          <p className="text-gray-700 max-w-2xl mx-auto text-center mb-12">
            Combining technical expertise with strategic marketing to deliver comprehensive solutions that drive growth and engagement.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
          {skillCategories.map((category, index) => (
            <Card key={index} className="overflow-hidden hover:shadow-md transition-shadow border border-gray-200">
              <CardContent className="p-6">
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-10 h-10 rounded-full bg-blue-100 flex items-center justify-center">
                    {category.icon}
                  </div>
                  <h3 className="text-xl font-semibold text-gray-900">{category.name}</h3>
                </div>
                
                <div className="space-y-3">
                  {category.skills.map((skill, skillIndex) => (
                    <div key={skillIndex}>
                      <div className="flex justify-between items-center mb-1">
                        <span className="text-gray-700 text-sm">{skill.name}</span>
                        <span className="text-xs text-gray-500">
                          {getProficiencyLabel(skill.proficiency)}
                        </span>
                      </div>
                      <div className="w-full bg-gray-200 rounded-full h-2">
                        <div 
                          className="bg-blue-600 h-2 rounded-full transition-all duration-500 ease-out"
                          style={{ width: `${(skill.proficiency / 5) * 100}%` }}
                        ></div>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SkillsSection;
