
export interface ProjectType {
  id: number;
  title: string;
  category: string;
  image: string;
  images?: string[]; // Support for multiple images
  description: string;
  challenge?: string;
  solution?: string;
  results?: string;
  tools?: string[];
  shortDescription?: string;
  technologies?: string[];
  url?: string;
  clientName?: string;
  relatedService?: string;
  beforeImage?: string; // For before/after comparisons
  afterImage?: string;
}
