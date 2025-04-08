
import React from "react";
import { ArrowRight, Calendar } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";

interface MobileHeroProps {
  displayText: string;
}

const MobileHeroSection: React.FC<MobileHeroProps> = ({ displayText }) => {
  return (
    <div className="flex flex-col items-center px-4 pt-20 pb-10">
      {/* Avatar at the top */}
      <div className="relative mb-6">
        <div className="absolute inset-0 bg-gradient-to-r from-blue-400/40 to-purple-400/40 rounded-full blur-3xl opacity-70 animate-pulse -z-10"></div>
        
        <div className="w-36 h-36 bg-gradient-to-b from-white to-blue-50 dark:from-gray-800 dark:to-blue-950 rounded-full flex items-center justify-center border-4 border-white/50 dark:border-blue-700/50 shadow-2xl relative z-10 animate-float">
          <Avatar className="w-32 h-32 rounded-full border-4 border-white dark:border-gray-800 shadow-xl">
            <AvatarImage
              src="/lovable-uploads/934937cb-710e-4f8e-aa1e-757407b8a2ab.png"
              alt="Iqra Faisal"
              className="object-cover"
            />
            <AvatarFallback>IF</AvatarFallback>
          </Avatar>
        </div>
        
        {/* Small badges */}
        <div className="absolute -bottom-2 -right-2 bg-gradient-to-r from-royal to-electric dark:from-blue-500 dark:to-blue-700 px-3 py-1 rounded-full shadow-lg border-2 border-white/80 dark:border-gray-800/80 flex items-center z-20 animate-float animate-delay-200">
          <span className="text-white text-xs font-medium">CRM Pro</span>
        </div>
      </div>
      
      {/* Status indicators */}
      <div className="flex flex-wrap items-center justify-center gap-2 mb-4 animate-fade-in-up">
        <Badge className="bg-gradient-to-r from-royal to-electric dark:from-blue-500 dark:to-blue-700 text-white border-none rounded-full px-2.5 py-0.5 shadow-md">
          <span className="animate-pulse mr-1">•</span>
          <span className="text-xs">Available for Projects</span>
        </Badge>
        <div className="flex items-center gap-1">
          <span className="h-1.5 w-1.5 rounded-full bg-green-500 animate-pulse"></span>
          <span className="text-gray-600 dark:text-gray-400 text-xs">Online Now</span>
        </div>
      </div>
      
      {/* Text content */}
      <div className="text-center space-y-3 mb-6">
        <p className="text-blue-600 dark:text-blue-400 font-medium text-xs uppercase bg-gradient-to-r from-royal to-electric bg-clip-text text-transparent dark:from-blue-400 dark:to-blue-500">
          SaaS Developer & Automation Specialist
        </p>
        
        <h1 className="text-2xl font-bold tracking-tight min-h-[3rem] flex items-center justify-center">
          <span className="typewriter bg-clip-text text-transparent bg-gradient-to-r from-royal to-electric dark:from-blue-400 dark:to-blue-500">
            {displayText}
          </span>
        </h1>
        
        <div className="w-16 h-1 bg-gradient-to-r from-royal to-electric dark:from-blue-400 dark:to-blue-500 rounded-full mb-3 mx-auto"></div>
      </div>
      
      {/* Description */}
      <p className="text-sm text-gray-700 dark:text-gray-300 leading-relaxed mb-6 backdrop-blur-sm bg-white/5 dark:bg-black/5 p-3 rounded-lg border border-blue-100/50 dark:border-blue-900/50 text-center">
        I build intelligent systems that automate processes, optimize workflows, and scale businesses through code and strategic thinking.
      </p>
      
      {/* CTA Buttons */}
      <div className="flex flex-col gap-3 w-full">
        <Button 
          className="group bg-gradient-to-r from-royal to-electric hover:from-blue-700 hover:to-indigo-600 dark:from-blue-500 dark:to-blue-700 text-white rounded-full py-2.5 text-sm shadow-lg hover:shadow-xl transition-all duration-300 w-full justify-center"
          asChild
        >
          <a href="#services" className="flex items-center justify-center">
            View My Work
            <ArrowRight className="ml-2 h-3 w-3 transition-transform duration-300 group-hover:translate-x-1" />
          </a>
        </Button>
  
        <Button 
          variant="outline" 
          className="border-2 border-blue-200 dark:border-blue-800 text-blue-600 dark:text-blue-400 hover:bg-blue-50 dark:hover:bg-blue-900/30 rounded-full py-2.5 text-sm backdrop-blur-sm shadow-md hover:shadow-lg w-full justify-center"
          asChild
        >
          <a href="https://calendly.com/iqrafaisal81/discovery-call" target="_blank" rel="noopener noreferrer" className="flex items-center justify-center">
            <Calendar className="mr-2 h-4 w-4" />
            Book a Consultation
          </a>
        </Button>
      </div>
      
      {/* Expertise Pills - Now in a two-column layout */}
      <div className="grid grid-cols-2 gap-2 mt-6 w-full">
        <div className="flex items-center gap-2 px-3 py-1.5 bg-gradient-to-r from-white/80 to-blue-50/80 dark:from-gray-800/80 dark:to-blue-900/30 backdrop-blur-sm rounded-xl border border-blue-100 dark:border-blue-900 shadow-md">
          <div className="w-1.5 h-1.5 bg-green-500 rounded-full animate-pulse"></div>
          <span className="text-gray-700 dark:text-gray-300 text-xs">Expert in CRM</span>
        </div>
        
        <div className="flex items-center gap-2 px-3 py-1.5 bg-gradient-to-r from-white/80 to-blue-50/80 dark:from-gray-800/80 dark:to-blue-900/30 backdrop-blur-sm rounded-xl border border-blue-100 dark:border-blue-900 shadow-md">
          <div className="w-1.5 h-1.5 bg-blue-500 rounded-full"></div>
          <span className="text-gray-700 dark:text-gray-300 text-xs">UK-Based</span>
        </div>
      </div>
    </div>
  );
};

export default MobileHeroSection;
