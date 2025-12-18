import { Helmet } from "react-helmet-async";
import { Flame, Star, Leaf } from "lucide-react";
import Navbar from "@/components/Navbar";
import Newsletter from "@/components/Newsletter";
import Footer from "@/components/Footer";

const burgers = [
  {
    name: "DOUBLE SMILE",
    code: "2X2",
    price: 12,
    description: "2 Smashed Patties, American Cheese, Grilled Onions, Pickles, House Sauce on a Brioche Bun",
    spicy: false,
    featured: true,
    popular: true,
  },
  {
    name: "SPICY DOUBLE SMILE",
    code: "2X2",
    price: 13,
    description: "2 Smashed Patties, American Cheese, Grilled Onions, Raw Jalapenos, Spicy House Sauce on a Brioche Bun",
    spicy: true,
    featured: true,
    popular: false,
  },
  {
    name: "SINGLE SMILE",
    code: "1X1",
    price: 9,
    description: "1 Smashed Patty, American Cheese, Grilled Onions, Pickles, House Sauce on a Brioche Bun",
    spicy: false,
    featured: false,
    popular: false,
  },
];

const sides = [
  { name: "LOADED FRIES", price: 6, description: "Crispy fries topped with cheese sauce and green onions" },
  { name: "CLASSIC FRIES", price: 4, description: "Hand-cut, double-fried to perfection" },
  { name: "ONION RINGS", price: 5, description: "Beer-battered and crispy" },
];

const drinks = [
  { name: "CRAFT SODA", price: 3, description: "Assorted premium sodas" },
  { name: "BOTTLED WATER", price: 2, description: "Ice cold" },
  { name: "FRESH LEMONADE", price: 4, description: "House-made with real lemons" },
];

const extras = [
  { name: "Extra Patty", price: 4 },
  { name: "Extra Cheese", price: 1 },
  { name: "Grilled Onions", price: 0.5 },
  { name: "Jalapenos", price: 0.5 },
  { name: "House Sauce", price: 0.5 },
];

const MenuPage = () => {
  return (
    <>
      <Helmet>
        <title>Menu | Say Cheez Burger - Wagyu Smash Burgers</title>
        <meta name="description" content="View our full menu of premium wagyu smash burgers, loaded fries, and refreshing drinks. 100% Halal certified." />
      </Helmet>

      <Navbar />
      
      <main className="pt-24">
        {/* Hero Section */}
        <section className="py-20 bg-pattern relative">
          <div className="container mx-auto px-4 text-center">
            <span className="text-accent font-semibold text-sm tracking-widest uppercase">Our Menu</span>
            <h1 className="font-display text-6xl md:text-8xl gradient-text mt-2 mb-4">MENU</h1>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Premium 100% Wagyu beef, halal certified, made fresh to order
            </p>
          </div>
        </section>

        {/* Burgers Section */}
        <section className="py-16 bg-secondary/20">
          <div className="container mx-auto px-4">
            <h2 className="font-display text-4xl md:text-5xl text-primary text-center mb-12">
              SMASH BURGERS
            </h2>
            
            <div className="max-w-4xl mx-auto space-y-6">
              {burgers.map((item, index) => (
                <div
                  key={item.name}
                  className={`bg-card rounded-xl p-6 md:p-8 transition-all duration-300 hover:scale-[1.02] animate-fade-in ${
                    item.featured ? "neon-border" : "border border-border"
                  }`}
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
                    <div className="flex-1">
                      <div className="flex items-center gap-3 mb-2 flex-wrap">
                        <span className="text-accent font-display text-2xl">{item.code}</span>
                        <h3 className={`font-display text-3xl md:text-4xl ${item.spicy ? 'text-accent' : 'text-primary'}`}>
                          {item.name}
                        </h3>
                        {item.spicy && <Flame className="w-6 h-6 text-accent animate-pulse" />}
                        {item.popular && (
                          <span className="px-3 py-1 bg-primary/10 text-primary text-sm font-semibold rounded-full flex items-center gap-1">
                            <Star className="w-3 h-3 fill-primary" /> POPULAR
                          </span>
                        )}
                      </div>
                      <p className="text-muted-foreground text-sm md:text-base">{item.description}</p>
                    </div>
                    <div className="text-right">
                      <span className="font-display text-5xl text-foreground">${item.price}</span>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Sides & Drinks */}
        <section className="py-16 bg-pattern">
          <div className="container mx-auto px-4">
            <div className="max-w-5xl mx-auto grid md:grid-cols-2 gap-12">
              {/* Sides */}
              <div>
                <h2 className="font-display text-4xl text-primary mb-8 text-center md:text-left">SIDES</h2>
                <div className="space-y-4">
                  {sides.map((item, index) => (
                    <div
                      key={item.name}
                      className="flex items-center justify-between p-4 bg-card rounded-lg border border-border hover:border-primary/50 transition-colors animate-fade-in"
                      style={{ animationDelay: `${index * 0.1}s` }}
                    >
                      <div>
                        <h4 className="font-display text-xl text-foreground">{item.name}</h4>
                        <p className="text-sm text-muted-foreground">{item.description}</p>
                      </div>
                      <span className="font-display text-2xl text-primary">${item.price}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Drinks */}
              <div>
                <h2 className="font-display text-4xl text-primary mb-8 text-center md:text-left">DRINKS</h2>
                <div className="space-y-4">
                  {drinks.map((item, index) => (
                    <div
                      key={item.name}
                      className="flex items-center justify-between p-4 bg-card rounded-lg border border-border hover:border-primary/50 transition-colors animate-fade-in"
                      style={{ animationDelay: `${0.3 + index * 0.1}s` }}
                    >
                      <div>
                        <h4 className="font-display text-xl text-foreground">{item.name}</h4>
                        <p className="text-sm text-muted-foreground">{item.description}</p>
                      </div>
                      <span className="font-display text-2xl text-primary">${item.price}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Extras */}
        <section className="py-16 bg-secondary/20">
          <div className="container mx-auto px-4">
            <h2 className="font-display text-4xl text-primary text-center mb-8">ADD-ONS & EXTRAS</h2>
            <div className="max-w-3xl mx-auto grid grid-cols-2 md:grid-cols-5 gap-4">
              {extras.map((item, index) => (
                <div
                  key={item.name}
                  className="text-center p-4 bg-card rounded-lg border border-border animate-fade-in"
                  style={{ animationDelay: `${index * 0.05}s` }}
                >
                  <h4 className="font-display text-lg text-foreground mb-2">{item.name}</h4>
                  <span className="font-display text-xl text-primary">+${item.price.toFixed(2)}</span>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Dietary Info */}
        <section className="py-12 bg-pattern">
          <div className="container mx-auto px-4">
            <div className="max-w-3xl mx-auto text-center">
              <div className="inline-flex items-center gap-2 px-4 py-2 bg-primary/10 rounded-full border border-primary/20 mb-4">
                <Leaf className="w-4 h-4 text-primary" />
                <span className="text-primary font-semibold text-sm">DIETARY INFO</span>
              </div>
              <p className="text-muted-foreground">
                All our beef is <strong className="text-foreground">100% Halal Certified</strong> and we use{" "}
                <strong className="text-foreground">Premium Wagyu Beef</strong>. Please inform us of any allergies.
                Buns contain gluten and dairy.
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

export default MenuPage;
