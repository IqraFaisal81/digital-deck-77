
import React, { useState, useEffect } from "react";
import { Menu, X, Briefcase, User, Wrench, Phone, Users, Calendar, Award, MessageSquare } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useIsMobile } from "@/hooks/use-mobile";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const isMobile = useIsMobile();

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const menuItems = [
    { label: "About", icon: <User className="h-4 w-4" />, href: "#about" },
    { label: "Skills", icon: <Award className="h-4 w-4" />, href: "#skills" },
    { label: "Clients", icon: <Users className="h-4 w-4" />, href: "#testimonials" },
    { label: "Services", icon: <Wrench className="h-4 w-4" />, href: "#services" },
    { label: "Case Studies", icon: <Briefcase className="h-4 w-4" />, href: "#case-studies" },
    { label: "Contact", icon: <Phone className="h-4 w-4" />, href: "#booking" },
  ];

  return (
    <nav
      className={`fixed top-0 w-full z-50 transition-all duration-300 ${
        scrolled 
          ? "py-3 bg-white/90 backdrop-blur-md shadow-sm" 
          : "py-5 bg-transparent"
      }`}
    >
      <div className="container mx-auto px-4 flex justify-between items-center">
        <a href="#home" className="text-gray-900 font-bold font-display text-xl relative z-10 group">
          <span className="relative">
            Iqra Faisal
            <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-blue-500 transition-all duration-300 group-hover:w-full"></span>
          </span>
        </a>

        {/* Desktop Menu */}
        {!isMobile && (
          <div className="hidden md:flex space-x-1">
            {menuItems.map((item, index) => (
              <a
                key={index}
                href={item.href}
                className="px-4 py-2 text-gray-700 hover:text-blue-600 rounded-lg hover:bg-blue-50/50 transition-colors duration-300 flex items-center"
              >
                {item.icon}
                <span className="ml-2">{item.label}</span>
              </a>
            ))}
            <Button
              className="ml-3 bg-blue-600 hover:bg-blue-700 shadow-sm hover:shadow-md transition-all"
              size="sm"
              asChild
            >
              <a href="#booking" className="flex items-center">
                <Calendar className="mr-2 h-4 w-4" />
                <span>Book a Call</span>
              </a>
            </Button>
          </div>
        )}

        {/* Mobile Menu Button */}
        {isMobile && (
          <button 
            onClick={toggleMenu} 
            className="text-gray-900 bg-white/80 backdrop-blur-sm p-2 rounded-lg shadow-sm hover:bg-white transition-all"
            aria-label="Toggle menu"
          >
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        )}
      </div>

      {/* Mobile Menu Dropdown */}
      {isMobile && (
        <div
          className={`fixed inset-0 bg-white/95 backdrop-blur-xl z-40 transition-transform duration-300 ease-in-out ${
            isOpen ? "translate-x-0" : "translate-x-full"
          } pt-24`}
        >
          <div className="container mx-auto px-6 flex flex-col space-y-2">
            {menuItems.map((item, index) => (
              <a
                key={index}
                href={item.href}
                onClick={toggleMenu}
                className="py-4 px-5 text-gray-800 hover:text-blue-600 hover:bg-blue-50/50 rounded-xl transition-colors duration-300 flex items-center"
              >
                <div className="bg-blue-100/80 p-2 rounded-lg mr-4">
                  {item.icon}
                </div>
                <span className="font-medium">{item.label}</span>
              </a>
            ))}
            <div className="pt-4">
              <Button
                className="w-full mt-4 bg-blue-600 hover:bg-blue-700 py-6 rounded-xl shadow-sm"
                onClick={toggleMenu}
                asChild
              >
                <a href="#booking" className="flex items-center justify-center">
                  <Calendar className="mr-2 h-5 w-5" />
                  <span className="font-medium">Book a Consultation</span>
                </a>
              </Button>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
