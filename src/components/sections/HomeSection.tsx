
import { Calendar, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Badge } from "@/components/ui/badge";
import { AuroraBackground } from "@/components/ui/aurora-background";
import { useState, useEffect } from "react";
import { useIsMobile } from "@/hooks/use-mobile";
import MobileHeroSection from "./MobileHeroSection";

const HomeSection = () => {
  const [displayText, setDisplayText] = useState("");
  const [isDeleting, setIsDeleting] = useState(false);
  const [loopNum, setLoopNum] = useState(0);
  const [typingSpeed, setTypingSpeed] = useState(150);
  const isMobile = useIsMobile();
  
  const texts = [
    "Hello, I'm Iqra Faisal",
    "I am a Product Developer",
    "I am a CRM Expert"
  ];
  
  useEffect(() => {
    // Start with an empty string when component mounts
    setDisplayText("");
    
    const timer = setTimeout(() => {
      handleType();
    }, 1000); // Initial delay before typing starts
    
    return () => clearTimeout(timer);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  
  useEffect(() => {
    let timer: NodeJS.Timeout;
    
    // Always keep typing until we reach the full text
    if (!isDeleting && displayText !== texts[loopNum % texts.length]) {
      timer = setTimeout(() => {
        handleType();
      }, typingSpeed);
    } 
    // If we need to delete, keep deleting until we reach a certain threshold
    else if (isDeleting && displayText.length > 3) {
      timer = setTimeout(() => {
        handleType();
      }, typingSpeed);
    }
    // If we've reached our deletion threshold (3 characters remaining)
    else if (isDeleting && displayText.length <= 3) {
      setIsDeleting(false);
      setLoopNum(loopNum + 1);
      // Small pause before typing the next text
      timer = setTimeout(() => {
        handleType();
      }, 500);
    }
    // If we've finished typing the full text
    else if (!isDeleting && displayText === texts[loopNum % texts.length]) {
      // Pause at end of text before starting to delete
      timer = setTimeout(() => {
        setIsDeleting(true);
        handleType();
      }, 1500);
    }
    
    return () => clearTimeout(timer);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [displayText, isDeleting, loopNum]);
  
  const handleType = () => {
    // Get current text based on loop number
    const currentIndex = loopNum % texts.length;
    const fullText = texts[currentIndex];
    
    // Set typing speed based on action (faster for deleting)
    setTypingSpeed(isDeleting ? 75 : 150);
    
    // Update display text
    if (isDeleting) {
      // Delete a few characters at a time (3 at most) instead of one
      const deleteChars = Math.min(3, displayText.length);
      setDisplayText(fullText.substring(0, displayText.length - deleteChars));
    } else {
      setDisplayText(fullText.substring(0, displayText.length + 1));
    }
  };
  
  return (
    <AuroraBackground 
      className="min-h-screen overflow-hidden dark:bg-gray-900"
      showRadialGradient={true}
    >
      <div className="container mx-auto relative z-10 flex flex-col justify-center items-center min-h-screen">
        {isMobile ? (
          <MobileHeroSection displayText={displayText} />
        ) : (
          <div className="flex flex-col md:flex-row w-full items-center justify-between gap-8 md:gap-12 lg:gap-16 px-4 sm:px-6 md:px-8 py-20">
            {/* Left content - Text and CTAs */}
            <div className="flex flex-col space-y-6 md:space-y-8 w-full md:w-1/2 text-center md:text-left order-2 md:order-1 mt-8 md:mt-0">
              <div className="flex flex-wrap items-center justify-center md:justify-start gap-3 mb-2 animate-fade-in-up">
                <Badge className="bg-gradient-to-r from-royal to-electric dark:from-blue-500 dark:to-blue-700 text-white border-none rounded-full px-3 py-1 md:px-4 md:py-1.5 shadow-md hover:shadow-lg transition-all duration-300">
                  <span className="animate-pulse mr-1.5">•</span>
                  <span className="text-xs md:text-sm">Available for Projects</span>
                </Badge>
                <div className="flex items-center gap-1.5">
                  <span className="h-1.5 w-1.5 rounded-full bg-green-500 animate-pulse"></span>
                  <span className="text-gray-600 dark:text-gray-400 text-xs md:text-sm">Online Now</span>
                </div>
              </div>
              
              <div className="space-y-2 md:space-y-3">
                <p className="text-blue-600 dark:text-blue-400 font-medium tracking-wider animate-fade-in-up animate-delay-100 uppercase text-xs md:text-sm bg-gradient-to-r from-royal to-electric bg-clip-text text-transparent dark:from-blue-400 dark:to-blue-500">
                  SaaS Developer & Automation Specialist
                </p>
                <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold tracking-tight animate-fade-in-up animate-delay-200 drop-shadow-sm min-h-[4rem] flex items-center justify-center md:justify-start">
                  <span className="typewriter bg-clip-text text-transparent bg-gradient-to-r from-royal to-electric dark:from-blue-400 dark:to-blue-500">
                    {displayText}
                  </span>
                </h1>
                
                <div className="w-16 md:w-20 h-1 md:h-1.5 bg-gradient-to-r from-royal to-electric dark:from-blue-400 dark:to-blue-500 rounded-full mb-3 md:mb-6 mx-auto md:mx-0"></div>
              </div>
              
              <p className="text-base md:text-lg text-gray-700 dark:text-gray-300 leading-relaxed max-w-lg mx-auto md:mx-0 animate-fade-in-up animate-delay-300 backdrop-blur-sm bg-white/5 dark:bg-black/5 p-3 md:p-4 rounded-lg border border-blue-100/50 dark:border-blue-900/50">
                I build intelligent systems that automate processes, optimize workflows, and scale businesses through code and strategic thinking.
              </p>
              
              <div className="flex flex-wrap gap-3 md:gap-4 pt-3 md:pt-4 animate-fade-in-up animate-delay-400 justify-center md:justify-start">
                <Button 
                  className="group bg-gradient-to-r from-royal to-electric hover:from-blue-700 hover:to-indigo-600 dark:from-blue-500 dark:to-blue-700 text-white rounded-full px-4 md:px-6 py-2 md:py-6 text-sm md:text-base shadow-lg hover:shadow-xl transition-all duration-300 border border-blue-400/20"
                  size="default"
                  asChild
                >
                  <a href="#services" className="flex items-center">
                    View My Work
                    <ArrowRight className="ml-2 h-3 w-3 md:h-4 md:w-4 transition-transform duration-300 group-hover:translate-x-1" />
                  </a>
                </Button>
          
                <Button 
                  size="default" 
                  variant="outline" 
                  className="border-2 border-blue-200 dark:border-blue-800 text-blue-600 dark:text-blue-400 hover:bg-blue-50 dark:hover:bg-blue-900/30 rounded-full px-4 md:px-6 py-2 md:py-6 text-sm md:text-base backdrop-blur-sm shadow-md hover:shadow-lg"
                  asChild
                >
                  <a href="#booking" className="flex items-center">
                    <Calendar className="mr-2 h-4 w-4 md:h-5 md:w-5" />
                    Book a Consultation
                  </a>
                </Button>
              </div>
              
              <div className="flex flex-wrap gap-2 md:gap-4 pt-4 md:pt-6 animate-fade-in-up animate-delay-500 justify-center md:justify-start">
                <div className="flex items-center gap-2 md:gap-3 px-3 md:px-4 py-2 md:py-3 bg-gradient-to-r from-white/80 to-blue-50/80 dark:from-gray-800/80 dark:to-blue-900/30 backdrop-blur-sm rounded-xl border border-blue-100 dark:border-blue-900 shadow-md hover:shadow-lg transition-all duration-300 hover:-translate-y-1">
                  <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
                  <span className="text-gray-700 dark:text-gray-300 text-xs md:text-sm">Expert in CRM Solutions</span>
                </div>
                
                <div className="flex items-center gap-2 md:gap-3 px-3 md:px-4 py-2 md:py-3 bg-gradient-to-r from-white/80 to-blue-50/80 dark:from-gray-800/80 dark:to-blue-900/30 backdrop-blur-sm rounded-xl border border-blue-100 dark:border-blue-900 shadow-md hover:shadow-lg transition-all duration-300 hover:-translate-y-1">
                  <div className="w-2 h-2 bg-blue-500 rounded-full"></div>
                  <span className="text-gray-700 dark:text-gray-300 text-xs md:text-sm">UK-Based</span>
                </div>
              </div>
            </div>
            
            {/* Right content - Profile image and badges */}
            <div className="flex justify-center items-center mb-0 md:mb-0 animate-fade-in-up z-0 order-1 md:order-2 w-full md:w-1/2 max-w-[280px] md:max-w-none mx-auto">
              <div className="relative w-full max-w-[240px] sm:max-w-[260px] md:max-w-md">
                <div className="absolute inset-0 bg-gradient-to-r from-blue-400/40 to-purple-400/40 rounded-full blur-3xl opacity-70 animate-pulse -z-10"></div>
                
                <div className="w-44 h-44 sm:w-48 sm:h-48 md:w-56 md:h-56 lg:w-64 lg:h-64 bg-gradient-to-b from-white to-blue-50 dark:from-gray-800 dark:to-blue-950 rounded-full flex items-center justify-center border-4 border-white/50 dark:border-blue-700/50 shadow-2xl relative z-10 animate-float mx-auto">
                  <Avatar className="w-36 h-36 sm:w-40 sm:h-40 md:w-48 md:h-48 lg:w-56 lg:h-56 rounded-full border-8 border-white dark:border-gray-800 shadow-xl">
                    <AvatarImage
                      src="/lovable-uploads/934937cb-710e-4f8e-aa1e-757407b8a2ab.png"
                      alt="Iqra Faisal"
                      className="object-cover"
                    />
                    <AvatarFallback>IF</AvatarFallback>
                  </Avatar>
                </div>
                
                <div className="absolute -bottom-2 -right-2 md:-bottom-4 md:-right-4 bg-gradient-to-r from-royal to-electric dark:from-blue-500 dark:to-blue-700 px-3 py-2 md:px-5 md:py-3 rounded-full shadow-xl border-2 border-white/80 dark:border-gray-800/80 flex items-center gap-2 z-20 animate-float animate-delay-200 hover:scale-105 transition-transform">
                  <span className="text-white text-xs md:text-sm lg:text-base font-medium">CRM Expert</span>
                </div>
                
                <div className="absolute -top-2 -left-2 md:-top-4 md:-left-4 bg-gradient-to-r from-royal to-electric dark:from-blue-500 dark:to-blue-700 px-3 py-2 md:px-5 md:py-3 rounded-full shadow-xl border-2 border-white/80 dark:border-gray-800/80 flex items-center gap-2 z-20 animate-float animate-delay-300 hover:scale-105 transition-transform">
                  <span className="text-white text-xs md:text-sm lg:text-base font-medium">Marketing Pro</span>
                </div>
                
                <div className="absolute top-1/2 -left-4 sm:-left-6 transform -translate-y-1/2 bg-gradient-to-r from-royal to-electric dark:from-blue-500 dark:to-blue-700 p-2 md:p-3 rounded-full shadow-xl border-2 border-white/80 dark:border-gray-800/80 z-20 animate-float animate-delay-400 hover:scale-105 transition-transform">
                  <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="md:w-5 md:h-5"><path d="M10 13a5 5 0 0 0 7.54.54l3-3a5 5 0 0 0-7.07-7.07l-1.72 1.71"></path><path d="M14 11a5 5 0 0 0-7.54-.54l-3 3a5 5 0 0 0 7.07 7.07l1.71-1.71"></path></svg>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </AuroraBackground>
  );
};

export default HomeSection;
