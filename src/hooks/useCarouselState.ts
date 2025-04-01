
import { useState, useEffect, useCallback } from "react";
import type { CarouselApi } from "@/components/ui/carousel";

/**
 * Custom hook to manage carousel state and index tracking
 */
export const useCarouselState = () => {
  const [carouselApi, setCarouselApi] = useState<CarouselApi | null>(null);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (!carouselApi) return;
    
    // Update count when carousel is initialized
    setCount(carouselApi.scrollSnapList().length);
    
    const onSelect = () => {
      setCurrentIndex(carouselApi.selectedScrollSnap());
    };
    
    carouselApi.on("select", onSelect);
    // Make sure we get the initial index
    setCurrentIndex(carouselApi.selectedScrollSnap());
    
    return () => {
      carouselApi.off("select", onSelect);
    };
  }, [carouselApi]);

  const scrollPrev = useCallback(() => {
    if (carouselApi) carouselApi.scrollPrev();
  }, [carouselApi]);

  const scrollNext = useCallback(() => {
    if (carouselApi) carouselApi.scrollNext();
  }, [carouselApi]);

  const scrollTo = useCallback((index: number) => {
    if (carouselApi) carouselApi.scrollTo(index);
  }, [carouselApi]);

  return {
    carouselApi,
    setCarouselApi,
    currentIndex,
    count,
    scrollPrev,
    scrollNext,
    scrollTo
  };
};
