import { Flame } from "lucide-react";

const menuItems = [
  {
    name: "DOUBLE SMILE",
    code: "2X2",
    price: 12,
    description: "2 Smashed Patties, Cheese, Grilled Onions, Pickles, House Sauce",
    spicy: false,
    featured: true,
  },
  {
    name: "SPICY DOUBLE SMILE",
    code: "2X2",
    price: 13,
    description: "2 Smashed Patties, Cheese, Grilled Onions, Raw Jalapenos, House Sauce",
    spicy: true,
    featured: true,
  },
];

const sides = [
  { name: "FRIES", price: 4 },
  { name: "DRINK", price: 3 },
  { name: "WATER", price: 2 },
  { name: "SAUCE", price: 0.5 },
];

const Menu = () => {
  return (
    <section id="menu" className="py-24 bg-pattern relative">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="font-display text-6xl md:text-8xl gradient-text mb-4">MENU</h2>
          <p className="text-xl text-muted-foreground font-display tracking-widest">
            100% WAGYU BEEF
          </p>
        </div>

        {/* Main Items */}
        <div className="max-w-4xl mx-auto space-y-6 mb-16">
          {menuItems.map((item, index) => (
            <div
              key={item.name}
              className="bg-card rounded-xl p-6 md:p-8 neon-border transition-all duration-300 hover:scale-[1.02] animate-fade-in"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
                <div className="flex-1">
                  <div className="flex items-center gap-3 mb-2">
                    <span className="text-accent font-display text-2xl">{item.code}</span>
                    <h3 className={`font-display text-3xl md:text-4xl ${item.spicy ? 'text-accent' : 'text-primary'}`}>
                      {item.name}
                    </h3>
                    {item.spicy && <Flame className="w-6 h-6 text-accent animate-pulse" />}
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

        {/* Sides Grid */}
        <div className="max-w-4xl mx-auto">
          <h3 className="font-display text-3xl text-primary text-center mb-8">SIDES & EXTRAS</h3>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {sides.map((side, index) => (
              <div
                key={side.name}
                className="bg-card/50 rounded-lg p-4 text-center border border-border hover:border-primary/50 transition-colors animate-fade-in"
                style={{ animationDelay: `${0.3 + index * 0.1}s` }}
              >
                <h4 className="font-display text-xl text-foreground mb-2">{side.name}</h4>
                <p className="font-display text-2xl text-primary">${side.price.toFixed(2)}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Menu;
