
import React, { useState, useEffect } from "react";
import { Menu, X, Briefcase, User, Wrench, Phone, Users, Calendar } from "lucide-react";
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
    { label: "Clients", icon: <Users className="mr-2 h-4 w-4" />, href: "#clients" },
    { label: "Services", icon: <Wrench className="mr-2 h-4 w-4" />, href: "#services" },
    { label: "Projects", icon: <Briefcase className="mr-2 h-4 w-4" />, href: "#project-highlights" },
    { label: "Contact Me", icon: <Phone className="mr-2 h-4 w-4" />, href: "#booking" },
  ];

  return (
    <nav
      className={`fixed top-0 w-full z-50 transition-all duration-300 ${
        scrolled ? "py-3 bg-black/80 backdrop-blur-lg shadow-lg" : "py-5 bg-transparent"
      }`}
    >
      <div className="container mx-auto px-4 flex justify-between items-center">
        <a href="#home" className="text-white font-bold text-xl">
          Iqra Faisal
        </a>

        {/* Desktop Menu */}
        {!isMobile && (
          <div className="hidden md:flex space-x-1">
            {menuItems.map((item, index) => (
              <a
                key={index}
                href={item.href}
                className="px-4 py-2 text-white/80 hover:text-white rounded-lg hover:bg-white/10 transition-colors duration-300 flex items-center"
              >
                {item.icon}
                {item.label}
              </a>
            ))}
            <Button
              className="ml-2 bg-electric hover:bg-electric/80"
              asChild
              size="sm"
            >
              <a href="#booking">Book Consultation</a>
            </Button>
          </div>
        )}

        {/* Mobile Menu Button */}
        {isMobile && (
          <button onClick={toggleMenu} className="text-white">
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        )}
      </div>

      {/* Mobile Menu Dropdown */}
      {isMobile && (
        <div
          className={`fixed inset-0 bg-black/95 backdrop-blur-xl z-40 transition-transform duration-300 ease-in-out ${
            isOpen ? "translate-x-0" : "translate-x-full"
          } pt-20`}
        >
          <div className="container mx-auto px-4 flex flex-col space-y-4">
            {menuItems.map((item, index) => (
              <a
                key={index}
                href={item.href}
                onClick={toggleMenu}
                className="px-4 py-4 text-white/80 hover:text-white hover:bg-white/10 rounded-lg transition-colors duration-300 flex items-center"
              >
                {item.icon}
                {item.label}
              </a>
            ))}
            <Button
              className="mt-4 bg-electric hover:bg-electric/80"
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
