
import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { sectionIds } from "@/data/services";
import { projectHighlights } from "./ProjectData";

interface ProjectCardProps {
  project: typeof projectHighlights[0];
  scrollToServiceSection: (sectionId: string | null) => void;
  openProjectModal: (project: typeof projectHighlights[0]) => void;
}

const ProjectCard = ({ project, scrollToServiceSection, openProjectModal }: ProjectCardProps) => {
  return (
    <div 
      className="bg-black/20 backdrop-blur-sm rounded-xl overflow-hidden border border-white/10 hover:border-electric/30 transition-all hover:shadow-lg hover:shadow-electric/20 hover:scale-[1.02] cursor-pointer h-full flex flex-col"
      onClick={() => openProjectModal(project)}
    >
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
        <div className="flex items-center justify-between">
          <span className="text-xs text-white/50">
            Related: {sectionIds.includes(project.relatedService) ? 
              <button 
                onClick={(e) => {
                  e.stopPropagation();
                  scrollToServiceSection(project.relatedService);
                }}
                className="text-electric hover:underline"
              >
                {project.relatedService.replace("-", " ")}
              </button> : 
              project.relatedService
            }
          </span>
          <Button 
            variant="ghost" 
            size="sm"
            className="text-electric hover:text-electric/80 p-0 flex items-center"
            onClick={(e) => {
              e.stopPropagation();
              scrollToServiceSection(project.relatedService);
            }}
          >
            Go to Service <ArrowRight className="ml-1 h-4 w-4" />
          </Button>
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;
