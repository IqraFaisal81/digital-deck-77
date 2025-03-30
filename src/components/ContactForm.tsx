
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { toast } from "sonner";
import { Calendar } from "lucide-react";

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
          rows={5}
          className="w-full p-3 rounded-lg bg-black/30 border border-white/10 text-white focus:outline-none focus:border-electric resize-none"
        />
      </div>
      
      <Button 
        type="submit"
        className="w-full bg-electric hover:bg-electric/80 text-white font-semibold py-3"
        disabled={isSubmitting}
      >
        {isSubmitting ? "Sending..." : "Send Message"}
      </Button>
      
      <div className="mt-6 pt-6 border-t border-white/10">
        <a href="#booking" className="flex items-center justify-center gap-2 text-electric hover:text-electric/80 transition-colors">
          <Calendar className="w-5 h-5" />
          <span>Or book a consultation directly</span>
        </a>
      </div>
    </form>
  );
};

export default ContactForm;
