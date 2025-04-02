
import React, { useState } from "react";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogDescription } from "@/components/ui/dialog";
import { getProjectsByCategory } from "@/data/projects";

const LovableProjectsCarousel = () => {
  // Get Lovable projects from the projects data
  const lovableProjects = getProjectsByCategory("Lovable Projects");

  const [selectedProject, setSelectedProject] = useState<typeof lovableProjects[0] | null>(null);
  const [modalOpen, setModalOpen] = useState(false);

  const openProjectModal = (project: typeof lovableProjects[0]) => {
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
          {lovableProjects.map((project, index) => (
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
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover object-top transition-all duration-300 transform group-hover:scale-110"
                  />
                </div>
                <div className="p-4 bg-gray-50 dark:bg-gray-800">
                  <h4 className="text-lg font-semibold text-black dark:text-white">{project.title}</h4>
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
                <DialogTitle className="text-2xl font-bold text-gray-800 dark:text-gray-100">{selectedProject.title}</DialogTitle>
                <DialogDescription className="text-gray-600 dark:text-gray-300">
                  {selectedProject.description}
                </DialogDescription>
              </DialogHeader>
              
              <div className="mt-4 bg-gray-50 dark:bg-gray-700 p-2 rounded-lg">
                <img 
                  src={selectedProject.image} 
                  alt={selectedProject.title} 
                  className="w-full object-contain rounded-lg"
                />
              </div>

              {/* Project details */}
              {selectedProject.challenge && (
                <div className="mt-4">
                  <h3 className="text-lg font-semibold text-gray-800 dark:text-gray-100">Challenge</h3>
                  <p className="text-gray-600 dark:text-gray-300">{selectedProject.challenge}</p>
                </div>
              )}
              
              {selectedProject.solution && (
                <div className="mt-4">
                  <h3 className="text-lg font-semibold text-gray-800 dark:text-gray-100">Solution</h3>
                  <p className="text-gray-600 dark:text-gray-300">{selectedProject.solution}</p>
                </div>
              )}
              
              {selectedProject.results && (
                <div className="mt-4">
                  <h3 className="text-lg font-semibold text-gray-800 dark:text-gray-100">Results</h3>
                  <p className="text-gray-600 dark:text-gray-300">{selectedProject.results}</p>
                </div>
              )}
              
              {selectedProject.tools && selectedProject.tools.length > 0 && (
                <div className="mt-4">
                  <h3 className="text-lg font-semibold text-gray-800 dark:text-gray-100">Technologies Used</h3>
                  <div className="flex flex-wrap gap-2 mt-2">
                    {selectedProject.tools.map((tool, index) => (
                      <span key={index} className="px-3 py-1 bg-blue-100 dark:bg-blue-900/40 text-blue-800 dark:text-blue-300 rounded-full text-sm">
                        {tool}
                      </span>
                    ))}
                  </div>
                </div>
              )}
            </>
          )}
        </DialogContent>
      </Dialog>
    </div>
  );
};

export default LovableProjectsCarousel;
