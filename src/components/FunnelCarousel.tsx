import React from 'react';
import { useCarouselState } from '@/hooks/useCarouselState';
import { funnels } from '@/data/workflows';
import { Button } from '@/components/ui/button';
import { 
  Carousel, 
  CarouselContent, 
  CarouselItem, 
  CarouselNext, 
  CarouselPrevious 
} from '@/components/ui/carousel';

const FunnelCarousel: React.FC = () => {
  const { 
    emblaRef, 
    scrollPrev, 
    scrollNext 
  } = useCarouselState();

  return (
    <div className="relative">
      <Carousel 
        opts={{ align: "start", loop: true }}
        className="w-full"
      >
        <CarouselContent ref={emblaRef} className="-ml-4">
          {funnels.map((funnel, index) => (
            <CarouselItem key={index} className="pl-4 md:basis-1/2 lg:basis-1/3">
              <div 
                className="cursor-pointer h-full bg-white dark:bg-gray-800 shadow-md dark:shadow-lg rounded-lg border border-gray-200 dark:border-gray-700 overflow-hidden transition-all duration-300 hover:shadow-lg dark:hover:shadow-xl"
              >
                <a href={funnel.url} target="_blank" rel="noopener noreferrer" className="block h-full">
                  <div className="relative">
                    <img
                      src={funnel.imageUrl}
                      alt={funnel.title}
                      className="w-full h-48 object-cover rounded-t-lg"
                    />
                    <div className="absolute top-0 left-0 w-full h-full bg-black/20"></div>
                  </div>
                  <div className="p-4">
                    <h3 className="text-lg font-semibold text-gray-800 dark:text-gray-200 mb-2">{funnel.title}</h3>
                    <p className="text-gray-600 dark:text-gray-300 text-sm">{funnel.description}</p>
                  </div>
                </a>
              </div>
            </CarouselItem>
          ))}
        </CarouselContent>
        <div className="absolute -top-12 right-0 flex items-center">
          <CarouselPrevious onClick={scrollPrev} />
          <CarouselNext onClick={scrollNext} />
        </div>
      </Carousel>
    </div>
  );
};

export default FunnelCarousel;
