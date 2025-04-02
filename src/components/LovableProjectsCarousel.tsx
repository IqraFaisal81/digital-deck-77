
import React, { useState } from "react";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogDescription } from "@/components/ui/dialog";

const LovableProjectsCarousel = () => {
  // Assuming this is similar to other carousels with projects/images
  const projects = [
    // Add your project images/details here
    {
      src: "/path/to/project-image.png",
      alt: "Lovable Project Example",
      description: "An AI-powered web application showcasing modern development techniques"
    }
    // Add more projects
  ];

  const [selectedProject, setSelectedProject] = useState<typeof projects[0] | null>(null);
  const [modalOpen, setModalOpen] = useState(false);

  const openProjectModal = (project: typeof projects[0]) => {
    setSelectedProject(project);
    setModalOpen(true);
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
          {projects.map((project, index) => (
            <CarouselItem
              key={index}
              className="basis-full md:basis-1/2 lg:basis-1/2 h-full p-2"
            >
              <div 
                className="cursor-pointer h-full bg-white dark:bg-gray-800 shadow-md rounded-lg border border-gray-200 dark:border-gray-700 overflow-hidden transition-all duration-300 hover:shadow-xl hover:border-blue-200 dark:hover:border-blue-700 group"
                onClick={() => openProjectModal(project)}
              >
                <div className="relative h-[200px] md:h-[220px] overflow-hidden">
                  <img
                    src={project.src}
                    alt={project.alt}
                    className="w-full h-full object-cover object-top transition-all duration-300 transform group-hover:scale-110"
                  />
                </div>
                <div className="p-4 bg-gray-50 dark:bg-gray-800">
                  <h4 className="text-lg font-semibold text-black dark:text-white">{project.alt.split(" ").slice(0, 3).join(" ")}</h4>
                  <p className="text-gray-800 dark:text-gray-300 text-sm mt-1">{project.description.split(" ").slice(0, 10).join(" ")}...</p>
                </div>
              </div>
            </CarouselItem>
          ))}
        </CarouselContent>
        <CarouselPrevious className="left-2 bg-black/50 hover:bg-black/80 border-none" />
        <CarouselNext className="right-2 bg-black/50 hover:bg-black/80 border-none" />
      </Carousel>

      {/* Modal for project details */}
      <Dialog open={modalOpen} onOpenChange={setModalOpen}>
        <DialogContent className="bg-white dark:bg-gray-800 max-w-4xl max-h-[90vh] overflow-y-auto">
          {selectedProject && (
            <>
              <DialogHeader>
                <DialogTitle className="text-2xl font-bold text-gray-800 dark:text-gray-100">{selectedProject.alt}</DialogTitle>
                <DialogDescription className="text-gray-600 dark:text-gray-300">
                  {selectedProject.description}
                </DialogDescription>
              </DialogHeader>
              
              <div className="mt-4 bg-gray-50 dark:bg-gray-700 p-2 rounded-lg">
                <img 
                  src={selectedProject.src} 
                  alt={selectedProject.alt} 
                  className="w-full object-contain rounded-lg"
                />
              </div>
            </>
          )}
        </DialogContent>
      </Dialog>
    </div>
  );
};

export default LovableProjectsCarousel;
