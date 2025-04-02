
import { useState } from "react";
import { 
  Carousel, 
  CarouselContent, 
  CarouselItem, 
  CarouselNext, 
  CarouselPrevious 
} from "@/components/ui/carousel";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogDescription, DialogFooter } from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { ExternalLink, ZoomIn, Code, Browser, Bot, ChevronLeft, ChevronRight, Calendar } from "lucide-react";
import { scrollToServiceSection } from "@/utils/ScrollToServiceUtils";

// Define Lovable projects data
const projects = [
  {
    id: 1,
    title: "ChatGenius Embedify",
    description: "AI chatbot creation platform with no-code required. Build and deploy intelligent conversational interfaces for websites and applications with ease.",
    image: "https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80",
    url: "https://preview--chatgenius-embedify.lovable.app/",
    icon: <Bot className="h-5 w-5" />
  },
  {
    id: 2,
    title: "SupaFriendly Dashboard",
    description: "Social media analytics with Supabase integration. Track performance metrics, audience engagement, and content effectiveness across platforms.",
    image: "https://images.unsplash.com/photo-1498050108023-c5249f4df085?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80",
    url: "https://preview--friendly-supabase-86.lovable.app/",
    icon: <Browser className="h-5 w-5" />
  },
  {
    id: 3,
    title: "PromptVault Pilot",
    description: "AI prompt management for teams and organizations. Centralize, organize, and optimize AI prompts to ensure consistent outputs and knowledge sharing.",
    image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80",
    url: "https://preview--promptvaultpilot.lovable.app/",
    icon: <Code className="h-5 w-5" />
  }
];

const LovableProjectsCarousel = () => {
  const [selectedProject, setSelectedProject] = useState<typeof projects[0] | null>(null);
  const [modalOpen, setModalOpen] = useState(false);

  const openProjectModal = (project: typeof projects[0]) => {
    setSelectedProject(project);
    setModalOpen(true);
  };

  return (
    <div className="w-full bg-gradient-to-br from-blue-50 via-white to-blue-50 dark:from-gray-900 dark:via-gray-800 dark:to-gray-900 p-6 rounded-2xl border border-blue-100/50 dark:border-blue-900/30 shadow-lg">
      <Carousel
        opts={{
          align: "start",
          loop: true,
        }}
        className="w-full"
      >
        <CarouselContent>
          {projects.map((project) => (
            <CarouselItem key={project.id} className="basis-full md:basis-1/2 lg:basis-1/3 p-2">
              <div 
                className="cursor-pointer h-full bg-white dark:bg-gray-800 rounded-xl border border-blue-100 dark:border-blue-900/50 overflow-hidden transition-all duration-300 hover:shadow-xl hover:-translate-y-1 group shadow"
                onClick={() => openProjectModal(project)}
              >
                <div className="relative h-[180px] md:h-[200px] overflow-hidden">
                  <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-black/70 z-10 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                    <ZoomIn className="h-10 w-10 text-white bg-blue-600/80 p-2 rounded-full" />
                  </div>
                  <img 
                    src={project.image} 
                    alt={project.title} 
                    className="w-full h-full object-cover object-top transition-all duration-500 transform group-hover:scale-105"
                  />
                </div>
                <div className="p-4 bg-white dark:bg-gray-800">
                  <div className="flex items-center mb-2">
                    <div className="bg-blue-600 dark:bg-blue-500 p-1.5 rounded-md mr-3 text-white">
                      {project.icon}
                    </div>
                    <h4 className="text-md font-bold text-gray-800 dark:text-gray-200 line-clamp-1">{project.title}</h4>
                  </div>
                  <p className="text-gray-600 dark:text-gray-300 text-sm line-clamp-2">{project.description}</p>
                </div>
              </div>
            </CarouselItem>
          ))}
        </CarouselContent>
        <CarouselPrevious className="left-2 bg-white dark:bg-gray-800 hover:bg-blue-600 hover:text-white border-none shadow-lg">
          <ChevronLeft className="h-4 w-4" />
        </CarouselPrevious>
        <CarouselNext className="right-2 bg-white dark:bg-gray-800 hover:bg-blue-600 hover:text-white border-none shadow-lg">
          <ChevronRight className="h-4 w-4" />
        </CarouselNext>
      </Carousel>

      {/* Project Modal */}
      <Dialog open={modalOpen} onOpenChange={setModalOpen}>
        <DialogContent className="bg-white dark:bg-gray-800 max-w-4xl max-h-[90vh] overflow-y-auto rounded-xl border border-blue-100 dark:border-blue-900/50 shadow-2xl p-0">
          {selectedProject && (
            <>
              <DialogHeader className="p-6 border-b border-gray-100 dark:border-gray-700">
                <div className="flex items-center">
                  <div className="bg-blue-600 dark:bg-blue-500 p-2 rounded-md mr-3 text-white">
                    {selectedProject.icon}
                  </div>
                  <DialogTitle className="text-2xl font-bold text-gray-800 dark:text-gray-200">{selectedProject.title}</DialogTitle>
                </div>
                <DialogDescription className="text-gray-600 dark:text-gray-300 text-base mt-2">
                  {selectedProject.description}
                </DialogDescription>
              </DialogHeader>
              
              <div className="p-6">
                <div className="bg-gray-50 dark:bg-gray-900/50 p-4 rounded-lg border border-gray-100 dark:border-gray-700">
                  <img 
                    src={selectedProject.image} 
                    alt={selectedProject.title} 
                    className="w-full object-contain rounded-lg shadow-inner"
                  />
                </div>
                
                <div className="mt-6 p-4 bg-blue-50 dark:bg-blue-900/30 rounded-lg border border-blue-100 dark:border-blue-800/50">
                  <h4 className="text-lg font-semibold text-gray-800 dark:text-gray-200 mb-2">Need a custom AI-powered solution?</h4>
                  <p className="text-gray-600 dark:text-gray-300 mb-4">I can create similar or more advanced solutions tailored to your specific business needs.</p>
                  <Button
                    className="bg-blue-600 hover:bg-blue-700 w-full text-white"
                    onClick={() => {
                      setModalOpen(false);
                      document.getElementById('booking')?.scrollIntoView({ behavior: 'smooth' });
                    }}
                  >
                    <Calendar className="mr-2 h-4 w-4" />
                    Schedule a Consultation
                  </Button>
                </div>
                
                <DialogFooter className="mt-6 flex justify-between">
                  <Button 
                    asChild
                    className="bg-blue-600 hover:bg-blue-700 text-white"
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
                    variant="outline"
                    className="border border-gray-300 hover:bg-gray-100 dark:border-gray-600 dark:hover:bg-gray-700"
                  >
                    Close
                  </Button>
                </DialogFooter>
              </div>
            </>
          )}
        </DialogContent>
      </Dialog>
    </div>
  );
};

export default LovableProjectsCarousel;
