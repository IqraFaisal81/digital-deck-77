
import { type CarouselApi } from "@/components/ui/carousel";

interface CarouselPaginationProps {
  carouselApi: CarouselApi | null;
  currentIndex: number;
  items: any[];
}

const CarouselPagination = ({ carouselApi, currentIndex, items }: CarouselPaginationProps) => {
  return (
    <div className="flex items-center space-x-2">
      {items.map((_, idx) => (
        <button 
          key={idx}
          aria-label={`Go to slide ${idx + 1}`}
          className={`block h-2 w-2 rounded-full cursor-pointer transition-all ${
            currentIndex === idx ? 'bg-electric w-4' : 'bg-white/20'
          }`}
          onClick={() => carouselApi?.scrollTo(idx)}
        />
      ))}
    </div>
  );
};

export default CarouselPagination;
