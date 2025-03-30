
import { 
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious
} from "@/components/ui/carousel";

const SEOAuditCarousel = () => {
  // Array of SEO dashboard images
  const seoImages = [
    "/lovable-uploads/3db53d79-7906-4ee7-b2a9-2a28b2c5212a.png",
    "/lovable-uploads/5a0ede87-2de2-421a-af7a-5e44aad3886d.png",
    "/lovable-uploads/9fef311f-0699-4e7c-b2d1-918ce9e8e960.png",
    "/lovable-uploads/fc1fe9d9-754d-4c31-a3fb-7c9d18da2df4.png",
    "/lovable-uploads/66fbb743-7c92-4338-9760-c6e38c8e404f.png"
  ];

  return (
    <Carousel
      opts={{
        align: "start",
        loop: true,
      }}
      className="w-full max-w-5xl mx-auto"
    >
      <CarouselContent>
        {seoImages.map((image, index) => (
          <CarouselItem key={index} className="md:basis-1/1 lg:basis-1/1">
            <div className="rounded-xl overflow-hidden border border-white/10">
              <img 
                src={image} 
                alt={`SEO Dashboard Example ${index + 1}`} 
                className="w-full h-auto" 
              />
            </div>
          </CarouselItem>
        ))}
      </CarouselContent>
      <div className="flex justify-center mt-4">
        <CarouselPrevious className="relative static left-0 right-auto translate-y-0 mr-2" />
        <CarouselNext className="relative static left-0 right-auto translate-y-0 ml-2" />
      </div>
    </Carousel>
  );
};

export default SEOAuditCarousel;
