
"use client"

import * as React from "react"
import { Star } from "lucide-react"
import { cn } from "@/lib/utils"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { useIsMobile } from "@/hooks/use-mobile"

export interface TestimonialProps extends React.HTMLAttributes<HTMLDivElement> {
  name: string
  role: string
  company?: string
  testimonial: string
  rating?: number
  image?: string
}

const Testimonial = React.forwardRef<HTMLDivElement, TestimonialProps>(
  ({ name, role, company, testimonial, rating = 5, image, className, ...props }, ref) => {
    const isMobile = useIsMobile();
    
    return (
      <div
        ref={ref}
        className={cn(
          "relative overflow-hidden rounded-2xl border border-blue-200/50 dark:border-blue-800/30 bg-white dark:bg-gray-900 p-4 sm:p-7 transition-all group-hover:shadow-xl dark:group-hover:shadow-blue-900/5",
          className
        )}
        {...props}
      >
        <div className="absolute right-4 sm:right-6 top-2 sm:top-4 text-5xl sm:text-8xl font-serif text-blue-200 dark:text-blue-800/20 select-none group-hover:text-blue-300 dark:group-hover:text-blue-700/20 transition-colors duration-500">
          "
        </div>

        <div className="flex flex-col gap-4 sm:gap-5 justify-between h-full z-10 relative">
          {rating > 0 && (
            <div className="flex gap-1 transition-transform duration-500 group-hover:-translate-y-1">
              {Array.from({ length: 5 }).map((_, index) => (
                <Star
                  key={index}
                  size={isMobile ? 14 : 18}
                  className={cn(
                    "transition-all duration-500 group-hover:scale-110",
                    index < rating
                      ? "fill-yellow-400 text-yellow-400 group-hover:fill-yellow-300 group-hover:text-yellow-300"
                      : "fill-gray-200 text-gray-200 dark:fill-gray-700 dark:text-gray-700"
                  )}
                />
              ))}
            </div>
          )}

          <p className="text-pretty text-sm sm:text-base text-gray-600 dark:text-gray-300 leading-relaxed relative z-10 transition-all duration-500 group-hover:text-gray-800 dark:group-hover:text-gray-200">
            {testimonial}
          </p>

          <div className="flex items-center gap-3 sm:gap-4 justify-start mt-2">
            <div className="flex items-center gap-3 sm:gap-4">
              {image ? (
                <Avatar className="border-2 border-blue-200 dark:border-blue-800/30 h-10 w-10 sm:h-12 sm:w-12 group-hover:border-blue-300 dark:group-hover:border-blue-700/30 transition-colors duration-500 shadow-sm">
                  <AvatarImage src={image} alt={name} height={48} width={48} />
                  <AvatarFallback className="bg-blue-50 dark:bg-blue-900/30 text-blue-800 dark:text-blue-300">
                    {name[0]}
                  </AvatarFallback>
                </Avatar>
              ) : (
                <Avatar className="border-2 border-blue-200 dark:border-blue-800/30 h-10 w-10 sm:h-12 sm:w-12 group-hover:border-blue-300 dark:group-hover:border-blue-700/30 transition-colors duration-500 shadow-sm">
                  <AvatarFallback className="bg-blue-50 dark:bg-blue-900/30 text-blue-800 dark:text-blue-300">
                    {name[0]}
                  </AvatarFallback>
                </Avatar>
              )}

              <div className="flex flex-col">
                <h3 className="font-semibold text-sm sm:text-base text-gray-900 dark:text-white group-hover:text-blue-700 dark:group-hover:text-blue-300 transition-colors duration-500">{name}</h3>
                <p className="text-xs sm:text-sm text-gray-500 dark:text-gray-400">
                  {role}
                  {company && <span className="font-medium text-blue-600 dark:text-blue-400 group-hover:text-blue-500 dark:group-hover:text-blue-300 transition-colors duration-500"> @ {company}</span>}
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    )
  }
)
Testimonial.displayName = "Testimonial"

export { Testimonial }
