
import React from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { 
  Code2, 
  Database, 
  Palette, 
  Zap, 
  Brain, 
  MessageSquare,
  BarChart3,
  Mail,
  Settings,
  Smartphone
} from "lucide-react";

const skills = [
  {
    category: "CRM & Automation",
    icon: Zap,
    color: "from-blue-500 to-cyan-500",
    skills: ["Go High Level", "HubSpot", "Zapier", "Make.com", "ActiveCampaign"]
  },
  {
    category: "Marketing Tools",
    icon: BarChart3,
    color: "from-purple-500 to-pink-500",
    skills: ["Google Ads", "Facebook Ads", "Google Analytics", "Tag Manager", "Hotjar"]
  },
  {
    category: "Design & Development",
    icon: Code2,
    color: "from-green-500 to-emerald-500",
    skills: ["HTML/CSS", "JavaScript", "React", "Figma", "Canva", "Photoshop"]
  },
  {
    category: "AI & Chatbots",
    icon: Brain,
    color: "from-orange-500 to-red-500",
    skills: ["ChatGPT Integration", "Voiceflow", "Manychat", "Custom AI Solutions"]
  },
  {
    category: "Email Marketing",
    icon: Mail,
    color: "from-indigo-500 to-purple-500",
    skills: ["Mailchimp", "ConvertKit", "Email Sequences", "A/B Testing"]
  },
  {
    category: "Analytics & Optimization",
    icon: Settings,
    color: "from-teal-500 to-blue-500",
    skills: ["Conversion Tracking", "Heat Maps", "Split Testing", "Performance Optimization"]
  }
];

const SkillsSection = () => {
  return (
    <section id="skills" className="py-16 lg:py-20 relative overflow-hidden bg-gradient-to-br from-white via-blue-50 to-slate-50 dark:from-gray-850 dark:to-gray-900">
      {/* Background decoration */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-20 left-20 w-96 h-96 bg-blue-500/5 rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 right-20 w-96 h-96 bg-purple-500/5 rounded-full blur-3xl"></div>
      </div>
      
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="max-w-7xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-16">
            <div className="inline-flex items-center px-4 py-2 mb-6 rounded-full bg-blue-100 dark:bg-blue-900/30 border border-blue-200 dark:border-blue-800">
              <Code2 className="h-4 w-4 mr-2 text-blue-600 dark:text-blue-400" />
              <span className="text-sm font-medium text-blue-800 dark:text-blue-300">Skills & Expertise</span>
            </div>
            <h2 className="text-4xl lg:text-6xl font-bold mb-6">
              <span className="bg-gradient-to-r from-gray-900 via-blue-800 to-purple-800 dark:from-white dark:via-blue-200 dark:to-purple-200 bg-clip-text text-transparent">
                Tools & Technologies
              </span>
              <br />
              <span className="bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 bg-clip-text text-transparent">
                I Master
              </span>
            </h2>
            <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto leading-relaxed">
              From automation platforms to AI integration, I work with cutting-edge tools to deliver exceptional results
            </p>
          </div>

          {/* Skills Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {skills.map((skillGroup, index) => (
              <Card key={index} className="group hover:shadow-2xl transition-all duration-300 hover:scale-105 bg-white/90 dark:bg-gray-800/90 backdrop-blur-sm border border-gray-100 dark:border-gray-700">
                <CardHeader className="pb-4">
                  <div className="flex items-center space-x-4">
                    <div className={`p-3 rounded-2xl bg-gradient-to-r ${skillGroup.color} shadow-lg group-hover:shadow-xl transition-shadow duration-300`}>
                      <skillGroup.icon className="h-6 w-6 text-white" />
                    </div>
                    <CardTitle className="text-xl font-semibold text-gray-900 dark:text-white">
                      {skillGroup.category}
                    </CardTitle>
                  </div>
                </CardHeader>
                <CardContent>
                  <div className="flex flex-wrap gap-2">
                    {skillGroup.skills.map((skill, skillIndex) => (
                      <Badge 
                        key={skillIndex} 
                        className="bg-gray-100 dark:bg-gray-700 text-gray-800 dark:text-gray-200 hover:bg-gray-200 dark:hover:bg-gray-600 transition-colors duration-200"
                      >
                        {skill}
                      </Badge>
                    ))}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default SkillsSection;
