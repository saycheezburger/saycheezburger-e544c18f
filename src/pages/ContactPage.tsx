import { Helmet } from "react-helmet-async";
import { useState } from "react";
import { Mail, MapPin, Instagram, ExternalLink, CheckCircle, Send } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const ContactPage = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "General Inquiry",
    message: "",
  });
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // In a real app, this would send to a backend
    setIsSubmitted(true);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  return (
    <>
      <Helmet>
        <title>Contact Us | Say Cheez Burger</title>
        <meta name="description" content="Get in touch with Say Cheez Burger for catering, private events, or general inquiries. Located in Irvine, CA." />
      </Helmet>

      <Navbar />

      <main className="pt-24">
        {/* Hero Section */}
        <section className="py-20 bg-pattern relative">
          <div className="container mx-auto px-4 text-center">
            <span className="text-accent font-semibold text-sm tracking-widest uppercase">Get In Touch</span>
            <h1 className="font-display text-6xl md:text-8xl gradient-text mt-2 mb-4">CONTACT</h1>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Questions? Catering inquiry? Just want to say hi? We'd love to hear from you!
            </p>
          </div>
        </section>

        {/* Contact Section */}
        <section className="py-16 bg-secondary/20">
          <div className="container mx-auto px-4">
            <div className="max-w-5xl mx-auto grid lg:grid-cols-2 gap-12">
              {/* Contact Form */}
              <div className="bg-card rounded-xl p-8 border border-border animate-fade-in">
                <h2 className="font-display text-3xl text-primary mb-6">SEND A MESSAGE</h2>
                
                {isSubmitted ? (
                  <div className="text-center py-12">
                    <CheckCircle className="w-16 h-16 text-primary mx-auto mb-4" />
                    <h3 className="font-display text-2xl text-foreground mb-2">Message Sent!</h3>
                    <p className="text-muted-foreground">
                      Thanks for reaching out. We'll get back to you as soon as possible!
                    </p>
                  </div>
                ) : (
                  <form onSubmit={handleSubmit} className="space-y-6">
                    <div>
                      <label htmlFor="name" className="block text-sm font-medium text-foreground mb-2">
                        Your Name
                      </label>
                      <input
                        type="text"
                        id="name"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        required
                        className="w-full px-4 py-3 bg-muted border border-border rounded-lg text-foreground placeholder:text-muted-foreground focus:outline-none focus:border-primary transition-colors"
                        placeholder="John Doe"
                      />
                    </div>

                    <div>
                      <label htmlFor="email" className="block text-sm font-medium text-foreground mb-2">
                        Email Address
                      </label>
                      <input
                        type="email"
                        id="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        required
                        className="w-full px-4 py-3 bg-muted border border-border rounded-lg text-foreground placeholder:text-muted-foreground focus:outline-none focus:border-primary transition-colors"
                        placeholder="john@example.com"
                      />
                    </div>

                    <div>
                      <label htmlFor="subject" className="block text-sm font-medium text-foreground mb-2">
                        Subject
                      </label>
                      <select
                        id="subject"
                        name="subject"
                        value={formData.subject}
                        onChange={handleChange}
                        className="w-full px-4 py-3 bg-muted border border-border rounded-lg text-foreground focus:outline-none focus:border-primary transition-colors"
                      >
                        <option value="General Inquiry">General Inquiry</option>
                        <option value="Catering Request">Catering Request</option>
                        <option value="Private Event">Private Event</option>
                        <option value="Partnership">Partnership / Collaboration</option>
                        <option value="Feedback">Feedback</option>
                      </select>
                    </div>

                    <div>
                      <label htmlFor="message" className="block text-sm font-medium text-foreground mb-2">
                        Message
                      </label>
                      <textarea
                        id="message"
                        name="message"
                        value={formData.message}
                        onChange={handleChange}
                        required
                        rows={5}
                        className="w-full px-4 py-3 bg-muted border border-border rounded-lg text-foreground placeholder:text-muted-foreground focus:outline-none focus:border-primary transition-colors resize-none"
                        placeholder="Tell us what's on your mind..."
                      />
                    </div>

                    <button
                      type="submit"
                      className="w-full px-8 py-4 bg-primary text-primary-foreground font-display text-xl rounded-lg hover:bg-gold-light transition-all duration-300 shadow-lg hover:shadow-gold flex items-center justify-center gap-2"
                    >
                      <Send className="w-5 h-5" />
                      SEND MESSAGE
                    </button>
                  </form>
                )}
              </div>

              {/* Contact Info */}
              <div className="space-y-8 animate-fade-in" style={{ animationDelay: "0.1s" }}>
                <div>
                  <h2 className="font-display text-3xl text-primary mb-6">CONTACT INFO</h2>
                  
                  <div className="space-y-6">
                    <div className="flex items-start gap-4">
                      <div className="p-3 bg-primary/10 rounded-full">
                        <Mail className="w-6 h-6 text-primary" />
                      </div>
                      <div>
                        <h3 className="font-display text-xl text-foreground mb-1">Email</h3>
                        <a
                          href="mailto:info@saycheezburgers.com"
                          className="text-primary hover:text-gold-light transition-colors"
                        >
                          info@saycheezburgers.com
                        </a>
                      </div>
                    </div>

                    <div className="flex items-start gap-4">
                      <div className="p-3 bg-primary/10 rounded-full">
                        <MapPin className="w-6 h-6 text-primary" />
                      </div>
                      <div>
                        <h3 className="font-display text-xl text-foreground mb-1">Location</h3>
                        <p className="text-muted-foreground">1 Truman Street</p>
                        <p className="text-muted-foreground">Irvine, CA</p>
                      </div>
                    </div>

                    <div className="flex items-start gap-4">
                      <div className="p-3 bg-accent/10 rounded-full">
                        <Instagram className="w-6 h-6 text-accent" />
                      </div>
                      <div>
                        <h3 className="font-display text-xl text-foreground mb-1">Social Media</h3>
                        <a
                          href="https://instagram.com/saycheezburger"
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-accent hover:text-flame transition-colors"
                        >
                          @saycheezburger
                        </a>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Quick Links */}
                <div className="p-6 bg-card rounded-xl border border-border">
                  <h3 className="font-display text-2xl text-primary mb-4">QUICK LINKS</h3>
                  <div className="space-y-3">
                    <a
                      href="https://www.yelp.com/biz/say-cheez-burger-irvine"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center justify-between p-3 bg-muted rounded-lg hover:bg-muted/80 transition-colors group"
                    >
                      <span className="text-foreground">Review us on Yelp</span>
                      <ExternalLink className="w-4 h-4 text-muted-foreground group-hover:text-primary transition-colors" />
                    </a>
                    <a
                      href="https://maps.google.com/?q=1+Truman+Street+Irvine+CA"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center justify-between p-3 bg-muted rounded-lg hover:bg-muted/80 transition-colors group"
                    >
                      <span className="text-foreground">Get Directions</span>
                      <ExternalLink className="w-4 h-4 text-muted-foreground group-hover:text-primary transition-colors" />
                    </a>
                    <a
                      href="https://www.tiktok.com/t/ZTNXmP557"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center justify-between p-3 bg-muted rounded-lg hover:bg-muted/80 transition-colors group"
                    >
                      <span className="text-foreground">Watch on TikTok</span>
                      <ExternalLink className="w-4 h-4 text-muted-foreground group-hover:text-primary transition-colors" />
                    </a>
                  </div>
                </div>

                {/* Catering */}
                <div className="p-6 bg-gradient-to-br from-primary/10 to-accent/10 rounded-xl border border-primary/30">
                  <h3 className="font-display text-2xl text-primary mb-2">CATERING & PRIVATE EVENTS</h3>
                  <p className="text-muted-foreground mb-4">
                    Want us at your next event? We cater private parties, corporate events, weddings, and more!
                  </p>
                  <p className="text-sm text-foreground">
                    Fill out the form with "Catering Request" or email us directly for custom packages.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </>
  );
};

export default ContactPage;
