
"use client";

import React from "react";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { cn } from "@/lib/utils";
import { ChevronLeft, ChevronRight, Star } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";

interface TestimonialProps {
  id: number;
  name: string;
  avatar?: string;
  company?: string;
  role?: string;
  description: string;
  rating?: number;
}

interface TestimonialCarouselProps {
  testimonials: TestimonialProps[];
  className?: string;
}

export function TestimonialCard({ 
  name, 
  avatar, 
  company, 
  role, 
  description, 
  rating = 5 
}: Omit<TestimonialProps, "id">) {
  return (
    <div className="h-full flex flex-col p-6 bg-white dark:bg-gray-800 rounded-xl shadow-sm border border-gray-100 dark:border-gray-700">
      <div className="flex items-center gap-4 mb-4">
        <Avatar className="h-12 w-12 border-2 border-primary/10">
          {avatar ? (
            <AvatarImage src={avatar} alt={name} />
          ) : (
            <AvatarFallback className="bg-gradient-to-br from-blue-500 to-indigo-600 text-white">
              {name.split(" ").map(n => n[0]).join("")}
            </AvatarFallback>
          )}
        </Avatar>
        <div>
          <h4 className="font-semibold text-lg">{name}</h4>
          {(role || company) && (
            <p className="text-sm text-muted-foreground">
              {role}{role && company && ", "}{company}
            </p>
          )}
        </div>
      </div>
      
      {rating > 0 && (
        <div className="flex mb-4">
          {Array.from({ length: 5 }).map((_, i) => (
            <Star 
              key={i} 
              size={16} 
              className={cn(
                "mr-0.5",
                i < rating 
                  ? "text-yellow-400 fill-yellow-400" 
                  : "text-gray-300 dark:text-gray-600"
              )} 
            />
          ))}
        </div>
      )}
      
      <blockquote className="text-gray-700 dark:text-gray-300 flex-grow">
        "{description}"
      </blockquote>
    </div>
  );
}

export function TestimonialCarousel({ 
  testimonials,
  className
}: TestimonialCarouselProps) {
  return (
    <div className={cn("relative", className)}>
      <Carousel
        opts={{
          align: "start",
          loop: true,
        }}
        className="w-full"
      >
        <CarouselContent>
          {testimonials.map((testimonial) => (
            <CarouselItem key={testimonial.id} className="md:basis-1/2 lg:basis-1/3 pl-4">
              <TestimonialCard
                name={testimonial.name}
                avatar={testimonial.avatar}
                company={testimonial.company}
                role={testimonial.role}
                description={testimonial.description}
                rating={testimonial.rating}
              />
            </CarouselItem>
          ))}
        </CarouselContent>
        <div className="flex justify-end gap-2 mt-4 mr-4">
          <CarouselPrevious className="static transform-none" />
          <CarouselNext className="static transform-none" />
        </div>
      </Carousel>
    </div>
  );
}
