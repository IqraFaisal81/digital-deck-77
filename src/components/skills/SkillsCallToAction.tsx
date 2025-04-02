
import React from "react";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";

const SkillsCallToAction = () => {
  return (
    <div className="mt-16 text-center">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-50px" }}
        transition={{ duration: 0.6, delay: 0.5 }}
      >
        <Button 
          asChild
          className="bg-gradient-to-r from-blue-600 to-indigo-600 dark:from-blue-500 dark:to-indigo-500 
            text-white rounded-full px-8 py-6 shadow-lg hover:shadow-xl group transition-all duration-300 
            hover:-translate-y-1 hover:scale-105 border border-blue-400/20"
        >
          <a href="#services" className="inline-flex items-center">
            <span className="mr-2 font-medium">View my services</span>
            <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
          </a>
        </Button>
      </motion.div>
    </div>
  );
};

export default SkillsCallToAction;
