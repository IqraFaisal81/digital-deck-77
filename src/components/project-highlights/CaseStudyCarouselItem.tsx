
import { CaseStudy } from "@/types/caseStudy";

interface CaseStudyCarouselItemProps {
  caseStudy: CaseStudy;
  onClick: () => void;
}

const CaseStudyCarouselItem = ({ caseStudy, onClick }: CaseStudyCarouselItemProps) => {
  // Generate a consistent image based on the case study category/industry
  let imagePath = '';
  
  // Select image based on the case study category or tags to make them more relevant
  if (caseStudy.category === "Email Marketing" || caseStudy.tags.includes("Email Marketing")) {
    imagePath = '/lovable-uploads/e8bacddf-ae58-40e4-ab9a-679e21ec55db.png'; // Email marketing image
  } else if (caseStudy.category === "CRM Automation" || caseStudy.tags.includes("CRM Automation")) {
    imagePath = '/lovable-uploads/a2f6aa66-f631-443c-a7da-7418a3f06fb2.png'; // CRM dashboard image
  } else if (caseStudy.category === "Product Development" || caseStudy.tags.includes("Product Development")) {
    imagePath = '/lovable-uploads/c7722c5c-bb7d-46ae-a69b-9b2d19dfb790.png'; // Product development image
  } else if (caseStudy.tags.includes("UX/UI Strategy")) {
    imagePath = '/lovable-uploads/e4378bce-64c8-4f55-b680-35adfd4061c5.png'; // UI/UX design image
  } else if (caseStudy.tags.includes("Automation Strategy")) {
    imagePath = '/lovable-uploads/62db0c38-4d35-41c2-b6db-6dcc3d85ecac.png'; // Automation workflow image
  } else if (caseStudy.tags.includes("Lead Nurturing")) {
    imagePath = '/lovable-uploads/8298ac25-72ea-45df-8b02-fec826aa557c.png'; // Lead nurturing funnel image
  } else if (caseStudy.tags.includes("Market Research")) {
    imagePath = '/lovable-uploads/66fbb743-7c92-4338-9760-c6e38c8e404f.png'; // Market research charts image
  } else if (caseStudy.tags.includes("Customer Recovery")) {
    imagePath = '/lovable-uploads/35f482ac-5ef5-4d4e-bb5b-83bb739c6f81.png'; // Customer recovery concept
  } else if (caseStudy.tags.includes("Go High Level")) {
    imagePath = '/lovable-uploads/37cac9ff-58d3-4577-aa46-17ca9bc6d57d.png'; // Marketing platform dashboard
  } else {
    // Fallback image
    imagePath = '/lovable-uploads/da16c894-2606-4ce0-ac83-3e381213d0bf.png';
  }
  
  return (
    <div 
      onClick={onClick}
      className="rounded-xl overflow-hidden border border-gray-200 dark:border-gray-700 shadow-sm hover:shadow-md transition-all cursor-pointer h-full flex flex-col bg-white dark:bg-gray-800 group hover:scale-[1.02] duration-300"
    >
      <div className="h-48 overflow-hidden relative">
        <img 
          src={imagePath} 
          alt={`${caseStudy.client} - ${caseStudy.title}`} 
          className="w-full h-full object-cover transition-transform group-hover:scale-105 duration-300"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
      </div>
      
      <div className="bg-gradient-to-r from-blue-50 to-indigo-50 dark:from-blue-900/20 dark:to-indigo-900/20 p-4 border-b border-gray-100 dark:border-gray-700">
        <h3 className="font-bold text-xl bg-clip-text text-transparent bg-gradient-to-r from-black to-blue-600 dark:from-white dark:to-blue-400">{caseStudy.client}</h3>
        <p className="text-blue-600 dark:text-blue-400 text-sm">{caseStudy.title}</p>
      </div>
      
      <div className="p-4 flex-1 flex flex-col justify-between dark:text-gray-300">
        <div>
          <div className="flex flex-wrap gap-2 mb-4">
            {caseStudy.tags.slice(0, 2).map((tag, idx) => (
              <span key={idx} className="text-xs px-3 py-1 rounded-full bg-blue-50 text-blue-600 dark:bg-blue-900/30 dark:text-blue-300">
                {tag}
              </span>
            ))}
            {caseStudy.tags.length > 2 && (
              <span className="text-xs px-3 py-1 rounded-full bg-gray-50 text-gray-600 dark:bg-gray-700 dark:text-gray-300">
                +{caseStudy.tags.length - 2} more
              </span>
            )}
          </div>
        </div>
        
        <div className="mt-auto flex flex-wrap gap-2">
          <div className="bg-blue-50 dark:bg-blue-900/20 rounded-lg p-2 text-center flex-1">
            <div className="text-lg font-bold text-blue-600 dark:text-blue-400">{caseStudy.results.stat1.value}</div>
            <p className="text-xs text-gray-600 dark:text-gray-400">{caseStudy.results.stat1.label}</p>
          </div>
          <div className="bg-blue-50 dark:bg-blue-900/20 rounded-lg p-2 text-center flex-1">
            <div className="text-lg font-bold text-blue-600 dark:text-blue-400">{caseStudy.results.stat2.value}</div>
            <p className="text-xs text-gray-600 dark:text-gray-400">{caseStudy.results.stat2.label}</p>
          </div>
        </div>
      </div>
      
      <div className="p-3 bg-gray-50 dark:bg-gray-700 text-center group-hover:bg-blue-600 dark:group-hover:bg-blue-700 transition-colors duration-300">
        <span className="text-blue-600 dark:text-blue-400 text-sm font-medium group-hover:text-white dark:group-hover:text-white">View Details</span>
      </div>
    </div>
  );
};

export default CaseStudyCarouselItem;
