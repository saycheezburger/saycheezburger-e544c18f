import { Helmet } from "react-helmet-async";
import { Instagram, ExternalLink } from "lucide-react";
import Navbar from "@/components/Navbar";
import Newsletter from "@/components/Newsletter";
import Footer from "@/components/Footer";
import heroBurger from "@/assets/hero-burger.jpg";

// Using the hero burger image for gallery since we have it
const galleryImages = [
  { src: heroBurger, alt: "Double Smile Burger", caption: "Our signature Double Smile" },
  { src: heroBurger, alt: "Smash in action", caption: "The perfect smash technique" },
  { src: heroBurger, alt: "Cheese pull", caption: "That cheese pull though 🧀" },
  { src: heroBurger, alt: "Pop-up setup", caption: "Ready to serve" },
  { src: heroBurger, alt: "Spicy Double Smile", caption: "Spicy Double Smile with jalapeños" },
  { src: heroBurger, alt: "Happy customer", caption: "Smiles all around" },
];

const GalleryPage = () => {
  return (
    <>
      <Helmet>
        <title>Gallery | Say Cheez Burger - Photo Gallery</title>
        <meta name="description" content="View photos of our delicious wagyu smash burgers, pop-up events, and happy customers. Say Cheez Burger in Irvine, CA." />
      </Helmet>

      <Navbar />

      <main className="pt-24">
        {/* Hero Section */}
        <section className="py-20 bg-pattern relative">
          <div className="container mx-auto px-4 text-center">
            <span className="text-accent font-semibold text-sm tracking-widest uppercase">Visual Feast</span>
            <h1 className="font-display text-6xl md:text-8xl gradient-text mt-2 mb-4">GALLERY</h1>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Feast your eyes on our smash burgers and pop-up moments
            </p>
          </div>
        </section>

        {/* Gallery Grid */}
        <section className="py-16 bg-secondary/20">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
              {galleryImages.map((image, index) => (
                <div
                  key={index}
                  className="group relative overflow-hidden rounded-xl aspect-square animate-fade-in cursor-pointer"
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  <img
                    src={image.src}
                    alt={image.alt}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-background/90 via-background/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  <div className="absolute bottom-0 left-0 right-0 p-6 transform translate-y-full group-hover:translate-y-0 transition-transform duration-300">
                    <p className="font-display text-xl text-foreground">{image.caption}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Instagram CTA */}
        <section className="py-24 bg-pattern">
          <div className="container mx-auto px-4">
            <div className="max-w-3xl mx-auto text-center">
              <div className="inline-flex items-center gap-2 px-4 py-2 bg-primary/10 rounded-full border border-primary/20 mb-6">
                <Instagram className="w-4 h-4 text-primary" />
                <span className="text-primary font-semibold text-sm">FOLLOW US</span>
              </div>
              
              <h2 className="font-display text-5xl md:text-6xl text-primary text-glow mb-4">
                @SAYCHEEZBURGER
              </h2>
              <p className="text-xl text-muted-foreground mb-8">
                Follow us on Instagram for the latest photos, behind-the-scenes content, 
                and to see what we're cooking up next!
              </p>
              
              <a
                href="https://instagram.com/saycheezburger"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-3 px-10 py-5 bg-primary text-primary-foreground font-display text-2xl rounded-lg hover:bg-gold-light transition-all duration-300 shadow-lg hover:shadow-gold animate-pulse-glow"
              >
                <Instagram className="w-7 h-7" />
                FOLLOW ON INSTAGRAM
              </a>
            </div>
          </div>
        </section>

        {/* TikTok CTA */}
        <section className="py-16 bg-secondary/20">
          <div className="container mx-auto px-4">
            <div className="max-w-3xl mx-auto text-center p-8 bg-card rounded-xl border border-border">
              <h2 className="font-display text-4xl text-primary mb-4">WATCH ON TIKTOK</h2>
              <p className="text-muted-foreground mb-6">
                Want to see our burgers being made? Check out our satisfying smash burger videos on TikTok!
              </p>
              <a
                href="https://www.tiktok.com/t/ZTNXmP557"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-8 py-4 border-2 border-primary text-primary font-display text-xl rounded-lg hover:bg-primary/10 transition-all duration-300"
              >
                <ExternalLink className="w-5 h-5" />
                WATCH NOW
              </a>
            </div>
          </div>
        </section>

        {/* User Generated Content */}
        <section className="py-16 bg-pattern">
          <div className="container mx-auto px-4">
            <div className="max-w-2xl mx-auto text-center">
              <h2 className="font-display text-4xl text-primary mb-4">TAG US!</h2>
              <p className="text-muted-foreground mb-4">
                Snap a pic of your burger? We'd love to see it! Tag us <strong className="text-primary">@saycheezburger</strong> or 
                use <strong className="text-accent">#SayCheezBurger</strong> for a chance to be featured.
              </p>
            </div>
          </div>
        </section>

        <Newsletter />
      </main>

      <Footer />
    </>
  );
};

export default GalleryPage;
