
import { useState, useEffect } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { workflows } from "@/data/workflows";
import { 
  Carousel, 
  CarouselContent, 
  CarouselItem, 
  CarouselNext, 
  CarouselPrevious 
} from "@/components/ui/carousel";
import { Button } from "@/components/ui/button";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogDescription } from "@/components/ui/dialog";

const WorkflowCarousel = () => {
  const [selectedWorkflow, setSelectedWorkflow] = useState<typeof workflows[0] | null>(null);
  const [modalOpen, setModalOpen] = useState(false);

  const openWorkflowModal = (workflow: typeof workflows[0]) => {
    setSelectedWorkflow(workflow);
    setModalOpen(true);
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
          {workflows.map((workflow) => (
            <CarouselItem key={workflow.id} className="basis-full md:basis-1/2 lg:basis-1/3 p-2">
              <div 
                className="workflow-card cursor-pointer h-full bg-white shadow-md rounded-lg border border-gray-200 overflow-hidden transition-all duration-300 hover:shadow-lg"
                onClick={() => openWorkflowModal(workflow)}
              >
                <div className="relative h-[200px] md:h-[220px] overflow-hidden">
                  <img 
                    src={workflow.image} 
                    alt={workflow.title} 
                    className="w-full h-full object-cover object-top transition-all duration-300 transform hover:scale-110"
                  />
                </div>
                <div className="p-4 bg-gray-50">
                  <h4 className="text-lg font-semibold text-black">{workflow.title}</h4>
                  <p className="text-gray-800 text-sm mt-1">{workflow.description}</p>
                </div>
              </div>
            </CarouselItem>
          ))}
        </CarouselContent>
        <CarouselPrevious className="left-2 bg-black/50 hover:bg-black/80 border-none" />
        <CarouselNext className="right-2 bg-black/50 hover:bg-black/80 border-none" />
      </Carousel>

      {/* Workflow Modal */}
      <Dialog open={modalOpen} onOpenChange={setModalOpen}>
        <DialogContent className="bg-royal/90 backdrop-blur-xl border border-white/10 text-white max-w-4xl max-h-[90vh] overflow-y-auto">
          {selectedWorkflow && (
            <>
              <DialogHeader>
                <DialogTitle className="text-2xl font-bold">{selectedWorkflow.title}</DialogTitle>
                <DialogDescription className="text-white/80">
                  {selectedWorkflow.description}
                </DialogDescription>
              </DialogHeader>
              
              <div className="mt-4 bg-black/30 p-2 rounded-lg">
                <img 
                  src={selectedWorkflow.image} 
                  alt={selectedWorkflow.title} 
                  className="w-full object-contain rounded-lg"
                />
              </div>
            </>
          )}
        </DialogContent>
      </Dialog>
    </div>
  );
};

export default WorkflowCarousel;

