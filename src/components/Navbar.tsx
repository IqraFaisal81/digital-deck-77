
import React, { useState, useEffect } from 'react';
import { Menu, X, Moon, Sun } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { useTheme } from '@/context/ThemeContext';
import { Link } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { useIsMobile } from '@/hooks/use-mobile';
import { Sheet, SheetContent, SheetTrigger } from '@/components/ui/sheet';

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const { theme, toggleTheme } = useTheme();
  const isMobile = useIsMobile();
  
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

  const navigationLinks = [
    { href: "#about", label: "About" },
    { href: "#skills", label: "Skills" },
    { href: "#services", label: "Services" },
    { href: "#projects", label: "Projects" },
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
          {/* Hamburger menu button in the left corner */}
          <Sheet>
            <SheetTrigger asChild>
              <Button 
                variant="ghost" 
                size="icon" 
                className="relative z-20"
                aria-label="Navigation Menu"
              >
                <Menu className="h-6 w-6" />
              </Button>
            </SheetTrigger>
            <SheetContent side="left" className="w-[250px] sm:w-[300px] pt-16">
              <div className="flex flex-col space-y-6 py-4">
                {navigationLinks.map((link) => (
                  <a 
                    key={link.href}
                    href={link.href} 
                    className="text-base font-medium text-gray-700 hover:text-blue-600 dark:text-gray-300 dark:hover:text-blue-400 transition-colors p-2"
                  >
                    {link.label}
                  </a>
                ))}
              </div>
            </SheetContent>
          </Sheet>

          {/* Logo */}
          <div className="flex-shrink-0 z-20 mx-auto">
            <Link to="/" className="text-xl md:text-xl font-bold text-gray-900 dark:text-white flex items-center">
              {isMobile ? (
                <span className="text-lg font-bold bg-gradient-to-r from-royal to-electric dark:from-blue-400 dark:to-blue-600 bg-clip-text text-transparent">IF</span>
              ) : (
                <span className="bg-gradient-to-r from-royal to-electric dark:from-blue-400 dark:to-blue-600 bg-clip-text text-transparent">Iqra Faisal</span>
              )}
            </Link>
          </div>

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
