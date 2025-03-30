
import { Button } from "@/components/ui/button";
import { Calendar } from "lucide-react";

const CallToAction = () => {
  return (
    <div className="max-w-5xl mx-auto bg-electric/10 p-8 rounded-2xl shadow-sm border border-electric/20">
      <h3 className="text-2xl font-bold text-center mb-6 text-gray-900">Ready for Your Own Success Story?</h3>
      <p className="text-center text-gray-700 mb-8 max-w-3xl mx-auto">
        Let's discuss how my expertise in automation, funnel building, and digital marketing can help your business achieve similar results.
      </p>
      <div className="text-center">
        <Button 
          className="bg-electric hover:bg-electric/80 text-white px-8 py-6 h-auto text-lg font-medium rounded-lg"
          asChild
        >
          <a href="#booking" className="flex items-center">
            <Calendar className="mr-2 h-5 w-5" />
            Book Your Strategy Call
          </a>
        </Button>
      </div>
    </div>
  );
};

export default CallToAction;
