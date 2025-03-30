
import { useState } from "react";
import { caseStudies } from "@/data/caseStudies";
import CategoryFilter from "@/components/project-highlights/CategoryFilter";
import CaseStudyThumbnail from "@/components/project-highlights/CaseStudyThumbnail";
import CaseStudyDetails from "@/components/project-highlights/CaseStudyDetails";
import CallToAction from "@/components/project-highlights/CallToAction";
import { CaseStudy } from "@/types/caseStudy";

const ProjectHighlightsSection = () => {
  const [activeCategory, setActiveCategory] = useState<string>("all");
  const [activeCaseStudy, setActiveCaseStudy] = useState<CaseStudy>(caseStudies[0]);
  
  // Extract unique categories
  const categories = ["all", ...Array.from(new Set(caseStudies.map(study => study.category)))];
  
  // Filter case studies based on active category
  const filteredCaseStudies = activeCategory === "all" 
    ? caseStudies 
    : caseStudies.filter(study => study.category === activeCategory);

  return (
    <section id="case-studies" className="section-padding relative bg-gradient-to-b from-white to-gray-50">
      {/* Background decorative elements */}
      <div className="absolute top-20 right-10 w-64 h-64 bg-electric/5 rounded-full blur-3xl"></div>
      <div className="absolute bottom-20 left-10 w-80 h-80 bg-electric/5 rounded-full blur-3xl"></div>
      
      <div className="container mx-auto relative z-10">
        <div className="max-w-3xl mx-auto text-center mb-10">
          <div className="inline-block px-4 py-1 bg-electric/10 rounded-full text-electric text-sm font-medium mb-4">
            Client Success Stories
          </div>
          <h2 className="text-3xl md:text-5xl font-bold mb-6 text-black">
            Real Results for Real Clients
          </h2>
          <p className="text-black/80 text-lg mb-8">
            See how our strategic approach and technical expertise delivered measurable outcomes
            for businesses looking to improve their customer engagement and revenue.
          </p>
          
          {/* Category filter tabs */}
          <div className="flex justify-center mb-2">
            <CategoryFilter 
              categories={categories} 
              activeCategory={activeCategory} 
              setActiveCategory={setActiveCategory} 
            />
          </div>
        </div>
        
        {/* Case study navigation thumbnails */}
        <div className="flex flex-wrap justify-center gap-4 mb-10">
          {filteredCaseStudies.map((study) => (
            <CaseStudyThumbnail 
              key={study.id}
              study={study}
              isActive={activeCaseStudy.id === study.id}
              onClick={() => setActiveCaseStudy(study)}
            />
          ))}
        </div>
        
        {/* Featured case study showcase */}
        {activeCaseStudy && (
          <CaseStudyDetails caseStudy={activeCaseStudy} />
        )}
        
        {/* Call-to-action */}
        <CallToAction />
      </div>
    </section>
  );
};

export default ProjectHighlightsSection;
