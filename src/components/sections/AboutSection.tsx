
import React from "react";
import { Button } from "@/components/ui/button";
import { Check, ArrowRight, Award, Users, Clock } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

const AboutSection = () => {
  return (
    <section id="about" className="py-16 lg:py-20 relative overflow-hidden bg-gradient-to-b from-slate-50 via-white to-purple-50/30 dark:from-purple-950 dark:via-gray-900 dark:to-purple-900/60">
      {/* Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-0 left-0 w-full h-full">
          <div className="absolute top-20 right-20 w-72 h-72 bg-blue-500/5 dark:bg-purple-500/10 rounded-full blur-3xl"></div>
          <div className="absolute bottom-20 left-20 w-96 h-96 bg-purple-500/5 dark:bg-purple-400/15 rounded-full blur-3xl"></div>
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-64 h-64 bg-pink-500/5 dark:bg-violet-500/10 rounded-full blur-2xl"></div>
        </div>
      </div>
      
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="max-w-7xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-16">
            <div className="inline-flex items-center px-4 py-2 mb-6 rounded-full bg-blue-100 dark:bg-blue-900/30 border border-blue-200 dark:border-blue-800">
              <Award className="h-4 w-4 mr-2 text-blue-600 dark:text-blue-400" />
              <span className="text-sm font-medium text-blue-800 dark:text-blue-300">About Me</span>
            </div>
            <h2 className="text-4xl lg:text-6xl font-bold mb-6">
              <span className="bg-gradient-to-r from-gray-900 via-blue-800 to-purple-800 dark:from-white dark:via-blue-200 dark:to-purple-200 bg-clip-text text-transparent">
                Transforming Ideas Into
              </span>
              <br />
              <span className="bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 bg-clip-text text-transparent">
                Digital Success
              </span>
            </h2>
            <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto leading-relaxed">
              Passionate about creating intelligent systems that automate complexity and drive exponential business growth
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            {/* Left Content */}
            <div className="space-y-8">
              <div className="prose prose-lg dark:prose-invert">
                <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
                  I specialize in building sophisticated digital ecosystems that transform how businesses operate. 
                  My approach combines strategic thinking with technical excellence to create solutions that don't 
                  just solve problems—they unlock new possibilities.
                </p>
                <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
                  From CRM automation to AI-powered chatbots, I architect systems that scale with your ambitions 
                  while maintaining the personal touch that makes businesses thrive.
                </p>
              </div>
              
              {/* Key Points */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {[
                  { icon: Award, text: "MSc Digital Marketing", color: "from-blue-500 to-cyan-500" },
                  { icon: Users, text: "50+ Happy Clients", color: "from-purple-500 to-pink-500" },
                  { icon: Clock, text: "3+ Years Experience", color: "from-green-500 to-emerald-500" },
                  { icon: Check, text: "Go High Level Certified", color: "from-orange-500 to-red-500" }
                ].map((item, index) => (
                  <div 
                    key={index} 
                    className="group flex items-center space-x-3 p-4 rounded-2xl bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm border border-gray-100 dark:border-gray-700 hover:shadow-lg hover:scale-105 transition-all duration-300"
                  >
                    <div className={`p-2 rounded-xl bg-gradient-to-r ${item.color} shadow-lg group-hover:shadow-xl transition-shadow duration-300`}>
                      <item.icon className="h-5 w-5 text-white" />
                    </div>
                    <span className="font-medium text-gray-800 dark:text-gray-200">{item.text}</span>
                  </div>
                ))}
              </div>
              
              <Button 
                className="group bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 hover:from-blue-700 hover:via-purple-700 hover:to-pink-700 text-white rounded-full px-8 py-6 text-lg font-semibold shadow-xl hover:shadow-2xl transition-all duration-300 transform hover:scale-105" 
                size="lg"
                asChild
              >
                <a href="#skills" className="flex items-center">
                  Discover My Skills
                  <ArrowRight className="ml-2 h-5 w-5 transition-transform duration-300 group-hover:translate-x-1" />
                </a>
              </Button>
            </div>
            
            {/* Right Content - Journey Cards */}
            <div className="space-y-6">
              <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-8">My Journey</h3>
              
              <div className="space-y-6 relative">
                {/* Timeline line */}
                <div className="absolute left-6 top-8 bottom-8 w-0.5 bg-gradient-to-b from-blue-500 via-purple-500 to-pink-500 rounded-full"></div>
                
                {[
                  {
                    period: "2022 – Present",
                    title: "Freelance Digital Solutions Expert",
                    description: "Building custom automation systems and comprehensive digital strategies for growing businesses",
                    gradient: "from-blue-500 to-cyan-500"
                  },
                  {
                    period: "2023 – 2024", 
                    title: "Digital Marketing Specialist",
                    description: "Managed 70+ client accounts, created high-converting funnels, and optimized marketing campaigns",
                    gradient: "from-purple-500 to-pink-500"
                  },
                  {
                    period: "2021 – 2023",
                    title: "Academic Excellence",
                    description: "Completed MSc in Digital Marketing while building practical expertise in automation tools",
                    gradient: "from-green-500 to-emerald-500"
                  }
                ].map((item, index) => (
                  <Card key={index} className="ml-16 group hover:shadow-xl transition-all duration-300 hover:scale-105 bg-white/90 dark:bg-gray-800/90 backdrop-blur-sm border border-gray-100 dark:border-gray-700">
                    <div className={`absolute -left-[4.25rem] top-6 w-4 h-4 rounded-full bg-gradient-to-r ${item.gradient} shadow-lg border-4 border-white dark:border-gray-800`}></div>
                    <CardHeader className="pb-3">
                      <div className="flex items-center justify-between">
                        <CardTitle className="text-lg font-semibold text-gray-900 dark:text-white">
                          {item.title}
                        </CardTitle>
                        <span className={`text-sm font-medium px-3 py-1 rounded-full bg-gradient-to-r ${item.gradient} text-white shadow-md`}>
                          {item.period}
                        </span>
                      </div>
                    </CardHeader>
                    <CardContent>
                      <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
                        {item.description}
                      </p>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
