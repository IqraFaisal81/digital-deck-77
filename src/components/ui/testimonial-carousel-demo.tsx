
"use client";

import { TestimonialCarousel } from "@/components/ui/testimonial-carousel";

const testimonials = [
  {
    company: "clerk",
    avatar: "nick-parsons.webp",
    name: "Nick Parsons",
    role: "Director of Marketing, Clerk",
    review: "Our team saved countless hours after switching to our solution",
  },
  {
    company: "raycast",
    avatar: "thomas-paul-mann.webp",
    name: "Thomas Paul Mann",
    role: "CEO, Raycast",
    review: "From data chaos to clarity - we deliver immediate results.",
  },
  {
    company: "vercel",
    avatar: "guillermo-rauch.webp",
    name: "Guillermo Rauch",
    role: "CEO, Vercel",
    review: "Delivers powerful insights that turn complex data into actionable decisions",
  },
  {
    company: "stripe",
    avatar: "patrick-collison.webp",
    name: "Patrick Collison",
    role: "CEO, Stripe",
    review: "A game-changing approach to streamlining business processes",
  },
  {
    company: "linear",
    avatar: "karri-saarinen.webp",
    name: "Karri Saarinen",
    role: "CEO, Linear",
    review: "Transformed our workflow with intelligent, intuitive solutions",
  }
];

export function TestimonialCarouselDemo() {
  return (
    <TestimonialCarousel
      testimonials={testimonials}
      companyLogoPath="https://assets.rapidui.dev/testimonials/companies/"
      avatarPath="https://assets.rapidui.dev/testimonials/people/"
    />
  );
}
