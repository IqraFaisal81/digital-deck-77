
import { useState } from "react";
import { 
  Carousel, 
  CarouselContent, 
  CarouselItem, 
  CarouselNext, 
  CarouselPrevious 
} from "@/components/ui/carousel";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogDescription, DialogFooter } from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { workflows } from "@/data/workflows";
import { ExternalLink, X } from "lucide-react";

const WorkflowCarousel = () => {
  const [selectedWorkflow, setSelectedWorkflow] = useState<typeof workflows[0] | null>(null);
  const [modalOpen, setModalOpen] = useState(false);

  const openWorkflowModal = (workflow: typeof workflows[0]) => {
    setSelectedWorkflow(workflow);
    setModalOpen(true);
  };

  return (
    <div className="w-full relative">
      {/* Decorative blurs */}
      <div className="absolute -right-4 top-1/4 w-32 h-32 bg-blue-100 dark:bg-blue-900/20 rounded-full blur-3xl opacity-30 -z-10"></div>
      <div className="absolute -left-4 bottom-1/4 w-32 h-32 bg-purple-100 dark:bg-purple-900/20 rounded-full blur-3xl opacity-30 -z-10"></div>
      
      <Carousel
        opts={{
          align: "start",
          loop: true,
        }}
        className="w-full"
      >
        <CarouselContent>
          {workflows.map((workflow) => (
            <CarouselItem key={workflow.id} className="basis-full md:basis-1/2 lg:basis-1/3 p-3">
              <div 
                className="cursor-pointer h-full bg-gradient-to-br from-white to-blue-50 dark:from-gray-800 dark:to-gray-900 shadow-lg rounded-xl border border-blue-100 dark:border-blue-900/30 overflow-hidden transition-all duration-300 hover:shadow-xl hover:shadow-blue-200/50 dark:hover:shadow-blue-900/30 hover:scale-[1.03] group"
                onClick={() => openWorkflowModal(workflow)}
              >
                <div className="relative h-[200px] md:h-[220px] overflow-hidden">
                  <img 
                    src={workflow.image} 
                    alt={workflow.title} 
                    className="w-full h-full object-cover object-top transition-all duration-500 transform group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end justify-center">
                    <span className="text-white mb-4 px-4 py-2 rounded-full bg-blue-600/80 text-sm">View Details</span>
                  </div>
                </div>
                <div className="p-5 bg-white/90 dark:bg-gray-800/90">
                  <h4 className="text-lg font-semibold text-gray-800 dark:text-white group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors duration-300">{workflow.title}</h4>
                  <p className="text-gray-600 dark:text-gray-300 text-sm mt-2 line-clamp-2">{workflow.description}</p>
                </div>
              </div>
            </CarouselItem>
          ))}
        </CarouselContent>
        <CarouselPrevious className="left-2 bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm hover:bg-blue-50 dark:hover:bg-blue-900/50 border-blue-100 dark:border-blue-800 text-blue-600 dark:text-blue-400 shadow-lg" />
        <CarouselNext className="right-2 bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm hover:bg-blue-50 dark:hover:bg-blue-900/50 border-blue-100 dark:border-blue-800 text-blue-600 dark:text-blue-400 shadow-lg" />
      </Carousel>

      {/* Workflow Modal */}
      <Dialog open={modalOpen} onOpenChange={setModalOpen}>
        <DialogContent className="bg-gradient-to-br from-white to-blue-50 dark:from-gray-900 dark:to-gray-800 max-w-4xl max-h-[90vh] overflow-y-auto border border-blue-200 dark:border-blue-900/50 shadow-xl shadow-blue-100/50 dark:shadow-blue-900/20 rounded-xl">
          {selectedWorkflow && (
            <>
              <DialogHeader>
                <DialogTitle className="text-2xl font-bold text-gray-800 dark:text-white bg-clip-text text-transparent bg-gradient-to-r from-royal to-blue-600 dark:from-electric dark:to-royal">{selectedWorkflow.title}</DialogTitle>
                <DialogDescription className="text-gray-600 dark:text-gray-300">
                  {selectedWorkflow.description}
                </DialogDescription>
              </DialogHeader>
              
              <div className="mt-6 overflow-hidden rounded-lg">
                <img 
                  src={selectedWorkflow.image} 
                  alt={selectedWorkflow.title} 
                  className="w-full object-contain rounded-lg shadow-md border border-blue-100 dark:border-blue-900/30 transition-all duration-300 hover:shadow-lg"
                />
              </div>
              
              {/* Additional workflow details */}
              <div className="mt-6 grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="bg-blue-50/80 dark:bg-blue-900/20 p-4 rounded-lg border border-blue-100 dark:border-blue-800/30">
                  <h3 className="font-semibold text-blue-800 dark:text-blue-300 mb-2">Benefits</h3>
                  <ul className="space-y-2 text-gray-700 dark:text-gray-300 text-sm">
                    <li>• Saves time with automated follow-ups</li>
                    <li>• Reduces manual data entry errors</li>
                    <li>• Increases lead conversion rates</li>
                    <li>• Provides consistent customer experience</li>
                  </ul>
                </div>
                <div className="bg-blue-50/80 dark:bg-blue-900/20 p-4 rounded-lg border border-blue-100 dark:border-blue-800/30">
                  <h3 className="font-semibold text-blue-800 dark:text-blue-300 mb-2">Integration</h3>
                  <ul className="space-y-2 text-gray-700 dark:text-gray-300 text-sm">
                    <li>• Connects with Go High Level platform</li>
                    <li>• Works with existing CRM systems</li>
                    <li>• API available for custom integration</li>
                    <li>• Supports webhook triggers</li>
                  </ul>
                </div>
              </div>
              
              <DialogFooter className="mt-6 flex gap-3">
                <Button
                  variant="outline"
                  className="border border-blue-200 dark:border-blue-800 text-blue-600 dark:text-blue-400 hover:bg-blue-50 dark:hover:bg-blue-900/50"
                  onClick={() => setModalOpen(false)}
                >
                  Close
                </Button>
                <Button
                  className="bg-gradient-to-r from-royal to-blue-600 dark:from-electric dark:to-royal hover:from-blue-600 hover:to-royal dark:hover:from-royal dark:hover:to-electric text-white group"
                  onClick={() => {
                    setModalOpen(false);
                    document.getElementById('booking')?.scrollIntoView({ behavior: 'smooth' });
                  }}
                >
                  <span>Book a Consultation</span>
                  <ExternalLink className="ml-2 w-4 h-4 group-hover:rotate-12 transition-transform duration-300" />
                </Button>
              </DialogFooter>
            </>
          )}
        </DialogContent>
      </Dialog>
    </div>
  );
};

export default WorkflowCarousel;
