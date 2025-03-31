
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
    { label: "About", icon: <User className="mr-2 h-4 w-4" />, href: "#about" },
    { label: "Skills", icon: <Award className="mr-2 h-4 w-4" />, href: "#skills" },
    { label: "Clients", icon: <Users className="mr-2 h-4 w-4" />, href: "#testimonials" },
    { label: "Services", icon: <Wrench className="mr-2 h-4 w-4" />, href: "#services" },
    { label: "Case Studies", icon: <Briefcase className="mr-2 h-4 w-4" />, href: "#case-studies" },
    { label: "Contact Me", icon: <Phone className="mr-2 h-4 w-4" />, href: "#booking" },
  ];

  return (
    <nav
      className={`fixed top-0 w-full z-50 transition-all duration-300 ${
        scrolled ? "py-3 bg-white/90 backdrop-blur-lg shadow-md" : "py-5 bg-transparent"
      }`}
    >
      <div className="container mx-auto px-4 flex justify-between items-center">
        <a href="#home" className="text-gray-900 font-bold text-xl">
          Iqra Faisal
        </a>

        {/* Desktop Menu */}
        {!isMobile && (
          <div className="hidden md:flex space-x-1">
            {menuItems.map((item, index) => (
              <a
                key={index}
                href={item.href}
                className="px-4 py-2 text-gray-700 hover:text-blue-600 rounded-lg hover:bg-blue-50 transition-colors duration-300 flex items-center"
              >
                {item.icon}
                {item.label}
              </a>
            ))}
            <Button
              className="ml-2 bg-blue-600 hover:bg-blue-700"
              asChild
              size="sm"
            >
              <a href="#booking">Book Consultation</a>
            </Button>
          </div>
        )}

        {/* Mobile Menu Button */}
        {isMobile && (
          <button onClick={toggleMenu} className="text-gray-900">
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        )}
      </div>

      {/* Mobile Menu Dropdown */}
      {isMobile && (
        <div
          className={`fixed inset-0 bg-white/98 backdrop-blur-xl z-40 transition-transform duration-300 ease-in-out ${
            isOpen ? "translate-x-0" : "translate-x-full"
          } pt-20`}
        >
          <div className="container mx-auto px-4 flex flex-col space-y-4">
            {menuItems.map((item, index) => (
              <a
                key={index}
                href={item.href}
                onClick={toggleMenu}
                className="px-4 py-4 text-gray-700 hover:text-blue-600 hover:bg-blue-50 rounded-lg transition-colors duration-300 flex items-center"
              >
                {item.icon}
                {item.label}
              </a>
            ))}
            <Button
              className="mt-4 bg-blue-600 hover:bg-blue-700"
              asChild
              onClick={toggleMenu}
            >
              <a href="#booking">Book Consultation</a>
            </Button>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
