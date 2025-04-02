
import { Calendar } from "lucide-react";
import { Button } from "@/components/ui/button";

interface ProjectDetailsContentProps {
  project: {
    title: string;
    image: string;
    description: string;
    challenge: string;
    solution: string;
    results: string;
    technologies?: string[];
    clientName?: string;
    category?: string;
  };
  setModalOpen: (open: boolean) => void;
}

const ProjectDetailsContent = ({ project, setModalOpen }: ProjectDetailsContentProps) => {
  return (
    <>
      <div className="mt-4 bg-black/30 p-4 rounded-lg">
        <img 
          src={project.image} 
          alt={project.title} 
          className="w-full h-auto rounded-lg mb-6"
        />
        
        <div className="space-y-4">
          <p className="text-white/80">{project.description}</p>
          
          <div>
            <h4 className="text-lg font-semibold text-electric mb-2">Challenge</h4>
            <p className="text-white/80">{project.challenge}</p>
          </div>
          
          <div>
            <h4 className="text-lg font-semibold text-electric mb-2">Solution</h4>
            <p className="text-white/80">{project.solution}</p>
          </div>
          
          <div>
            <h4 className="text-lg font-semibold text-electric mb-2">Results</h4>
            <p className="text-white/80">{project.results}</p>
          </div>
          
          {project.technologies && project.technologies.length > 0 && (
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
          )}
          
          <div className="mt-4 p-4 bg-electric/10 rounded-lg border border-electric/20">
            <h4 className="text-lg font-semibold text-white mb-2">Interested in a similar solution?</h4>
            <p className="text-white/80 mb-4">Let's discuss how I can help you achieve comparable results for your business.</p>
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
                Book a Consultation
              </a>
            </Button>
          </div>
        </div>
      </div>
    </>
  );
};

export default ProjectDetailsContent;
