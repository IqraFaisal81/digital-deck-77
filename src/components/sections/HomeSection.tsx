import { ArrowDown, Calendar, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Badge } from "@/components/ui/badge";
import { AuroraBackground } from "@/components/ui/aurora-background";
import { useState, useEffect } from "react";

const HomeSection = () => {
  const [displayText, setDisplayText] = useState("");
  const [isDeleting, setIsDeleting] = useState(false);
  const [loopNum, setLoopNum] = useState(0);
  const [typingSpeed, setTypingSpeed] = useState(150);
  
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
    // If we need to delete, keep deleting until empty
    else if (isDeleting && displayText !== '') {
      timer = setTimeout(() => {
        handleType();
      }, typingSpeed);
    }
    // If we've finished deleting
    else if (isDeleting && displayText === '') {
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
      setDisplayText(fullText.substring(0, displayText.length - 1));
    } else {
      setDisplayText(fullText.substring(0, displayText.length + 1));
    }
  };
  
  return (
    <AuroraBackground 
      className="min-h-screen overflow-hidden dark:bg-gray-900"
      showRadialGradient={true}
    >
      <div className="container mx-auto px-4 relative z-10 flex items-center min-h-screen py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          
          <div className="flex flex-col space-y-6 md:order-1 order-2">
            <div className="flex items-center space-x-3 mb-2 animate-fade-in-up">
              <Badge className="bg-gradient-to-r from-blue-600 to-indigo-500 hover:from-blue-700 hover:to-indigo-600 text-white dark:from-blue-500 dark:to-purple-500 border-none rounded-full px-4 py-1.5 shadow-md">
                <span className="animate-pulse mr-1.5">•</span>
                Available for Projects
              </Badge>
              <span className="h-1.5 w-1.5 rounded-full bg-green-500 animate-pulse"></span>
              <span className="text-gray-600 dark:text-gray-400 text-sm">Online Now</span>
            </div>
            
            <div className="space-y-3">
              <p className="text-blue-600 dark:text-blue-400 font-medium tracking-wider animate-fade-in-up animate-delay-100 uppercase text-sm">
                SaaS Developer & Automation Specialist
              </p>
              <h1 className="text-4xl md:text-6xl font-bold tracking-tight text-gradient bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-indigo-500 dark:from-blue-400 dark:to-indigo-400 animate-fade-in-up animate-delay-200 drop-shadow-sm min-h-[80px] md:min-h-[96px] flex items-center">
                <span className="typewriter">
                  {displayText}
                  <span className="cursor-blink"></span>
                </span>
              </h1>
              <div className="w-20 h-1.5 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full mb-6"></div>
            </div>
            
            <p className="text-lg text-gray-700 dark:text-gray-300 leading-relaxed max-w-lg animate-fade-in-up animate-delay-300 backdrop-blur-sm bg-white/5 dark:bg-black/5 p-4 rounded-lg border border-blue-100/50 dark:border-blue-900/50">
              I build intelligent systems that automate processes, optimize workflows, and scale businesses through code and strategic thinking.
            </p>
            
            <div className="flex flex-wrap gap-4 pt-4 animate-fade-in-up animate-delay-400">
              <Button 
                className="group bg-gradient-to-r from-blue-600 to-indigo-500 hover:from-blue-700 hover:to-indigo-600 text-white rounded-full px-6 py-6 shadow-lg hover:shadow-xl transition-all duration-300 border border-blue-400/20"
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
                className="border-2 border-blue-200 dark:border-blue-800 text-blue-600 dark:text-blue-400 hover:bg-blue-50 dark:hover:bg-blue-900/30 rounded-full px-6 py-6 backdrop-blur-sm shadow-md hover:shadow-lg"
              >
                <a href="#booking" className="flex items-center">
                  <Calendar className="mr-2 h-5 w-5" />
                  Book a Consultation
                </a>
              </Button>
            </div>
            
            <div className="flex flex-wrap gap-4 pt-6 animate-fade-in-up animate-delay-500">
              <div className="flex items-center gap-3 px-4 py-3 bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm rounded-xl border border-blue-100 dark:border-blue-900 shadow-md hover:shadow-lg transition-all duration-300 hover:-translate-y-1">
                <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
                <span className="text-gray-700 dark:text-gray-300 text-sm">Expert in CRM Solutions</span>
              </div>
              
              <div className="flex items-center gap-3 px-4 py-3 bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm rounded-xl border border-blue-100 dark:border-blue-900 shadow-md hover:shadow-lg transition-all duration-300 hover:-translate-y-1">
                <div className="w-2 h-2 bg-blue-500 rounded-full"></div>
                <span className="text-gray-700 dark:text-gray-300 text-sm">UK-Based</span>
              </div>
            </div>
          </div>
          
          <div className="flex justify-center items-center md:order-2 order-1 animate-fade-in-up">
            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-r from-blue-400/40 to-purple-400/40 rounded-full blur-3xl opacity-70 animate-pulse"></div>
              
              <div className="w-64 h-64 md:w-80 md:h-80 bg-gradient-to-b from-white to-blue-50 dark:from-gray-800 dark:to-blue-950 rounded-full flex items-center justify-center border-4 border-white/50 dark:border-blue-700/50 shadow-2xl relative z-10 animate-float">
                <Avatar className="w-56 h-56 md:w-72 md:h-72 rounded-full border-8 border-white dark:border-gray-800 shadow-xl">
                  <AvatarImage
                    src="/lovable-uploads/934937cb-710e-4f8e-aa1e-757407b8a2ab.png"
                    alt="Iqra Faisal"
                    className="object-cover"
                  />
                  <AvatarFallback>IF</AvatarFallback>
                </Avatar>
              </div>
              
              <div className="absolute -bottom-4 -right-4 bg-gradient-to-r from-blue-600 to-blue-500 px-5 py-3 rounded-full shadow-xl border-2 border-white/80 dark:border-gray-800/80 flex items-center gap-2 z-20 animate-float animate-delay-200 hover:scale-105 transition-transform">
                <span className="text-white font-medium">CRM Expert</span>
              </div>
              
              <div className="absolute -top-4 -left-4 bg-gradient-to-r from-purple-600 to-blue-500 px-5 py-3 rounded-full shadow-xl border-2 border-white/80 dark:border-gray-800/80 flex items-center gap-2 z-20 animate-float animate-delay-300 hover:scale-105 transition-transform">
                <span className="text-white font-medium">Marketing Pro</span>
              </div>
              
              <div className="absolute top-1/2 -left-12 transform -translate-y-1/2 bg-gradient-to-r from-indigo-500 to-blue-500 p-3 rounded-full shadow-xl border-2 border-white/80 dark:border-gray-800/80 z-20 animate-float animate-delay-400 hover:scale-105 transition-transform">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M10 13a5 5 0 0 0 7.54.54l3-3a5 5 0 0 0-7.07-7.07l-1.72 1.71"></path><path d="M14 11a5 5 0 0 0-7.54-.54l-3 3a5 5 0 0 0 7.07 7.07l1.71-1.71"></path></svg>
              </div>
            </div>
          </div>
        </div>
      </div>
      
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce z-20">
        <a href="#about" className="text-gray-500 dark:text-gray-400 hover:text-blue-600 dark:hover:text-blue-400 transition-colors bg-white/80 dark:bg-gray-800/80 p-3 rounded-full backdrop-blur-sm shadow-md border border-gray-100/50 dark:border-gray-700/50 hover:shadow-lg">
          <ArrowDown size={24} />
        </a>
      </div>
    </AuroraBackground>
  );
};

export default HomeSection;
