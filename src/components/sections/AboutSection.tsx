
import React from "react";
import { Button } from "@/components/ui/button";
import { Check, ArrowRight } from "lucide-react";

const AboutSection = () => {
  return (
    <section id="about" className="section-padding bg-white dark:bg-gray-900 relative overflow-hidden">
      {/* Background decorative elements */}
      <div className="absolute top-40 right-10 w-64 h-64 bg-blue-50 dark:bg-blue-900/20 rounded-full blur-3xl opacity-30"></div>
      <div className="absolute bottom-40 left-10 w-80 h-80 bg-blue-50 dark:bg-blue-900/20 rounded-full blur-3xl opacity-30"></div>
      
      <div className="container mx-auto relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
          <div className="order-2 md:order-1">
            <div className="space-y-6">
              <h2 className="text-3xl md:text-4xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-black to-blue-600 dark:from-white dark:to-blue-400 font-display">
                About Me
              </h2>
              <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
                I help businesses achieve measurable growth through strategic digital solutions that 
                automate tedious tasks, streamline operations, and convert more leads into customers.
              </p>
              <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
                With expertise in CRM implementation, marketing automation, and business systems integration, 
                I create scalable infrastructure that gives you more time to focus on what matters—growing your 
                business and serving your customers.
              </p>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-4">
                <div className="flex items-start space-x-2">
                  <Check className="text-blue-600 dark:text-blue-400 mt-1" />
                  <span className="text-gray-700 dark:text-gray-300">3+ years CRM expertise</span>
                </div>
                <div className="flex items-start space-x-2">
                  <Check className="text-blue-600 dark:text-blue-400 mt-1" />
                  <span className="text-gray-700 dark:text-gray-300">MBA Graduate</span>
                </div>
                <div className="flex items-start space-x-2">
                  <Check className="text-blue-600 dark:text-blue-400 mt-1" />
                  <span className="text-gray-700 dark:text-gray-300">Certified Go High Level Expert</span>
                </div>
                <div className="flex items-start space-x-2">
                  <Check className="text-blue-600 dark:text-blue-400 mt-1" />
                  <span className="text-gray-700 dark:text-gray-300">Workflow automation specialist</span>
                </div>
              </div>
              
              <Button 
                className="group bg-blue-600 hover:bg-blue-700 text-white dark:bg-blue-700 dark:hover:bg-blue-600 rounded-full px-6 py-6 shadow-md hover:shadow-lg transition-all duration-300"
                size="lg"
              >
                <a href="#skills" className="flex items-center">
                  View My Skills
                  <ArrowRight className="ml-2 h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
                </a>
              </Button>
            </div>
          </div>
          
          <div className="order-1 md:order-2 flex justify-center">
            <div className="relative w-full max-w-md">
              <div className="absolute inset-0 bg-gradient-to-r from-blue-400/30 to-purple-400/30 rounded-2xl blur-3xl"></div>
              <div className="relative bg-white dark:bg-gray-800 p-6 rounded-2xl shadow-xl border border-gray-100 dark:border-gray-700">
                <h3 className="text-xl font-semibold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-black to-blue-600 dark:from-white dark:to-blue-400">
                  My Journey
                </h3>
                <div className="space-y-6">
                  <div className="border-l-2 border-blue-500 pl-4 py-2">
                    <p className="text-sm text-blue-600 dark:text-blue-400 font-medium">2024 - Present</p>
                    <h4 className="font-semibold text-gray-900 dark:text-white">Freelance CRM Specialist & Automation Expert</h4>
                    <p className="text-gray-600 dark:text-gray-400 text-sm">Building custom CRM and automation systems for service-based businesses</p>
                  </div>
                  
                  <div className="border-l-2 border-blue-500 pl-4 py-2">
                    <p className="text-sm text-blue-600 dark:text-blue-400 font-medium">2023 - 2024</p>
                    <h4 className="font-semibold text-gray-900 dark:text-white">Digital Marketer at Charley Grey</h4>
                    <p className="text-gray-600 dark:text-gray-400 text-sm">Managed 70+ client accounts, designed funnels and automation systems</p>
                  </div>
                  
                  <div className="border-l-2 border-blue-500 pl-4 py-2">
                    <p className="text-sm text-blue-600 dark:text-blue-400 font-medium">2023</p>
                    <h4 className="font-semibold text-gray-900 dark:text-white">Digital Marketer at DRK Pharma GmbH</h4>
                    <p className="text-gray-600 dark:text-gray-400 text-sm">Led SEO and social media strategies for international markets</p>
                  </div>
                  
                  <div className="border-l-2 border-blue-500 pl-4 py-2">
                    <p className="text-sm text-blue-600 dark:text-blue-400 font-medium">2022 - 2023</p>
                    <h4 className="font-semibold text-gray-900 dark:text-white">Digital Marketer at Lumbee Corporate</h4>
                    <p className="text-gray-600 dark:text-gray-400 text-sm">Market research and campaign management for B2C partnerships</p>
                  </div>
                  
                  <div className="border-l-2 border-blue-500 pl-4 py-2">
                    <p className="text-sm text-blue-600 dark:text-blue-400 font-medium">2019 - 2022</p>
                    <h4 className="font-semibold text-gray-900 dark:text-white">Digital Marketing Executive at M.B Collections</h4>
                    <p className="text-gray-600 dark:text-gray-400 text-sm">Shaped brand's digital presence through SEO and email marketing</p>
                  </div>
                  
                  <div className="border-l-2 border-purple-500 pl-4 py-2 mt-4">
                    <p className="text-sm text-purple-600 dark:text-purple-400 font-medium">Education</p>
                    <h4 className="font-semibold text-gray-900 dark:text-white">MBA - University of Lincoln UK (2023-2024)</h4>
                    <h4 className="font-semibold text-gray-900 dark:text-white mt-1">Bachelors in Media & Communication - UCP (2017-2021)</h4>
                    <p className="text-gray-600 dark:text-gray-400 text-sm mt-1">Certifications: Google Ads, SEO, Google Tag Manager, Go High Level</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
