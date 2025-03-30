
import { Mail, Phone, Github, Linkedin } from "lucide-react";
import ContactForm from "@/components/ContactForm";

const ContactSection = () => {
  return (
    <section id="contact" className="section-padding min-h-screen flex items-center">
      <div className="container mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold mb-6 text-center">Let&apos;s Work Together</h2>
        <div className="max-w-3xl mx-auto mb-12">
          <p className="text-white/80 text-center">
            Ready to transform your business with smart systems, automation, and marketing that works? Let&apos;s chat about how I can help you scale with less stress.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 max-w-5xl mx-auto">
          <div className="space-y-8">
            <div className="bg-black/20 backdrop-blur-sm rounded-xl p-6 border border-white/10 flex items-start space-x-4">
              <div className="bg-electric/20 p-3 rounded-full flex-shrink-0">
                <Mail className="text-electric" size={24} />
              </div>
              <div>
                <h3 className="font-semibold mb-1">Email Me</h3>
                <p className="text-white/70">iqrafaisal81@gmail.com</p>
              </div>
            </div>
            
            <div className="bg-black/20 backdrop-blur-sm rounded-xl p-6 border border-white/10 flex items-start space-x-4">
              <div className="bg-electric/20 p-3 rounded-full flex-shrink-0">
                <Phone className="text-electric" size={24} />
              </div>
              <div>
                <h3 className="font-semibold mb-1">Call Me</h3>
                <p className="text-white/70">+44 7555 859390</p>
              </div>
            </div>
            
            <div className="bg-black/20 backdrop-blur-sm rounded-xl p-6 border border-white/10">
              <h3 className="font-semibold mb-4">Connect With Me</h3>
              <div className="flex gap-4">
                <a href="https://github.com" target="_blank" rel="noopener noreferrer" className="bg-black/30 p-3 rounded-full hover:bg-electric/20 transition-colors">
                  <Github size={20} className="text-white" />
                </a>
                <a href="https://www.linkedin.com/in/iqra-faisal-b6687919b/" target="_blank" rel="noopener noreferrer" className="bg-black/30 p-3 rounded-full hover:bg-electric/20 transition-colors">
                  <Linkedin size={20} className="text-white" />
                </a>
              </div>
            </div>
          </div>
          
          <div className="bg-black/20 backdrop-blur-sm rounded-xl p-6 border border-white/10">
            <h3 className="text-xl font-semibold mb-6">Send Me a Message</h3>
            <ContactForm />
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
