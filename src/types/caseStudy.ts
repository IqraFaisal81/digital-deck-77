
export interface CaseStudy {
  id: number;
  title: string;
  client: string;
  category: string;
  image: string;
  challenge: string;
  strategy: string[];
  results: {
    stat1: { value: string; label: string; };
    stat2: { value: string; label: string; };
    stat3?: { value: string; label: string; };
  };
  tags: string[];
}
