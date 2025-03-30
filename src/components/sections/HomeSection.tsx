
import { ArrowDown, ExternalLink } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";

const HomeSection = () => {
  return (
    <section id="home" className="section-padding min-h-screen flex items-center justify-center relative overflow-hidden">
      {/* Background gradients */}
      <div className="absolute inset-0 bg-gradient-to-b from-white to-gray-50 z-0"></div>
      <div className="absolute left-0 top-1/4 w-1/3 h-1/3 bg-maroon/5 rounded-full blur-3xl"></div>
      <div className="absolute right-0 bottom-1/4 w-1/3 h-1/3 bg-maroon/5 rounded-full blur-3xl"></div>
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          {/* Text Content - Left side on desktop, top on mobile */}
          <div className="flex flex-col space-y-6 md:order-1 order-2">
            <div className="space-y-3">
              <h2 className="text-maroon font-medium tracking-wider animate-fade-in">SaaS Developer & Automation Specialist</h2>
              <h1 className="text-4xl md:text-6xl font-bold tracking-tight animate-fade-in">
                Hello, I'm <span className="text-maroon">Iqra Faisal</span>
              </h1>
            </div>
            
            <p className="text-lg text-gray-700 leading-relaxed max-w-lg animate-fade-in">
              I build intelligent systems that automate processes, optimize workflows, and scale businesses through code and strategic thinking.
            </p>
            
            <div className="flex flex-wrap gap-4 pt-4 animate-fade-in">
              <Button 
                size="lg" 
                className="bg-maroon hover:bg-maroon/90 text-white rounded-md group"
              >
                <a href="#projects" className="flex items-center">
                  View My Work
                  <ExternalLink className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                </a>
              </Button>
              
              <Button 
                size="lg" 
                variant="outline" 
                className="border-2 border-gray-300 hover:bg-gray-100 hover:border-gray-400 rounded-md"
              >
                <a href="#contact" className="flex items-center">Contact Me</a>
              </Button>
            </div>
            
            <div className="flex gap-4 pt-4 animate-fade-in">
              <div className="flex items-center gap-3 px-4 py-3 bg-gray-50 rounded-lg border border-gray-200 shadow-sm">
                <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                <span className="text-gray-700">Available for hire</span>
              </div>
              
              <div className="flex items-center gap-3 px-4 py-3 bg-gray-50 rounded-lg border border-gray-200 shadow-sm">
                <div className="w-2 h-2 bg-blue-500 rounded-full"></div>
                <span className="text-gray-700">Based in UK</span>
              </div>
            </div>
          </div>
          
          {/* Image Content - Right side on desktop, bottom on mobile */}
          <div className="flex justify-center items-center md:order-2 order-1 animate-fade-in">
            <div className="relative">
              <div className="w-64 h-64 md:w-80 md:h-80 bg-gradient-to-br from-maroon/20 to-maroon/5 rounded-full flex items-center justify-center">
                <Avatar className="w-56 h-56 md:w-72 md:h-72 rounded-full border-4 border-white shadow-xl">
                  <AvatarImage
                    src="/lovable-uploads/934937cb-710e-4f8e-aa1e-757407b8a2ab.png"
                    alt="Iqra Faisal"
                    className="object-cover"
                  />
                  <AvatarFallback>IF</AvatarFallback>
                </Avatar>
              </div>
              
              {/* Decorative elements */}
              <div className="absolute -bottom-4 -right-4 bg-white px-4 py-2 rounded-full shadow-lg flex items-center gap-2">
                <span className="text-maroon font-medium">CRM Expert</span>
              </div>
              
              <div className="absolute -top-4 -left-4 bg-white px-4 py-2 rounded-full shadow-lg flex items-center gap-2">
                <span className="text-maroon font-medium">Digital Marketing Pro</span>
              </div>
            </div>
          </div>
        </div>
      </div>
      
      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <a href="#about" className="text-gray-400 hover:text-maroon transition-colors">
          <ArrowDown size={24} />
        </a>
      </div>
    </section>
  );
};

export default HomeSection;
