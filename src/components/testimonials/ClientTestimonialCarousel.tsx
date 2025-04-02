
"use client";

import { TestimonialCarousel } from "@/components/ui/testimonial";
import { clients } from "@/data/clients";

// Transform our client data into the format expected by the new carousel
const testimonials = clients
  .filter(client => client.testimonial) // Only include clients with testimonials
  .map((client, index) => ({
    id: index + 1,
    name: client.testimonial?.author || "",
    role: client.testimonial?.position || "",
    company: client.name,
    avatar: "", // The current data doesn't have avatar URLs
    description: client.testimonial?.quote || "",
    rating: client.testimonial?.rating || 5
  }));

export function ClientTestimonialCarousel() {
  return (
    <TestimonialCarousel
      testimonials={testimonials}
      className="max-w-7xl mx-auto"
    />
  );
}
