
export interface ClientType {
  name: string;
  logo: string;
  website: string;
  description: string;
  testimonial?: {
    quote: string;
    author: string;
    position: string;
    rating?: number;
  };
}
