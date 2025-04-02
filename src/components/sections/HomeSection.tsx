
import { ArrowDown, Calendar, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Badge } from "@/components/ui/badge";
import { LampDemo } from "@/components/LampDemo";

const HomeSection = () => {
  return (
    <section id="home" className="min-h-screen relative overflow-hidden dark:bg-gray-900">
      
      <div className="absolute inset-0 z-0">
        <LampDemo />
      </div>
      
      <div className="container mx-auto px-4 relative z-10 flex items-center min-h-screen py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          
          <div className="flex flex-col space-y-6 md:order-1 order-2">
            <div className="flex items-center space-x-3 mb-2 animate-fade-in-up">
              <Badge className="bg-blue-100 hover:bg-blue-200 text-blue-700 dark:bg-blue-900/50 dark:hover:bg-blue-800/60 dark:text-blue-300 border-none rounded-full px-4 py-1">
                Available for Projects
              </Badge>
              <span className="h-1.5 w-1.5 rounded-full bg-green-500 animate-pulse"></span>
              <span className="text-gray-600 dark:text-gray-400 text-sm">Online Now</span>
            </div>
            
            <div className="space-y-3">
              <p className="text-blue-600 dark:text-blue-400 font-medium tracking-wider animate-fade-in-up animate-delay-100">
                SaaS Developer & Automation Specialist
              </p>
              <h1 className="text-4xl md:text-6xl font-bold tracking-tight bg-clip-text text-transparent bg-gradient-to-r from-black to-blue-600 dark:from-white dark:to-blue-400 font-display animate-fade-in-up animate-delay-200">
                Hello, I'm Iqra Faisal
              </h1>
              <div className="w-16 h-1 bg-blue-600 mb-6"></div>
            </div>
            
            <p className="text-lg text-gray-700 dark:text-gray-300 leading-relaxed max-w-lg animate-fade-in-up animate-delay-300">
              I build intelligent systems that automate processes, optimize workflows, and scale businesses through code and strategic thinking.
            </p>
            
            <div className="flex flex-wrap gap-4 pt-4 animate-fade-in-up animate-delay-400">
              <Button 
                className="group bg-blue-600 hover:bg-blue-700 text-white rounded-full px-6 py-6 shadow-md hover:shadow-lg transition-all duration-300"
                size="lg"
              >
                <a href="#services" className="flex items-center">
                  View My Work
                  <ArrowRight className="ml-2 h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
                </a>
              </Button>
        
              <Button 
                size="lg" 
                variant="outline" 
                className="border-2 border-blue-200 dark:border-blue-800 text-blue-600 dark:text-blue-400 hover:bg-blue-50 dark:hover:bg-blue-900/30 rounded-full px-6 py-6"
              >
                <a href="#booking" className="flex items-center">
                  <Calendar className="mr-2 h-5 w-5" />
                  Book a Consultation
                </a>
              </Button>
            </div>
            
            <div className="flex flex-wrap gap-4 pt-6 animate-fade-in-up animate-delay-500">
              <div className="flex items-center gap-3 px-4 py-3 bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm rounded-xl border border-blue-100 dark:border-blue-900 shadow-sm">
                <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
                <span className="text-gray-700 dark:text-gray-300 text-sm">Expert in CRM Solutions</span>
              </div>
              
              <div className="flex items-center gap-3 px-4 py-3 bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm rounded-xl border border-blue-100 dark:border-blue-900 shadow-sm">
                <div className="w-2 h-2 bg-blue-500 rounded-full"></div>
                <span className="text-gray-700 dark:text-gray-300 text-sm">UK-Based</span>
              </div>
            </div>
          </div>
          
          <div className="flex justify-center items-center md:order-2 order-1 animate-fade-in-up">
            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-r from-blue-400/20 to-purple-400/20 rounded-full blur-3xl opacity-70 animate-pulse"></div>
              
              <div className="w-64 h-64 md:w-80 md:h-80 bg-gradient-to-b from-white to-blue-50 dark:from-gray-800 dark:to-blue-950 rounded-full flex items-center justify-center border border-blue-100/50 dark:border-blue-700/50 shadow-xl relative z-10">
                <Avatar className="w-56 h-56 md:w-72 md:h-72 rounded-full border-4 border-white dark:border-gray-800 shadow-xl">
                  <AvatarImage
                    src="/lovable-uploads/934937cb-710e-4f8e-aa1e-757407b8a2ab.png"
                    alt="Iqra Faisal"
                    className="object-cover"
                  />
                  <AvatarFallback>IF</AvatarFallback>
                </Avatar>
              </div>
              
              {/* Moved badges to the front with z-index */}
              <div className="absolute -bottom-4 -right-4 bg-gradient-to-r from-blue-600 to-blue-500 px-5 py-3 rounded-full shadow-lg border border-white/80 dark:border-gray-800/80 flex items-center gap-2 z-20">
                <span className="text-white font-medium">CRM Expert</span>
              </div>
              
              <div className="absolute -top-4 -left-4 bg-gradient-to-r from-blue-600 to-blue-500 px-5 py-3 rounded-full shadow-lg border border-white/80 dark:border-gray-800/80 flex items-center gap-2 z-20">
                <span className="text-white font-medium">Marketing Pro</span>
              </div>
            </div>
          </div>
        </div>
      </div>
      
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce z-20">
        <a href="#about" className="text-gray-500 dark:text-gray-400 hover:text-blue-600 dark:hover:text-blue-400 transition-colors bg-white/80 dark:bg-gray-800/80 p-2 rounded-full backdrop-blur-sm shadow-sm border border-gray-100/50 dark:border-gray-700/50">
          <ArrowDown size={24} />
        </a>
      </div>
    </section>
  );
};

export default HomeSection;
