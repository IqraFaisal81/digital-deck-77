import { Calendar, ArrowRight, Sparkles, Zap } from "lucide-react";
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
    "I Build Digital Solutions", 
    "I Automate Business Growth"
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
      className="min-h-screen overflow-hidden relative"
      showRadialGradient={true}
    >
      {/* Floating Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-20 left-10 w-20 h-20 bg-blue-500/10 rounded-full blur-xl animate-pulse"></div>
        <div className="absolute top-40 right-20 w-32 h-32 bg-purple-500/10 rounded-full blur-2xl animate-pulse delay-1000"></div>
        <div className="absolute bottom-20 left-1/4 w-16 h-16 bg-pink-500/10 rounded-full blur-lg animate-pulse delay-2000"></div>
      </div>

      <div className="container mx-auto relative z-10 flex flex-col justify-center items-center min-h-screen">
        {isMobile ? (
          <MobileHeroSection displayText={displayText} />
        ) : (
          <div className="flex flex-col lg:flex-row w-full items-center justify-between gap-12 px-4 sm:px-6 md:px-8 py-20 max-w-7xl mx-auto">
            {/* Left Content */}
            <div className="flex flex-col space-y-8 w-full lg:w-1/2 text-center lg:text-left order-2 lg:order-1">
              {/* Status Bar */}
              <div className="flex flex-wrap items-center justify-center lg:justify-start gap-4 animate-fade-in-up">
                <Badge className="bg-gradient-to-r from-emerald-500 to-blue-600 text-white border-none rounded-full px-4 py-2 shadow-lg hover:shadow-xl transition-all duration-300">
                  <Sparkles className="w-4 h-4 mr-2" />
                  <span className="text-sm font-medium">Available for Projects</span>
                </Badge>
                <div className="flex items-center gap-2 bg-white/10 backdrop-blur-sm rounded-full px-3 py-1 border border-white/20 dark:bg-white/10 dark:border-white/20">
                  <div className="w-2 h-2 rounded-full bg-green-400 animate-pulse"></div>
                  <span className="text-gray-800 dark:text-white/90 text-sm">Online Now</span>
                </div>
              </div>
              
              {/* Main Content */}
              <div className="space-y-6">
                <div className="space-y-4">
                  <p className="text-blue-600 dark:text-blue-400 font-semibold tracking-widest uppercase text-sm animate-fade-in-up animate-delay-100">
                    Digital Solutions Architect
                  </p>
                  
                  <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold leading-tight animate-fade-in-up animate-delay-200">
                    <span className="bg-gradient-to-r from-gray-900 via-gray-800 to-blue-900 dark:from-white dark:via-blue-100 dark:to-purple-200 bg-clip-text text-transparent">
                      {displayText}
                    </span>
                  </h1>
                  
                  <div className="w-24 h-1 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full mx-auto lg:mx-0"></div>
                </div>
                
                <p className="text-lg text-gray-600 dark:text-gray-300 leading-relaxed max-w-xl mx-auto lg:mx-0 animate-fade-in-up animate-delay-300">
                  I transform businesses through intelligent automation, strategic CRM implementation, and cutting-edge digital solutions that drive measurable growth.
                </p>
              </div>
              
              {/* CTA Buttons */}
              <div className="flex flex-col sm:flex-row gap-4 animate-fade-in-up animate-delay-400 justify-center lg:justify-start">
                <Button 
                  className="group bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 hover:from-blue-700 hover:via-purple-700 hover:to-pink-700 text-white rounded-full px-8 py-6 text-lg font-semibold shadow-2xl hover:shadow-blue-500/25 transition-all duration-300 transform hover:scale-105"
                  size="lg"
                  asChild
                >
                  <a href="#services" className="flex items-center">
                    <Zap className="mr-2 h-5 w-5" />
                    Explore My Work
                    <ArrowRight className="ml-2 h-5 w-5 transition-transform duration-300 group-hover:translate-x-1" />
                  </a>
                </Button>
          
                <Button 
                  size="lg" 
                  variant="outline" 
                  className="border-2 border-gray-300 text-gray-800 hover:bg-gray-50 dark:border-white/30 dark:text-white dark:hover:bg-white/10 backdrop-blur-sm rounded-full px-8 py-6 text-lg font-semibold shadow-xl hover:shadow-2xl transition-all duration-300"
                  asChild
                >
                  <a href="https://calendly.com/iqrafaisal81/discovery-call?month=2025-04" target="_blank" rel="noopener noreferrer" className="flex items-center">
                    <Calendar className="mr-2 h-5 w-5" />
                    Book Consultation
                  </a>
                </Button>
              </div>
              
              {/* Stats */}
              <div className="grid grid-cols-2 lg:grid-cols-3 gap-4 pt-8 animate-fade-in-up animate-delay-500">
                <div className="bg-white/80 dark:bg-white/5 backdrop-blur-sm rounded-2xl p-4 border border-gray-200 dark:border-white/10 hover:bg-white/90 dark:hover:bg-white/10 transition-all duration-300">
                  <div className="text-2xl font-bold text-gray-900 dark:text-white">50+</div>
                  <div className="text-gray-600 dark:text-gray-400 text-sm">Projects Delivered</div>
                </div>
                <div className="bg-white/80 dark:bg-white/5 backdrop-blur-sm rounded-2xl p-4 border border-gray-200 dark:border-white/10 hover:bg-white/90 dark:hover:bg-white/10 transition-all duration-300">
                  <div className="text-2xl font-bold text-gray-900 dark:text-white">3+</div>
                  <div className="text-gray-600 dark:text-gray-400 text-sm">Years Experience</div>
                </div>
                <div className="bg-white/80 dark:bg-white/5 backdrop-blur-sm rounded-2xl p-4 border border-gray-200 dark:border-white/10 hover:bg-white/90 dark:hover:bg-white/10 transition-all duration-300 col-span-2 lg:col-span-1">
                  <div className="text-2xl font-bold text-gray-900 dark:text-white">UK</div>
                  <div className="text-gray-600 dark:text-gray-400 text-sm">Based</div>
                </div>
              </div>
            </div>
            
            {/* Right Content - Profile */}
            <div className="flex justify-center items-center w-full lg:w-1/2 order-1 lg:order-2 animate-fade-in-up">
              <div className="relative">
                {/* Glowing background */}
                <div className="absolute inset-0 bg-gradient-to-r from-blue-500/30 via-purple-500/30 to-pink-500/30 rounded-full blur-3xl animate-pulse"></div>
                
                {/* Profile container */}
                <div className="relative w-80 h-80 lg:w-96 lg:h-96 bg-gradient-to-br from-white/20 to-white/10 dark:from-white/10 dark:to-white/5 backdrop-blur-sm rounded-full border border-gray-200 dark:border-white/20 shadow-2xl flex items-center justify-center hover:scale-105 transition-transform duration-500">
                  <Avatar className="w-72 h-72 lg:w-88 lg:h-88 rounded-full border-4 border-gray-200 dark:border-white/30 shadow-2xl">
                    <AvatarImage
                      src="/lovable-uploads/934937cb-710e-4f8e-aa1e-757407b8a2ab.png"
                      alt="Iqra Faisal"
                      className="object-cover"
                    />
                    <AvatarFallback>IF</AvatarFallback>
                  </Avatar>
                </div>
                
                {/* Floating badges */}
                <div className="absolute -top-4 -right-4 bg-gradient-to-r from-blue-500 to-purple-600 px-4 py-2 rounded-full shadow-xl border-2 border-white/30 animate-float">
                  <span className="text-white text-sm font-semibold">CRM Expert</span>
                </div>
                
                <div className="absolute -bottom-4 -left-4 bg-gradient-to-r from-purple-500 to-pink-600 px-4 py-2 rounded-full shadow-xl border-2 border-white/30 animate-float animate-delay-300">
                  <span className="text-white text-sm font-semibold">Automation Pro</span>
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
