import { useState } from "react";
import { Mail, CheckCircle } from "lucide-react";

const Newsletter = () => {
  const [email, setEmail] = useState("");
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (email) {
      setIsSubmitted(true);
      setEmail("");
    }
  };

  return (
    <section className="py-20 bg-secondary/30 relative overflow-hidden">
      <div className="absolute inset-0 bg-pattern opacity-50" />
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-2xl mx-auto text-center">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 border border-primary/20 mb-6">
            <Mail className="w-4 h-4 text-primary" />
            <span className="text-primary font-semibold text-sm">JOIN THE FAMILY</span>
          </div>
          
          <h2 className="font-display text-5xl md:text-6xl text-primary text-glow mb-4">
            GET EXCLUSIVE UPDATES
          </h2>
          <p className="text-xl text-muted-foreground mb-8">
            Be the first to know about pop-up dates, secret menu items, and special promotions.
          </p>

          {isSubmitted ? (
            <div className="flex items-center justify-center gap-3 p-6 bg-card rounded-xl border border-primary/30 animate-scale-in">
              <CheckCircle className="w-8 h-8 text-primary" />
              <span className="font-display text-2xl text-foreground">You're on the list!</span>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-4 max-w-lg mx-auto">
              <input
                type="email"
                placeholder="Enter your email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
                className="flex-1 px-6 py-4 bg-card border-2 border-border rounded-lg text-foreground placeholder:text-muted-foreground focus:outline-none focus:border-primary transition-colors"
              />
              <button
                type="submit"
                className="px-8 py-4 bg-primary text-primary-foreground font-display text-xl rounded-lg hover:bg-gold-light transition-all duration-300 shadow-lg hover:shadow-gold animate-pulse-glow"
              >
                SUBSCRIBE
              </button>
            </form>
          )}

          <p className="text-sm text-muted-foreground mt-4">
            We respect your privacy. Unsubscribe anytime.
          </p>
        </div>
      </div>
    </section>
  );
};

export default Newsletter;
