
"use client";

import { TestimonialCarousel, Testimonial } from "@/components/ui/testimonial-carousel-new";
import { clients } from "@/data/clients";

const testimonialData: Testimonial[] = clients
  .filter(client => client.testimonial) // Only include clients with testimonials
  .map((client, index) => ({
    id: index,
    name: client.testimonial?.author || "",
    avatar: client.logo, // Using client logo as avatar
    description: client.testimonial?.quote || "",
  }));

export function TestimonialCarouselDemo() {
  return (
    <TestimonialCarousel
      testimonials={testimonialData}
      className="mx-auto max-w-md"
      showArrows={true}
      showDots={true}
    />
  );
}
