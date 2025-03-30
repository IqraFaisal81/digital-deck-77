
export interface ProjectType {
  id: number;
  title: string;
  category: string;
  image: string;
  description: string;
  challenge?: string;
  solution?: string;
  results?: string;
  tools?: string[];
}
