
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { toast } from "sonner";
import { SendIcon, Calendar } from "lucide-react";

const ContactForm = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: ""
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate form submission
    setTimeout(() => {
      toast.success("Message sent successfully! I'll get back to you soon.");
      setFormData({ name: "", email: "", message: "" });
      setIsSubmitting(false);
    }, 1500);
  };

  return (
    <div className="space-y-6">
      <form onSubmit={handleSubmit} className="space-y-4">
        <div className="space-y-2">
          <label htmlFor="name" className="block text-white/70">Name</label>
          <input
            type="text"
            id="name"
            name="name"
            value={formData.name}
            onChange={handleChange}
            required
            className="w-full p-3 rounded-lg bg-black/30 border border-white/10 text-white focus:outline-none focus:border-electric"
          />
        </div>
        
        <div className="space-y-2">
          <label htmlFor="email" className="block text-white/70">Email</label>
          <input
            type="email"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            required
            className="w-full p-3 rounded-lg bg-black/30 border border-white/10 text-white focus:outline-none focus:border-electric"
          />
        </div>
        
        <div className="space-y-2">
          <label htmlFor="message" className="block text-white/70">Message</label>
          <textarea
            id="message"
            name="message"
            value={formData.message}
            onChange={handleChange}
            required
            rows={4}
            className="w-full p-3 rounded-lg bg-black/30 border border-white/10 text-white focus:outline-none focus:border-electric resize-none"
          />
        </div>
        
        <Button 
          type="submit"
          className="w-full bg-electric hover:bg-electric/80 text-white font-semibold py-3"
          disabled={isSubmitting}
        >
          {isSubmitting ? "Sending..." : "Send Message"}
          {!isSubmitting && <SendIcon className="ml-2 h-4 w-4" />}
        </Button>
      </form>
      
      <div className="mt-6 text-center">
        <p className="text-white/70 mb-3">Prefer to schedule a call directly?</p>
        <Button 
          className="bg-black/40 hover:bg-black/60 border border-electric text-electric font-semibold"
          asChild
        >
          <a href="#booking" className="flex items-center justify-center">
            <Calendar className="mr-2 h-4 w-4" />
            Book a Consultation
          </a>
        </Button>
      </div>
    </div>
  );
};

export default ContactForm;
