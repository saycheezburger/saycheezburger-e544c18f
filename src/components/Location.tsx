import { MapPin, Clock, Mail, ExternalLink } from "lucide-react";

const Location = () => {
  return (
    <section id="location" className="py-24 bg-secondary/20 relative">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="font-display text-6xl md:text-8xl text-primary text-glow mb-4">FIND US</h2>
          <p className="text-xl text-muted-foreground">Pop-up locations in Irvine, CA</p>
        </div>

        <div className="max-w-5xl mx-auto grid md:grid-cols-2 gap-8">
          {/* Location Card */}
          <div className="bg-card rounded-xl p-8 card-glow animate-fade-in">
            <div className="flex items-start gap-4 mb-6">
              <div className="p-3 bg-primary/10 rounded-full">
                <MapPin className="w-8 h-8 text-primary" />
              </div>
              <div>
                <h3 className="font-display text-2xl text-foreground mb-1">LOCATION</h3>
                <p className="text-muted-foreground">1 Truman Street</p>
                <p className="text-muted-foreground">Irvine, CA</p>
              </div>
            </div>

            <div className="flex items-start gap-4 mb-6">
              <div className="p-3 bg-accent/10 rounded-full">
                <Clock className="w-8 h-8 text-accent" />
              </div>
              <div>
                <h3 className="font-display text-2xl text-foreground mb-1">HOURS</h3>
                <p className="text-muted-foreground">Pop-Up Events</p>
                <p className="text-accent font-semibold">5PM - Until Sellout!</p>
                <p className="text-sm text-muted-foreground mt-2">Follow us on Instagram for upcoming dates</p>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <div className="p-3 bg-primary/10 rounded-full">
                <Mail className="w-8 h-8 text-primary" />
              </div>
              <div>
                <h3 className="font-display text-2xl text-foreground mb-1">CONTACT</h3>
                <a 
                  href="mailto:info@saycheezburgers.com" 
                  className="text-primary hover:text-gold-light transition-colors"
                >
                  info@saycheezburgers.com
                </a>
              </div>
            </div>
          </div>

          {/* Quick Links Card */}
          <div className="bg-card rounded-xl p-8 animate-fade-in" style={{ animationDelay: "0.1s" }}>
            <h3 className="font-display text-3xl text-primary mb-6">QUICK LINKS</h3>
            
            <div className="space-y-4">
              <a 
                href="https://www.yelp.com/biz/say-cheez-burger-irvine" 
                target="_blank" 
                rel="noopener noreferrer"
                className="flex items-center justify-between p-4 bg-muted rounded-lg hover:bg-muted/80 transition-colors group"
              >
                <span className="font-semibold text-foreground">Review us on Yelp!</span>
                <ExternalLink className="w-5 h-5 text-muted-foreground group-hover:text-primary transition-colors" />
              </a>

              <a 
                href="https://instagram.com/saycheezburger" 
                target="_blank" 
                rel="noopener noreferrer"
                className="flex items-center justify-between p-4 bg-muted rounded-lg hover:bg-muted/80 transition-colors group"
              >
                <span className="font-semibold text-foreground">Follow us on Instagram</span>
                <ExternalLink className="w-5 h-5 text-muted-foreground group-hover:text-primary transition-colors" />
              </a>

              <a 
                href="https://www.tiktok.com/t/ZTNXmP557" 
                target="_blank" 
                rel="noopener noreferrer"
                className="flex items-center justify-between p-4 bg-muted rounded-lg hover:bg-muted/80 transition-colors group"
              >
                <span className="font-semibold text-foreground">Watch us on TikTok</span>
                <ExternalLink className="w-5 h-5 text-muted-foreground group-hover:text-primary transition-colors" />
              </a>

              <a 
                href="https://maps.google.com/?q=1+Truman+Street+Irvine+CA" 
                target="_blank" 
                rel="noopener noreferrer"
                className="flex items-center justify-between p-4 bg-muted rounded-lg hover:bg-muted/80 transition-colors group"
              >
                <span className="font-semibold text-foreground">Get Directions</span>
                <ExternalLink className="w-5 h-5 text-muted-foreground group-hover:text-primary transition-colors" />
              </a>
            </div>
          </div>
        </div>

        {/* Re-opening Banner */}
        <div className="max-w-3xl mx-auto mt-16 text-center animate-fade-in" style={{ animationDelay: "0.2s" }}>
          <div className="bg-gradient-to-r from-accent/20 via-primary/20 to-accent/20 rounded-xl p-8 neon-border">
            <h3 className="font-display text-4xl md:text-5xl text-primary text-glow mb-4">
              RE-OPENING SOON! 🍔🍔🍔
            </h3>
            <p className="text-muted-foreground text-lg">
              Stay tuned for our next pop-up event. Follow us on social media to be the first to know!
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Location;
