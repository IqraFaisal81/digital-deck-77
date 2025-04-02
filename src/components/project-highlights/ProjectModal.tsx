
import { Calendar } from "lucide-react";
import { Button } from "@/components/ui/button";
import { 
  Dialog, 
  DialogContent, 
  DialogHeader, 
  DialogTitle, 
  DialogDescription, 
  DialogFooter 
} from "@/components/ui/dialog";
import ProjectDetailsContent from "./ProjectDetailsContent";

interface ProjectModalProps {
  modalOpen: boolean;
  setModalOpen: (open: boolean) => void;
  selectedProject: any;
  scrollToServiceSection: (sectionId: string | null) => void;
}

const ProjectModal = ({ 
  modalOpen, 
  setModalOpen, 
  selectedProject, 
  scrollToServiceSection 
}: ProjectModalProps) => {
  if (!selectedProject) return null;

  return (
    <Dialog open={modalOpen} onOpenChange={setModalOpen}>
      <DialogContent className="bg-gradient-to-br from-royal/95 to-electric/95 backdrop-blur-xl border border-white/20 text-white max-w-4xl max-h-[90vh] overflow-y-auto rounded-xl shadow-[0_10px_40px_-5px_rgba(0,0,0,0.3)] animate-in fade-in-0 zoom-in-95 duration-300">
        <DialogHeader className="space-y-2">
          <DialogTitle className="text-2xl md:text-3xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-white to-blue-200">{selectedProject.title}</DialogTitle>
          <DialogDescription className="text-white/90 text-base">
            {selectedProject.category} for {selectedProject.clientName}
          </DialogDescription>
        </DialogHeader>
        
        <ProjectDetailsContent project={selectedProject} setModalOpen={setModalOpen} />
        
        <DialogFooter className="mt-6 flex flex-col sm:flex-row justify-between gap-4">
          <Button 
            variant="ghost"
            className="bg-white/10 hover:bg-white/20 border border-white/20 transition-all duration-300 hover:scale-105 group"
            onClick={() => {
              if (selectedProject.relatedService) {
                setModalOpen(false);
                setTimeout(() => {
                  scrollToServiceSection(selectedProject.relatedService);
                }, 300);
              }
            }}
          >
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-white to-blue-200 group-hover:from-blue-200 group-hover:to-white transition-all duration-300">
              View Related Service
            </span>
          </Button>
          
          <Button 
            onClick={() => setModalOpen(false)}
            variant="ghost"
            className="bg-white/10 hover:bg-white/20 border border-white/20 transition-all duration-300 hover:scale-105"
          >
            Close
          </Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
};

export default ProjectModal;
