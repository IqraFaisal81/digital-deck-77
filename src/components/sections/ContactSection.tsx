
import { Mail, Phone, Github, Linkedin, Calendar } from "lucide-react";
import { Button } from "@/components/ui/button";

const ContactSection = () => {
  return (
    <section id="contact" className="section-padding min-h-screen flex items-center bg-gradient-to-b from-gray-50 to-blue-50 dark:from-gray-900 dark:to-black">
      <div className="container mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold mb-6 text-center bg-clip-text text-transparent bg-gradient-to-r from-royal to-electric dark:from-white dark:to-blue-400">Let&apos;s Work Together</h2>
        <div className="max-w-3xl mx-auto mb-12">
          <p className="text-gray-700 dark:text-white/80 text-center">
            Ready to transform your business with smart systems, automation, and marketing that works? Let&apos;s chat about how I can help you scale with less stress.
          </p>
          <div className="flex justify-center mt-6">
            <Button 
              className="bg-blue-600 hover:bg-blue-500 text-white"
              asChild
              size="lg"
            >
              <a href="https://calendly.com/iqrafaisal81/discovery-call?month=2025-04" target="_blank" rel="noopener noreferrer" className="flex items-center">
                <Calendar className="mr-2 h-5 w-5" />
                Book a Free Consultation
              </a>
            </Button>
          </div>
        </div>
        
        <div className="max-w-4xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-white/80 dark:bg-black/20 backdrop-blur-sm rounded-xl p-6 border border-gray-200 dark:border-white/10 shadow-sm flex items-start space-x-4">
              <div className="bg-blue-100 dark:bg-blue-500/20 p-3 rounded-full flex-shrink-0">
                <Mail className="text-blue-600 dark:text-blue-400" size={24} />
              </div>
              <div>
                <h3 className="font-semibold mb-1 text-gray-900 dark:text-white">Email Me</h3>
                <p className="text-gray-700 dark:text-white/70">iqrafaisal81@gmail.com</p>
              </div>
            </div>
            
            <div className="bg-white/80 dark:bg-black/20 backdrop-blur-sm rounded-xl p-6 border border-gray-200 dark:border-white/10 shadow-sm flex items-start space-x-4">
              <div className="bg-blue-100 dark:bg-blue-500/20 p-3 rounded-full flex-shrink-0">
                <Phone className="text-blue-600 dark:text-blue-400" size={24} />
              </div>
              <div>
                <h3 className="font-semibold mb-1 text-gray-900 dark:text-white">Call Me</h3>
                <p className="text-gray-700 dark:text-white/70">+44 7555 859390</p>
              </div>
            </div>
            
            <div className="bg-white/80 dark:bg-black/20 backdrop-blur-sm rounded-xl p-6 border border-gray-200 dark:border-white/10 shadow-sm">
              <h3 className="font-semibold mb-4 text-gray-900 dark:text-white">Connect With Me</h3>
              <div className="flex gap-4">
                <a href="https://github.com/IqraFaisal81" target="_blank" rel="noopener noreferrer" className="bg-gray-100 dark:bg-black/30 p-3 rounded-full hover:bg-blue-100 dark:hover:bg-blue-500/20 transition-colors">
                  <Github size={20} className="text-gray-700 dark:text-white" />
                </a>
                <a href="https://www.linkedin.com/in/iqra-faisal-b6687919b/" target="_blank" rel="noopener noreferrer" className="bg-gray-100 dark:bg-black/30 p-3 rounded-full hover:bg-blue-100 dark:hover:bg-blue-500/20 transition-colors">
                  <Linkedin size={20} className="text-gray-700 dark:text-white" />
                </a>
              </div>
            </div>
            
            <div className="bg-white/80 dark:bg-black/20 backdrop-blur-sm rounded-xl p-6 border border-gray-200 dark:border-white/10 shadow-sm flex items-center space-x-4">
              <div className="bg-blue-100 dark:bg-blue-500/20 p-3 rounded-full flex-shrink-0">
                <Calendar className="text-blue-600 dark:text-blue-400" size={24} />
              </div>
              <div className="flex-1">
                <h3 className="font-semibold mb-1 text-gray-900 dark:text-white">Schedule a Meeting</h3>
                <p className="text-gray-700 dark:text-white/70 mb-3">Book a 30-minute consultation</p>
                <Button className="w-full bg-blue-600 hover:bg-blue-500" asChild size="sm">
                  <a href="https://calendly.com/iqrafaisal81/discovery-call?month=2025-04" target="_blank" rel="noopener noreferrer">Book Now</a>
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
