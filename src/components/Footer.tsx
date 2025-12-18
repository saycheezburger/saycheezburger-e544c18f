import { Instagram } from "lucide-react";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="py-16 bg-background border-t border-border">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-4 gap-12 mb-12">
          {/* Brand */}
          <div className="md:col-span-2">
            <h3 className="font-display text-4xl text-primary mb-4">SAY CHEEZ BURGER</h3>
            <p className="text-muted-foreground mb-4 max-w-md">
              Premium 100% Wagyu smash burgers, halal certified, served at exclusive pop-up events in Irvine, CA.
            </p>
            <div className="flex gap-4">
              <a
                href="https://instagram.com/saycheezburger"
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 bg-card rounded-full text-muted-foreground hover:text-primary hover:bg-primary/10 transition-colors"
                aria-label="Instagram"
              >
                <Instagram className="w-5 h-5" />
              </a>
              <a
                href="https://www.tiktok.com/t/ZTNXmP557"
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 bg-card rounded-full text-muted-foreground hover:text-primary hover:bg-primary/10 transition-colors"
                aria-label="TikTok"
              >
                <svg className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-5.2 1.74 2.89 2.89 0 0 1 2.31-4.64 2.93 2.93 0 0 1 .88.13V9.4a6.84 6.84 0 0 0-1-.05A6.33 6.33 0 0 0 5 20.1a6.34 6.34 0 0 0 10.86-4.43v-7a8.16 8.16 0 0 0 4.77 1.52v-3.4a4.85 4.85 0 0 1-1-.1z"/>
                </svg>
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-display text-xl text-foreground mb-4">QUICK LINKS</h4>
            <ul className="space-y-2">
              <li><Link to="/" className="text-muted-foreground hover:text-primary transition-colors">Home</Link></li>
              <li><Link to="/menu" className="text-muted-foreground hover:text-primary transition-colors">Menu</Link></li>
              <li><Link to="/about" className="text-muted-foreground hover:text-primary transition-colors">About Us</Link></li>
              <li><Link to="/events" className="text-muted-foreground hover:text-primary transition-colors">Events</Link></li>
              <li><Link to="/gallery" className="text-muted-foreground hover:text-primary transition-colors">Gallery</Link></li>
              <li><Link to="/contact" className="text-muted-foreground hover:text-primary transition-colors">Contact</Link></li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-display text-xl text-foreground mb-4">CONTACT</h4>
            <ul className="space-y-2 text-muted-foreground">
              <li>1 Truman Street</li>
              <li>Irvine, CA</li>
              <li>
                <a href="mailto:info@saycheezburgers.com" className="hover:text-primary transition-colors">
                  info@saycheezburgers.com
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-border flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-muted-foreground text-sm">
            © {new Date().getFullYear()} Say Cheez Burger. All rights reserved.
          </p>
          <div className="flex gap-6 text-sm">
            <span className="text-primary font-semibold">100% Wagyu</span>
            <span className="text-accent font-semibold">Halal Certified</span>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
