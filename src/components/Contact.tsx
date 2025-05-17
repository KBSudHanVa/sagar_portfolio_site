import { useState } from "react";
import { toast } from "../hooks/use-toast";
import { Mail, MessageSquare, MapPin, Linkedin, Instagram, Twitter, Video } from "lucide-react";
import emailjs from '@emailjs/browser';

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: ""
  });

  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { id, value } = e.target;
    setFormData(prev => ({ ...prev, [id]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      // emailjs service parameters
      // Make sure to set these environment variables in your .env
      const serviceID = import.meta.env.VITE_EMAILJS_SERVICE_ID!;
      const templateID = import.meta.env.VITE_EMAILJS_TEMPLATE_ID!;
      const publicKey = import.meta.env.VITE_EMAILJS_PUBLIC_KEY!;

      await emailjs.send(serviceID, templateID, {
        from_name: formData.name,
        from_email: formData.email,
        subject: formData.subject,
        message: formData.message,
        to_email: import.meta.env.VITE_CONTACT_EMAIL,
      }, publicKey);

      toast({
        title: "Message sent successfully!",
        description: "Thank you for reaching out. I'll get back to you soon.",
      });

      setFormData({ name: "", email: "", subject: "", message: "" });
    } catch (error) {
      console.error(error);
      toast({
        title: "Error sending message",
        description: "Please try again later or contact me directly via email or WhatsApp.",
        variant: "destructive",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section id="contact" className="py-20 relative">
      <div className="absolute top-0 left-0 w-full h-full opacity-10" style={{
        backgroundImage: `url('https://images.unsplash.com/photo-1606857521015-7f9fcf423740?ixlib=rb-4.0.3&auto=format&fit=crop&w=1920&h=1080&q=80')`,
        backgroundAttachment: "fixed",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
        backgroundSize: "cover"
      }}></div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-16" data-aos="fade-up">
          <h2 className="text-3xl md:text-5xl font-display font-bold mb-4">Get In <span className="text-primary">Touch</span></h2>
          <div className="w-20 h-1 bg-primary mx-auto mb-6"></div>
          <p className="max-w-xl mx-auto text-light/70">
            Looking for a seasoned VFX Project Coordinator for your next production? Let's discuss how I can help bring your creative vision to life.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div data-aos="fade-right" data-aos-delay="100">
            <h3 className="text-2xl font-display font-bold mb-8">Connect With Me</h3>

            <div className="space-y-6">
              <div className="flex items-start gap-4 p-5 bg-dark/50 rounded-xl border border-primary/20 hover:border-primary transition-all">
                <div className="w-12 h-12 rounded-full bg-primary/20 flex items-center justify-center flex-shrink-0">
                  <Mail className="text-primary" size={20} />
                </div>
                <div>
                  <h4 className="font-display font-bold mb-1">Email</h4>
                  <p className="text-light/70 mb-2">For project inquiries and professional correspondence</p>
                  <a href={`mailto:${import.meta.env.VITE_CONTACT_EMAIL}`} className="text-primary hover:text-primary/80 transition-colors">
                    {import.meta.env.VITE_CONTACT_EMAIL}
                  </a>
                </div>
              </div>

              <div className="flex items-start gap-4 p-5 bg-dark/50 rounded-xl border border-primary/20 hover:border-primary transition-all">
                <div className="w-12 h-12 rounded-full bg-primary/20 flex items-center justify-center flex-shrink-0">
                  <MessageSquare className="text-primary" size={20} />
                </div>
                <div>
                  <h4 className="font-display font-bold mb-1">WhatsApp</h4>
                  <p className="text-light/70 mb-2">For quick consultations and immediate responses</p>
                  <a href={`https://wa.me/${import.meta.env.VITE_WHATSAPP_NUMBER}`} className="text-primary hover:text-primary/80 transition-colors">
                    {import.meta.env.VITE_WHATSAPP_NUMBER}
                  </a>
                </div>
              </div>

              <div className="flex items-start gap-4 p-5 bg-dark/50 rounded-xl border border-primary/20 hover:border-primary transition-all">
                <div className="w-12 h-12 rounded-full bg-primary/20 flex items-center justify-center flex-shrink-0">
                  <MapPin className="text-primary" size={20} />
                </div>
                <div>
                  <h4 className="font-display font-bold mb-1">Location</h4>
                  <p className="text-light/70 mb-2">Available worldwide for remote and on-site coordination</p>
                  <p className="text-primary">Based in Hyderabad, Telangana</p>
                </div>
              </div>
            </div>

            <div className="mt-10">
              <h4 className="font-display font-bold mb-4">Connect on Social</h4>
              <div className="flex gap-4">
                <a href="https://www.linkedin.com/in/kshira-sagar-thota" className="w-12 h-12 rounded-full bg-dark/70 border border-primary/20 flex items-center justify-center text-light hover:text-primary hover:border-primary transition-all">
                  <Linkedin size={20} />
                </a>
                <a href="https://www.instagram.com/kshira_sagar414/" className="w-12 h-12 rounded-full bg-dark/70 border border-primary/20 flex items-center justify-center text-light hover:text-primary hover:border-primary transition-all">
                  <Instagram size={20} />
                </a>
                <a href="#" className="w-12 h-12 rounded-full bg-dark/70 border border-primary/20 flex items-center justify-center text-light hover:text-primary hover:border-primary transition-all">
                  <Twitter size={20} />
                </a>
                <a href="#" className="w-12 h-12 rounded-full bg-dark/70 border border-primary/20 flex items-center justify-center text-light hover:text-primary hover:border-primary transition-all">
                  <Video size={20} />
                </a>
              </div>
            </div>
          </div>

          <div data-aos="fade-left" data-aos-delay="100">
            <h3 className="text-2xl font-display font-bold mb-8">Send Me a Message</h3>

            <form className="space-y-6" onSubmit={handleSubmit}>
              <div>
                <label htmlFor="name" className="block mb-2 font-medium text-light/80">Your Name</label>
                <input
                  type="text"
                  id="name"
                  value={formData.name}
                  onChange={handleChange}
                  className="w-full p-3 bg-dark/70 border border-primary/20 rounded-lg focus:border-primary focus:outline-none focus:ring-1 focus:ring-primary transition-colors text-light"
                  placeholder="Enter your name"
                  required
                />
              </div>

              <div>
                <label htmlFor="email" className="block mb-2 font-medium text-light/80">Your Email</label>
                <input
                  type="email"
                  id="email"
                  value={formData.email}
                  onChange={handleChange}
                  className="w-full p-3 bg-dark/70 border border-primary/20 rounded-lg focus:border-primary focus:outline-none focus:ring-1 focus:ring-primary transition-colors text-light"
                  placeholder="Enter your email"
                  required
                />
              </div>

              <div>
                <label htmlFor="subject" className="block mb-2 font-medium text-light/80">Subject</label>
                <input
                  type="text"
                  id="subject"
                  value={formData.subject}
                  onChange={handleChange}
                  className="w-full p-3 bg-dark/70 border border-primary/20 rounded-lg focus:border-primary focus:outline-none focus:ring-1 focus:ring-primary transition-colors text-light"
                  placeholder="What is this regarding?"
                  required
                />
              </div>

              <div>
                <label htmlFor="message" className="block mb-2 font-medium text-light/80">Message</label>
                <textarea
                  id="message"
                  rows={5}
                  value={formData.message}
                  onChange={handleChange}
                  className="w-full p-3 bg-dark/70 border border-primary/20 rounded-lg focus:border-primary focus:outline-none focus:ring-1 focus:ring-primary transition-colors text-light"
                  placeholder="Write your message"
                  required
                ></textarea>
              </div>

              <button
                type="submit"
                disabled={isSubmitting}
                className="px-8 py-3 bg-primary text-dark rounded-lg font-semibold hover:bg-primary/90 transition-colors disabled:opacity-60 disabled:cursor-not-allowed"
              >
                {isSubmitting ? "Sending..." : "Send Message"}
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
