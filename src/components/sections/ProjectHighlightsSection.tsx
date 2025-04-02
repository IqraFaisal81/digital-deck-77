
import { useState } from "react";
import { caseStudies } from "@/data/caseStudies";
import { CaseStudy } from "@/types/caseStudy";
import { 
  Carousel, 
  CarouselContent, 
  CarouselItem,
  CarouselPrevious,
  CarouselNext
} from "@/components/ui/carousel";
import { useCarouselState } from "@/hooks/useCarouselState";
import CaseStudyModal from "@/components/project-highlights/CaseStudyModal";
import CaseStudyCarouselItem from "@/components/project-highlights/CaseStudyCarouselItem";
import SectionHeader from "@/components/skills/SectionHeader";

const ProjectHighlightsSection = () => {
  const [selectedCaseStudy, setSelectedCaseStudy] = useState<CaseStudy | null>(null);
  const [modalOpen, setModalOpen] = useState(false);
  const { carouselApi, setCarouselApi } = useCarouselState();
  
  const openCaseStudyModal = (caseStudy: CaseStudy) => {
    setSelectedCaseStudy(caseStudy);
    setModalOpen(true);
  };

  return (
    <section id="case-studies" className="section-padding relative bg-white dark:bg-gray-900">
      {/* Background decorative elements */}
      <div className="absolute top-20 right-10 w-64 h-64 bg-blue-50 dark:bg-blue-900/20 rounded-full blur-3xl opacity-30"></div>
      <div className="absolute bottom-20 left-10 w-80 h-80 bg-blue-50 dark:bg-blue-900/20 rounded-full blur-3xl opacity-30"></div>
      
      <div className="container mx-auto relative z-10">
        <SectionHeader 
          title="Real Results for Real Clients"
          description="See how our strategic approach and technical expertise delivered measurable outcomes for businesses looking to improve their customer engagement and revenue."
          alignment="center"
        />
        
        {/* Case Study Carousel */}
        <div className="max-w-6xl mx-auto">
          <Carousel
            opts={{
              align: "start",
              loop: true,
            }}
            className="w-full"
            setApi={setCarouselApi}
          >
            <CarouselContent>
              {caseStudies.map((caseStudy, index) => (
                <CarouselItem key={index} className="basis-full md:basis-1/2 lg:basis-1/3 px-4">
                  <CaseStudyCarouselItem 
                    caseStudy={caseStudy} 
                    onClick={() => openCaseStudyModal(caseStudy)} 
                  />
                </CarouselItem>
              ))}
            </CarouselContent>
            <div className="flex justify-center items-center gap-4 mt-6">
              <CarouselPrevious className="static transform-none bg-black/50 hover:bg-black/80 dark:bg-white/20 dark:hover:bg-white/30 border-none" />
              <CarouselNext className="static transform-none bg-black/50 hover:bg-black/80 dark:bg-white/20 dark:hover:bg-white/30 border-none" />
            </div>
          </Carousel>
        </div>
        
        {/* Case Study Modal */}
        <CaseStudyModal 
          isOpen={modalOpen} 
          onClose={() => setModalOpen(false)} 
          caseStudy={selectedCaseStudy} 
        />
      </div>
    </section>
  );
};

export default ProjectHighlightsSection;
