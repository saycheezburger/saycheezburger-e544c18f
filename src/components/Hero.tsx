import { Instagram, MapPin, Star } from "lucide-react";
import heroBurger from "@/assets/hero-burger.jpg";

const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-pattern">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0">
        <img 
          src={heroBurger} 
          alt="Delicious smash burger" 
          className="w-full h-full object-cover opacity-40"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-background/80 via-background/60 to-background" />
      </div>

      {/* Content */}
      <div className="relative z-10 container mx-auto px-4 py-20 text-center">
        {/* Badges */}
        <div className="flex justify-center gap-4 mb-8 animate-fade-in" style={{ animationDelay: "0.1s" }}>
          <span className="px-4 py-2 rounded-full border-2 border-primary bg-primary/10 text-primary font-semibold text-sm tracking-wide">
            100% WAGYU
          </span>
          <span className="px-4 py-2 rounded-full border-2 border-accent bg-accent/10 text-accent font-semibold text-sm tracking-wide">
            HALAL CERTIFIED
          </span>
        </div>

        {/* Main Title */}
        <h1 className="font-display text-7xl md:text-9xl lg:text-[12rem] text-glow text-primary mb-4 animate-fade-in leading-none" style={{ animationDelay: "0.2s" }}>
          SAY CHEEZ
        </h1>
        <p className="font-display text-4xl md:text-5xl lg:text-6xl text-foreground mb-6 animate-fade-in" style={{ animationDelay: "0.3s" }}>
          BURGER
        </p>

        {/* Tagline */}
        <p className="text-xl md:text-2xl text-muted-foreground mb-8 max-w-2xl mx-auto animate-fade-in font-body" style={{ animationDelay: "0.4s" }}>
          Premium Wagyu Smash Burgers • Pop-Up Experience
        </p>

        {/* Rating */}
        <div className="flex items-center justify-center gap-2 mb-10 animate-fade-in" style={{ animationDelay: "0.5s" }}>
          <div className="flex">
            {[...Array(5)].map((_, i) => (
              <Star key={i} className="w-6 h-6 fill-accent text-accent" />
            ))}
          </div>
          <span className="text-foreground font-semibold ml-2">4.8</span>
          <span className="text-muted-foreground">(88 reviews on Yelp)</span>
        </div>

        {/* CTA Buttons */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center animate-fade-in" style={{ animationDelay: "0.6s" }}>
          <a 
            href="#menu" 
            className="px-8 py-4 bg-primary text-primary-foreground font-display text-2xl rounded-lg hover:bg-gold-light transition-all duration-300 shadow-lg hover:shadow-gold animate-pulse-glow"
          >
            VIEW MENU
          </a>
          <a 
            href="#location" 
            className="px-8 py-4 border-2 border-primary text-primary font-display text-2xl rounded-lg hover:bg-primary/10 transition-all duration-300 flex items-center justify-center gap-2"
          >
            <MapPin className="w-5 h-5" />
            FIND US
          </a>
        </div>

        {/* Social Links */}
        <div className="mt-12 flex justify-center gap-6 animate-fade-in" style={{ animationDelay: "0.7s" }}>
          <a 
            href="https://instagram.com/saycheezburger" 
            target="_blank" 
            rel="noopener noreferrer"
            className="text-muted-foreground hover:text-primary transition-colors"
          >
            <Instagram className="w-8 h-8" />
          </a>
          <a 
            href="https://www.tiktok.com/t/ZTNXmP557" 
            target="_blank" 
            rel="noopener noreferrer"
            className="text-muted-foreground hover:text-primary transition-colors"
          >
            <svg className="w-8 h-8" viewBox="0 0 24 24" fill="currentColor">
              <path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-5.2 1.74 2.89 2.89 0 0 1 2.31-4.64 2.93 2.93 0 0 1 .88.13V9.4a6.84 6.84 0 0 0-1-.05A6.33 6.33 0 0 0 5 20.1a6.34 6.34 0 0 0 10.86-4.43v-7a8.16 8.16 0 0 0 4.77 1.52v-3.4a4.85 4.85 0 0 1-1-.1z"/>
            </svg>
          </a>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-primary/50 rounded-full flex justify-center pt-2">
          <div className="w-1.5 h-3 bg-primary rounded-full animate-pulse" />
        </div>
      </div>
    </section>
  );
};

export default Hero;
