
import { ArrowDown, Rocket } from "lucide-react";
import { Button } from "@/components/ui/button";

const HomeSection = () => {
  return (
    <section id="home" className="section-padding min-h-screen flex items-center justify-center pt-20 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-transparent to-black/5 pointer-events-none z-0"></div>
      
      <div className="container mx-auto relative z-10">
        <div className="flex flex-col items-center text-center">
          <div className="relative w-36 h-36 mb-8 rounded-full overflow-hidden shadow-xl shadow-maroon/20 border-2 border-white animate-fade-in">
            <img 
              src="/lovable-uploads/934937cb-710e-4f8e-aa1e-757407b8a2ab.png" 
              alt="Iqra Faisal" 
              className="w-full h-full object-cover"
            />
          </div>
          
          <h1 className="text-5xl md:text-7xl font-bold mb-6 animate-fade-in tracking-tight">
            Iqra <span className="text-maroon">Faisal</span>
          </h1>
          
          <h2 className="text-xl md:text-2xl text-black/80 mb-8 animate-fade-in font-light max-w-2xl">
            SaaS Developer · CRM Automation Specialist · Digital Marketing Pro
          </h2>
          
          <p className="max-w-2xl text-black/70 mb-10 animate-fade-in leading-relaxed">
            Building smart systems, automating success, and scaling businesses with code & creativity.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-6 animate-fade-in">
            <Button 
              size="lg" 
              className="bg-maroon hover:bg-maroon/90 text-white shadow-md shadow-maroon/20 px-8 py-6 rounded-full"
              asChild
            >
              <a href="#contact" className="flex items-center text-base">Let&apos;s Work Together <ArrowDown className="ml-2 h-4 w-4" /></a>
            </Button>
            
            <Button 
              size="lg" 
              variant="outline" 
              className="border-2 border-black/10 hover:bg-black/5 px-8 py-6 rounded-full"
              asChild
            >
              <a href="#projects" className="flex items-center text-base">View My Work</a>
            </Button>
          </div>
        </div>
        
        <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 animate-bounce">
          <a href="#about" className="text-black/50 hover:text-maroon transition-colors">
            <ArrowDown size={30} />
          </a>
        </div>
      </div>
      
      {/* Decorative elements */}
      <div className="absolute top-20 right-10 md:right-40 w-64 h-64 bg-maroon/5 rounded-full blur-3xl"></div>
      <div className="absolute bottom-20 left-10 md:left-40 w-64 h-64 bg-maroon/5 rounded-full blur-3xl"></div>
    </section>
  );
};

export default HomeSection;
