
import { useRef } from "react";
import { motion } from "framer-motion";
import { services } from "@/data/services";
import { LightBulbIcon, FolderIcon, FileText } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useMediaQuery } from "@/hooks/use-mobile";

interface ServicesSectionProps {
  visibleSection: string | null;
  scrollToSection: (sectionId: string | null) => void;
}

const ServicesSection = ({ visibleSection, scrollToSection }: ServicesSectionProps) => {
  const cardRefs = useRef<Array<HTMLDivElement | null>>([]);
  const isMobile = useMediaQuery("(max-width: 768px)");
  
  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };
  
  const item = {
    hidden: { y: 20, opacity: 0 },
    show: { y: 0, opacity: 1 }
  };

  return (
    <section id="services" className="section-padding py-20 bg-blue-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-gray-900">My Services</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            I bring the perfect mix of technical skills, creative thinking, and strategic planning to help your business thrive online.
          </p>
        </div>
        
        <motion.div 
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-100px" }}
        >
          {services.map((service, index) => (
            <motion.div 
              key={index}
              ref={el => cardRefs.current[index] = el}
              variants={item}
              className="bg-white rounded-xl shadow-sm border border-gray-100 overflow-hidden hover:shadow-md transition-shadow duration-300 flex flex-col h-full"
            >
              <div className="p-6">
                <div className="w-12 h-12 rounded-full bg-blue-100 flex items-center justify-center mb-4">
                  <service.icon className="w-6 h-6 text-blue-600" />
                </div>
                <h3 className="text-xl font-semibold mb-3 text-gray-900">{service.title}</h3>
                <p className="text-gray-600 mb-6">{service.description}</p>
              </div>
              <div className="mt-auto p-6 pt-2">
                {service.sectionId && (
                  <Button 
                    className="w-full bg-blue-600 hover:bg-blue-700"
                    onClick={() => scrollToSection(service.sectionId)}
                  >
                    See Details
                  </Button>
                )}
              </div>
            </motion.div>
          ))}
          
          {/* Case Studies Card */}
          <motion.div 
            variants={item}
            className="bg-gradient-to-br from-blue-500 to-blue-700 rounded-xl shadow-sm border border-blue-400 overflow-hidden hover:shadow-md transition-shadow duration-300 flex flex-col h-full text-white"
          >
            <div className="p-6">
              <div className="w-12 h-12 rounded-full bg-white/20 flex items-center justify-center mb-4">
                <FileText className="w-6 h-6 text-white" />
              </div>
              <h3 className="text-xl font-semibold mb-3">Case Studies</h3>
              <p className="mb-6">See how my services have transformed real businesses with measurable results and proven strategies.</p>
            </div>
            <div className="mt-auto p-6 pt-2">
              <Button 
                className="w-full bg-white text-blue-700 hover:bg-blue-50"
                onClick={() => scrollToSection("case-studies")}
              >
                View Case Studies
              </Button>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default ServicesSection;
