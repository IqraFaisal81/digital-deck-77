
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
import { Image } from "lucide-react";

const ProjectHighlightsSection = () => {
  const [selectedCaseStudy, setSelectedCaseStudy] = useState<CaseStudy | null>(null);
  const [modalOpen, setModalOpen] = useState(false);
  const { carouselApi, setCarouselApi } = useCarouselState();
  
  const openCaseStudyModal = (caseStudy: CaseStudy) => {
    setSelectedCaseStudy(caseStudy);
    setModalOpen(true);
  };

  return (
    <section id="case-studies" className="section-padding relative bg-gradient-to-br from-white via-white to-blue-50 dark:from-gray-900 dark:via-gray-900 dark:to-blue-950/30">
      {/* Background decorative elements */}
      <div className="absolute top-20 right-10 w-64 h-64 bg-blue-100 dark:bg-blue-900/20 rounded-full blur-3xl opacity-40"></div>
      <div className="absolute bottom-20 left-10 w-80 h-80 bg-indigo-100 dark:bg-indigo-900/20 rounded-full blur-3xl opacity-40"></div>
      
      <div className="container mx-auto relative z-10 px-4 sm:px-6 lg:px-8 max-w-7xl bg-white/70 dark:bg-gray-800/70 backdrop-blur-sm rounded-2xl shadow-lg border border-gray-100 dark:border-gray-700 py-12">
        <SectionHeader 
          title="Case Studies & Results"
          description="See how our strategic approach and technical expertise delivered measurable outcomes for these businesses."
          alignment="center"
        />
        
        {/* Demo Images Indicator */}
        <div className="flex items-center justify-center gap-2 mb-8 text-gray-500 dark:text-gray-400 text-sm">
          <Image size={16} />
          <span>Demo images shown for illustration purposes</span>
        </div>
        
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
                <CarouselItem key={index} className="basis-full md:basis-1/2 lg:basis-1/3 px-4 pb-6">
                  <CaseStudyCarouselItem 
                    caseStudy={caseStudy} 
                    onClick={() => openCaseStudyModal(caseStudy)} 
                  />
                </CarouselItem>
              ))}
            </CarouselContent>
            <div className="flex justify-center items-center gap-4 mt-6">
              <CarouselPrevious className="static transform-none bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700 dark:from-blue-800 dark:to-indigo-800 dark:hover:from-blue-700 dark:hover:to-indigo-700 border-none text-white" />
              <CarouselNext className="static transform-none bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700 dark:from-blue-800 dark:to-indigo-800 dark:hover:from-blue-700 dark:hover:to-indigo-700 border-none text-white" />
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
