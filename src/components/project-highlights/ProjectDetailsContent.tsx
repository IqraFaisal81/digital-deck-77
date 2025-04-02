
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
      <div className="mt-4 bg-black/20 p-6 rounded-lg backdrop-blur-sm">
        <div className="overflow-hidden rounded-lg shadow-lg mb-6 transform transition-all duration-500 hover:scale-[1.02] hover:shadow-2xl">
          <img 
            src={project.image} 
            alt={project.title} 
            className="w-full h-auto rounded-lg hover:brightness-110 transition-all duration-500"
          />
        </div>
        
        <div className="space-y-6">
          <p className="text-white/90 leading-relaxed">{project.description}</p>
          
          <div className="bg-white/10 p-4 rounded-lg hover:bg-white/15 transition-all duration-300">
            <h4 className="text-lg font-semibold text-electric mb-2 flex items-center">
              <span className="bg-electric/20 p-1.5 rounded-full mr-2"></span>
              Challenge
            </h4>
            <p className="text-white/90 pl-7">{project.challenge}</p>
          </div>
          
          <div className="bg-white/10 p-4 rounded-lg hover:bg-white/15 transition-all duration-300">
            <h4 className="text-lg font-semibold text-electric mb-2 flex items-center">
              <span className="bg-electric/20 p-1.5 rounded-full mr-2"></span>
              Solution
            </h4>
            <p className="text-white/90 pl-7">{project.solution}</p>
          </div>
          
          <div className="bg-white/10 p-4 rounded-lg hover:bg-white/15 transition-all duration-300">
            <h4 className="text-lg font-semibold text-electric mb-2 flex items-center">
              <span className="bg-electric/20 p-1.5 rounded-full mr-2"></span>
              Results
            </h4>
            <p className="text-white/90 pl-7">{project.results}</p>
          </div>
          
          {project.technologies && project.technologies.length > 0 && (
            <div className="bg-white/10 p-4 rounded-lg hover:bg-white/15 transition-all duration-300">
              <h4 className="text-lg font-semibold text-electric mb-3 flex items-center">
                <span className="bg-electric/20 p-1.5 rounded-full mr-2"></span>
                Technologies Used
              </h4>
              <div className="flex flex-wrap gap-2 pl-7">
                {project.technologies.map((tech, index) => (
                  <span 
                    key={index}
                    className="text-sm px-3 py-1.5 rounded-full bg-gradient-to-r from-electric/30 to-royal/30 text-white backdrop-blur-sm border border-white/10 transition-all duration-300 hover:scale-105 hover:shadow-lg"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          )}
          
          <div className="mt-6 p-6 bg-gradient-to-br from-electric/20 to-royal/20 rounded-lg border border-white/20 transform transition-all duration-500 hover:scale-[1.02]">
            <h4 className="text-xl font-semibold text-white mb-3">Interested in a similar solution?</h4>
            <p className="text-white/90 mb-4">Let's discuss how I can help you achieve comparable results for your business.</p>
            <Button
              className="bg-gradient-to-r from-electric to-royal hover:from-royal hover:to-electric w-full text-white py-6 h-auto transition-all duration-500"
              asChild
              onClick={() => {
                setModalOpen(false);
                setTimeout(() => {
                  document.getElementById('booking')?.scrollIntoView({ behavior: 'smooth' });
                }, 300);
              }}
            >
              <a className="flex items-center justify-center group">
                <Calendar className="mr-2 h-5 w-5 group-hover:rotate-12 transition-transform duration-300" />
                <span className="group-hover:tracking-wider transition-all duration-300">Book a Consultation</span>
              </a>
            </Button>
          </div>
        </div>
      </div>
    </>
  );
};

export default ProjectDetailsContent;
