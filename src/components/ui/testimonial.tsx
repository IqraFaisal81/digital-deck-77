
"use client"

import * as React from "react"
import { Star } from "lucide-react"
import { cn } from "@/lib/utils"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"

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
    return (
      <div
        ref={ref}
        className={cn(
          "relative overflow-hidden rounded-2xl border border-blue-100/50 dark:border-blue-900/30 bg-white dark:bg-gray-900 p-6 transition-all hover:shadow-lg dark:hover:shadow-blue-900/5 md:p-8",
          className
        )}
        {...props}
      >
        <div className="absolute right-8 top-6 text-8xl font-serif text-blue-100 dark:text-blue-900/20 select-none">
          "
        </div>

        <div className="flex flex-col gap-4 justify-between h-full z-10 relative">
          {rating > 0 && (
            <div className="flex gap-1">
              {Array.from({ length: 5 }).map((_, index) => (
                <Star
                  key={index}
                  size={18}
                  className={cn(
                    "transition-transform hover:scale-110 duration-300",
                    index < rating
                      ? "fill-yellow-400 text-yellow-400"
                      : "fill-gray-200 text-gray-200 dark:fill-gray-700 dark:text-gray-700"
                  )}
                />
              ))}
            </div>
          )}

          <p className="text-pretty text-base text-gray-600 dark:text-gray-300 leading-relaxed relative z-10">
            {testimonial}
          </p>

          <div className="flex items-center gap-4 justify-start mt-2">
            <div className="flex items-center gap-4">
              {image ? (
                <Avatar className="border-2 border-blue-100 dark:border-blue-900/30 h-12 w-12">
                  <AvatarImage src={image} alt={name} height={48} width={48} />
                  <AvatarFallback className="bg-blue-50 dark:bg-blue-900/30 text-blue-800 dark:text-blue-300">
                    {name[0]}
                  </AvatarFallback>
                </Avatar>
              ) : (
                <Avatar className="border-2 border-blue-100 dark:border-blue-900/30 h-12 w-12">
                  <AvatarFallback className="bg-blue-50 dark:bg-blue-900/30 text-blue-800 dark:text-blue-300">
                    {name[0]}
                  </AvatarFallback>
                </Avatar>
              )}

              <div className="flex flex-col">
                <h3 className="font-semibold text-gray-900 dark:text-white">{name}</h3>
                <p className="text-sm text-gray-500 dark:text-gray-400">
                  {role}
                  {company && <span className="font-medium text-blue-600 dark:text-blue-400"> @ {company}</span>}
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
