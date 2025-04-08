
import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { useTheme } from '../context/ThemeContext';
import { Sheet, SheetContent, SheetTrigger } from './ui/sheet';
import { Button } from './ui/button';
import { ThemeToggle } from './ThemeToggle';
import { Menu, Moon, Sun } from 'lucide-react';
import { useMobile } from '../hooks/use-mobile';

interface NavigationLink {
  href: string;
  label: string;
  external?: boolean;
}

const navigationLinks: NavigationLink[] = [
  { href: "#home", label: "Home" },
  { href: "#about", label: "About" },
  { href: "#skills", label: "Skills" },
  { href: "#services", label: "Services" },
  { href: "#projects", label: "Work" },
  { href: "#testimonials", label: "Testimonials" },
  { href: "#contact", label: "Contact" },
];

export const Navbar: React.FC = () => {
  const { isDarkMode, toggleTheme } = useTheme();
  const isMobile = useMobile();
  
  const [scrolled, setScrolled] = useState(false);
  
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };
    
    window.addEventListener('scroll', handleScroll);
    
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);
  
  return (
    <nav 
      className={`sticky top-0 z-50 w-full transition-all duration-300 ${
        scrolled 
          ? 'bg-white/90 dark:bg-gray-900/90 backdrop-blur-sm shadow-sm' 
          : 'bg-white dark:bg-gray-900'
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
          )}
          
          {/* Logo */}
          <div className="flex-shrink-0 z-20">
            <Link to="/" className="text-xl md:text-xl font-bold text-gray-900 dark:text-white flex items-center">
              <span className="bg-clip-text text-transparent bg-gradient-to-r from-purple-600 to-blue-500">Iqra Faisal</span>
            </Link>
          </div>
          
          {/* Desktop Navigation */}
          {!isMobile && (
            <div className="hidden md:block">
              <div className="flex space-x-4">
                {navigationLinks.map((link) => (
                  <a
                    key={link.href}
                    href={link.href}
                    className="text-sm font-medium text-gray-700 hover:text-blue-600 dark:text-gray-300 dark:hover:text-blue-400 transition-colors px-2 py-1"
                  >
                    {link.label}
                  </a>
                ))}
              </div>
            </div>
          )}

          {/* Theme Toggle */}
          <Button variant="ghost" size="icon" onClick={toggleTheme} aria-label="Toggle theme" className="relative z-20">
            {isDarkMode ? (
              <Sun className="h-5 w-5 text-yellow-400" />
            ) : (
              <Moon className="h-5 w-5 text-gray-700" />
            )}
          </Button>
          
          {/* Call to action button */}
          <a 
            href="https://calendly.com/iqrafaisal81/discovery-call?month=2025-04" 
            target="_blank" 
            rel="noopener noreferrer" 
            className="hidden md:inline-flex ml-4"
          >
            <Button variant="default" className="bg-purple-600 hover:bg-purple-700 text-white">
              Book a Consultation
            </Button>
          </a>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
