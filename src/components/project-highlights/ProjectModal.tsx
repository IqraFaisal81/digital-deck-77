
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
      <DialogContent className="bg-royal/90 backdrop-blur-xl border border-white/10 text-white max-w-4xl max-h-[90vh] overflow-y-auto">
        <DialogHeader>
          <DialogTitle className="text-2xl font-bold">{selectedProject.title}</DialogTitle>
          <DialogDescription className="text-white/80">
            {selectedProject.category} for {selectedProject.clientName}
          </DialogDescription>
        </DialogHeader>
        
        <ProjectDetailsContent project={selectedProject} setModalOpen={setModalOpen} />
        
        <DialogFooter className="mt-6 flex justify-between">
          <Button 
            variant="ghost"
            className="border border-white/20 hover:bg-white/10"
            onClick={() => {
              if (selectedProject.relatedService) {
                setModalOpen(false);
                setTimeout(() => {
                  scrollToServiceSection(selectedProject.relatedService);
                }, 300);
              }
            }}
          >
            View Related Service
          </Button>
          
          <Button 
            onClick={() => setModalOpen(false)}
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
