import { useState } from 'react';
import { motion } from 'framer-motion';
import { MapPin, Phone, Mail, Clock, Send, Coffee, Instagram, Twitter, Facebook } from 'lucide-react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import CartDrawer from '@/components/CartDrawer';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { useToast } from '@/hooks/use-toast';
import contactCafe from '@/assets/contact-cafe.jpg';

const contactInfo = [
  {
    icon: MapPin,
    title: 'Visit Us',
    details: ['123 Coffee Street', 'Brew City, BC 12345'],
    action: 'Get Directions',
  },
  {
    icon: Phone,
    title: 'Call Us',
    details: ['+1 (555) 123-4567', 'Mon-Sun: 6AM - 10PM'],
    action: 'Call Now',
  },
  {
    icon: Mail,
    title: 'Email Us',
    details: ['hello@coffeeverse.com', 'support@coffeeverse.com'],
    action: 'Send Email',
  },
  {
    icon: Clock,
    title: 'Opening Hours',
    details: ['Mon-Fri: 6AM - 10PM', 'Sat-Sun: 7AM - 11PM'],
    action: 'View Schedule',
  },
];

const locations = [
  {
    name: 'Downtown Flagship',
    address: '123 Coffee Street, Brew City',
    hours: '6AM - 10PM Daily',
    features: ['Drive-Through', 'Outdoor Seating', 'WiFi'],
  },
  {
    name: 'Midtown Roastery',
    address: '456 Roast Avenue, Brew City',
    hours: '7AM - 9PM Daily',
    features: ['Roastery Tours', 'Coffee Classes', 'Events'],
  },
  {
    name: 'Waterfront Café',
    address: '789 Harbor View, Brew City',
    hours: '7AM - 11PM Daily',
    features: ['Ocean View', 'Full Kitchen', 'Bar'],
  },
];

