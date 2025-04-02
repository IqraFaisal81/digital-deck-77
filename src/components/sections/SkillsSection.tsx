
import React, { useRef, useEffect } from "react";
import { useIsMobile } from "@/hooks/use-mobile";
import AuroraBackground from "../skills/AuroraBackground";
import SkillsSectionHeader from "../skills/SkillsSectionHeader";
import SkillsGrid from "../skills/SkillsGrid";
import SkillsCallToAction from "../skills/SkillsCallToAction";
import { skillCategories } from "@/data/skillCategories";

const SkillsSection = () => {
  const sectionRef = useRef<HTMLElement>(null);
  const isMobile = useIsMobile();

  // Enhanced animation on scroll
  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          const element = entry.target as HTMLElement;
          const delay = parseInt(element.dataset.delay || '0');
          
          setTimeout(() => {
            element.classList.add('opacity-100', 'translate-y-0');
            element.classList.remove('opacity-0', 'translate-y-8');
          }, delay);
        }
      });
    }, { threshold: 0.1, rootMargin: "0px 0px -100px 0px" });
    
    const elements = document.querySelectorAll('.animate-on-scroll');
    elements.forEach((el, index) => {
      (el as HTMLElement).dataset.delay = (index * 100).toString();
      observer.observe(el);
    });
    
    return () => elements.forEach(el => observer.unobserve(el));
  }, []);

  return (
    <section 
      id="skills" 
      ref={sectionRef} 
      className="py-20 md:py-28 px-4 md:px-8 relative overflow-hidden bg-white dark:bg-gray-900"
    >
      <AuroraBackground />
      
      <div className="container mx-auto relative z-10">
        <SkillsSectionHeader />
        <SkillsGrid skillCategories={skillCategories} />
        <SkillsCallToAction />
      </div>
    </section>
  );
};

export default SkillsSection;
