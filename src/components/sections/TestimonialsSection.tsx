
import React, { useState } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { clients } from "@/data/clients";
import { Star, Quote } from "lucide-react";

const TestimonialsSection = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  
  const testimonials = clients.filter(client => client.testimonial);
  
  const handleNext = () => {
    setActiveIndex((prevIndex) => (prevIndex + 1) % testimonials.length);
  };

  const handlePrev = () => {
    setActiveIndex((prevIndex) => (prevIndex - 1 + testimonials.length) % testimonials.length);
  };

  const renderStars = (rating: number = 5) => {
    return Array(5).fill(0).map((_, i) => (
      <Star 
        key={i} 
        className={`h-4 w-4 ${i < rating ? 'text-yellow-400 fill-yellow-400' : 'text-gray-300'}`} 
      />
    ));
  };

  return (
    <section id="testimonials" className="py-16 px-4 md:px-8 bg-blue-50">
      <div className="container mx-auto">
        <div className="flex flex-col items-center mb-10">
          <h2 className="text-3xl md:text-4xl font-bold mb-3 text-center text-gray-900">
            Client <span className="text-blue-600">Testimonials</span>
          </h2>
          <div className="w-16 h-1 bg-blue-600 mb-6"></div>
          <p className="text-gray-700 max-w-2xl mx-auto text-center mb-12">
            See what our clients have to say about working with us
          </p>
        </div>
        
        <div className="max-w-4xl mx-auto">
          {testimonials.length > 0 && (
            <div className="relative">
              <Card className="bg-white shadow-lg border-0 overflow-hidden">
                <CardContent className="p-0">
                  <div className="md:flex">
                    <div className="md:w-1/3 bg-blue-600 flex items-center justify-center p-8">
                      <img 
                        src={testimonials[activeIndex].logo} 
                        alt={testimonials[activeIndex].name} 
                        className="max-w-[120px] max-h-[80px] object-contain"
                      />
                    </div>
                    <div className="md:w-2/3 p-8 relative">
                      <Quote className="absolute top-6 left-6 h-8 w-8 text-blue-100 opacity-50" />
                      <div className="flex items-center mb-4">
                        {renderStars(testimonials[activeIndex].testimonial?.rating)}
                      </div>
                      
                      <blockquote className="text-gray-700 italic mb-4 relative z-10">
                        "{testimonials[activeIndex].testimonial?.quote}"
                      </blockquote>
                      
                      <div className="font-semibold text-gray-900">
                        {testimonials[activeIndex].testimonial?.author}
                      </div>
                      <div className="text-sm text-gray-500">
                        {testimonials[activeIndex].testimonial?.position}, {testimonials[activeIndex].name}
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
              
              {testimonials.length > 1 && (
                <div className="flex justify-center mt-6 gap-2">
                  <button 
                    onClick={handlePrev}
                    className="p-2 rounded-full bg-white border border-gray-200 shadow-sm hover:bg-gray-50"
                    aria-label="Previous testimonial"
                  >
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-gray-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                    </svg>
                  </button>
                  <button 
                    onClick={handleNext}
                    className="p-2 rounded-full bg-white border border-gray-200 shadow-sm hover:bg-gray-50"
                    aria-label="Next testimonial"
                  >
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-gray-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                  </button>
                </div>
              )}
              
              {testimonials.length > 1 && (
                <div className="flex justify-center mt-4">
                  {testimonials.map((_, index) => (
                    <button
                      key={index}
                      onClick={() => setActiveIndex(index)}
                      className={`mx-1 w-2 h-2 rounded-full ${
                        index === activeIndex ? 'bg-blue-600' : 'bg-gray-300'
                      }`}
                      aria-label={`Go to testimonial ${index + 1}`}
                    />
                  ))}
                </div>
              )}
            </div>
          )}
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
