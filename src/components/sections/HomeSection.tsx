
import { ArrowDown, Calendar, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Badge } from "@/components/ui/badge";

const HomeSection = () => {
  return (
    <section id="home" className="min-h-screen flex items-center justify-center pt-16 pb-20 overflow-hidden relative bg-gradient-to-b from-white via-blue-50/30 to-white">
      {/* Background Decorations */}
      <div className="absolute top-20 right-20 w-64 h-64 rounded-full bg-blue-200/20 blur-3xl"></div>
      <div className="absolute bottom-20 left-10 w-80 h-80 rounded-full bg-purple-200/20 blur-3xl"></div>
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          
          <div className="flex flex-col space-y-6 md:order-1 order-2">
            <div className="flex items-center space-x-3 mb-2 animate-fade-in-up">
              <Badge className="bg-blue-100 hover:bg-blue-200 text-blue-700 border-none rounded-full px-4 py-1">
                Available for Projects
              </Badge>
              <span className="h-1.5 w-1.5 rounded-full bg-green-500 animate-pulse"></span>
              <span className="text-gray-600 text-sm">Online Now</span>
            </div>
            
            <div className="space-y-3">
              <p className="text-blue-600 font-medium tracking-wider animate-fade-in-up animate-delay-100">
                SaaS Developer & Automation Specialist
              </p>
              <h1 className="text-4xl md:text-6xl font-bold tracking-tight text-gray-900 font-display animate-fade-in-up animate-delay-200">
                Hello, I'm <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-blue-500">Iqra Faisal</span>
              </h1>
            </div>
            
            <p className="text-lg text-gray-700 leading-relaxed max-w-lg animate-fade-in-up animate-delay-300">
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
                className="border-2 border-blue-200 text-blue-600 hover:bg-blue-50 rounded-full px-6 py-6"
              >
                <a href="#booking" className="flex items-center">
                  <Calendar className="mr-2 h-5 w-5" />
                  Book a Consultation
                </a>
              </Button>
            </div>
            
            <div className="flex flex-wrap gap-4 pt-6 animate-fade-in-up animate-delay-500">
              <div className="flex items-center gap-3 px-4 py-3 bg-white/80 backdrop-blur-sm rounded-xl border border-blue-100 shadow-sm">
                <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
                <span className="text-gray-700 text-sm">Expert in CRM Solutions</span>
              </div>
              
              <div className="flex items-center gap-3 px-4 py-3 bg-white/80 backdrop-blur-sm rounded-xl border border-blue-100 shadow-sm">
                <div className="w-2 h-2 bg-blue-500 rounded-full"></div>
                <span className="text-gray-700 text-sm">UK-Based</span>
              </div>
            </div>
          </div>
          
          <div className="flex justify-center items-center md:order-2 order-1 animate-fade-in-up">
            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-r from-blue-400/20 to-purple-400/20 rounded-full blur-3xl opacity-70 animate-pulse"></div>
              
              <div className="w-64 h-64 md:w-80 md:h-80 bg-gradient-to-b from-white to-blue-50 rounded-full flex items-center justify-center border border-blue-100/50 shadow-xl relative z-10">
                <Avatar className="w-56 h-56 md:w-72 md:h-72 rounded-full border-4 border-white shadow-xl">
                  <AvatarImage
                    src="/lovable-uploads/934937cb-710e-4f8e-aa1e-757407b8a2ab.png"
                    alt="Iqra Faisal"
                    className="object-cover"
                  />
                  <AvatarFallback>IF</AvatarFallback>
                </Avatar>
              </div>
              
              {/* Moved badges to the front with z-index */}
              <div className="absolute -bottom-4 -right-4 bg-gradient-to-r from-blue-600 to-blue-500 px-5 py-3 rounded-full shadow-lg border border-white/80 flex items-center gap-2 z-20">
                <span className="text-white font-medium">CRM Expert</span>
              </div>
              
              <div className="absolute -top-4 -left-4 bg-gradient-to-r from-blue-600 to-blue-500 px-5 py-3 rounded-full shadow-lg border border-white/80 flex items-center gap-2 z-20">
                <span className="text-white font-medium">Marketing Pro</span>
              </div>
            </div>
          </div>
        </div>
      </div>
      
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <a href="#about" className="text-gray-500 hover:text-blue-600 transition-colors bg-white/80 p-2 rounded-full backdrop-blur-sm shadow-sm border border-gray-100/50">
          <ArrowDown size={24} />
        </a>
      </div>
    </section>
  );
};

export default HomeSection;
