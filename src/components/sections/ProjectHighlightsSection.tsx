
import { useState } from "react";
import { caseStudies } from "@/data/caseStudies";
import { CaseStudy } from "@/types/caseStudy";
import { 
  Carousel, 
  CarouselContent, 
  CarouselItem, 
  CarouselNext, 
  CarouselPrevious
} from "@/components/ui/carousel";
import { useCarouselState } from "@/hooks/useCarouselState";
import CaseStudyModal from "@/components/project-highlights/CaseStudyModal";
import CaseStudyCarouselItem from "@/components/project-highlights/CaseStudyCarouselItem";

const ProjectHighlightsSection = () => {
  const [selectedCaseStudy, setSelectedCaseStudy] = useState<CaseStudy | null>(null);
  const [modalOpen, setModalOpen] = useState(false);
  const { carouselApi, setCarouselApi, currentIndex } = useCarouselState();
  
  const openCaseStudyModal = (caseStudy: CaseStudy) => {
    setSelectedCaseStudy(caseStudy);
    setModalOpen(true);
  };

  return (
    <section id="case-studies" className="section-padding relative bg-white">
      {/* Background decorative elements */}
      <div className="absolute top-20 right-10 w-64 h-64 bg-blue-50 rounded-full blur-3xl opacity-30"></div>
      <div className="absolute bottom-20 left-10 w-80 h-80 bg-blue-50 rounded-full blur-3xl opacity-30"></div>
      
      <div className="container mx-auto relative z-10">
        <div className="max-w-3xl mx-auto text-center mb-10">
          <div className="inline-block px-4 py-1 bg-blue-100 rounded-full text-blue-600 text-sm font-medium mb-4">
            Client Success Stories
          </div>
          <h2 className="text-3xl md:text-5xl font-bold mb-6 text-black">
            Real Results for Real Clients
          </h2>
          <p className="text-black/80 text-lg mb-8">
            See how our strategic approach and technical expertise delivered measurable outcomes
            for businesses looking to improve their customer engagement and revenue.
          </p>
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
                <CarouselItem key={index} className="basis-full md:basis-1/2 lg:basis-1/3 px-4">
                  <CaseStudyCarouselItem 
                    caseStudy={caseStudy} 
                    onClick={() => openCaseStudyModal(caseStudy)} 
                  />
                </CarouselItem>
              ))}
            </CarouselContent>
            
            <div className="flex justify-center gap-4 mt-8">
              <CarouselPrevious className="relative inline-flex transform-none bg-blue-100 hover:bg-blue-200 text-blue-600 border-none h-10 w-10 rounded-full mr-2" />
              <div className="flex items-center space-x-2">
                {caseStudies.map((_, idx) => (
                  <span 
                    key={idx} 
                    className={`block h-2 w-2 rounded-full cursor-pointer transition-all ${currentIndex === idx ? 'bg-blue-600 w-4' : 'bg-blue-200'}`}
                    onClick={() => carouselApi?.scrollTo(idx)}
                  />
                ))}
              </div>
              <CarouselNext className="relative inline-flex transform-none bg-blue-100 hover:bg-blue-200 text-blue-600 border-none h-10 w-10 rounded-full ml-2" />
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
