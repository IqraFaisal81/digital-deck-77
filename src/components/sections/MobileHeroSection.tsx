
import React from "react";
import { ArrowRight, Calendar, Sparkles } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";

interface MobileHeroProps {
  displayText: string;
}

const MobileHeroSection: React.FC<MobileHeroProps> = ({ displayText }) => {
  return (
    <div className="flex flex-col items-center px-4 pt-12 pb-6">
      {/* Avatar at the top */}
      <div className="relative mb-4">
        <div className="absolute inset-0 bg-gradient-to-r from-blue-500/30 via-purple-500/30 to-pink-500/30 rounded-full blur-3xl opacity-70 animate-pulse -z-10"></div>
        
        <div className="w-40 h-40 bg-gradient-to-b from-white to-blue-50 dark:from-gray-800 dark:to-blue-950 rounded-full flex items-center justify-center border-4 border-white/50 dark:border-blue-700/50 shadow-2xl relative z-10 animate-float">
          <Avatar className="w-36 h-36 rounded-full border-4 border-white dark:border-gray-800 shadow-xl">
            <AvatarImage
              src="/lovable-uploads/934937cb-710e-4f8e-aa1e-757407b8a2ab.png"
              alt="Iqra Faisal"
              className="object-cover"
            />
            <AvatarFallback>IF</AvatarFallback>
          </Avatar>
        </div>
        
        {/* Small badges */}
        <div className="absolute -bottom-2 -right-2 bg-gradient-to-r from-blue-500 to-purple-600 dark:from-blue-500 dark:to-purple-700 px-3 py-1 rounded-full shadow-lg border-2 border-white/80 dark:border-gray-800/80 flex items-center z-20 animate-float animate-delay-200">
          <span className="text-white text-sm font-medium">CRM Pro</span>
        </div>
      </div>
      
      {/* Status indicators */}
      <div className="flex flex-wrap items-center justify-center gap-2 mb-3 animate-fade-in-up">
        <Badge className="bg-gradient-to-r from-emerald-500 to-blue-600 text-white border-none rounded-full px-3 py-1 shadow-md">
          <Sparkles className="w-4 h-4 mr-2" />
          <span className="animate-pulse mr-1">•</span>
          <span className="text-sm">Available for Projects</span>
        </Badge>
        <div className="flex items-center gap-1">
          <span className="h-2 w-2 rounded-full bg-green-500 animate-pulse"></span>
          <span className="text-gray-600 dark:text-gray-400 text-sm">Online Now</span>
        </div>
      </div>
      
      {/* Text content */}
      <div className="text-center space-y-3 mb-4">
        <p className="text-blue-600 dark:text-blue-400 font-medium text-sm uppercase bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent dark:from-blue-400 dark:to-purple-400">
          SaaS Developer & Automation Specialist
        </p>
        
        <h1 className="text-3xl font-bold tracking-tight min-h-[4rem] flex items-center justify-center">
          <span className="typewriter bg-clip-text text-transparent bg-gradient-to-r from-gray-900 via-gray-800 to-blue-900 dark:from-white dark:via-blue-100 dark:to-purple-200">
            {displayText}
          </span>
        </h1>
        
        <div className="w-20 h-1 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full mb-3 mx-auto"></div>
      </div>
      
      {/* Description */}
      <p className="text-base text-gray-700 dark:text-gray-300 leading-relaxed mb-5 backdrop-blur-sm bg-white/5 dark:bg-black/5 p-4 rounded-lg border border-blue-100/50 dark:border-blue-900/50 text-center">
        I build intelligent systems that automate processes, optimize workflows, and scale businesses through code and strategic thinking.
      </p>
      
      {/* CTA Buttons */}
      <div className="flex flex-col gap-3 w-full mb-4">
        <Button 
          className="group bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 hover:from-blue-700 hover:via-purple-700 hover:to-pink-700 text-white rounded-full py-3 text-base shadow-lg hover:shadow-xl transition-all duration-300 w-full justify-center"
          asChild
        >
          <a href="#services" className="flex items-center justify-center">
            View My Work
            <ArrowRight className="ml-2 h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
          </a>
        </Button>
  
        <Button 
          variant="outline" 
          className="border-2 border-gray-300 text-gray-800 hover:bg-gray-50 dark:border-white/30 dark:text-white dark:hover:bg-white/10 backdrop-blur-sm rounded-full py-3 text-base shadow-md hover:shadow-lg w-full justify-center"
          asChild
        >
          <a href="https://calendly.com/iqrafaisal81/discovery-call?month=2025-04" target="_blank" rel="noopener noreferrer" className="flex items-center justify-center">
            <Calendar className="mr-2 h-5 w-5" />
            Book a Consultation
          </a>
        </Button>
      </div>
      
      {/* Expertise Pills - Now in a two-column layout */}
      <div className="grid grid-cols-2 gap-2 w-full">
        <div className="flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-white/80 to-blue-50/80 dark:from-gray-800/80 dark:to-blue-900/30 backdrop-blur-sm rounded-xl border border-blue-100 dark:border-blue-900 shadow-md">
          <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
          <span className="text-gray-700 dark:text-gray-300 text-sm">Expert in CRM</span>
        </div>
        
        <div className="flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-white/80 to-blue-50/80 dark:from-gray-800/80 dark:to-blue-900/30 backdrop-blur-sm rounded-xl border border-blue-100 dark:border-blue-900 shadow-md">
          <div className="w-2 h-2 bg-blue-500 rounded-full"></div>
          <span className="text-gray-700 dark:text-gray-300 text-sm">UK-Based</span>
        </div>
      </div>
    </div>
  );
};

export default MobileHeroSection;
