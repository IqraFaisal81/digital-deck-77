
import { Filter } from "lucide-react";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

interface CategoryFilterProps {
  categories: string[];
  activeCategory: string;
  setActiveCategory: (category: string) => void;
}

const CategoryFilter = ({ categories, activeCategory, setActiveCategory }: CategoryFilterProps) => {
  return (
    <div className="flex items-center space-x-2">
      <Filter size={18} className="text-electric" />
      <span className="text-sm text-gray-600 mr-2">Filter by service:</span>
      <Tabs defaultValue="all" value={activeCategory} onValueChange={setActiveCategory}>
        <TabsList className="bg-electric/10 p-1 rounded-md">
          {categories.map((category) => (
            <TabsTrigger 
              key={category} 
              value={category}
              className="text-xs px-3 py-1 capitalize"
            >
              {category === "all" ? "All" : category}
            </TabsTrigger>
          ))}
        </TabsList>
      </Tabs>
    </div>
  );
};

export default CategoryFilter;
