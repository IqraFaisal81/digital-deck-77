
"use client";

import { TestimonialCarousel } from "@/components/ui/testimonial-carousel";
import { clients } from "@/data/clients";

export function TestimonialCarouselDemo() {
  // Transform client data into the format expected by TestimonialCarousel
  const testimonials = clients
    .filter(client => client.testimonial) // Only include clients with testimonials
    .map((client) => ({
      company: client.name,
      avatar: client.testimonial?.author ? client.testimonial.author.charAt(0) : undefined,
      name: client.testimonial?.author || "",
      role: client.testimonial?.position || "",
      review: client.testimonial?.quote || ""
    }));

  return (
    <TestimonialCarousel 
      testimonials={testimonials}
      avatarPath=""
    />
  );
}
