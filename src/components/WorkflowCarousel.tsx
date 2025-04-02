
import { useState } from "react";
import { 
  Carousel, 
  CarouselContent, 
  CarouselItem, 
  CarouselNext, 
  CarouselPrevious 
} from "@/components/ui/carousel";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogDescription } from "@/components/ui/dialog";
import { workflows } from "@/data/workflows";
import { useCarouselState } from "@/hooks/useCarouselState";

const WorkflowCarousel = () => {
  const [selectedWorkflow, setSelectedWorkflow] = useState<typeof workflows[0] | null>(null);
  const [modalOpen, setModalOpen] = useState(false);
  const { currentIndex, count, setCarouselApi } = useCarouselState();

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
        setApi={setCarouselApi}
      >
        <CarouselContent>
          {workflows.map((workflow) => (
            <CarouselItem key={workflow.id} className="basis-full md:basis-1/2 lg:basis-1/3 p-2">
              <div 
                className="cursor-pointer h-full bg-white dark:bg-gray-800 shadow-md rounded-lg border border-gray-200 dark:border-gray-700 overflow-hidden transition-all duration-300 hover:shadow-xl hover:border-blue-200 dark:hover:border-blue-700 group"
                onClick={() => openWorkflowModal(workflow)}
              >
                <div className="relative h-[200px] md:h-[220px] overflow-hidden">
                  <img 
                    src={workflow.image} 
                    alt={workflow.title} 
                    className="w-full h-full object-cover object-top transition-all duration-500 transform group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                </div>
                <div className="p-4 bg-gray-50 dark:bg-gray-800">
                  <h4 className="text-lg font-semibold text-gray-800 dark:text-gray-100 group-hover:text-royal dark:group-hover:text-electric transition-colors">{workflow.title}</h4>
                  <p className="text-gray-600 dark:text-gray-300 text-sm mt-1">{workflow.description}</p>
                </div>
              </div>
            </CarouselItem>
          ))}
        </CarouselContent>
        <CarouselPrevious className="left-2 bg-black/50 hover:bg-black/80 border-none text-white" />
        <CarouselNext className="right-2 bg-black/50 hover:bg-black/80 border-none text-white" />
      </Carousel>

      {/* Carousel Pagination Indicators */}
      <div className="flex justify-center mt-4 gap-1.5">
        {Array.from({ length: count }).map((_, index) => (
          <button
            key={index}
            className={`h-2 rounded-full transition-all ${
              currentIndex === index 
                ? "w-6 bg-royal dark:bg-electric" 
                : "w-2 bg-gray-300 dark:bg-gray-600"
            }`}
            aria-label={`Go to slide ${index + 1}`}
          />
        ))}
      </div>

      {/* Workflow Modal */}
      <Dialog open={modalOpen} onOpenChange={setModalOpen}>
        <DialogContent className="bg-white dark:bg-gray-800 max-w-4xl max-h-[90vh] overflow-y-auto">
          {selectedWorkflow && (
            <>
              <DialogHeader>
                <DialogTitle className="text-2xl font-bold text-gray-800 dark:text-gray-100">{selectedWorkflow.title}</DialogTitle>
                <DialogDescription className="text-gray-600 dark:text-gray-300">
                  {selectedWorkflow.description}
                </DialogDescription>
              </DialogHeader>
              
              <div className="mt-4 bg-gray-50 dark:bg-gray-700 p-2 rounded-lg">
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
