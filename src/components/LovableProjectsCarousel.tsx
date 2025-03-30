
import React, { useState } from "react";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { Card, CardContent } from "@/components/ui/card";
import { ExternalLink, Calendar } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogDescription, DialogFooter } from "@/components/ui/dialog";

const LovableProjectsCarousel = () => {
  const projects = [
    {
      name: "ChatGenius Embedify",
      description: "AI chatbot creation platform with no-code required",
      image: "https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80",
      url: "https://preview--chatgenius-embedify.lovable.app/"
    },
    {
      name: "SupaFriendly Dashboard",
      description: "Social media analytics with Supabase integration",
      image: "https://images.unsplash.com/photo-1498050108023-c5249f4df085?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80",
      url: "https://preview--friendly-supabase-86.lovable.app/"
    },
    {
      name: "PromptVault Pilot",
      description: "AI prompt management for teams and organizations",
      image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80",
      url: "https://preview--promptvaultpilot.lovable.app/"
    }
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
              className="basis-full md:basis-1/2 lg:basis-1/3 h-full"
            >
              <div 
                className="cursor-pointer h-full"
                onClick={() => openProjectModal(project)}
              >
                <div className="relative h-[200px] md:h-[220px] overflow-hidden rounded-t-lg">
                  <img
                    src={project.image}
                    alt={project.name}
                    className="w-full h-full object-cover object-top transition-all duration-300 transform hover:scale-110"
                  />
                </div>
                <div className="p-4 bg-black/30">
                  <h4 className="text-lg font-semibold text-white">{project.name}</h4>
                  <p className="text-white/70 text-sm mt-1">{project.description}</p>
                </div>
              </div>
            </CarouselItem>
          ))}
        </CarouselContent>
        <CarouselPrevious className="left-2 bg-black/50 hover:bg-black/80 border-none" />
        <CarouselNext className="right-2 bg-black/50 hover:bg-black/80 border-none" />
      </Carousel>

      {/* Project Modal */}
      <Dialog open={modalOpen} onOpenChange={setModalOpen}>
        <DialogContent className="bg-royal/90 backdrop-blur-xl border border-white/10 text-white max-w-4xl max-h-[90vh] overflow-y-auto">
          {selectedProject && (
            <>
              <DialogHeader>
                <DialogTitle className="text-2xl font-bold">{selectedProject.name}</DialogTitle>
                <DialogDescription className="text-white/80">
                  {selectedProject.description}
                </DialogDescription>
              </DialogHeader>
              
              <div className="mt-4 bg-black/30 p-2 rounded-lg">
                <img 
                  src={selectedProject.image} 
                  alt={selectedProject.name} 
                  className="w-full object-contain rounded-lg"
                />
              </div>
              
              <div className="mt-6 p-4 bg-electric/10 rounded-lg border border-electric/20">
                <h4 className="text-lg font-semibold text-white mb-2">Need a custom AI-powered solution?</h4>
                <p className="text-white/80 mb-4">I can create similar or more advanced solutions tailored to your specific business needs.</p>
                <Button
                  className="bg-electric hover:bg-electric/80 w-full text-white"
                  asChild
                  onClick={() => {
                    setModalOpen(false);
                    setTimeout(() => {
                      document.getElementById('booking')?.scrollIntoView({ behavior: 'smooth' });
                    }, 300);
                  }}
                >
                  <a className="flex items-center justify-center">
                    <Calendar className="mr-2 h-4 w-4" />
                    Schedule a Consultation
                  </a>
                </Button>
              </div>
              
              <DialogFooter className="mt-6 flex justify-between">
                <Button 
                  asChild
                  className="bg-electric hover:bg-electric/80"
                >
                  <a 
                    href={selectedProject.url} 
                    target="_blank" 
                    rel="noopener noreferrer"
                  >
                    View Demo <ExternalLink size={16} className="ml-2" />
                  </a>
                </Button>
                
                <Button 
                  onClick={() => setModalOpen(false)}
                  variant="ghost"
                  className="border border-white/20 hover:bg-white/10"
                >
                  Close
                </Button>
              </DialogFooter>
            </>
          )}
        </DialogContent>
      </Dialog>
    </div>
  );
};

export default LovableProjectsCarousel;
