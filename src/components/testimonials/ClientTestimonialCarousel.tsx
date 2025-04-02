
"use client";

import { TestimonialCarousel } from "@/components/ui/testimonial";
import { clients } from "@/data/clients";
import { motion } from "framer-motion";

// Transform our client data into the format expected by the new carousel
const testimonials = clients
  .filter(client => client.testimonial) // Only include clients with testimonials
  .map((client, index) => ({
    id: index + 1,
    name: client.testimonial?.author || "",
    role: client.testimonial?.position || "",
    company: client.name,
    avatar: client.logo, // Use the client logo for the avatar
    description: client.testimonial?.quote || "",
    rating: client.testimonial?.rating || 5
  }));

export function ClientTestimonialCarousel() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6 }}
    >
      <TestimonialCarousel
        testimonials={testimonials}
        className="max-w-7xl mx-auto"
      />
    </motion.div>
  );
}
