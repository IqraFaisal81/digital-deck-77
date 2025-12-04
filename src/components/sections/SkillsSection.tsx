
import React, { useRef, useEffect } from "react";
import { 
  Globe, 
  Database, 
  BarChart, 
  Bot, 
  TrendingUp,
  ArrowRight,
  Sparkles,
  Zap,
  Target
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
    icon: <Database className="h-6 w-6 text-purple-600 dark:text-purple-400" />,
    skills: [
      { name: "Go High Level Ninja (Workflows, Pipelines)" },
      { name: "HubSpot & ActiveCampaign Automation" },
      { name: "Funnel Building + Lead Nurture Sequences" },
      { name: "A2P Compliance & Deliverability Optimization" },
    ]
  },
  {
    name: "Automation Expert",
    icon: <Zap className="h-6 w-6 text-yellow-600 dark:text-yellow-400" />,
    skills: [
      { name: "Zapier Advanced Workflows & Multi-Step Automation" },
      { name: "Make.com Complex Scenarios & Data Processing" },
      { name: "API Integration & Custom Webhook Solutions" },
      { name: "Business Process Automation & Optimization" },
    ]
  },
  {
    name: "Tracking & Attribution",
    icon: <Target className="h-6 w-6 text-red-600 dark:text-red-400" />,
    skills: [
      { name: "Google Tag Manager & Advanced Tracking Setup" },
      { name: "Facebook Pixel & Conversion API Implementation" },
      { name: "Multi-Touch Attribution Modeling" },
      { name: "Custom Analytics Dashboards & Reporting" },
    ]
  },
  {
    name: "Data & Analytics",
    icon: <BarChart className="h-6 w-6 text-green-600 dark:text-green-400" />,
    skills: [
      { name: "Google Analytics (GA4), Looker Studio Dashboards" },
      { name: "R Studio, SQL Queries, Power BI, Tableau" },
      { name: "Data-Driven Decision Making & ROI Reporting" },
    ]
  },
  {
    name: "SaaS & AI Development",
    icon: <Bot className="h-6 w-6 text-indigo-600 dark:text-indigo-400" />,
    skills: [
      { name: "SaaS Funnels, Onboarding, and Subscription Logic" },
      { name: "AI Integration (Chatbots, OpenAI API)" },
      { name: "Conversational AI Systems for Multiple Niches" },
      { name: "Custom CRM Add-ons & Feature Workflows" },
    ]
  },
  {
    name: "WordPress Expert",
    icon: <Globe className="h-6 w-6 text-cyan-600 dark:text-cyan-400" />,
    skills: [
      { name: "Custom Theme & Plugin Development" },
      { name: "WooCommerce Store Setup & Optimization" },
      { name: "Performance Optimization & Speed Tuning" },
      { name: "Security Hardening & Maintenance" },
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
      className="py-24 lg:py-32 relative overflow-hidden bg-gradient-to-b from-purple-50/30 via-blue-50/50 to-white dark:from-purple-900/60 dark:via-gray-900 dark:to-blue-950"
    >
      {/* Enhanced Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-0 right-0 w-96 h-96 bg-gradient-to-br from-blue-500/10 to-cyan-500/10 dark:from-purple-500/15 dark:to-violet-500/15 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-0 left-0 w-80 h-80 bg-gradient-to-br from-purple-500/10 to-pink-500/10 dark:from-purple-600/20 dark:to-indigo-600/20 rounded-full blur-3xl animate-pulse delay-1000"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-64 h-64 bg-gradient-to-br from-emerald-500/10 to-teal-500/10 dark:from-purple-400/15 dark:to-blue-400/15 rounded-full blur-2xl animate-pulse delay-2000"></div>
        <div className="absolute top-1/4 left-1/4 w-48 h-48 bg-gradient-to-br from-orange-500/10 to-red-500/10 dark:from-violet-500/15 dark:to-purple-500/15 rounded-full blur-2xl animate-pulse delay-500"></div>
        <div className="absolute bottom-1/4 right-1/4 w-56 h-56 bg-gradient-to-br from-violet-500/10 to-purple-500/10 dark:from-indigo-500/20 dark:to-purple-500/20 rounded-full blur-2xl animate-pulse delay-1500"></div>
        
        {/* Floating shapes */}
        <div className="absolute top-40 right-10 w-4 h-4 rounded-full bg-blue-400 dark:bg-purple-400 opacity-70 animate-float"></div>
        <div className="absolute top-1/2 left-10 w-6 h-6 rounded-full bg-indigo-400 dark:bg-violet-400 opacity-60 animate-float" style={{animationDelay: '1s'}}></div>
        <div className="absolute bottom-40 right-1/3 w-5 h-5 rounded-full bg-purple-400 dark:bg-indigo-400 opacity-50 animate-float" style={{animationDelay: '2s'}}></div>
      </div>
      
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="flex flex-col items-center">
          <div className="inline-flex items-center px-4 py-2 mb-6 rounded-full bg-gradient-to-r from-blue-100 to-purple-100 dark:from-blue-900/30 dark:to-purple-900/30 border border-blue-200 dark:border-blue-800">
            <Sparkles className="h-4 w-4 mr-2 text-blue-600 dark:text-blue-400" />
            <span className="text-sm font-medium text-blue-800 dark:text-blue-300">Professional Skills</span>
          </div>
        </div>
        
        <SectionHeader 
          title={
            <span className="text-4xl lg:text-6xl font-bold">
              <span className="bg-gradient-to-r from-gray-900 via-blue-800 to-purple-800 dark:from-white dark:via-blue-200 dark:to-purple-200 bg-clip-text text-transparent">
                Skills &
              </span>
              <br />
              <span className="bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 bg-clip-text text-transparent">
                Expertise
              </span>
            </span>
          }
          description="Combining technical expertise with strategic marketing to deliver comprehensive solutions that drive growth and engagement."
          alignment="center"
          useGradient={false}
        />
        
        {/* Skills Grid with enhanced animations */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto mt-12">
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
        <div className="mt-20 text-center">
          <div className="relative bg-gradient-to-r from-blue-50 via-purple-50 to-pink-50 dark:from-blue-950/50 dark:via-purple-950/50 dark:to-pink-950/50 rounded-3xl p-8 lg:p-12 border border-blue-200 dark:border-blue-800 backdrop-blur-sm overflow-hidden">
            {/* Animated background elements */}
            <div className="absolute inset-0 overflow-hidden">
              <div className="absolute top-0 left-0 w-32 h-32 bg-gradient-to-br from-blue-400/20 to-cyan-400/20 rounded-full blur-2xl animate-pulse"></div>
              <div className="absolute bottom-0 right-0 w-40 h-40 bg-gradient-to-br from-purple-400/20 to-pink-400/20 rounded-full blur-2xl animate-pulse delay-1000"></div>
            </div>
            
            <div className="max-w-3xl mx-auto relative z-10">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.6, delay: 0.5 }}
              >
                <h3 className="text-2xl lg:text-3xl font-bold mb-4 bg-gradient-to-r from-gray-900 via-blue-800 to-purple-800 dark:from-white dark:via-blue-200 dark:to-purple-200 bg-clip-text text-transparent">
                  Ready to Transform Your Business?
                </h3>
                <p className="text-gray-600 dark:text-gray-300 mb-8 text-lg leading-relaxed">
                  Let's discuss your unique challenges and explore how my expertise can drive your business forward. 
                  Book a free strategy session to get started.
                </p>
                <Button 
                  asChild
                  className="bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 hover:from-blue-700 hover:via-purple-700 hover:to-pink-700 text-white rounded-full px-8 py-6 shadow-lg hover:shadow-xl group transition-all duration-300 hover:-translate-y-1 hover:scale-105 border border-blue-400/20"
                >
                  <a href="#services" className="inline-flex items-center">
                    <span className="mr-2 font-medium">View my services</span>
                    <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
                  </a>
                </Button>
              </motion.div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SkillsSection;
