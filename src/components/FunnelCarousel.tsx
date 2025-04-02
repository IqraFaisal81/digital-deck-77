
import React from 'react';
import { useCarouselState } from '@/hooks/useCarouselState';
import { funnels } from '@/data/workflows';
import { Button } from '@/components/ui/button';
import { ExternalLink } from 'lucide-react';
import { 
  Carousel, 
  CarouselContent, 
  CarouselItem, 
  CarouselNext, 
  CarouselPrevious 
} from '@/components/ui/carousel';
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogDescription, DialogFooter } from '@/components/ui/dialog';

const FunnelCarousel: React.FC = () => {
  const { 
    carouselApi,
    setCarouselApi,
    scrollPrev, 
    scrollNext 
  } = useCarouselState();

  const [selectedFunnel, setSelectedFunnel] = React.useState<typeof funnels[0] | null>(null);
  const [modalOpen, setModalOpen] = React.useState(false);

  const openFunnelModal = (funnel: typeof funnels[0]) => {
    setSelectedFunnel(funnel);
    setModalOpen(true);
  };

  return (
    <div className="w-full relative">
      {/* Decorative blurs */}
      <div className="absolute -right-4 top-1/4 w-32 h-32 bg-purple-100 dark:bg-purple-900/20 rounded-full blur-3xl opacity-30 -z-10"></div>
      <div className="absolute -left-4 bottom-1/4 w-32 h-32 bg-blue-100 dark:bg-blue-900/20 rounded-full blur-3xl opacity-30 -z-10"></div>
      
      <Carousel 
        opts={{ align: "start", loop: true }}
        className="w-full"
        setApi={setCarouselApi}
      >
        <CarouselContent className="-ml-4">
          {funnels.map((funnel, index) => (
            <CarouselItem key={index} className="pl-4 md:basis-1/2 lg:basis-1/3">
              <div 
                className="cursor-pointer h-full bg-gradient-to-br from-white to-purple-50 dark:from-gray-800 dark:to-gray-900 shadow-lg rounded-xl border border-purple-100 dark:border-purple-900/30 overflow-hidden transition-all duration-300 hover:shadow-xl hover:shadow-purple-200/50 dark:hover:shadow-purple-900/30 hover:scale-[1.03] group"
                onClick={() => openFunnelModal(funnel)}
              >
                <div className="relative h-[200px] md:h-[220px] overflow-hidden">
                  <img 
                    src={funnel.imageUrl} 
                    alt={funnel.title} 
                    className="w-full h-full object-cover object-top transition-all duration-500 transform group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end justify-center">
                    <span className="text-white mb-4 px-4 py-2 rounded-full bg-purple-600/80 text-sm">View Details</span>
                  </div>
                </div>
                <div className="p-5 bg-white/90 dark:bg-gray-800/90">
                  <h4 className="text-lg font-semibold text-gray-800 dark:text-white group-hover:text-purple-600 dark:group-hover:text-purple-400 transition-colors duration-300">{funnel.title}</h4>
                  <p className="text-gray-600 dark:text-gray-300 text-sm mt-2 line-clamp-2">{funnel.description}</p>
                </div>
              </div>
            </CarouselItem>
          ))}
        </CarouselContent>
        <CarouselPrevious className="left-2 bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm hover:bg-purple-50 dark:hover:bg-purple-900/50 border-purple-100 dark:border-purple-800 text-purple-600 dark:text-purple-400 shadow-lg" />
        <CarouselNext className="right-2 bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm hover:bg-purple-50 dark:hover:bg-purple-900/50 border-purple-100 dark:border-purple-800 text-purple-600 dark:text-purple-400 shadow-lg" />
      </Carousel>

      {/* Funnel Modal */}
      <Dialog open={modalOpen} onOpenChange={setModalOpen}>
        <DialogContent className="bg-gradient-to-br from-white to-purple-50 dark:from-gray-900 dark:to-gray-800 max-w-4xl max-h-[90vh] overflow-y-auto border border-purple-200 dark:border-purple-900/50 shadow-xl shadow-purple-100/50 dark:shadow-purple-900/20 rounded-xl">
          {selectedFunnel && (
            <>
              <DialogHeader>
                <DialogTitle className="text-2xl font-bold text-gray-800 dark:text-white bg-clip-text text-transparent bg-gradient-to-r from-purple-600 to-royal dark:from-purple-400 dark:to-royal">{selectedFunnel.title}</DialogTitle>
                <DialogDescription className="text-gray-600 dark:text-gray-300">
                  {selectedFunnel.description}
                </DialogDescription>
              </DialogHeader>
              
              <div className="mt-6 overflow-hidden rounded-lg">
                <img 
                  src={selectedFunnel.imageUrl} 
                  alt={selectedFunnel.title} 
                  className="w-full object-contain rounded-lg shadow-md border border-purple-100 dark:border-purple-900/30 transition-all duration-300 hover:shadow-lg"
                />
              </div>
              
              {/* Additional funnel details */}
              <div className="mt-6 grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="bg-purple-50/80 dark:bg-purple-900/20 p-4 rounded-lg border border-purple-100 dark:border-purple-800/30">
                  <h3 className="font-semibold text-purple-800 dark:text-purple-300 mb-2">Benefits</h3>
                  <ul className="space-y-2 text-gray-700 dark:text-gray-300 text-sm">
                    <li>• Higher conversion rates with psychological triggers</li>
                    <li>• Simplified customer journey with fewer roadblocks</li>
                    <li>• Beautiful design that builds trust and credibility</li>
                    <li>• Detailed analytics to optimize performance</li>
                  </ul>
                </div>
                <div className="bg-purple-50/80 dark:bg-purple-900/20 p-4 rounded-lg border border-purple-100 dark:border-purple-800/30">
                  <h3 className="font-semibold text-purple-800 dark:text-purple-300 mb-2">Features</h3>
                  <ul className="space-y-2 text-gray-700 dark:text-gray-300 text-sm">
                    <li>• Mobile-optimized responsive design</li>
                    <li>• A/B testing capabilities</li>
                    <li>• Easy integration with payment processors</li>
                    <li>• Automated email follow-ups</li>
                  </ul>
                </div>
              </div>
              
              <DialogFooter className="mt-6 flex gap-3">
                <Button
                  variant="outline"
                  className="border border-purple-200 dark:border-purple-800 text-purple-600 dark:text-purple-400 hover:bg-purple-50 dark:hover:bg-purple-900/50"
                  onClick={() => setModalOpen(false)}
                >
                  Close
                </Button>
                <Button
                  className="bg-gradient-to-r from-purple-600 to-royal dark:from-purple-500 dark:to-royal hover:from-royal hover:to-purple-600 dark:hover:from-royal dark:hover:to-purple-500 text-white group"
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

export default FunnelCarousel;
