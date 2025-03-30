
import { useState, useEffect } from "react";
import type { CarouselApi } from "@/components/ui/carousel";

/**
 * Custom hook to manage carousel state and index tracking
 */
export const useCarouselState = () => {
  const [carouselApi, setCarouselApi] = useState<CarouselApi | null>(null);
  const [currentIndex, setCurrentIndex] = useState(0);

  // Update current index when carousel changes
  useEffect(() => {
    if (!carouselApi) return;
    
    const onSelect = () => {
      setCurrentIndex(carouselApi.selectedScrollSnap());
    };
    
    carouselApi.on("select", onSelect);
    return () => {
      carouselApi.off("select", onSelect);
    };
  }, [carouselApi]);

  return {
    carouselApi,
    setCarouselApi,
    currentIndex
  };
};
