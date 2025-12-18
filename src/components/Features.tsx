import { Beef, Award, Clock, Heart } from "lucide-react";

const features = [
  {
    icon: Beef,
    title: "100% WAGYU",
    description: "Premium wagyu beef sourced from trusted suppliers for the perfect smash patty.",
    color: "text-primary",
  },
  {
    icon: Award,
    title: "HALAL CERTIFIED",
    description: "All our meat is halal certified, ensuring quality you can trust.",
    color: "text-accent",
  },
  {
    icon: Clock,
    title: "MADE FRESH",
    description: "Every burger is made to order. We never pre-cook. Fresh is the only way.",
    color: "text-primary",
  },
  {
    icon: Heart,
    title: "MADE WITH LOVE",
    description: "Family recipes and passion in every bite. Taste the difference.",
    color: "text-accent",
  },
];

const Features = () => {
  return (
    <section className="py-24 bg-secondary/20 relative">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-6xl mx-auto">
          {features.map((feature, index) => (
            <div
              key={feature.title}
              className="text-center p-8 rounded-xl bg-card/50 border border-border hover:border-primary/50 transition-all duration-300 group animate-fade-in"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className={`inline-flex p-4 rounded-full bg-card mb-6 group-hover:scale-110 transition-transform ${feature.color}`}>
                <feature.icon className="w-8 h-8" />
              </div>
              <h3 className="font-display text-2xl text-foreground mb-3">{feature.title}</h3>
              <p className="text-muted-foreground leading-relaxed">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;
