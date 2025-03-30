
import React from "react";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { Card, CardContent } from "@/components/ui/card";
import { AspectRatio } from "@/components/ui/aspect-ratio";
import { ExternalLink } from "lucide-react";
import { Button } from "@/components/ui/button";

const LovableProjectsCarousel = () => {
  const projects = [
    {
      name: "ChatGenius Embedify",
      description: "AI chatbot creation platform with no-code required",
      image: "https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80",
      url: "https://preview--chatgenius-embedify.lovable.app/"
    },
    {
      name: "SupaFriendly Dashboard",
      description: "Social media analytics with Supabase integration",
      image: "https://images.unsplash.com/photo-1498050108023-c5249f4df085?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80",
      url: "https://preview--friendly-supabase-86.lovable.app/"
    },
    {
      name: "PromptVault Pilot",
      description: "AI prompt management for teams and organizations",
      image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80",
      url: "https://preview--promptvaultpilot.lovable.app/"
    }
  ];

  return (
    <div className="relative w-full max-w-5xl mx-auto px-4 md:px-6">
      <Carousel
        opts={{
          align: "start",
          loop: true,
        }}
        className="w-full"
      >
        <CarouselContent>
          {projects.map((project, index) => (
            <CarouselItem
              key={index}
              className="md:basis-1/2 lg:basis-1/3 h-full"
            >
              <div className="p-1 h-full">
                <Card className="overflow-hidden border border-white/10 bg-black/30 backdrop-blur-sm rounded-lg shadow-lg h-full">
                  <CardContent className="p-0">
                    <AspectRatio ratio={16 / 9} className="bg-muted">
                      <img
                        src={project.image}
                        alt={project.name}
                        className="object-cover w-full h-full"
                      />
                    </AspectRatio>
                    <div className="p-6 space-y-4">
                      <h3 className="text-xl font-semibold text-white">{project.name}</h3>
                      <p className="text-white/70">{project.description}</p>
                      <Button 
                        variant="outline" 
                        className="w-full border-white/10 hover:bg-white/10 flex items-center justify-center gap-2"
                        asChild
                      >
                        <a href={project.url} target="_blank" rel="noopener noreferrer">
                          View Demo <ExternalLink size={14} />
                        </a>
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </CarouselItem>
          ))}
        </CarouselContent>
        <CarouselPrevious className="left-0 md:-left-12 bg-black/50 text-white border-white/10 hover:bg-black/70" />
        <CarouselNext className="right-0 md:-right-12 bg-black/50 text-white border-white/10 hover:bg-black/70" />
      </Carousel>
    </div>
  );
};

export default LovableProjectsCarousel;
