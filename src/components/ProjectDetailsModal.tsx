
import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { 
  Dialog, 
  DialogContent, 
  DialogHeader, 
  DialogTitle, 
  DialogDescription 
} from "@/components/ui/dialog";

interface ProjectDetailsModalProps {
  isOpen: boolean;
  onOpenChange: (open: boolean) => void;
  project: {
    title: string;
    category: string;
    description: string;
    image: string;
    technologies: string[];
    relatedService: string;
    clientName: string;
  } | null;
  testimonial: {
    quote: string;
    author: string;
    position: string;
  } | null;
  onServiceClick: (service: string) => void;
}

const ProjectDetailsModal = ({ 
  isOpen, 
  onOpenChange, 
  project, 
  testimonial, 
  onServiceClick 
}: ProjectDetailsModalProps) => {
  if (!project) return null;

  return (
    <Dialog open={isOpen} onOpenChange={onOpenChange}>
      <DialogContent className="bg-royal/90 backdrop-blur-xl border border-white/10 text-white max-w-4xl max-h-[90vh] overflow-y-auto">
        <DialogHeader>
          <DialogTitle className="text-2xl font-bold">{project.title}</DialogTitle>
          <DialogDescription className="text-white/80 flex items-center">
            <span className="mr-2">{project.category}</span>
            {project.relatedService && (
              <span className="text-sm px-2 py-1 rounded-full bg-electric/20 text-electric ml-2">
                {project.relatedService.replace("-", " ")}
              </span>
            )}
          </DialogDescription>
        </DialogHeader>
        
        <div className="mt-4 bg-black/30 p-4 rounded-lg">
          <img 
            src={project.image} 
            alt={project.title} 
            className="w-full h-auto object-contain rounded-lg mb-6"
          />
          
          <div className="space-y-4">
            <div>
              <h4 className="text-lg font-semibold text-electric mb-2">Overview</h4>
              <p className="text-white/80">{project.description}</p>
            </div>
            
            <div>
              <h4 className="text-lg font-semibold text-electric mb-2">Technologies Used</h4>
              <div className="flex flex-wrap gap-2">
                {project.technologies.map((tech, index) => (
                  <span 
                    key={index}
                    className="text-sm px-3 py-1 rounded-full bg-electric/20 text-electric"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>

            {testimonial && (
              <div>
                <h4 className="text-lg font-semibold text-electric mb-2">Client Testimonial</h4>
                <blockquote className="italic text-white/80 border-l-4 border-electric/50 pl-4 py-2">
                  "{testimonial.quote}"
                  <footer className="text-white/60 mt-2 not-italic">
                    — {testimonial.author}, {testimonial.position}
                  </footer>
                </blockquote>
              </div>
            )}
          </div>
        </div>
        
        <div className="mt-6 flex justify-between">
          <Button 
            variant="outline"
            className="border-white/20 hover:bg-white/10"
            onClick={() => {
              onOpenChange(false);
              onServiceClick(project.relatedService);
            }}
          >
            View Related Service <ArrowRight className="ml-1 h-4 w-4" />
          </Button>
          
          <Button 
            onClick={() => onOpenChange(false)}
            variant="ghost"
            className="border border-white/20 hover:bg-white/10"
          >
            Close
          </Button>
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default ProjectDetailsModal;
