
import React, { useState, useEffect } from 'react';
import { Menu, X, Moon, Sun } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { useTheme } from '@/context/ThemeContext';
import { Link, useLocation } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { useIsMobile } from '@/hooks/use-mobile';
import { Sheet, SheetContent, SheetTrigger } from '@/components/ui/sheet';
import { 
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  navigationMenuTriggerStyle,
} from "@/components/ui/navigation-menu";
import { ScrollToServiceUtils } from '@/utils/ScrollToServiceUtils';

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const { theme, toggleTheme } = useTheme();
  const isMobile = useIsMobile();
  const location = useLocation();
  
  // Check if the theme is dark mode
  const isDarkMode = theme === "dark";

  useEffect(() => {
    const handleScroll = () => {
      const offset = window.scrollY;
      if (offset > 50) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const scrollToSection = (sectionId: string) => {
    if (location.pathname === '/') {
      // If we're on the home page, just scroll
      const element = document.getElementById(sectionId);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
    } else {
      // If we're on another page, store the section and navigate to home
      ScrollToServiceUtils.navigateToHomeWithSection(sectionId);
    }
  };

  const handleLogoClick = () => {
    if (location.pathname !== '/') {
      // Store the current section context if coming from a service page
      const currentPath = location.pathname;
      if (currentPath.includes('/services/')) {
        // Map service paths to their corresponding sections
        const serviceToSection: { [key: string]: string } = {
          '/services/workflows': 'workflows',
          '/services/funnels': 'funnels',
          '/services/email-marketing': 'email-marketing',
          '/services/seo-audits': 'seo-audits',
          '/services/ai-chatbot': 'ai-chatbot',
          '/services/webflow': 'services',
          '/services/shopify': 'services',
          '/services/tracking-attribution': 'services',
          '/services/zapier': 'services'
        };
        
        const sectionId = serviceToSection[currentPath];
        if (sectionId) {
          ScrollToServiceUtils.storeCurrentSection(sectionId);
        }
      }
    }
  };

  const navigationLinks = [
    { href: "#about", label: "About" },
    { href: "#skills", label: "Skills" },
    { href: "#services", label: "Services" },
    { href: "#portfolio-preview", label: "Portfolio" },
    { href: "#contact", label: "Contact" },
  ];

  return (
    <nav
      className={`fixed top-0 w-full transition-all duration-300 z-50 ${
        scrolled
          ? "bg-white/90 dark:bg-gray-900/90 backdrop-blur-md shadow-md"
          : "bg-transparent"
      }`}
    >
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex items-center justify-between h-16">
          {/* Mobile Hamburger menu button - Moved to leftmost position */}
          {isMobile && (
            <Sheet>
              <SheetTrigger asChild>
                <Button 
                  variant="ghost" 
                  size="icon" 
                  className="relative z-20 order-first"
                  aria-label="Navigation Menu"
                >
                  <Menu className="h-6 w-6" />
                </Button>
              </SheetTrigger>
              <SheetContent side="left" className="w-[250px] sm:w-[300px] pt-16">
                <div className="flex flex-col space-y-6 py-4">
                  {navigationLinks.map((link) => (
                    <button
                      key={link.href}
                      onClick={() => scrollToSection(link.href.substring(1))}
                      className="text-base font-medium text-gray-700 hover:text-blue-600 dark:text-gray-300 dark:hover:text-blue-400 transition-colors p-2 text-left"
                    >
                      {link.label}
                    </button>
                  ))}
                </div>
              </SheetContent>
            </Sheet>
          )}
          
          {/* Logo */}
          <div className="flex-shrink-0 z-20">
            <Link to="/" onClick={handleLogoClick} className="text-xl md:text-xl font-bold text-gray-900 dark:text-white flex items-center">
              {isMobile ? (
                <span className="text-lg font-bold bg-gradient-to-r from-royal to-electric dark:from-blue-400 dark:to-blue-600 bg-clip-text text-transparent">IF</span>
              ) : (
                <span className="bg-gradient-to-r from-royal to-electric dark:from-blue-400 dark:to-blue-600 bg-clip-text text-transparent">Iqra Faisal</span>
              )}
            </Link>
          </div>

          {/* Desktop Navigation Menu */}
          {!isMobile && (
            <div className="hidden md:flex items-center justify-center flex-1">
              <NavigationMenu className="mx-auto">
                <NavigationMenuList className="flex space-x-4">
                  {navigationLinks.map((link) => (
                    <NavigationMenuItem key={link.href}>
                      <button
                        onClick={() => scrollToSection(link.href.substring(1))}
                        className="text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 px-3 py-2 rounded-md text-sm font-medium transition-colors"
                      >
                        {link.label}
                      </button>
                    </NavigationMenuItem>
                  ))}
                </NavigationMenuList>
              </NavigationMenu>
            </div>
          )}

          {/* Theme Toggle */}
          <Button variant="ghost" size="icon" onClick={toggleTheme} aria-label="Toggle theme" className="relative z-20">
            {isDarkMode ? (
              <Sun className="h-[1.2rem] w-[1.2rem] rotate-0 scale-100 transition-all" />
            ) : (
              <Moon className="h-[1.2rem] w-[1.2rem] rotate-0 scale-100 transition-all" />
            )}
          </Button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
