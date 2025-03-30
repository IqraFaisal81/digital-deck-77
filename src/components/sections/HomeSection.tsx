
import { ArrowDown, ExternalLink } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";

const HomeSection = () => {
  return (
    <section id="home" className="section-padding min-h-screen flex items-center justify-center relative overflow-hidden bg-blue-gradient">
      {/* Background gradient is now handled by bg-blue-gradient class */}
      <div className="container mx-auto px-4 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center text-white">
          {/* Text Content - Left side on desktop, top on mobile */}
          <div className="flex flex-col space-y-6 md:order-1 order-2">
            <div className="space-y-3">
              <h2 className="text-electric font-medium tracking-wider animate-fade-in">SaaS Developer & Automation Specialist</h2>
              <h1 className="text-4xl md:text-6xl font-bold tracking-tight animate-fade-in">
                Hello, I'm <span className="text-electric">Iqra Faisal</span>
              </h1>
            </div>
            
            <p className="text-lg text-white/80 leading-relaxed max-w-lg animate-fade-in">
              I build intelligent systems that automate processes, optimize workflows, and scale businesses through code and strategic thinking.
            </p>
            
            <div className="flex flex-wrap gap-4 pt-4 animate-fade-in">
              <Button 
                size="lg" 
                className="bg-electric hover:bg-electric/90 text-white rounded-md group"
              >
                <a href="#projects" className="flex items-center">
                  View My Work
                  <ExternalLink className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                </a>
              </Button>
              
              <Button 
                size="lg" 
                variant="outline" 
                className="border-2 border-white/30 text-white hover:bg-white/10 rounded-md"
              >
                <a href="#contact" className="flex items-center">Contact Me</a>
              </Button>
            </div>
            
            <div className="flex gap-4 pt-4 animate-fade-in">
              <div className="flex items-center gap-3 px-4 py-3 bg-white/10 rounded-lg border border-white/20 shadow-sm">
                <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                <span className="text-white/80">Available for hire</span>
              </div>
              
              <div className="flex items-center gap-3 px-4 py-3 bg-white/10 rounded-lg border border-white/20 shadow-sm">
                <div className="w-2 h-2 bg-electric rounded-full"></div>
                <span className="text-white/80">Based in UK</span>
              </div>
            </div>
          </div>
          
          {/* Image Content - Right side on desktop, bottom on mobile */}
          <div className="flex justify-center items-center md:order-2 order-1 animate-fade-in">
            <div className="relative">
              <div className="w-64 h-64 md:w-80 md:h-80 bg-white/10 backdrop-blur-sm rounded-full flex items-center justify-center border border-white/20">
                <Avatar className="w-56 h-56 md:w-72 md:h-72 rounded-full border-4 border-white/20 shadow-xl">
                  <AvatarImage
                    src="/lovable-uploads/934937cb-710e-4f8e-aa1e-757407b8a2ab.png"
                    alt="Iqra Faisal"
                    className="object-cover"
                  />
                  <AvatarFallback>IF</AvatarFallback>
                </Avatar>
              </div>
              
              {/* Decorative elements */}
              <div className="absolute -bottom-4 -right-4 bg-white/10 px-4 py-2 rounded-full backdrop-blur-sm border border-white/20 flex items-center gap-2">
                <span className="text-electric font-medium">CRM Expert</span>
              </div>
              
              <div className="absolute -top-4 -left-4 bg-white/10 px-4 py-2 rounded-full backdrop-blur-sm border border-white/20 flex items-center gap-2">
                <span className="text-electric font-medium">Digital Marketing Pro</span>
              </div>
            </div>
          </div>
        </div>
      </div>
      
      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <a href="#about" className="text-white/60 hover:text-electric transition-colors">
          <ArrowDown size={24} />
        </a>
      </div>
    </section>
  );
};

export default HomeSection;
