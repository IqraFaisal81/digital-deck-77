
import React from "react";
import { Button } from "@/components/ui/button";
import { Check, ArrowRight } from "lucide-react";

const AboutSection = () => {
  return <section id="about" className="section-padding bg-white dark:bg-gray-900 relative overflow-hidden">
      {/* Background decorative elements */}
      <div className="absolute top-20 -right-20 w-96 h-96 bg-blue-400/10 dark:bg-blue-400/5 rounded-full blur-3xl"></div>
      <div className="absolute -bottom-20 -left-20 w-96 h-96 bg-indigo-400/10 dark:bg-indigo-400/5 rounded-full blur-3xl"></div>
      <div className="absolute top-1/3 left-1/4 w-32 h-32 bg-purple-400/10 dark:bg-purple-400/5 rounded-full blur-2xl"></div>
      
      <div className="container mx-auto relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 md:gap-12 items-stretch">
          {/* Left column - About Me */}
          <div className="md:col-span-5 order-2 md:order-1 flex">
            <div className="space-y-6 backdrop-blur-sm bg-white/50 dark:bg-gray-800/50 p-6 md:p-8 rounded-2xl shadow-lg border border-gray-100/80 dark:border-gray-700/80 transform transition-all duration-500 hover:shadow-xl h-full flex flex-col">
              <h2 className="text-3xl md:text-4xl font-bold font-display">
                <span className="bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-indigo-600 dark:from-blue-400 dark:to-indigo-400">
                  About Me
                </span>
              </h2>

              <p className="text-gray-700 dark:text-gray-300 leading-relaxed text-lg">
                I help businesses achieve measurable growth through strategic digital solutions that 
                automate tedious tasks, streamline operations, and convert more leads into customers.
              </p>
              
              <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
                With expertise in CRM implementation, marketing automation, and business systems integration, 
                I create scalable infrastructure that gives you more time to focus on what matters—growing your 
                business and serving your customers.
              </p>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-6">
                <div className="flex items-start space-x-2 group">
                  <div className="bg-blue-100 dark:bg-blue-900/30 p-1.5 rounded-lg group-hover:bg-blue-200 dark:group-hover:bg-blue-800/40 transition-colors">
                    <Check className="text-blue-600 dark:text-blue-400 h-4 w-4" />
                  </div>
                  <span className="text-gray-700 dark:text-gray-300">3+ years CRM expertise</span>
                </div>
                <div className="flex items-start space-x-2 group">
                  <div className="bg-blue-100 dark:bg-blue-900/30 p-1.5 rounded-lg group-hover:bg-blue-200 dark:group-hover:bg-blue-800/40 transition-colors">
                    <Check className="text-blue-600 dark:text-blue-400 h-4 w-4" />
                  </div>
                  <span className="text-gray-700 dark:text-gray-300">MSc Digital Marketing</span>
                </div>
                <div className="flex items-start space-x-2 group">
                  <div className="bg-blue-100 dark:bg-blue-900/30 p-1.5 rounded-lg group-hover:bg-blue-200 dark:group-hover:bg-blue-800/40 transition-colors">
                    <Check className="text-blue-600 dark:text-blue-400 h-4 w-4" />
                  </div>
                  <span className="text-gray-700 dark:text-gray-300">Certified Go High Level Expert</span>
                </div>
                <div className="flex items-start space-x-2 group">
                  <div className="bg-blue-100 dark:bg-blue-900/30 p-1.5 rounded-lg group-hover:bg-blue-200 dark:group-hover:bg-blue-800/40 transition-colors">
                    <Check className="text-blue-600 dark:text-blue-400 h-4 w-4" />
                  </div>
                  <span className="text-gray-700 dark:text-gray-300">Workflow automation specialist</span>
                </div>
              </div>
              
              <div className="mt-auto pt-4">
                <Button className="group bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700 text-white dark:from-blue-500 dark:to-indigo-500 dark:hover:from-blue-600 dark:hover:to-indigo-600 rounded-full px-6 py-6 shadow-md hover:shadow-lg transition-all duration-300" size="lg">
                  <a href="#skills" className="flex items-center">
                    View My Skills
                    <ArrowRight className="ml-2 h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
                  </a>
                </Button>
              </div>
            </div>
          </div>
          
          {/* Right column - My Journey */}
          <div className="md:col-span-7 order-1 md:order-2 flex">
            <div className="relative h-full w-full">
              <div className="absolute inset-0 bg-gradient-to-br from-blue-400/20 to-purple-400/20 rounded-2xl blur-2xl transform rotate-3 -z-10"></div>
              <div className="bg-white dark:bg-gray-800 p-6 md:p-8 rounded-2xl shadow-xl border border-gray-100 dark:border-gray-700 transform transition-all duration-500 hover:shadow-2xl h-full flex flex-col">
                <h3 className="text-2xl font-semibold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-indigo-600 dark:from-blue-400 dark:to-indigo-400 font-display">
                  My Journey
                </h3>
                <div className="space-y-6 flex-grow">
                  <div className="relative h-full">
                    {/* Timeline line */}
                    <div className="absolute top-0 left-4 bottom-0 w-0.5 bg-gradient-to-b from-blue-500 to-indigo-500 dark:from-blue-400 dark:to-indigo-400"></div>
                    
                    <div className="border-l-2 border-transparent pl-6 py-2 relative hover:bg-blue-50/50 dark:hover:bg-blue-900/10 rounded-r-lg transition-colors group">
                      <div className="absolute left-0 top-3 w-3 h-3 rounded-full bg-blue-600 dark:bg-blue-400 shadow-[0_0_10px_rgba(37,99,235,0.5)] z-10 group-hover:bg-indigo-500 dark:group-hover:bg-indigo-400 transition-colors"></div>
                      <div className="absolute -left-1 top-1 w-7 h-7 rounded-full bg-blue-100 dark:bg-blue-900/30 -z-0 group-hover:scale-110 transition-transform"></div>
                      <p className="text-sm text-blue-600 dark:text-blue-400 font-medium">2022 – Present</p>
                      <h4 className="font-semibold text-gray-900 dark:text-white">Freelance CRM & Automation Expert</h4>
                      <p className="text-gray-600 dark:text-gray-400 text-sm">Building custom automation systems and CRM workflows for service-based businesses using Go High Level</p>
                    </div>
                    
                    <div className="border-l-2 border-transparent pl-6 py-2 relative hover:bg-blue-50/50 dark:hover:bg-blue-900/10 rounded-r-lg transition-colors group">
                      <div className="absolute left-0 top-3 w-3 h-3 rounded-full bg-blue-600 dark:bg-blue-400 shadow-[0_0_10px_rgba(37,99,235,0.5)] z-10 group-hover:bg-indigo-500 dark:group-hover:bg-indigo-400 transition-colors"></div>
                      <div className="absolute -left-1 top-1 w-7 h-7 rounded-full bg-blue-100 dark:bg-blue-900/30 -z-0 group-hover:scale-110 transition-transform"></div>
                      <p className="text-sm text-blue-600 dark:text-blue-400 font-medium">2023 – 2024</p>
                      <h4 className="font-semibold text-gray-900 dark:text-white">Digital Marketer at Charley Grey</h4>
                      <p className="text-gray-600 dark:text-gray-400 text-sm">Managed 70+ client accounts, created funnels, automated lead systems, and ran high-performing ad campaigns</p>
                    </div>
                    
                    <div className="border-l-2 border-transparent pl-6 py-2 relative hover:bg-blue-50/50 dark:hover:bg-blue-900/10 rounded-r-lg transition-colors group">
                      <div className="absolute left-0 top-3 w-3 h-3 rounded-full bg-blue-600 dark:bg-blue-400 shadow-[0_0_10px_rgba(37,99,235,0.5)] z-10 group-hover:bg-indigo-500 dark:group-hover:bg-indigo-400 transition-colors"></div>
                      <div className="absolute -left-1 top-1 w-7 h-7 rounded-full bg-blue-100 dark:bg-blue-900/30 -z-0 group-hover:scale-110 transition-transform"></div>
                      <p className="text-sm text-blue-600 dark:text-blue-400 font-medium">2022 – 2023</p>
                      <h4 className="font-semibold text-gray-900 dark:text-white">Digital Marketer at Lumbee Corporate</h4>
                      <p className="text-gray-600 dark:text-gray-400 text-sm">Developed competitor analysis and brand strategy to grow B2C partnerships and market positioning</p>
                    </div>
                    
                    <div className="border-l-2 border-transparent pl-6 py-2 relative hover:bg-blue-50/50 dark:hover:bg-blue-900/10 rounded-r-lg transition-colors group">
                      <div className="absolute left-0 top-3 w-3 h-3 rounded-full bg-blue-600 dark:bg-blue-400 shadow-[0_0_10px_rgba(37,99,235,0.5)] z-10 group-hover:bg-indigo-500 dark:group-hover:bg-indigo-400 transition-colors"></div>
                      <div className="absolute -left-1 top-1 w-7 h-7 rounded-full bg-blue-100 dark:bg-blue-900/30 -z-0 group-hover:scale-110 transition-transform"></div>
                      <p className="text-sm text-blue-600 dark:text-blue-400 font-medium">2019 – 2022</p>
                      <h4 className="font-semibold text-gray-900 dark:text-white">Digital Marketing Executive at M.B Collections</h4>
                      <p className="text-gray-600 dark:text-gray-400 text-sm">Handled SEO, content, and social media strategy to scale brand visibility and sales</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>;
};

export default AboutSection;
