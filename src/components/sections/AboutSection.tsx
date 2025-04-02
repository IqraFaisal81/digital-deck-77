
import React from "react";
import { Button } from "@/components/ui/button";
import { Check, ArrowRight } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

const AboutSection = () => {
  return (
    <section id="about" className="section-padding relative overflow-hidden">
      {/* Background decorative elements */}
      <div className="absolute top-40 right-10 w-72 h-72 bg-purple-400/20 dark:bg-purple-600/20 rounded-full blur-3xl opacity-40"></div>
      <div className="absolute bottom-40 left-10 w-96 h-96 bg-blue-400/20 dark:bg-blue-600/20 rounded-full blur-3xl opacity-40"></div>
      <div className="absolute top-1/3 left-1/4 w-64 h-64 bg-indigo-400/20 dark:bg-indigo-600/20 rounded-full blur-3xl opacity-30"></div>
      
      <div className="container mx-auto relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
          <div className="order-2 md:order-1">
            <div className="space-y-8 max-w-xl mx-auto md:mx-0">
              <h2 className="text-4xl md:text-5xl font-bold font-display">
                <span className="bg-gradient-to-r from-royal to-electric bg-clip-text text-transparent dark:from-electric dark:to-maroon">
                  About Me
                </span>
              </h2>
              
              <div className="bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm p-6 rounded-2xl shadow-lg border border-gray-100 dark:border-gray-700 hover-lift">
                <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
                  I help businesses achieve measurable growth through strategic digital solutions that 
                  automate tedious tasks, streamline operations, and convert more leads into customers.
                </p>
                <p className="text-gray-700 dark:text-gray-300 leading-relaxed mt-4">
                  With expertise in CRM implementation, marketing automation, and business systems integration, 
                  I create scalable infrastructure that gives you more time to focus on what matters—growing your 
                  business and serving your customers.
                </p>
              </div>
              
              <div className="grid grid-cols-2 gap-4">
                {[
                  "3+ years CRM expertise",
                  "MSc Digital Marketing",
                  "Certified Go High Level Expert",
                  "Workflow automation specialist"
                ].map((item, index) => (
                  <div 
                    key={index} 
                    className="bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm p-4 rounded-xl shadow-md border border-gray-100 dark:border-gray-700 flex items-center space-x-2 h-full hover:shadow-lg transition-all duration-300"
                  >
                    <Check className="text-purple-600 dark:text-purple-400 flex-shrink-0" />
                    <span className="text-gray-700 dark:text-gray-300">{item}</span>
                  </div>
                ))}
              </div>
              
              <Button className="bg-gradient-to-r from-purple-600 to-blue-500 hover:from-purple-700 hover:to-blue-600 text-white rounded-full px-8 py-7 shadow-lg hover:shadow-xl transition-all duration-300 group" size="lg">
                <a href="#skills" className="flex items-center">
                  View My Skills
                  <ArrowRight className="ml-2 h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
                </a>
              </Button>
            </div>
          </div>
          
          <div className="order-1 md:order-2 flex justify-center">
            <Card className="w-full max-w-md bg-white/90 dark:bg-gray-800/90 backdrop-blur-md border border-gray-100 dark:border-gray-700 shadow-xl rounded-2xl hover-lift overflow-hidden">
              <CardHeader className="pb-2">
                <CardTitle className="bg-gradient-to-r from-royal to-electric bg-clip-text text-transparent dark:from-electric dark:to-maroon font-display text-2xl">
                  My Journey
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-0 relative">
                  {/* Journey line */}
                  <div className="absolute left-[9px] top-[22px] bottom-[22px] w-[2px] bg-gradient-to-b from-purple-500 to-blue-500"></div>
                  
                  {[
                    {
                      period: "2022 – Present",
                      title: "Freelance CRM & Automation Expert",
                      description: "Building custom automation systems and CRM workflows for service-based businesses using Go High Level"
                    },
                    {
                      period: "2023 – 2024",
                      title: "Digital Marketer at Charley Grey",
                      description: "Managed 70+ client accounts, created funnels, automated lead systems, and ran high-performing ad campaigns"
                    },
                    {
                      period: "2022 – 2023",
                      title: "Digital Marketer at Lumbee Corporate",
                      description: "Developed competitor analysis and brand strategy to grow B2C partnerships and market positioning"
                    },
                    {
                      period: "2019 – 2022",
                      title: "Digital Marketing Executive at M.B Collections",
                      description: "Handled SEO, content, and social media strategy to scale brand visibility and sales"
                    }
                  ].map((job, index, array) => (
                    <div 
                      key={index} 
                      className="relative pl-8 py-4"
                    >
                      {/* Timeline dot */}
                      <div className="absolute left-0 top-[22px] h-5 w-5 rounded-full bg-gradient-to-r from-purple-600 to-blue-500 shadow-md z-10"></div>
                      
                      <p className="text-sm bg-gradient-to-r from-royal to-electric bg-clip-text text-transparent dark:from-electric dark:to-maroon font-medium">
                        {job.period}
                      </p>
                      <h4 className="font-semibold text-gray-900 dark:text-white">{job.title}</h4>
                      <p className="text-gray-600 dark:text-gray-400 text-sm">{job.description}</p>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
