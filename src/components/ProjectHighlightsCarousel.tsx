
import { useState } from "react";
import { 
  Carousel, 
  CarouselContent, 
  CarouselItem, 
  CarouselNext, 
  CarouselPrevious 
} from "@/components/ui/carousel";
import { clients } from "@/data/clients";
import { sectionIds } from "@/data/services";
import { projectHighlights } from "@/data/projectHighlightsData";
import ProjectHighlightCard from "./ProjectHighlightCard";
import ProjectDetailsModal from "./ProjectDetailsModal";

const ProjectHighlightsCarousel = () => {
  const [selectedProject, setSelectedProject] = useState<typeof projectHighlights[0] | null>(null);
  const [modalOpen, setModalOpen] = useState(false);

  const openProjectModal = (project: typeof projectHighlights[0]) => {
    setSelectedProject(project);
    setModalOpen(true);
  };

  const getClientTestimonial = (clientName: string) => {
    const client = clients.find(c => c.name === clientName);
    return client?.testimonial || null;
  };

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

  return (
    <div className="w-full">
      <Carousel
        opts={{
          align: "start",
          loop: true,
        }}
        className="w-full"
      >
        <CarouselContent>
          {projectHighlights.map((project) => (
            <CarouselItem key={project.id} className="basis-full md:basis-1/2 lg:basis-1/3 h-full">
              <ProjectHighlightCard 
                project={project}
                onClick={() => openProjectModal(project)}
                onServiceClick={scrollToServiceSection}
              />
            </CarouselItem>
          ))}
        </CarouselContent>
        <CarouselPrevious className="left-2 bg-black/50 hover:bg-black/80 border-none" />
        <CarouselNext className="right-2 bg-black/50 hover:bg-black/80 border-none" />
      </Carousel>

      {/* Project Modal */}
      <ProjectDetailsModal 
        isOpen={modalOpen}
        onOpenChange={setModalOpen}
        project={selectedProject}
        testimonial={selectedProject ? getClientTestimonial(selectedProject.clientName) : null}
        onServiceClick={scrollToServiceSection}
      />
    </div>
  );
};

export default ProjectHighlightsCarousel;
