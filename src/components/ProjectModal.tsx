
import { ProjectType } from "@/types/project";
import { 
  Dialog, 
  DialogContent, 
  DialogHeader, 
  DialogTitle, 
  DialogDescription,
  DialogFooter
} from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { ExternalLink } from "lucide-react";

export interface ProjectModalProps {
  isOpen: boolean;
  onClose: () => void;
  project: ProjectType;
}

const ProjectModal = ({ isOpen, onClose, project }: ProjectModalProps) => {
  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="bg-royal/90 backdrop-blur-xl border border-white/10 text-white max-w-4xl max-h-[90vh] overflow-y-auto">
        <DialogHeader>
          <DialogTitle className="text-2xl font-bold">{project.title}</DialogTitle>
          <DialogDescription className="text-white/80">
            {project.category}
          </DialogDescription>
        </DialogHeader>
        
        <div className="mt-4 bg-black/30 p-4 rounded-lg">
          <img 
            src={project.image} 
            alt={project.title} 
            className="w-full h-auto object-contain rounded-lg mb-6"
          />
          
          <div className="space-y-4">
            {project.description && (
              <div>
                <h4 className="text-lg font-semibold text-electric mb-2">Description</h4>
                <p className="text-white/80">{project.description}</p>
              </div>
            )}
            
            {project.challenge && (
              <div>
                <h4 className="text-lg font-semibold text-electric mb-2">Challenge</h4>
                <p className="text-white/80">{project.challenge}</p>
              </div>
            )}
            
            {project.solution && (
              <div>
                <h4 className="text-lg font-semibold text-electric mb-2">Solution</h4>
                <p className="text-white/80">{project.solution}</p>
              </div>
            )}
            
            {project.results && (
              <div>
                <h4 className="text-lg font-semibold text-electric mb-2">Results</h4>
                <p className="text-white/80">{project.results}</p>
              </div>
            )}
            
            {project.tools && project.tools.length > 0 && (
              <div>
                <h4 className="text-lg font-semibold text-electric mb-2">Tools Used</h4>
                <div className="flex flex-wrap gap-2">
                  {project.tools.map((tool, index) => (
                    <span 
                      key={index}
                      className="text-sm px-3 py-1 rounded-full bg-electric/20 text-electric"
                    >
                      {tool}
                    </span>
                  ))}
                </div>
              </div>
            )}
            
            {project.technologies && project.technologies.length > 0 && (
              <div>
                <h4 className="text-lg font-semibold text-electric mb-2">Technologies</h4>
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
            )}
          </div>
        </div>
        
        <DialogFooter className="mt-6 flex justify-between">
          {project.url && (
            <Button 
              className="bg-electric hover:bg-electric/80"
              asChild
            >
              <a href={project.url} target="_blank" rel="noopener noreferrer">
                View Live Project <ExternalLink className="ml-1 h-4 w-4" />
              </a>
            </Button>
          )}
          
          <Button 
            onClick={onClose}
            variant="ghost"
            className="border border-white/20 hover:bg-white/10"
          >
            Close
          </Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
};

export default ProjectModal;
