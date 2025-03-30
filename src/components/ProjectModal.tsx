
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogDescription } from "@/components/ui/dialog";
import { X } from "lucide-react";
import { ProjectType } from "@/types/project";

interface ProjectModalProps {
  project: ProjectType | null;
  isOpen: boolean;
  setIsOpen: (open: boolean) => void;
}

const ProjectModal = ({ project, isOpen, setIsOpen }: ProjectModalProps) => {
  if (!project) return null;

  return (
    <Dialog open={isOpen} onOpenChange={setIsOpen}>
      <DialogContent className="bg-royal/90 backdrop-blur-xl border border-white/10 text-white max-w-4xl max-h-[90vh] overflow-y-auto">
        <DialogHeader>
          <div className="flex items-center justify-between">
            <DialogTitle className="text-2xl font-bold">{project.title}</DialogTitle>
            <button 
              onClick={() => setIsOpen(false)}
              className="text-white/60 hover:text-white"
            >
              <X size={24} />
            </button>
          </div>
          <DialogDescription className="text-white/80">
            <span className="inline-block px-3 py-1 bg-electric/20 text-electric rounded-full text-sm mt-2">
              {project.category}
            </span>
          </DialogDescription>
        </DialogHeader>
        
        <div className="mt-4">
          <img 
            src={project.image} 
            alt={project.title} 
            className="w-full h-[250px] md:h-[350px] object-cover rounded-lg"
          />
        </div>
        
        <div className="mt-6 space-y-4">
          <div>
            <h4 className="text-lg font-semibold text-electric mb-2">Project Overview</h4>
            <p className="text-white/90">{project.description}</p>
          </div>
          
          {project.challenge && (
            <div>
              <h4 className="text-lg font-semibold text-electric mb-2">The Challenge</h4>
              <p className="text-white/90">{project.challenge}</p>
            </div>
          )}
          
          {project.solution && (
            <div>
              <h4 className="text-lg font-semibold text-electric mb-2">The Solution</h4>
              <p className="text-white/90">{project.solution}</p>
            </div>
          )}
          
          {project.results && (
            <div>
              <h4 className="text-lg font-semibold text-electric mb-2">Results</h4>
              <p className="text-white/90">{project.results}</p>
            </div>
          )}
          
          {project.tools && (
            <div>
              <h4 className="text-lg font-semibold text-electric mb-2">Tools & Technologies</h4>
              <div className="flex flex-wrap gap-2">
                {project.tools.map((tool, index) => (
                  <span 
                    key={index} 
                    className="px-3 py-1 bg-black/30 text-white/90 rounded-full text-sm"
                  >
                    {tool}
                  </span>
                ))}
              </div>
            </div>
          )}
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default ProjectModal;
