
import { ArrowDown } from "lucide-react";
import { Button } from "@/components/ui/button";

const HomeSection = () => {
  return (
    <section id="home" className="section-padding min-h-screen flex items-center pt-20 bg-white">
      <div className="container mx-auto">
        <div className="flex flex-col items-center text-center">
          <div className="relative w-32 h-32 mb-6 rounded-full overflow-hidden shadow-lg animate-fade-in border-2 border-black">
            <img 
              src="/lovable-uploads/934937cb-710e-4f8e-aa1e-757407b8a2ab.png" 
              alt="Iqra Faisal" 
              className="w-full h-full object-cover"
            />
          </div>
          <h1 className="text-4xl md:text-6xl font-bold mb-4 animate-fade-in flex items-center justify-center text-black">
            Iqra <span className="text-black ml-2">Faisal</span>
          </h1>
          <h2 className="text-xl md:text-2xl text-black/80 mb-6 animate-fade-in">
            SaaS Developer · CRM Automation Specialist · Digital Marketing Pro
          </h2>
          <p className="max-w-2xl text-black/70 mb-8 animate-fade-in">
            Building smart systems, automating success, and scaling businesses with code & creativity.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 animate-fade-in">
            <Button 
              size="lg" 
              className="bg-black hover:bg-black/80 text-white"
              asChild
            >
              <a href="#contact">Let&apos;s Work Together<ArrowDown className="ml-2 h-4 w-4" /></a>
            </Button>
            <Button 
              size="lg" 
              variant="outline" 
              className="border-black hover:bg-black/5"
              asChild
            >
              <a href="#projects">View My Work</a>
            </Button>
          </div>
        </div>
        <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 animate-bounce">
          <a href="#about" className="text-black/50 hover:text-black">
            <ArrowDown size={30} />
          </a>
        </div>
      </div>
    </section>
  );
};

export default HomeSection;
