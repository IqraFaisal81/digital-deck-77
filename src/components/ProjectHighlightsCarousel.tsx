
import { useState } from "react";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogDescription } from "@/components/ui/dialog";
import { ExternalLink } from "lucide-react";
import { Button } from "@/components/ui/button";

type HighlightProject = {
  title: string;
  description: string;
  image: string;
  longDescription?: string;
  technologies?: string[];
  link?: string;
  serviceId?: string; // Added service ID to link project with service section
};

const ProjectHighlightsCarousel = () => {
  const projects: HighlightProject[] = [
    {
      title: "AI-Powered Analytics Dashboard",
      description: "Real-time data visualization platform for business metrics",
      image: "https://images.unsplash.com/photo-1488590528505-98d2b5aba04b?ixlib=rb-4.0.3&auto=format&fit=crop&w=1170&q=80",
      longDescription: "A comprehensive analytics solution that processes large datasets and presents actionable insights through interactive visualizations and customizable reporting tools.",
      technologies: ["React", "TypeScript", "D3.js", "Firebase", "TensorFlow.js"],
      link: "https://example.com/analytics",
      serviceId: "ppc-analytics"
    },
    {
      title: "Developer Productivity Platform",
      description: "Streamline coding workflows with intelligent tools",
      image: "https://images.unsplash.com/photo-1461749280684-dccba630e2f6?ixlib=rb-4.0.3&auto=format&fit=crop&w=1170&q=80",
      longDescription: "A suite of developer productivity tools that integrates with popular IDEs to provide code suggestions, automate routine tasks, and optimize development workflows.",
      technologies: ["React", "Node.js", "Machine Learning", "VS Code API", "GraphQL"],
      link: "https://example.com/devtools",
      serviceId: "workflows"
    },
    {
      title: "Enterprise Collaboration Suite",
      description: "Secure team communication and project management",
      image: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?ixlib=rb-4.0.3&auto=format&fit=crop&w=1170&q=80",
      longDescription: "An end-to-end enterprise solution for remote teams that combines document management, video conferencing, and project tracking in a secure, scalable platform.",
      technologies: ["React", "WebRTC", "Redux", "Socket.io", "AWS Services"],
      link: "https://example.com/collab",
      serviceId: "email-marketing"
    },
    {
      title: "Cloud Infrastructure Management",
      description: "Automated deployment and scaling of cloud resources",
      image: "https://images.unsplash.com/photo-1498050108023-c5249f4df085?ixlib=rb-4.0.3&auto=format&fit=crop&w=1170&q=80",
      longDescription: "A platform that simplifies cloud resource management with automated provisioning, cost optimization, and performance monitoring across multiple cloud providers.",
      technologies: ["React", "Terraform", "Kubernetes", "AWS", "Azure", "GCP"],
      link: "https://example.com/cloud",
      serviceId: "lovable-projects"
    },
    {
      title: "Smart Energy Monitoring System",
      description: "IoT-based solution for sustainable energy management",
      image: "https://images.unsplash.com/photo-1500673922987-e212871fec22?ixlib=rb-4.0.3&auto=format&fit=crop&w=1170&q=80",
      longDescription: "An innovative energy monitoring system that uses IoT sensors and machine learning to optimize energy consumption in residential and commercial buildings.",
      technologies: ["React", "IoT", "MQTT", "TensorFlow", "Time-series DB"],
      link: "https://example.com/energy",
      serviceId: "seo-audits"
    },
    {
      title: "Urban Planning Visualization",
      description: "3D modeling and simulation for city development",
      image: "https://images.unsplash.com/photo-1493397212122-2b85dda8106b?ixlib=rb-4.0.3&auto=format&fit=crop&w=1170&q=80",
      longDescription: "A 3D visualization platform for urban planners that simulates traffic flow, environmental impact, and population growth to support sustainable city development.",
      technologies: ["React", "Three.js", "WebGL", "GIS", "Data Visualization"],
      link: "https://example.com/urban",
      serviceId: "ai-chatbot"
    }
  ];

  const [selectedProject, setSelectedProject] = useState<HighlightProject | null>(null);
  const [modalOpen, setModalOpen] = useState(false);

  const openProjectModal = (project: HighlightProject) => {
    setSelectedProject(project);
    setModalOpen(true);
  };

  // New function to handle navigation to service section
  const navigateToService = (serviceId: string | undefined, event: React.MouseEvent) => {
    if (serviceId) {
      event.stopPropagation(); // Stop event from triggering the card click
      const element = document.getElementById(serviceId);
      if (element) {
        element.scrollIntoView({ behavior: "smooth" });
        // Add any additional logic to show the section if it's initially hidden
      }
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
          {projects.map((project, index) => (
            <CarouselItem key={index} className="basis-full md:basis-1/2 lg:basis-1/3 h-full">
              <div 
                className="cursor-pointer h-full rounded-lg overflow-hidden shadow-lg shadow-black/30 transition-all duration-300 hover:shadow-electric/30 hover:scale-[1.02]"
                onClick={() => openProjectModal(project)}
              >
                <div className="relative h-[220px] overflow-hidden">
                  <img 
                    src={project.image} 
                    alt={project.title} 
                    className="w-full h-full object-cover transition-all duration-500 transform hover:scale-110" 
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent opacity-70"></div>
                </div>
                <div className="p-5 bg-black/50 backdrop-blur-sm">
                  <h4 className="text-xl font-bold text-white">{project.title}</h4>
                  <p className="text-white/80 text-sm mt-2">{project.description}</p>
                  <div className="mt-4 flex justify-between items-center">
                    <span className="text-electric text-sm">View Project</span>
                    {project.serviceId && (
                      <Button 
                        variant="link" 
                        size="sm" 
                        className="text-white/70 hover:text-electric p-0"
                        onClick={(e) => navigateToService(project.serviceId, e)}
                      >
                        View Related Service <ArrowRight size={14} className="ml-1" />
                      </Button>
                    )}
                  </div>
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
                <DialogTitle className="text-2xl font-bold">{selectedProject.title}</DialogTitle>
                <DialogDescription className="text-white/80">
                  {selectedProject.description}
                </DialogDescription>
              </DialogHeader>
              
              <div className="mt-4 bg-black/30 p-2 rounded-lg">
                <img 
                  src={selectedProject.image} 
                  alt={selectedProject.title} 
                  className="w-full object-cover rounded-lg h-[300px]"
                />
              </div>
              
              <div className="mt-6">
                <h3 className="text-lg font-semibold text-electric mb-2">Project Details</h3>
                <p className="text-white/90">{selectedProject.longDescription}</p>
                
                {selectedProject.technologies && (
                  <div className="mt-4">
                    <h3 className="text-lg font-semibold text-electric mb-2">Technologies</h3>
                    <div className="flex flex-wrap gap-2">
                      {selectedProject.technologies.map((tech, index) => (
                        <span 
                          key={index} 
                          className="px-3 py-1 bg-electric/20 text-white rounded-full text-sm"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>
                )}
                
                <div className="mt-6 flex justify-between items-center">
                  {selectedProject.link && (
                    <Button 
                      asChild
                      className="bg-electric hover:bg-electric/80"
                    >
                      <a 
                        href={selectedProject.link} 
                        target="_blank" 
                        rel="noopener noreferrer"
                      >
                        Visit Project <ExternalLink size={16} className="ml-2" />
                      </a>
                    </Button>
                  )}
                  
                  {selectedProject.serviceId && (
                    <Button 
                      variant="outline"
                      className="border-white/20 hover:bg-white/10"
                      onClick={(e) => {
                        setModalOpen(false);
                        setTimeout(() => {
                          navigateToService(selectedProject.serviceId, e);
                        }, 300);
                      }}
                    >
                      View Related Service <ArrowRight size={16} className="ml-2" />
                    </Button>
                  )}
                </div>
              </div>
            </>
          )}
        </DialogContent>
      </Dialog>
    </div>
  );
};

export default ProjectHighlightsCarousel;
