
import { Mail, Phone, Github, Linkedin, Calendar, MapPin, Clock, Link } from "lucide-react";
import { Button } from "@/components/ui/button";

const ContactSection = () => {
  const contactMethods = [
    {
      icon: Mail,
      title: "Email Me",
      info: "iqrafaisal81@gmail.com",
      description: "Drop me a line anytime",
      href: "mailto:iqrafaisal81@gmail.com"
    },
    {
      icon: Phone,
      title: "Call Me",
      info: "+44 7555 859390",
      description: "Available Mon-Fri, 9AM-6PM GMT",
      href: "tel:+447555859390"
    },
    {
      icon: Calendar,
      title: "Book a Call",
      info: "30-min consultation",
      description: "Free discovery call to discuss your needs",
      href: "https://calendly.com/iqrafaisal81/discovery-call?month=2025-04"
    },
    {
      icon: Link,
      title: "Upwork Profile",
      info: "Hire me on Upwork",
      description: "View my professional profile and reviews",
      href: "https://www.upwork.com/freelancers/~01c63cb8053c39c93a?mp_source=share"
    }
  ];

  const socialLinks = [
    {
      icon: Github,
      href: "https://github.com/IqraFaisal81",
      label: "GitHub"
    },
    {
      icon: Linkedin,
      href: "https://www.linkedin.com/in/iqra-faisal-b6687919b/",
      label: "LinkedIn"
    }
  ];

  return (
    <section id="contact" className="py-20 bg-gradient-to-br from-royal via-purple-900 to-indigo-900 relative overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0 opacity-20">
        <div className="absolute inset-0 bg-gradient-to-r from-purple-500/10 to-indigo-500/10"></div>
        <div className="absolute top-20 left-20 w-96 h-96 bg-purple-500/5 rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 right-20 w-96 h-96 bg-indigo-500/5 rounded-full blur-3xl"></div>
      </div>
      
      <div className="container mx-auto px-4 relative z-10">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 text-white">
            Let's Work Together
          </h2>
          <p className="text-xl text-purple-100 max-w-3xl mx-auto leading-relaxed">
            Ready to transform your business with smart systems, automation, and marketing that works? 
            Let's chat about how I can help you scale with less stress.
          </p>
        </div>

        {/* Main CTA */}
        <div className="text-center mb-16">
          <Button 
            className="bg-gradient-to-r from-purple-600 to-indigo-600 hover:from-purple-700 hover:to-indigo-700 text-white font-semibold px-8 py-4 rounded-full text-lg shadow-2xl hover:shadow-purple-500/25 transition-all duration-300 transform hover:scale-105"
            asChild
            size="lg"
          >
            <a href="https://calendly.com/iqrafaisal81/discovery-call?month=2025-04" target="_blank" rel="noopener noreferrer" className="flex items-center">
              <Calendar className="mr-3 h-6 w-6" />
              Book Your Free Consultation
            </a>
          </Button>
        </div>
        
        {/* Contact Methods */}
        <div className="max-w-6xl mx-auto mb-16">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {contactMethods.map((method, index) => (
              <a
                key={index}
                href={method.href}
                target={method.href.startsWith('http') ? '_blank' : undefined}
                rel={method.href.startsWith('http') ? 'noopener noreferrer' : undefined}
                className="group bg-white/10 backdrop-blur-sm rounded-2xl p-8 border border-white/20 hover:bg-white/20 transition-all duration-300 transform hover:scale-105 hover:shadow-2xl"
              >
                <div className="flex flex-col items-center text-center">
                  <div className="bg-gradient-to-r from-purple-600 to-indigo-600 p-4 rounded-2xl mb-6 group-hover:scale-110 transition-transform duration-300 shadow-lg">
                    <method.icon className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-xl font-semibold text-white mb-2">{method.title}</h3>
                  <p className="text-purple-100 font-medium mb-2">{method.info}</p>
                  <p className="text-purple-200 text-sm">{method.description}</p>
                </div>
              </a>
            ))}
          </div>
        </div>

        {/* Additional Info & Social */}
        <div className="max-w-4xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* Quick Info */}
            <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 border border-white/20">
              <h3 className="text-2xl font-semibold text-white mb-6">Quick Info</h3>
              <div className="space-y-4">
                <div className="flex items-center text-purple-100">
                  <MapPin className="w-5 h-5 mr-3 text-purple-400" />
                  <span>Based in London, UK</span>
                </div>
                <div className="flex items-center text-purple-100">
                  <Clock className="w-5 h-5 mr-3 text-purple-400" />
                  <span>GMT Timezone</span>
                </div>
                <div className="flex items-center text-purple-100">
                  <Calendar className="w-5 h-5 mr-3 text-purple-400" />
                  <span>Usually responds within 24 hours</span>
                </div>
              </div>
            </div>

            {/* Social Links */}
            <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 border border-white/20">
              <h3 className="text-2xl font-semibold text-white mb-6">Connect With Me</h3>
              <div className="flex gap-4">
                {socialLinks.map((social, index) => (
                  <a 
                    key={index}
                    href={social.href} 
                    target="_blank" 
                    rel="noopener noreferrer" 
                    className="bg-white/20 p-4 rounded-xl hover:bg-white/30 transition-all duration-300 transform hover:scale-110 group"
                  >
                    <social.icon className="w-6 h-6 text-white group-hover:text-purple-400 transition-colors" />
                  </a>
                ))}
              </div>
              <p className="text-purple-200 text-sm mt-4">
                Follow my work and connect professionally
              </p>
            </div>
          </div>
        </div>

        {/* Bottom CTA */}
        <div className="text-center mt-16 pt-8 border-t border-white/20">
          <p className="text-purple-100 mb-4">
            Ready to get started? Let's make it happen!
          </p>
          <Button 
            className="bg-white/20 hover:bg-white/30 text-white border border-white/30 hover:border-white/40 px-6 py-3 rounded-full transition-all duration-300"
            asChild
          >
            <a href="mailto:iqrafaisal81@gmail.com">
              Send Me an Email
            </a>
          </Button>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
