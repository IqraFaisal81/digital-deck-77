
import { useState } from "react";
import { ArrowRight } from "lucide-react";
import { 
  Carousel, 
  CarouselContent, 
  CarouselItem, 
  CarouselNext, 
  CarouselPrevious 
} from "@/components/ui/carousel";
import { Button } from "@/components/ui/button";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogDescription } from "@/components/ui/dialog";
import { ProjectType } from "@/types/project";

// Define project highlights data
const projectHighlights = [
  {
    id: 1,
    title: "Triad Diagnostic Solutions - Redesign",
    shortDescription: "Complete rebrand and website overhaul with CRM integration",
    description: "Full website redesign with custom inventory system and customer portal integration. Added automated workflows for inventory management and order processing.",
    image: "/lovable-uploads/c53f75af-52db-4d19-bc94-5f4f76696d7f.png",
    category: "Web Development",
    technologies: ["Go High Level", "WordPress", "WooCommerce", "JavaScript"],
    relatedService: "workflows"
  },
  {
    id: 2,
    title: "All Pro - Service Booking System",
    shortDescription: "HVAC service scheduling system with automated follow-ups",
    description: "Built an integrated service booking system with customer notifications, technician scheduling, and automated follow-up sequences to improve customer retention.",
    image: "/lovable-uploads/8298ac25-72ea-45df-8b02-fec826aa557c.png",
    category: "Automation",
    technologies: ["Go High Level", "Twilio", "Zapier", "Calendar API"],
    relatedService: "workflows"
  },
  {
    id: 3,
    title: "Grey Matters - SEO & Content Strategy",
    shortDescription: "Complete SEO overhaul for mental health services",
    description: "Comprehensive SEO audit and implementation for a mental health studio, resulting in 300% increase in organic traffic and first-page rankings for key terms.",
    image: "/lovable-uploads/fc1fe9d9-754d-4c31-a3fb-7c9d18da2df4.png",
    category: "SEO",
    technologies: ["Google Analytics", "SEMrush", "Ahrefs", "Content Strategy"],
    relatedService: "seo-audits"
  },
  {
    id: 4,
    title: "Pure Water - E-commerce Sales Funnel",
    shortDescription: "High-converting funnel for bottleless water coolers",
    description: "Designed and implemented a multi-step sales funnel for a bottleless water cooler company, increasing lead conversion rate by 45% and reducing customer acquisition cost.",
    image: "/lovable-uploads/9bcb292a-8bfc-4d7d-b048-fa75e96bec94.png",
    category: "Funnel Development",
    technologies: ["Go High Level", "Facebook Ads", "Google Ads", "Email Automation"],
    relatedService: "funnels"
  },
  {
    id: 5,
    title: "March On Mission - Email Campaign",
    shortDescription: "Nonprofit donation email sequence with storytelling",
    description: "Crafted a compelling email campaign for a nonprofit, featuring personal stories and impact metrics that resulted in a 28% increase in donations from email channels.",
    image: "/lovable-uploads/c641dd9b-f122-4f6c-989b-d760cfd177a1.png",
    category: "Email Marketing",
    technologies: ["Mailchimp", "Copy Writing", "A/B Testing", "Segmentation"],
    relatedService: "email-marketing"
  },
  {
    id: 6,
    title: "AI Support Chatbot - Multiple Clients",
    shortDescription: "Custom AI chatbots for various business types",
    description: "Developed and deployed intelligent chatbots for multiple businesses, handling customer inquiries, appointment booking, and lead qualification without human intervention.",
    image: "/lovable-uploads/1f2af988-6cc7-44a9-b183-662c459cb9ef.png",
    category: "AI Development",
    technologies: ["Go High Level", "OpenAI", "NLP", "Automation"],
    relatedService: "ai-chatbot"
  }
];

const ProjectHighlightsCarousel = () => {
  const [selectedProject, setSelectedProject] = useState<typeof projectHighlights[0] | null>(null);
  const [modalOpen, setModalOpen] = useState(false);

  const openProjectModal = (project: typeof projectHighlights[0]) => {
    setSelectedProject(project);
    setModalOpen(true);
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
              <div 
                className="bg-black/20 backdrop-blur-sm rounded-xl overflow-hidden border border-white/10 hover:border-electric/30 transition-all hover:shadow-lg hover:shadow-electric/20 hover:scale-[1.02] cursor-pointer h-full flex flex-col"
                onClick={() => openProjectModal(project)}
              >
                <div className="h-48 overflow-hidden">
                  <img 
                    src={project.image} 
                    alt={project.title} 
                    className="w-full h-full object-cover object-center transform hover:scale-110 transition-transform duration-500"
                  />
                </div>
                <div className="p-6 flex-1 flex flex-col">
                  <h3 className="text-xl font-semibold mb-2">{project.title}</h3>
                  <p className="text-white/70 mb-4 flex-1">
                    {project.shortDescription}
                  </p>
                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.technologies.map((tech, index) => (
                      <span 
                        key={index}
                        className="text-xs px-2 py-1 rounded-full bg-electric/20 text-electric"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                  <div className="flex justify-end">
                    <Button 
                      variant="ghost" 
                      size="sm"
                      className="text-electric hover:text-electric/80 p-0 flex items-center"
                    >
                      View Details <ArrowRight className="ml-1 h-4 w-4" />
                    </Button>
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
                  {selectedProject.category}
                </DialogDescription>
              </DialogHeader>
              
              <div className="mt-4 bg-black/30 p-4 rounded-lg">
                <img 
                  src={selectedProject.image} 
                  alt={selectedProject.title} 
                  className="w-full h-auto object-contain rounded-lg mb-6"
                />
                
                <div className="space-y-4">
                  <div>
                    <h4 className="text-lg font-semibold text-electric mb-2">Overview</h4>
                    <p className="text-white/80">{selectedProject.description}</p>
                  </div>
                  
                  <div>
                    <h4 className="text-lg font-semibold text-electric mb-2">Technologies Used</h4>
                    <div className="flex flex-wrap gap-2">
                      {selectedProject.technologies.map((tech, index) => (
                        <span 
                          key={index}
                          className="text-sm px-3 py-1 rounded-full bg-electric/20 text-electric"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
              
              <div className="mt-6 flex justify-between">
                <Button 
                  variant="outline"
                  className="border-white/20 hover:bg-white/10"
                  onClick={() => {
                    setModalOpen(false);
                    scrollToServiceSection(selectedProject.relatedService);
                  }}
                >
                  View Related Service <ArrowRight className="ml-1 h-4 w-4" />
                </Button>
                
                <Button 
                  onClick={() => setModalOpen(false)}
                  variant="ghost"
                  className="border border-white/20 hover:bg-white/10"
                >
                  Close
                </Button>
              </div>
            </>
          )}
        </DialogContent>
      </Dialog>
    </div>
  );
};

export default ProjectHighlightsCarousel;
