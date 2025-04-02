
"use client";

import { TestimonialCarousel } from "@/components/ui/testimonial-carousel";
import { clients } from "@/data/clients";

// Transform our client data into the format expected by the carousel
const testimonials = clients
  .filter(client => client.testimonial) // Only include clients with testimonials
  .map(client => ({
    company: client.name.toLowerCase().replace(/\s+/g, '-'),
    logo: client.logo,
    name: client.testimonial?.author || "",
    role: client.testimonial?.position || "",
    review: client.testimonial?.quote || "",
    customLogo: true, // Flag to use our own logos instead of the default ones
    rating: Math.floor(Math.random() * 2) + 4 // Random rating between 4-5 stars for demo
  }));

export function ClientTestimonialCarousel() {
  return (
    <TestimonialCarousel
      testimonials={testimonials}
      companyLogoPath="" // Not needed since we use our own logos
      avatarPath="" // Not needed since we don't have avatars
      useCustomLogo={true}
    />
  );
}