const Contact = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate form submission
    await new Promise(resolve => setTimeout(resolve, 1500));
    
    toast({
      title: "Message Sent! ☕",
      description: "Thank you for reaching out. We'll get back to you within 24 hours.",
    });
    
    setFormData({ name: '', email: '', subject: '', message: '' });
    setIsSubmitting(false);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData(prev => ({
      ...prev,
      [e.target.name]: e.target.value
    }));
  };

  return (
    <main className="min-h-screen bg-background">
      <Navbar />
      
      {/* Hero Section */}
      <section className="pt-32 pb-20 bg-gradient-hero coffee-pattern relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-transparent to-background/80" />
        <div className="container mx-auto px-4 lg:px-8 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center max-w-3xl mx-auto"
          >
            <span className="text-primary text-sm font-medium tracking-widest uppercase">
              Get In Touch
            </span>
            <h1 className="text-5xl md:text-6xl font-serif font-bold mt-4 mb-6">
              Contact <span className="text-gradient-gold">Us</span>
            </h1>
            <p className="text-muted-foreground text-lg leading-relaxed">
              Have a question, feedback, or just want to say hello? We'd love to hear from you. 
              Reach out and let's start a conversation.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Contact Cards */}
      <section className="py-16 -mt-10 relative z-20">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {contactInfo.map((info, index) => (
              <motion.div
                key={info.title}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="p-6 rounded-2xl bg-gradient-card border border-border/50 hover-lift text-center"
              >
                <div className="w-14 h-14 mx-auto rounded-xl bg-primary/10 flex items-center justify-center mb-4">
                  <info.icon className="w-7 h-7 text-primary" />
                </div>
                <h3 className="font-serif font-bold text-lg mb-3">{info.title}</h3>
                {info.details.map((detail, i) => (
                  <p key={i} className="text-muted-foreground text-sm">
                    {detail}
                  </p>
                ))}
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Form & Image */}
      <section className="py-24">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-start">
            {/* Form */}
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <span className="text-primary text-sm font-medium tracking-widest uppercase">
                Send a Message
              </span>
              <h2 className="text-4xl font-serif font-bold mt-4 mb-6">
                We'd Love to <span className="text-gradient-gold">Hear</span> From You
              </h2>
              <p className="text-muted-foreground mb-8">
                Whether you have a question about our menu, want to book an event, or 
                just want to share your experience—drop us a message.
              </p>

              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <label className="text-sm font-medium mb-2 block">Your Name</label>
                    <Input
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      placeholder="John Doe"
                      required
                      className="bg-secondary/50 border-border/50 focus:border-primary"
                    />
                  </div>
                  <div>
                    <label className="text-sm font-medium mb-2 block">Email Address</label>
                    <Input
                      name="email"
                      type="email"
                      value={formData.email}
                      onChange={handleChange}
                      placeholder="john@example.com"
                      required
                      className="bg-secondary/50 border-border/50 focus:border-primary"
                    />
                  </div>
                </div>
                <div>
                  <label className="text-sm font-medium mb-2 block">Subject</label>
                  <Input
                    name="subject"
                    value={formData.subject}
                    onChange={handleChange}
                    placeholder="How can we help you?"
                    required
                    className="bg-secondary/50 border-border/50 focus:border-primary"
                  />
                </div>
                <div>
                  <label className="text-sm font-medium mb-2 block">Message</label>
                  <Textarea
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    placeholder="Tell us more..."
                    rows={5}
                    required
                    className="bg-secondary/50 border-border/50 focus:border-primary resize-none"
                  />
                </div>
                <Button
                  type="submit"
                  variant="hero"
                  size="lg"
                  className="w-full md:w-auto"
                  disabled={isSubmitting}
                >
                  {isSubmitting ? (
                    <>
                      <Coffee className="w-5 h-5 animate-spin mr-2" />
                      Sending...
                    </>
                  ) : (
                    <>
                      <Send className="w-5 h-5 mr-2" />
                      Send Message
                    </>
                  )}
                </Button>
              </form>
            </motion.div>

            {/* Image */}
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="relative"
            >
              <img
                src={contactCafe}
                alt="CoffeeVerse café interior"
                className="rounded-2xl w-full h-[500px] object-cover shadow-2xl"
              />
              <div className="absolute -bottom-8 -left-8 w-48 h-48 bg-primary/10 rounded-2xl blur-2xl" />
              
              {/* Social Links Overlay */}
              <div className="absolute bottom-6 left-6 right-6 p-6 rounded-xl bg-background/80 backdrop-blur-xl border border-border/50">
                <h4 className="font-serif font-bold mb-3">Follow Us</h4>
                <div className="flex gap-4">
                  <a
                    href="#"
                    className="w-10 h-10 rounded-full bg-secondary flex items-center justify-center text-muted-foreground hover:text-primary hover:bg-secondary/80 transition-colors"
                  >
                    <Instagram className="w-5 h-5" />
                  </a>
                  <a
                    href="#"
                    className="w-10 h-10 rounded-full bg-secondary flex items-center justify-center text-muted-foreground hover:text-primary hover:bg-secondary/80 transition-colors"
                  >
                    <Twitter className="w-5 h-5" />
                  </a>
                  <a
                    href="#"
                    className="w-10 h-10 rounded-full bg-secondary flex items-center justify-center text-muted-foreground hover:text-primary hover:bg-secondary/80 transition-colors"
                  >
                    <Facebook className="w-5 h-5" />
                  </a>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Locations */}
      <section className="py-24 bg-coffee-espresso">
        <div className="container mx-auto px-4 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center max-w-3xl mx-auto mb-16"
          >
            <span className="text-primary text-sm font-medium tracking-widest uppercase">
              Find Us
            </span>
            <h2 className="text-4xl md:text-5xl font-serif font-bold mt-4 mb-6">
              Our <span className="text-gradient-gold">Locations</span>
            </h2>
            <p className="text-muted-foreground text-lg">
              Visit any of our three locations across Brew City for an unforgettable 
              coffee experience.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8">
            {locations.map((location, index) => (
              <motion.div
                key={location.name}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="p-8 rounded-2xl bg-gradient-card border border-border/50 hover-lift"
              >
                <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mb-6">
                  <Coffee className="w-6 h-6 text-primary" />
                </div>
                <h3 className="font-serif font-bold text-xl mb-2">{location.name}</h3>
                <p className="text-muted-foreground text-sm mb-1">{location.address}</p>
                <p className="text-primary text-sm mb-4">{location.hours}</p>
                <div className="flex flex-wrap gap-2">
                  {location.features.map((feature) => (
                    <span
                      key={feature}
                      className="px-3 py-1 rounded-full bg-secondary text-xs text-foreground/70"
                    >
                      {feature}
                    </span>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ Teaser */}
      <section className="py-24">
        <div className="container mx-auto px-4 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center max-w-2xl mx-auto"
          >
            <h2 className="text-3xl md:text-4xl font-serif font-bold mb-6">
              Have <span className="text-gradient-gold">Questions?</span>
            </h2>
            <p className="text-muted-foreground text-lg mb-8">
              Check out our frequently asked questions or reach out directly—we're 
              always happy to help.
            </p>
            <Button variant="outline" size="lg">
              View FAQ
            </Button>
          </motion.div>
        </div>
      </section>

      <Footer />
      <CartDrawer />
    </main>
  );
};

export default Contact;
