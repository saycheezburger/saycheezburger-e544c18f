import { Star, Quote } from "lucide-react";

const testimonials = [
  {
    name: "Sarah M.",
    text: "Best smash burger I've ever had! The wagyu beef is incredibly juicy and the caramelized onions are perfection.",
    rating: 5,
    source: "Yelp",
  },
  {
    name: "Mike R.",
    text: "Worth every penny. The quality is unmatched and you can taste the difference with real wagyu.",
    rating: 5,
    source: "Yelp",
  },
  {
    name: "Jessica T.",
    text: "I drive 30 minutes just for these burgers. The halal certification is a huge plus for my family!",
    rating: 5,
    source: "Google",
  },
  {
    name: "David L.",
    text: "Finally a pop-up that lives up to the hype! The spicy double smile is addictive.",
    rating: 5,
    source: "Instagram",
  },
];

const Testimonials = () => {
  return (
    <section className="py-24 bg-pattern relative">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <span className="text-accent font-semibold text-sm tracking-widest uppercase">What People Say</span>
          <h2 className="font-display text-5xl md:text-7xl gradient-text mt-2 mb-4">
            RAVE REVIEWS
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Don't just take our word for it. Here's what our customers are saying.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-7xl mx-auto">
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className="bg-card rounded-xl p-6 border border-border hover:border-primary/50 transition-all duration-300 group animate-fade-in"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <Quote className="w-8 h-8 text-primary/30 mb-4" />
              
              <div className="flex gap-1 mb-4">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star key={i} className="w-4 h-4 fill-accent text-accent" />
                ))}
              </div>
              
              <p className="text-foreground mb-6 leading-relaxed">
                "{testimonial.text}"
              </p>
              
              <div className="flex items-center justify-between pt-4 border-t border-border">
                <span className="font-semibold text-foreground">{testimonial.name}</span>
                <span className="text-sm text-muted-foreground">{testimonial.source}</span>
              </div>
            </div>
          ))}
        </div>

        {/* CTA */}
        <div className="text-center mt-12">
          <a
            href="https://www.yelp.com/biz/say-cheez-burger-irvine"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-6 py-3 border-2 border-primary text-primary font-display text-lg rounded-lg hover:bg-primary/10 transition-all duration-300"
          >
            <Star className="w-5 h-5" />
            LEAVE A REVIEW
          </a>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
