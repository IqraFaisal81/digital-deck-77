
import { Mail, Phone, Github, Linkedin, Calendar } from "lucide-react";
import { Button } from "@/components/ui/button";

const ContactSection = () => {
  return (
    <section id="contact" className="section-padding min-h-screen flex items-center">
      <div className="container mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold mb-6 text-center bg-clip-text text-transparent bg-gradient-to-r from-black to-blue-600">Let&apos;s Work Together</h2>
        <div className="max-w-3xl mx-auto mb-12">
          <p className="text-white/80 text-center">
            Ready to transform your business with smart systems, automation, and marketing that works? Let&apos;s chat about how I can help you scale with less stress.
          </p>
          <div className="flex justify-center mt-6">
            <Button 
              className="bg-electric hover:bg-electric/80 text-white"
              asChild
              size="lg"
            >
              <a href="#booking" className="flex items-center">
                <Calendar className="mr-2 h-5 w-5" />
                Book a Free Consultation
              </a>
            </Button>
          </div>
        </div>
        
        <div className="max-w-4xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-black/20 backdrop-blur-sm rounded-xl p-6 border border-white/10 flex items-start space-x-4">
              <div className="bg-electric/20 p-3 rounded-full flex-shrink-0">
                <Mail className="text-electric" size={24} />
              </div>
              <div>
                <h3 className="font-semibold mb-1 bg-clip-text text-transparent bg-gradient-to-r from-white to-blue-300">Email Me</h3>
                <p className="text-white/70">iqrafaisal81@gmail.com</p>
              </div>
            </div>
            
            <div className="bg-black/20 backdrop-blur-sm rounded-xl p-6 border border-white/10 flex items-start space-x-4">
              <div className="bg-electric/20 p-3 rounded-full flex-shrink-0">
                <Phone className="text-electric" size={24} />
              </div>
              <div>
                <h3 className="font-semibold mb-1 bg-clip-text text-transparent bg-gradient-to-r from-white to-blue-300">Call Me</h3>
                <p className="text-white/70">+44 7555 859390</p>
              </div>
            </div>
            
            <div className="bg-black/20 backdrop-blur-sm rounded-xl p-6 border border-white/10">
              <h3 className="font-semibold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-white to-blue-300">Connect With Me</h3>
              <div className="flex gap-4">
                <a href="https://github.com" target="_blank" rel="noopener noreferrer" className="bg-black/30 p-3 rounded-full hover:bg-electric/20 transition-colors">
                  <Github size={20} className="text-white" />
                </a>
                <a href="https://www.linkedin.com/in/iqra-faisal-b6687919b/" target="_blank" rel="noopener noreferrer" className="bg-black/30 p-3 rounded-full hover:bg-electric/20 transition-colors">
                  <Linkedin size={20} className="text-white" />
                </a>
              </div>
            </div>
            
            <div className="bg-black/20 backdrop-blur-sm rounded-xl p-6 border border-white/10 flex items-center space-x-4">
              <div className="bg-electric/20 p-3 rounded-full flex-shrink-0">
                <Calendar className="text-electric" size={24} />
              </div>
              <div className="flex-1">
                <h3 className="font-semibold mb-1 bg-clip-text text-transparent bg-gradient-to-r from-white to-blue-300">Schedule a Meeting</h3>
                <p className="text-white/70 mb-3">Book a 30-minute consultation</p>
                <Button className="w-full bg-electric hover:bg-electric/80" asChild size="sm">
                  <a href="#booking">Book Now</a>
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
