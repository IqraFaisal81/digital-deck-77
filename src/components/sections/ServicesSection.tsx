
import React from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { 
  Zap, 
  BarChart3, 
  MessageSquare, 
  Mail, 
  TrendingUp, 
  Bot,
  ArrowRight
} from "lucide-react";

interface ServicesSectionProps {
  visibleSection: string | null;
  scrollToSection: (sectionId: string | null) => void;
}

const services = [
  {
    id: "funnels",
    icon: TrendingUp,
    title: "Funnel Development",
    description: "High-converting sales funnels that turn visitors into customers with strategic design and psychology-backed flows.",
    color: "from-blue-500 to-cyan-500",
    features: ["Lead Generation", "Sales Optimization", "A/B Testing", "Conversion Tracking"]
  },
  {
    id: "workflows",
    icon: Zap,
    title: "Workflow Automation",
    description: "Smart automation systems that handle repetitive tasks, nurture leads, and streamline your business operations.",
    color: "from-purple-500 to-pink-500",
    features: ["Lead Nurturing", "Task Automation", "Email Sequences", "CRM Integration"]
  },
  {
    id: "ppc-analytics",
    icon: BarChart3,
    title: "PPC & Analytics",
    description: "Data-driven advertising campaigns with comprehensive tracking and optimization for maximum ROI.",
    color: "from-green-500 to-emerald-500",
    features: ["Google Ads", "Facebook Ads", "Performance Tracking", "ROI Optimization"]
  },
  {
    id: "ai-chatbot",
    icon: Bot,
    title: "AI Chatbot & Voice Agent",
    description: "Intelligent conversational solutions that provide 24/7 customer support and lead qualification.",
    color: "from-orange-500 to-red-500",
    features: ["24/7 Support", "Lead Qualification", "Voice Integration", "Custom Training"]
  },
  {
    id: "email-marketing",
    icon: Mail,
    title: "Email Marketing",
    description: "Personalized email campaigns that build relationships and drive consistent revenue growth.",
    color: "from-indigo-500 to-purple-500",
    features: ["Campaign Design", "Automation", "Segmentation", "Performance Analytics"]
  }
];

const ServicesSection = ({ visibleSection, scrollToSection }: ServicesSectionProps) => {
  return (
    <section id="services" className="py-16 lg:py-20 relative overflow-hidden bg-gradient-to-br from-blue-50 via-slate-50 to-white dark:from-gray-900 dark:to-gray-850">
      {/* Background decoration */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-20 right-20 w-96 h-96 bg-blue-500/5 rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 left-20 w-96 h-96 bg-purple-500/5 rounded-full blur-3xl"></div>
      </div>
      
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="max-w-7xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-16">
            <div className="inline-flex items-center px-4 py-2 mb-6 rounded-full bg-blue-100 dark:bg-blue-900/30 border border-blue-200 dark:border-blue-800">
              <Zap className="h-4 w-4 mr-2 text-blue-600 dark:text-blue-400" />
              <span className="text-sm font-medium text-blue-800 dark:text-blue-300">Services</span>
            </div>
            <h2 className="text-4xl lg:text-6xl font-bold mb-6">
              <span className="bg-gradient-to-r from-gray-900 via-blue-800 to-purple-800 dark:from-white dark:via-blue-200 dark:to-purple-200 bg-clip-text text-transparent">
                Solutions That
              </span>
              <br />
              <span className="bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 bg-clip-text text-transparent">
                Drive Results
              </span>
            </h2>
            <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto leading-relaxed">
              Comprehensive digital solutions designed to automate your processes and accelerate your growth
            </p>
          </div>

          {/* Services Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
            {services.map((service, index) => (
              <Card 
                key={service.id} 
                className="group hover:shadow-2xl transition-all duration-300 hover:scale-105 bg-white/90 dark:bg-gray-800/90 backdrop-blur-sm border border-gray-100 dark:border-gray-700 cursor-pointer"
                onClick={() => scrollToSection(service.id)}
              >
                <CardHeader className="pb-4">
                  <div className={`w-14 h-14 rounded-2xl bg-gradient-to-r ${service.color} shadow-lg group-hover:shadow-xl transition-shadow duration-300 flex items-center justify-center mb-4`}>
                    <service.icon className="h-7 w-7 text-white" />
                  </div>
                  <CardTitle className="text-xl font-semibold text-gray-900 dark:text-white mb-2">
                    {service.title}
                  </CardTitle>
                  <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
                    {service.description}
                  </p>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2 mb-6">
                    {service.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-center text-sm text-gray-600 dark:text-gray-300">
                        <div className="w-1.5 h-1.5 rounded-full bg-blue-500 mr-3"></div>
                        {feature}
                      </li>
                    ))}
                  </ul>
                  <Button 
                    className="w-full group-hover:shadow-lg transition-all duration-300"
                    onClick={() => scrollToSection(service.id)}
                  >
                    Learn More
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
