
import { useState, useEffect } from "react";
import { 
  Carousel, 
  CarouselContent, 
  CarouselItem, 
  CarouselNext, 
  CarouselPrevious,
  type CarouselApi
} from "@/components/ui/carousel";
import ProjectCard from "./project-highlights/ProjectCard";
import ProjectModal from "./project-highlights/ProjectModal";
import CarouselPagination from "./project-highlights/CarouselPagination";
import { projectHighlights } from "./project-highlights/ProjectData";

const ProjectHighlightsCarousel = () => {
  const [selectedProject, setSelectedProject] = useState<typeof projectHighlights[0] | null>(null);
  const [modalOpen, setModalOpen] = useState(false);
  const [carouselApi, setCarouselApi] = useState<CarouselApi | null>(null);
  const [currentIndex, setCurrentIndex] = useState(0);

  const scrollToServiceSection = (sectionId: string | null) => {
    if (!sectionId) return;
    
    const sectionElement = document.getElementById(sectionId);
    if (sectionElement) {
      sectionElement.scrollIntoView({ behavior: "smooth" });
      
      // Trigger the section visibility if it's a collapsible section
      const event = new CustomEvent('show-section', { detail: { sectionId } });
      document.dispatchEvent(event);
    }
  };

  const openProjectModal = (project: typeof projectHighlights[0]) => {
    setSelectedProject(project);
    setModalOpen(true);
  };

  // Update current index when carousel changes
  useEffect(() => {
    if (!carouselApi) return;
    
    const onSelect = () => {
      setCurrentIndex(carouselApi.selectedScrollSnap());
    };
    
    carouselApi.on("select", onSelect);
    return () => {
      carouselApi.off("select", onSelect);
    };
  }, [carouselApi]);

  return (
    <div className="w-full">
      <Carousel
        opts={{
          align: "start",
          loop: true,
        }}
        className="w-full"
        setApi={setCarouselApi}
      >
        <CarouselContent>
          {projectHighlights.map((project) => (
            <CarouselItem key={project.id} className="basis-full md:basis-1/2 lg:basis-1/3 h-full">
              <ProjectCard 
                project={project}
                scrollToServiceSection={scrollToServiceSection}
                openProjectModal={openProjectModal}
              />
            </CarouselItem>
          ))}
        </CarouselContent>

        <div className="flex justify-center items-center gap-4 mt-6">
          <CarouselPrevious className="static transform-none bg-black/50 hover:bg-black/80 border-none" />
          <CarouselPagination 
            carouselApi={carouselApi}
            currentIndex={currentIndex}
            items={projectHighlights}
          />
          <CarouselNext className="static transform-none bg-black/50 hover:bg-black/80 border-none" />
        </div>
      </Carousel>

      {/* Project Modal */}
      <ProjectModal 
        modalOpen={modalOpen}
        setModalOpen={setModalOpen}
        selectedProject={selectedProject}
        scrollToServiceSection={scrollToServiceSection}
      />
    </div>
  );
};

export default ProjectHighlightsCarousel;
