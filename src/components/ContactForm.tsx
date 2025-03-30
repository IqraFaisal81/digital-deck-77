
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { toast } from "sonner";

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
      <h3 className="text-xl font-semibold mb-4 text-center">Or fill out the form below—I'll get back to you ASAP.</h3>
      
      <div className="space-y-2">
        <label htmlFor="name" className="block text-black/70">Name</label>
        <input
          type="text"
          id="name"
          name="name"
          value={formData.name}
          onChange={handleChange}
          required
          className="w-full p-3 rounded-lg bg-white border border-black/10 text-black focus:outline-none focus:border-black"
        />
      </div>
      
      <div className="space-y-2">
        <label htmlFor="email" className="block text-black/70">Email</label>
        <input
          type="email"
          id="email"
          name="email"
          value={formData.email}
          onChange={handleChange}
          required
          className="w-full p-3 rounded-lg bg-white border border-black/10 text-black focus:outline-none focus:border-black"
        />
      </div>
      
      <div className="space-y-2">
        <label htmlFor="message" className="block text-black/70">Message</label>
        <textarea
          id="message"
          name="message"
          value={formData.message}
          onChange={handleChange}
          required
          rows={5}
          className="w-full p-3 rounded-lg bg-white border border-black/10 text-black focus:outline-none focus:border-black resize-none"
        />
      </div>
      
      <Button 
        type="submit"
        className="w-full bg-black hover:bg-black/80 text-white font-semibold py-3"
        disabled={isSubmitting}
      >
        {isSubmitting ? "Sending..." : "Send Message"}
      </Button>
    </form>
  );
};

export default ContactForm;
