
import React from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Code, Briefcase, Globe, Workflow, BarChart, Bot, Mail } from "lucide-react";

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
    name: "Technical Skills",
    icon: <Code className="h-6 w-6 text-blue-600" />,
    skills: [
      { name: "CRM Development", proficiency: 5 },
      { name: "Go High Level", proficiency: 5 },
      { name: "JavaScript/TypeScript", proficiency: 4 },
      { name: "React", proficiency: 4 },
      { name: "API Integration", proficiency: 5 },
    ]
  },
  {
    name: "Marketing Automation",
    icon: <Workflow className="h-6 w-6 text-blue-600" />,
    skills: [
      { name: "Automated Workflows", proficiency: 5 },
      { name: "Custom Funnel Design", proficiency: 5 },
      { name: "Lead Nurturing", proficiency: 4 },
      { name: "Customer Journey Mapping", proficiency: 5 },
    ]
  },
  {
    name: "Digital Marketing",
    icon: <Globe className="h-6 w-6 text-blue-600" />,
    skills: [
      { name: "SEO Optimization", proficiency: 4 },
      { name: "Google Ads", proficiency: 4 },
      { name: "Landing Page Optimization", proficiency: 5 },
      { name: "Conversion Rate Optimization", proficiency: 5 },
    ]
  },
  {
    name: "Industry Experience",
    icon: <Briefcase className="h-6 w-6 text-blue-600" />,
    skills: [
      { name: "Fitness & Wellness", proficiency: 5 },
      { name: "E-commerce", proficiency: 4 },
      { name: "Mental Health Services", proficiency: 5 },
      { name: "Professional Services", proficiency: 5 },
    ]
  },
  {
    name: "Analytics & Reporting",
    icon: <BarChart className="h-6 w-6 text-blue-600" />,
    skills: [
      { name: "Google Analytics", proficiency: 4 },
      { name: "KPI Tracking", proficiency: 5 },
      { name: "Data Visualization", proficiency: 4 },
      { name: "Performance Reporting", proficiency: 5 },
    ]
  },
  {
    name: "Specialized Solutions",
    icon: <Bot className="h-6 w-6 text-blue-600" />,
    skills: [
      { name: "AI Chatbot Development", proficiency: 5 },
      { name: "Email Marketing", proficiency: 5 },
      { name: "SMS Automation", proficiency: 4 },
      { name: "Appointment Booking", proficiency: 5 },
    ]
  },
];

const SkillsSection = () => {
  return (
    <section id="skills" className="py-16 px-4 md:px-8 bg-white relative overflow-hidden">
      <div className="absolute -top-40 -right-40 w-80 h-80 bg-blue-50 rounded-full blur-3xl opacity-30"></div>
      <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-blue-50 rounded-full blur-3xl opacity-30"></div>
      
      <div className="container mx-auto relative z-10">
        <div className="flex flex-col items-center mb-10">
          <h2 className="text-3xl md:text-4xl font-bold mb-3 text-center text-gray-900">
            My <span className="text-blue-600">Skills</span>
          </h2>
          <div className="w-16 h-1 bg-blue-600 mb-6"></div>
          <p className="text-gray-700 max-w-2xl mx-auto text-center mb-12">
            I combine technical expertise with marketing know-how to deliver comprehensive solutions that drive growth and engagement.
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
                          {skill.proficiency === 5 ? "Expert" : 
                           skill.proficiency === 4 ? "Advanced" : 
                           skill.proficiency === 3 ? "Intermediate" : 
                           skill.proficiency === 2 ? "Basic" : "Beginner"}
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
